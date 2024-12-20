from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime, String, and_
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class OptionGroup(Base):
    __tablename__ = "option_group"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    required = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self, options=False):
        from models import Option

        res = {"id": self.id, "name": self.name, "required": self.required}
        if options:
            options = Option.get(option_group_id=self.id)
            options = [option.to_dict() for option in options]
            res["options"] = options

        return res

    @staticmethod
    def get(get_attr=None, insurance_id=None):
        from .iog import IOG

        with DB_Session() as db_session:
            if get_attr:
                option_group = (
                    db_session.query(OptionGroup)
                    .outerjoin(IOG, IOG.option_group_id == OptionGroup.id)
                    .filter(
                        (
                            OptionGroup.id == get_attr
                            if isinstance(get_attr, int)
                            else OptionGroup.name == get_attr
                        ),
                        (
                            and_(IOG.insurance_id == insurance_id, IOG.deleted == False)
                            if insurance_id
                            else True
                        ),
                        OptionGroup.deleted == False,
                    )
                    .first()
                )
                return option_group

            option_groups = (
                db_session.query(OptionGroup)
                .outerjoin(IOG, IOG.option_group_id == OptionGroup.id)
                .filter(
                    (
                        and_(IOG.insurance_id == insurance_id, IOG.deleted == False)
                        if insurance_id
                        else True
                    ),
                    OptionGroup.deleted == False,
                )
                .order_by(OptionGroup.id)
                .all()
            )
            return option_groups

    @staticmethod  # done
    def post(insurance_id, name, required=False):
        with DB_Session() as db_session:
            # verify if category insurance exists
            option_group = (
                db_session.query(OptionGroup)
                .filter(
                    OptionGroup.insurance_id == insurance_id,
                    OptionGroup.name == name,
                    OptionGroup.deleted == False,
                )
                .first()
            )
            if option_group:
                return {
                    "status": "error",
                    "message": "Grupo de opções já existe.",
                    "option_group": option_group.to_dict(),
                }
            # verify if category and insurance exists
            from .insurance import Insurance

            if not Insurance.get(insurance_id):
                abort(404, message="Seguro não encontrado.")

            datetime = current_date_time()
            option_group = OptionGroup(
                insurance_id=insurance_id,
                name=name,
                required=required,
                created_at=datetime,
            )
            db_session.add(option_group)
            db_session.commit()
            # get last inserted id by created_at
            option_group = (
                db_session.query(OptionGroup)
                .filter(OptionGroup.created_at == datetime)
                .first()
            )
            return {
                "status": "success",
                "message": "Grupo de opções criado com sucesso.",
                "option_group": option_group.to_dict(),
            }

    @staticmethod  # done
    def put(id, insurance_id, name):
        with DB_Session() as db_session:
            # verify if option_group name already exists
            option_group = (
                db_session.query(OptionGroup)
                .filter(
                    OptionGroup.id != id,
                    OptionGroup.name == name,
                    OptionGroup.deleted == False,
                )
                .first()
            )
            if option_group:
                return {
                    "status": "error",
                    "message": "OptionGroup already exists",
                    "option_group": option_group.to_dict(),
                }
            option_group = (
                db_session.query(OptionGroup)
                .filter(OptionGroup.id == id, OptionGroup.deleted == False)
                .first()
            )
            if option_group:
                option_group.insurance_id = insurance_id
                option_group.name = name
                option_group.updated_at = current_date_time()
                db_session.commit()
            else:
                abort(404, message="OptionGroup not found")
            return {
                "status": "success",
                "option_group": option_group.to_dict(),
                "message": "OptionGroup updated successfully",
            }

    @staticmethod  # done
    def delete(id):
        with DB_Session() as db_session:
            option_group = (
                db_session.query(OptionGroup)
                .filter(OptionGroup.id == id, OptionGroup.deleted == False)
                .first()
            )
            if not option_group:
                abort(404, message="OptionGroup not found")

            option_group.deleted = True
            db_session.commit()
            return {"status": "success", "message": "OptionGroup delete successfully"}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
