from .imports import *
from models import Aggravation


class Aggravation_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        res = Aggravation.put(datas["name"], description)
        return res
    
    def post(self):
        datas = request.get_json()
        category_id = datas.get("category_id", None)
        insurance_id = datas.get("insurance_id", None)
        insurance_type_id = datas.get("insurance_type_id", None)
        policy_type_id = datas.get("policy_type_id", None)
        aggravations = Aggravation.post(category_id, insurance_id, insurance_type_id, policy_type_id)
        aggravations = [coverage.to_dict() for coverage in aggravations]
        return {"status": "success", "aggravations": aggravations}
