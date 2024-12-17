from .imports import *
from models import InsuranceType


class InsuranceType_Controller(Resource):

    def get(self, id=None, category_id=None, insurance_id=None):
        res = InsuranceType.get(id, insurance_id, category_id)
        if id:
            if not res:
                abort(404, message="Policy type not found")
            return res.to_dict()
        
        res = [item.to_dict() for item in res]
        return res

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        icon = datas.get("icon", None)
        res = InsuranceType.post(datas["name"], description, icon)
        return res

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "description", "icon"])
        res = InsuranceType.put(datas["id"], datas["name"], datas["description"], datas["icon"])
        return res

    def delete(self, id):
        res = InsuranceType.delete(id)
        return res
