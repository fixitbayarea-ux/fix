import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  DollarSign, 
  MapPin, 
  Phone, 
  Mail, 
  Image, 
  FileText, 
  Users, 
  BarChart3,
  LogOut,
  Save,
  Plus,
  Edit,
  Trash2,
  Eye,
  Home
} from 'lucide-react';
import AdminLogin from './AdminLogin';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [businessInfo, setBusinessInfo] = useState({});
  const [services, setServices] = useState([]);
  const [serviceAreas, setServiceAreas] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [serviceImages, setServiceImages] = useState([]);

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const expiry = localStorage.getItem('adminTokenExpiry');
    
    if (token && expiry && Date.now() < parseInt(expiry)) {
      verifyToken(token);
    } else {
      setLoading(false);
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminTokenExpiry');
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
        await loadDashboardData(token);
      } else {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminTokenExpiry');
      }
    } catch (err) {
      console.error('Token verification failed:', err);
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminTokenExpiry');
    } finally {
      setLoading(false);
    }
  };

  const loadDashboardData = async (token) => {
    try {
      const headers = { 'Authorization': `Bearer ${token}` };
      
      const [businessResponse, servicesResponse, areasResponse, galleryResponse, serviceImagesResponse] = await Promise.all([
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/business-info`, { headers }),
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/services`, { headers }),
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/service-areas`, { headers }),
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/gallery`, { headers }),
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/service-images`, { headers })
      ]);

      if (businessResponse.ok) {
        setBusinessInfo(await businessResponse.json());
      }
      if (servicesResponse.ok) {
        setServices(await servicesResponse.json());
      }
      if (areasResponse.ok) {
        setServiceAreas(await areasResponse.json());
      }
      if (galleryResponse.ok) {
        setGallery(await galleryResponse.json());
      }
      if (serviceImagesResponse.ok) {
        setServiceImages(await serviceImagesResponse.json());
      }
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    }
  };

  const handleLogin = (token) => {
    setIsAuthenticated(true);
    loadDashboardData(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminTokenExpiry');
    setIsAuthenticated(false);
  };

  const updateBusinessInfo = async (updatedInfo) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/business-info`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedInfo)
      });

      if (response.ok) {
        const data = await response.json();
        setBusinessInfo(data);
        alert('Business information updated successfully!');
      }
    } catch (err) {
      console.error('Failed to update business info:', err);
      alert('Failed to update business information');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'cms', name: 'CMS / Контент', icon: <FileText className="w-5 h-5" />, isLink: true, href: '/admin/cms' },
    { id: 'business', name: 'Business Info', icon: <Settings className="w-5 h-5" /> },
    { id: 'service-images', name: 'Service Photos', icon: <Image className="w-5 h-5" /> },
    { id: 'services', name: 'Services & Pricing', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'areas', name: 'Service Areas', icon: <MapPin className="w-5 h-5" /> },
    { id: 'gallery', name: 'Photo Gallery', icon: <Image className="w-5 h-5" /> },
    { id: 'documents', name: 'Documents', icon: <FileText className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <img
                src="https://customer-assets.emergentagent.com/job_emergency-repair-1/artifacts/3s7loh5z_IMG_9175.PNG"
                alt="FixitBay Logo"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">FixitBay LLC Admin</h1>
                <p className="text-sm text-gray-500">Management Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                View Site
              </motion.a>
              
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <nav className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  tab.isLink ? (
                    <motion.a
                      key={tab.id}
                      href={tab.href}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors text-gray-600 hover:bg-gray-50"
                    >
                      {tab.icon}
                      {tab.name}
                    </motion.a>
                  ) : (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {tab.icon}
                      {tab.name}
                    </motion.button>
                  )
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'business' && (
                <BusinessInfoTab 
                  businessInfo={businessInfo} 
                  onUpdate={updateBusinessInfo} 
                />
              )}
              {activeTab === 'service-images' && (
                <ServiceImagesTab 
                  serviceImages={serviceImages} 
                  setServiceImages={setServiceImages} 
                />
              )}
              {activeTab === 'services' && (
                <ServicesTab 
                  services={services} 
                  setServices={setServices} 
                />
              )}
              {activeTab === 'areas' && (
                <ServiceAreasTab 
                  serviceAreas={serviceAreas} 
                  setServiceAreas={setServiceAreas} 
                />
              )}
              {activeTab === 'gallery' && (
                <GalleryTab 
                  gallery={gallery} 
                  setGallery={setGallery} 
                />
              )}
              {activeTab === 'documents' && <DocumentsTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Active Services</h3>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
              <p className="text-2xl font-bold text-green-600">31</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <Image className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Gallery Images</h3>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Monthly Visits</h3>
              <p className="text-2xl font-bold text-orange-600">1,234</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <Phone className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Update Contact Info</h4>
            <p className="text-sm text-gray-600">Change phone number or email</p>
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <DollarSign className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Manage Pricing</h4>
            <p className="text-sm text-gray-600">Update service prices</p>
          </button>
          <button className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <Image className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Add Photos</h4>
            <p className="text-sm text-gray-600">Upload before/after images</p>
          </button>
        </div>
      </div>
    </div>
  );
};

