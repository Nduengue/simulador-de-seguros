from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class ORC(Base):
    __tablename__ = "orc"

    id = Column(Integer, primary_key=True)
    option_id = Column(Integer, ForeignKey("option.id"))
    rate_id = Column(Integer, ForeignKey("rate.id"))
    condition_id = Column(Integer, ForeignKey("condition.id"))
    valid = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod  # done
    def put(option_id, rate_id, condition_id=None):
        with DB_Session() as db_session:
            # verify if category insurance exists
            orc = (
                db_session.query(ORC)
                .filter(
                    ORC.rate_id == rate_id,
                    ORC.option_id == option_id,
                    ORC.condition_id == condition_id,
                    ORC.deleted == False,
                )
                .first()
            )
            if orc:
                return orc
            # verify if category and insurance exists
            from .option import Option
            from .rate import Rate
            from .condition import Condition

            if not Option.get(option_id):
                abort(404, message="Opção não encontrada.")
            elif not Rate.get(rate_id):
                abort(404, message="Taxa não encontrada.")
            elif condition_id and not Condition.get(condition_id):
                abort(404, message="Condição não encontrado.")

            datetime = current_date_time()
            orc = ORC(
                rate_id=rate_id,
                option_id=option_id,
                condition_id=condition_id,
                created_at=datetime,
            )
            db_session.add(orc)
            db_session.commit()
            # get last inserted id by created_at
            orc = db_session.query(ORC).filter(ORC.created_at == datetime).first()
            return orc


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
