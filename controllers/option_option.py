from .imports import *
from models import Option_Option


class Option_Option_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["option_ids"])
        Option_Option.put_all(datas["option_ids"])
        return {
            "status": "success",
            "message": "Option_Option adicionado com sucesso.",
        }
