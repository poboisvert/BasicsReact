# 
#### Documentation
#
## Flask
#
# https://www.quora.com/Who-is-behind-Flask-and-what-is-the-story-of-its-creation # History of Flask
# https://flask.palletsprojects.com/en/1.1.x/quickstart/#routing
# https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface#WSGI-compatible_applications_and_frameworks
# https://meyerweb.com/eric/tools/dencoder/
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
# https://github.com/lerocha/chinook-database
# https://realpython.com/primer-on-python-decorators/
#
## SQLAlchemy
#
# https://www.sqlalchemy.org/features.html
# https://docs.sqlalchemy.org/en/13/dialects/
# https://docs.sqlalchemy.org/en/13/orm/extensions/automap.html
# https://docs.sqlalchemy.org/en/13/orm/tutorial.html
# https://docs.sqlalchemy.org/en/13/orm/session_basics.html
# https://www.w3schools.com/sql/sql_injection.asp
# https://numpy.org/doc/stable/reference/generated/numpy.ravel.html
# https://sqlite.org/lang_datefunc.html
#
## Authentification - JWT Token (Not use in this module)
#
# https://bezkoder.com/react-hooks-jwt-auth/
#
### Kernel Setup
#
# PythonData Kernel: conda activate PythonData && pip install datetime (if missing)
# 
### FLASK & JSONIFY https://flask.palletsprojects.com/en/1.1.x/api/#flask.json.jsonify 
# 
from flask import request, render_template, jsonify, url_for, redirect
from index import app, db
from sqlalchemy.exc import IntegrityError


# Model DB
from .models import StreamModel

@app.route('/', methods=['GET'])
def index():
    return 'Hello, World!'

@app.route("/streams", methods=["GET"])
def get_user():
    return {"streams":{"id":"2", "title": "Why do we use it?", "description": "description1", "userId": "userId1", "image": "https://www.meme-arsenal.com/memes/f608e99d270fdb388a50a3175613d2c2.jpg"}}