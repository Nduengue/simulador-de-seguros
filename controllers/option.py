from .imports import *
from models import Option


class Option_Controller(Resource):

    def get(self):
        option_id = request.args.get("id")
        option = Option.get(int(option_id))
        if not option:
            abort(404, message="Cobertura não encontrada.")
        return {"option": option.to_dict()}

    def post(self):
        datas = request.get_json()
        category_id = datas.get("category_id", None)
        insurance_id = datas.get("insurance_id", None)
        insurance_type_id = datas.get("insurance_type_id", None)
        policy_type_id = datas.get("policy_type_id", None)
        option_id = datas.get("option_id", None)
        options = Option.post(
            category_id, insurance_id, insurance_type_id, policy_type_id, option_id
        )
        options = [option.to_dict() for option in options]
        return {"options": options}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        o_type_id = datas.get("o_type_id", None)
        abbreviation = datas.get("abbreviation", None)
        required = datas.get("required", False)
        description = datas.get("description", None)
        res = Option.put(
            datas["name"],
            o_type_id,
            abbreviation,
            required,
            description,
        )
        return res

    def delete(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        res = Option.delete(datas["id"])
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name"])
        res = Option.patch(datas["id"], datas["name"])
        return res
