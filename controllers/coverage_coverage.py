from .imports import *
from models import Coverage_Coverage

class Coverage_Coverage_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["coverage_id", "other_ids"])
        Coverage_Coverage.put_all(datas["coverage_id"], datas["other_ids"])
        return {
            "status": "success",
            "message": "Coverage_Coverage adicionado com sucesso.",
        }


