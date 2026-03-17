from fastapi import FastAPI, APIRouter, HTTPException, Depends, UploadFile, File, Form
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.responses import RedirectResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timedelta
import hashlib
import jwt
import base64
import shutil

# Import CMS routes
from routes.cms import router as cms_router


ROOT_DIR = Path(__file__).parent
# Load .env file, but don't override existing environment variables (for production)
load_dotenv(ROOT_DIR / '.env', override=False)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME')

# Log connection info (without exposing credentials)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
logger.info(f"Connecting to MongoDB at: {mongo_url.split('@')[-1] if '@' in mongo_url else mongo_url}")
logger.info(f"Using database: {db_name}")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Admin Models
class AdminUser(BaseModel):
    username: str
    email: str
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

class AdminLogin(BaseModel):
    username: str
    password: str

class ServicePrice(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    service_name: str
    price_min: float
    price_max: float
    description: str
    category: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ServiceArea(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    city_name: str
    county: str
    zip_codes: List[str] = []
    is_active: bool = True
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BusinessInfo(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    business_name: str = "FixitBay LLC"
    phone: str = "(760) 543-5733"
    email: str = "info@fixitbay.net"
    address: str = "San Francisco Bay Area"
    booking_url: str = "https://book.housecallpro.com/book/FixitBay-LLC/336ac28909f0491299d659eae174f93e?v2=true"
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class GalleryImage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    before_image_url: str
    after_image_url: str
    before_caption: str
    after_caption: str
    category: str
    is_active: bool = True
    uploaded_at: datetime = Field(default_factory=datetime.utcnow)

class ServiceImage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    category: str
    description: str
    path: str
    image_filename: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ServiceImageUpdate(BaseModel):
    name: Optional[str] = None
    category: Optional[str] = None
    description: Optional[str] = None

# Security setup
SECRET_KEY = os.getenv("JWT_SECRET_KEY", "your-secret-key-change-this-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440  # 24 hours

security = HTTPBearer()

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Could not validate credentials")
        return username
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.JWTError:
        raise HTTPException(status_code=401, detail="Could not validate credentials")

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return hashlib.sha256(plain_password.encode()).hexdigest() == hashed_password

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "FixitBay API is running"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    """Get recent status checks (limited to last 100)"""
    status_checks = await db.status_checks.find(
        {}, 
        {"_id": 0}
    ).sort([("timestamp", -1)]).limit(100).to_list(100)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Admin Authentication Routes
@api_router.post("/admin/login")
async def admin_login(credentials: AdminLogin):
    # Admin credentials from environment variables
    admin_username = os.environ.get("ADMIN_USERNAME", "admin")
    admin_password = os.environ.get("ADMIN_PASSWORD", "Admin152345")
    
    if credentials.username == admin_username and credentials.password == admin_password:
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = create_access_token(
            data={"sub": credentials.username}, expires_delta=access_token_expires
        )
        return {"access_token": access_token, "token_type": "bearer", "expires_in": ACCESS_TOKEN_EXPIRE_MINUTES}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

@api_router.get("/admin/verify")
async def verify_admin_token(current_user: str = Depends(verify_token)):
    return {"valid": True, "user": current_user}

# Service Images Management
@api_router.get("/admin/service-images", response_model=List[ServiceImage])
async def get_service_images(current_user: str = Depends(verify_token)):
    """Get service images (limited to 100)"""
    images = await db.service_images.find({}, {"_id": 0}).limit(100).to_list(100)
    return [ServiceImage(**img) for img in images]

@api_router.put("/admin/service-images/{image_id}")
async def update_service_image(
    image_id: str,
    update_data: ServiceImageUpdate,
    current_user: str = Depends(verify_token)
):
    update_dict = {k: v for k, v in update_data.dict().items() if v is not None}
    if not update_dict:
        raise HTTPException(status_code=400, detail="No fields to update")
    
    update_dict["updated_at"] = datetime.utcnow()
    result = await db.service_images.update_one(
        {"id": image_id},
        {"$set": update_dict}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Service image not found")
    
    updated_image = await db.service_images.find_one({"id": image_id}, {"_id": 0})
    return ServiceImage(**updated_image)

@api_router.post("/admin/service-images/{image_id}/upload")
async def upload_service_image(
    image_id: str,
    file: UploadFile = File(...),
    current_user: str = Depends(verify_token)
):
    # Validate file type
    allowed_types = ["image/jpeg", "image/jpg", "image/png", "image/webp"]
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid file type. Only JPEG, PNG, and WebP are allowed.")
    
    # Get existing service image
    service_image = await db.service_images.find_one({"id": image_id}, {"_id": 0})
    if not service_image:
        raise HTTPException(status_code=404, detail="Service image not found")
    
    # Define upload directory - use environment variable or default
    upload_dir_path = os.environ.get("UPLOAD_DIR", "/app/frontend/src/assets/services")
    upload_dir = Path(upload_dir_path)
    upload_dir.mkdir(parents=True, exist_ok=True)
    
    # Get original filename and extension
    original_filename = service_image["image_filename"]
    file_extension = Path(file.filename).suffix
    
    # Keep the same filename but update extension if different
    new_filename = Path(original_filename).stem + file_extension
    file_path = upload_dir / new_filename
    
    # Save the uploaded file
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to save file: {str(e)}")
    finally:
        file.file.close()
    
    # Update database with new filename if changed
    if new_filename != original_filename:
        await db.service_images.update_one(
            {"id": image_id},
            {"$set": {"image_filename": new_filename, "updated_at": datetime.utcnow()}}
        )
    
    return {
        "message": "Image uploaded successfully",
        "filename": new_filename,
        "path": str(file_path)
    }

# Initialize service images in database
@api_router.post("/admin/service-images/initialize")
async def initialize_service_images(current_user: str = Depends(verify_token)):
    # Check if already initialized
    count = await db.service_images.count_documents({})
    if count > 0:
        return {"message": "Service images already initialized", "count": count}
    
    # Define all services with their current images
    services = [
        {"name": "Refrigerator", "category": "Kitchen", "description": "Not cooling, water leaks, ice maker issues", "path": "/refrigerator-repair", "image_filename": "refrigerator.jpg"},
        {"name": "Freezer", "category": "Kitchen", "description": "Not freezing, frost buildup, temperature issues", "path": "/freezer-repair", "image_filename": "freezer.jpg"},
        {"name": "Dishwasher", "category": "Kitchen", "description": "Not draining, leaking, won't start", "path": "/dishwasher-repair", "image_filename": "dishwasher.jpg"},
        {"name": "Oven", "category": "Kitchen", "description": "Not heating, temperature issues", "path": "/oven-repair", "image_filename": "oven.jpg"},
        {"name": "Stove & Cooktop", "category": "Kitchen", "description": "Burners not working, igniter problems", "path": "/cooktop-repair", "image_filename": "cooktop.jpg"},
        {"name": "Range", "category": "Kitchen", "description": "Combo oven and stove repair", "path": "/oven-repair", "image_filename": "range.jpg"},
        {"name": "Garbage Disposal", "category": "Kitchen", "description": "Jammed, leaking, or humming", "path": "/garbage-disposal-repair", "image_filename": "disposal.jpg"},
        {"name": "Wine Cooler", "category": "Kitchen", "description": "Temperature not holding, not cooling", "path": "/wine-cooler-repair", "image_filename": "wine-cooler.jpg"},
        {"name": "Washer", "category": "Laundry", "description": "Not spinning, draining, or filling", "path": "/washer-repair", "image_filename": "washer.jpg"},
        {"name": "Dryer", "category": "Laundry", "description": "Not heating, tumbling, or turning on", "path": "/dryer-repair", "image_filename": "dryer.jpg"},
        {"name": "Commercial Refrigerator", "category": "Commercial", "description": "Walk-in coolers, reach-in units, display cases", "path": "/commercial-refrigerator-repair", "image_filename": "commercial-refrigerator.jpg"},
        {"name": "Commercial Dishwasher", "category": "Commercial", "description": "Restaurant dishwashers, high-temp units", "path": "/commercial-dishwasher-repair", "image_filename": "commercial-dishwasher.jpg"},
        {"name": "Commercial Washer", "category": "Commercial", "description": "Industrial washing machines, coin-op units", "path": "/commercial-washer-repair", "image_filename": "commercial-washer.jpg"},
        {"name": "Commercial Dryer", "category": "Commercial", "description": "Industrial dryers, coin-op dryers", "path": "/commercial-dryer-repair", "image_filename": "commercial-dryer.jpg"},
    ]
    
    # Insert all services
    service_images = [ServiceImage(**service).dict() for service in services]
    await db.service_images.insert_many(service_images)
    
    return {"message": "Service images initialized successfully", "count": len(service_images)}

# Public endpoint to get service images
@api_router.get("/service-images", response_model=List[ServiceImage])
async def get_public_service_images():
    """Get public service images (limited to 50)"""
    images = await db.service_images.find({}, {"_id": 0}).limit(50).to_list(50)
    return [ServiceImage(**img) for img in images]

# Service Management Routes
@api_router.get("/admin/services", response_model=List[ServicePrice])
async def get_services(current_user: str = Depends(verify_token)):
    """Get services (limited to 100)"""
    services = await db.service_prices.find({}, {"_id": 0}).limit(100).to_list(100)
    return [ServicePrice(**service) for service in services]

@api_router.post("/admin/services", response_model=ServicePrice)
async def create_service(service: ServicePrice, current_user: str = Depends(verify_token)):
    service_dict = service.dict()
    await db.service_prices.insert_one(service_dict)
    return service

@api_router.put("/admin/services/{service_id}", response_model=ServicePrice)
async def update_service(service_id: str, service: ServicePrice, current_user: str = Depends(verify_token)):
    service_dict = service.dict()
    service_dict["updated_at"] = datetime.utcnow()
    await db.service_prices.update_one({"id": service_id}, {"$set": service_dict})
    return service

@api_router.delete("/admin/services/{service_id}")
async def delete_service(service_id: str, current_user: str = Depends(verify_token)):
    result = await db.service_prices.delete_one({"id": service_id})
    if result.deleted_count == 1:
        return {"message": "Service deleted successfully"}
    raise HTTPException(status_code=404, detail="Service not found")

# Service Areas Management
@api_router.get("/admin/service-areas", response_model=List[ServiceArea])
async def get_service_areas(current_user: str = Depends(verify_token)):
    """Get service areas (limited to 100)"""
    areas = await db.service_areas.find({}, {"_id": 0}).limit(100).to_list(100)
    return [ServiceArea(**area) for area in areas]

@api_router.post("/admin/service-areas", response_model=ServiceArea)
async def create_service_area(area: ServiceArea, current_user: str = Depends(verify_token)):
    area_dict = area.dict()
    await db.service_areas.insert_one(area_dict)
    return area

@api_router.put("/admin/service-areas/{area_id}", response_model=ServiceArea)
async def update_service_area(area_id: str, area: ServiceArea, current_user: str = Depends(verify_token)):
    area_dict = area.dict()
    area_dict["updated_at"] = datetime.utcnow()
    await db.service_areas.update_one({"id": area_id}, {"$set": area_dict})
    return area

@api_router.delete("/admin/service-areas/{area_id}")
async def delete_service_area(area_id: str, current_user: str = Depends(verify_token)):
    result = await db.service_areas.delete_one({"id": area_id})
    if result.deleted_count == 1:
        return {"message": "Service area deleted successfully"}
    raise HTTPException(status_code=404, detail="Service area not found")

# Business Information Management
@api_router.get("/admin/business-info", response_model=BusinessInfo)
async def get_business_info(current_user: str = Depends(verify_token)):
    business_info = await db.business_info.find_one()
    if business_info:
        return BusinessInfo(**business_info)
    # Return default if none exists
    default_info = BusinessInfo()
    await db.business_info.insert_one(default_info.dict())
    return default_info

@api_router.put("/admin/business-info", response_model=BusinessInfo)
async def update_business_info(info: BusinessInfo, current_user: str = Depends(verify_token)):
    info_dict = info.dict()
    info_dict["updated_at"] = datetime.utcnow()
    await db.business_info.update_one({}, {"$set": info_dict}, upsert=True)
    return info

# Gallery Management
@api_router.get("/admin/gallery", response_model=List[GalleryImage])
async def get_gallery_images(current_user: str = Depends(verify_token)):
    """Get gallery images (limited to 100)"""
    images = await db.gallery_images.find({}, {"_id": 0}).limit(100).to_list(100)
    return [GalleryImage(**image) for image in images]

@api_router.post("/admin/gallery", response_model=GalleryImage)
async def create_gallery_image(image: GalleryImage, current_user: str = Depends(verify_token)):
    image_dict = image.dict()
    await db.gallery_images.insert_one(image_dict)
    return image

@api_router.put("/admin/gallery/{image_id}", response_model=GalleryImage)
async def update_gallery_image(image_id: str, image: GalleryImage, current_user: str = Depends(verify_token)):
    image_dict = image.dict()
    image_dict["uploaded_at"] = datetime.utcnow()
    await db.gallery_images.update_one({"id": image_id}, {"$set": image_dict})
    return image

@api_router.delete("/admin/gallery/{image_id}")
async def delete_gallery_image(image_id: str, current_user: str = Depends(verify_token)):
    result = await db.gallery_images.delete_one({"id": image_id})
    if result.deleted_count == 1:
        return {"message": "Gallery image deleted successfully"}
    raise HTTPException(status_code=404, detail="Gallery image not found")

# Public Routes (no authentication required)
@api_router.get("/business-info", response_model=BusinessInfo)
async def get_public_business_info():
    business_info = await db.business_info.find_one()
    if business_info:
        return BusinessInfo(**business_info)
    return BusinessInfo()  # Return default

@api_router.get("/gallery", response_model=List[GalleryImage])
async def get_public_gallery():
    """Get active gallery images (limited to 50)"""
    images = await db.gallery_images.find({"is_active": True}, {"_id": 0}).limit(50).to_list(50)
    return [GalleryImage(**image) for image in images]

@api_router.get("/service-areas", response_model=List[ServiceArea])
async def get_public_service_areas():
    """Get active service areas (limited to 100)"""
    areas = await db.service_areas.find({"is_active": True}, {"_id": 0}).limit(100).to_list(100)
    return [ServiceArea(**area) for area in areas]

# Include the router in the main app
app.include_router(api_router)
app.include_router(cms_router)  # CMS routes

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
