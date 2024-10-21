from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class PolicyType(Base):
    __tablename__ = "policy_type"

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
            "icon": self.icon,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            policy_type = (
                db_session.query(PolicyType)
                .filter(
                    PolicyType.id == id,
                    PolicyType.deleted == False,
                )
                .first()
            )
            return policy_type

    @staticmethod  # done
    def put(name):
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
            datetime = (current_date_time(),)
            policy_type = PolicyType(
                name=name,
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
    def post(category_id=None, insurance_id=None, insurance_type_id=None):
        with DB_Session() as db_session:
            from models import Ciip_Pt
            from models import Ciip

            policy_types = (
                db_session.query(PolicyType)
                .outerjoin(Ciip_Pt, PolicyType.id == Ciip_Pt.policy_type_id)
                .outerjoin(Ciip, Ciip_Pt.ciip_id == Ciip.id)
                .filter(
                    (Ciip.category_id == category_id if category_id else True),
                    (Ciip.insurance_id == insurance_id if insurance_id else True),
                    (
                        Ciip.insurance_type_id == insurance_type_id
                        if insurance_type_id
                        else True
                    ),
                    PolicyType.deleted == False,
                )
                .all()
            )
            return policy_types


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
