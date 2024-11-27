from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.database import db


# Just initialize the app (no function)
app = Flask(__name__)
# Load config
app.config.from_object(Config)

# Wrap app in CORS so we can receive requests from the frontend
CORS(app)

# Create tables in database
with app.app_context():
    # Initialize database
    db.init_app(app)
    db.create_all()
    
# TODO: Import routes

if __name__ == '__main__':
    app.run()