from pydantic import BaseModel
import bcrypt
from enum import Enum


class UserRole(str, Enum):
    admin = "admin"
    student = "student"
    teacher = "teacher"


class User(BaseModel):
    name: str
    email: str
    password: str
    is_active: bool = True
    is_verified: bool = False
    role: UserRole = UserRole.student

    def hash_password(self):
        self.password = bcrypt.hashpw(
            self.password.encode(), bcrypt.gensalt()).decode()

    def verify_password(self, password: str) -> bool:
        return bcrypt.checkpw(password.encode(), self.password.encode())

    def __str__(self):
        return f"User(name={self.name}, email={self.email}, role={self.role})"


class LoginFrom(BaseModel):
  email:str
  password:str