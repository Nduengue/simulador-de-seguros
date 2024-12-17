from .imports import *
from models import OptionGroup


class OptionGroup_Controller(Resource):

    def get(self, id=None, insurance_id=None):
        if id:
            option_group = OptionGroup.get(id)
            if not option_group:
                abort(404, message="Grupo de opções não encontrado.")
            return option_group.to_dict(), 200
        

        from models import Insurance
        insurance = Insurance.get(insurance_id)
        if not insurance:
            abort(404, message=f"Inurance Not Found With Id `{insurance_id}`")
        option_groups = OptionGroup.get(insurance_id=insurance_id)
        option_groups = [og.to_dict() for og in option_groups]
        return option_groups, 200

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id", "name"])
        required = datas.get("required", False)
        res = OptionGroup.post(datas["insurance_id"], datas["name"], required)
        return res, 200

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "insurance_id", "name"])
        res = OptionGroup.put(datas["id"], datas["insurance_id"], datas["name"])
        return res

    def delete(self, id):
        res = OptionGroup.delete(id)
        return res
