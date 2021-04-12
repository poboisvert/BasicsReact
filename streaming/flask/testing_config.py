import json
from flask_testing import TestCase

# Applications models, db
from applications.app import app, db
from applications.models import StreamModel

# Os, dir import
import os
from setup import basedir

class BaseTestConfig(TestCase):
    default_user = {
        "email": "default@gmail.com",
        "password": "something2"
    }

    def create_app(self):
        app.config.from_object('config.TestingConfig')
        return app

    def setUp(self):
        self.app = self.create_app().test_client()
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()