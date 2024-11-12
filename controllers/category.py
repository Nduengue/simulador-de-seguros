from .imports import *
from models import Category


class Category_Controller(Resource):

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        res = Category.put(datas["name"], description)
        return res

    def get(self):
        category_id = request.args.get("id")
        try:
            category_id = int(category_id)
        except ValueError:
            abort(400, message="ID da categoria inválido. Deve ser um número inteiro.")
        category = Category.get(category_id)
        if not category:
            abort(404, message="Categoria não encontrada")
        return {"status": "success", "category": category.to_dict()}

    def post(self):
        categories = Category.post()
        categories = [category.to_dict() for category in categories]
        return categories, 200
