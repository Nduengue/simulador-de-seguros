from .imports import *
from models import Ciip_Pt


class Ciip_Pt_Controler(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["ciip_id", "policy_type_id"])
        Ciip_Pt.put(datas["ciip_id"], datas["policy_type_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
