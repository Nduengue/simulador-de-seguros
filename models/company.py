from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
    DateTime,
)
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Company(Base):
    __tablename__ = "company"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            company = (
                db_session.query(Company)
                .filter(Company.id == id, Company.deleted == False)
                .first()
            )
            return company

    @staticmethod
    def put(name, email):
        with DB_Session() as db_session:
            # verify if company exists
            company = db_session.query(Company).filter(Company.name == name).first()
            if company:
                return {
                    "status": "error",
                    "message": "Segurado já existe.",
                    "company": company.to_dict(),
                }
            company = Company(name=name, email=email, created_at=current_date_time())
            db_session.add(company)
            db_session.commit()
            # get last company
            company = db_session.query(Company).order_by(Company.id.desc()).first()
            return {
                "status": "success",
                "message": "Segurado registada com sucesso.",
                "company": company.to_dict(),
            }

    @staticmethod
    def post():
        with DB_Session() as db_session:
            companies = db_session.query(Company).filter(Company.deleted == False).all()
            return companies

    @staticmethod
    def patch(id, name, email):
        with DB_Session() as db_session:
            company = (
                db_session.query(Company)
                .filter(Company.id == id, Company.deleted == False)
                .first()
            )
            company.name = name
            company.email = email
            company.updated_at = current_date_time()
            db_session.commit()
            return {
                "status": "success",
                "message": "Informações da seguradora atualizadas com sucesso.",
                "company": company.to_dict(),
            }


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
