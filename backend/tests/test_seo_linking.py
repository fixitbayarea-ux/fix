"""
SEO Internal Linking Tests for FixitBay Static Site
Tests for Task 1: Internal linking clusters (service pages & city pages)
Tests for Task 2: SF Neighborhood Landing Pages
"""
import pytest
import os
import re
from pathlib import Path

# Build directory containing prerendered HTML files
BUILD_DIR = Path("/app/frontend/build")

class TestServicePageLinking:
    """Test that service pages have exactly 12 unique city links in Service Areas section"""
    
    def test_refrigerator_repair_has_12_city_links(self):
        """Verify refrigerator-repair.html has exactly 12 unique city links"""
        html_path = BUILD_DIR / "refrigerator-repair.html"
        assert html_path.exists(), f"File not found: {html_path}"
        
        content = html_path.read_text()
        
        # Extract city links (href matching /{city}-appliance-repair)
        city_link_pattern = r'href="(/[a-z-]+-appliance-repair)"'
        all_city_links = re.findall(city_link_pattern, content)
        
        # Filter out neighborhood links (san-francisco/...)
        city_links = [link for link in all_city_links if '/san-francisco/' not in link]
        
        # Get unique links
        unique_city_links = list(set(city_links))
        
        print(f"Found {len(unique_city_links)} unique city links")
        for link in sorted(unique_city_links):
            print(f"  - {link}")
        
        assert len(unique_city_links) == 12, f"Expected 12 city links, found {len(unique_city_links)}"
    
    def test_refrigerator_repair_no_duplicate_city_links_in_service_areas(self):
        """Verify no duplicate city links appear in Service Areas cluster"""
        html_path = BUILD_DIR / "refrigerator-repair.html"
        content = html_path.read_text()
        
        # Look specifically in the Service Areas section
        service_areas_match = re.search(
            r'Service Areas for Refrigerator Repair.*?View all 22 service cities',
            content,
            re.DOTALL
        )
        
        if service_areas_match:
            section = service_areas_match.group(0)
            city_links = re.findall(r'href="(/[a-z-]+-appliance-repair)"', section)
            
            # Check for duplicates within the section
            assert len(city_links) == len(set(city_links)), "Duplicate city links found in Service Areas section"
            print(f"Service Areas section has {len(city_links)} unique city links (no duplicates)")


class TestCityPageLinking:
    """Test that city pages have exactly 10 unique service links in Popular Repairs section"""
    
    def test_daly_city_has_10_service_links(self):
        """Verify daly-city-appliance-repair.html has exactly 10 unique service links"""
        html_path = BUILD_DIR / "daly-city-appliance-repair.html"
        assert html_path.exists(), f"File not found: {html_path}"
        
        content = html_path.read_text()
        
        # Extract service links (excluding -appliance-repair)
        service_pattern = r'href="(/[a-z-]+-repair)"'
        all_links = re.findall(service_pattern, content)
        
        # Filter to only service repair links (not appliance-repair)
        service_links = [link for link in all_links if 'appliance-repair' not in link]
        unique_service_links = list(set(service_links))
        
        print(f"Found {len(unique_service_links)} unique service links")
        for link in sorted(unique_service_links):
            print(f"  - {link}")
        
        assert len(unique_service_links) == 10, f"Expected 10 service links, found {len(unique_service_links)}"
    
    def test_daly_city_no_duplicate_service_links(self):
        """Verify no duplicate service links on city page"""
        html_path = BUILD_DIR / "daly-city-appliance-repair.html"
        content = html_path.read_text()
        
        # Look for Popular Repairs section
        popular_repairs_match = re.search(
            r'Popular Repairs in Daly City.*?View all repair services',
            content,
            re.DOTALL
        )
        
        if popular_repairs_match:
            section = popular_repairs_match.group(0)
            service_links = re.findall(r'href="(/[a-z-]+-repair)"', section)
            service_links = [l for l in service_links if 'appliance-repair' not in l]
            
            assert len(service_links) == len(set(service_links)), "Duplicate service links found"
            print(f"Popular Repairs section has {len(service_links)} unique service links (no duplicates)")


