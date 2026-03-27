import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const F = "'Montserrat', sans-serif";
const PHONE_DISPLAY = '(760) 543-5733';

const commonProblems = [
  { title: 'Not Cleaning Dishes Properly', description: 'Commercial dishwasher leaving food residue, spots, or film on dishes due to spray arm clogs, detergent dispenser malfunction, or insufficient water temperature in high-volume restaurant service.' },
  { title: 'Not Draining or Slow Drainage', description: 'Water pooling in the wash chamber after cycle completion. Typically caused by clogged drain screens, failed drain pumps, or blocked drain lines from food debris accumulation.' },
  { title: 'Not Reaching Sanitizing Temperature', description: 'High-temp units failing to reach the 180°F rinse temperature required by San Francisco health code. Booster heater failure, thermostat drift, or heating element issues are common culprits.' },
  { title: 'Leaking Water on Kitchen Floor', description: 'Door gaskets deteriorating from heat cycles, pump seal failures, or loose plumbing connections causing water on the floor — a slip hazard and health code violation.' },
  { title: "Won't Start or Complete Cycle", description: 'Door interlock switch failures, control board malfunctions, or timer relay problems preventing the dishwasher from initiating or finishing wash and rinse cycles.' },
  { title: 'Chemical Dispenser Not Working', description: 'Detergent and rinse aid dispensers clogged, pumps failing, or chemical lines kinked — resulting in poor wash quality and sanitization concerns.' },
  { title: 'Conveyor Drive Belt Issues', description: 'Conveyor-type dishwashers with belt slipping, tearing, or motor failures causing racks to stop moving through the machine.' },
  { title: 'Health Code Temperature Violations', description: 'Wash water below 150°F or final rinse below 180°F (high-temp) / inadequate chemical concentration (low-temp) as flagged by San Francisco health inspectors.' },
];

const faqData = [
  { question: 'Do you repair all types of commercial dishwashers?', answer: 'Yes. We service under-counter dishwashers, single and double-rack door-type machines, conveyor dishwashers, flight-type machines, and glasswashers. We work with restaurants, hotels, hospitals, schools, and catering operations throughout San Francisco, the Peninsula, and Marin County.' },
  { question: 'What is the difference between high-temp and low-temp commercial dishwashers?', answer: 'High-temp machines sanitize with 180°F+ water in the final rinse. Low-temp machines sanitize using chemical solution (typically chlorine or quaternary ammonium) at lower water temperatures. We repair both types. High-temp machines are more common in San Francisco restaurants due to better sanitization results.' },
  { question: 'What commercial dishwasher brands do you repair?', answer: 'We repair Hobart, Champion, Jackson, Electrolux Professional, CMA Dishmachines, Winterhalter, Ecolab, Stero, Noble Warewashing, and all other major commercial warewashing brands.' },
  { question: 'Can you help with health department dishwasher violations?', answer: 'Yes. We calibrate thermostats, test final rinse temperatures, repair chemical dispensers, and provide documentation to help resolve San Francisco health department violations related to warewashing equipment.' },
  { question: 'How much does commercial dishwasher repair cost?', answer: 'Our $100 diagnostic fee is credited toward your repair. Most common repairs range from $200-$500 depending on the issue. Booster heater and control board replacements may be higher. We always provide a written estimate before starting work.' },
  { question: 'Is there a warranty on commercial dishwasher repairs?', answer: 'Yes. All commercial dishwasher repairs include our 180-day warranty on parts and labor.' },
];

const serviceDescription = {
  title: 'Emergency Commercial Dishwasher Repair in San Francisco',
  paragraphs: [
    <>When your commercial dishwasher breaks down during service, dirty dishes pile up fast. San Francisco health code requires proper sanitization of all food contact surfaces, so a non-functioning dishwasher can lead to violations and forced closure. FixitBay LLC provides <strong>emergency commercial dishwasher repair</strong> for restaurants, hotels, hospitals, and institutional kitchens.</>,
    <>Our licensed technician diagnoses under-counter units, door-type machines, and conveyor dishwashers from all major manufacturers. We test wash and rinse temperatures, inspect spray arms and pumps, check chemical dispensers, and evaluate control systems. The <strong>$100 diagnostic fee</strong> is credited toward your repair.</>,
    <>From booster heater replacements and thermostat calibrations to pump rebuilds and control board repairs, we handle the full range of commercial warewashing issues. Every repair includes our <strong>180-day warranty on parts and labor</strong>.</>,
  ],
};

