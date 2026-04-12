import React, { useEffect } from 'react';
import BackButton from '../BackButton';
import { Calendar, Phone } from 'lucide-react';
import SEOMetaTags from '../SEOMetaTags';

const DryerRepair = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <SEOMetaTags title="Dryer Repair | FixitBay LLC San Francisco" description="Professional dryer repair in San Francisco, Peninsula & Marin. Not heating, drum not spinning, sensor or vent issues. $80 diagnostic applied to repair. 180-day warranty. Book online with FixitBay." canonical="https://fixitbay.net/dryer-repair" />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative hero py-12" style={{ background: 'linear-gradient(180deg, #A8D5FD 0%, #62C2E3 100%)' }}>
          <div className="container">
            <BackButton />
            <h1 className="h1 mb-4">Dryer Repair</h1>
            <p className="text-lg mb-8" style={{ color: '#1A3B5D' }}>
              Same/next-day dryer repair for all brands. Transparent pricing, licensed technicians, and a 180-day warranty on parts and labor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/book?go=1" className="book-btn">
                <Calendar className="w-5 h-5 mr-2" /> Book Online
              </a>
              <a href="tel:+17605435733" className="contact-btn">
                <Phone className="w-5 h-5 mr-2" /> Call (760) 543-5733
              </a>
            </div>
          </div>
        </section>

        {/* Warranty badge row */}
        <section className="py-10">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="section-white text-center">
              <div className="text-3xl font-bold mb-2">$0</div>
              <div>Service Call with Repair</div>
            </div>
            <div className="badge-gold text-center">
              <div className="text-3xl font-bold mb-2">180 Days</div>
              <div>Warranty on Repairs & Labor</div>
            </div>
            <div className="section-white text-center">
              <div className="text-3xl font-bold mb-2">$80</div>
              <div>Diagnostic Only</div>
            </div>

        {/* Service Areas */}
        <section className="py-6">
          <div className="container">
            <div className="section-white">
              <h2 className="h2" style={{color:'#1A3B5D'}}>Service Areas</h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {[
                  { name:'Mill Valley', href:'/mill-valley-appliance-repair' },
                  { name:'Pacifica', href:'/pacifica-appliance-repair' },
                  { name:'Colma', href:'/colma-appliance-repair' },
                  { name:'Daly City', href:'/daly-city-appliance-repair' },
                  { name:'South SF', href:'/south-san-francisco-appliance-repair' },
                  { name:'San Bruno', href:'/san-bruno-appliance-repair' },
                  { name:'Millbrae', href:'/millbrae-appliance-repair' },
                  { name:'Brisbane', href:'/brisbane-appliance-repair' }
                ].map(c => (
                  <li key={c.href}><a href={c.href} data-ga="service_areas_click" className="hover:underline" style={{color:'#C0362C'}}>{c.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

          </div>
        </section>
      </div>
    </>
  );
};

export default DryerRepair;
