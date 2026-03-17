"""
CMS API Tests - Iteration 3
Tests for CMS service page endpoints and redirect verification
"""

import pytest
import requests
import os

# Use environment variable for backend URL
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestCMSServicePagesAPI:
    """Tests for /api/cms/service-pages endpoints"""
    
    def test_get_all_service_pages_returns_9_pages(self):
        """CMS API returns 9 service pages at GET /api/cms/service-pages"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") == True, "Expected success=true"
        assert "data" in data, "Expected 'data' key in response"
        
        pages = data["data"]
        assert len(pages) == 9, f"Expected 9 service pages, got {len(pages)}"
        
        # Verify expected service pages exist
        page_ids = [p.get("id") for p in pages]
        expected_pages = [
            "refrigerator-repair",
            "washer-repair", 
            "dryer-repair",
            "dishwasher-repair",
            "oven-repair",
            "ice-maker-repair",
            "cooktop-repair",
            "wine-cooler-repair",
            "garbage-disposal-repair"
        ]
        for expected_id in expected_pages:
            assert expected_id in page_ids, f"Missing expected page: {expected_id}"
    
    def test_get_cooktop_repair_page_with_intro_paragraphs(self):
        """CMS API returns specific page at GET /api/cms/service-pages/cooktop-repair with intro_paragraphs"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages/cooktop-repair")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") == True, "Expected success=true"
        
        page = data["data"]
        assert page["id"] == "cooktop-repair"
        assert page["title"] == "Cooktop Repair"
        assert "intro_paragraphs" in page, "Expected 'intro_paragraphs' field"
        assert len(page["intro_paragraphs"]) >= 1, "Expected at least 1 intro paragraph"
        
        # Verify intro paragraph content
        intro_text = " ".join(page["intro_paragraphs"])
        assert "cooktop" in intro_text.lower(), "Intro should mention cooktop"
        assert "FixitBay" in intro_text, "Intro should mention FixitBay"
    
    def test_get_garbage_disposal_repair_page(self):
        """CMS API returns specific page at GET /api/cms/service-pages/garbage-disposal-repair"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages/garbage-disposal-repair")
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data.get("success") == True, "Expected success=true"
        
        page = data["data"]
        assert page["id"] == "garbage-disposal-repair"
        assert page["title"] == "Garbage Disposal Repair"
        assert "intro_paragraphs" in page
        assert len(page["intro_paragraphs"]) >= 1
        
        # Verify meta content
        assert "meta_title" in page
        assert "meta_description" in page
        assert "garbage disposal" in page["meta_title"].lower()
    
    def test_get_refrigerator_repair_page_full_content(self):
        """Verify refrigerator-repair page has full CMS content"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages/refrigerator-repair")
        assert response.status_code == 200
        
        data = response.json()
        page = data["data"]
        
        # Full content verification
        assert page["id"] == "refrigerator-repair"
        assert len(page["intro_paragraphs"]) == 3, "Refrigerator should have 3 intro paragraphs"
        assert len(page["common_problems"]) >= 5, "Should have at least 5 common problems"
        assert len(page["brands"]) >= 10, "Should list at least 10 brands"
        assert len(page["faqs"]) >= 2, "Should have at least 2 FAQs"
    
    def test_get_wine_cooler_repair_page(self):
        """CMS API returns wine-cooler-repair with intro paragraphs"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages/wine-cooler-repair")
        assert response.status_code == 200
        
        data = response.json()
        page = data["data"]
        
        assert page["id"] == "wine-cooler-repair"
        assert page["title"] == "Wine Cooler Repair"
        assert "intro_paragraphs" in page
        assert len(page["intro_paragraphs"]) >= 1
        
        # Verify content mentions wine cooler topics
        intro_text = " ".join(page["intro_paragraphs"])
        assert "wine" in intro_text.lower()
    
    def test_get_nonexistent_page_returns_404(self):
        """Nonexistent page returns 404"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages/nonexistent-page")
        assert response.status_code == 404


class TestRedirects:
    """Tests for redirect functionality"""
    
    def test_san_rafael_suffix_redirect(self):
        """Redirect: /san-rafael-appliance-repair should redirect to /appliance-repair-san-rafael"""
        # React router handles client-side, so we test if the route doesn't return 404 content
        response = requests.get(f"{BASE_URL}/api/cms/service-pages", timeout=5)
        assert response.status_code == 200  # API is working
        # The actual redirect is client-side in React Router - will test via Playwright

    def test_api_health_check(self):
        """Basic API health check"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages", timeout=5)
        assert response.status_code == 200
        data = response.json()
        assert data.get("success") == True


class TestServicePageStructure:
    """Tests for consistent service page data structure"""
    
    def test_all_pages_have_required_fields(self):
        """All service pages have required fields"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages")
        assert response.status_code == 200
        
        pages = response.json()["data"]
        required_fields = ["id", "title", "meta_title", "meta_description", "h1", "intro_paragraphs", "is_published"]
        
        for page in pages:
            for field in required_fields:
                assert field in page, f"Page {page.get('id', 'unknown')} missing field: {field}"
    
    def test_all_pages_are_published(self):
        """All 9 service pages should be published"""
        response = requests.get(f"{BASE_URL}/api/cms/service-pages")
        pages = response.json()["data"]
        
        for page in pages:
            assert page.get("is_published") == True, f"Page {page['id']} is not published"


if __name__ == "__main__":
    # Allow running directly with python
    pytest.main([__file__, "-v", "--tb=short"])
