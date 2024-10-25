from .imports import *
from models import OptionGroup, Option, Rate, Company


class MtSimulator_Controller(Resource):

    def post(self):
        datas = request.get_json()
        print("request: ", request)
        missing_fields(
            datas,
            [
                "company_ids",
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
            ],
        )

        user = datas.get("user", {"id": -1, "name": None, "birth_day": None})
        duration = datas.get("duration", None)

        # Filtro de dados
        if (
            (
                len(datas["country_from_ids"]) == 1
                and Option.get(datas["country_from_ids"][0]).name != "Angola"
            )
            or len(datas["country_from_ids"]) > 1
        ) and len(datas["state_from_ids"]) != 0:
            datas["state_from_ids"].clear()

        if (
            (
                len(datas["country_to_ids"]) == 1
                and Option.get(datas["country_to_ids"][0]).name != "Angola"
            )
            or len(datas["country_to_ids"]) > 1
        ) and len(datas["states_to_ids"]) != 0:
            datas["states_to_ids"].clear()

        merchandise_group_id = OptionGroup.get(
            "1. Classificação do Produto Transportado"
        ).id
        ways_group_id = OptionGroup.get("2. Meio de Transporte").id
        from_tos_group_id = OptionGroup.get("3. Distância e Destino").id
        contries_group_id = OptionGroup.get("countries").id
        states_group_id = OptionGroup.get("states").id

        params = [
            -1,
            datas["category_id"],
            datas["insurance_id"],
            datas["insurance_type_id"],
            datas["policy_type_id"],
        ]

        # get merchandise classification and rate
        merchandise = Option.get(datas["merchandise_id"])
        if not merchandise:
            abort(404, message="Classificação do Produto não encontrada.")

        # transportation mode
        ways = Option.get_options_og_id(datas["way_ids"], ways_group_id)
        # distance and destination
        from_tos = Option.get_options_og_id(datas["from_to_ids"], from_tos_group_id)

        company_simulations = []
        for company_id in datas["company_ids"]:
            # get company
            params[0] = company_id
            company = Company.get(company_id)
            if not company:
                continue

            rates = []
            rate = Rate.get_by_option(*params, merchandise.id)
            rates.append(
                {
                    "id": rate.id if rate else None,
                    "value": rate.value if rate else None,
                    "option_group_id": merchandise_group_id,
                }
            )

            def get_rate(ids, option_group_id):
                ids = sorted(ids)
                rate = None
                if len(ids) > 1:
                    rate = Rate.get_by_option(*params, ",".join(map(str, ids)))
                elif len(ids) == 1:
                    rate = Rate.get_by_option(*params, ids[0])
                if rate:
                    rates.append(
                        {
                            "id": rate.id,
                            "value": rate.value,
                            "option_group_id": option_group_id,
                        }
                    )

            get_rate(datas["way_ids"], ways_group_id)
            get_rate(datas["from_to_ids"], from_tos_group_id)

            company_simulations.append(
                {
                    "company": company.to_dict(),
                    "rates": rates,
                }
            )

        res = {
            "status": "success",
            "user": user,
            "duration": duration,
            "merchandise": {
                "option": {
                    "id": merchandise.id,
                    "name": merchandise.name,
                },
                "option_group_id": merchandise_group_id,
            },
            "ways": ways,
            "from_tos": from_tos,
            "countries_from": {
                "options": Option.get_options(datas["country_from_ids"]),
                "option_group_id": contries_group_id,
            },
            "states_from": {
                "options": Option.get_options(datas["state_from_ids"]),
                "option_group_id": states_group_id,
            },
            "countries_to": {
                "options": Option.get_options(datas["country_to_ids"]),
                "option_group_id": contries_group_id,
            },
            "states_to": {
                "options": Option.get_options(datas["states_to_ids"]),
                "option_group_id": states_group_id,
            },
            "company_simulations": company_simulations,
        }, 200

        print(datas)
        print(res)

        return res
