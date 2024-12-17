from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, and_
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
    def get(get_str=None, category_id=None):
        with DB_Session() as db_session:
            if get_str:
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
                .order_by(Insurance.id)
                .all()
            )
            return insurances

    @staticmethod  # done
    def post(name, description=None, icon=None):
        """ Registe a new insurance """
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
    def put(id, name, description, icon):
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
                if description:
                    insurance.description = description
                if icon:
                    insurance.icon = icon
                insurance.updated_at = current_date_time()
                db_session.commit()
            else:
                abort(404, message="Insurance not found")
            return {"status": "success", "insurance": insurance.to_dict()}
        
    @staticmethod
    def patch(id, name, description, icon):
        with DB_Session() as db_session:
            # Verifica se a seguro existe
            insurance = (
                db_session.query(Insurance)
                .filter(Insurance.id == id, Insurance.deleted == False)
                .first()
            )
            if not insurance:
                abort(404, message="Insurance not found")
            # Verifica se o nome da seguro já existe
            if name:
                existing_insurance = (
                    db_session.query(Insurance)
                    .filter(Insurance.id != id, Insurance.name == name, Insurance.deleted == False)
                    .first()
                )
                if existing_insurance:
                    return {
                        "status": "error",
                        "message": "Insurance name already exists",
                        "insurance": existing_insurance.to_dict(),
                    }
                # Atualiza o nome se fornecido
                insurance.name = name
            # Atualiza os outros campos somente se fornecidos
            if description is not None:
                insurance.description = description
            if icon is not None:
                insurance.icon = icon
            
            insurance.updated_at = current_date_time()
            db_session.commit()

            return {"status": "success", "insurance": insurance.to_dict(), "message": "Insurance updated successfully"}

    @staticmethod  # done
    def delete(id):
        with DB_Session() as db_session:
            insurance = (
                db_session.query(Insurance)
                .filter(Insurance.id == id, Insurance.deleted == False)
                .first()
            )
            if not insurance:
                abort(404, message="Insurance not found")

            insurance.deleted = True
            db_session.commit()
            return {"status": "success", "message": "Insurance delete successfully"}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
