from pydantic import BaseModel

class Data(BaseModel):
    os: str
    Number_of_Sim: int
    Processor_Name: str
    Processor_No_of_Cores: int
    Ram_Size_GB: int
    Rom_Size_GB: float
    Battery_Capacity: float
    Display_Size_inches: float
    Rear_Camera: int
    Front_Camera: int
    External_Card_Support: int
