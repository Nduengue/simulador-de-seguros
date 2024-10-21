from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Cpt_Option(Base):
    __tablename__ = "cpt_option"

    id = Column(Integer, primary_key=True)
    ciip_pt_id = Column(Integer, ForeignKey("ciip_pt.id"))
    option_id = Column(Integer, ForeignKey("option.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            cpt_option = (
                db_session.query(Cpt_Option)
                .filter(
                    Cpt_Option.id == id,
                    Cpt_Option.deleted == False,
                )
                .first()
            )
            return cpt_option

    @staticmethod  # done
    def put(ciip_pt_id, option_id):
        with DB_Session() as db_session:
            # verify if category insurance exists
            cpt_option = (
                db_session.query(Cpt_Option)
                .filter(
                    Cpt_Option.ciip_pt_id == ciip_pt_id,
                    Cpt_Option.option_id == option_id,
                    Cpt_Option.deleted == False,
                )
                .first()
            )
            if cpt_option:
                return cpt_option
            # verify if category and insurance exists
            from .ciip_pt import Ciip_Pt
            from .option import Option

            if not Ciip_Pt.get(ciip_pt_id):
                abort(404, message="Ciip_Pt não encontrado")
            elif not Option.get(option_id):
                abort(404, message="Option não encontrado")

            datetime = current_date_time()
            cpt_option = Cpt_Option(
                ciip_pt_id=ciip_pt_id,
                option_id=option_id,
                created_at=datetime,
            )
            db_session.add(cpt_option)
            db_session.commit()
            # get last inserted id by created_at
            cpt_option = (
                db_session.query(Cpt_Option)
                .filter(Cpt_Option.created_at == datetime)
                .first()
            )
            return cpt_option


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
