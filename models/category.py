from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from .db_connection import Base, DB_Session, engine, logger, Base
from .methods import current_date_time


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    icon = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "icon": self.icon,
            "description": self.description,
        }

    @staticmethod  # done
    def get(get_str):
        with DB_Session() as db_session:
            category = (
                db_session.query(Category)
                .filter(
                    (
                        (Category.id == get_str)
                        if type(get_str) == int
                        else Category.name == get_str
                    ),
                    Category.deleted == False,
                )
                .first()
            )
            return category

    @staticmethod  # done
    def put(name, description=None):
        with DB_Session() as db_session:
            category = Category.get(name)
            if category:
                return {
                    "status": "error",
                    "message": "Categoria já existe.",
                    "category": category.to_dict(),
                }
            datetime = current_date_time()
            category = Category(
                name=name,
                description=description,
                created_at=datetime,
            )
            db_session.add(category)
            db_session.commit()
            category = Category.get(category.name)
            return {
                "status": "success",
                "message": "Categoria registada com sucesso.",
                "category": category.to_dict(),
            }

    @staticmethod  # done
    def post():
        with DB_Session() as db_session:
            categories = (
                db_session.query(Category)
                .filter(Category.deleted == False)
                .order_by(Category.id)
                .all()
            )
            return categories


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
