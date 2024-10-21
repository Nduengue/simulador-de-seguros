from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
    DateTime,
    desc,
)
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class OType(Base):
    __tablename__ = "o_type"

    id = Column(Integer, primary_key=True)
    value = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "value": self.value,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            o_type = (
                db_session.query(OType)
                .filter(
                    OType.id == id,
                    OType.deleted == False,
                )
                .first()
            )
            return o_type

    @staticmethod  # done
    def put(value):
        with DB_Session() as db_session:
            # verify if o_type exists
            o_type = (
                db_session.query(OType)
                .filter(
                    OType.value == value,
                    OType.deleted == False,
                )
                .first()
            )
            if o_type:
                return {
                    "status": "error",
                    "message": "Tipo já existente.",
                    "o_type": o_type.to_dict(),
                }
            datetime = current_date_time()
            o_type = OType(
                value=value,
                created_at=datetime,
            )
            db_session.add(o_type)
            db_session.commit()
            # get last o_type inserted id by created_at
            o_type = (
                db_session.query(OType)
                .filter(
                    OType.created_at == datetime,
                    OType.deleted == False,
                )
                .first()
            )
            return {
                "status": "success",
                "message": "Tipo registado com sucesso.",
                "o_type": o_type.to_dict(),
            }

    @staticmethod  # done
    def post():
        with DB_Session() as db_session:
            categories = (
                db_session.query(OType)
                .filter(
                    OType.deleted == False,
                )
                .order_by(desc(OType.id))
                .all()
            )
            return categories


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
