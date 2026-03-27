import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LogOut, 
  Edit3, 
  DollarSign, 
  Settings, 
  User, 
  Star,
  Home,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricing, setShowPricing] = useState(false);
  
  const handleLogout = () => {
    localStorage.removeItem('fixitbay_admin_token');
    localStorage.removeItem('fixitbay_admin_email');
    onLogout();
  };

  const adminEmail = localStorage.getItem('fixitbay_admin_email');

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-5 h-5" /> },
    { id: 'homepage', label: 'Edit Homepage', icon: <Edit3 className="w-5 h-5" /> },
    { id: 'pricing', label: 'Pricing Settings', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'services', label: 'Manage Services', icon: <Settings className="w-5 h-5" /> },
    { id: 'technician', label: 'Technician Profile', icon: <User className="w-5 h-5" /> },
    { id: 'reviews', label: 'Review Links', icon: <Star className="w-5 h-5" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#C0362C', color: 'white' }}>
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1A3B5D' }}>Website Status</h3>
                    <p className="text-green-600 font-medium">Live & Active</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#62C2E3', color: 'white' }}>
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1A3B5D' }}>Reviews</h3>
                    <p className="text-yellow-600 font-medium">5.0 ★ Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#F39C12', color: 'white' }}>
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ color: '#1A3B5D' }}>Services</h3>
                    <p className="text-blue-600 font-medium">6 Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1A3B5D' }}>Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {menuItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="p-4 rounded-lg border-2 border-gray-200 hover:border-opacity-50 transition-all duration-300 text-center"
                    style={{ borderColor: '#62C2E3' }}
                  >
                    <div className="flex justify-center mb-2" style={{ color: '#C0362C' }}>
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium" style={{ color: '#1A3B5D' }}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'homepage':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1A3B5D' }}>Edit Homepage Content</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Main Headline
                </label>
                <input
                  type="text"
                  defaultValue="Professional Appliance Repair in {city} – Fast, Reliable, Affordable!"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Service Call Text
                </label>
                <input
                  type="text"
                  defaultValue="Service Call FREE with repair (otherwise $60)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Warranty Text
                </label>
                <input
                  type="text"
                  defaultValue="180-Day Warranty on All Repairs and Labor"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <button 
                className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C0362C' }}
              >
                <Save className="w-5 h-5 inline mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1A3B5D' }}>Pricing Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold" style={{ color: '#1A3B5D' }}>Show Pricing on Service Cards</h4>
                  <p className="text-sm text-gray-600">Display "Starting at $XX" on service cards</p>
                </div>
                <button
                  onClick={() => setShowPricing(!showPricing)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    showPricing ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showPricing ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Service Call Fee (no repair)
                </label>
                <input
                  type="number"
                  defaultValue="60"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Warranty Period (days)
                </label>
                <input
                  type="number"
                  defaultValue="180"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <button 
                className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C0362C' }}
              >
                <Save className="w-5 h-5 inline mr-2" />
                Update Pricing
              </button>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1A3B5D' }}>Manage Services</h3>
            <div className="space-y-4">
              {['Refrigerator Repair', 'Washer & Dryer Repair', 'Dishwasher Repair', 'Oven & Stove Repair', 'Disposal Replacement', 'Ice Maker Repair'].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold" style={{ color: '#1A3B5D' }}>{service}</h4>
                    <p className="text-sm text-gray-600">Active service offering</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              <button 
                className="w-full p-4 border-2 border-dashed rounded-lg text-center hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#62C2E3', color: '#62C2E3' }}
              >
                + Add New Service
              </button>
            </div>
          </div>
        );

      case 'technician':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1A3B5D' }}>Technician Profile</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img
                  src="https://customer-assets.emergentagent.com/job_emergency-repair-1/artifacts/d32xcnmw_photo_2023-04-21_19-12-08.jpg"
                  alt="Andrei"
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                />
                <button 
                  className="px-4 py-2 border-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#62C2E3', color: '#62C2E3' }}
                >
                  Change Photo
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Technician Name
                </label>
                <input
                  type="text"
                  defaultValue="Andrei"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                  Bio/Description
                </label>
                <textarea
                  rows="3"
                  defaultValue="Specializing in appliance repair and maintenance, Andrei brings expert care and trusted service to every home."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ focusRingColor: '#C0362C' }}
                />
              </div>
              
              <button 
                className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C0362C' }}
              >
                <Save className="w-5 h-5 inline mr-2" />
                Update Profile
              </button>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1A3B5D' }}>Review Platform Links</h3>
            <div className="space-y-6">
              {[
                { platform: 'Google', url: 'https://share.google/Q48c6OXAIB7u60fNv' },
                { platform: 'Yelp', url: 'https://www.yelp.com/biz/fixitbay-san-francisco-5?osq=fixitbay' },
                { platform: 'Thumbtack', url: 'https://www.thumbtack.com/ca/san-francisco/handyman/fixitbay-llc/service/479092434655600644' },
                { platform: 'TaskRabbit', url: 'https://tr.co/andrei-s--35' }
              ].map((review, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1A3B5D' }}>
                    {review.platform} Review URL
                  </label>
                  <input
                    type="url"
                    defaultValue={review.url}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    style={{ focusRingColor: '#C0362C' }}
                  />
                </div>
              ))}
              
              <button 
                className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#C0362C' }}
              >
                <Save className="w-5 h-5 inline mr-2" />
                Update Links
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-montserrat" style={{ backgroundColor: '#F8F9FA' }}>
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
                <h1 className="text-xl font-bold" style={{ color: '#1A3B5D' }}>
                  FixitBay LLC Admin
                </h1>
                <p className="text-sm text-gray-600">Welcome, {adminEmail}</p>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-xl shadow-lg p-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={{
                      backgroundColor: activeTab === item.id ? '#C0362C' : 'transparent'
                    }}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;