const UniqueContent = () => (
  <>
    {/* ── Commercial Dishwasher Types We Service ── */}
    <section style={{ background: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>EQUIPMENT TYPES</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Commercial Dishwasher Types We Repair</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 24 }}>
          San Francisco's diverse food service industry uses everything from compact under-counter glasswashers in wine bars to high-capacity conveyor systems in hotel banquet kitchens. Our technician has hands-on experience with every type of commercial warewashing equipment and understands the unique engineering challenges of each.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
          {[
            { type: 'Under-Counter Dishwashers', desc: 'Compact units used in bars, cafes, and small restaurants. Common issues include pump failures, heating element burnout, and door latch problems. Brands: Hobart LXe, Jackson DishStar, Champion UH-series.' },
            { type: 'Door-Type (Single Rack)', desc: 'The workhorse of most San Francisco restaurants. Single-rack machines process 30-60 racks per hour. We repair high-temp and low-temp variants. Brands: Hobart AM-series, Champion 44, Jackson Avenger.' },
            { type: 'Conveyor Dishwashers', desc: 'High-volume machines for hotels, hospitals, and large catering operations. Belt-driven systems that process 150-300+ racks per hour. We service the drive motor, belt, wash pumps, and temperature controls. Brands: Hobart FT-series, Champion 80, Electrolux Professional.' },
            { type: 'Glasswashers', desc: 'Specialized low-profile machines for bars and tasting rooms. Gentle wash action to prevent breakage. Common issues: pump pressure loss, rinse temperature, and chemical dispenser failures.' },
          ].map(t => (
            <div key={t.type} style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '20px 24px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 8 }}>{t.type}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Health Code Compliance ── */}
    <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>COMPLIANCE</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Health Code Compliance for San Francisco Restaurants</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
          The San Francisco Department of Public Health enforces strict warewashing requirements for all food service establishments. A commercial dishwasher that doesn't meet temperature or chemical concentration standards can result in violations, point deductions, and in serious cases, forced closure. FixitBay LLC helps restaurants, hotels, and institutional kitchens maintain full compliance.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
          {[
            { rule: 'High-Temp Sanitizing: Final rinse must reach 180°F (82°C) minimum', fix: 'We test booster heaters, calibrate thermostats, replace heating elements, and verify rinse temperature at the dish surface — not just the tank.' },
            { rule: 'Low-Temp Sanitizing: Chemical concentration must meet EPA standards', fix: 'We repair chemical dispensers, calibrate dilution pumps, check supply lines, and test sanitizer concentration with certified test strips.' },
            { rule: 'Wash Temperature: Minimum 150°F (65°C) for wash cycle', fix: 'We verify incoming water temperature, check tank heaters, inspect mixing valves, and ensure proper wash cycle duration.' },
          ].map(item => (
            <div key={item.rule} style={{ background: '#fff', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 6 }}>{item.rule}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Brands We Service ── */}
    <section style={{ background: '#0D1B2A', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>BRANDS</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#FFFFFF', marginBottom: 24, lineHeight: 1.2 }}>Commercial Dishwasher Brands We Service</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { name: 'Hobart', desc: 'Industry leader. AM15, AM16, LXe, FT-series, CL-series' },
            { name: 'Champion', desc: 'Under-counter, door-type, conveyor. UH, 44, 66, 80 series' },
            { name: 'Jackson', desc: 'DishStar, Avenger, RackStar, TempStar series' },
            { name: 'Electrolux Professional', desc: 'Green&Clean, high-efficiency warewashing systems' },
            { name: 'CMA Dishmachines', desc: 'Affordable under-counter and door-type units' },
            { name: 'Winterhalter', desc: 'Premium German-engineered warewashing systems' },
          ].map(b => (
            <div key={b.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '16px 20px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722', marginBottom: 4 }}>{b.name}</div>
              <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.60)' }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const DesktopPage = () => (
  <ApplianceRepairPageNew
    appliance="Commercial Dishwasher"
    pageTitle="Commercial Dishwasher Repair – Restaurant, Hotel & Institutional Units"
    metaDescription="Commercial dishwasher repair in San Francisco, Peninsula & Marin County. Under-counter, door-type, conveyor dishwashers. Health code compliance. Fast scheduling, $100 diagnostic, 180-day warranty. Hobart, Champion, Jackson."
    commonProblems={commonProblems}
    faqData={faqData}
    relatedServicesCategory="Commercial"
    relatedServicesSubtitle="Expert repair for commercial appliances"
    serviceDescription={serviceDescription}
  >
    <UniqueContent />
  </ApplianceRepairPageNew>
);

const mobileIssues = [
  { icon: '🍽️', label: 'Not Cleaning' },
  { icon: '💧', label: 'Not Draining' },
  { icon: '🔥', label: 'No Hot Water' },
  { icon: '🚿', label: 'Spray Arms' },
  { icon: '⚠️', label: 'Error Codes' },
  { icon: '🚪', label: 'Leaking' },
];

const mobileFaqs = [
  { q: 'Do you repair all types of commercial dishwashers?', a: 'Yes — under-counter, door-type, conveyor, and flight-type units for restaurants, hotels, and institutional kitchens.' },
  { q: 'How fast can you respond?', a: 'Same- or next-day or next-day priority service for commercial kitchen equipment.' },
  { q: 'What brands do you repair?', a: 'Hobart, Champion, Jackson, Electrolux Professional, CMA, Winterhalter, and all major commercial dishwasher brands.' },
  { q: 'Is there a warranty?', a: '180-day warranty on parts and labor for all commercial dishwasher repairs.' },
];

const mobileBrands = [
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
  { name: 'LG', href: '/lg-appliance-repair', logo: '/images/brands/lg.svg', h: 38 },
  { name: 'Miele', href: '/miele-appliance-repair', logo: '/images/brands/miele.svg', h: 38 },
  { name: 'KitchenAid', href: '/kitchenaid-appliance-repair', logo: '/images/brands/kitchenaid.svg', h: 24 },
  { name: 'Thermador', href: '/thermador-appliance-repair', logo: '/images/brands/thermador.svg', h: 38 },
];

const MobilePage = () => (
  <MobileServiceLanding
    appliance="Commercial Dishwasher"
    pageSlug="commercial-dishwasher-repair"
    pageTitle="Commercial Dishwasher Repair – Restaurant & Hotel Units"
    metaDescription="Commercial dishwasher repair in San Francisco & Bay Area. Fast scheduling, 180-day warranty."
    heroTitle={<>Commercial Dishwasher<br />Repair. Fast Service.</>}
    heroSubtitle="Priority Service for Restaurants & Hotels"
    issues={mobileIssues}
    faqs={mobileFaqs}
    brands={mobileBrands}
    schemaData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Dishwasher Repair",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": PHONE_DISPLAY },
    }}
  />
);

const CommercialDishwasherRepairPage = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobilePage /> : <DesktopPage />;
};

export default CommercialDishwasherRepairPage;
