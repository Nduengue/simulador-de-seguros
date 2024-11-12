from .imports import *
from models import Insurance


class Insurance_Controller(Resource):

    def get(self):
        insurance_id = request.args.get("id")
        insurance = Insurance.get(int(insurance_id))
        if not insurance:
            abort(404, message="Insurance not found")
        return {"status": "success", "insurance": insurance.to_dict()}

    def post(self):
        datas = request.get_json()
        category_id = datas.get("category_id", None)
        insurances = Insurance.post(category_id)
        insurances = [insurance.to_dict() for insurance in insurances]
        return insurances, 200

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        icon = datas.get("icon", None)
        res = Insurance.put(datas["name"], icon)
        return res

    def delete(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        res = Insurance.delete(datas["id"])
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "rate_id"])
        res = Insurance.patch(datas["id"])
        return res
