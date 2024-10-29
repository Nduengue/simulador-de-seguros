from .imports import *
from .users_api_requests import user_put
from models import OptionGroup, Option, Rate, Company


class MtSimulator_Controller(Resource):
    def post(self):
        datas = request.get_json()
        missing_fields(
            datas,
            [
                "user",
                "duration",
                "company_ids",
                "category_id",
                "insurance_id",
                "insurance_type_id",
                "policy_type_id",
                "merchandise_id",
                "way_ids",
                "condition_ids",
                "packaging_id",
                "coverage_id",
                "country_from_ids",
                "state_from_ids",
                "country_to_ids",
                "states_to_ids",
                "from_to_ids",
                "value",
            ],
        )

        user = user_put({**datas["user"], "group_name": "Simuladores"})["user"]
        duration = datas.get("duration")

        # Limpeza de dados de estados com base no país
        def clear_states_if_needed(country_ids, state_ids):
            if (
                len(country_ids) == 1 and Option.get(country_ids[0]).name != "Angola"
            ) or len(country_ids) > 1:
                state_ids.clear()

        clear_states_if_needed(datas["country_from_ids"], datas["state_from_ids"])
        clear_states_if_needed(datas["country_to_ids"], datas["states_to_ids"])

        # Carregar IDs de grupos de opções
        group_ids = {
            "merchandise": OptionGroup.get(
                "1. Classificação do Produto Transportado"
            ).id,
            "ways": OptionGroup.get("2. Meio de Transporte").id,
            "from_tos": OptionGroup.get("3. Distância e Destino").id,
            "countries": OptionGroup.get("countries").id,
            "states": OptionGroup.get("states").id,
            "conditions": OptionGroup.get("4. Condições Especiais").id,
            "packaging": OptionGroup.get("5. Condições de Manuseio e Embalagem").id,
            "coverage": OptionGroup.get("10. Coberturas").id,
        }

        # Obter opções e taxas
        def get_option_and_group(option_id, group_name):
            option = Option.get(option_id)
            return {
                "id": option.id,
                "name": option.name,
                "option_group_id": group_ids[group_name],
            }

        merchandise = get_option_and_group(datas["merchandise_id"], "merchandise")
        packaging = get_option_and_group(datas["packaging_id"], "packaging")
        coverage = get_option_and_group(datas["coverage_id"], "coverage")
        ways = Option.get_options_og_id(datas["way_ids"], group_ids["ways"])
        from_tos = Option.get_options_og_id(datas["from_to_ids"], group_ids["from_tos"])
        conditions = Option.get_options_og_id(
            datas["condition_ids"], group_ids["conditions"]
        )

        params = [
            -1,
            datas["category_id"],
            datas["insurance_id"],
            datas["insurance_type_id"],
            datas["policy_type_id"],
        ]
        company_simulations = []

        for company_id in datas["company_ids"]:
            params[0] = company_id
            company = Company.get(company_id)
            if not company:
                continue

            rates = []
            for option_id, group_name in [
                (datas["merchandise_id"], "merchandise"),
                (datas["packaging_id"], "packaging"),
                (datas["coverage_id"], "coverage"),
                (datas["condition_ids"], "conditions"),
            ]:
                if isinstance(option_id, list):
                    rates_ = []
                    for id_ in option_id:
                        rate = Rate.get_by_option(*params, id_)
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
                    rate = Rate.get_by_option(*params, option_id)
                    rates.append(
                        {
                            "id": rate.id if rate else None,
                            "value": rate.value if rate else None,
                            "option_group_id": group_ids[group_name],
                        }
                    )

            for ids, group_name in [
                (datas["way_ids"], "ways"),
                (datas["from_to_ids"], "from_tos"),
            ]:
                ids_str = ",".join(map(str, sorted(ids)))
                rate = Rate.get_by_option(*params, ids_str)
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

        location_data = {
            "countries_from": ("country_from_ids", "countries"),
            "states_from": ("state_from_ids", "states"),
            "countries_to": ("country_to_ids", "countries"),
            "states_to": ("states_to_ids", "states"),
        }

        location_options = {
            key: {
                "options": Option.get_options(datas[value[0]]),
                "option_group_id": group_ids[value[1]],
            }
            for key, value in location_data.items()
        }

        res = {
            "status": "success",
            "user": user,
            "duration": duration,
            "merchandise": merchandise,
            "packaging": packaging,
            "coverage": coverage,
            "ways": ways,
            "from_tos": from_tos,
            "conditions": conditions,
            **location_options,
            "company_simulations": company_simulations,
        }, 200

        print(datas)
        print(res)

        return res
