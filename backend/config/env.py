from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

env = {
    "MONGO_URL": os.getenv("MONGODB_URL", "mongodb://localhost:27017"),
    "MONGO_DB": os.getenv("DATABASE_NAME", "kubeedu"),
    "SECRET_KEY": os.getenv("SECRET_KEY", "your-super-secret-key"),
    "ALGORITHM": "HS256",
    "ACCESS_TOKEN_EXPIRE_MINUTES": int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "30"))
}