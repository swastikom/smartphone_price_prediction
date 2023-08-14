from fastapi import APIRouter, Depends, HTTPException
from enum import Enum
from model.prediction_model import Data
import pandas as pd
import pickle
import numpy as np
import os

router = APIRouter()

class Tags(Enum):
    predict_result = "Predict Result"


@router.get('/', tags=['Home'])
def home():
    return {"message": "Let's Suggest your desired Smartphone!"}



@router.post("/predict_score", tags=[Tags.predict_result])
def prediction(smartphone_data:Data):

    # Determine the directory of the current script
    current_dir = os.path.dirname(os.path.abspath(__file__))

    # Construct paths to the model files based on the current directory
    price_model_path = os.path.join( current_dir, '..', 'ml_model', 'price_model.pkl')
    brand_model_path = os.path.join(current_dir, '..', 'ml_model', 'brand_model.pkl')

    # Model Import
    with open(price_model_path, 'rb') as file:
        loaded_model_price, loaded_encoder_os, loaded_encoder_pro = pickle.load(file)
    with open(brand_model_path, 'rb') as file:
        loaded_model_brand, loaded_encoder_brand, loaded_encoder_processor = pickle.load(file)
    
    # Price Dataframe creation and Prediction
    data_for_price = {
        'os': [smartphone_data.os],
        'Number of Sim': [smartphone_data.Number_of_Sim],
        'Processor Name': [smartphone_data.Processor_Name],
        'Processor No. of Cores': [smartphone_data.Processor_No_of_Cores],
        'Ram Size(GB)': [smartphone_data.Ram_Size_GB],
        'Rom Size(GB)': [smartphone_data.Rom_Size_GB],
        'Battery Capacity': [smartphone_data.Battery_Capacity],
        'Display Size(inches)': [smartphone_data.Display_Size_inches],
        'Rear Camera 1': [smartphone_data.Rear_Camera],
        'Front Camera': [smartphone_data.Front_Camera],
        'External Card Support': [smartphone_data.External_Card_Support],
    }
    
    data_predict_price = pd.DataFrame(data_for_price)
    data_predict_price['Processor Name'] = loaded_encoder_pro.transform(data_predict_price['Processor Name'])
    data_predict_price['os'] = loaded_encoder_os.transform(data_predict_price['os'])
    res_price = loaded_model_price.predict(data_predict_price)[0]
    predicted_price = int(np.array([res_price]))
    
    
    #Brand Dataframe creation and prediction
    data_for_brand = {
        'Processor Name': [smartphone_data.Processor_Name],
        'Battery Capacity': [smartphone_data.Battery_Capacity],
        'Front Camera': [smartphone_data.Front_Camera],
        'Display Size(inches)': [smartphone_data.Display_Size_inches],
        'Number of Sim': [smartphone_data.Number_of_Sim],
    }
    
    data_predict_brand = pd.DataFrame(data_for_brand)
    data_predict_brand['Processor Name'] = loaded_encoder_processor.transform(data_predict_brand['Processor Name'])
    res = loaded_model_brand.predict(data_predict_brand)[0]
    res_array = np.array([res])
    suggested_brand = loaded_encoder_brand.inverse_transform(res_array)
    
    return{
        "estimated_price":predicted_price,
        "suggested_brand":suggested_brand[0]
    }
    
    
