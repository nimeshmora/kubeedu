from motor.motor_asyncio import AsyncIOMotorClient
from .env import env

# Create MongoDB connection
client = AsyncIOMotorClient(env["MONGO_URL"])
db = client[env["MONGO_DB"]]

# Collections
userCollection = db["users"]

async def create_indexes():
    # Create unique index on email field
    await userCollection.create_index("email", unique=True)
