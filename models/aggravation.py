from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Aggravation(Base):
    __tablename__ = "aggravation"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        from .aggravation_aggravation import Aggravation_Aggravation

        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "taggle_ids": Aggravation_Aggravation.post(self.id),
        }

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            aggravation = (
                db_session.query(Aggravation)
                .filter(
                    Aggravation.id == id,
                    Aggravation.deleted == False,
                )
                .first()
            )
            return aggravation

    @staticmethod
    def put(name, description=None):
        with DB_Session() as db_session:
            # verify if aggravation already exists by name and ciip_policy_id
            aggravation = (
                db_session.query(Aggravation)
                .filter(
                    Aggravation.name == name,
                    Aggravation.deleted == False,
                )
                .first()
            )
            if aggravation:
                return {
                    "status": "error",
                    "message": "Aggravation already exists",
                    "aggravation": aggravation.to_dict(),
                }

            datetime = current_date_time()
            new_aggravation = Aggravation(
                name=name,
                description=description,
                created_at=datetime,
            )
            db_session.add(new_aggravation)
            db_session.commit()
            # get new aggravation from db by created_at
            aggravation = (
                db_session.query(Aggravation)
                .filter(Aggravation.created_at == datetime)
                .first()
            )
            return {"status": "success", "aggravation": aggravation.to_dict()}

    @staticmethod
    @staticmethod
    def post(
        category_id=None, insurance_id=None, insurance_type_id=None, policy_type_id=None
    ):
        with DB_Session() as db_session:
            from models import Cpt_Aggravation
            from models import Ciip_PolicyType
            from models import Ciip

            aggravations = (
                db_session.query(Aggravation)
                .outerjoin(
                    Cpt_Aggravation, Aggravation.id == Cpt_Aggravation.aggravation_id
                )
                .outerjoin(
                    Ciip_PolicyType,
                    Cpt_Aggravation.ciip__policy_type_id == Ciip_PolicyType.id,
                )
                .outerjoin(Ciip, Ciip_PolicyType.ciip_id == Ciip.id)
                .filter(
                    (
                        Ciip_PolicyType.policy_type_id == policy_type_id
                        if policy_type_id
                        else True
                    ),
                    (Ciip.category_id == category_id if category_id else True),
                    (Ciip.insurance_id == insurance_id if insurance_id else True),
                    (
                        Ciip.insurance_type_id == insurance_type_id
                        if insurance_type_id
                        else True
                    ),
                    Ciip_PolicyType.deleted == False,
                    Ciip.deleted == False,
                    Aggravation.deleted == False,
                )
                .all()
            )
            return aggravations

    @staticmethod
    def delete(id):
        with DB_Session() as db_session:
            aggravation = (
                db_session.query(Aggravation)
                .filter(Aggravation.id == id, Aggravation.deleted == False)
                .first()
            )
            if aggravation:
                aggravation.deleted = True
                db_session.commit()
            return {"status": "success"}

    @staticmethod
    def patch(id, name, rate_percentage):
        with DB_Session() as db_session:
            aggravation = (
                db_session.query(Aggravation)
                .filter(
                    Aggravation.id != id,
                    Aggravation.name == name,
                    Aggravation.deleted == False,
                )
                .first()
            )
            if aggravation:
                return {
                    "status": "error",
                    "message": "Aggravation already exists",
                    "aggravation": aggravation.to_dict(),
                }
            aggravation = (
                db_session.query(Aggravation)
                .filter(Aggravation.id == id, Aggravation.deleted == False)
                .first()
            )
            if aggravation:
                aggravation.name = name
                aggravation.updated_at = current_date_time()
                db_session.commit()
            return {"status": "success", "aggravation": aggravation.to_dict()}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
