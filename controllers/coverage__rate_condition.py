from .imports import *
from models import Coverage_RateCondition


class Coverage_RateCondition_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["coverage_id", "rate_id", "condition_id"])
        Coverage_RateCondition.put(
            datas["coverage_id"], datas["rate_id"], datas["condition_id"]
        )
        return {
            "status": "success",
            "message": "Relacionados com sucesso à categoria",
        }
