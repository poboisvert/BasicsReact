from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class StreamSchema(BaseModel):
    title: str = Field(...)
    description: str = Field(...)
    userId: str = Field(...)
    image: str = Field(...)
    #email: EmailStr = Field(...)
    #date: int = Field(..., gt=0, lt=9)
    #flot: float = Field(..., le=4.0)


    # Database variables - FLASK
    #id = db.Column(db.Integer, primary_key=True)
    #title = db.Column(db.String(80))
    #description = db.Column(db.String(80))
    #userId = db.Column(db.String(80))
    #image = db.Column(db.String(80))

    class Config:
        schema_extra = {
            "example": {
                "title": "John Doe",
                "description": "Water resources engineering",
                "userId": 2,
                "image": "http://test.test",
            }
        }

class UpdateStreamModel(BaseModel):
    title: Optional[str]
    description: Optional[str]
    userId: Optional[int]
    image: Optional[str]
    #email: Optional[EmailStr]
    #year: Optional[int]
    #gpa: Optional[float]

    class Config:
        schema_extra = {
            "example": {
                "title": "John Doe",
                "description": "Water resources engineering",
                "userId": 666,
                "image": "http://test.test",
            }
        }

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }

def ErrorResponseModel(error, code, message):
    return {"error": error, "code": code, "message": message}