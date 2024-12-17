import logging
from logging.handlers import RotatingFileHandler
from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from controllers import *

app = Flask(__name__)
api = Api(app)

CORS(app, resources={r"/*": {"origins": "*"}})

# log register
handler = RotatingFileHandler("flask_log.log", maxBytes=10000, backupCount=1)
handler.setLevel(logging.INFO)
formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)


# ==============================================================================
class Home_Route(Resource):
    def get(self):
        return {"status": "success", "message": "API is running successfully"}


api.add_resource(Home_Route, "/")

# ==============================================================================
api.add_resource(Category_Controller, "/category", "/category/<int:id>")

# ==============================================================================
api.add_resource(
    Insurance_Controller,
    "/insurance",
    "/insurance/<int:id>",
    "/insurance/category/<int:category_id>",
)

# ==============================================================================
api.add_resource(
    InsuranceType_Controller,
    "/insurance_type",
    "/insurance_type/<int:id>",
    "/insurance_type/category/<int:category_id>",
    "/insurance_type/insurance/<int:insurance_id>",
    "/insurance_type/<int:category_id>/<int:insurance_id>",
)

# ==============================================================================
api.add_resource(Ciip_Controller, "/ciip")

# ==============================================================================
api.add_resource(
    PolicyType_Controller,
    "/policy_type",
    "/policy_type/<int:id>",
    "/policy_type/category/<int:category_id>",
    "/policy_type/insurance/<int:insurance_id>",
    "/policy_type/insurance_type/<int:insurance_type_id>",
    "/policy_type/<int:category_id>/<int:insurance_id>/<int:insurance_type_id>",
)

# ==============================================================================
api.add_resource(Ciip_Pt_Controler, "/ciip_pt")

# ==============================================================================
api.add_resource(
    OptionGroup_Controller,
    "/option_group",
    "/option_group/<int:id>",
    "/option_group/insurance_id/<int:insurance_id>",
)

# ==============================================================================
api.add_resource(
    Option_Controller,
    "/option",
    "/option/<int:id>",
    "/option/option_group/<int:option_group_id>"
)

# ==============================================================================
api.add_resource(OGO_Controller, "/ogo")

# ==============================================================================
api.add_resource(Company_Controller, "/company", "/company/<int:id>")

# ==============================================================================
api.add_resource(Condition_Controller, "/condition", "/condition/<int:id>")

# ==============================================================================
api.add_resource(Rate_Controller, "/rate")

# ==============================================================================
api.add_resource(ORC_Controler, "/orc")

# ==============================================================================
api.add_resource(Option_Option_Controller, "/option_option")

# ==============================================================================
api.add_resource(Route_Controller, "/route", "/route/<int:id>")

# ==============================================================================
api.add_resource(MtDatas_Controller, "/mt_datas")

# ==============================================================================
api.add_resource(MtSimulator_Controller, "/simulator/mt/save")

# ==============================================================================
api.add_resource(LifeDatas_Controller, "/life_datas")

# ==============================================================================
api.add_resource(LifeSimulator_Controller, "/simulator/life/save")


@app.errorhandler(404)
def page_not_found(e):
    return {"message": f"Route not found {e}"}, 404


if __name__ == "__main__":
    app.run(port=PORT, debug=True)
