from .imports import *
from models import Category


class Category_Controller(Resource):

    def get(self, id=None):
        if id:
            category = Category.get(id)
            if not category:
                abort(404, message="Category not found")
            return category.to_dict(), 200

        categories = Category.get()
        categories = [category.to_dict() for category in categories]
        return categories, 200

    def post(self):
        datas = request.get_json()
        missing_fields(datas, ["name"])
        description = datas.get("description", None)
        icon = datas.get("icon", None)
        res = Category.post(datas["name"], description, icon)
        return res

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "description", "icon"])
        res = Category.put(datas["id"], datas["name"], datas["description"], datas["icon"])
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id"])
        name = datas.get("name", None)
        description = datas.get("description", None)
        icon = datas.get("icon", None)

        res = Category.patch(datas["id"], name, description, icon)
        return res, 200

    def delete(self, id):
        res = Category.delete(id)
        return res, 200