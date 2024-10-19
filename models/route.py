from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, String, Integer, Boolean, DateTime, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Route(Base):
    __tablename__ = "route"

    id = Column(Integer, primary_key=True)
    insurance_id = Column(Integer, ForeignKey("insurance.id"))
    name = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {"id": self.id, "insurance_id": self.insurance_id, "name": self.name}

    @staticmethod  # done
    def get(get_str):
        with DB_Session() as db_session:
            route = (
                db_session.query(Route)
                .filter(
                    (
                        (Route.id == get_str)
                        if type(get_str) == int
                        else Route.name == get_str
                    ),
                    Route.deleted == False,
                )
                .first()
            )
            return route

    @staticmethod  # done
    def get_by_insurance(insurance_id):
        with DB_Session() as db_session:
            route = (
                db_session.query(Route)
                .filter(
                    Route.insurance_id == insurance_id,
                    Route.deleted == False,
                )
                .first()
            )
            return route

    @staticmethod  # done
    def put(insurance_id, name):
        with DB_Session() as db_session:
            route = Route.get(name)
            if route:
                return {
                    "status": "error",
                    "message": "Rota já existente.",
                    "route": route.to_dict(),
                }
            datetime = current_date_time()
            route = Route(
                insurance_id=insurance_id,
                name=name,
                created_at=datetime,
            )
            db_session.add(route)
            db_session.commit()
            route = Route.get(route.name)
            return {
                "status": "success",
                "message": "Rota registada com sucesso.",
                "route": route.to_dict(),
            }

    @staticmethod  # done
    def post():
        with DB_Session() as db_session:
            routes = (
                db_session.query(Route)
                .filter(Route.deleted == False)
                .order_by(Route.id)
                .all()
            )
            return routes


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
