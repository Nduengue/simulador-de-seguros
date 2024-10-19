from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Cpt_Aggravation(Base):
    __tablename__ = "cpt_aggravation"

    id = Column(Integer, primary_key=True)
    ciip__policy_type_id = Column(Integer, ForeignKey("ciip__policy_type.id"))
    aggravation_id = Column(Integer, ForeignKey("aggravation.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            cpt_aggravation = (
                db_session.query(Cpt_Aggravation)
                .filter(
                    Cpt_Aggravation.id == id,
                    Cpt_Aggravation.deleted == False,
                )
                .first()
            )
            return cpt_aggravation

    @staticmethod  # done
    def put(ciip__policy_type_id, aggravation_id):
        with DB_Session() as db_session:
            # verify if category insurance exists
            cpt_aggravation = (
                db_session.query(Cpt_Aggravation)
                .filter(
                    Cpt_Aggravation.ciip__policy_type_id == ciip__policy_type_id,
                    Cpt_Aggravation.aggravation_id == aggravation_id,
                    Cpt_Aggravation.deleted == False,
                )
                .first()
            )
            if cpt_aggravation:
                return cpt_aggravation
            # verify if category and insurance exists
            from .ciip__policy_type import Ciip_PolicyType
            from .aggravation import Aggravation

            if not Ciip_PolicyType.get(ciip__policy_type_id):
                abort(404, message="Ciip_PolicyType não encontrado")
            elif not Aggravation.get(aggravation_id):
                abort(404, message="Agravamento não encontrado")

            datetime = current_date_time()
            cpt_aggravation = Cpt_Aggravation(
                ciip__policy_type_id=ciip__policy_type_id,
                aggravation_id=aggravation_id,
                created_at=datetime,
            )
            db_session.add(cpt_aggravation)
            db_session.commit()
            # get last inserted id by created_at
            cpt_aggravation = (
                db_session.query(Cpt_Aggravation)
                .filter(Cpt_Aggravation.created_at == datetime)
                .first()
            )
            return cpt_aggravation


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
