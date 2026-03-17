"""
Content Management System API Routes
Provides CRUD operations for all content types
"""

from fastapi import APIRouter, HTTPException, Depends, UploadFile, File
from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel
import uuid
import os

router = APIRouter(prefix="/api/cms", tags=["CMS"])

# Pydantic models for requests/responses
class ServicePageCreate(BaseModel):
    title: str
    subtitle: Optional[str] = "San Francisco & Bay Area"
    meta_title: str
    meta_description: str
    h1: str
    hero_image: Optional[str] = None
    intro_paragraphs: List[str]
    common_problems: List[dict]
    brands: List[str]
    faqs: List[dict]
    internal_links: List[str]
    is_published: bool = True

class ServicePageUpdate(BaseModel):
    title: Optional[str] = None
    subtitle: Optional[str] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    h1: Optional[str] = None
    hero_image: Optional[str] = None
    intro_paragraphs: Optional[List[str]] = None
    common_problems: Optional[List[dict]] = None
    brands: Optional[List[str]] = None
    faqs: Optional[List[dict]] = None
    internal_links: Optional[List[str]] = None
    is_published: Optional[bool] = None

# --- Review Models ---
class ReviewCreate(BaseModel):
    source: str  # "Google", "Thumbtack", "Yelp"
    author: str
    rating: int = 5
    text: str
    is_featured: bool = True  # Show on homepage carousel

class ReviewUpdate(BaseModel):
    source: Optional[str] = None
    author: Optional[str] = None
    rating: Optional[int] = None
    text: Optional[str] = None
    is_featured: Optional[bool] = None


class CityPageCreate(BaseModel):
    name: str
    slug: str
    region: str
    meta_title: str
    meta_description: str
    h1: str
    intro_text: str
    services_offered: List[str]
    why_choose_section: List[dict]
    brands_list: List[str]
    is_published: bool = True

class BlogPostCreate(BaseModel):
    title: str
    slug: str
    author: str = "FixitBay Team"
    featured_image: Optional[str] = None
    excerpt: str
    content: str  # HTML content
    categories: List[str] = []
    tags: List[str] = []
    meta_title: str
    meta_description: str
    is_published: bool = False
    publish_date: Optional[str] = None

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    author: Optional[str] = None
    featured_image: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    categories: Optional[List[str]] = None
    tags: Optional[List[str]] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    is_published: Optional[bool] = None
    publish_date: Optional[str] = None

class AIBlogRequest(BaseModel):
    topic: str
    keywords: List[str] = []
    tone: str = "professional"  # professional, friendly, expert

class FAQCreate(BaseModel):
    question: str
    answer: str
    category: str
    page_id: Optional[str] = None
    order: int = 0
    is_published: bool = True

# Dependency to get database
async def get_db():
    from server import db
    return db

# ============= SERVICE PAGES =============

@router.get("/service-pages")
async def get_all_service_pages(db = Depends(get_db)):
    """Get all service pages"""
    try:
        pages = await db.service_pages.find({}, {"_id": 0}).to_list(100)
        return {"success": True, "data": pages}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/service-pages/{page_id}")
async def get_service_page(page_id: str, db = Depends(get_db)):
    """Get a single service page"""
    try:
        page = await db.service_pages.find_one({"id": page_id}, {"_id": 0})
        if not page:
            raise HTTPException(status_code=404, detail="Page not found")
        return {"success": True, "data": page}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/service-pages")
async def create_service_page(page: ServicePageCreate, db = Depends(get_db)):
    """Create a new service page"""
    try:
        page_dict = page.dict()
        page_dict["id"] = str(uuid.uuid4())
        page_dict["created_at"] = datetime.utcnow()
        page_dict["updated_at"] = datetime.utcnow()
        
        await db.service_pages.insert_one(page_dict)
        page_dict.pop("_id", None)
        return {"success": True, "data": page_dict, "message": "Service page created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/service-pages/{page_id}")
