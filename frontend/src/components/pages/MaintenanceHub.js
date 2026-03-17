import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';

// Import images
import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import cooktopImg from '../../assets/services/cooktop.jpg';
import wineCoolerImg from '../../assets/services/wine-cooler.jpg';
import washerImg from '../../assets/services/washer.jpg';
import dryerImg from '../../assets/services/dryer.jpg';
import freezerImg from '../../assets/services/freezer.jpg';
import disposalImg from '../../assets/services/disposal.jpg';
import commercialRefrigeratorImg from '../../assets/services/commercial-refrigerator.jpg';
import commercialDishwasherImg from '../../assets/services/commercial-dishwasher.jpg';
import commercialWasherImg from '../../assets/services/commercial-washer.jpg';
import commercialDryerImg from '../../assets/services/commercial-dryer.jpg';
import commercialOvenImg from '../../assets/services/commercial-oven.jpg';

const MaintenanceServicesSection = () => {
  const [activeTab, setActiveTab] = useState('Kitchen');

  const bookingUrl = '/book?go=1';

  const maintenanceServices = [
    // Kitchen
    { 
      name: 'Refrigerator Maintenance', 
      category: 'Kitchen', 
      description: 'Coil cleaning, seal checks, temperature calibration',
      path: '/maintenance/refrigerator',
      image: refrigeratorImg 
    },
    { 
      name: 'Freezer Maintenance', 
      category: 'Kitchen', 
      description: 'Defrost system check, seal inspection, temperature test',
      path: '/maintenance/freezer',
      image: freezerImg 
    },
    { 
      name: 'Dishwasher Maintenance', 
      category: 'Kitchen', 
      description: 'Filter cleaning, spray arm inspection, drain check',
      path: '/maintenance/dishwasher',
      image: dishwasherImg 
    },
    { 
      name: 'Oven/Range Maintenance', 
      category: 'Kitchen', 
      description: 'Burner calibration, door seal check, safety inspection',
      path: '/maintenance/oven-range',
      image: ovenImg 
    },
    { 
      name: 'Cooktop Maintenance', 
      category: 'Kitchen', 
      description: 'Igniter check, burner cleaning, gas leak test',
      path: '/maintenance/cooktop',
      image: cooktopImg 
    },
    { 
      name: 'Garbage Disposal Maintenance', 
      category: 'Kitchen', 
      description: 'Blade sharpening, leak check, motor inspection',
      path: '/maintenance/disposal',
      image: disposalImg 
    },
    { 
      name: 'Wine Cooler Maintenance', 
      category: 'Kitchen', 
      description: 'Temperature calibration, vibration check, seal inspection',
      path: '/maintenance/wine-cooler',
      image: wineCoolerImg 
    },
    
    // Laundry
    { 
      name: 'Washer Maintenance', 
      category: 'Laundry', 
      description: 'Hose inspection, filter cleaning, drum check',
      path: '/maintenance/washer',
      image: washerImg 
    },
    { 
      name: 'Dryer Maintenance', 
      category: 'Laundry', 
      description: 'Vent cleaning, lint removal, heating element check',
      path: '/maintenance/dryer',
      image: dryerImg 
    },
    
    // Commercial
    { 
      name: 'Commercial Refrigerator Maintenance', 
      category: 'Commercial', 
      description: 'Walk-in cooler service, compressor check, door seals',
      path: '/maintenance/commercial-refrigerator',
      image: commercialRefrigeratorImg 
    },
    { 
      name: 'Commercial Dishwasher Maintenance', 
      category: 'Commercial', 
      description: 'High-temp testing, chemical dispenser check, spray arms',
      path: '/maintenance/commercial-dishwasher',
      image: commercialDishwasherImg 
    },
    { 
      name: 'Commercial Washer Maintenance', 
      category: 'Commercial', 
      description: 'Coin-op service, drum bearing check, belt inspection',
      path: '/maintenance/commercial-washer',
      image: commercialWasherImg 
    },
    { 
      name: 'Commercial Dryer Maintenance', 
      category: 'Commercial', 
      description: 'Vent system cleaning, gas valve check, heating elements',
      path: '/maintenance/commercial-dryer',
      image: commercialDryerImg 
    },
    { 
      name: 'Commercial Oven Maintenance', 
      category: 'Commercial', 
      description: 'Thermostat calibration, burner cleaning, safety inspection',
      path: '/maintenance/commercial-oven',
      image: commercialOvenImg 
    },
  ];

  const tabs = ['Kitchen', 'Laundry', 'Commercial'];
  const filteredServices = maintenanceServices.filter(service => service.category === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'#1A3B5D'}}>
            Maintenance Services Available
          </h2>
          <p className="text-base md:text-lg" style={{color:'#4A5568'}}>
            Choose your appliance category to book maintenance service
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white shadow-lg'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              style={
                activeTab === tab
                  ? { background: 'linear-gradient(135deg, #1A3B5D 0%, #2B4A6A 100%)' }
                  : { color: '#1A3B5D' }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1A3B5D' }}>
                    {service.name}
                  </h3>

                  <p className="text-sm mb-5 flex-grow" style={{ color: '#6B7280' }}>
                    {service.description}
                  </p>

                  {/* CTA Button - Link to maintenance page */}
                  <div style={{ marginTop: 'auto' }}>
                    <a
                      href={service.path}
                      className="block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #C0362C 0%, #A02820 100%)',
                        color: 'white'
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const MaintenanceHub = () => {
  const commonProblems = [
    {
      title: 'Appliances Breaking Down Unexpectedly',
      description: 'Regular maintenance prevents costly emergency repairs and unexpected breakdowns.'
    },
    {
      title: 'Higher Energy Bills',
      description: 'Dirty coils and worn components make appliances work harder and use more electricity.'
    },
    {
      title: 'Shortened Appliance Lifespan',
      description: 'Neglected appliances fail 40-50% sooner than well-maintained equipment.'
    },
    {
      title: 'Food Safety Concerns',
      description: 'Refrigerators and freezers running inefficiently can compromise food storage safety.'
    },
    {
      title: 'Warranty Requirements',
      description: 'Many manufacturer warranties require proof of regular professional maintenance.'
    },
    {
      title: 'Commercial Equipment Downtime',
      description: 'Business disruption from broken commercial appliances costs revenue and customers.'
    },
    {
      title: 'Fire and Safety Hazards',
      description: 'Lint buildup in dryers, gas leaks in ovens, and electrical issues create serious risks.'
    },
    {
      title: 'Poor Performance',
      description: 'Appliances that don\'t clean, cool, or heat properly waste your time and money.'
    }
  ];

  const faqData = [
    {
      question: 'How much does appliance maintenance cost?',
      answer: 'For residential appliances, we charge a $60 diagnostic and maintenance service fee. For commercial equipment, the fee is $100. This covers our technician\'s visit, thorough inspection, cleaning, minor adjustments, and detailed recommendations for keeping your appliances running efficiently.'
    },
    {
      question: 'How often should I schedule maintenance?',
      answer: 'We recommend annual maintenance for most residential appliances. Commercial equipment in restaurants, hotels, and laundromats should be serviced every 6 months due to heavy use. High-value appliances like Sub-Zero refrigerators or commercial walk-in coolers benefit from quarterly inspections.'
    },
    {
      question: 'What does maintenance service include?',
      answer: 'Our maintenance service includes cleaning coils and filters, checking electrical connections, testing temperature controls, inspecting hoses and seals, lubricating moving parts, verifying proper operation, and identifying potential issues before they become expensive repairs. We provide a detailed report of findings and recommendations.'
    },
    {
      question: 'Do you service both residential and commercial appliances?',
      answer: 'Yes! We provide maintenance for all residential appliances (refrigerators, washers, dryers, dishwashers, ovens, cooktops) and commercial equipment (walk-in coolers, commercial washers/dryers, restaurant ovens, dishwashers). Our technicians are licensed and experienced with both residential and commercial systems.'
    },
    {
      question: 'Is there a warranty on maintenance work?',
      answer: 'Yes. All maintenance work includes our 180-day warranty. If an issue arises with components we serviced or adjusted during maintenance, we\'ll return at no charge to address it within the 6-month warranty period.'
    }
  ];

  return (
    <ApplianceRepairPageNew
      appliance="Appliance Maintenance"
      pageTitle="Professional Appliance Maintenance Services"
      metaDescription="Preventive appliance maintenance in San Francisco, Peninsula & Marin County. $60 residential, $100 commercial diagnostic fee. Licensed technicians, 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      breadcrumbCategoryName="Home"
      breadcrumbCategoryHref="/"
      relatedServicesCategory="HIDDEN" // Hide Related Services section
      serviceDescription={{
        title: "Professional Preventive Maintenance Service",
        paragraphs: [
          <>When you schedule maintenance with FixitBay, our licensed technicians arrive fully equipped to perform comprehensive inspections and preventive service. For <strong>residential appliances, we charge a $60 diagnostic and maintenance fee</strong>. For <strong>commercial equipment, the fee is $100</strong>. This covers our technician's visit, thorough inspection, cleaning, minor adjustments, and detailed recommendations.</>,
          <>Our maintenance service includes cleaning critical components (coils, filters, lint traps), checking electrical connections and wiring, testing temperature controls and thermostats, inspecting hoses and door seals, lubricating moving parts, verifying proper operation, and identifying potential issues before they become costly repairs. We provide a detailed report of findings and recommendations.</>,
          <>Whether you need maintenance for home appliances (refrigerators, washers, dryers, dishwashers, ovens) or commercial equipment (walk-in coolers, commercial washers, restaurant ovens), we provide the same professional service. Every maintenance visit includes our <strong>180-day warranty</strong> on work performed, ensuring your appliances run reliably long after we leave.</>
        ]
      }}
      relatedServicesSubtitle="Expert repair for all major home appliances"
    >
      {/* Custom Maintenance Services Section with Tabs */}
      <section style={{ background: '#fff', padding: '70px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 16, lineHeight: 1.2 }}>Why Regular Maintenance Matters</h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
            Regular appliance maintenance is the most cost-effective way to protect your investment. Well-maintained appliances last 40-50% longer, run more efficiently (saving 10-25% on energy bills), and break down less frequently. For commercial equipment, routine maintenance also ensures health code compliance and prevents costly emergency repairs during peak business hours.
          </p>
        </div>
      </section>

      <MaintenanceServicesSection />

      <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 16, lineHeight: 1.2 }}>Maintenance Plans & Pricing</h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
            FixitBay offers straightforward maintenance pricing: <strong>$60 for residential appliances</strong> and <strong>$100 for commercial equipment</strong>. Each maintenance visit includes a full inspection, cleaning of critical components, minor adjustments, and a detailed report of findings and recommendations. All maintenance work is backed by our 180-day warranty. For businesses with multiple units, we offer scheduled maintenance programs to keep all your equipment running reliably year-round.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <div className="mt-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { name:'San Francisco', href:'/san-francisco-appliance-repair' },
            { name:'Mill Valley', href:'/mill-valley-appliance-repair' },
            { name:'Pacifica', href:'/pacifica-appliance-repair' },
            { name:'Colma', href:'/colma-appliance-repair' },
            { name:'Daly City', href:'/daly-city-appliance-repair' },
            { name:'South SF', href:'/south-san-francisco-appliance-repair' },
            { name:'San Bruno', href:'/san-bruno-appliance-repair' },
            { name:'Millbrae', href:'/millbrae-appliance-repair' },
            { name:'Brisbane', href:'/brisbane-appliance-repair' },
            { name:'All Areas', href:'/service-areas' }
          ].map((c) => (
            <li key={c.href}>
              <a 
                href={c.href} 
                className="block px-4 py-3 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 text-center font-medium"
                style={{color:'#1A3B5D'}}
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ApplianceRepairPageNew>
  );
};

export default MaintenanceHub;
