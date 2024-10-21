from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Company_Rate(Base):
    __tablename__ = "company_rate"

    id = Column(Integer, primary_key=True)
    company_id = Column(Integer, ForeignKey("company.id"))
    rate_id = Column(Integer, ForeignKey("rate.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            company_rate = (
                db_session.query(Company_Rate)
                .filter(
                    Company_Rate.id == id,
                    Company_Rate.deleted == False,
                )
                .first()
            )
            return company_rate

    @staticmethod  # done
    def put(company_id, rate_id=None, rate_value=None):
        with DB_Session() as db_session:
            from .rate import Rate
            if rate_value:
                rate = Rate.put(company_id, rate_value)
                rate_id = rate.id
            # verify if category company exists
            company_rate = (
                db_session.query(Company_Rate)
                .filter(
                    Company_Rate.company_id == company_id,
                    Company_Rate.rate_id == rate_id,
                    Company_Rate.deleted == False,
                )
                .first()
            )
            if company_rate:
                return company_rate
            # verify if category and company exists
            from .company import Company

            if not Company.get(company_id):
                abort(404, message="Seguradora não encontrada.")
            elif not Rate.get(rate_id):
                abort(404, message="Taxa não encontrada.")

            datetime = current_date_time()
            company_rate = Company_Rate(
                company_id=company_id,
                rate_id=rate_id,
                created_at=datetime,
            )
            db_session.add(company_rate)
            db_session.commit()
            # get last inserted id by created_at
            company_rate = (
                db_session.query(Company_Rate)
                .filter(Company_Rate.created_at == datetime)
                .first()
            )
            return company_rate


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar a tabela Company_Rate: ", e._message())
