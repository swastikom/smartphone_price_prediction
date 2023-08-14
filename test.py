import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

api_key = os.environ.get('PHONE_SUGGEST_API_KEY')
print(api_key)
