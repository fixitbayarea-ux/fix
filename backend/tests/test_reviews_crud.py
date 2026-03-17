"""
Reviews CRUD API Tests - Iteration 5
Tests GET, POST, PUT, DELETE for /api/cms/reviews
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://city-service-pages.preview.emergentagent.com')


class TestReviewsGET:
    """GET endpoint tests for reviews"""

    def test_get_all_reviews_returns_success(self):
        """GET /api/cms/reviews returns success=true with data array"""
        response = requests.get(f"{BASE_URL}/api/cms/reviews")
        assert response.status_code == 200
        data = response.json()
        assert data.get("success") is True
        assert isinstance(data.get("data"), list)
        print(f"PASS: GET /api/cms/reviews returned {len(data['data'])} reviews")

    def test_get_all_reviews_returns_10_reviews(self):
        """GET /api/cms/reviews returns 10 seeded reviews"""
        response = requests.get(f"{BASE_URL}/api/cms/reviews")
        assert response.status_code == 200
        data = response.json()
        assert len(data["data"]) >= 10, f"Expected at least 10 reviews, got {len(data['data'])}"
        print(f"PASS: GET /api/cms/reviews returned {len(data['data'])} reviews (expected 10+)")

    def test_reviews_have_required_fields(self):
        """Each review has id, source, author, rating, text, is_featured"""
        response = requests.get(f"{BASE_URL}/api/cms/reviews")
        assert response.status_code == 200
        data = response.json()
        
        required_fields = ['id', 'source', 'author', 'rating', 'text', 'is_featured']
        for review in data["data"][:3]:  # Check first 3
            for field in required_fields:
                assert field in review, f"Missing field '{field}' in review {review.get('id')}"
        print("PASS: Reviews have all required fields")

    def test_get_featured_reviews(self):
        """GET /api/cms/reviews/featured returns only featured reviews"""
        response = requests.get(f"{BASE_URL}/api/cms/reviews/featured")
        assert response.status_code == 200
        data = response.json()
        assert data.get("success") is True
        
        # All returned reviews should have is_featured=true
        for review in data["data"]:
            assert review.get("is_featured") is True, f"Review {review['id']} should be featured"
        print(f"PASS: GET /api/cms/reviews/featured returned {len(data['data'])} featured reviews")


class TestReviewsCRUD:
    """POST, PUT, DELETE tests for reviews"""

    def test_create_review(self):
        """POST /api/cms/reviews creates a new review and returns it with id"""
        unique_author = f"TEST_Author_{uuid.uuid4().hex[:8]}"
        payload = {
            "source": "Google",
            "author": unique_author,
            "rating": 5,
            "text": "TEST review text for automated testing",
            "is_featured": False
        }
        
        response = requests.post(f"{BASE_URL}/api/cms/reviews", json=payload)
        assert response.status_code == 200
        data = response.json()
        
        assert data.get("success") is True
        assert "data" in data
        created_review = data["data"]
        
        # Verify returned data
        assert "id" in created_review, "Created review should have an 'id'"
        assert created_review["author"] == unique_author
        assert created_review["source"] == "Google"
        assert created_review["rating"] == 5
        assert created_review["text"] == "TEST review text for automated testing"
        
        print(f"PASS: POST /api/cms/reviews created review with id={created_review['id']}")
        
        # Cleanup: delete the test review
        review_id = created_review["id"]
        delete_response = requests.delete(f"{BASE_URL}/api/cms/reviews/{review_id}")
        assert delete_response.status_code == 200
        print(f"CLEANUP: Deleted test review {review_id}")

    def test_update_review(self):
        """PUT /api/cms/reviews/{id} updates review text"""
        # First create a test review
        unique_author = f"TEST_UpdateAuthor_{uuid.uuid4().hex[:8]}"
        create_payload = {
            "source": "Thumbtack",
            "author": unique_author,
            "rating": 4,
            "text": "Original test review text",
            "is_featured": False
        }
        
        create_response = requests.post(f"{BASE_URL}/api/cms/reviews", json=create_payload)
        assert create_response.status_code == 200
        created_review = create_response.json()["data"]
        review_id = created_review["id"]
        
        # Update the review
        update_payload = {"text": "Updated test review text"}
        update_response = requests.put(f"{BASE_URL}/api/cms/reviews/{review_id}", json=update_payload)
        assert update_response.status_code == 200
        
        updated_data = update_response.json()
        assert updated_data.get("success") is True
        assert updated_data["data"]["text"] == "Updated test review text"
        
        # Verify via GET - make sure update persisted
        get_response = requests.get(f"{BASE_URL}/api/cms/reviews")
        reviews = get_response.json()["data"]
        updated_review = next((r for r in reviews if r["id"] == review_id), None)
        assert updated_review is not None, f"Review {review_id} not found after update"
        assert updated_review["text"] == "Updated test review text"
        
        print(f"PASS: PUT /api/cms/reviews/{review_id} updated review text")
        
        # Cleanup
        delete_response = requests.delete(f"{BASE_URL}/api/cms/reviews/{review_id}")
        assert delete_response.status_code == 200
        print(f"CLEANUP: Deleted test review {review_id}")

    def test_delete_review(self):
        """DELETE /api/cms/reviews/{id} deletes a review"""
        # Create a test review to delete
        unique_author = f"TEST_DeleteAuthor_{uuid.uuid4().hex[:8]}"
        create_payload = {
            "source": "Yelp",
            "author": unique_author,
            "rating": 5,
            "text": "This review will be deleted",
            "is_featured": False
        }
        
        create_response = requests.post(f"{BASE_URL}/api/cms/reviews", json=create_payload)
        assert create_response.status_code == 200
        review_id = create_response.json()["data"]["id"]
        
        # Delete the review
        delete_response = requests.delete(f"{BASE_URL}/api/cms/reviews/{review_id}")
        assert delete_response.status_code == 200
        delete_data = delete_response.json()
        assert delete_data.get("success") is True
        
        print(f"PASS: DELETE /api/cms/reviews/{review_id} succeeded")
        
        # Verify review is gone
        get_response = requests.get(f"{BASE_URL}/api/cms/reviews")
        reviews = get_response.json()["data"]
        deleted_review = next((r for r in reviews if r["id"] == review_id), None)
        assert deleted_review is None, f"Review {review_id} should not exist after delete"
        print(f"VERIFY: Review {review_id} no longer exists")

    def test_delete_nonexistent_review_returns_404(self):
        """DELETE /api/cms/reviews/{nonexistent_id} returns 404"""
        fake_id = "nonexistent_review_id_12345"
        response = requests.delete(f"{BASE_URL}/api/cms/reviews/{fake_id}")
        assert response.status_code == 404
        print("PASS: DELETE nonexistent review returns 404")

    def test_update_nonexistent_review_returns_404(self):
        """PUT /api/cms/reviews/{nonexistent_id} returns 404"""
        fake_id = "nonexistent_review_id_67890"
        update_payload = {"text": "Should fail"}
        response = requests.put(f"{BASE_URL}/api/cms/reviews/{fake_id}", json=update_payload)
        assert response.status_code == 404
        print("PASS: PUT nonexistent review returns 404")


class TestReviewDataIntegrity:
    """Tests for review data quality"""

    def test_review_ids_format(self):
        """Review IDs should be short strings like 'g-1', 't-1' or uuid-based"""
        response = requests.get(f"{BASE_URL}/api/cms/reviews")
        data = response.json()
        
        for review in data["data"]:
            assert isinstance(review["id"], str)
            assert len(review["id"]) > 0
            print(f"  Review ID: {review['id']} - Author: {review['author']}")
        print("PASS: All review IDs are valid strings")

    def test_review_sources_valid(self):
        """Review sources should be Google, Thumbtack, or Yelp"""
        valid_sources = ["Google", "Thumbtack", "Yelp"]
        response = requests.get(f"{BASE_URL}/api/cms/reviews")
        data = response.json()
        
        for review in data["data"]:
            assert review["source"] in valid_sources, f"Invalid source: {review['source']}"
        print("PASS: All reviews have valid sources")

    def test_review_ratings_in_range(self):
        """Ratings should be 1-5"""
        response = requests.get(f"{BASE_URL}/api/cms/reviews")
        data = response.json()
        
        for review in data["data"]:
            assert 1 <= review["rating"] <= 5, f"Rating {review['rating']} out of range"
        print("PASS: All ratings are between 1-5")
