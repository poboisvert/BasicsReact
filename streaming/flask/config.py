import os
from setup import basedir

class DevelopmentConfig(object):
  #  """ Development config. We use Debug mode """
    SECRET_KEY = 'do-i-really-need-this'
    FLASK_RUN_PORT = 3001
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///data.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = True

class TestingConfig(object):
   # """Development configuration."""
    TESTING = True
    DEBUG = True
    WTF_CSRF_ENABLED = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    DEBUG_TB_ENABLED = True
    PRESERVE_CONTEXT_ON_EXCEPTION = False