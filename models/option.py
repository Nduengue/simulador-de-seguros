from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
    ForeignKey,
    String,
    Integer,
    Boolean,
    DateTime,
    and_,
)
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Option(Base):
    __tablename__ = "option"

    id = Column(Integer, primary_key=True)
    o_type_id = Column(Integer, ForeignKey("o_type.id"))
    name = Column(String)
    description = Column(String)
    abbreviation = Column(String)
    required = Column(Boolean, default=False)
    auto_select = Column(Boolean, default=False)
    selected = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        from .option_option import Option_Option

        return {
            "id": self.id,
            "o_type_id": self.o_type_id,
            "name": self.name,
            "description": self.description,
            "abbreviation": self.abbreviation,
            "required": self.required,
            "auto_select": self.auto_select,
            "selected": self.selected,
            "taggle_ids": Option_Option.post(self.id),
        }

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            option = (
                db_session.query(Option)
                .filter(
                    Option.id == id,
                    Option.deleted == False,
                )
                .first()
            )
            return option

    @staticmethod
    def put(
        name,
        o_type_id=None,
        abbreviation=None,
        required=False,
        description=None,
        auto_select=False,
        selected=False,
    ):
        with DB_Session() as db_session:
            # verify if option name already exists for the same policy type
            option = (
                db_session.query(Option)
                .filter(
                    Option.o_type_id == o_type_id,
                    Option.name == name,
                    Option.deleted == False,
                )
                .first()
            )

            if option:
                return {
                    "status": "error",
                    "message": "Opção já existente.",
                    "option": option.to_dict(),
                }
            # verify if option type exists
            from models.o_type import OType

            if o_type_id:
                o_type = OType.get(o_type_id)
                if not o_type:
                    abort(404, message="Tipo de opção não encontrada.")

            datetime = current_date_time()
            new_option = Option(
                o_type_id=o_type_id,
                name=name,
                description=description,
                abbreviation=abbreviation,
                required=required,
                auto_select=auto_select,
                selected=selected,
                created_at=datetime,
            )
            db_session.add(new_option)
            db_session.commit()
            option = (
                db_session.query(Option).filter(Option.created_at == datetime).first()
            )

            response = {
                "status": "success",
                "option": option.to_dict(),
            }

            return response

    @staticmethod
    def post(
        o_type_id=None,
        category_id=None,
        insurance_id=None,
        insurance_type_id=None,
        policy_type_id=None,
        option_group_id=None,
    ):
        with DB_Session() as db_session:
            from models import OType
            from models import Ciip_Pt
            from models import Ciip
            from models import ORC
            from models import OGO

            options = (
                db_session.query(Option)
                .outerjoin(OType, Option.o_type_id == OType.id)
                .outerjoin(ORC, Option.id == ORC.option_id)
                .outerjoin(Ciip_Pt, ORC.ciip_pt_id == Ciip_Pt.id)
                .outerjoin(Ciip, Ciip_Pt.ciip_id == Ciip.id)
                .outerjoin(OGO, Option.id == OGO.option_id)
                .filter(
                    (
                        and_(OType.id == o_type_id, OType.deleted == False)
                        if o_type_id
                        else True
                    ),
                    (
                        and_(
                            Ciip_Pt.policy_type_id == policy_type_id,
                            Ciip_Pt.deleted == False,
                        )
                        if policy_type_id
                        else True
                    ),
                    (
                        and_(
                            Ciip.category_id == category_id,
                            Ciip.deleted == False,
                        )
                        if category_id
                        else True
                    ),
                    (Ciip.insurance_id == insurance_id if insurance_id else True),
                    (
                        Ciip.insurance_type_id == insurance_type_id
                        if insurance_type_id
                        else True
                    ),
                    (
                        and_(
                            OGO.option_group_id == option_group_id,
                            OGO.deleted == False,
                        )
                        if option_group_id
                        else True
                    ),
                    Option.deleted == False,
                )
                .order_by(Option.id)
                .all()
            )
            return options

    @staticmethod
    def delete(id):
        with DB_Session() as db_session:
            option = (
                db_session.query(Option)
                .filter(Option.id == id, Option.deleted == False)
                .first()
            )
            if option:
                option.deleted = True
                db_session.commit()
            return {"status": "success"}

    @staticmethod
    def patch(id, name):
        with DB_Session() as db_session:
            option = (
                db_session.query(Option)
                .filter(
                    Option.id != id,
                    Option.name == name,
                    Option.deleted == False,
                )
                .first()
            )
            if option:
                return {
                    "status": "error",
                    "message": "Coverage already exists",
                    "option": option.to_dict(),
                }
            option = (
                db_session.query(Option)
                .filter(Option.id == id, Option.deleted == False)
                .first()
            )
            if option:
                option.name = name
                option.updated_at = current_date_time()
                db_session.commit()
            return {"status": "success", "option": option.to_dict()}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
