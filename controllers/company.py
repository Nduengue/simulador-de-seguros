from .imports import *
from models import Company


class Company_Controller(Resource):

    def get(self):
        id = request.args.get("id")
        company = Company.get(int(id))
        if not company:
            abort(404, message="Company not found")
        return {"status": "success", "company": company.to_dict()}

    def post(self):
        companies = Company.get()
        companies = [company.to_dict() for company in companies]
        return {"status": "success", "companies": companies}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["name", "email"])
        res = Company.post(datas["name"], datas["email"])
        return res

    def patch(self):
        datas = request.get_json()
        missing_fields(datas, ["id", "name", "email"])
        res = Company.patch(datas["id"], datas["name"], datas["email"])
        return res
