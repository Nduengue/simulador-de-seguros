from .imports import *
from models import Company_Rate


class Company_Rate_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["company_id", "rate_id"])
        Company_Rate.put(datas["company_id"], datas["rate_id"])
        return {
            "status": "success",
            "message": "Relacionados com sucesso.",
        }
