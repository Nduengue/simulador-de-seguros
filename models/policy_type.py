from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, and_
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class PolicyType(Base):
    __tablename__ = "policy_type"

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
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id=None, category_id=None, insurance_id=None, insurance_type_id=None):
        with DB_Session() as db_session:
            if id:
                policy_type = (
                    db_session.query(PolicyType)
                    .filter(
                        PolicyType.id == id,
                        PolicyType.deleted == False,
                    )
                    .first()
                )
                return policy_type

            from models import Ciip_Pt
            from models import Ciip

            policy_types = (
                db_session.query(PolicyType)
                .outerjoin(Ciip_Pt, PolicyType.id == Ciip_Pt.policy_type_id)
                .outerjoin(Ciip, Ciip_Pt.ciip_id == Ciip.id)
                .filter(
                    and_(
                        (Ciip.category_id == category_id if category_id else True),
                        (Ciip.insurance_id == insurance_id if insurance_id else True),
                        (
                            Ciip.insurance_type_id == insurance_type_id
                            if insurance_type_id
                            else True
                        ),
                        Ciip_Pt.deleted == False,
                    ),
                    PolicyType.deleted == False,
                )
                .all()
            )
            return policy_types

    @staticmethod  # done
    def post(name, description=None, icon=None):
        with DB_Session() as db_session:
            # verify if policy_type already exists
            policy_type = (
                db_session.query(PolicyType)
                .filter(
                    PolicyType.name == name,
                    PolicyType.deleted == False,
                )
                .first()
            )
            if policy_type:
                return {
                    "status": "error",
                    "message": "Tipo de apólice já cadastrado.",
                    "policy_type": policy_type.to_dict(),
                }
            datetime = current_date_time()
            policy_type = PolicyType(
                name=name,
                description=description,
                icon=icon,
                created_at=datetime,
            )
            db_session.add(policy_type)
            db_session.commit()
            # get last saved policy_type by datetime
            policy_type = (
                db_session.query(PolicyType)
                .filter(
                    PolicyType.created_at == datetime,
                )
                .first()
            )
            return {"status": "success", "policy_type": policy_type.to_dict()}

    @staticmethod  # done
    def put(id, name, description, icon):
        with DB_Session() as db_session:
            # verify if policy_type name already exists
            policy_type = (
                db_session.query(PolicyType)
                .filter(
                    PolicyType.id != id,
                    PolicyType.name == name,
                    PolicyType.deleted == False,
                )
                .first()
            )
            if policy_type:
                return {
                    "status": "error",
                    "message": "PolicyType already exists",
                    "policy_type": policy_type.to_dict(),
                }
            policy_type = (
                db_session.query(PolicyType)
                .filter(PolicyType.id == id, PolicyType.deleted == False)
                .first()
            )
            if policy_type:
                policy_type.name = name
                policy_type.description = description
                policy_type.icon = icon
                policy_type.updated_at = current_date_time()
                db_session.commit()
            else:
                abort(404, message="PolicyType not found")
            return {"status": "success", "policy_type": policy_type.to_dict(), "message": "PolicyType updated successfully"}

    @staticmethod  # done
    def delete(id):
        with DB_Session() as db_session:
            policy_type = (
                db_session.query(PolicyType)
                .filter(PolicyType.id == id, PolicyType.deleted == False)
                .first()
            )
            if not policy_type:
                abort(404, message="PolicyType not found")

            policy_type.deleted = True
            db_session.commit()
            return {"status": "success", "message": "PolicyType delete successfully"}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
