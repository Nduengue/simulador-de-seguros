from flask_restful import abort
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
    def get(get_str=None):
        with DB_Session() as db_session:
            if get_str:
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
            
            categories = (
                db_session.query(Category)
                .filter(Category.deleted == False)
                .order_by(Category.id)
                .all()
            )
            return categories

    @staticmethod  # done
    def post(name, description=None, icon=None):
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
                icon=icon,
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
    def put(id, name, description, icon):
        with DB_Session() as db_session:
            # verify if category name already exists
            category = (
                db_session.query(Category)
                .filter(
                    Category.id != id,
                    Category.name == name,
                    Category.deleted == False,
                )
                .first()
            )
            if category:
                return {
                    "status": "error",
                    "message": "Category already exists",
                    "category": category.to_dict(),
                }
            category = (
                db_session.query(Category)
                .filter(Category.id == id, Category.deleted == False)
                .first()
            )
            if category:
                category.name = name
                category.description = description
                category.icon = icon
                category.updated_at = current_date_time()
                db_session.commit()
            else:
                abort(404, message="Category not found")
            return {"status": "success", "category": category.to_dict()}
        
    @staticmethod
    def patch(id, name, description, icon):
        with DB_Session() as db_session:
            # Verifica se a categoria existe
            category = (
                db_session.query(Category)
                .filter(Category.id == id, Category.deleted == False)
                .first()
            )

            if not category:
                abort(404, message="Category not found")
            # Verifica se o nome da categoria já existe
            if name:
                existing_category = (
                    db_session.query(Category)
                    .filter(Category.id != id, Category.name == name, Category.deleted == False)
                    .first()
                )
                if existing_category:
                    return {
                        "status": "error",
                        "message": "Category name already exists",
                        "category": existing_category.to_dict(),
                    }
                # Atualiza o nome se fornecido
                category.name = name
            # Atualiza os outros campos somente se fornecidos
            if description is not None:
                category.description = description
            if icon is not None:
                category.icon = icon
            
            category.updated_at = current_date_time()
            db_session.commit()

            return {"status": "success", "category": category.to_dict(), "message": "Category updated successfully"}


    @staticmethod  # done
    def delete(id):
        with DB_Session() as db_session:
            category = (
                db_session.query(Category)
                .filter(Category.id == id, Category.deleted == False)
                .first()
            )
            if not category:
                abort(404, message="Category not found")
            category.deleted = True
            db_session.commit()
            return {"status": "success", "message": "Category deleted successfully"}


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
