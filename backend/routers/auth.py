from fastapi import APIRouter, Depends, HTTPException, status
from models.user import User, LoginFrom
from config.db import userCollection
from utils.security import create_access_token
from datetime import timedelta

router = APIRouter(
  prefix="/auth",
  tags=["auth"],
  responses={
    404: {"description": "Not found"},
    401: {"description": "Unauthorized"},
    403: {"description": "Forbidden"},
    422: {"description": "Validation Error"},
    500: {"description": "Internal Server Error"},
    400: {"description": "Bad Request"},
  }
)

@router.post("/login")
async def login(request: LoginFrom):
    email = request.email
    password = request.password

    user = await userCollection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    if not User(**user).verify_password(password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
      
    if not user.get("is_verified", False):
        raise HTTPException(status_code=403, detail="User not verified")
    if not user.get("is_active", True):
        raise HTTPException(status_code=403, detail="User is not active")

    # Create access token
    access_token_expires = timedelta(minutes=30)
    token = create_access_token(
        subject=str(user["_id"]),
        expires_delta=access_token_expires
    )

    return {
        "message": "Login successful",
        "token": token,
        "token_type": "bearer"
    }
  
@router.post("/register")
async def register(user: User):
    existing_user = await userCollection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    user.hash_password()
    user_data = user.dict()
    user_data["_id"] = None
    user_data["is_verified"] = False
    user_data["is_active"] = True

    await userCollection.insert_one(user_data)
    return {"message": "User registered successfully"}
  

