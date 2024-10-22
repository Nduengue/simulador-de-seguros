from .imports import *
from models import Option
from models import Rate


class MtSimulator_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(
            datas,
            [
                "category_id",
                "insurance_id",
                "insurance_type_id",
                "policy_type_id",
                "merchandise_id",
                "way_ids",
                "country_from_ids",
                "state_from_ids",
                "country_to_ids",
                "states_to_ids",
                "from_to_ids",
                "value",
                # "company_ids",
            ],
        )

        params = [
            1,
            datas["category_id"],
            datas["insurance_id"],
            datas["insurance_type_id"],
            datas["policy_type_id"],
        ]

        # get merchandise and rate
        merchandise = Option.get(datas["merchandise_id"])
        print("merchandise", merchandise.to_dict())
        rate = Rate.get_by_option(
            *params,
            merchandise.id,
        )
        merchandise = {
            "id": merchandise.id,
            "name": merchandise.name,
            "rate": rate.value if rate else None,
        }
        ways = []
        for way_id in datas["way_ids"]:
            ways.append({"id": way_id, "name": Option.get(way_id).name})

        way_ids = datas["way_ids"]
        rate = Rate.get_by_option(*params, ",".join(map(str, way_ids)))
        way_rate = {"ways": ways, "rate": rate.value if rate else None}

        res = {
            "status": "success",
            "merchandise": merchandise,
            "way_rate": way_rate,
        }
        print(res)
        return res, 200
