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
import jsonpatch

# from flask import render template
# https://israelaminu.medium.com/integrating-postgress-database-to-flask-using-sqlalchemy-2c4ccfc419bc

# Model DB
from .models import StreamModel

# GET Route - /
# ========================================
@app.route('/', methods=['GET'])
def index():
    return 'The Machine is ON!'
    # return render_template("index.html")
    # https://pythonise.com/series/learning-flask/flask-http-methods

# GET Route - /streams
# ========================================
@app.route("/streams", methods=["GET"])
def get():
    # https://stackabuse.com/using-sqlalchemy-with-flask-and-postgresql/
    # https://www.programiz.com/python-programming/nested-dictionary
    # https://stackoverflow.com/questions/53611800/how-handle-patch-method-in-flask-route-as-api/53614394

    # Create payload
    payload = StreamModel.query.all()
    # print(payloads)

    return jsonify([{'id': x.id, 'title': x.title, 'description': x.description, 'userId': x.userId,'image': x.image } for x in payload])
    # return jsonify(streams=[payload.serialize for payload in payloads]) 
    # return {"streams": {list(map(lambda x: jsonify(x), StreamModel.query.all()))}}
    #return {"streams":{"id":"2", "title": "Why do we use it?", "description": "description1", "userId": "userId1", "image": "https://www.meme-arsenal.com/memes/f608e99d270fdb388a50a3175613d2c2.jpg"}}

# GET Route - /streams ID
# ========================================
@app.route("/streams/<int:page_id>", methods=["GET"])
def get_one(page_id):
    # classmethod, staticmethod and property
    # Model to DB
    stream = StreamModel.query.get(page_id)
    #stream = StreamModel.query.filter_by(id=page_id).first()
    print(stream)

    # If result print
    if stream:
        # Serialize to prepare data to display
        return jsonify(stream.serialize())
    return {'message': 'Stream not found'}, 404
    #return f"<h1>{page_id}</h1>"

# POST Route - /streams
# ========================================
@app.route("/streams", methods=["POST"])
def create_post():

    # Aggregate information POST
    data = request.get_json()
    # print(data)

    stream = StreamModel(
        title=data["title"],
        description=data["description"],
        userId=data["userId"],
        image=data["image"]
    )

    # Preparation storage to save
    # db.session.add(stream) # Add to database
    stream = StreamModel(data['title'], data['description'], data['userId'], data['image'])

    # Save to DB
    try:
        stream.save_to_db()
    except:
        return {"message": "An error occurred inserting the stream."}
    # JSONIFY the return - interface
    return jsonify(
        id=stream.id,
    )

# PATCH Route - /streams
# ========================================
@app.route("/streams/<int:page_id>", methods=["PATCH"])
def patch_collection(page_id):
    # Aggregate information POST
    # data = request.get_json()
    # https://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/
    stream = StreamModel.query.get_or_404(page_id)
    
    if 'title' in request.json:
            stream.title = request.json['title']
    if 'description' in request.json:
            stream.description = request.json['description']
    if 'image' in request.json:
            stream.image = request.json['image']

    db.session.commit()
    return f"<h1>Patch {page_id}</h1>"

# DELETE Route - /streams
# ========================================
@app.route("/streams/<int:page_id>", methods=["DELETE"])
def delete_collection(page_id):

    stream = StreamModel.query.get(page_id)
    stream.delete_from_db()

    return f"<h1>Delete {page_id}</h1>"