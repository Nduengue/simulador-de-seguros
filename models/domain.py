from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Domain(Base):
    __tablename__ = "domain"

    id = Column(Integer, primary_key=True)
    domain = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "domain": self.domain,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(get_str):
        with DB_Session() as db_session:
            domain = (
                db_session.query(Domain)
                .filter(
                    (
                        (Domain.id == get_str)
                        if type(get_str) == int
                        else Domain.domain == get_str
                    ),
                    Domain.deleted == False,
                )
                .first()
            )
            return domain

    @staticmethod  # done
    def put(domain_):
        with DB_Session() as db_session:
            domain = Domain.get(domain_)
            if domain:
                return domain
            datetime = current_date_time()
            new_domain = Domain(domain=domain_, created_at=datetime)
            db_session.add(new_domain)
            db_session.commit()
            # get last domain
            domain = db_session.query(Domain).order_by(desc(Domain.id)).first()
            return domain

    @staticmethod  # done
    def post(offset=0):
        with DB_Session() as db_session:
            domains = (
                db_session.query(Domain)
                .filter(Domain.deleted == False)
                .offset(offset)
                .limit(20)
                .all()
            )
            return domains


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
