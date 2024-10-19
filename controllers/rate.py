from .imports import *
from models import Rate


class Rate_Controller(Resource):

    def get(self):
        id = request.args.get("id")
        rate = Rate.get(int(id))
        if not rate:
            abort(404, message="Rate not found")
        return {"status": "success", "rate": rate.to_dict()}

    def post(self):
        datas = request.get_json()
        company_id = datas.get("company_id", None)
        rates = Rate.post(company_id)
        rates = [rate.to_dict() for rate in rates]
        return {"status": "success", "rates": rates}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["company_id", "value"])
        res = Rate.put(datas["company_id"], datas["value"])
        return res
