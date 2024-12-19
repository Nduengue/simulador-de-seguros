from datetime import datetime
from .imports import *
from .users_api_requests import user_put
from models import OptionGroup, Option, Rate, Company


class HealthSimulator_Controller(Resource):

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
                "add_coverage_ids",
                "geo_area_id",
                "deductible_policy_id",
                "deductible_fixed_value_id",
                "deductible_percentage_insured_value_id",
                "deductible_percentage_loss_id",
                "copayment_policy_id",
                "copayment_percentage_id",
                "reimbursement_policy_id",
                "reimbursement_percentage_id",
                "company_ids",
            ],
        )

        # coverages_group_id = OptionGroup.get("coverages", datas["insurance_id"]).id
        # aggravations_group_id = OptionGroup.get(
        #     "aggravations", datas["insurance_id"]
        # ).id

        group_ids = {
            "coverage": OptionGroup.get("Coberturas", datas["insurance_id"]).id,
            "add_coverage": OptionGroup.get(
                "Coberturas Adicionais", datas["insurance_id"]
            ).id,
            "geo_area": OptionGroup.get("Área Geográfica", datas["insurance_id"]).id,
            "deductible_policy": OptionGroup.get(
                "Apólice com franquia", datas["insurance_id"]
            ).id,
            "deductible_fixed_value": OptionGroup.get(
                "Franquia com valor fixo", datas["insurance_id"]
            ).id,
            "deductible_percentage_insured_value": OptionGroup.get(
                "Franquia com percentagem do valor seguro", datas["insurance_id"]
            ).id,
            "deductible_percentage_loss": OptionGroup.get(
                "Franquia com percentagem sobre o Prejuízo (despesas médicas)",
                datas["insurance_id"],
            ).id,
            "copayment_policy": OptionGroup.get(
                "Apólice com copagamento", datas["insurance_id"]
            ).id,
            "copayment_percentage": OptionGroup.get(
                "Percentagens de copagamento", datas["insurance_id"]
            ).id,
            "reimbursement_policy": OptionGroup.get(
                "Apólice com reembolso", datas["insurance_id"]
            ).id,
            "reimbursement_percentage": OptionGroup.get(
                "Percentagens de reembolso", datas["insurance_id"]
            ).id,
        }

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

        coverages = Option.get_options_og_id(
            datas["coverage_ids"], group_ids["coverage"]
        )
        add_coverages = Option.get_options_og_id(
            datas["add_coverage_ids"], group_ids["add_coverage"]
        )

        # Obter opções e taxas
        def get_option_and_group(option_id, group_name):
            option = Option.get(option_id)
            if not option:
                return None
            return {
                "id": option.id,
                "name": option.name,
                "option_group_id": group_ids[group_name],
            }

        # get options and groups
        geo_area = get_option_and_group(datas["geo_area_id"], "geo_area")
        deductible_policy = get_option_and_group(
            datas["deductible_policy_id"], "deductible_policy"
        )
        deductible_fixed_value = get_option_and_group(
            datas["deductible_fixed_value_id"], "deductible_fixed_value"
        )
        deductible_percentage_insured_value = get_option_and_group(
            datas["deductible_percentage_insured_value_id"],
            "deductible_percentage_insured_value",
        )
        deductible_percentage_loss = get_option_and_group(
            datas["deductible_percentage_loss_id"], "deductible_percentage_loss"
        )
        copayment_policy = get_option_and_group(
            datas["copayment_policy_id"], "copayment_policy"
        )
        copayment_percentage = get_option_and_group(
            datas["copayment_percentage_id"], "copayment_percentage"
        )
        reimbursement_policy = get_option_and_group(
            datas["reimbursement_policy_id"], "reimbursement_policy"
        )
        reimbursement_percentage = get_option_and_group(
            datas["reimbursement_percentage_id"], "reimbursement_percentage"
        )

        company_simulations = []
        for company_id in datas["company_ids"]:
            # get company
            company = Company.get(company_id)
            if not company:
                continue

            # update company id in params
            params[0] = company_id

            rates = []
            for option_id, group_name in [
                (datas["coverage_ids"], "coverage"),
                (datas["add_coverage_ids"], "add_coverage"),
                (datas["deductible_policy_id"], "deductible_policy"),
                (datas["deductible_fixed_value_id"], "deductible_fixed_value"),
                (
                    datas["deductible_percentage_insured_value_id"],
                    "deductible_percentage_insured_value",
                ),
                (
                    datas["deductible_percentage_loss_id"],
                    "deductible_percentage_loss",
                ),
                (datas["copayment_policy_id"], "copayment_policy"),
                (datas["copayment_percentage_id"], "copayment_percentage"),
                (datas["reimbursement_policy_id"], "reimbursement_policy"),
                (datas["reimbursement_percentage_id"], "reimbursement_percentage"),
            ]:
                if isinstance(option_id, list):
                    rates_ = []
                    for id_ in option_id:
                        interval_value = None
                        if group_name in ["coverage", "add_coverage"]:
                            interval_value = age
                        rate = Rate.get_by_option(
                            *params, option_id=id_, interval_value=interval_value
                        )
                        rates_.append(
                            {
                                "id": rate.id if rate else None,
                                "value": rate.value if rate else None,
                            }
                        )
                    rates.append(
                        {
                            "rates": rates_,
                            "option_group_id": group_ids[group_name],
                        }
                    )
                else:
                    if option_id == -1:
                        continue
                    rate = Rate.get_by_option(*params, option_id)
                    rates.append(
                        {
                            "id": rate.id if rate else None,
                            "value": rate.value if rate else None,
                            "option_group_id": group_ids[group_name],
                        }
                    )

            company_simulations.append(
                {
                    "company": company.to_dict(),
                    "rates": rates,
                }
            )

        response = {
            "status": "success",
            "user": user,
            "coverages": coverages,
            "add_coverages": add_coverages,
            "geo_area": geo_area,
            "deductible_policy": deductible_policy,
            "deductible_fixed_value": deductible_fixed_value,
            "deductible_percentage_insured_value": deductible_percentage_insured_value,
            "deductible_percentage_loss": deductible_percentage_loss,
            "copayment_policy": copayment_policy,
            "copayment_percentage": copayment_percentage,
            "reimbursement_policy": reimbursement_policy,
            "reimbursement_percentage": reimbursement_percentage,
            "company_simulations": company_simulations,
        }, 200

        print(datas)
        print(response)

        return response
