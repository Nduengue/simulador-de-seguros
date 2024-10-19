from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Aggravation_Rate(Base):
    __tablename__ = "aggravation_rate"

    id = Column(Integer, primary_key=True)
    aggravation_id = Column(Integer, ForeignKey("aggravation.id"))
    rate_id = Column(Integer, ForeignKey("rate.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod  # done
    def put(aggravation_id, rate_id):
        with DB_Session() as db_session:
            # verify if category insurance exists
            aggravation_rate = (
                db_session.query(Aggravation_Rate)
                .filter(
                    Aggravation_Rate.aggravation_id == aggravation_id,
                    Aggravation_Rate.rate_id == rate_id,
                    Aggravation_Rate.deleted == False,
                )
                .first()
            )
            if aggravation_rate:
                return aggravation_rate

            from .rate import Rate
            from .aggravation import Aggravation

            if not Rate.get(rate_id):
                abort(404, message="Taxa não encontrada")
            elif not Aggravation.get(aggravation_id):
                abort(404, message="Agravamento não encontrado")

            datetime = current_date_time()
            aggravation_rate = Aggravation_Rate(
                aggravation_id=aggravation_id,
                rate_id=rate_id,
                created_at=datetime,
            )
            db_session.add(aggravation_rate)
            db_session.commit()
            # get last inserted id by created_at
            aggravation_rate = (
                db_session.query(Aggravation_Rate)
                .filter(Aggravation_Rate.created_at == datetime)
                .first()
            )
            return aggravation_rate


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
