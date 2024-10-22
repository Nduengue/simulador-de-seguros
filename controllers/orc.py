from .imports import *
from models import ORC


class ORC_Controler(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["ciip_pt_id", "company_id", "option_id", "rate_id"])
        condition_id = datas.get("condition_id", None)
        ORC.put(
            datas["ciip_pt_id"],
            datas["company_id"],
            datas["option_id"],
            datas["rate_id"],
            condition_id,
        )
        return {
            "status": "success",
            "message": "Relacionados com sucesso à categoria",
        }
