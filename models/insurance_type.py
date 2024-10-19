from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, and_
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class InsuranceType(Base):
    __tablename__ = "insurance_type"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    icon = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "icon": self.icon
        }

    @staticmethod  # done
    def get(get_str):
        with DB_Session() as db_session:
            insurance_type = (
                db_session.query(InsuranceType)
                .filter(
                    (
                        (InsuranceType.id == get_str)
                        if type(get_str) == int
                        else InsuranceType.name == get_str
                    ),
                    InsuranceType.deleted == False,
                )
                .first()
            )
            return insurance_type

    @staticmethod  # done
    def put(name):
        with DB_Session() as db_session:
            insurance_type = InsuranceType.get(name)
            if insurance_type:
                return {
                    "status": "error",
                    "message": "Tipo de seguro já cadastrado.",
                    "insurance_type": insurance_type.to_dict(),
                }
            insurance_type = InsuranceType(
                name=name,
                created_at=current_date_time(),
            )
            db_session.add(insurance_type)
            db_session.commit()
            insurance_type = InsuranceType.get(insurance_type.name)
            return {"status": "success", "insurance_type": insurance_type.to_dict()}

    @staticmethod  # done
    def post(insurance_id=None, category_id=None):
        from .ciip import Ciip

        with DB_Session() as db_session:
            insurance_types = (
                db_session.query(InsuranceType)
                .outerjoin(
                    Ciip,
                    InsuranceType.id == Ciip.insurance_type_id,
                )
                .filter(
                    (Ciip.insurance_id == insurance_id if insurance_id else True),
                    (Ciip.category_id == category_id if category_id else True),
                    InsuranceType.deleted == False,
                    Ciip.deleted == False,
                )
                .all()
            )
            return insurance_types


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
