from .imports import *
from models import Option_Coverage


class Option_Coverage_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["option_id", "coverage_id"])
        Option_Coverage.put(datas["option_id"], datas["coverage_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
