from .imports import *
from models import Option_Option


class Option_Option_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["option_id", "other_ids"])
        Option_Option.put_all(datas["option_id"], datas["other_ids"])
        return {
            "status": "success",
            "message": "Coverage_Coverage adicionado com sucesso.",
        }
