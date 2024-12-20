from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
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
    name = Column(String)
    description = Column(String)
    abbreviation = Column(String)
    required = Column(Boolean, default=False)
    auto_select = Column(Boolean, default=False)
    selected = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self, option_group_id=None):

        res = {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "abbreviation": self.abbreviation,
            "required": self.required,
            "auto_select": self.auto_select,
            "selected": self.selected,
        }

        from .option_option import Option_Option
        from .ogo import OGO

        taggle_ids = Option_Option.post(self.id)
        if len(taggle_ids) > 0:
            res["taggle_ids"] = taggle_ids

        if option_group_id:
            ogo = OGO.get(option_id=self.id, option_group_id=option_group_id)
            if ogo:
                res["taxed"] = ogo.taxed

        return res

    @staticmethod
    def get(
        get_attr=None, insurance_id=None, option_group_id=None, option_group_name=None
    ):
        with DB_Session() as db_session:
            if get_attr:
                option = (
                    db_session.query(Option)
                    .filter(
                        (
                            Option.id == get_attr
                            if isinstance(get_attr, int)
                            else Option.name == get_attr
                        ),
                        Option.deleted == False,
                    )
                    .first()
                )
                return option

            from models import OGO, OptionGroup, IOG

            options = (
                db_session.query(Option)
                .outerjoin(OGO, Option.id == OGO.option_id)
                .outerjoin(IOG, OGO.iog_id == IOG.id)
                .outerjoin(OptionGroup, IOG.option_group_id == OptionGroup.id)
                .filter(
                    (
                        and_(IOG.insurance_id == insurance_id, IOG.deleted == False)
                        if insurance_id
                        else True
                    ),
                    (
                        and_(
                            OptionGroup.id == option_group_id,
                            OptionGroup.deleted == False,
                        )
                        if option_group_id
                        else True
                    ),
                    (
                        OptionGroup.name == option_group_name
                        if option_group_name
                        else True
                    ),
                    (
                        OptionGroup.deleted == False
                        if insurance_id or option_group_id or option_group_name
                        else True
                    ),
                )
                .order_by(Option.id)
                .all()
            )
            return options

    @staticmethod
    def post(
        name,
        option_group_id=None,
        abbreviation=None,
        required=False,
        description=None,
        auto_select=False,
        selected=False,
    ):
        with DB_Session() as db_session:
            # verify if option name already exists
            from models import OGO
            from models import OptionGroup

            # verify if option group exists if option group id is provided
            if option_group_id:
                option_group = OptionGroup.get(option_group_id)
                if not option_group or option_group.deleted:
                    abort(404, "Grupo de opção não encontrado.")

            option = (
                db_session.query(Option)
                .outerjoin(OGO, OGO.option_id == Option.id)
                .filter(
                    Option.name == name,
                    (
                        and_(OGO.iog_id == option_group_id, OGO.deleted == False)
                        if option_group_id
                        else True
                    ),
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

            datetime = current_date_time()
            new_option = Option(
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

            # create ogo
            if option_group_id:
                OGO.put(option_group_id, option.id)

            response = {
                "status": "success",
                "option": option.to_dict(),
            }

            return response

    @staticmethod
    def patch(
        id,
        name=None,
        description=None,
        abbreviation=None,
        required=None,
        auto_select=None,
        selected=None,
    ):
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
                if name:
                    option.name = name
                if description:
                    option.description = description
                if abbreviation:
                    option.abbreviation = abbreviation
                if required:
                    option.required = required
                if auto_select:
                    option.auto_select = auto_select
                if selected:
                    option.selected = selected
                option.updated_at = current_date_time()
                db_session.commit()
            return {
                "status": "success",
                "option": option.to_dict(),
                "message": "Option updated successfully",
            }

    @staticmethod
    def get_groups(option_id):
        from models import OptionGroup
        from models import OGO

        with DB_Session() as db_session:
            ogs = (
                db_session.query(OptionGroup)
                .outerjoin(OGO, OGO.iog_id == OptionGroup.id)
                .filter(
                    OGO.option_id == option_id,
                    OptionGroup.deleted == False,
                )
                .all()
            )
            return [{"id": og.id, "name": og.name} for og in ogs]

    @staticmethod
    def get_options_id_name_js(ids):
        return [
            {"id": option.id, "name": option.name}
            for option in map(Option.get, sorted(ids))
            if option
        ]

    @staticmethod
    def get_options(ids):
        return [option for option in map(Option.get, sorted(ids)) if option]

    @staticmethod
    def get_options_og_id(ids, option_group_id):
        options = Option.get_options_id_name_js(ids)
        return {"options": options, "option_group_id": option_group_id}

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
            else:
                abort(404, message="Option not found")
            return {"status": "success", "message": "Option deleted successfully"}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
