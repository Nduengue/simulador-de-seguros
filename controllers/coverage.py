from .imports import *
from models import Coverage


class Coverage_Controller(Resource):

    def get(self):
        coverage_id = request.args.get("id")
        coverage = Coverage.get(int(coverage_id))
        if not coverage:
            abort(404, message="Cobertura não encontrada.")
        return {"coverage": coverage.to_dict()}

    def post(self):
        datas = request.get_json()
        category_id = datas.get("category_id", None)
        insurance_id = datas.get("insurance_id", None)
        insurance_type_id = datas.get("insurance_type_id", None)
        policy_type_id = datas.get("policy_type_id", None)
        option_id = datas.get("option_id", None)
        coverages = Coverage.post(
            category_id, insurance_id, insurance_type_id, policy_type_id, option_id
        )
        coverages = [coverage.to_dict() for coverage in coverages]
        return {"coverages": coverages}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        abbreviation = datas.get("abbreviation", None)
        required = datas.get("required", False)
        res = Coverage.put(
            datas["name"],
            abbreviation,
            required,
        )
        return res

    def delete(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        res = Coverage.delete(datas["id"])
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name"])
        res = Coverage.patch(datas["id"], datas["name"])
        return res
