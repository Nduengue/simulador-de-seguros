from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, Integer, ForeignKey, Boolean, DateTime, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Option_Option(Base):
    __tablename__ = "option_option"

    id = Column(Integer, primary_key=True)
    option_id = Column(Integer, ForeignKey("option.id"))
    other_id = Column(Integer)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "option_id": self.option_id,
            "other_id": self.other_id,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            option_option = (
                db_session.query(Option_Option)
                .filter(
                    Option_Option.id == id,
                    Option_Option.deleted == False,
                )
                .first()
            )
            return option_option

    @staticmethod
    # recieve other_ids in a list of integers
    def put_all(option_id, other_ids):
        option_options = []
        for other_id in other_ids:
            # save option_option by Coverage put method
            option_option = Option_Option.put(option_id, other_id)
            option_options.append(option_option.to_dict())
        return option_options

    @staticmethod  # done
    def put(option_id, other_id):
        with DB_Session() as db_session:
            # verify if option_option already exists
            option_option = (
                db_session.query(Option_Option)
                .filter(
                    Option_Option.option_id == option_id,
                    Option_Option.other_id == other_id,
                    Option_Option.deleted == False,
                )
                .first()
            )
            if option_option:
                return option_option

            datetime = current_date_time()
            new_option_option = Option_Option(
                option_id=option_id,
                other_id=other_id,
                created_at=datetime,
            )
            db_session.add(new_option_option)
            db_session.commit()
            # get last option_option
            option_option = (
                db_session.query(Option_Option)
                .filter(
                    Option_Option.created_at == datetime,
                )
                .first()
            )
            return option_option

    @staticmethod
    def post(option_id):
        with DB_Session() as db_session:
            # get option_options by option_id
            option_options = (
                db_session.query(Option_Option)
                .filter(
                    Option_Option.option_id == option_id,
                    Option_Option.deleted == False,
                )
                .all()
            )
            return [int(option_option.other_id) for option_option in option_options]


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
