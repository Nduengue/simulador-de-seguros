from .imports import *
from models import ORC


class ORC_Controler(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["option_id", "rate_id", "condition_id"])
        ORC.put(datas["option_id"], datas["rate_id"], datas["condition_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso à categoria",
        }
