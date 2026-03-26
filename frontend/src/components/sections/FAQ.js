import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, DollarSign, Clock, Shield } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How much does appliance repair cost in San Francisco?",
      answer: "Our pricing is transparent and upfront! Diagnostic fees start at $89, which is waived when you choose our repair service. Most common repairs range from $150-$400 depending on the appliance and parts needed. We provide written estimates before any work begins, so there are never any surprises.",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      question: "Do you offer same-day appliance repair service?",
      answer: "Yes! We specialize in same-day emergency appliance repair throughout the Bay Area. Our mobile service vans are fully stocked with common parts, and our technicians can typically arrive within 60 minutes of your call. For non-emergency repairs, we offer flexible scheduling options.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      question: "What areas do you service in the Bay Area?",
      answer: "We proudly serve all major Bay Area cities including San Francisco, Oakland, San Jose, Berkeley, Palo Alto, Daly City, Fremont, Sunnyvale, Redwood City, and many more. Our service area covers the entire San Francisco Bay Area with 24/7 emergency coverage.",
      icon: <Phone className="w-5 h-5" />
    },
    {
      question: "What warranty do you provide on repairs?",
      answer: "All our repairs come with a comprehensive 90-day warranty covering both parts and labor. We stand behind our work 100%. If you experience any issues with a repair we've completed, we'll return at no additional charge to make it right.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "What brands of appliances do you repair?",
      answer: "We service all major appliance brands including Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, and many more. Our technicians are factory-trained and carry OEM parts for most popular models. If it's an appliance, we can likely fix it!",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Absolutely! All FixitBay LLC technicians are fully licensed, bonded, and insured. We conduct thorough background checks and provide ongoing training to ensure the highest quality service. You can have complete peace of mind when we're in your home.",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant answers to common questions about our appliance repair services in the Bay Area.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <motion.button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-accent-gold bg-accent-gold/10 p-2 rounded-lg">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-navy-800 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent-gold flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-12 pr-12">
                        <p className="text-gray-600 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-navy-800 to-navy-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have <span className="text-accent-gold">Questions?</span>
          </h3>
          <p className="text-xl text-accent-gold-light mb-8 max-w-2xl mx-auto">
            Our friendly customer service team is available 24/7 to answer any questions and schedule your repair appointment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:(760) 543-5733'}
              className="bg-emergency-red hover:bg-emergency-red-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (760) 543-5733
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.housecallpro.com', '_blank')}
              className="bg-accent-gold hover:bg-accent-gold-dark text-navy-800 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
            >
              Schedule Online
            </motion.button>
          </div>

          {/* Live Chat Option */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-8 border-t border-accent-gold/20"
          >
            <p className="text-accent-gold-light mb-4">
              Or start a live chat for instant support
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-accent-gold border border-accent-gold/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Live chat available 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;