from datetime import datetime
from .imports import *
from .users_api_requests import user_put
from models import OptionGroup, Option, Rate, Company


class LifeSimulator_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(
            datas,
            [
                "user",
                "category_id",
                "insurance_id",
                "insurance_type_id",
                "policy_type_id",
                "coverage_ids",
                "aggravation_ids",
                "company_ids",
            ],
        )

        coverages_group_id = OptionGroup.get("coverages", datas["insurance_id"]).id
        aggravations_group_id = OptionGroup.get(
            "aggravations", datas["insurance_id"]
        ).id

        params = [
            -1,
            datas["category_id"],
            datas["insurance_id"],
            datas["insurance_type_id"],
            datas["policy_type_id"],
        ]

        # save user in database
        user = datas["user"]
        user["group_name"] = "Simuladores"
        res = user_put(user)
        user = res["user"]

        birth_date = datetime.fromisoformat(user["birth_date"]).replace(tzinfo=None)
        age = (datetime.now() - birth_date).days // 365

        # get coverages
        coverages = Option.get_options_og_id(datas["coverage_ids"], coverages_group_id)
        # get aggravations
        aggravations = Option.get_options_og_id(
            datas["aggravation_ids"], aggravations_group_id
        )

        def get_rates(ids, params, age=None):
            rates = []
            for id_ in sorted(ids):
                rate = Rate.get_by_option(*params, id_, interval_value=age)
                if rate:
                    rates.append({"id": rate.id, "value": rate.value})
            return rates

        company_simulations = []
        for company_id in datas["company_ids"]:
            # get company
            company = Company.get(company_id)
            if not company:
                continue

            # update company id in params
            params[0] = company_id

            coverages_rates = {
                "rates": get_rates(datas["coverage_ids"], params, age),
                "option_group_id": coverages_group_id,
            }
            aggravations_rates = {
                "rates": get_rates(datas["aggravation_ids"], params),
                "option_group_id": aggravations_group_id,
            }

            company_simulations.append(
                {
                    "company": company.to_dict(),
                    "coverages_rates": coverages_rates,
                    "aggravations_rates": aggravations_rates,
                }
            )

        response = {
            "status": "success",
            "user": user,
            "coverages": coverages,
            "aggravations": aggravations,
            "company_simulations": company_simulations,
        }, 200

        print(datas)
        print(response)

        return response
