from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, Integer, ForeignKey, Boolean, DateTime, desc
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time

class Coverage_Coverage(Base):
    __tablename__ = "coverage_coverage"

    id = Column(Integer, primary_key=True)
    coverage_id = Column(Integer, ForeignKey("coverage.id"))
    other_id = Column(Integer)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "coverage_id": self.coverage_id,
            "other_id": self.other_id,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod  # done
    def get(id):
        with DB_Session() as db_session:
            coverage_coverage = (
                db_session.query(Coverage_Coverage)
                .filter(
                    Coverage_Coverage.id == id,
                    Coverage_Coverage.deleted == False,
                )
                .first()
            )
            return coverage_coverage

    @staticmethod
    # recieve other_ids in a list of integers
    def put_all(coverage_id, other_ids):
        coverage_coverages = []
        for other_id in other_ids:
            # save coverage_coverage by Coverage put method
            coverage_coverage = Coverage_Coverage.put(
                coverage_id, other_id
            )
            coverage_coverages.append(coverage_coverage.to_dict())
        return coverage_coverages

    @staticmethod  # done
    def put(coverage_id, other_id):
        with DB_Session() as db_session:
            # verify if coverage_coverage already exists
            coverage_coverage = (
                db_session.query(Coverage_Coverage)
                .filter(
                    Coverage_Coverage.coverage_id == coverage_id,
                    Coverage_Coverage.other_id
                    == other_id,
                    Coverage_Coverage.deleted == False,
                )
                .first()
            )
            if coverage_coverage:
                return coverage_coverage

            datetime = current_date_time()
            new_coverage_coverage = Coverage_Coverage(
                coverage_id=coverage_id,
                other_id=other_id,
                created_at=datetime,
            )
            db_session.add(new_coverage_coverage)
            db_session.commit()
            # get last coverage_coverage
            coverage_coverage = (
                db_session.query(Coverage_Coverage)
                .filter(
                    Coverage_Coverage.created_at == datetime,
                )
                .first()
            )
            return coverage_coverage

    @staticmethod
    def post(coverage_id):
        with DB_Session() as db_session:
            # get coverage_coverages by coverage_id
            coverage_coverages = (
                db_session.query(Coverage_Coverage)
                .filter(
                    Coverage_Coverage.coverage_id == coverage_id,
                    Coverage_Coverage.deleted == False,
                )
                .all()
            )
            return [
                int(coverage_coverage.other_id)
                for coverage_coverage in coverage_coverages
            ]


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())