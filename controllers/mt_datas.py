from .imports import *
from models import OptionGroup
from models import Option


class MtDatas_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id"])
        options = OptionGroup.post(datas["insurance_id"])
        options = [option.to_dict() for option in options]
        return {"options": options}
