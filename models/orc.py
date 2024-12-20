from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class ORC(Base):
    __tablename__ = "orc"

    id = Column(Integer, primary_key=True)
    ciip_pt_id = Column(Integer, ForeignKey("ciip_pt.id"))
    company_id = Column(Integer, ForeignKey("company.id"))
    ogo_id = Column(Integer, ForeignKey("ogo.id"))
    rate_id = Column(Integer, ForeignKey("rate.id"))
    condition_id = Column(Integer, ForeignKey("condition.id"))
    valid = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod  # done
    def put(ciip_pt_id, company_id, ogo_id, rate_id, condition_id=None):
        with DB_Session() as db_session:
            # verify if category insurance exists
            orc = (
                db_session.query(ORC)
                .filter(
                    ORC.ciip_pt_id == ciip_pt_id,
                    ORC.company_id == company_id,
                    ORC.ogo_id == ogo_id,
                    ORC.rate_id == rate_id,
                    ORC.condition_id == condition_id,
                    ORC.deleted == False,
                )
                .first()
            )
            if orc:
                return orc
            # verify if category and insurance exists
            from .ciip_pt import Ciip_Pt
            from .company import Company
            from .ogo import OGO
            from .rate import Rate
            from .condition import Condition

            if not Ciip_Pt.get(ciip_pt_id):
                abort(404, message="Ciip_Pt não encontrado.")
            elif not Company.get(company_id):
                abort(404, message="Seguradora não encontrada.")
            elif ogo_id and not OGO.get(ogo_id):
                abort(404, message="Opção não encontrada.")
            elif not Rate.get(rate_id):
                abort(404, message="Taxa não encontrada.")
            elif condition_id and not Condition.get(condition_id):
                abort(404, message="Condição não encontrado.")

            datetime = current_date_time()
            orc = ORC(
                ciip_pt_id=ciip_pt_id,
                company_id=company_id,
                option_id=ogo_id,
                rate_id=rate_id,
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
