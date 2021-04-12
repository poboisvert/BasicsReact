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
from flask_restful import Resource, reqparse

# Model DB
from .models import StreamModel

# GET Route - / - Hello World
@app.route('/', methods=['GET'])
def index():
    return 'Hello, World!'

# GET Route - /streams
@app.route("/streams", methods=["GET"])
def get():
    # https://stackabuse.com/using-sqlalchemy-with-flask-and-postgresql/
    # https://www.programiz.com/python-programming/nested-dictionary

    # Create payload
    payloads = StreamModel.query.all()
    # print(payloads)

    return jsonify([{'title': x.title, 'description': x.description, 'image': x.image, 'userId': x.userId, 'id': x.id} for x in payloads])
    # return jsonify(streams=[payload.serialize for payload in payloads]) 
    # return {"streams": {list(map(lambda x: jsonify(x), StreamModel.query.all()))}}
    #return {"streams":{"id":"2", "title": "Why do we use it?", "description": "description1", "userId": "userId1", "image": "https://www.meme-arsenal.com/memes/f608e99d270fdb388a50a3175613d2c2.jpg"}}

# POST Route - /streams
@app.route("/streams", methods=["POST"])
def create_post():

    # Aggregate information POST
    data = request.get_json()
    print(data)

    stream = StreamModel(
        title=data["title"],
        description=data["description"],
        userId=data["userId"],
        image=data["image"]
    )

    # Preparation sotrage to save
    db.session.add(stream)
    
    market = StreamModel(data['title'], data['description'], data['userId'], data['image'])
    # Save to DB
    try:
        market.save_to_db()
    except:
        return {"message": "An error occurred inserting the stream."}
    # JSONIFY the return - interface
    return jsonify(
        id=market.id,
    )