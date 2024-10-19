from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, ForeignKey, Boolean, DateTime, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time

class Aggravation_Aggravation(Base):
    __tablename__ = "aggravation_aggravation"

    id = Column(Integer, primary_key=True)
    aggravation_id = Column(Integer)
    agravation_toggle_id = Column(Integer)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "aggravation_id": self.aggravation_id,
            "agravation_toggle_id": self.agravation_toggle_id,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            aggravation_aggravation = (
                db_session.query(Aggravation_Aggravation)
                .filter(
                    Aggravation_Aggravation.id == id,
                    Aggravation_Aggravation.deleted == False,
                )
                .first()
            )
            return aggravation_aggravation

    @staticmethod
    # recieve aggravation_ids in a list of integers
    def put_all(aggravation_ids):
        aggravation_aggravations = []
        for aggravation_id in aggravation_ids:
            for toggle_id in aggravation_ids:
                if aggravation_id != toggle_id:
                    # save aggravation_aggravation by Aggravation put method
                    aggravation_aggravation = Aggravation_Aggravation.put(
                        aggravation_id, toggle_id
                    )
                    aggravation_aggravations.append(aggravation_aggravation.to_dict())
        return aggravation_aggravations

    @staticmethod  # done
    def put(aggravation_id, agravation_toggle_id):
        with DB_Session() as db_session:
            # verify if aggravation_aggravation already exists
            aggravation_aggravation = (
                db_session.query(Aggravation_Aggravation)
                .filter(
                    Aggravation_Aggravation.aggravation_id == aggravation_id,
                    Aggravation_Aggravation.agravation_toggle_id
                    == agravation_toggle_id,
                    Aggravation_Aggravation.deleted == False,
                )
                .first()
            )
            if aggravation_aggravation:
                return aggravation_aggravation

            datetime = current_date_time()
            new_aggravation_aggravation = Aggravation_Aggravation(
                aggravation_id=aggravation_id,
                agravation_toggle_id=agravation_toggle_id,
                created_at=datetime,
            )
            db_session.add(new_aggravation_aggravation)
            db_session.commit()
            # get last aggravation_aggravation
            aggravation_aggravation = (
                db_session.query(Aggravation_Aggravation)
                .filter(
                    Aggravation_Aggravation.created_at == datetime,
                )
                .first()
            )
            return aggravation_aggravation

    @staticmethod
    def post(aggravation_id):
        with DB_Session() as db_session:
            # get aggravation_aggravations by aggravation_id
            aggravation_aggravations = (
                db_session.query(Aggravation_Aggravation)
                .filter(
                    Aggravation_Aggravation.aggravation_id == aggravation_id,
                    Aggravation_Aggravation.deleted == False,
                )
                .all()
            )
            return [
                int(aggravation_aggravation.agravation_toggle_id)
                for aggravation_aggravation in aggravation_aggravations
            ]


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())