from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, and_
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class InsuranceType(Base):
    __tablename__ = "insurance_type"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    icon = Column(String)
    description = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "icon": self.icon,
            "description": self.description,
        }

    @staticmethod  # done
    def get(get_str=None, insurance_id=None, category_id=None):
        with DB_Session() as db_session:
            if get_str:
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
                        Ciip.deleted == False if insurance_id or category_id else True,
                    )
                    .order_by(InsuranceType.id)
                    .all()
                )
                return insurance_types

    @staticmethod  # done
    def post(name, description=None, icon=None):
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
                description=description,
                icon=icon,
                created_at=current_date_time(),
            )
            db_session.add(insurance_type)
            db_session.commit()
            insurance_type = InsuranceType.get(insurance_type.name)
            return {"status": "success", "insurance_type": insurance_type.to_dict()}

    @staticmethod  # done
    def put(id, name, description, icon):
        with DB_Session() as db_session:
            # verify if insurance_type name already exists
            insurance_type = (
                db_session.query(InsuranceType)
                .filter(
                    InsuranceType.id != id,
                    InsuranceType.name == name,
                    InsuranceType.deleted == False,
                )
                .first()
            )
            if insurance_type:
                return {
                    "status": "error",
                    "message": "InsuranceType already exists",
                    "insurance_type": insurance_type.to_dict(),
                }
            insurance_type = (
                db_session.query(InsuranceType)
                .filter(InsuranceType.id == id, InsuranceType.deleted == False)
                .first()
            )
            if insurance_type:
                insurance_type.name = name
                insurance_type.description = description
                insurance_type.icon = icon
                insurance_type.updated_at = current_date_time()
                db_session.commit()
            else:
                abort(404, message="InsuranceType not found")
            return {"status": "success", "insurance_type": insurance_type.to_dict()}

    @staticmethod  # done
    def delete(id):
        with DB_Session() as db_session:
            insurance_type = (
                db_session.query(InsuranceType)
                .filter(InsuranceType.id == id, InsuranceType.deleted == False)
                .first()
            )
            if not insurance_type:
                abort(404, message="InsuranceType not found")

            insurance_type.deleted = True
            db_session.commit()
            return {"status": "success", "message": "InsuranceType delete successfully"}
        


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
