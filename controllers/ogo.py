from .imports import *
from models import OGO


class OGO_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["option_group_id", "option_id"])
        OGO.put(datas["option_group_id"], datas["option_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
