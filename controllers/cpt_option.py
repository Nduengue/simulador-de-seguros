from .imports import *
from models import Cpt_Option


class Cpt_Option_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["ciip_pt_id", "option_id"])
        Cpt_Option.put(datas["ciip_pt_id"], datas["option_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
