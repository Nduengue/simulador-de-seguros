from .imports import *
from models import OptionGroup


class OptionGroup_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id", "name"])
        required = datas.get("required", False)
        res = OptionGroup.put(datas["insurance_id"], datas["name"], required)
        return res, 200

    def get(self):
        id = request.args.get("id")
        if not id:
            abort(404, message="ID não informado.")
        option_group = OptionGroup.get(int(id))
        if not option_group:
            abort(404, message="Grupo de opções não encontrado.")
        return option_group.to_dict(), 200

    def post(self):
        datas = request.get_json()
        insurance_id = datas.get("insurance_id", None)
        from models import Insurance

        insurance = Insurance.get(insurance_id)
        if not insurance:
            abort(404, message="Seguro não encontrado.")
        option_groups = OptionGroup.post(insurance_id)
        option_groups = [og.to_dict() for og in option_groups]
        return option_groups, 200
