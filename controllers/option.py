from .imports import *
from models import Option


class Option_Controller(Resource):

    def get(self, id=None, insurance_id=None, option_group_id=None):
        if id:
            option = Option.get(id)
            if not option:
                abort(404, message="Cobertura não encontrada.")
            return option.to_dict()

        options = Option.get(insurance_id=insurance_id, option_group_id=option_group_id)
        options = [option.to_dict() for option in options]
        return options, 200

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        option_group_id = datas.get("option_group_id", None)
        description = datas.get("description", None)
        abbreviation = datas.get("abbreviation", None)
        required = datas.get("required", False)
        auto_select = datas.get("auto_select", False)
        selected = datas.get("selected", False)
        res = Option.post(
            datas["name"],
            option_group_id,
            abbreviation,
            required,
            description,
            auto_select,
            selected,
        )
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        name = datas.get("name", None)
        description = datas.get("description", None)
        abbreviation = datas.get("abbreviation", None)
        required = datas.get("required", None)
        auto_select = datas.get("auto_select", None)
        selected = datas.get("selected", None)
        res = Option.patch(
            datas["id"],
            name,
            description,
            abbreviation,
            required,
            auto_select,
            selected,
        )
        return res

    def delete(self, id):
        res = Option.delete(id)
        return res