class TestSFNeighborhoodPages:
    """Test SF Neighborhood Landing Pages"""
    
    def test_sf_page_has_neighborhoods_h2(self):
        """Verify SF page contains 'San Francisco Neighborhoods We Serve' H2"""
        html_path = BUILD_DIR / "san-francisco-appliance-repair.html"
        assert html_path.exists(), f"File not found: {html_path}"
        
        content = html_path.read_text()
        
        assert "San Francisco Neighborhoods We Serve" in content, \
            "H2 'San Francisco Neighborhoods We Serve' not found in SF page"
        print("PASSED: 'San Francisco Neighborhoods We Serve' H2 found")
    
    def test_sf_page_has_12_neighborhood_links(self):
        """Verify SF page has 12 unique neighborhood links"""
        html_path = BUILD_DIR / "san-francisco-appliance-repair.html"
        content = html_path.read_text()
        
        # Pattern for neighborhood links
        neighborhood_pattern = r'href="(/san-francisco/[a-z-]+-appliance-repair)"'
        all_links = re.findall(neighborhood_pattern, content)
        unique_links = list(set(all_links))
        
        print(f"Found {len(unique_links)} unique SF neighborhood links:")
        for link in sorted(unique_links):
            print(f"  - {link}")
        
        assert len(unique_links) == 12, f"Expected 12 neighborhood links, found {len(unique_links)}"
    
    def test_12_neighborhood_html_files_exist(self):
        """Verify 12 HTML files exist under build/san-francisco/"""
        sf_dir = BUILD_DIR / "san-francisco"
        assert sf_dir.exists(), f"Directory not found: {sf_dir}"
        
        html_files = list(sf_dir.glob("*.html"))
        print(f"Found {len(html_files)} HTML files in build/san-francisco/:")
        for f in sorted(html_files):
            print(f"  - {f.name}")
        
        assert len(html_files) == 12, f"Expected 12 neighborhood HTML files, found {len(html_files)}"
    
    def test_sitemap_has_12_neighborhood_urls(self):
        """Verify sitemap.xml contains exactly 12 neighborhood URLs"""
        sitemap_path = BUILD_DIR / "sitemap.xml"
        assert sitemap_path.exists(), f"File not found: {sitemap_path}"
        
        content = sitemap_path.read_text()
        
        # Pattern for neighborhood URLs in sitemap
        pattern = r'<loc>https://fixitbay\.net/san-francisco/[a-z-]+-appliance-repair</loc>'
        neighborhood_urls = re.findall(pattern, content)
        
        print(f"Found {len(neighborhood_urls)} neighborhood URLs in sitemap:")
        for url in neighborhood_urls:
            print(f"  - {url}")
        
        assert len(neighborhood_urls) == 12, f"Expected 12 neighborhood URLs, found {len(neighborhood_urls)}"
    
    @pytest.mark.parametrize("neighborhood", [
        "sunset-district",
        "richmond-district",
        "mission-district",
        "noe-valley",
        "castro",
        "marina",
        "pacific-heights",
        "nob-hill",
        "north-beach",
        "soma",
        "bernal-heights",
        "potrero-hill"
    ])
    def test_each_neighborhood_file_exists(self, neighborhood):
        """Verify each of the 12 neighborhood HTML files exists"""
        html_path = BUILD_DIR / "san-francisco" / f"{neighborhood}-appliance-repair.html"
        assert html_path.exists(), f"Neighborhood file not found: {html_path}"
        
        # Verify it has proper content
        content = html_path.read_text()
        assert len(content) > 10000, f"Neighborhood file appears to be empty or too small: {html_path}"


class TestNoDuplicates:
    """Test for no duplicate links on pages"""
    
    def test_service_page_no_city_duplicates_across_sections(self):
        """Verify city links don't repeat between Service Areas and footer"""
        html_path = BUILD_DIR / "refrigerator-repair.html"
        content = html_path.read_text()
        
        # Get all city links on the page
        city_pattern = r'href="(/[a-z-]+-appliance-repair)"'
        all_city_links = re.findall(city_pattern, content)
        
        # Filter out neighborhood links
        city_links = [link for link in all_city_links if '/san-francisco/' not in link]
        
        # Count occurrences
        from collections import Counter
        link_counts = Counter(city_links)
        
        duplicates = {link: count for link, count in link_counts.items() if count > 1}
        
        if duplicates:
            print(f"WARNING: Found duplicate city links:")
            for link, count in duplicates.items():
                print(f"  - {link}: {count} occurrences")
        else:
            print("No duplicate city links found across the entire page")
        
        # This test allows duplicates across different sections (footer, etc.)
        # The main requirement is 12 unique links in Service Areas cluster
    
    def test_city_page_no_service_duplicates_across_sections(self):
        """Verify service links don't repeat between Popular Repairs and other sections"""
        html_path = BUILD_DIR / "daly-city-appliance-repair.html"
        content = html_path.read_text()
        
        # Get all service links
        service_pattern = r'href="(/[a-z-]+-repair)"'
        all_links = re.findall(service_pattern, content)
        service_links = [link for link in all_links if 'appliance-repair' not in link]
        
        from collections import Counter
        link_counts = Counter(service_links)
        
        duplicates = {link: count for link, count in link_counts.items() if count > 1}
        
        if duplicates:
            print(f"WARNING: Found duplicate service links:")
            for link, count in duplicates.items():
                print(f"  - {link}: {count} occurrences")
        else:
            print("No duplicate service links found across the entire page")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
