from fastapi import FastAPI
from routes.prediction import router as prediction_router

app = FastAPI()

app.include_router(prediction_router)