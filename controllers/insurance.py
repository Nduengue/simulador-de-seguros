from .imports import *
from models import Insurance
# from .methods import verify_query_param


class Insurance_Controller(Resource):

    def get(self, id=None, category_id=None):
        if id:
            insurance = Insurance.get(id)
            if not insurance:
                abort(404, message="Insurance not found")
            return insurance.to_dict(), 200

        insurances = Insurance.get(category_id=category_id)
        insurances = [insurance.to_dict() for insurance in insurances]
        return insurances, 200

    def post(self):
        # method for registering a new insurance
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        icon = datas.get("icon", None)
        res = Insurance.post(datas["name"], description, icon)
        return res

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "description", "icon"])
        res = Insurance.put(datas["id"], datas["name"], datas["description"], datas["icon"])
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        name = datas.get("name", None)
        description = datas.get("description", None)
        icon = datas.get("icon", None)

        res = Insurance.patch(datas["id"], name, description, icon)
        return res, 200

    def delete(self, id):
        res = Insurance.delete(id)
        return res
