from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
    Float,
    ForeignKey,
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
    company_id = Column(Integer, ForeignKey("company.id"))
    value = Column(Float)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "company_id": self.company_id,
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
            # verify if company exists
            from models import Company

            if not Company.get(company_id):
                abort(404, message="Seguradora não encontrada.")
            # verify if rate exists
            rate = (
                db_session.query(Rate)
                .filter(
                    Rate.company_id == company_id,
                    Rate.value == value,
                    Rate.deleted == False,
                )
                .first()
            )
            if rate:
                return {
                    "status": "error",
                    "message": "Taxa já existente.",
                    "ratee": rate.to_dict(),
                }
            datetime = current_date_time()
            rate = Rate(
                company_id=company_id,
                value=value,
                created_at=datetime,
            )
            db_session.add(rate)
            db_session.commit()
            # get last rate inserted id by created_at
            rate = (
                db_session.query(Rate)
                .filter(
                    Rate.company_id == company_id,
                    Rate.created_at == datetime,
                    Rate.deleted == False,
                )
                .first()
            )
            return {
                "status": "success",
                "message": "Taxa registada com sucesso.",
                "rate": rate.to_dict(),
            }

    @staticmethod  # done
    def post(company_id=None):
        with DB_Session() as db_session:
            categories = (
                db_session.query(Rate)
                .filter(
                    Rate.company_id == company_id if company_id else True,
                    Rate.deleted == False,
                )
                .order_by(desc(Rate.id))
                .all()
            )
            return categories

    @staticmethod  # done
    def get_by_coverage(
        company_id,
        category_id,
        insurance_id,
        insurance_type_id,
        policy_type_id,
        coverage_id,
        age=None,
    ):
        with DB_Session() as db_session:
            from models import Coverage_RateCondition
            from models import Coverage
            from models import Condition
            from models import Cpt_Coverage
            from models import Ciip_PolicyType
            from models import Ciip

            rate = (
                db_session.query(Rate)
                .outerjoin(
                    Coverage_RateCondition, Coverage_RateCondition.rate_id == Rate.id
                )
                .outerjoin(Coverage, Coverage_RateCondition.coverage_id == Coverage.id)
                .outerjoin(
                    Condition, Coverage_RateCondition.condition_id == Condition.id
                )
                .outerjoin(Cpt_Coverage, Coverage.id == Cpt_Coverage.coverage_id)
                .outerjoin(
                    Ciip_PolicyType,
                    Cpt_Coverage.ciip__policy_type_id == Ciip_PolicyType.id,
                )
                .outerjoin(Ciip, Ciip_PolicyType.ciip_id == Ciip.id)
                .filter(
                    Rate.company_id == company_id,
                    Coverage.id == coverage_id,
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
                    Ciip_PolicyType.policy_type_id == policy_type_id,
                    Coverage_RateCondition.deleted == False,
                    Coverage.deleted == False,
                    Cpt_Coverage.deleted == False,
                    Ciip_PolicyType.deleted == False,
                    Ciip.deleted == False,
                    Rate.deleted == False,
                )
                .first()
            )
            return rate

    @staticmethod  # done
    def get_by_aggravation(
        company_id,
        category_id,
        insurance_id,
        insurance_type_id,
        policy_type_id,
        aggravation_id,
    ):
        with DB_Session() as db_session:
            from models import Aggravation_Rate
            from models import Aggravation
            from models import Cpt_Aggravation
            from models import Ciip_PolicyType
            from models import Ciip

            rate = (
                db_session.query(Rate)
                .outerjoin(Aggravation_Rate, Rate.id == Aggravation_Rate.rate_id)
                .outerjoin(
                    Aggravation, Aggravation_Rate.aggravation_id == Aggravation.id
                )
                .outerjoin(
                    Cpt_Aggravation, Aggravation.id == Cpt_Aggravation.aggravation_id
                )
                .outerjoin(
                    Ciip_PolicyType,
                    Cpt_Aggravation.ciip__policy_type_id == Ciip_PolicyType.id,
                )
                .outerjoin(Ciip, Ciip_PolicyType.ciip_id == Ciip.id)
                .filter(
                    Rate.company_id == company_id,
                    Aggravation.id == aggravation_id,
                    Ciip.category_id == category_id,
                    Ciip.insurance_id == insurance_id,
                    Ciip.insurance_type_id == insurance_type_id,
                    Ciip_PolicyType.policy_type_id == policy_type_id,
                    Aggravation_Rate.deleted == False,
                    Aggravation.deleted == False,
                    Cpt_Aggravation.deleted == False,
                    Ciip_PolicyType.deleted == False,
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
