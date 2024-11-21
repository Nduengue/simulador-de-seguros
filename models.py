import logging
from logging.handlers import RotatingFileHandler
from flask_restful import abort
from sqlalchemy import (
    Boolean,
    DateTime,
    and_,
    create_engine,
    Column,
    Integer,
    String,
    ForeignKey,
    desc,
    or_,
)
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
from sqlalchemy.exc import SQLAlchemyError
from methods import current_date_time, generate_unique_id
import urllib.parse, uuid


logger = logging.getLogger("flask_log")
logger.setLevel(logging.INFO)
handler = RotatingFileHandler("models_log.log", maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
handler.setFormatter(formatter)
logger.addHandler(handler)


engine = create_engine(
    # f'postgresql://simulator_user:{urllib.parse.quote("J@m@is,78..")}@127.0.0.1:5432/simulator_users',
    f'postgresql://insurance_simulator_user:{urllib.parse.quote("J@m@is,478..")}@127.0.0.1:5432/simulator_users',
    echo=True,
)
DB_Session = sessionmaker(bind=engine)
Base = declarative_base()


# ==============================================================================
class User(Base):
    __tablename__ = "user"

    id = Column(String, primary_key=True)
    name = Column(String)
    nif = Column(String)
    gender = Column(String)
    birth_date = Column(DateTime)
    email = Column(String)
    password = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    user_group = relationship("UserGroup", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "nif": self.nif,
            "gender": self.gender,
            "birth_date": (
                self.birth_date.strftime("%Y-%m-%d") if self.birth_date else None
            ),
            "email": self.email,
            "groups": Group.post(user_id=self.id),
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod
    def get(get_str):
        with DB_Session() as db_session:
            user = (
                db_session.query(User)
                .filter(
                    or_(User.id == get_str, User.nif == get_str, User.email == get_str),
                    User.deleted == False,
                )
                .first()
            )
            return user

    @staticmethod
    def put(
        name,
        email,
        gender=None,
        birth_date=None,
        group_name=None,
        nif=None,
        password=None,
    ):
        # verify if user exist
        existing_user = None
        msg = "E-MAIL já existente."
        existing_user = User.get(email)
        if nif and not existing_user:
            existing_user = User.get(nif)
            if existing_user:
                msg = "Número de BI já existente."
        if existing_user:
            return {"status": "error", "message": msg, "user": existing_user.to_dict()}
        with DB_Session() as db_session:
            group = None
            if group_name:
                if not Group.get(group_name):
                    res = Group.put(group_name)
                    group = res["group"]

            new_user = User(
                id=generate_unique_id(User, db_session),
                name=name,
                nif=nif,
                gender=gender,
                birth_date=birth_date,
                email=email,
                password=password,
                created_at=current_date_time(),
            )
            db_session.add(new_user)
            db_session.commit()
            # put user group if group name exist
            if group:
                UserGroup.put(new_user.id, group["id"])

            return {"status": "success", "user": User.get(new_user.id).to_dict()}

    @staticmethod
    def post(offset=0, group_attr=None):
        with DB_Session() as db_session:
            users = (
                db_session.query(User)
                .join(UserGroup, User.id == UserGroup.user_id)
                .join(Group, UserGroup.group_id == Group.id)
                .filter(
                    (
                        or_(
                            (
                                (Group.name == group_attr)
                                if type(group_attr) == str
                                else False
                            ),
                            (
                                (Group.id == group_attr)
                                if type(group_attr) == int
                                else False
                            ),
                        )
                        if group_attr
                        else True
                    ),
                    User.deleted == False,
                )
                .order_by(desc(User.created_at))
                .offset(offset)
                .limit(20)
                .all()
            )
            return users

    @staticmethod
    def delete(id):
        with DB_Session() as db_session:
            user = (
                db_session.query(User)
                .filter(User.id == id, User.deleted == False)
                .first()
            )
            if user:
                user.deleted = True
                db_session.commit()

            return {"status": "success"}

    @staticmethod
    def patch(id, name, nif, gender, email):
        with DB_Session() as db_session:
            existing_user = (
                db_session.query(User)
                .filter(
                    User.email == email,
                    User.id != id,
                    User.deleted == False,
                )
                .first()
            )

            if existing_user:
                abort(400, message="EXISTING E-MAIL")

            user = (
                db_session.query(User)
                .filter(User.id == id, User.deleted == False)
                .first()
            )
            if user:
                user.name = name
                user.nif = name
                user.gender = gender
                user.email = email
                user.updated_at = current_date_time()
                db_session.commit()

            return {"status": "success", "user": user.to_dict()}


# ==============================================================================
class Group(Base):
    __tablename__ = "group"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    user_group = relationship("UserGroup", back_populates="group")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod
    def put(name, description=None):
        with DB_Session() as db_session:
            group = Group.get(name)
            if group:
                return {
                    "status": "error",
                    "message": "Nome de grupo já existente.",
                    "group": group.to_dict(),
                }
            else:
                new_group = Group(
                    name=name,
                    description=description,
                    created_at=current_date_time(),
                )
                db_session.add(new_group)
                db_session.commit()
                group = Group.get(new_group.id)
            return {"status": "success", "group": group.to_dict()}

    @staticmethod
    def get(id_name):
        with DB_Session() as db_session:
            group = (
                db_session.query(Group)
                .filter(
                    or_(
                        (Group.id == id_name) if type(id_name) == int else False,
                        (Group.name == id_name) if type(id_name) == str else False,
                    ),
                    Group.deleted == False,
                )
                .first()
            )
            return group

    @staticmethod
    def post(offset=0, user_id=None):
        with DB_Session() as db_session:
            groups = (
                db_session.query(Group)
                .outerjoin(
                    UserGroup,
                    and_(Group.id == UserGroup.group_id, UserGroup.deleted == False),
                )
                .filter(
                    Group.deleted == False,
                    (UserGroup.user_id == user_id) if user_id else True,
                )
                .order_by(desc(Group.id))
                .offset(offset)
                .limit(20)
                .all()
            )
            return [group.to_dict() for group in groups]

    @staticmethod
    def patch(id, name, description):
        with DB_Session() as db_session:
            existing_group = (
                db_session.query(Group)
                .filter(Group.name == name, Group.id != id, Group.deleted == False)
                .first()
            )

            if existing_group:
                return {
                    "status": "error",
                    "message": "Nome de grupo já existente.",
                    "group": existing_group.to_dict(),
                }

            group = (
                db_session.query(Group)
                .filter(Group.id == id, Group.deleted == False)
                .first()
            )
            if group:
                group.name = name
                group.description = description
                group.updated_at = current_date_time()
                db_session.commit()

            return {"status": "success", "group": group.to_dict()}

    @staticmethod
    def delete(id):
        with DB_Session() as db_session:
            group = (
                db_session.query(Group)
                .filter(Group.id == int(id), Group.deleted == False)
                .first()
            )
            if not group:
                return {"status": "error", "message": "Grupo não encontrado."}

            group.deleted = True
            db_session.commit()

            return {"status": "success"}


# ==============================================================================
class UserGroup(Base):
    __tablename__ = "user_group"

    id = Column(Integer, primary_key=True)
    user_id = Column(String, ForeignKey("user.id"))
    group_id = Column(Integer, ForeignKey("group.id"))
    created_at = Column(DateTime(timezone=True))
    updated_at = Column(DateTime(timezone=True))
    deleted = Column(Boolean, default=False)

    user = relationship("User", back_populates="user_group")
    group = relationship("Group", back_populates="user_group")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "group_id": self.group_id,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "deleted": self.deleted,
        }

    @staticmethod
    def put(user_id, group_id):
        with DB_Session() as db_session:
            user_group = UserGroup.get(None, user_id, group_id)
            if not user_group:
                new_user_group = UserGroup(
                    user_id=user_id, group_id=group_id, created_at=current_date_time()
                )
                db_session.add(new_user_group)
                db_session.commit()
                user_group = UserGroup.get(new_user_group.id)
            return user_group

    @staticmethod
    def get(id, user_id=None, group_id=None):
        if user_id and group_id:
            filter_get = and_(
                UserGroup.user_id == user_id, UserGroup.group_id == group_id
            )
        else:
            filter_get = UserGroup.id == id

        with DB_Session() as db_session:
            group = (
                db_session.query(UserGroup)
                .filter(filter_get, UserGroup.deleted == False)
                .first()
            )
            return group


try:
    Base.metadata.create_all(engine)
except SQLAlchemyError as e:
    logger.info("Erro ao criar tabelas do banco de dados: ", e._message())
    print("Erro ao criar tabelas do banco de dados: ", e._message())