// Business Info Tab Component
const BusinessInfoTab = ({ businessInfo, onUpdate }) => {
  const [formData, setFormData] = useState(businessInfo || {});

  useEffect(() => {
    setFormData(businessInfo || {});
  }, [businessInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              name="business_name"
              value={formData.business_name || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Booking URL
          </label>
          <input
            type="url"
            name="booking_url"
            value={formData.booking_url || ''}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save className="w-5 h-5" />
          Save Business Information
        </motion.button>
      </form>
    </div>
  );
};

// Service Images Tab Component
const ServiceImagesTab = ({ serviceImages, setServiceImages }) => {
  const [editingImage, setEditingImage] = useState(null);
  const [uploadingId, setUploadingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [initStatus, setInitStatus] = useState(null);

  const categories = ['All', 'Kitchen', 'Laundry', 'Commercial'];

  const handleInitialize = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/service-images/initialize`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setInitStatus({ type: 'success', message: data.message });
        // Reload images
        const imagesResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/service-images`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (imagesResponse.ok) {
          setServiceImages(await imagesResponse.json());
        }
      }
    } catch (err) {
      console.error('Failed to initialize:', err);
      setInitStatus({ type: 'error', message: 'Failed to initialize service images' });
    }
  };

  const handleUpdateImage = async (imageId, updateData) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/service-images/${imageId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      if (response.ok) {
        const updatedImage = await response.json();
        setServiceImages(prev => 
          prev.map(img => img.id === imageId ? updatedImage : img)
        );
        setEditingImage(null);
        alert('Image info updated successfully!');
      }
    } catch (err) {
      console.error('Failed to update image:', err);
      alert('Failed to update image info');
    }
  };

  const handleFileUpload = async (imageId, file) => {
    if (!file) return;

    setUploadingId(imageId);
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/service-images/${imageId}/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        alert('Image uploaded successfully! The page will reload to show the new image.');
        window.location.reload();
      } else {
        const error = await response.json();
        alert(`Failed to upload image: ${error.detail}`);
      }
    } catch (err) {
      console.error('Failed to upload image:', err);
      alert('Failed to upload image');
    } finally {
      setUploadingId(null);
    }
  };

  const filteredImages = filterCategory === 'All' 
    ? serviceImages 
    : serviceImages.filter(img => img.category === filterCategory);

  if (serviceImages.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Photos Management</h2>
        <div className="bg-blue-50 p-8 rounded-xl text-center">
          <Image className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Initialize Service Images</h3>
          <p className="text-gray-600 mb-4">Click below to set up the service images database</p>
          <motion.button
            onClick={handleInitialize}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Initialize Service Images
          </motion.button>
          {initStatus && (
            <div className={`mt-4 p-3 rounded ${initStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {initStatus.message}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Service Photos Management</h2>
        <div className="flex gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image Preview */}
            <div className="relative h-48 bg-gray-100">
              <img
                src={require(`../../assets/services/${image.image_filename}`)}
                alt={image.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold">
                  {image.category}
                </span>
              </div>
            </div>

            {/* Image Info */}
            <div className="p-4">
              {editingImage === image.id ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    defaultValue={image.name}
                    id={`name-${image.id}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Service name"
                  />
                  <textarea
                    defaultValue={image.description}
                    id={`desc-${image.id}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    rows="2"
                    placeholder="Description"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const name = document.getElementById(`name-${image.id}`).value;
                        const description = document.getElementById(`desc-${image.id}`).value;
                        handleUpdateImage(image.id, { name, description });
                      }}
                      className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingImage(null)}
                      className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-gray-900 mb-1">{image.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() => setEditingImage(image.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm hover:bg-blue-100"
                    >
                      <Edit className="w-4 h-4" />
                      Edit Info
                    </button>
                  </div>

                  {/* File Upload */}
                  <div className="border-t pt-3">
                    <label 
                      htmlFor={`file-${image.id}`}
                      className="flex items-center justify-center gap-2 px-3 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm cursor-pointer hover:bg-purple-100 transition-colors"
                    >
                      {uploadingId === image.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Image className="w-4 h-4" />
                          Change Photo
                        </>
                      )}
                    </label>
                    <input
                      id={`file-${image.id}`}
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={(e) => handleFileUpload(image.id, e.target.files[0])}
                      className="hidden"
                      disabled={uploadingId !== null}
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Current: {image.image_filename}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-2">📌 Important Notes:</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Supported formats: JPG, JPEG, PNG, WebP</li>
          <li>• After uploading, the page will reload to display the new image</li>
          <li>• Keep image file sizes under 2MB for best performance</li>
        </ul>
      </div>
    </div>
  );
};

// Services Tab Component (placeholder)
const ServicesTab = ({ services, setServices }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Services & Pricing</h2>
      <p className="text-gray-600">Service pricing management will be implemented here.</p>
    </div>
  );
};

// Service Areas Tab Component (placeholder)
const ServiceAreasTab = ({ serviceAreas, setServiceAreas }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h2>
      <p className="text-gray-600">Service area management will be implemented here.</p>
    </div>
  );
};

// Gallery Tab Component (placeholder)
const GalleryTab = ({ gallery, setGallery }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
      <p className="text-gray-600">Photo gallery management will be implemented here.</p>
    </div>
  );
};

// Documents Tab Component (placeholder)
const DocumentsTab = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents</h2>
      <p className="text-gray-600">Document management will be implemented here.</p>
    </div>
  );
};

export default AdminDashboard;