from .imports import *
from models import Ciip

class Ciip_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["category_id", "insurance_id", "insurance_type_id", "policy_type_id"])
        Ciip.post(datas["category_id"], datas["insurance_id"], datas["insurance_type_id"], datas["policy_type_id"])
        return {
            "status": "success",
            "message": "Ciip criado com sucesso.",
        }


