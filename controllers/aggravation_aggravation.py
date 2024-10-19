from .imports import *
from models import Aggravation_Aggravation

class Aggravation_Aggravation_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["aggravation_taggle_ids"])
        Aggravation_Aggravation.put_all(datas["aggravation_taggle_ids"])
        return {
            "status": "success",
            "message": "Aggravation_Aggravation adicionado com sucesso à categoria",
        }


