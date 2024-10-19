from .imports import *
from models import Aggravation_Rate


class Aggravation_Rate_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["aggravation_id", "rate_id"])
        Aggravation_Rate.put(datas["aggravation_id"], datas["rate_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
