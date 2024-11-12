from .imports import *
from models import InsuranceType


class InsuranceType_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        icon = datas.get("icon", None)
        res = InsuranceType.put(datas["name"], icon)
        return res

    def post(self):
        datas = request.get_json()
        insurance_id = datas.get("insurance_id", None)
        category_id = datas.get("category_id", None)
        insurance_types = InsuranceType.post(insurance_id, category_id)
        insurance_types = [
            insurance_type.to_dict() for insurance_type in insurance_types
        ]
        return insurance_types, 200
