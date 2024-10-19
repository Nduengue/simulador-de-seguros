from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Cpt_Coverage(Base):
    __tablename__ = "cpt_coverage"

    id = Column(Integer, primary_key=True)
    ciip__policy_type_id = Column(Integer, ForeignKey("ciip__policy_type.id"))
    coverage_id = Column(Integer, ForeignKey("coverage.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            cpt_coverage = (
                db_session.query(Cpt_Coverage)
                .filter(
                    Cpt_Coverage.id == id,
                    Cpt_Coverage.deleted == False,
                )
                .first()
            )
            return cpt_coverage

    @staticmethod  # done
    def put(ciip__policy_type_id, coverage_id):
        with DB_Session() as db_session:
            # verify if category insurance exists
            cpt_coverage = (
                db_session.query(Cpt_Coverage)
                .filter(
                    Cpt_Coverage.ciip__policy_type_id == ciip__policy_type_id,
                    Cpt_Coverage.coverage_id == coverage_id,
                    Cpt_Coverage.deleted == False,
                )
                .first()
            )
            if cpt_coverage:
                return cpt_coverage
            # verify if category and insurance exists
            from .ciip__policy_type import Ciip_PolicyType
            from .coverage import Coverage

            if not Ciip_PolicyType.get(ciip__policy_type_id):
                abort(404, message="Ciip_PolicyType não encontrado")
            elif not Coverage.get(coverage_id):
                abort(404, message="Coverage não encontrado")

            datetime = current_date_time()
            cpt_coverage = Cpt_Coverage(
                ciip__policy_type_id=ciip__policy_type_id,
                coverage_id=coverage_id,
                created_at=datetime,
            )
            db_session.add(cpt_coverage)
            db_session.commit()
            # get last inserted id by created_at
            cpt_coverage = (
                db_session.query(Cpt_Coverage)
                .filter(Cpt_Coverage.created_at == datetime)
                .first()
            )
            return cpt_coverage


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
