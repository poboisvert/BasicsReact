from fastapi import FastAPI
from server.routes.stream import router as StreamRouter

app = FastAPI()
app.include_router(StreamRouter, tags=["Stream"])


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "This is another machine ON!"}
