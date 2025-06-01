from typing import Union
from fastapi import FastAPI
from routers import auth
from config import db
from fastapi.middleware.cors import CORSMiddleware



#api
app = FastAPI()

@app.on_event("startup")
async def startup_db_client():
    await db.create_indexes()

origins = [
    "http://localhost",
    "http://localhost:5174",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(prefix="/api/v1",router=auth.router)


