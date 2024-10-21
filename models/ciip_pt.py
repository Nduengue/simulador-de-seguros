from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Ciip_Pt(Base):
    __tablename__ = "ciip_pt"

    id = Column(Integer, primary_key=True)
    ciip_id = Column(Integer, ForeignKey("ciip.id"))
    policy_type_id = Column(Integer, ForeignKey("policy_type.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            ciip_pt = (
                db_session.query(Ciip_Pt)
                .filter(
                    Ciip_Pt.id == id,
                    Ciip_Pt.deleted == False,
                )
                .first()
            )
            return ciip_pt

    @staticmethod  # done
    def put(ciip_id, policy_type_id):
        with DB_Session() as db_session:
            # verify if category insurance exists
            ciip_pt = (
                db_session.query(Ciip_Pt)
                .filter(
                    Ciip_Pt.ciip_id == ciip_id,
                    Ciip_Pt.policy_type_id == policy_type_id,
                    Ciip_Pt.deleted == False,
                )
                .first()
            )
            if ciip_pt:
                return ciip_pt
            # verify if category and insurance exists
            from .ciip import Ciip
            from .policy_type import PolicyType

            if not Ciip.get(ciip_id):
                abort(404, message="Cobertura não encontrado")
            elif not PolicyType.get(policy_type_id):
                abort(404, message="Tipo de apólice não encontrado")

            datetime = current_date_time()
            ciip_pt = Ciip_Pt(
                ciip_id=ciip_id,
                policy_type_id=policy_type_id,
                created_at=datetime,
            )
            db_session.add(ciip_pt)
            db_session.commit()
            # get last inserted id by created_at
            ciip_pt = (
                db_session.query(Ciip_Pt).filter(Ciip_Pt.created_at == datetime).first()
            )
            return ciip_pt


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
