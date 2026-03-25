import React from 'react';
import { CalendarCheck, User, SearchCheck, ShieldCheck } from 'lucide-react';

const howItWorksSteps = [
  {
    icon: CalendarCheck,
    title: 'Book Online',
    description: 'Schedule your repair in seconds – no calls, no waiting.'
  },
  {
    icon: User,
    title: 'Technician Arrives',
    description: 'Licensed technician arrives on time with tools ready.'
  },
  {
    icon: SearchCheck,
    title: 'Quick Diagnosis',
    description: 'We diagnose and provide an upfront estimate – no surprises.'
  },
  {
    icon: ShieldCheck,
    title: 'Professional Repair',
    description: 'Fast repair backed by our 180-day warranty on parts and labor.'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20" style={{background: 'linear-gradient(180deg, #E8F4FA 0%, #F0F8FC 100%)'}}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:'#1A3B5D'}}>
            How It Works
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{color:'#4A5568'}}>
            From booking to repair, we make the process simple and transparent
          </p>
        </div>

        {/* Desktop: 4 cards with arrows */}
        <div className="hidden md:flex md:items-stretch md:justify-center max-w-6xl mx-auto">
          <div className="flex items-stretch w-full">
            {howItWorksSteps.map((step, i) => {
              const IconComponent = step.icon;
              const bookingUrl = "/book?go=1";
              
              return (
                <React.Fragment key={i}>
                  <a
                    href={bookingUrl}
                    target="_blank" rel="noopener noreferrer"
                    rel="noreferrer"
                    className="how-it-works-card group relative bg-white rounded-2xl p-6 shadow-md border-2 border-transparent hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 flex-1"
                    style={{
                      minHeight: '280px',
                      maxWidth: '280px',
                      textDecoration: 'none'
                    }}
                  >
                    {/* Step number badge */}
                    <div 
                      className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                      style={{background: 'linear-gradient(135deg, #C0362C 0%, #A02C25 100%)'}}
                    >
                      {i + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-6 mt-8">
                      <div 
                        className="how-it-works-icon w-20 h-20 rounded-full flex items-center justify-center"
                        style={{background: 'linear-gradient(135deg, #E8F4FA 0%, #C0E8F9 100%)'}}
                      >
                        <IconComponent size={36} strokeWidth={2} style={{color:'#1A3B5D'}} />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-center transition-colors" style={{color:'#1A3B5D'}}>
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-center text-sm leading-relaxed" style={{color:'#4A5568'}}>
                      {step.description}
                    </p>
                  <span className="sr-only"> (opens in new tab)</span></a>
                  
                  {/* Connector arrow (not after last card) */}
                  {i < howItWorksSteps.length - 1 && (
                    <div className="flex-shrink-0 flex items-center justify-center px-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-6">
          {howItWorksSteps.map((step, i) => {
            const IconComponent = step.icon;
            const bookingUrl = "/book?go=1";
            
            return (
              <a
                key={i}
                href={bookingUrl}
                target="_blank" rel="noopener noreferrer"
                rel="noreferrer"
                className="how-it-works-card group relative bg-white rounded-2xl p-6 shadow-md border-2 border-transparent hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                style={{
                  minHeight: '280px',
                  textDecoration: 'none'
                }}
              >
                {/* Step number */}
                <div 
                  className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  style={{background: 'linear-gradient(135deg, #C0362C 0%, #A02C25 100%)'}}
                >
                  {i + 1}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6 mt-8">
                  <div 
                    className="how-it-works-icon w-20 h-20 rounded-full flex items-center justify-center"
                    style={{background: 'linear-gradient(135deg, #E8F4FA 0%, #C0E8F9 100%)'}}
                  >
                    <IconComponent size={36} strokeWidth={2} style={{color:'#1A3B5D'}} />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-center transition-colors" style={{color:'#1A3B5D'}}>
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-center text-sm leading-relaxed" style={{color:'#4A5568'}}>
                  {step.description}
                </p>
              <span className="sr-only"> (opens in new tab)</span></a>
            );
          })}
        </div>

        {/* Mobile: Vertical compact list - no scroll needed */}
        <div className="sm:hidden space-y-3 px-2">
          {howItWorksSteps.map((step, i) => {
            const IconComponent = step.icon;
            const bookingUrl = "/book?go=1";
            
            return (
              <a
                key={i}
                href={bookingUrl}
                target="_blank" rel="noopener noreferrer"
                rel="noreferrer"
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 active:shadow-md transition-shadow"
                style={{ textDecoration: 'none' }}
                data-testid={`how-it-works-mobile-step-${i + 1}`}
              >
                {/* Step number + Icon */}
                <div className="flex-shrink-0 relative">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{background: 'linear-gradient(135deg, #E8F4FA 0%, #C0E8F9 100%)'}}
                  >
                    <IconComponent size={26} strokeWidth={2} style={{color:'#1A3B5D'}} />
                  </div>
                  <div 
                    className="absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs shadow"
                    style={{background: 'linear-gradient(135deg, #C0362C 0%, #A02C25 100%)'}}
                  >
                    {i + 1}
                  </div>
                </div>
                
                {/* Text */}
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-base font-bold mb-1" style={{color:'#1A3B5D'}}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{color:'#4A5568'}}>
                    {step.description}
                  </p>
                </div>
              <span className="sr-only"> (opens in new tab)</span></a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
