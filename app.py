import logging
from logging.handlers import RotatingFileHandler
from flask import Flask, request
from flask_restful import Api, Resource, abort
from flask_cors import CORS
from models import User, Group
from flask_bcrypt import Bcrypt

app = Flask(__name__)


CORS(app, resources={r"/*": {"origins": "*"}})

api = Api(app)
bcrypt = Bcrypt(app)

# log register
handler = RotatingFileHandler("flask_log.log", maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)


# ===================================================================================================
class User_Route(Resource):

    def post(self):
        datas = request.get_json()
        offset = datas.get("offset", 0)
        group = datas.get("group", None)

        users = User.post(offset, group)
        users = [user.to_dict() for user in users]
        return {"status": "success", "users": users}, 200

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name", "email"])
        nif = datas.get("nif", None)
        gender = datas.get("gender", None)
        group_name = datas.get("group_name", None)
        birth_date = datas.get("birth_date", None)
        password = datas.get("password", None)
        res = User.put(
            datas["name"], datas["email"], gender, birth_date, group_name, nif, password
        )
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "nif", "phone_number", "email"])

        res = User.patch(
            datas["id"],
            datas["name"],
            datas["nif"],
            datas["phone_number"],
            datas["email"],
        )
        return res

    def get(self):
        user_id = request.args.get("id")  # Use query parameters in GET requests
        if not user_id:
            return {"status": "error", "message": "Missing id parameter"}, 200
        user = User.get(user_id)
        return {"status": "success", "user": user.to_dict()}, 200

    def delete(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        res = User.delete(datas["id"])
        return res


api.add_resource(User_Route, "/user")


# ===================================================================================================
class Group_Route(Resource):

    def post(self):
        datas = request.get_json()
        offset = datas.get("offset", 0)
        groups = Group.post(offset=offset)
        return {"status": "success", "datas": groups}, 200

    def get(self):
        try:
            group_id = int(request.args.get("id"))
        except ValueError as err:
            return {"status": "error", "message": err.__str__()}, 200

        if not group_id:
            return {"status": "error", "message": "Missing id parameter"}, 200
        group = Group.get(group_id)
        return {"status": "success", "group": group.to_dict()}, 200

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name", "description"])

        res = Group.put(datas["name"], datas["description"])
        if res["status"] == "error":
            return res
        group = res["group"]
        return {"status": "success", "group": group}

    def patch(self):

        datas = request.get_json()
        missing_fields(datas, ["id", "name", "description"])

        res = Group.patch(datas["id"], datas["name"], datas["description"])
        if res["status"] == "error":
            return res
        group = res["group"]
        return {"status": "success", "group": group}

    def delete(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        res = Group.delete(datas["id"])
        return res


api.add_resource(Group_Route, "/group")


@app.errorhandler(404)
def page_not_found(e):
    return {"message": "route not found"}, 404


def missing_fields(datas, required_fields):
    missing_fields_list = []
    for field in required_fields:
        if field not in datas:
            missing_fields_list.append(field)

    if len(missing_fields_list) > 0:
        abort(400, message=f"'{missing_fields_list}' are/is required.")


def pwd_hash(password):
    return bcrypt.generate_password_hash(password).decode("utf-8")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5006, debug=True)
