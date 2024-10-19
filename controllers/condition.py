from .imports import *
from models import Condition


class Condition_Controller(Resource):

    def get(self):
        id = request.args.get("id")
        condition = Condition.get(id)
        if not condition:
            abort(404, message="Condição não encontrada.")
        return {"condition": condition.to_dict()}

    def post(self):
        datas = request.get_json()
        coverage_id = datas.get("coverage_id", None)
        conditions = Condition.post(coverage_id)
        conditions = [condition.to_dict() for condition in conditions]
        return {"conditions": conditions}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["first_value", "second_value"])
        res = Condition.put(datas["first_value"], datas["second_value"])
        return res
