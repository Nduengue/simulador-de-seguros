from .imports import *
from models import Option
from models import Company


class LifeDatas_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id"])

        coverages = Option.get(
            insurance_id=datas["insurance_id"], option_group_name="coverages"
        )
        coverages = [s.to_dict() for s in coverages]

        aggravations = Option.get(
            insurance_id=datas["insurance_id"], option_group_name="aggravations"
        )
        aggravations = [s.to_dict() for s in aggravations]

        companies = Company.post()
        companies = [s.to_dict() for s in companies]

        return {
            "coverages": coverages,
            "aggravations": aggravations,
            "companies": companies,
        }, 200
