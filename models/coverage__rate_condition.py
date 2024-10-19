from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Coverage_RateCondition(Base):
    __tablename__ = "coverage__rate_condition"

    id = Column(Integer, primary_key=True)
    rate_id = Column(Integer, ForeignKey("rate.id"))
    coverage_id = Column(Integer, ForeignKey("coverage.id"))
    condition_id = Column(Integer, ForeignKey("condition.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod  # done
    def put(coverage_id, rate_id, condition_id=None):
        with DB_Session() as db_session:
            # verify if category insurance exists
            coverage__rate_condition = (
                db_session.query(Coverage_RateCondition)
                .filter(
                    Coverage_RateCondition.rate_id == rate_id,
                    Coverage_RateCondition.coverage_id == coverage_id,
                    Coverage_RateCondition.condition_id == condition_id,
                    Coverage_RateCondition.deleted == False,
                )
                .first()
            )
            if coverage__rate_condition:
                return coverage__rate_condition
            # verify if category and insurance exists
            from .rate import Rate
            from .coverage import Coverage
            from .condition import Condition

            if not Coverage.get(coverage_id):
                abort(404, message="Cobertura não encontrado")
            elif not Rate.get(rate_id):
                abort(404, message="Taxa não encontrada")
            elif condition_id and not Condition.get(condition_id):
                abort(404, message="Condição não encontrado")

            datetime = current_date_time()
            coverage__rate_condition = Coverage_RateCondition(
                rate_id=rate_id,
                coverage_id=coverage_id,
                condition_id=condition_id,
                created_at=datetime,
            )
            db_session.add(coverage__rate_condition)
            db_session.commit()
            # get last inserted id by created_at
            coverage__rate_condition = (
                db_session.query(Coverage_RateCondition)
                .filter(Coverage_RateCondition.created_at == datetime)
                .first()
            )
            return coverage__rate_condition


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
