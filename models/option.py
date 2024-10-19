from flask_restful import abort
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, ForeignKey, Integer, Boolean, DateTime, String
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Option(Base):
    __tablename__ = "option"

    id = Column(Integer, primary_key=True)
    insurance_id = Column(Integer, ForeignKey("insurance.id"))
    name = Column(String)
    required = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        from models import Coverage

        coverages = Coverage.post(option_id=self.id)
        coverages = [coverage.to_dict() for coverage in coverages]
        return {
            "id": self.id,
            "insurance_id": self.insurance_id,
            "name": self.name,
            "required": self.required,
            "coverages": coverages,
        }

    @staticmethod
    def get(id):
        with DB_Session() as db_session:
            option = (
                db_session.query(Option)
                .filter(
                    Option.id == id,
                    Option.deleted == False,
                )
                .first()
            )
            return option

    @staticmethod  # done
    def put(insurance_id, name):
        with DB_Session() as db_session:
            # verify if category insurance exists
            option = (
                db_session.query(Option)
                .filter(
                    Option.insurance_id == insurance_id,
                    Option.name == name,
                    Option.deleted == False,
                )
                .first()
            )
            if option:
                return option
            # verify if category and insurance exists
            from .insurance import Insurance

            if not Insurance.get(insurance_id):
                abort(404, message="Seguro não encontrado.")

            datetime = current_date_time()
            option = Option(
                insurance_id=insurance_id,
                name=name,
                created_at=datetime,
            )
            db_session.add(option)
            db_session.commit()
            # get last inserted id by created_at
            option = (
                db_session.query(Option).filter(Option.created_at == datetime).first()
            )
            return option

    @staticmethod
    def post(insurance_id):
        with DB_Session() as db_session:
            options = (
                db_session.query(Option)
                .filter(
                    Option.insurance_id == insurance_id,
                    Option.deleted == False,
                )
                .order_by(Option.id)
                .all()
            )
            return options


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
