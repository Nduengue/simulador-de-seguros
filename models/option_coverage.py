from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime, String
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Option_Coverage(Base):
    __tablename__ = "option_coverage"

    id = Column(Integer, primary_key=True)
    option_id = Column(Integer, ForeignKey("option.id"))
    coverage_id = Column(Integer, ForeignKey("coverage.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            option_coverage = (
                db_session.query(Option_Coverage)
                .filter(
                    Option_Coverage.id == id,
                    Option_Coverage.deleted == False,
                )
                .first()
            )
            return option_coverage

    @staticmethod  # done
    def put(option_id, coverage_id):
        with DB_Session() as db_session:
            # verify if category option exists
            option_coverage = (
                db_session.query(Option_Coverage)
                .filter(
                    Option_Coverage.option_id == option_id,
                    Option_Coverage.coverage_id == coverage_id,
                    Option_Coverage.deleted == False,
                )
                .first()
            )
            if option_coverage:
                return option_coverage
            # verify if category and option exists
            from .option import Option
            from .coverage import Coverage

            if not Option.get(option_id):
                abort(404, message="Opção não encontrado.")
            elif not Coverage.get(coverage_id):
                abort(404, message="Cobertura não encontrada.")

            datetime = current_date_time()
            option_coverage = Option_Coverage(
                option_id=option_id,
                coverage_id=coverage_id,
                created_at=datetime,
            )
            db_session.add(option_coverage)
            db_session.commit()
            # get last inserted id by created_at
            option_coverage = (
                db_session.query(Option_Coverage)
                .filter(Option_Coverage.created_at == datetime)
                .first()
            )
            return option_coverage


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
