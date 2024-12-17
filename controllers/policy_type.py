from .imports import *
from models import PolicyType


class PolicyType_Controller(Resource):

    def get(self, id=None, category_id=None, insurance_id=None, insurance_type_id=None):
        res = PolicyType.get(id, category_id, insurance_id, insurance_type_id)
        if id:
            if not res:
                abort(404, message="Policy type not found")
            return res.to_dict()
        
        res = [item.to_dict() for item in res]
        return res

    def post(self):
        # save new policy type
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        icon = datas.get("icon", None)
        res = PolicyType.post(datas["name"], description, icon)
        return res, 200

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "description", "icon"])
        res = PolicyType.put(datas["id"], datas["name"], datas["description"], datas["icon"])
        return res

    def delete(self, id):
        res = PolicyType.delete(id)
        return res
