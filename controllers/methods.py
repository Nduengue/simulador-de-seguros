from flask_restful import abort


def missing_fields(datas, required_fields):
    missing_fields_list = []
    for field in required_fields:
        if field not in datas:
            missing_fields_list.append(field)

    if len(missing_fields_list) > 0:
        abort(400, message=f"'{missing_fields_list}' are/is required.")
