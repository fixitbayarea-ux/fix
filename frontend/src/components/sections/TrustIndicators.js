import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Users, CheckCircle, Clock } from 'lucide-react';

const TrustIndicators = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San Francisco",
      rating: 5,
      text: "Amazing service! Fixed my refrigerator same day and saved me hundreds. Professional and honest team.",
      image: "https://images.unsplash.com/photo-1649768870222-17848797d6b4"
    },
    {
      name: "Mike Chen", 
      location: "Oakland",
      rating: 5,
      text: "Best appliance repair in Bay Area! Quick response, fair pricing, and excellent workmanship.",
      image: "https://images.unsplash.com/photo-1649769069590-268b0b994462" 
    },
    {
      name: "Lisa Rodriguez",
      location: "San Jose", 
      rating: 5,
      text: "Highly recommend FixitBay LLC! They fixed our dishwasher perfectly and provided great warranty coverage.",
      image: "https://images.unsplash.com/photo-1581094016871-d948d70c26cd"
    }
  ];

  const stats = [
    { number: "1,200+", label: "Appliances Fixed in 2024", icon: <Award className="w-8 h-8" /> },
    { number: "4.9", label: "Average Google Rating", icon: <Star className="w-8 h-8" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="w-8 h-8" /> },
    { number: "90 Day", label: "Warranty Coverage", icon: <Shield className="w-8 h-8" /> }
  ];

  const guarantees = [
    "Licensed & Insured Technicians",
    "90-Day Parts & Labor Warranty", 
    "Upfront Transparent Pricing",
    "Local Family-Owned Business",
    "Same/Next Day Emergency Service",
    "All Major Brands Serviced"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Trusted by <span className="text-gold-gradient">Bay Area Families</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 1,200 satisfied customers trust us with their appliance repairs. See why we're the #1 choice in the Bay Area.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-gold/20"
            >
              <div className="text-accent-gold mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-navy-800 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex text-accent-gold mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width="48" height="48"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-navy-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-gold to-accent-gold-light rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8">
              Our <span className="text-navy-700">Promise</span> to You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4"
                >
                  <CheckCircle className="w-6 h-6 text-navy-700 flex-shrink-0" />
                  <span className="text-navy-800 font-medium text-sm">
                    {guarantee}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:(760) 543-5733'}
              className="bg-emergency-red hover:bg-emergency-red-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
            >
              Get Your FREE Estimate Today
            </motion.button>
          </div>
        </motion.div>

        {/* Review Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-8">Find us on these trusted platforms:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-navy-800 font-semibold">Google Reviews ⭐ 4.9</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-navy-800 font-semibold">Yelp ⭐ 4.8</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-navy-800 font-semibold">Thumbtack ⭐ 4.9</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-navy-800 font-semibold">TaskRabbit ⭐ 4.8</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;