from .imports import *
from models import InsuranceType

class InsuranceType_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        res = InsuranceType.put(datas["name"])
        return res

    def post(self):
        datas = request.get_json()
        insurance_id = datas.get("insurance_id", None)
        category_id = datas.get("category_id", None)
        insurance_types = InsuranceType.post(insurance_id, category_id)
        insurance_types = [
            insurance_type.to_dict() for insurance_type in insurance_types
        ]
        return {"status": "success", "insurance_types": insurance_types}


