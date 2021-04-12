from testing_config import BaseTestConfig
from applications.models import StreamModel
import json

# https://www.ontestautomation.com/writing-tests-for-restful-apis-in-python-using-requests-part-1-basic-tests/
class TestAPI(BaseTestConfig):
    # Generic data to post (CONFIRM WITH MODEL in /flask/applications)
    some_data = {
        "title": "TEST - Title",
        "description": "TEST - description",
        "image": "TEST - his is the image",
        "userId": "TEST",
    }

    def test_post_streams(self):
        res = self.app.post(
                "/streams",
                data=json.dumps(self.some_data),
                content_type='application/json'
        )
        self.assertEqual(res.status_code, 200)
    #assert res.status_code == 200
   # assert res.data == b"Hello, World!"

    def test_get_streams(self):
        headers = {
            #'Authorization': self.token,
        }
        #response = self.app.get('/streams', headers=headers)

        res = self.app.get(
                "/streams"
        )
        self.assertEqual(res.status_code, 200)