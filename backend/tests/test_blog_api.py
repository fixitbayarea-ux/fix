"""
Blog API Tests - Iteration 6
Tests for blog posts CRUD endpoints and data structure
Note: AI generation endpoint is NOT tested to avoid API credit usage
"""

import pytest
import requests
import os

# Use environment variable for backend URL
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestBlogPostsAPI:
    """Tests for /api/cms/blog-posts endpoints"""
    
    def test_get_all_blog_posts_returns_5_articles(self):
        """GET /api/cms/blog-posts returns 5 published articles"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") is True, "Expected success=true"
        assert "data" in data, "Expected 'data' key in response"
        
        posts = data["data"]
        assert len(posts) == 5, f"Expected 5 blog posts, got {len(posts)}"
        
        # Verify expected slugs exist
        slugs = [p.get("slug") for p in posts]
        expected_slugs = [
            "refrigerator-repair-cost-san-francisco-2026",
            "samsung-washer-error-codes-guide",
            "dishwasher-maintenance-tips",
            "lg-washer-dryer-error-codes",
            "washer-dryer-repair-cost-bay-area"
        ]
        for expected_slug in expected_slugs:
            assert expected_slug in slugs, f"Missing expected blog post: {expected_slug}"
    
    def test_get_blog_posts_published_only(self):
        """GET /api/cms/blog-posts?published_only=true returns only published articles"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts?published_only=true")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") is True, "Expected success=true"
        
        posts = data["data"]
        # All returned posts should be published
        for post in posts:
            assert post.get("is_published") is True, f"Post {post.get('slug')} should be published"
    
    def test_get_refrigerator_repair_cost_article(self):
        """GET /api/cms/blog-posts/refrigerator-repair-cost-san-francisco-2026 returns article with content"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts/refrigerator-repair-cost-san-francisco-2026")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") is True, "Expected success=true"
        
        post = data["data"]
        assert post["slug"] == "refrigerator-repair-cost-san-francisco-2026"
        assert "title" in post and len(post["title"]) > 0, "Post should have title"
        assert "content" in post and len(post["content"]) > 100, "Post should have substantial content (HTML)"
        assert "excerpt" in post, "Post should have excerpt"
        assert "meta_title" in post, "Post should have meta_title for SEO"
        assert "meta_description" in post, "Post should have meta_description for SEO"
    
    def test_get_samsung_washer_error_codes_article(self):
        """GET /api/cms/blog-posts/samsung-washer-error-codes-guide returns article"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts/samsung-washer-error-codes-guide")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") is True
        
        post = data["data"]
        assert post["slug"] == "samsung-washer-error-codes-guide"
        assert "content" in post and len(post["content"]) > 100, "Post should have HTML content"
        assert "categories" in post, "Post should have categories array"
        assert isinstance(post.get("categories", []), list), "Categories should be a list"
    
    def test_get_dishwasher_maintenance_article(self):
        """GET /api/cms/blog-posts/dishwasher-maintenance-tips returns article"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts/dishwasher-maintenance-tips")
        assert response.status_code == 200
        
        data = response.json()
        post = data["data"]
        assert post["slug"] == "dishwasher-maintenance-tips"
        assert "content" in post
    
    def test_get_lg_washer_dryer_article(self):
        """GET /api/cms/blog-posts/lg-washer-dryer-error-codes returns article"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts/lg-washer-dryer-error-codes")
        assert response.status_code == 200
        
        data = response.json()
        post = data["data"]
        assert post["slug"] == "lg-washer-dryer-error-codes"
    
    def test_get_washer_dryer_repair_cost_article(self):
        """GET /api/cms/blog-posts/washer-dryer-repair-cost-bay-area returns article"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts/washer-dryer-repair-cost-bay-area")
        assert response.status_code == 200
        
        data = response.json()
        post = data["data"]
        assert post["slug"] == "washer-dryer-repair-cost-bay-area"
    
    def test_get_nonexistent_blog_post_returns_404(self):
        """GET /api/cms/blog-posts/nonexistent-slug returns 404"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts/nonexistent-slug")
        assert response.status_code == 404, f"Expected 404, got {response.status_code}"


