import uvicorn

if __name__ == "__main__":
    uvicorn.run("server.app:app", port=3001, reload=True)