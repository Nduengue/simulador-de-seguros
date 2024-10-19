from .imports import *
from models import Ciip

class Ciip_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["category_id", "insurance_id", "insurance_type_id"])
        Ciip.put(datas["category_id"], datas["insurance_id"], datas["insurance_type_id"])
        return {
            "status": "success",
            "message": "Ciip criado com sucesso.",
        }


