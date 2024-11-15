from .imports import *
from .users_api_requests import user_put
from models import (
    OptionGroup,
    Option,
    Rate,
    Company,
    Category,
    Insurance,
    InsuranceType,
    PolicyType,
)


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
                "transhipment_id",
                "value",
                "origin",
                "destination",
                "claim_history_id",
                "franchise_id",
            ],
        )

        # get simulation datas
        category = Category.get(datas["category_id"]).to_dict()
        insurance = Insurance.get(datas["insurance_id"]).to_dict()
        insurance_type = InsuranceType.get(datas["insurance_type_id"]).to_dict()
        policy_type = PolicyType.get(datas["policy_type_id"]).to_dict()

        # do the same for all
        nacional_id = Option.get("Nacional").id
        internacional_id = Option.get("Internacional").id
        inter_provincial = Option.get("Interprovincial").id
        intra_provincial = Option.get("Intra-provincial").id
        other_continents = Option.get("Outros Continentes").id
        sadc_countries = Option.get("Países da SADC").id

        selected_from_to = []
        selected_from_to.append(datas["transhipment_id"])

        # Carregar IDs de grupos de opções
        group_ids = {
            "merchandise": OptionGroup.get(
                "1. Classificação do Produto Transportado"
            ).id,
            "ways": OptionGroup.get("2. Meio de Transporte").id,
            "countries": OptionGroup.get("countries").id,
            "states": OptionGroup.get("states").id,
            "conditions": OptionGroup.get("4. Condições Especiais").id,
            "packaging": OptionGroup.get("5. Condições de Manuseio e Embalagem").id,
            "coverage": OptionGroup.get("10. Coberturas").id,
            "from_tos": OptionGroup.get("transport_scope").id,
            "claim_histories": OptionGroup.get("claim_histories").id,
            "franchises": OptionGroup.get("9. Franquia - prejuízos indemnizáveis").id,
        }

        # Check if transport is national or international
        countries_from = Option.get_options(datas["country_from_ids"])
        countries_to = Option.get_options(datas["country_to_ids"])
        states_from = Option.get_options(datas["state_from_ids"])
        states_to = Option.get_options(datas["states_to_ids"])

        is_national = (
            len(countries_from) == 1
            and countries_from[0].name == "Angola"
            and len(countries_to) == 1
            and countries_to[0].name == "Angola"
        )

        if is_national:
            selected_from_to.append(nacional_id)
        elif len(countries_from) > 0 and len(countries_to) > 0:
            selected_from_to.append(internacional_id)

        # Check provincial transport
        if (
            is_national
            and len(states_from) == 1
            and len(states_to) == 1
            and states_from[0].name == states_to[0].name
        ):
            selected_from_to.append(intra_provincial)
        elif is_national and len(states_from) > 0 and len(states_to) > 0:
            selected_from_to.append(inter_provincial)

        # Check SADC and other continents
        def are_countries_of(countries, group_name):
            if not countries:
                return False
            return all(
                any(g["name"] == group_name for g in Option.get_groups(c.id))
                for c in countries
            )

        if len(countries_from) > 0 and len(countries_to) > 0:
            if not (
                are_countries_of(countries_from, "africa")
                and are_countries_of(countries_to, "africa")
            ):
                selected_from_to.append(other_continents)

            if (
                not is_national
                and are_countries_of(countries_from, "sadc")
                and are_countries_of(countries_to, "sadc")
            ):
                selected_from_to.append(sadc_countries)

        print(selected_from_to)

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
        claim_history = get_option_and_group(
            datas["claim_history_id"], "claim_histories"
        )
        franchise = get_option_and_group(datas["franchise_id"], "franchises")

        transport_scope = Option.get_options_og_id(
            selected_from_to, group_ids["from_tos"]
        )
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
                (datas["claim_history_id"], "claim_histories"),
                (datas["franchise_id"], "franchises"),
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
                (selected_from_to, "from_tos"),
            ]:
                if len(ids) > 1:
                    ids_str = ",".join(map(str, sorted(ids)))
                else:
                    ids_str = ids[0]
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
                "options": Option.get_options_id_name_js(datas[value[0]]),
                "option_group_id": group_ids[value[1]],
            }
            for key, value in location_data.items()
        }

        res = {
            "status": "success",
            "category": category,
            "insurance": insurance,
            "insurance_type": insurance_type,
            "policy_type": policy_type,
            "user": user,
            "duration": duration,
            "merchandise": merchandise,
            "packaging": packaging,
            "coverage": coverage,
            "ways": ways,
            "from_tos": transport_scope,
            "conditions": conditions,
            "claim_history": claim_history,
            "franchise": franchise,
            **location_options,
            "company_simulations": company_simulations,
        }, 200

        print(datas)
        print(res)

        return res
