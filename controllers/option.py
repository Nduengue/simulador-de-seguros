from .imports import *
from models import Option


class Option_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id", "name"])
        Option.put(datas["insurance_id"], datas["name"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
