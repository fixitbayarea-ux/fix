import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const F = "'Montserrat', sans-serif";
const PHONE_DISPLAY = '(760) 543-5733';

const commonProblems = [
  { title: 'Walk-In Cooler Not Holding Temperature', description: 'Walk-in coolers running warm compromise food safety and violate health codes. Causes include compressor failure, low refrigerant, dirty coils, and faulty door closers allowing warm air infiltration.' },
  { title: 'Reach-In Refrigerator Freezing Up', description: 'Reach-in units building excessive frost or ice on evaporator coils. Often caused by defrost timer failures, heater element issues, or damaged door gaskets allowing moisture entry.' },
  { title: 'Display Case Compressor Running Constantly', description: 'Open display cases and glass-door merchandisers with compressors that never cycle off. Typically indicates low refrigerant charge, dirty condenser coils, or a failing compressor.' },
  { title: 'Prep Table Cooler Temperature Fluctuations', description: 'Sandwich prep tables and pizza prep coolers with inconsistent temperatures. Common causes include worn lid gaskets, overloaded pans, or thermostat calibration issues.' },
  { title: 'Refrigerant Leak in Commercial System', description: 'Commercial refrigeration systems losing refrigerant charge over time, leading to gradual cooling loss and increased energy consumption. Requires professional leak detection and repair.' },
  { title: 'Condenser Fan Motor Failure', description: 'Condenser fan motors burning out from grease and dust buildup in restaurant environments, causing the compressor to overheat and shut down on high-pressure safety.' },
  { title: 'Digital Controller Error Codes', description: 'Modern commercial refrigeration units displaying error codes on digital controllers. Codes vary by manufacturer and can indicate sensor failures, defrost issues, or compressor problems.' },
  { title: 'Health Code Temperature Violations', description: 'Walk-in coolers, prep tables, or display cases failing to maintain below 41°F as required by San Francisco Department of Public Health regulations.' },
];

const faqData = [
  { question: 'Do you repair all types of commercial refrigerators?', answer: 'Yes. We service walk-in coolers, walk-in freezers, reach-in refrigerators, under-counter units, prep tables, bar coolers, display cases, blast chillers, and ice cream freezers. We work with restaurants, grocery stores, delis, bakeries, hotels, and commercial kitchens throughout San Francisco, the Peninsula, and Marin County.' },
  { question: 'How quickly can you respond to a walk-in cooler emergency?', answer: 'We offer same-day emergency service for commercial refrigeration failures. A walk-in cooler breakdown puts thousands of dollars in inventory at risk, so we prioritize these calls. In most cases, our technician arrives within 2-4 hours of your call.' },
  { question: 'What commercial refrigeration brands do you repair?', answer: 'We repair True, Traulsen, Turbo Air, Beverage-Air, Hoshizaki, Delfield, Victory, Master-Bilt, Continental, Arctic Air, Everest, Atosa, and all other major commercial refrigeration brands. Our technician carries common parts for these brands.' },
  { question: 'Can you help with health code refrigeration violations?', answer: 'Absolutely. We understand San Francisco health department requirements and can perform emergency temperature remediation, calibrate thermostats, replace failed components, and provide documentation to help resolve violations.' },
  { question: 'Is there a warranty on commercial refrigerator repairs?', answer: 'Yes. All commercial refrigerator repairs include our 180-day warranty on parts and labor. If the same issue recurs within the warranty period, we return at no additional charge.' },
  { question: 'How much does commercial refrigerator repair cost?', answer: 'We charge a $100 diagnostic fee for commercial refrigeration, which is credited toward your repair if you proceed. Most common repairs range from $250-$600 depending on the issue and parts needed. We always provide an upfront quote before starting work.' },
];

const serviceDescription = {
  title: 'Emergency Commercial Refrigeration Repair in San Francisco',
  paragraphs: [
    <>When your commercial refrigerator fails, every minute counts. Food inventory worth thousands of dollars is at risk, and health code violations can shut down your business. FixitBay LLC provides <strong>emergency same-day commercial refrigeration repair</strong> for restaurants, grocery stores, delis, hotels, and commercial kitchens throughout San Francisco, the Peninsula, and Marin County.</>,
    <>Our licensed technician arrives with diagnostic equipment and common replacement parts for walk-in coolers, reach-in refrigerators, prep tables, display cases, and bar refrigeration. We charge a <strong>$100 diagnostic fee</strong> (credited toward your repair) and provide an upfront written estimate before any work begins.</>,
    <>From compressor replacements and refrigerant recharges to thermostat calibration and door gasket replacements, we handle the full spectrum of commercial refrigeration repair. Every job includes our <strong>180-day warranty on parts and labor</strong>, giving you confidence that the repair will last.</>,
  ],
};

