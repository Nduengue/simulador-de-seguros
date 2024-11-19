from .imports import *
from models import PolicyType


class PolicyType_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        res = PolicyType.put(datas["name"], description)
        return res

    def post(self):
        datas = request.get_json()
        category_id = datas.get("category_id", None)
        insurance_id = datas.get("insurance_id", None)
        insurance_type_id = datas.get("insurance_type_id", None)
        policy_types = PolicyType.post(category_id, insurance_id, insurance_type_id)
        policy_types = [policy_type.to_dict() for policy_type in policy_types]
        return policy_types, 200
