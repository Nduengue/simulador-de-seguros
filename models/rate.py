from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
    Float,
    Integer,
    Boolean,
    DateTime,
    and_,
    cast,
    desc,
)
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Rate(Base):
    __tablename__ = "rate"

    id = Column(Integer, primary_key=True)
    value = Column(Float)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "value": self.value,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            rate = (
                db_session.query(Rate)
                .filter(
                    Rate.id == id,
                    Rate.deleted == False,
                )
                .first()
            )
            return rate

    @staticmethod  # done
    def put(value):
        with DB_Session() as db_session:
            # verify if rate exists
            rate = (
                db_session.query(Rate)
                .filter(
                    Rate.value == value,
                    Rate.deleted == False,
                )
                .first()
            )
            if rate:
                return rate
            datetime = current_date_time()
            rate = Rate(
                value=value,
                created_at=datetime,
            )
            db_session.add(rate)
            db_session.commit()
            # get last rate inserted id by created_at
            rate = db_session.query(Rate).filter(Rate.created_at == datetime).first()
            return rate

    @staticmethod  # done
    def post(option_id, company_id=None):
        with DB_Session() as db_session:
            from models import ORC

            rates = (
                db_session.query(Rate)
                .outerjoin(ORC, ORC.rate_id == Rate.id)
                .filter(
                    ORC.option_id == option_id,
                    ORC.company_id == company_id if company_id else True,
                    ORC.deleted == False,
                    Rate.deleted == False,
                )
                .order_by(desc(Rate.id))
                .all()
            )
            return rates

    @staticmethod  # done
    def get_by_option(
        company_id,
        category_id,
        insurance_id,
        insurance_type_id,
        policy_type_id,
        option_id,
        age=None,
    ):
        with DB_Session() as db_session:
            from models import ORC
            from models import Condition
            from models import Ciip_Pt
            from models import Ciip

            rate = (
                db_session.query(Rate)
                .outerjoin(ORC, ORC.rate_id == Rate.id)
                .outerjoin(Condition, ORC.condition_id == Condition.id)
                .outerjoin(Ciip_Pt, ORC.ciip_pt_id == Ciip_Pt.id)
                .outerjoin(Ciip, Ciip_Pt.ciip_id == Ciip.id)
                .filter(
                    ORC.company_id == company_id,
                    (
                        ORC.option_id == option_id
                        if type(option_id) == int
                        else (Condition.second_value == option_id)
                    ),
                    (
                        and_(
                            cast(Condition.first_value, Integer) <= age,
                            cast(Condition.second_value, Integer) >= age,
                            Condition.deleted == False,
                        )
                        if age
                        else True
                    ),
                    Ciip.category_id == category_id,
                    Ciip.insurance_id == insurance_id,
                    Ciip.insurance_type_id == insurance_type_id,
                    Ciip_Pt.policy_type_id == policy_type_id,
                    Ciip_Pt.deleted == False,
                    Ciip.deleted == False,
                    ORC.deleted == False,
                    Rate.deleted == False,
                )
                .first()
            )
            return rate


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
