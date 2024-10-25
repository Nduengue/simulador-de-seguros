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
        insurance_id = datas.get("insurance_id", None)
        option_group_id = datas.get("option_group_id", None)
        option_group_name = datas.get("option_group_name", None)
        options = Option.post(
            insurance_id,
            option_group_id,
            option_group_name,
        )
        options = [option.to_dict() for option in options]
        return options, 200

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        option_group_id = datas.get("option_group_id", None)
        abbreviation = datas.get("abbreviation", None)
        required = datas.get("required", False)
        description = datas.get("description", None)
        auto_select = datas.get("auto_select", False)
        selected = datas.get("selected", False)
        res = Option.put(
            datas["name"],
            option_group_id,
            abbreviation,
            required,
            description,
            auto_select,
            selected,
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
