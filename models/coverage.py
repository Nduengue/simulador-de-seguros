from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
    DateTime,
    and_,
)
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Coverage(Base):
    __tablename__ = "coverage"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    abbreviation = Column(String)
    required = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "abbreviation": self.abbreviation,
            "required": self.required,
        }

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            coverage = (
                db_session.query(Coverage)
                .filter(
                    Coverage.id == id,
                    Coverage.deleted == False,
                )
                .first()
            )
            return coverage

    @staticmethod
    def put(name, abbreviation=None, required=False):
        with DB_Session() as db_session:
            # verify if coverage name already exists for the same policy type
            coverage = (
                db_session.query(Coverage)
                .filter(
                    Coverage.name == name,
                    Coverage.abbreviation == abbreviation,
                    Coverage.required == required,
                    Coverage.deleted == False,
                )
                .first()
            )

            if coverage:
                return {
                    "status": "error",
                    "message": "Cobertura já existente.",
                    "coverage": coverage.to_dict(),
                }
            datetime = current_date_time()
            new_coverage = Coverage(
                name=name,
                abbreviation=abbreviation,
                required=required,
                created_at=datetime,
            )
            db_session.add(new_coverage)
            db_session.commit()
            coverage = (
                db_session.query(Coverage)
                .filter(Coverage.created_at == datetime)
                .first()
            )

            response = {
                "status": "success",
                "coverage": coverage.to_dict(),
            }

            return response

    @staticmethod
    def post(
        category_id=None,
        insurance_id=None,
        insurance_type_id=None,
        policy_type_id=None,
        option_id=None,
    ):
        with DB_Session() as db_session:
            from models import Cpt_Coverage
            from models import Ciip_PolicyType
            from models import Ciip
            from models import Option_Coverage

            coverages = (
                db_session.query(Coverage)
                .outerjoin(Cpt_Coverage, Coverage.id == Cpt_Coverage.coverage_id)
                .outerjoin(
                    Ciip_PolicyType,
                    Cpt_Coverage.ciip__policy_type_id == Ciip_PolicyType.id,
                )
                .outerjoin(Ciip, Ciip_PolicyType.ciip_id == Ciip.id)
                .outerjoin(Option_Coverage, Coverage.id == Option_Coverage.coverage_id)
                .filter(
                    (
                        and_(
                            Ciip_PolicyType.policy_type_id == policy_type_id,
                            Ciip_PolicyType.deleted == False,
                            Cpt_Coverage.deleted == False,
                        )
                        if policy_type_id
                        else True
                    ),
                    (
                        and_(
                            Ciip.category_id == category_id,
                            Ciip.deleted == False,
                        )
                        if category_id
                        else True
                    ),
                    (Ciip.insurance_id == insurance_id if insurance_id else True),
                    (
                        Ciip.insurance_type_id == insurance_type_id
                        if insurance_type_id
                        else True
                    ),
                    (
                        and_(
                            Option_Coverage.option_id == option_id,
                            Option_Coverage.deleted == False,
                        )
                        if option_id
                        else True
                    ),
                    Coverage.deleted == False,
                )
                .order_by(Coverage.id)
                .all()
            )
            return coverages

    @staticmethod
    def delete(id):
        with DB_Session() as db_session:
            coverage = (
                db_session.query(Coverage)
                .filter(Coverage.id == id, Coverage.deleted == False)
                .first()
            )
            if coverage:
                coverage.deleted = True
                db_session.commit()
            return {"status": "success"}

    @staticmethod
    def patch(id, name):
        with DB_Session() as db_session:
            coverage = (
                db_session.query(Coverage)
                .filter(
                    Coverage.id != id,
                    Coverage.name == name,
                    Coverage.deleted == False,
                )
                .first()
            )
            if coverage:
                return {
                    "status": "error",
                    "message": "Coverage already exists",
                    "coverage": coverage.to_dict(),
                }
            coverage = (
                db_session.query(Coverage)
                .filter(Coverage.id == id, Coverage.deleted == False)
                .first()
            )
            if coverage:
                coverage.name = name
                coverage.updated_at = current_date_time()
                db_session.commit()
            return {"status": "success", "coverage": coverage.to_dict()}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
