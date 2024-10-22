from .imports import *
from models import OptionGroup
from models import Option


class MtDatas_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id"])
        # get mt option groups
        ogs = OptionGroup.post(datas["insurance_id"])
        ogs = [og.to_dict() for og in ogs]
        # get countries
        countries = Option.post(3)
        countries = [c.to_dict() for c in countries]
        # get Angola states
        states = Option.post(4)
        states = [s.to_dict() for s in states]
        return {"option_groups": ogs, "countries": countries, "states": states}, 200
