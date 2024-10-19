from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from controllers import *

app = Flask(__name__)
api = Api(app)

CORS(app, resources={r"/*": {"origins": "*"}})


# ==============================================================================
api.add_resource(Category_Controller, "/category")

# ==============================================================================
api.add_resource(Insurance_Controller, "/insurance")

# ==============================================================================
api.add_resource(InsuranceType_Controller, "/insurance_type")

# ==============================================================================
api.add_resource(Ciip_Controller, "/ciip")

# ==============================================================================
api.add_resource(PolicyType_Controller, "/policy_type")

# ==============================================================================
api.add_resource(Ciip_PolicyType_Controller, "/ciip__policy_type")

# ==============================================================================
api.add_resource(Coverage_Controller, "/coverage")

# ==============================================================================
api.add_resource(Cpt_Coverage_Controller, "/cpt_coverage")

# ==============================================================================
api.add_resource(Option_Controller, "/option")

# ==============================================================================
api.add_resource(Option_Coverage_Controller, "/option_coverage")

# ==============================================================================
api.add_resource(Aggravation_Controller, "/aggravation")

# ==============================================================================
api.add_resource(Cpt_Aggravation_Controller, "/cpt_aggravation")

# ==============================================================================
api.add_resource(Aggravation_Rate_Controller, "/aggravation_rate")

# ==============================================================================
api.add_resource(Domain_Controller, "/domain")

# ==============================================================================
api.add_resource(Aggravation_Aggravation_Controller, "/aggravation_aggravation")

# ==============================================================================
api.add_resource(Company_Controller, "/company")

# ==============================================================================
api.add_resource(Condition_Controller, "/condition")

# ==============================================================================
api.add_resource(Rate_Controller, "/rate")

# ==============================================================================
api.add_resource(Coverage_RateCondition_Controller, "/coverage_rate_condition")

# ==============================================================================
api.add_resource(Simulation_Controller, "/simulation")

# ==============================================================================
api.add_resource(Coverage_Coverage_Controller, "/coverage_coverage")

# ==============================================================================
api.add_resource(Route_Controller, "/route")

# ==============================================================================
api.add_resource(MtDatas_Controller, "/mt_datas")


@app.errorhandler(404)
def page_not_found(e):
    return {"message": f"Route not found {e}"}, 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5005, debug=True)
