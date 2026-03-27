import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Star, 
  CheckCircle, 
  Wrench, 
  Clock, 
  Shield, 
  MapPin,
  Refrigerator,
  Zap,
  Settings,
  ChefHat,
  Snowflake
} from 'lucide-react';

const DynamicLandingPage = () => {
  const [currentCity, setCurrentCity] = useState('San Francisco');

  // City detection logic - can be enhanced with geolocation or URL parsing
  useEffect(() => {
    // Extract city from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get('city');
    if (cityParam) {
      setCurrentCity(cityParam);
    } else {
      // Default fallback cities
      const cities = ['San Francisco', 'Larkspur', 'Sausalito', 'San Rafael', 'Mill Valley', 'Novato'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setCurrentCity(randomCity);
    }
  }, []);

  const services = [
    {
      title: "Refrigerator Repair",
      description: "Keep your food fresh with expert refrigerator repair services",
      icon: <Refrigerator className="w-8 h-8" />
    },
    {
      title: "Washer & Dryer",
      description: "Get your laundry routine back on track with professional repairs",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Dishwasher",
      description: "Clean dishes every time with our dishwasher repair expertise",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Oven & Stove",
      description: "Cook with confidence using our oven and stove repair services",
      icon: <ChefHat className="w-8 h-8" />
    },
    {
      title: "Cooktop",
      description: "Professional cooktop repair for all brands and models",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Freezer",
      description: "Keep your frozen foods safe with expert freezer repairs",
      icon: <Snowflake className="w-8 h-8" />
    },
    {
      title: "Ice Maker",
      description: "Never run out of ice with our professional ice maker repair",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const trustIndicators = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Same/Next Day Service" },
    { icon: <Star className="w-5 h-5" />, text: "5-Star Rated" },
    { icon: <Wrench className="w-5 h-5" />, text: "180-Day Warranty" },
    { icon: <MapPin className="w-5 h-5" />, text: "Service Call: Free with Repair (otherwise $60)" },
    { icon: <Shield className="w-5 h-5" />, text: "Licensed & Insured" }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat pb-[72px] lg:pb-0">
      <style>{`
        @media (max-width: 1023px) {
          .hero-main-h1 { font-size: 28px !important; line-height: 1.2 !important; }
        }
      `}</style>
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Local Family-Owned Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MapPin className="w-4 h-4" />
            Local Family-Owned
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-main-h1 text-4xl md:text-6xl font-bold mb-8"
            style={{ color: '#C0362C' }}
          >
            Appliance Repair in {currentCity}, CA –<br />
            <span className="text-gray-800">Fast, Reliable, Affordable!</span>
          </motion.h1>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <div className="brand-gold">
                  {indicator.icon}
                </div>
                <span className="text-sm md:text-base font-medium">
                  {indicator.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary BOOK NOW Button */}
            <motion.a
              href="/book?go=1"
              target="_blank" rel="noopener noreferrer"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: '#C0362C' }}
            >
              BOOK NOW
            </motion.a>

            {/* Secondary Call Button */}
            <motion.a
              href="tel:7605435733"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg border-2 transition-all duration-300 hover:shadow-lg"
              style={{ 
                color: '#2C3E50', 
                borderColor: '#2C3E50',
                backgroundColor: 'transparent'
              }}
            >
              <Phone className="w-5 h-5" />
              CALL NOW: (760) 543-5733
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Appliance Repair Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert repair services for all major appliance brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="mb-4 flex justify-center" className="brand-gold">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <motion.a
                    href="https://fixitbay.housecallpro.com/book/"
                    target="_blank" rel="noopener noreferrer"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-md"
                    style={{ backgroundColor: '#C0362C' }}
                  >
                    BOOK NOW
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-current " className="brand-gold"" />
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Rated 5 Stars on Google
            </h3>
            
            <p className="text-lg text-gray-600 mb-8">
              Rated 5 stars on Google by local homeowners in {currentCity} and the Bay Area.
            </p>

            <motion.a
              href="https://www.google.com/search?sca_esv=a519e401c1c67213&sxsrf=AE3TifOBkxh-FKVX9NvyCWKa2DZ8STY4qw:1753743378875&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-_Zh_TRb_LPxpYzRDp08qjMXGmOaRGKNLUlfA_vZP00r0wXHbHmqywg5DnRvgpckZkm-WmhnUPhYWx5-ODRBinOZ4m2&q=FixitBay LLC+LLC+Reviews&sa=X&ved=2ahUKEwju6_-Y0-COAxXSKUQIHYKwKk4Q0bkNegQIRRAC"
              target="_blank" rel="noopener noreferrer"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md"
              style={{ 
                color: '#2C3E50', 
                borderColor: '#2C3E50'
              }}
            >
              <Star className="w-5 h-5" />
              Read Our Reviews
            </motion.a>
            
            <motion.a
              href="/blog-faq"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md ml-4"
              style={{ 
                color: '#1A3B5D', 
                borderColor: '#1A3B5D',
                backgroundColor: 'white'
              }}
            >
              <Star className="w-5 h-5" />
              Repair Tips & FAQ
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">FixItBay Appliance Repair</h3>
            <p className="text-gray-300 mb-6">
              Serving San Francisco, Peninsula & Marin County
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="tel:7605435733"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                style={{ backgroundColor: '#C0362C' }}
              >
                <Phone className="w-5 h-5" />
                (760) 543-5733
              </motion.a>
              
              <motion.a
                href="/book?go=1"
                target="_blank" rel="noopener noreferrer"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300"
              >
                BOOK REPAIR ONLINE
              </motion.a>
            </div>

            <div className="text-sm text-gray-400">
              © 2024 FixItBay LLC. Licensed & Insured Appliance Repair Company.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DynamicLandingPage;