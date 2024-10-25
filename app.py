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
api.add_resource(Ciip_Pt_Controler, "/ciip_pt")

# ==============================================================================
api.add_resource(Option_Controller, "/option")

# ==============================================================================
api.add_resource(OptionGroup_Controller, "/option_group")

# ==============================================================================
api.add_resource(OGO_Controller, "/ogo")

# ==============================================================================
api.add_resource(Company_Controller, "/company")

# ==============================================================================
api.add_resource(Condition_Controller, "/condition")

# ==============================================================================
api.add_resource(Rate_Controller, "/rate")

# ==============================================================================
api.add_resource(ORC_Controler, "/orc")

# ==============================================================================
api.add_resource(Option_Option_Controller, "/option_option")

# ==============================================================================
api.add_resource(Route_Controller, "/route")

# ==============================================================================
api.add_resource(MtDatas_Controller, "/mt_datas")

# ==============================================================================
api.add_resource(MtSimulator_Controller, "/simulator/mt/save")

# ==============================================================================
api.add_resource(LifeDatas_Controller, "/life_datas")

# ==============================================================================
api.add_resource(Simulation_Controller, "/simulation")


@app.errorhandler(404)
def page_not_found(e):
    return {"message": f"Route not found {e}"}, 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5008, debug=True)
