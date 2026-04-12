import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';
import SERVICE_CONTENT from '../../data/serviceContentData';
import { MapPin } from 'lucide-react';

const SF_NEIGHBORHOODS = [
  'Mission District', 'Castro', 'Noe Valley', 'Pacific Heights',
  'Marina District', 'Richmond District', 'Sunset District', 'SoMa',
  'Hayes Valley', 'Potrero Hill', 'Bernal Heights', 'Glen Park',
  'Inner Sunset', 'Outer Sunset', 'Nob Hill', 'Russian Hill',
  'North Beach', 'Financial District', 'Haight-Ashbury', 'Excelsior',
  'Bayview', 'Visitacion Valley', 'Ingleside', 'Parkside',
  'West Portal', 'Twin Peaks', 'Laurel Heights', 'Presidio Heights',
  'Dogpatch', 'Cole Valley'
];

const SanFranciscoDishwasherSection = () => (
  <section style={{ padding: '48px 20px', maxWidth: 900, margin: '0 auto' }}>
    <p style={{
      fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11,
      letterSpacing: '0.12em', color: '#FF5722', marginBottom: 12, textTransform: 'uppercase'
    }}>LOCAL SERVICE</p>
    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, marginBottom: 16 }}>
      San Francisco Dishwasher Repair
    </h2>
    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.7, color: '#3a3a3a', marginBottom: 20 }}>
      FixitBay LLC is San Francisco's trusted dishwasher repair service. We handle everything from clogged drain pumps
      and leaking door seals to faulty control boards and error codes. San Francisco's older Victorian and Edwardian
      homes often have tight kitchen layouts and aging plumbing — our technicians are experienced with these
      challenges and carry common dishwasher parts on every service call.
    </p>
    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.7, color: '#3a3a3a', marginBottom: 20 }}>
      We serve every San Francisco neighborhood with same- or next-day appointment availability. Our response
      time averages under 4 hours for urgent dishwasher leaks. Whether you're in a Sunset District single-family
      home or a SoMa high-rise condo, we bring the tools, parts, and expertise to get your dishwasher running again.
    </p>

    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 16, marginTop: 32 }}>
      Neighborhoods We Serve in San Francisco
    </h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 10
    }}>
      {SF_NEIGHBORHOODS.map(n => (
        <div key={n} style={{
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1A2F45',
          padding: '8px 12px', background: '#f8f4f0', borderRadius: 8
        }}>
          <MapPin size={14} color="#FF5722" style={{ flexShrink: 0 }} />
          {n}
        </div>
      ))}
    </div>

    <div style={{
      marginTop: 32, padding: 24, background: '#1A2F45', borderRadius: 12, color: '#fff'
    }}>
      <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 18, marginBottom: 12 }}>
        Why SF Residents Choose FixitBay for Dishwasher Repair
      </h3>
      <ul style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.8, listStyle: 'none', padding: 0, margin: 0 }}>
        {[
          'Licensed & insured — CA contractor, 3+ years serving the Bay Area',
          '$80 diagnostic fee applied toward your repair — no hidden costs',
          'Same- or next-day appointments, Monday through Saturday',
          'All major brands: Bosch, Miele, Thermador, KitchenAid, Samsung, LG, GE',
          '180-day warranty on all parts and labor',
          'Experienced with SF\'s Victorian-era kitchens and compact condo layouts'
        ].map((item, i) => (
          <li key={i} style={{ paddingLeft: 20, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#FF5722', fontWeight: 700 }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const DishwasherRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: "Won't Drain", description: "Water stays in bottom, drain pump failure, or clogged filter." },
    { title: "Not Cleaning Dishes", description: "Dishes come out dirty, spray arms clogged, or detergent dispenser broken." },
    { title: "Leaking Water", description: "Puddles on floor, door seal worn, or cracked tub." },
    { title: "Won't Start", description: "No power, door latch broken, or control panel unresponsive." },
    { title: "Not Filling with Water", description: "No water entering, inlet valve failure, or low water pressure." },
    { title: "Strange Noises", description: "Grinding, buzzing, or rattling sounds during wash cycle." },
    { title: "Door Won't Latch", description: "Door won't close, latch broken, or won't stay shut." },
    { title: "Not Drying Dishes", description: "Dishes stay wet, heating element failure, or vent blocked." },
    { title: "Error Codes", description: "Digital display shows fault codes or error messages." },
    { title: "Bad Odors", description: "Musty smell, food buildup, or drainage issues causing odors." }
  ];

  const faqData = [
    {
      question: "How much does dishwasher repair cost in San Francisco?",
      answer: "Dishwasher repair costs vary by issue. Common repairs like replacing a drain pump, door latch, or heating element typically range from $150-$280. More complex repairs involving the control board or motor may cost $280-$450. Our $80 diagnostic fee is fully applied to your repair cost. We provide clear pricing before starting any work."
    },
    {
      question: "Should I repair or replace my dishwasher that won't drain?",
      answer: "For dishwashers under 8-10 years old, repair is usually the best choice. Drainage issues are often caused by a clogged filter, bad drain pump, or blocked hose—all cost-effective fixes. If your dishwasher is older and multiple components are failing, replacement may be more economical. Our technicians will provide honest advice based on your dishwasher's condition."
    },
    {
      question: "How quickly can you fix a dishwasher that's leaking?",
      answer: "We offer same- or next-day service for urgent dishwasher issues across the Bay Area. Most leak problems—like worn door seals, loose hose connections, or damaged spray arms—can be diagnosed and repaired within 1-2 hours. Our vans carry common dishwasher parts for faster repairs."
    },
    {
      question: "What brands of dishwashers do you repair?",
      answer: "We service all major dishwasher brands including Bosch, KitchenAid, Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, Miele, Thermador, Viking, and more. Whether you have a basic model or a high-end European dishwasher, we can fix it."
    },
    {
      question: "Does your warranty cover dishwasher repairs?",
      answer: "Yes! Every dishwasher repair includes a comprehensive 180-day warranty on parts and labor. If the same issue reoccurs within 180 days, we'll return at no charge to make it right."
    },
    {
      question: "Why is my dishwasher not cleaning dishes properly?",
      answer: "Common causes include clogged spray arms, dirty filters, faulty detergent dispenser, low water pressure, or a weak circulation pump. Our technicians will inspect all components and restore cleaning performance."
    },
    {
      question: "Can you repair dishwashers in apartments and condos?",
      answer: "Absolutely! We service dishwashers in all living situations—single-family homes, apartments, condos, and townhomes across the Bay Area—SF, the Peninsula, and Marin County."
    },
    {
      question: "What's included in the $80 diagnostic?",
      answer: "Our diagnostic includes a thorough inspection of your dishwasher's drain pump, spray arms, heating element, door seal, control board, inlet valve, and filters. We identify the root cause and provide a detailed estimate. This $80 fee is credited toward your repair when you proceed."
    }
  ];

  const brands = ['Bosch', 'KitchenAid', 'Whirlpool', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Maytag', 'Miele', 'Thermador', 'Viking', 'JennAir'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dishwasher Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "+17605435733",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1549 Franklin St, Unit A",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94109"
      },
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": "San Francisco",
      "sameAs": "https://en.wikipedia.org/wiki/San_Francisco"
    },
    "url": "https://fixitbay.net/dishwasher-repair",
    "description": "Expert dishwasher repair in San Francisco. Same- or next-day appointments. Bosch, Miele, Thermador, KitchenAid, Samsung, LG, GE. $80 diagnostic credited toward repair. 180-day warranty on parts and labor."
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Dishwasher"
        pageSlug="dishwasher-repair"
        pageTitle="Dishwasher Repair San Francisco | FixitBay"
        metaDescription="Expert dishwasher repair in San Francisco. Leaks, draining, won't start. Same- or next-day appointments, $80 diagnostic applied to repair. FixitBay LLC."
        heroTitle={<>Expert Dishwasher<br />Repair. San Francisco.</>}
        heroImage="/images/technicians/dishwasher-tech.jpg"
        heroImageAlt="FixitBay technician repairing a dishwasher in a San Francisco home"
        heroImagePosition="center center"
        techImage="/images/technicians/dishwasher-tech.jpg"
        techImageAlt="FixitBay technician repairing a dishwasher in a San Francisco home"
        issues={[
          { icon: '💧', label: 'Not Draining' },
          { icon: '🚿', label: 'Not Cleaning' },
          { icon: '🌊', label: 'Leaking' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '🧊', label: 'Not Drying' },
        ]}
        faqs={faqData}
        pricingTable={SERVICE_CONTENT.Dishwasher.pricingTable}
      comparisonTable={SERVICE_CONTENT.Dishwasher.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Dishwasher.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Dishwasher.diagnosisSteps}
      relatedLinks={[
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
          { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating or igniter problems' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Dishwasher"
      customH1="Dishwasher Repair in San Francisco | Same-Day Service"
      heroDescription="FixitBay LLC provides expert dishwasher repair in San Francisco and the Bay Area. Same- or next-day appointments. $80 diagnostic applied to repair. 180-day warranty."
      pageTitle="Dishwasher Repair San Francisco | FixitBay"
      metaDescription="Expert dishwasher repair in San Francisco. Leaks, draining, won't start. Same- or next-day appointments, $80 diagnostic applied to repair. FixitBay LLC."
      heroImage="/images/technicians/dishwasher-tech.jpg"
      heroImageAlt="FixitBay technician repairing a dishwasher in a San Francisco home"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "San Francisco Dishwasher Repair — Expert Service You Can Trust",
        paragraphs: [
          <>Looking for professional <strong>dishwasher repair in San Francisco</strong>? FixitBay LLC is the Bay Area's trusted appliance repair service, based right here in San Francisco. We serve SF, the Peninsula, and Marin County. Our licensed technicians diagnose and fix most dishwasher issues on the first visit. We charge a transparent <strong>$80 diagnostic fee</strong> that's fully applied to your repair cost—no hidden charges.</>,
          <>Our dishwasher repair process includes a comprehensive inspection of the drain pump, spray arms, heating element, door seal, control board, inlet valve, and filters. We test all cycles, check for leaks and blockages, and identify the root cause of issues like drainage failures, poor cleaning, water leaks, or error codes. Whether you have a basic dishwasher or a high-end European model, we have the expertise.</>,
          <>We service all major dishwasher brands including {brands.slice(0, 6).join(', ')}, and more. Our technicians carry common replacement parts like pumps, heating elements, and door seals, enabling most repairs on the first visit. Every repair is backed by our <strong>180-day warranty</strong> on parts and labor. From Bay Area apartments to Peninsula homes, we keep your kitchen running smoothly.</>,
          <><strong>Need dishwasher repair in a specific San Francisco neighborhood?</strong> Visit our <a href="/san-francisco-dishwasher-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Dishwasher Repair</a> page for detailed neighborhood coverage and local availability.</>
        ]
      }}
      pricingTable={SERVICE_CONTENT.Dishwasher.pricingTable}
      comparisonTable={SERVICE_CONTENT.Dishwasher.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Dishwasher.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Dishwasher.diagnosisSteps}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, temperature off, or igniter problems' },
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Not spinning, won\'t drain, or leaking' },
      ]}
    >
      <SanFranciscoDishwasherSection />
    </ApplianceRepairPageNew>
  );
};

export default DishwasherRepairPage;