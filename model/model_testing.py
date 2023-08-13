import pickle
import pandas as pd
import numpy as np


with open('model/models/brand_model.pkl', 'rb') as file:
    loaded_model_brand, loaded_encoder_brand, loaded_encoder_processor = pickle.load(file)
    
data_for_brand = {
    'Processor Name': ['Snapdragon 8 Gen2'],
    'Battery Capacity': [5080.0],
    'Front Camera': [13],
    'Display Size(inches)': [6.70],
    'Number of Sim': [2],
}

data_test_input = pd.DataFrame(data_for_brand)

data_test_input['Processor Name'] = loaded_encoder_processor.transform(
    data_test_input['Processor Name'])

res = loaded_model_brand.predict(data_test_input)[0]
res_array = np.array([res])

suggested_brand = loaded_encoder_brand.inverse_transform(res_array)
print(suggested_brand[0])



with open('model/models/price_model.pkl', 'rb') as file:
    loaded_model_price, loaded_encoder_os, loaded_encoder_pro = pickle.load(file)

data_for_price = {
    'os': ['Android v13'],
    'Number of Sim': [2],
    'Processor Name': ['Snapdragon 8 Gen2'],
    'Processor No. of Cores': [8],
    'Ram Size(GB)': [6],
    'Rom Size(GB)': [128.0],
    'Battery Capacity': [5080.0],
    'Display Size(inches)': [6.70],
    'Rear Camera 1': [64],
    'Front Camera': [13],
    'External Card Support':[1],
}

data_test_price = pd.DataFrame(data_for_price)

data_test_price['Processor Name'] = loaded_encoder_pro.transform(
    data_test_price['Processor Name'])

data_test_price['os'] = loaded_encoder_os.transform(
    data_test_price['os'])

res_price = loaded_model_price.predict(data_test_price)[0]
res_price_array = np.array([res_price])


print(int(res_price_array))
