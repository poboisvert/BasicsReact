import motor.motor_asyncio
from bson.objectid import ObjectId

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.streams

stream_collection = database.get_collection("streams_collection")


# helpers
def stream_helper(stream) -> dict:
    return {
        "id": str(stream["_id"]),
        "description": stream["description"],
        "userId": stream["userId"],
        "image": stream["image"],
    }

# Retrieve all streams present in the database


async def retrieve_streams():
    streams = []
    async for stream in stream_collection.find():
        streams.append(stream_helper(stream))
    return streams


# Add a new stream into to the database
async def add_stream(stream_data: dict) -> dict:
    stream = await stream_collection.insert_one(stream_data)
    new_stream = await stream_collection.find_one({"_id": stream.inserted_id})
    return stream_helper(new_stream)


# Retrieve a stream with a matching ID
async def retrieve_stream(id: str) -> dict:
    stream = await stream_collection.find_one({"_id": ObjectId(id)})
    if stream:
        return stream_helper(stream)


# Update a stream with a matching ID
async def update_stream(id: str, data: dict):
    # Return false if an empty request body is sent.
    if len(data) < 1:
        return False
    stream = await stream_collection.find_one({"_id": ObjectId(id)})
    if stream:
        updated_stream = await stream_collection.update_one(
            {"_id": ObjectId(id)}, {"$set": data}
        )
        if updated_stream:
            return True
        return False


# Delete a stream from the database
async def delete_stream(id: str):
    stream = await stream_collection.find_one({"_id": ObjectId(id)})
    if stream:
        await stream_collection.delete_one({"_id": ObjectId(id)})
        return True
