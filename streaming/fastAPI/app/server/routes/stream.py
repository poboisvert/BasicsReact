from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder

from server.database import (
    add_stream,
    delete_stream,
    retrieve_stream,
    retrieve_streams,
    update_stream,
)
from server.models.stream import (
    ErrorResponseModel,
    ResponseModel,
    StreamSchema,
    UpdateStreamModel,
)

router = APIRouter()

@router.post("/", response_description="Stream data added into the database")
async def add_stream_data(stream: StreamSchema = Body(...)):
    stream = jsonable_encoder(stream)
    new_stream = await add_stream(stream)
    return ResponseModel(new_stream, "Stream added successfully.")