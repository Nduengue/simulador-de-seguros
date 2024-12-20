from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime, String
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class IOG(Base):
    __tablename__ = "iog"

    id = Column(Integer, primary_key=True)
    insurance_id = Column(Integer, ForeignKey("insurance.id"))
    option_group_id = Column(Integer, ForeignKey("option_group.id"))
    description = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod  # done
    def post(insurance_id, option_group_id):
        with DB_Session() as db_session:
            
            iog = (
                db_session.query(IOG)
                .filter(
                    IOG.insurance_id == option_group_id,
                    IOG.option_group_id == insurance_id,
                    IOG.deleted == False,
                )
                .first()
            )
            if iog:
                return iog
            
            from .option_group import OptionGroup
            from .insurance import Insurance

            if not OptionGroup.get(option_group_id):
                abort(404, message="Grupo de opções não encontrado.")
            elif not Insurance.get(insurance_id):
                abort(404, message="Seguro não encontrada.")

            datetime = current_date_time()
            iog = IOG(
                insurance_id=insurance_id,
                option_group_id=option_group_id,
                created_at=datetime,
            )
            db_session.add(iog)
            db_session.commit()
            # get last inserted id by created_at
            iog = db_session.query(IOG).filter(IOG.created_at == datetime).first()
            return iog


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
