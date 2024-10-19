from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Condition(Base):
    __tablename__ = "condition"

    id = Column(Integer, primary_key=True)
    first_value = Column(String)
    second_value = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "first_value": self.first_value,
            "second_value": self.second_value,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            condition = (
                db_session.query(Condition)
                .filter(
                    Condition.id == id,
                    Condition.deleted == False,
                )
                .first()
            )
            return condition

    @staticmethod  # done
    def put(first_value, second_value):
        with DB_Session() as db_session:
            datetime = current_date_time()
            condition = Condition(
                first_value=first_value,
                second_value=second_value,
                created_at=datetime,
            )
            db_session.add(condition)
            db_session.commit()
            # get condition
            condition = (
                db_session.query(Condition)
                .filter(
                    Condition.created_at == datetime,
                    Condition.deleted == False,
                )
                .first()
            )
            return {
                "status": "success",
                "message": "Condição registada com sucesso.",
                "condition": condition.to_dict(),
            }

    @staticmethod  # done
    def post(coverage_id=None):
        with DB_Session() as db_session:
            from .coverage__rate_condition import Coverage_RateCondition

            categories = (
                db_session.query(Condition)
                .outerjoin(
                    Coverage_RateCondition,
                    Condition.id == Coverage_RateCondition.condition_id,
                )
                .filter(
                    Coverage_RateCondition.coverage_id == coverage_id,
                    Coverage_RateCondition.deleted == False,
                    Condition.deleted == False,
                )
                .order_by(desc(Condition.id))
                .all()
            )
            return categories


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
