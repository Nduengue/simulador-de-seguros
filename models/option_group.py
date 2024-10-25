from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime, String
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class OptionGroup(Base):
    __tablename__ = "option_group"

    id = Column(Integer, primary_key=True)
    insurance_id = Column(Integer, ForeignKey("insurance.id"))
    name = Column(String)
    required = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        from models import Option

        options = Option.post(option_group_id=self.id)
        options = [option.to_dict() for option in options]
        return {
            "id": self.id,
            "insurance_id": self.insurance_id,
            "name": self.name,
            "required": self.required,
            "options": options,
        }

    @staticmethod
    def get(get_attr, insurance_id=None):
        with DB_Session() as db_session:
            option_group = (
                db_session.query(OptionGroup)
                .filter(
                    (
                        OptionGroup.id == get_attr
                        if isinstance(get_attr, int)
                        else OptionGroup.name == get_attr
                    ),
                    OptionGroup.insurance_id == insurance_id if insurance_id else True,
                    OptionGroup.deleted == False,
                )
                .first()
            )
            return option_group

    @staticmethod  # done
    def put(insurance_id, name, required=False):
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

    @staticmethod
    def post(insurance_id):
        with DB_Session() as db_session:
            option_groups = (
                db_session.query(OptionGroup)
                .filter(
                    OptionGroup.insurance_id == insurance_id,
                    OptionGroup.deleted == False,
                )
                .order_by(OptionGroup.id)
                .all()
            )
            return option_groups


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
