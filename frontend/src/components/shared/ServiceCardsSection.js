import React from 'react';
import { Clock, Award } from 'lucide-react';

// Import images from homepage
import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import freezerImg from '../../assets/services/freezer.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import cooktopImg from '../../assets/services/cooktop.jpg';
import rangeImg from '../../assets/services/range.jpg';
import disposalImg from '../../assets/services/disposal.jpg';
import wineCoolerImg from '../../assets/services/wine-cooler.jpg';
import washerImg from '../../assets/services/washer.jpg';
import dryerImg from '../../assets/services/dryer.jpg';
import commercialRefrigeratorImg from '../../assets/services/commercial-refrigerator.jpg';
import commercialDishwasherImg from '../../assets/services/commercial-dishwasher.jpg';
import commercialWasherImg from '../../assets/services/commercial-washer.jpg';
import commercialDryerImg from '../../assets/services/commercial-dryer.jpg';
import commercialOvenImg from '../../assets/services/commercial-oven.jpg';

// Services data - EXACT copy from homepage
const servicesData = [
  // Kitchen
  { name: 'Refrigerator', category: 'Kitchen', description: 'Not cooling, water leaks, ice maker issues', path: '/refrigerator-repair', image: refrigeratorImg },
  { name: 'Freezer', category: 'Kitchen', description: 'Not freezing, frost buildup, temperature issues', path: '/freezer-repair', image: freezerImg },
  { name: 'Dishwasher', category: 'Kitchen', description: 'Not draining, leaking, won\'t start', path: '/dishwasher-repair', image: dishwasherImg },
  { name: 'Oven', category: 'Kitchen', description: 'Not heating, temperature issues', path: '/oven-repair', image: ovenImg },
  { name: 'Stove & Cooktop', category: 'Kitchen', description: 'Burners not working, igniter problems', path: '/cooktop-repair', image: cooktopImg },
  { name: 'Range', category: 'Kitchen', description: 'Combo oven and stove repair', path: '/oven-repair', image: rangeImg },
  { name: 'Garbage Disposal', category: 'Kitchen', description: 'Jammed, leaking, or humming', path: '/garbage-disposal-repair', image: disposalImg },
  { name: 'Wine Cooler', category: 'Kitchen', description: 'Temperature not holding, not cooling', path: '/wine-cooler-repair', image: wineCoolerImg },
  
  // Laundry
  { name: 'Washer', category: 'Laundry', description: 'Not spinning, draining, or filling', path: '/washer-repair', image: washerImg },
  { name: 'Dryer', category: 'Laundry', description: 'Not heating, tumbling, or turning on', path: '/dryer-repair', image: dryerImg },
  
  // Commercial
  { name: 'Commercial Refrigerator', category: 'Commercial', description: 'Walk-in coolers, reach-in units, display cases', path: '/commercial-refrigerator-repair', image: commercialRefrigeratorImg },
  { name: 'Commercial Dishwasher', category: 'Commercial', description: 'Restaurant dishwashers, high-temp units', path: '/commercial-dishwasher-repair', image: commercialDishwasherImg },
  { name: 'Commercial Washer', category: 'Commercial', description: 'Industrial washing machines, coin-op units', path: '/commercial-washer-repair', image: commercialWasherImg },
  { name: 'Commercial Dryer', category: 'Commercial', description: 'Industrial dryers, coin-op dryers', path: '/commercial-dryer-repair', image: commercialDryerImg },
  { name: 'Commercial Oven', category: 'Commercial', description: 'Restaurant ovens, convection ovens', path: '/commercial-oven-repair', image: commercialOvenImg },
];

const ServiceCard = ({ service }) => {
  return (
    <a 
      href={service.path}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer no-underline"
      style={{textDecoration: 'none'}}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img 
          src={service.image} 
          alt={`${service.name} repair`}
          width="400" height="300"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      {/* Content - flex-grow to push button down */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3" style={{color:'#1A3B5D'}}>
          {service.name}
        </h3>
        
        {/* Description - clamped to 2 lines for consistency */}
        <p 
          className="text-sm mb-4 leading-relaxed" 
          style={{
            color:'#6B7280',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.5rem' // Reserve space for 2 lines
          }}
        >
          {service.description}
        </p>
        
        {/* Features - fixed height container */}
        <div className="flex items-center gap-4 mb-5 text-xs" style={{minHeight: '20px'}}>
          <div className="flex items-center gap-1">
            <Clock size={14} style={{color:'#C0362C'}} />
            <span style={{color:'#4A5568'}}>Same/Next Day Fix</span>
          </div>
          <div className="flex items-center gap-1">
            <Award size={14} style={{color:'#C0362C'}} />
            <span style={{color:'#4A5568'}}>180-Day Warranty</span>
          </div>
        </div>
        
        {/* CTA Button - now visual only, whole card is clickable */}
        <div style={{marginTop: 'auto'}}>
          <div
            className="block w-full py-3 text-center text-white font-bold rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
            style={{background:'#C0362C'}}
          >
            Learn More & Book Now
          </div>
        </div>
      </div>
    </a>
  );
};

const ServiceCardsSection = ({ 
  currentService = null, 
  maxCards = 8, 
  sectionTitle = "Professional Appliance Repair Services",
  sectionSubtitle = "Expert repair for all major home appliances",
  category = null // Filter by category: 'Kitchen', 'Laundry', or 'Commercial'
}) => {
  // Filter by category first, then filter out current service
  let filteredServices = category 
    ? servicesData.filter(s => s.category === category)
    : servicesData;
    
  if (currentService) {
    filteredServices = filteredServices.filter(s => s.name.toLowerCase() !== currentService.toLowerCase());
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{color:'#1A3B5D'}}>
            {sectionTitle}
          </h2>
          <p className="text-base md:text-lg" style={{color:'#4A5568'}}>
            {sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.slice(0, maxCards).map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServiceCardsSection, servicesData };
export default ServiceCardsSection;
