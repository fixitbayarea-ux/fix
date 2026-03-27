import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  const handleBookNow = () => {
    // Opens Housecall Pro booking in new window
    window.open('https://www.housecallpro.com', '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:(760) 543-5733';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" 
          alt="San Francisco Golden Gate Bridge"
          width="1920" height="1280"
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/90 via-navy-700/80 to-navy-600/70"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent-gold/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-16 w-32 h-32 bg-emergency-red/20 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Emergency Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-emergency-red/20 backdrop-blur-sm border border-emergency-red/30 rounded-full px-6 py-3 text-white"
          >
            <Clock className="w-5 h-5 text-emergency-red" />
            <span className="font-semibold">24/7 Emergency Service</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-hero font-bold text-white leading-tight text-shadow max-w-5xl mx-auto"
          >
            🚑 <span className="text-gold-gradient">24/7 Emergency</span> Appliance Repair in 
            <br className="hidden md:block" />
            <span className="text-accent-gold"> San Francisco & Bay Area</span>
            <br className="hidden md:block" />
            – Fast, Reliable, Affordable!
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl text-accent-gold-light font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-accent-gold" />
              <span>Same/Next Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6 text-accent-gold" />
              <span>(760) 543-5733</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNow}
              className="bg-emergency-red hover:bg-emergency-red-dark text-white font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
            >
              🔴 BOOK NOW
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 128, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCallNow}
              className="bg-primary-navy hover:bg-navy-600 text-white font-bold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
            >
              🔵 Call NOW: (760) 543-5733
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-16 text-accent-gold-light"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-gold" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-gold" />
              <span className="text-sm font-medium">90-Day Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-gold" />
              <span className="text-sm font-medium">Upfront Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent-gold" />
              <span className="text-sm font-medium">Local Family-Owned</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-gold-light"
      >
        <div className="w-6 h-10 border-2 border-accent-gold-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-gold-light rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;