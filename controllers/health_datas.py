from .imports import *
from models import (Company, OptionGroup)


class HealthDatas_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(
            datas,
            ["category_id", "insurance_id", "insurance_type_id", "policy_type_id"],
        )

        option_groups = OptionGroup.get(
            insurance_id=datas["insurance_id"]
        )

        option_groups = [s.to_dict(options=True) for s in option_groups]

        companies = Company.get()
        companies = [s.to_dict() for s in companies]

        return {
            "companies": companies,
            "option_groups": option_groups
        }, 200
