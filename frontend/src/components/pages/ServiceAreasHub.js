import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import refrigeratorImg from '../../assets/services/refrigerator.jpg';
import washerImg from '../../assets/services/washer.jpg';
import dryerImg from '../../assets/services/dryer.jpg';
import dishwasherImg from '../../assets/services/dishwasher.jpg';
import ovenImg from '../../assets/services/oven.jpg';
import iceMakerImg from '../../assets/services/ice-maker.jpg';
import SEOMetaTags from '../SEOMetaTags';

const ServiceAreasHub = () => {
  const commonProblems = [
    {
      title: "Need Same-Day Appliance Repair",
      description: "Your refrigerator stopped cooling, washer won't drain, or dryer won't heat—you need reliable service fast across the Bay Area."
    },
    {
      title: "Searching for Licensed Local Technicians",
      description: "Finding qualified, insured repair technicians serving your specific city in San Francisco, Peninsula, or North Bay."
    },
    {
      title: "Comparing Service Areas and Response Times",
      description: "Wondering if your city is covered for same/next-day service and what the typical response time is for your location."
    },
    {
      title: "Understanding Service Coverage",
      description: "Questions about whether we service apartments, condos, or multi-family buildings in your specific neighborhood."
    },
    {
      title: "Scheduling Conflicts Due to Distance",
      description: "Concerned about scheduling availability, service windows, and whether technicians can reach your city quickly."
    },
    {
      title: "Verifying Warranty Coverage by Location",
      description: "Need confirmation that our 180-day parts and labor warranty applies to repairs in your city."
    },
    {
      title: "Looking for Transparent Local Pricing",
      description: "Want to understand diagnostic fees, service call charges, and if there are additional costs for your location."
    }
  ];

  const faqData = [
    {
      question: 'Do you offer same-day service in my city?',
      answer: 'Yes. We serve most Bay Area cities with same or next-day service, subject to availability. Our service area covers San Francisco, the entire Peninsula (from Daly City to San Bruno), and North Bay communities (from San Rafael to Sausalito). Call (760) 543-5733 or book online to see today\'s available time windows for your specific city.'
    },
    {
      question: 'Is the $60 diagnostic fee applied to the repair?',
      answer: 'Yes. If you proceed with the repair, the $60 diagnostic is fully credited toward your final invoice. This means you only pay for the repair itself—the diagnostic visit is essentially free when you move forward with the work.'
    },
    {
      question: 'What cities do you serve in the Bay Area?',
      answer: 'We provide appliance repair service in 22 cities across three regions: San Francisco (including all neighborhoods), Peninsula cities (Daly City, South San Francisco, San Bruno, Pacifica, Millbrae, Colma, Brisbane, Montara), and North Bay communities (San Rafael, Novato, Mill Valley, Sausalito, Belvedere, Tiburon, Corte Madera, San Quentin, Larkspur, Greenbrae, Ross, Fairfax, San Anselmo).'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'Every repair includes our comprehensive 180-day warranty on both parts and labor. This warranty is valid across all cities we serve—whether you\'re in San Francisco, Peninsula, or North Bay. If the same issue returns within 180 days, we\'ll come back at no additional charge to make it right.'
    },
    {
      question: 'Which brands do you service?',
      answer: 'We work on all major appliance brands including Whirlpool, GE, KitchenAid, LG, Samsung, Bosch, Frigidaire, Maytag, Thermador, Viking, Sub-Zero, Miele, and more. Our technicians carry common parts for most brands, allowing us to complete repairs during the first visit in any city we serve.'
    },
    {
      question: 'Do you repair gas and electric appliances?',
      answer: 'Yes. Our licensed technicians service both gas and electric appliances including ovens, ranges, cooktops, and dryers. We follow strict safety protocols for gas appliance repairs and perform leak testing to ensure your home\'s safety across all service areas.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. FixitBay LLC is fully licensed and insured. Our technicians follow safety best practices in every home, condo, and apartment we service across San Francisco, Peninsula, and North Bay. We carry liability insurance to protect you and your property.'
    },
    {
      question: 'Do you service apartments and condos?',
      answer: 'Absolutely! We service single-family homes, apartments, condos, townhomes, and multi-family buildings across all our service areas. Our technicians are experienced working in high-rise buildings, gated communities, and managed properties throughout the Bay Area.'
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Appliance Repair Service Areas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay",
      "telephone": "(760) 543-5733"
    },
    "areaServed": [
      { "@type": "City", "name": "San Francisco" },
      { "@type": "City", "name": "Daly City" },
      { "@type": "City", "name": "San Rafael" },
      { "@type": "City", "name": "Mill Valley" }
    ]
  };

  return (
    <>
      <SEOMetaTags title="Appliance Repair Service Areas | San Francisco | FixitBay" description="FixitBay serves 22 cities across San Francisco, the Peninsula, and Marin County. Find your service area and book same-day appliance repair. Call (760) 543-5733." canonical="https://fixitbay.net/service-areas" />
      <ApplianceRepairPageNew
        appliance="Service Areas"
        pageTitle="Appliance Repair Service Areas | San Francisco | FixitBay"
        metaDescription="FixitBay serves 22 cities across San Francisco, the Peninsula, and Marin County. Find your service area and book same-day appliance repair. Call (760) 543-5733."
        customH1="Appliance Repair Service Areas &#8212; San Francisco Bay Area"
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={{
          title: "Appliance Repair Service Areas - San Francisco & Bay Area",
          paragraphs: [
            <>FixitBay provides professional in-home appliance repair across <strong>22 cities</strong> in San Francisco, the Peninsula, and North Bay communities. Our licensed and insured technicians service refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, and more—bringing expertise and quality parts directly to your home, condo, or apartment. We charge a transparent <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost when you proceed.</>,
            <>We offer same-day and next-day appointments throughout the Bay Area. Our service area includes the entire city of San Francisco (all neighborhoods), Peninsula cities from Daly City to Montara, and North Bay communities from San Rafael to San Anselmo. Whether you're in a Mission District apartment, a Pacifica coastal home, or a Mill Valley hillside residence, our team responds quickly with fully-stocked service vehicles.</>,
            <>Every repair is backed by our comprehensive <strong>180-day warranty</strong> on parts and labor, valid across all cities we serve. Our technicians carry common replacement parts for all major brands (Whirlpool, GE, Samsung, LG, Bosch, and more), allowing us to complete most repairs during the first visit. Call <strong>(760) 543-5733</strong> or book online to schedule service in your city today.</>
          ]
        }}
      >
        {/* Service Areas Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{color:'#1A3B5D'}}>
            Cities We Serve
          </h1>
          <p className="text-center mb-8 text-lg" style={{color:'#4A5568'}}>
            Click on any city below to view specific service information and local repair details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* San Francisco */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2" style={{color:'#C0362C'}}>
                San Francisco
              </h3>
              <p className="text-xs mb-4" style={{color:'#4A5568'}}>All neighborhoods — same-day service available citywide.</p>
              <div className="space-y-2">
                <a 
                  href="/san-francisco-appliance-repair"
                  className="block px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 font-semibold"
                  style={{color:'#1A3B5D', textDecoration: 'none'}}
                >
                  San Francisco, CA &#8594;
                </a>
              </div>
            </div>

            {/* Peninsula */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2" style={{color:'#C0362C'}}>
                Peninsula
              </h3>
              <p className="text-xs mb-4" style={{color:'#4A5568'}}>Coastal and suburban communities south of San Francisco.</p>
              <div className="space-y-2">
                {[
                  { name: 'Daly City', slug: 'daly-city' },
                  { name: 'South San Francisco', slug: 'south-san-francisco' },
                  { name: 'San Bruno', slug: 'san-bruno' },
                  { name: 'Pacifica', slug: 'pacifica' },
                  { name: 'Millbrae', slug: 'millbrae' },
                  { name: 'Colma', slug: 'colma' },
                  { name: 'Brisbane', slug: 'brisbane' },
                  { name: 'Montara', slug: 'montara' }
                ].map((city) => (
                  <a 
                    key={city.slug}
                    href={`/${city.slug}-appliance-repair`}
                    className="block px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 font-semibold"
                    style={{color:'#1A3B5D', textDecoration: 'none'}}
                  >
                    {city.name}, CA →
                  </a>
                ))}
              </div>
            </div>

            {/* North Bay */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2" style={{color:'#C0362C'}}>
                North Bay / Marin County
              </h3>
              <p className="text-xs mb-4" style={{color:'#4A5568'}}>Marin County towns — from Sausalito to Novato.</p>
              <a href="/marin-county-appliance-repair" className="block px-4 py-3 mb-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-300 hover:border-orange-500 hover:shadow-md transition-all duration-300 font-bold text-center" style={{color:'#C0362C', textDecoration:'none', fontSize:'15px'}}>
                All Marin County Appliance Repair &rarr;
              </a>
              <div className="space-y-2">
                {[
                  { name: 'San Rafael', slug: 'san-rafael' },
                  { name: 'Novato', slug: 'novato' },
                  { name: 'Mill Valley', slug: 'mill-valley' },
                  { name: 'Sausalito', slug: 'sausalito' },
                  { name: 'Belvedere', slug: 'belvedere' },
                  { name: 'Tiburon', slug: 'tiburon' },
                  { name: 'Corte Madera', slug: 'corte-madera' },
                  { name: 'San Quentin', slug: 'san-quentin' },
                  { name: 'Larkspur', slug: 'larkspur' },
                  { name: 'Greenbrae', slug: 'greenbrae' },
                  { name: 'Ross', slug: 'ross' },
                  { name: 'Fairfax', slug: 'fairfax' },
                  { name: 'San Anselmo', slug: 'san-anselmo' }
                ].map((city) => (
                  <a 
                    key={city.slug}
                    href={`/${city.slug}-appliance-repair`}
                    className="block px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 font-semibold"
                    style={{color:'#1A3B5D', textDecoration: 'none'}}
                  >
                    {city.name}, CA →
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
            <p className="text-center" style={{color:'#1A3B5D', fontSize: '16px', lineHeight: '1.6'}}>
              <strong>Don't see your city listed?</strong> Call us at <a href="tel:+17605435733" style={{color:'#C0362C', fontWeight: 'bold'}}>(760) 543-5733</a> — we may be able to accommodate your location. We're continuously expanding our service area throughout the Bay Area.
              {' '}
              <a href="/book?go=1" style={{ display:'inline-flex', alignItems:'center', background:'#FF5722', color:'#fff', fontFamily:'Montserrat,sans-serif', fontWeight:700, fontSize:14, padding:'12px 24px', borderRadius:4, textDecoration:'none', marginLeft:12 }}>BOOK ONLINE</a>
            </p>
          </div>
        </div>

        {/* Most Requested Repairs */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{color:'#1A3B5D'}}>
            Most Requested Repairs
          </h2>
          <p className="text-center mb-8 text-lg" style={{color:'#4A5568'}}>
            Our technicians are experts in diagnosing and repairing these common appliance issues
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Refrigerator Repair', path: '/refrigerator-repair', image: refrigeratorImg },
              { name: 'Washer Repair', path: '/washer-repair', image: washerImg },
              { name: 'Dryer Repair', path: '/dryer-repair', image: dryerImg },
              { name: 'Dishwasher Repair', path: '/dishwasher-repair', image: dishwasherImg },
              { name: 'Oven Repair', path: '/oven-repair', image: ovenImg },
              { name: 'Ice Maker Repair', path: '/ice-maker-repair', image: iceMakerImg },
            ].map((service) => (
              <a
                key={service.path}
                href={service.path}
                className="block bg-white rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                style={{textDecoration: 'none'}}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.name} in San Francisco Bay Area`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="160"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="text-xl font-bold" style={{color:'#1A3B5D'}}>{service.name} &rarr;</div>
                </div>
              </a>
            ))}
          </div>

          {/* Cross-links to services and brands */}
          <div className="mt-10 text-center">
            <p className="text-sm" style={{ color: '#4A5568' }}>
              <a href="/services" style={{ color: '#C0362C' }}>All repair services</a>
              {' · '}
              <a href="/brands" style={{ color: '#C0362C' }}>Brands we repair</a>
              {' · '}
              <a href="/commercial-appliance-repair" style={{ color: '#C0362C' }}>Commercial repair</a>
              {' · '}
              <a href="/maintenance" style={{ color: '#C0362C' }}>Maintenance</a>
              {' · '}
              <a href="/commercial-refrigerator-repair" style={{ color: '#C0362C' }}>Commercial refrigerator</a>
              {' · '}
              <a href="/commercial-washer-repair" style={{ color: '#C0362C' }}>Commercial washer</a>
              {' · '}
              <a href="/commercial-dryer-repair" style={{ color: '#C0362C' }}>Commercial dryer</a>
            </p>
          </div>
        </div>
      </ApplianceRepairPageNew>
    </>
  );
};

export default ServiceAreasHub;
