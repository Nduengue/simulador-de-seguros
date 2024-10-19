from .imports import *
from models import Cpt_Aggravation


class Cpt_Aggravation_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["ciip__policy_type_id", "aggravation_id"])
        Cpt_Aggravation.put(datas["ciip__policy_type_id"], datas["aggravation_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
