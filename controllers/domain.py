from .imports import *
from models import Domain

class Domain_Controller(Resource):

    def get(self):
        domain_id = request.args.get("id")
        domain = Domain.get(int(domain_id))
        if not domain:
            abort(404, message="Domain not found")
        return {"status": "success", "domain": domain.to_dict()}

    def post(self):
        datas = request.get_json()
        offset = datas.get("offset", 0)
        domains = Domain.post(offset=offset)
        domains = [domain.to_dict() for domain in domains]
        return {"status": "success", "domains": domains}

    def put(self):
        datas = request.get_json()
        missing_fields(datas, ["domain"])
        domain = Domain.put(datas["domain"])
        return {"status": "success", "domain": domain.to_dict()}


