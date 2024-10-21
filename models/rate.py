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
    def put(company_id, value):
        with DB_Session() as db_session:
            # verify if rate exists
            from .company_rate import Company_Rate

            rate = (
                db_session.query(Rate)
                .outerjoin(Company_Rate, Rate.id == Company_Rate.rate_id)
                .filter(
                    Company_Rate.company_id == company_id,
                    Rate.value == value,
                    Company_Rate.deleted == False,
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
            # save company_rate
            Company_Rate.put(company_id, rate.id)
            return rate

    @staticmethod  # done
    def post(company_id=None):
        with DB_Session() as db_session:
            from .company_rate import Company_Rate

            categories = (
                db_session.query(Rate)
                .outerjoin(Company_Rate, Rate.id == Company_Rate.rate_id)
                .filter(
                    (
                        and_(
                            Company_Rate.company_id == company_id,
                            Company_Rate.deleted == False,
                        )
                        if company_id
                        else True
                    ),
                    Rate.deleted == False,
                )
                .order_by(desc(Rate.id))
                .all()
            )
            return categories

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
            from models import Option
            from models import Condition
            from models import Cpt_Option
            from models import Ciip_Pt
            from models import Ciip

            rate = (
                db_session.query(Rate)
                .outerjoin(ORC, ORC.rate_id == Rate.id)
                .outerjoin(Option, ORC.option_id == Option.id)
                .outerjoin(Condition, ORC.condition_id == Condition.id)
                .outerjoin(Cpt_Option, Option.id == Cpt_Option.option_id)
                .outerjoin(
                    Ciip_Pt,
                    Cpt_Option.ciip_pt_id == Ciip_Pt.id,
                )
                .outerjoin(Ciip, Ciip_Pt.ciip_id == Ciip.id)
                .filter(
                    Rate.company_id == company_id,
                    Option.id == option_id,
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
                    ORC.deleted == False,
                    Option.deleted == False,
                    Cpt_Option.deleted == False,
                    Ciip_Pt.deleted == False,
                    Ciip.deleted == False,
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
