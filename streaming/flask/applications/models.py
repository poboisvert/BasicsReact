#import sqlite3
from index import db

class StreamModel(db.Model):
    __tablename__ = 'streams'

    # Database variables
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    userId = db.Column(db.String(80))
    description = db.Column(db.String(80))
    image = db.Column(db.String(80))

    def __init__(self, title, description, userId, image):
        self.title = title
        self.description = description
        self.userId = userId
        self.image = image

    @property
    def serialize(self):
        return {'title': self.title, 'description': self.description, 'userId': self.userId, 'image': self.image}

    @classmethod
    def find_by_name(cls, title):
        return cls.query.filter_by(title=title).first()

    @classmethod
    def find_all_new_output(cls):
        return {ix: {i.title, i.description, i.image} for ix, i in enumerate(obs)}

    @classmethod
    def find_all(cls):
        return cls.query.all()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()