async def update_service_page(page_id: str, page: ServicePageUpdate, db = Depends(get_db)):
    """Update a service page"""
    try:
        update_data = {k: v for k, v in page.dict().items() if v is not None}
        update_data["updated_at"] = datetime.utcnow()
        
        result = await db.service_pages.update_one(
            {"id": page_id},
            {"$set": update_data}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Page not found")
        
        updated_page = await db.service_pages.find_one({"id": page_id}, {"_id": 0})
        return {"success": True, "data": updated_page, "message": "Service page updated successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/service-pages/{page_id}")
async def delete_service_page(page_id: str, db = Depends(get_db)):
    """Delete a service page"""
    try:
        result = await db.service_pages.delete_one({"id": page_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Page not found")
        return {"success": True, "message": "Service page deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============= CITY PAGES =============

@router.get("/city-pages")
async def get_all_city_pages(db = Depends(get_db)):
    """Get all city pages"""
    try:
        pages = await db.city_pages.find({}, {"_id": 0}).to_list(100)
        return {"success": True, "data": pages}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/city-pages")
async def create_city_page(page: CityPageCreate, db = Depends(get_db)):
    """Create a new city page"""
    try:
        page_dict = page.dict()
        page_dict["id"] = str(uuid.uuid4())
        page_dict["created_at"] = datetime.utcnow()
        page_dict["updated_at"] = datetime.utcnow()
        
        await db.city_pages.insert_one(page_dict)
        return {"success": True, "data": page_dict, "message": "City page created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============= BLOG POSTS =============

@router.get("/blog-posts")
async def get_all_blog_posts(published_only: bool = False, db = Depends(get_db)):
    """Get all blog posts"""
    try:
        query = {"is_published": True} if published_only else {}
        posts = await db.blog_posts.find(query, {"_id": 0}).sort("created_at", -1).to_list(100)
        return {"success": True, "data": posts}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/blog-posts/{slug}")
async def get_blog_post(slug: str, db = Depends(get_db)):
    """Get a single blog post by slug"""
    try:
        post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return {"success": True, "data": post}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/blog-posts")
async def create_blog_post(post: BlogPostCreate, db = Depends(get_db)):
    """Create a new blog post"""
    try:
        post_dict = post.dict()
        post_dict["id"] = str(uuid.uuid4())[:8]
        post_dict["created_at"] = datetime.utcnow().isoformat()
        post_dict["updated_at"] = datetime.utcnow().isoformat()
        await db.blog_posts.insert_one(post_dict)
        post_dict.pop("_id", None)
        return {"success": True, "data": post_dict}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/blog-posts/{slug}")
async def update_blog_post(slug: str, post: BlogPostUpdate, db = Depends(get_db)):
    """Update an existing blog post"""
    try:
        update_data = {k: v for k, v in post.dict().items() if v is not None}
        if not update_data:
            raise HTTPException(status_code=400, detail="No fields to update")
        update_data["updated_at"] = datetime.utcnow().isoformat()
        result = await db.blog_posts.update_one({"slug": slug}, {"$set": update_data})
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Blog post not found")
        updated = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
        return {"success": True, "data": updated}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/blog-posts/{slug}")
async def delete_blog_post(slug: str, db = Depends(get_db)):
    """Delete a blog post"""
    try:
        result = await db.blog_posts.delete_one({"slug": slug})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Blog post not found")
        return {"success": True, "message": "Blog post deleted"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/blog-posts/generate")
async def generate_blog_post(request: AIBlogRequest, db = Depends(get_db)):
    """Generate a blog post using AI"""
    try:
        from emergentintegrations.llm.chat import LlmChat, UserMessage
        
        api_key = os.environ.get("EMERGENT_LLM_KEY")
        if not api_key:
            raise HTTPException(status_code=500, detail="AI key not configured")
        
        chat = LlmChat(
            api_key=api_key,
            session_id=f"blog-gen-{uuid.uuid4()}",
            system_message="""You are an expert SEO content writer for FixitBay LLC, an appliance repair company in San Francisco Bay Area. 
Write blog articles that are:
- 600-900 words
- SEO-optimized with natural keyword usage
- Structured with H2 and H3 headings using HTML tags
- Include practical advice homeowners can use
- Mention FixitBay's services naturally (not salesy)
- Include a FAQ section at the end with 3-4 questions in HTML
- Use <h2>, <h3>, <p>, <ul>, <li>, <strong> HTML tags for formatting
- Do NOT include <h1> tag (it's added separately)
- Write in a professional but approachable tone
- Include San Francisco / Bay Area local references where relevant"""
        )
        
        keywords_str = ", ".join(request.keywords) if request.keywords else "appliance repair, San Francisco, Bay Area"
        
        prompt = f"""Write a blog article about: {request.topic}

Target keywords: {keywords_str}
Tone: {request.tone}

Return ONLY a JSON object with these exact fields (no markdown, no code blocks):
{{"title": "Article Title (60-70 chars, include main keyword)", "slug": "url-friendly-slug", "excerpt": "2-3 sentence summary (150-160 chars)", "content": "Full HTML article content with h2, h3, p, ul tags", "meta_title": "SEO Title | FixitBay (under 60 chars)", "meta_description": "Meta description with keywords (under 160 chars)", "categories": ["category1"], "tags": ["tag1", "tag2", "tag3"]}}"""
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        # Parse JSON from response
        import json as json_module
        # Try to extract JSON from response
        response_text = response.strip()
        if response_text.startswith("```"):
            response_text = response_text.split("```")[1]
            if response_text.startswith("json"):
                response_text = response_text[4:]
        
        article_data = json_module.loads(response_text)
        
        return {"success": True, "data": article_data}
    except json_module.JSONDecodeError:
        raise HTTPException(status_code=500, detail="AI returned invalid format. Try again.")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")

# ============= FAQS =============

@router.get("/faqs")
async def get_all_faqs(category: Optional[str] = None, page_id: Optional[str] = None, db = Depends(get_db)):
    """Get FAQs with optional filtering"""
    try:
        query = {}
        if category:
            query["category"] = category
        if page_id:
            query["page_id"] = page_id
        
        faqs = await db.faqs.find(query, {"_id": 0}).sort("order", 1).to_list(200)
        return {"success": True, "data": faqs}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/faqs")
async def create_faq(faq: FAQCreate, db = Depends(get_db)):
    """Create a new FAQ"""
    try:
        faq_dict = faq.dict()
        faq_dict["id"] = str(uuid.uuid4())
        faq_dict["created_at"] = datetime.utcnow()
        faq_dict["updated_at"] = datetime.utcnow()
        
        await db.faqs.insert_one(faq_dict)
        return {"success": True, "data": faq_dict, "message": "FAQ created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ============= MEDIA/IMAGES =============

@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...), db = Depends(get_db)):
    """Upload an image"""
    try:
        # Validate file type
        if not file.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Generate unique filename
        file_ext = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid.uuid4()}{file_ext}"
        file_path = f"/app/frontend/public/uploads/{unique_filename}"
        
        # Create uploads directory if it doesn't exist
        os.makedirs("/app/frontend/public/uploads", exist_ok=True)
        
        # Save file
        with open(file_path, "wb") as f:
            content = await file.read()
            f.write(content)
        
        # Save metadata to database
        media_data = {
            "id": str(uuid.uuid4()),
            "filename": unique_filename,
            "original_name": file.filename,
            "file_path": file_path,
            "file_url": f"/uploads/{unique_filename}",
            "file_type": file.content_type,
            "file_size": len(content),
            "uploaded_at": datetime.utcnow()
        }
        
        await db.media.insert_one(media_data)
        
        return {
            "success": True,
            "data": {
                "url": media_data["file_url"],
                "filename": unique_filename
            },
            "message": "Image uploaded successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/media")
async def get_all_media(db = Depends(get_db)):
    """Get all uploaded media"""
    try:
        media = await db.media.find({}, {"_id": 0}).sort("uploaded_at", -1).to_list(200)
        return {"success": True, "data": media}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ===== REVIEWS CRUD =====

@router.get("/reviews")
async def get_all_reviews(db = Depends(get_db)):
    """Get all reviews, sorted by created_at desc"""
    try:
        reviews = await db.reviews.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
        return {"success": True, "data": reviews}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/reviews/featured")
async def get_featured_reviews(db = Depends(get_db)):
    """Get featured reviews for homepage carousel"""
    try:
        reviews = await db.reviews.find({"is_featured": True}, {"_id": 0}).sort("created_at", -1).to_list(50)
        return {"success": True, "data": reviews}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/reviews")
async def create_review(review: ReviewCreate, db = Depends(get_db)):
    """Create a new review"""
    try:
        review_dict = review.dict()
        review_dict["id"] = str(uuid.uuid4())[:8]
        review_dict["created_at"] = datetime.utcnow().isoformat()
        review_dict["updated_at"] = datetime.utcnow().isoformat()
        await db.reviews.insert_one(review_dict)
        review_dict.pop("_id", None)
        return {"success": True, "data": review_dict}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/reviews/{review_id}")
async def update_review(review_id: str, review: ReviewUpdate, db = Depends(get_db)):
    """Update an existing review"""
    try:
        update_data = {k: v for k, v in review.dict().items() if v is not None}
        if not update_data:
            raise HTTPException(status_code=400, detail="No fields to update")
        update_data["updated_at"] = datetime.utcnow().isoformat()
        result = await db.reviews.update_one({"id": review_id}, {"$set": update_data})
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Review not found")
        updated = await db.reviews.find_one({"id": review_id}, {"_id": 0})
        return {"success": True, "data": updated}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/reviews/{review_id}")
async def delete_review(review_id: str, db = Depends(get_db)):
    """Delete a review"""
    try:
        result = await db.reviews.delete_one({"id": review_id})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="Review not found")
        return {"success": True, "message": "Review deleted"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

