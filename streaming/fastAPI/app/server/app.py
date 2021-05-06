from fastapi import FastAPI
from server.routes.stream import router as StreamRouter

# Cors
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Middleware - Cors with Frontend
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(StreamRouter, tags=["Stream"])


@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "This is another machine ON!"}
