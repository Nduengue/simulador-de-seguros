from .imports import *
from models import Route


class Route_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["insurance_id", "name"])
        res = Route.put(datas["insurance_id"], datas["name"])
        return res

    def get(self):
        route_id = request.args.get("id")
        try:
            route_id = int(route_id)
        except ValueError:
            abort(400, message="ID da rota inválido. Deve ser um número inteiro.")
        route = Route.get(route_id)
        if not route:
            abort(404, message="Rota não encontrada.")
        return {"route": route.to_dict()}

    def post(self):
        routes = Route.post()
        routes = [route.to_dict() for route in routes]
        return {"routes": routes}
