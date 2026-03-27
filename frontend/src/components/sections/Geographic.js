import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Car } from 'lucide-react';

const Geographic = () => {
  const serviceAreas = [
    "San Francisco", "Oakland", "San Jose", "Berkeley", "Palo Alto",
    "Daly City", "Fremont", "Sunnyvale", "Redwood City", "Mountain View",
    "Hayward", "Santa Clara", "Union City", "Milpitas", "Cupertino",
    "Foster City", "San Mateo", "Burlingame", "Menlo Park", "Los Altos"
  ];

  const serviceFeatures = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Same/Next Day Service",
      description: "Emergency repairs available 24/7 across the Bay Area"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Mobile Service",
      description: "Fully equipped service vans reach you within 60 minutes"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Coverage",
      description: "Serving 20+ cities throughout San Francisco Bay Area"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Live Dispatch", 
      description: "Real-time scheduling and technician tracking available"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Serving All <span className="text-gold-gradient">Bay Area</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional appliance repair services available throughout San Francisco Bay Area with fast emergency response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              {/* Background Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1457030642598-b037296c9296"
                  alt="San Francisco Bay Area"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-navy-600/40 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="text-accent-gold">Bay Area Wide</span><br />
                      Coverage
                    </h3>
                    <p className="text-xl text-accent-gold-light">
                      From SF to San Jose<br />
                      We've Got You Covered
                    </p>
                  </div>
                </div>
                
                {/* Floating Service Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-emergency-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  24/7 Emergency
                </motion.div>
              </div>
            </div>

            {/* Service Areas Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="text-2xl font-bold text-navy-800 mb-6 text-center">
                Cities We Serve
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {serviceAreas.map((city, index) => (
                  <motion.div
                    key={city}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, color: "#FFD700" }}
                    className="text-gray-700 hover:text-accent-gold font-medium text-sm py-2 px-3 rounded-lg hover:bg-accent-gold/10 transition-all duration-300 cursor-pointer text-center"
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Service Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent-gold text-navy-800 p-4 rounded-xl shadow-md flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-8 text-center text-white"
            >
              <h4 className="text-2xl font-bold mb-4">
                Need Service in Your Area?
              </h4>
              <p className="text-accent-gold-light mb-6">
                Call now for immediate assistance or schedule your appointment online
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:(760) 543-5733'}
                  className="bg-emergency-red hover:bg-emergency-red-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (760) 543-5733
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://www.housecallpro.com', '_blank')}
                  className="bg-accent-gold hover:bg-accent-gold-dark text-navy-800 font-bold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Schedule Online
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-gold mb-2">60 min</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-gold mb-2">20+</div>
            <div className="text-gray-600">Cities Covered Daily</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-gold mb-2">100%</div>
            <div className="text-gray-600">Service Guarantee</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Geographic;