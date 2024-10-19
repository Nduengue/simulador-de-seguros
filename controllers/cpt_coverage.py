from .imports import *
from models import Cpt_Coverage


class Cpt_Coverage_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["ciip__policy_type_id", "coverage_id"])
        Cpt_Coverage.put(datas["ciip__policy_type_id"], datas["coverage_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
