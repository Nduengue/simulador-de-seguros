from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, and_, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Insurance(Base):
    __tablename__ = "insurance"

    id = Column(Integer, primary_key=True)
    domain_id = Column(Integer)
    name = Column(String)
    icon = Column(String)
    description = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        from .route import Route

        # get insurance route
        route = Route.get_by_insurance(self.id)
        return {
            "id": self.id,
            "name": self.name,
            "icon": self.icon,
            "description": self.description,
            "route": route.name if route else None,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(get_str):
        with DB_Session() as db_session:
            insurance = (
                db_session.query(Insurance)
                .filter(
                    (
                        (Insurance.id == get_str)
                        if type(get_str) == int
                        else Insurance.name == get_str
                    ),
                    Insurance.deleted == False,
                )
                .first()
            )
            return insurance

    @staticmethod  # done
    def put(name, description=None, icon=None):
        with DB_Session() as db_session:
            insurance = Insurance.get(name)
            if insurance:
                return {
                    "status": "error",
                    "message": "Seguro já registrado.",
                    "insurance": insurance.to_dict(),
                }
            insurance = Insurance(
                name=name,
                description=description,
                icon=icon,
                created_at=current_date_time(),
            )
            db_session.add(insurance)
            db_session.commit()
            insurance = Insurance.get(insurance.name)
            return {"status": "success", "insurance": insurance.to_dict()}

    @staticmethod  # done
    def post(category_id=None):
        with DB_Session() as db_session:
            from .ciip import Ciip

            insurances = (
                db_session.query(Insurance)
                .outerjoin(Ciip, Insurance.id == Ciip.insurance_id)
                .filter(
                    (
                        and_(Ciip.category_id == category_id, Ciip.deleted == False)
                        if category_id
                        else True
                    ),
                    Insurance.deleted == False,
                )
                .order_by(desc(Insurance.id))
                .all()
            )
            return insurances

    @staticmethod  # done
    def delete(id):
        with DB_Session() as db_session:
            insurance = (
                db_session.query(Insurance)
                .filter(Insurance.id == id, Insurance.deleted == False)
                .first()
            )
            if insurance:
                insurance.deleted = True
                db_session.commit()
            return {"status": "success"}

    @staticmethod  # done
    def patch(id, name):
        with DB_Session() as db_session:
            # verify if insurance name already exists
            insurance = (
                db_session.query(Insurance)
                .filter(
                    Insurance.id != id,
                    Insurance.name == name,
                    Insurance.deleted == False,
                )
                .first()
            )
            if insurance:
                return {
                    "status": "error",
                    "message": "Insurance already exists",
                    "insurance": insurance.to_dict(),
                }
            insurance = (
                db_session.query(Insurance)
                .filter(Insurance.id == id, Insurance.deleted == False)
                .first()
            )
            if insurance:
                insurance.name = name
                insurance.updated_at = current_date_time()
                db_session.commit()
            return {"status": "success", "insurance": insurance.to_dict()}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
