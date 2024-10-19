import logging
from logging.handlers import RotatingFileHandler
from sqlalchemy import (
    create_engine,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote


logger = logging.getLogger("flask_log")
logger.setLevel(logging.INFO)
handler = RotatingFileHandler("models_log.log", maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
handler.setFormatter(formatter)
logger.addHandler(handler)

engine = create_engine(
    f'postgresql://insurance_simulator_user:{quote("J@m@is,478..")}@127.0.0.1:5432/insurance_simulator',
    echo=True,
)
DB_Session = sessionmaker(bind=engine)

Base = declarative_base()
