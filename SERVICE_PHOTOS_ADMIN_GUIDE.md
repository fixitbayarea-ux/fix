# 📸 Service Photos Management Guide

## Accessing the Admin Panel

1. **Login URL**: `http://localhost:3000/admin` (or your production domain + `/admin`)
2. **Credentials**:
   - Username: `admin`
   - Password: `FixitAdmin2024!`

## Using the Service Photos Tab

### Overview
The "Service Photos" tab allows you to manage all images displayed in the "Professional Appliance Repair Services" section on your homepage.

### Features

#### 1. **View All Service Images**
- Images are organized by category (Kitchen, Laundry, Commercial)
- Use the category filter buttons at the top to view specific categories
- Each card shows:
  - Current service photo
  - Service name
  - Description
  - Category badge
  - Current filename

#### 2. **Edit Service Information**
- Click **"Edit Info"** button on any service card
- Update:
  - Service name
  - Service description
- Click **"Save"** to apply changes
- Click **"Cancel"** to discard changes

#### 3. **Upload New Photos**
- Click **"Change Photo"** button on any service card
- Select a new image file (JPG, JPEG, PNG, or WebP)
- Maximum recommended file size: 2MB
- The page will automatically reload after successful upload
- Your new photo will be immediately visible on the homepage

### Supported Image Formats
- ✅ JPEG (.jpg, .jpeg)
- ✅ PNG (.png)
- ✅ WebP (.webp)

### Best Practices

1. **Image Dimensions**: Use high-quality images with aspect ratio close to 16:9 or 4:3
2. **File Size**: Keep images under 2MB for optimal loading speed
3. **Image Content**: 
   - Show the actual appliance clearly
   - Use professional, well-lit photos
   - Avoid cluttered backgrounds
4. **Consistency**: Try to maintain similar lighting and style across all service photos

### Technical Details

#### Backend API Endpoints
- `GET /api/admin/service-images` - Fetch all service images
- `PUT /api/admin/service-images/{id}` - Update service info
- `POST /api/admin/service-images/{id}/upload` - Upload new photo
- `POST /api/admin/service-images/initialize` - Initialize database (first-time only)

#### Database
Service images are stored in MongoDB collection: `service_images`

#### File Storage
Physical image files are stored in: `/app/frontend/src/assets/services/`

### Troubleshooting

**Problem**: "Network error" when trying to login
- **Solution**: Check that backend is running (`sudo supervisorctl status backend`)

**Problem**: Image upload fails
- **Solution**: 
  - Verify file format is supported
  - Check file size is under 2MB
  - Ensure you're still logged in (session might have expired)

**Problem**: Changes don't appear on homepage
- **Solution**: 
  - Hard refresh the homepage (Ctrl+Shift+R or Cmd+Shift+R)
  - Clear browser cache
  - Wait a few seconds for the CDN to update

### Micro-interactions on Homepage

The service cards now feature smooth animations:
- ✅ Hover lift effect (desktop only)
- ✅ Image zoom on hover
- ✅ Border highlight on hover
- ✅ CTA button nudge effect
- ✅ Keyboard focus states for accessibility
- ✅ Respects "reduce motion" preferences

All effects are disabled on mobile to maintain clean touch interactions.
