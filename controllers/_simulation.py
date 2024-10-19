from datetime import datetime
from .imports import *
from .users_api_requests import *


class Simulation_Controller(Resource):

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
        category_id = datas["category_id"]
        insurance_id = datas["insurance_id"]
        insurance_type_id = datas["insurance_type_id"]
        policy_type_id = datas["policy_type_id"]

        # save user in database
        user = datas["user"]
        user["group_name"] = "Simuladores"
        res = user_put(user)
        user = res["user"]

        from models import Rate
        from models import Coverage
        from models import Aggravation
        from models import Company
        from models import Insurance
        
        age = None
        # get insurance
        insurance = Insurance.get(insurance_id)
        # know user age if insurance is life
        if insurance.name == "Vida":
            birth_date = datetime.fromisoformat(user["birth_date"]).replace(tzinfo=None)
            age = (datetime.now() - birth_date).days // 365

        company_simulations = []
        for company_id in datas["company_ids"]:
            # get company
            company = Company.get(company_id)
            if not company:
                continue
            # get coverage rates
            coverage_rates = []
            for coverage_id in datas["coverage_ids"]:
                rate = Rate.get_by_coverage(
                    company_id,
                    category_id,
                    insurance_id,
                    insurance_type_id,
                    policy_type_id,
                    coverage_id,
                    age,
                )
                # get coverage
                coverage = Coverage.get(coverage_id)
                coverage_rates.append(
                    {
                        "name": coverage.name if coverage else None,
                        "rate": rate.value if rate else None,
                    }
                )

            aggravation_rates = []
            for aggravation_id in datas["aggravation_ids"]:
                rate = Rate.get_by_aggravation(
                    company_id,
                    category_id,
                    insurance_id,
                    insurance_type_id,
                    policy_type_id,
                    aggravation_id,
                )
                # get aggravation
                aggravation = Aggravation.get(aggravation_id)
                aggravation_rates.append(
                    {
                        "name": aggravation.name if aggravation else None,
                        "rate": rate.value if rate else None,
                    }
                )

            company_simulations.append(
                {
                    "company": company.to_dict(),
                    "coverages": coverage_rates,
                    "aggravations": aggravation_rates,
                }
            )
        
        response = {
            "status": "success",
            "user": user,
            "company_simulations": company_simulations,
        }, 200
        
        print(response)

        return response