class TestBlogPostStructure:
    """Tests for blog post data structure"""
    
    def test_all_posts_have_required_fields(self):
        """All blog posts have required fields"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts")
        assert response.status_code == 200
        
        posts = response.json()["data"]
        required_fields = ["slug", "title", "content", "excerpt", "is_published", "meta_title", "meta_description"]
        
        for post in posts:
            for field in required_fields:
                assert field in post, f"Post {post.get('slug', 'unknown')} missing field: {field}"
    
    def test_posts_have_categories_and_tags(self):
        """Blog posts have categories and tags as lists"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts")
        posts = response.json()["data"]
        
        for post in posts:
            assert "categories" in post, f"Post {post['slug']} should have categories"
            assert "tags" in post, f"Post {post['slug']} should have tags"
            assert isinstance(post["categories"], list), f"Categories should be list for {post['slug']}"
            assert isinstance(post["tags"], list), f"Tags should be list for {post['slug']}"
    
    def test_posts_have_author_field(self):
        """Blog posts have author field"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts")
        posts = response.json()["data"]
        
        for post in posts:
            assert "author" in post, f"Post {post['slug']} should have author"
            assert len(post["author"]) > 0, f"Author should not be empty for {post['slug']}"
    
    def test_posts_content_is_html(self):
        """Blog posts content contains HTML tags"""
        response = requests.get(f"{BASE_URL}/api/cms/blog-posts")
        posts = response.json()["data"]
        
        for post in posts:
            content = post.get("content", "")
            # Check for common HTML tags
            has_html = any(tag in content for tag in ["<h2", "<p>", "<ul>", "<h3", "<li>"])
            assert has_html, f"Post {post['slug']} content should contain HTML formatting"


class TestBlogCRUDOperations:
    """Tests for blog CRUD operations (Create, Update, Delete)"""
    
    @pytest.fixture
    def test_blog_post_data(self):
        return {
            "title": "TEST_Blog Post Title",
            "slug": "test-blog-post-slug-pytest",
            "author": "Test Author",
            "excerpt": "This is a test excerpt for pytest.",
            "content": "<p>This is test content.</p><h2>Section</h2><p>More content.</p>",
            "categories": ["Test Category"],
            "tags": ["test", "pytest"],
            "meta_title": "Test Meta Title | FixitBay",
            "meta_description": "Test meta description for SEO",
            "is_published": False,
            "publish_date": "2026-01-15"
        }
    
    def test_create_blog_post(self, test_blog_post_data):
        """POST /api/cms/blog-posts creates a new blog post"""
        response = requests.post(f"{BASE_URL}/api/cms/blog-posts", json=test_blog_post_data)
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data.get("success") is True, "Expected success=true"
        
        post = data["data"]
        assert post["slug"] == test_blog_post_data["slug"]
        assert post["title"] == test_blog_post_data["title"]
        assert "id" in post, "Created post should have an id"
        
        # Cleanup - delete the test post
        requests.delete(f"{BASE_URL}/api/cms/blog-posts/{post['slug']}")
    
    def test_update_blog_post(self, test_blog_post_data):
        """PUT /api/cms/blog-posts/{slug} updates a blog post"""
        # First create the post
        create_response = requests.post(f"{BASE_URL}/api/cms/blog-posts", json=test_blog_post_data)
        assert create_response.status_code == 200
        
        # Update the post
        update_data = {"title": "TEST_Updated Title", "is_published": True}
        update_response = requests.put(
            f"{BASE_URL}/api/cms/blog-posts/{test_blog_post_data['slug']}", 
            json=update_data
        )
        assert update_response.status_code == 200, f"Expected 200, got {update_response.status_code}"
        
        updated = update_response.json()["data"]
        assert updated["title"] == "TEST_Updated Title"
        assert updated["is_published"] is True
        
        # Verify via GET
        get_response = requests.get(f"{BASE_URL}/api/cms/blog-posts/{test_blog_post_data['slug']}")
        assert get_response.status_code == 200
        fetched = get_response.json()["data"]
        assert fetched["title"] == "TEST_Updated Title"
        
        # Cleanup
        requests.delete(f"{BASE_URL}/api/cms/blog-posts/{test_blog_post_data['slug']}")
    
    def test_delete_blog_post(self, test_blog_post_data):
        """DELETE /api/cms/blog-posts/{slug} deletes a blog post"""
        # First create the post
        requests.post(f"{BASE_URL}/api/cms/blog-posts", json=test_blog_post_data)
        
        # Delete the post
        delete_response = requests.delete(f"{BASE_URL}/api/cms/blog-posts/{test_blog_post_data['slug']}")
        assert delete_response.status_code == 200, f"Expected 200, got {delete_response.status_code}"
        
        # Verify it's deleted
        get_response = requests.get(f"{BASE_URL}/api/cms/blog-posts/{test_blog_post_data['slug']}")
        assert get_response.status_code == 404, "Deleted post should return 404"
    
    def test_delete_nonexistent_blog_post_returns_404(self):
        """DELETE /api/cms/blog-posts/nonexistent returns 404"""
        response = requests.delete(f"{BASE_URL}/api/cms/blog-posts/nonexistent-test-slug-xyz")
        assert response.status_code == 404


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
