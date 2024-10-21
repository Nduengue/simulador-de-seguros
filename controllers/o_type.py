from .imports import *
from models import OType


class OType_Controller(Resource):

    def get(self):
        id = request.args.get("id")
        o_type = OType.get(int(id))
        if not o_type:
            abort(404, message="OType not found")
        return {"status": "success", "o_type": o_type.to_dict()}

    def post(self):
        o_types = OType.post()
        o_types = [o_type.to_dict() for o_type in o_types]
        return {"status": "success", "o_types": o_types}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["value"])
        res = OType.put(datas["value"])
        return res
