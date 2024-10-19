from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Ciip(Base):
    __tablename__ = "ciip"

    id = Column(Integer, primary_key=True)
    category_id = Column(Integer, ForeignKey("category.id"))
    insurance_id = Column(Integer, ForeignKey("insurance.id"))
    insurance_type_id = Column(Integer, ForeignKey("insurance_type.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            ciip = (
                db_session.query(Ciip)
                .filter(
                    Ciip.id == id,
                    Ciip.deleted == False,
                )
                .first()
            )
            return ciip

    @staticmethod  # done
    def put(category_id, insurance_id, insurance_type_id):
        with DB_Session() as db_session:
            # verify if category insurance exists
            ciip = (
                db_session.query(Ciip)
                .filter(
                    Ciip.category_id == category_id,
                    Ciip.insurance_id == insurance_id,
                    Ciip.insurance_type_id == insurance_type_id,
                    Ciip.deleted == False,
                )
                .first()
            )
            if ciip:
                return ciip
            # verify if category and insurance exists
            from .category import Category
            from .insurance import Insurance
            from .insurance_type import InsuranceType
            if not Category.get(category_id):
                abort(404, message="Categoria não encontrada")
            elif not Insurance.get(insurance_id):
                abort(404, message="Seguro não encontrado")
            elif not InsuranceType.get(insurance_type_id):
                abort(404, message="Tipo de Seguro não encontrado")

            datetime = current_date_time()
            ciip = Ciip(
                category_id=category_id,
                insurance_id=insurance_id,
                insurance_type_id=insurance_type_id,
                created_at=datetime,
            )
            db_session.add(ciip)
            db_session.commit()
            # get last inserted id by created_at
            ciip = (
                db_session.query(Ciip)
                .filter(Ciip.created_at == datetime)
                .first()
            )
            return ciip


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
