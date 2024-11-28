from app.database import db
from app.user import User
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash,check_password_hash
api = Blueprint("api", __name__)

@api.route('/register', methods=["POST"])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if User.query.filter_by(email=email).first():
        return jsonify({"error":"User already exist"}),400
    user = User(email=email, password=generate_password_hash(password))
    try:
        db.session.add(user)
        db.session.commit()
        return jsonify(user.to_json()),201
    except Exception as E:
        db.session.rollback()
        return jsonify({"error":str(E)}),500


@api.route('/log-in', methods=["POST"])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    user= User.query.filter_by(email=email).first()
    if not user or check_password_hash(user.password, password):
        return jsonify({"errors","Invalid username or password"}),401
    return jsonify(user.to_json()),200
