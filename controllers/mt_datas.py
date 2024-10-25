from .imports import *
from models import Option


class MtDatas_Controller(Resource):

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id"])

        merchandises = Option.post(
            option_group_name="1. Classificação do Produto Transportado"
        )
        merchandises = [s.to_dict() for s in merchandises]

        ways = Option.post(option_group_name="2. Meio de Transporte")
        ways = [s.to_dict() for s in ways]

        from_tos = Option.post(option_group_name="3. Distância e Destino")
        from_tos = [s.to_dict() for s in from_tos]

        countries = Option.post(option_group_name="countries")
        countries = [
            {**c.to_dict(), "groups": Option.get_groups(c.id)} for c in countries
        ]
        # get Angola states
        states = Option.post(option_group_name="states")
        states = [s.to_dict() for s in states]
        return {
            "merchandises": merchandises,
            "ways": ways,
            "from_tos": from_tos,
            "countries": countries,
            "states": states,
        }, 200
