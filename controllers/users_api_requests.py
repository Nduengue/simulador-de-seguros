from flask_restful import abort
import requests, json
from env import *

# users api base url
API_POST_HEADERS = {"Content-Type": "application/json"}


def user_put(datas):
    response = requests.put(
        API_URL + f"/user", data=json.dumps(datas), headers=API_POST_HEADERS
    )
    if response.status_code != 200:
        abort(response.status_code, message=response.json())
    return response.json()


def user_patch(datas):
    response = requests.patch(
        API_URL + f"/user", data=json.dumps(datas), headers=API_POST_HEADERS
    )
    if response.status_code != 200:
        abort(response.status_code, message=response.json())
    return response.json()


def user_post():
    response = requests.post(
        API_URL + f"/user", data=json.dumps({}), headers=API_POST_HEADERS
    )
    if response.status_code != 200:
        abort(response.status_code, message=response.json())
    return response.json()
