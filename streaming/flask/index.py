from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import DevelopmentConfig


app = Flask(__name__, static_folder="./static/dist", template_folder="./static")
CORS(app) # CORS for REACT

# BaseConfig 
# https://dev.to/itachiuchiha/how-i-structure-my-flask-apps-3eh8 
# https://www.toptal.com/flask/flask-production-recipes
# https://flask.palletsprojects.com/en/1.1.x/config/#configuring-from-files
# https://blog.atlantishq.de/post/flask-from-dev-to-production/
app.config.from_object(DevelopmentConfig)
db = SQLAlchemy(app)