from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime, and_, or_
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class OGO(Base):
    __tablename__ = "ogo"

    id = Column(Integer, primary_key=True)
    option_group_id = Column(Integer, ForeignKey("option_group.id"))
    option_id = Column(Integer, ForeignKey("option.id"))
    taxed = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id=None, option_group_id=None, option_id=None):
        with DB_Session() as db_session:
            ogo = (
                db_session.query(OGO)
                .filter(
                    or_(
                        OGO.id == id if id else False,
                        (
                            and_(
                                OGO.option_group_id == option_group_id,
                                OGO.option_id == option_id,
                            )
                            if option_group_id and option_id
                            else False
                        ),
                    ),
                    OGO.deleted == False,
                )
                .first()
            )
            return ogo

    @staticmethod  # done
    def put(option_group_id, option_id):
        with DB_Session() as db_session:
            # verify if category option_group exists
            ogo = (
                db_session.query(OGO)
                .filter(
                    OGO.option_group_id == option_group_id,
                    OGO.option_id == option_id,
                    OGO.deleted == False,
                )
                .first()
            )
            if ogo:
                return ogo
            # verify if category and option_group exists
            from .option_group import OptionGroup
            from .option import Option

            if not OptionGroup.get(option_group_id):
                abort(404, message="Grupo de opções não encontrado.")
            elif not Option.get(option_id):
                abort(404, message="Opção não encontrada.")

            datetime = current_date_time()
            ogo = OGO(
                option_group_id=option_group_id,
                option_id=option_id,
                created_at=datetime,
            )
            db_session.add(ogo)
            db_session.commit()
            # get last inserted id by created_at
            ogo = db_session.query(OGO).filter(OGO.created_at == datetime).first()
            return ogo


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
