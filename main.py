from fastapi import FastAPI
from pydantic import BaseModel
from genai_capstone import run_farm_advisory

app = FastAPI()

class FarmInput(BaseModel):
    Region: str
    Soil_Type: str
    Crop: str
    Rainfall_mm: float
    Temperature_Celsius: float
    Fertilizer_Used: bool
    Irrigation_Used: bool
    Weather_Condition: str
    Days_to_Harvest: int

@app.get("/")
def home():
    return {"message": "Farm Advisory API Running 🚀"}

@app.post("/predict")
def predict(data: FarmInput):
    return run_farm_advisory(data.dict())