const UniqueContent = () => (
  <>
    {/* ── Commercial Refrigerator Brands We Service ── */}
    <section style={{ background: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>BRANDS WE SERVICE</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Commercial Refrigerator Brands We Service</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 24 }}>
          San Francisco restaurants and food service businesses rely on commercial refrigeration from dozens of manufacturers. Our technician has hands-on experience with every major brand, carrying common parts and understanding the unique engineering of each system. Whether you have a True two-door reach-in, a Hoshizaki under-counter, or a Turbo Air display case, we know how to diagnose and repair it efficiently.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
          {[
            { name: 'True Manufacturing', desc: 'Reach-in coolers, freezers, prep tables, display cases' },
            { name: 'Beverage-Air', desc: 'Bar coolers, back-bar units, display merchandisers' },
            { name: 'Turbo Air', desc: 'Reach-in, under-counter, display cases, prep tables' },
            { name: 'Hoshizaki', desc: 'Reach-in, under-counter, prep tables, ice machines' },
            { name: 'Traulsen', desc: 'Heavy-duty reach-in, roll-in, blast chillers' },
            { name: 'Delfield', desc: 'Prep tables, reach-in, under-counter units' },
            { name: 'Master-Bilt', desc: 'Walk-in coolers, walk-in freezers, display cases' },
            { name: 'Continental', desc: 'Reach-in, under-counter, sandwich prep units' },
          ].map(b => (
            <div key={b.name} style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '16px 20px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 4 }}>{b.name}</div>
              <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: '#4A5568' }}>{b.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8 }}>
          We also service Victory, Arctic Air, Everest, Atosa, Kelvinator, Norlake, Kolpak, and other commercial refrigeration brands. If your brand isn't listed here, call us — we almost certainly work on it.
        </p>
      </div>
    </section>

    {/* ── Common Commercial Fridge Problems ── */}
    <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>DETAILED TROUBLESHOOTING</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Common Commercial Fridge Problems</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ background: '#fff', borderRadius: 4, padding: '24px 28px', borderLeft: '3px solid #FF5722' }}>
            <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#0D1B2A', marginBottom: 8 }}>Walk-In Cooler Temperature Rising Above 41°F</h3>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7 }}>
              The most urgent commercial refrigeration issue. When a walk-in cooler can't maintain temperature below 41°F, food safety is immediately compromised. Common causes include compressor failure (motor windings burned out or valves leaking), low refrigerant from a system leak, severely dirty condenser coils reducing heat exchange, or a failed evaporator fan motor. In San Francisco's busy restaurant district, we see this most often during summer months when ambient temperatures stress aging compressor systems. Our emergency response includes temporary cooling recommendations to protect your inventory while we diagnose and repair the root cause.
            </p>
          </div>

          <div style={{ background: '#fff', borderRadius: 4, padding: '24px 28px', borderLeft: '3px solid #FF5722' }}>
            <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#0D1B2A', marginBottom: 8 }}>Reach-In Unit Frost Buildup and Ice on Coils</h3>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7 }}>
              Excessive frost on evaporator coils forces the compressor to work harder and reduces cooling capacity. In commercial reach-in units, this is typically caused by defrost timer failure (the heater never activates), a burned-out defrost heater element, a stuck defrost termination thermostat, or damaged door gaskets allowing humid kitchen air to enter the cabinet. We test each component systematically. True and Beverage-Air reach-ins commonly develop defrost timer issues after 5-7 years of heavy restaurant use.
            </p>
          </div>

          <div style={{ background: '#fff', borderRadius: 4, padding: '24px 28px', borderLeft: '3px solid #FF5722' }}>
            <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 16, color: '#0D1B2A', marginBottom: 8 }}>Display Case Compressor Short-Cycling</h3>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.7 }}>
              Glass-door merchandisers and open display cases in delis and grocery stores sometimes develop a pattern where the compressor turns on and off rapidly (short-cycling). This dramatically shortens compressor life and increases energy costs. Causes include a failing start relay or capacitor, an overcharge or undercharge of refrigerant, a dirty condenser restricting airflow, or a faulty thermostat. Many San Francisco delis with older Turbo Air and True display cases experience this issue. Our repair restores proper cycling to extend equipment life.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── Why Restaurants Trust FixitBay LLC ── */}
    <section style={{ background: '#0D1B2A', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>WHY CHOOSE US</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#FFFFFF', marginBottom: 24, lineHeight: 1.2 }}>Why Restaurants Trust FixitBay LLC</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { title: 'Emergency Same-Day Response', text: 'We understand that a broken walk-in cooler means thousands of dollars in spoiling inventory. San Francisco restaurants call us because we prioritize commercial emergencies and typically arrive within 2-4 hours.' },
            { title: 'Health Code Expertise', text: 'Our technician understands San Francisco Department of Public Health temperature requirements. We can help you remediate violations, calibrate equipment, and document repairs for inspector follow-up visits.' },
            { title: 'Parts for All Major Brands', text: 'We carry common replacement parts for True, Beverage-Air, Turbo Air, Hoshizaki, and other leading commercial refrigeration brands. Many repairs are completed in a single visit.' },
            { title: '180-Day Warranty', text: 'Every commercial refrigerator repair includes a 180-day warranty on parts and labor. If the same issue recurs, we return at no charge. Your business depends on reliable refrigeration — so does our reputation.' },
            { title: 'Licensed & Insured', text: 'FixitBay LLC is a licensed appliance repair company (CA License #51001). We carry full liability insurance, giving you peace of mind when we service equipment at your commercial property.' },
            { title: 'Transparent Pricing', text: '$100 diagnostic fee credited toward repair. Written quote before work starts. No hidden charges, no surprises. San Francisco business owners appreciate our straightforward approach.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '24px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#FF5722', marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.70)', lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const DesktopPage = () => (
  <ApplianceRepairPageNew
    appliance="Commercial Refrigerator"
    pageTitle="Commercial Refrigerator Repair – Walk-In Coolers, Reach-In Units & Display Cases"
    metaDescription="Commercial refrigerator repair in San Francisco, Peninsula & Marin County. Walk-in coolers, reach-in units, display cases. Same-day emergency service, $100 diagnostic fee, 180-day warranty. True, Beverage-Air, Turbo Air, Hoshizaki."
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
  { icon: '❄️', label: 'Not Cooling' },
  { icon: '🔄', label: 'Compressor' },
  { icon: '🧊', label: 'Frost Buildup' },
  { icon: '🚪', label: 'Door Seals' },
  { icon: '⚠️', label: 'Error Codes' },
  { icon: '💧', label: 'Leaks' },
];

const mobileFaqs = [
  { q: 'Do you repair all types of commercial refrigerators?', a: 'Yes — walk-in coolers, reach-in units, prep tables, display cases, and bar refrigeration for restaurants, grocery stores, and hotels.' },
  { q: 'How fast can you respond?', a: 'Same-day or next-day priority service for commercial refrigeration emergencies.' },
  { q: 'What brands do you repair?', a: 'True, Traulsen, Turbo Air, Beverage-Air, Hoshizaki, and all major commercial refrigeration brands.' },
  { q: 'Is there a warranty?', a: '180-day warranty on parts and labor for all commercial refrigerator repairs.' },
];

const mobileBrands = [
  { name: 'True', href: '/brands', logo: '/images/brands/true.png', h: 36 },
  { name: 'Sub-Zero', href: '/sub-zero-appliance-repair', logo: '/images/brands/sub-zero.svg', h: 30 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
  { name: 'LG', href: '/lg-appliance-repair', logo: '/images/brands/lg.svg', h: 38 },
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'Viking', href: '/viking-appliance-repair', logo: '/images/brands/viking.svg', h: 38 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
];

const MobilePage = () => (
  <MobileServiceLanding
    appliance="Commercial Refrigerator"
    pageSlug="commercial-refrigerator-repair"
    pageTitle="Commercial Refrigerator Repair – Walk-In Coolers & Reach-In Units"
    metaDescription="Commercial refrigerator repair in San Francisco & Bay Area. Walk-in coolers, reach-in units. Same-day service, 180-day warranty."
    heroTitle={<>Commercial Fridge<br />Repair. Same Day.</>}
    heroSubtitle="Priority Service for Businesses"
    issues={mobileIssues}
    faqs={mobileFaqs}
    brands={mobileBrands}
    schemaData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Refrigerator Repair",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": PHONE_DISPLAY },
    }}
  />
);

const CommercialRefrigeratorRepairPage = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobilePage /> : <DesktopPage />;
};

export default CommercialRefrigeratorRepairPage;
