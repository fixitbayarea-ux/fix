import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Settings, Home, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Refrigerator Repair",
      description: "Expert repair for all refrigerator brands. From cooling issues to ice maker problems.",
      image: "https://images.unsplash.com/photo-1487770931682-b80013ed9cc9",
      icon: <Home className="w-8 h-8" />,
      features: ["Same/next day service", "All brands", "Warranty included"]
    },
    {
      title: "Washer & Dryer Repair", 
      description: "Professional washer and dryer repair. Get your laundry routine back on track fast.",
      image: "https://images.unsplash.com/photo-1632283572415-5da3717fa4d1",
      icon: <Settings className="w-8 h-8" />,
      features: ["Front & top load", "All models", "Quick turnaround"]
    },
    {
      title: "Dishwasher Repair",
      description: "Complete dishwasher repair services. From leaks to cleaning performance issues.",
      image: "https://images.unsplash.com/photo-1586798271456-a9f41b3fef9f",
      icon: <Zap className="w-8 h-8" />,
      features: ["Leak repair", "Deep cleaning", "Performance optimization"]
    },
    {
      title: "Oven & Stove Repair",
      description: "Professional oven and stove repair. Gas and electric models serviced expertly.",
      image: "https://images.pexels.com/photos/321550/pexels-photo-321550.jpeg",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Gas & electric", "Safety certified", "Parts in stock"]
    }
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Professional Appliance <span className="text-gold-gradient">Repair Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert technicians ready to fix your appliances with fast, reliable service across the Bay Area
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width="400" height="300"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 bg-accent-gold text-navy-800 p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:(760) 543-5733'}
                  className="w-full bg-emergency-red hover:bg-emergency-red-dark text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call for Service
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Preventive Maintenance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-navy-800 to-navy-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Preventive <span className="text-accent-gold">Maintenance</span> Services
            </h3>
            <p className="text-xl text-accent-gold-light mb-8">
              Keep your appliances running smoothly with our professional maintenance programs. 
              Save money and prevent costly breakdowns!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-dark rounded-xl p-6">
                <div className="text-accent-gold text-2xl font-bold">90%</div>
                <div className="text-sm">Breakdowns Prevented</div>
              </div>
              <div className="glass-dark rounded-xl p-6">
                <div className="text-accent-gold text-2xl font-bold">$500+</div>
                <div className="text-sm">Average Savings</div>
              </div>
              <div className="glass-dark rounded-xl p-6">
                <div className="text-accent-gold text-2xl font-bold">2x</div>
                <div className="text-sm">Extended Lifespan</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.housecallpro.com', '_blank')}
              className="bg-accent-gold hover:bg-accent-gold-dark text-navy-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-gold-glow"
            >
              Schedule Maintenance
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;