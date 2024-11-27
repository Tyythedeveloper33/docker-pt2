import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', "sqlite:///test.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY')
    FLASK_ENV = os.getenv('FLASK_ENV')
    FLASK_APP = os.getenv('FLASK_APP')
    FLASK_DEBUG = os.getenv('FLASK_DEBUG')