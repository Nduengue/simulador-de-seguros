from .imports import *
from models import Option
from models import PolicyType


class MtDatas_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id", "policy_type_id"])

        # get policy type
        policy_type = PolicyType.get(datas["policy_type_id"])
        if not policy_type:
            abort(404, "Tipo de apólice não encontrada.")

        def get_options(option_group_name):
            return [
                s.to_dict()
                for s in Option.get(
                    insurance_id=datas["insurance_id"],
                    option_group_name=option_group_name,
                )
            ]

        merchandises = get_options("1. Classificação do Produto Transportado")
        ways = get_options("2. Meio de Transporte")
        from_tos = get_options("3. Distância e Destino")
        conditions = get_options("4. Condições Especiais")
        packaging = get_options("5. Condições de Manuseio e Embalagem")
        franchise = get_options("9. Franquia - prejuízos indemnizáveis")
        coverages = get_options("10. Coberturas")
        # discount = get_options("8. Factores de Descontos")
        claim_histories = get_options("claim_histories")
        min_franchises = get_options("Franquia Mínima")

        countries = Option.get(option_group_name="countries")
        countries = [
            {**c.to_dict(), "groups": Option.get_groups(c.id)} for c in countries
        ]
        # get Angola states
        states = Option.get(option_group_name="states")
        states = [s.to_dict() for s in states]
        return {
            "merchandises": merchandises,
            "ways": ways,
            "from_tos": from_tos,
            "countries": countries,
            "states": states,
            "conditions": conditions,
            "packaging": packaging,
            "franchise": franchise,
            "coverages": coverages,
            "policy_type": policy_type.to_dict(),
            "claim_histories": claim_histories,
            "min_franchises": min_franchises,
            # "discount": discount,
        }, 200
