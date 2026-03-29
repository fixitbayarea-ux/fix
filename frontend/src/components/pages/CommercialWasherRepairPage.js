import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import SERVICE_CONTENT from '../../data/serviceContentData';

const F = "'Montserrat', sans-serif";
const PHONE_DISPLAY = '(760) 543-5733';

const commonProblems = [
  { title: 'Not Spinning or Agitating', description: 'Commercial washer drum not turning during wash cycle. Common in laundromat front-loaders when drive belts wear, motor couplers break, or control boards fail after years of heavy use.' },
  { title: 'Not Draining Water', description: 'Water remaining in the tub after cycle completion. Drain pump clogs, failed pump motors, and kinked drain hoses are the most common causes in high-volume laundromat and hotel washers.' },
  { title: 'Coin-Op or Card Reader Failures', description: 'Payment systems rejecting coins, failing to accept cards, or not registering payment — directly impacting revenue for laundromat owners and multi-family property managers in San Francisco.' },
  { title: 'Excessive Vibration and Walking', description: 'Large-capacity commercial washers shaking violently during spin cycle, walking across the floor, or making loud banging noises. Typically caused by worn shock absorbers, suspension springs, or unbalanced drum bearings.' },
  { title: 'Not Filling with Water', description: 'Water inlet valve failures, pressure switch malfunctions, or water supply restrictions preventing proper fill in commercial washers used for hotel linens and healthcare laundry.' },
  { title: 'Door Lock and Latch Issues', description: "Front-load commercial washers with door interlock failures preventing the cycle from starting, or doors that won't unlock after cycle completion — trapping customer laundry inside." },
  { title: 'Error Codes and Control Board Failures', description: 'Digital control panels displaying fault codes related to water level, motor speed, temperature, or communication errors between networked machines in managed laundry facilities.' },
  { title: 'Water Temperature Problems', description: 'Commercial washers not reaching proper hot water temperature for sanitization cycles, critical for healthcare and hospitality laundry where pathogen kill is required.' },
];

const faqData = [
  { question: 'Do you repair both coin-operated and card-operated commercial washers?', answer: 'Yes. We service coin-operated, card-operated, and app-controlled commercial washers. We also repair the payment mechanisms themselves — coin slides, coin acceptors, card readers, and network-connected payment systems used in modern laundromat equipment.' },
  { question: 'What commercial washer brands do you repair?', answer: 'We repair Speed Queen, Maytag Commercial, Dexter, Huebsch, Wascomat, Electrolux Professional, Whirlpool Commercial, Continental Girbau, IPSO, and UniMac. Our technician carries common parts for Speed Queen and Dexter units, the two most common brands in San Francisco laundromats.' },
  { question: 'Can you service large-capacity washer-extractors?', answer: 'Yes. We work on commercial washer-extractors from 20 lb to 125 lb capacity, including soft-mount and hard-mount configurations used in hotels, hospitals, and industrial laundry operations.' },
  { question: 'How quickly can you respond to a laundromat washer breakdown?', answer: 'We prioritize commercial laundry equipment for same- or next-day service. A broken washer in a laundromat directly costs revenue, so we treat these as urgent calls.' },
  { question: 'Can you repair washers in multi-family buildings?', answer: 'Yes. We service commercial washers in apartment buildings, condominiums, and housing complexes throughout San Francisco. We work with property managers and HOAs to schedule service at convenient times.' },
  { question: 'Is there a warranty on commercial washer repairs?', answer: 'Yes. All commercial washer repairs include our 180-day warranty on parts and labor. If the same issue recurs, we return at no additional charge.' },
];

const serviceDescription = {
  title: 'Commercial Washer Repair for Laundromats, Hotels & Healthcare',
  paragraphs: [
    <>Commercial washer breakdowns cost real money — a single out-of-service machine in a busy San Francisco laundromat can mean $50-$100+ per day in lost revenue. Hotels fall behind on linen service. Healthcare facilities risk sanitation compliance. FixitBay LLC provides <strong>priority commercial washer repair</strong> to minimize downtime.</>,
    <>Our licensed technician diagnoses front-load and top-load commercial washers from all major brands. We test motors, pumps, bearings, control boards, valves, and payment systems. We carry common replacement parts for Speed Queen, Dexter, and Maytag Commercial units. The <strong>$100 diagnostic fee</strong> is credited toward your repair.</>,
    <>Whether your laundromat washer won't spin, your hotel washer-extractor is leaking, or your coin-op machine won't accept payment, we'll restore operation fast. Every repair includes our <strong>180-day warranty on parts and labor</strong>.</>,
  ],
};

const UniqueContent = () => (
  <>
    {/* ── Laundromat & Multi-Family Equipment ── */}
    <section style={{ background: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>INDUSTRIES WE SERVE</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Laundromat, Hotel & Healthcare Laundry Equipment</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 24 }}>
          San Francisco's commercial laundry landscape includes over 200 self-service laundromats, hundreds of hotels ranging from boutique to convention-scale, healthcare facilities with strict sanitation protocols, and thousands of multi-family residential buildings with shared laundry rooms. Each environment places different demands on washing equipment, and our repair approach is tailored accordingly.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
          {[
            { industry: 'Laundromats', details: 'Self-service laundromats require maximum uptime for revenue. We prioritize laundromat calls because every hour a machine is down costs money. We repair coin mechanisms, card readers, bearings, pumps, motors, and control boards. For San Francisco laundromat owners, we also provide preventive maintenance programs to reduce unexpected breakdowns and extend equipment life.' },
            { industry: 'Hotels & Hospitality', details: 'Hotels need clean linens for every guest, every day. We service large-capacity washer-extractors (60-125 lb) used in hotel on-premise laundries, as well as smaller units in boutique properties. Common issues include bearing failures from heavy continuous use, water heating problems, and control board errors.' },
            { industry: 'Healthcare & Senior Living', details: 'Hospitals, clinics, and senior care facilities require commercial washers that reliably reach sanitizing temperatures for infection control. We calibrate temperature controls, test thermal disinfection cycles, and repair heating systems to ensure OSHA and state health department compliance.' },
            { industry: 'Multi-Family Residential', details: 'Apartment buildings and condos throughout San Francisco depend on shared laundry rooms. We work with property managers and HOAs to service and repair commercial washers on a scheduled basis, minimizing disruption to residents. We handle warranty and out-of-warranty repairs for all major brands.' },
          ].map(item => (
            <div key={item.industry} style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '20px 24px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 8 }}>{item.industry}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Coin-Operated & Payment Systems ── */}
    <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>PAYMENT SYSTEMS</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Coin-Operated & Card Payment System Repair</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
          Many commercial washer service calls in San Francisco laundromats involve the payment system rather than the machine itself. A washer that runs perfectly but won't accept payment is just as costly as a mechanically broken unit. We diagnose and repair the full range of commercial laundry payment systems.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { system: 'Coin Slides & Acceptors', detail: 'Mechanical coin slides jamming, rejecting valid coins, or not registering payment. Electronic coin acceptors with sensor failures or programming issues. We clean, adjust, and replace coin mechanisms for all major brands.' },
            { system: 'Card Reader Systems', detail: 'Smart card readers from companies like CSC/Coinmach, PayRange, and SpyderWash. We troubleshoot card read failures, network connectivity issues, and payment processing errors.' },
            { system: 'App-Connected Systems', detail: 'Modern app-based payment systems with Bluetooth or Wi-Fi connectivity. We diagnose communication failures between the app module and the machine control board, and resolve pairing issues.' },
          ].map(item => (
            <div key={item.system} style={{ background: '#fff', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 6 }}>{item.system}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Commercial Washer Brands ── */}
    <section style={{ background: '#0D1B2A', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>BRANDS</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#FFFFFF', marginBottom: 24, lineHeight: 1.2 }}>Commercial Washer Brands We Service</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { name: 'Speed Queen', desc: 'The gold standard in commercial laundry. SC, SC40, SC60 series' },
            { name: 'Dexter', desc: 'T-series, C-series front-load washers for laundromats' },
            { name: 'Maytag Commercial', desc: 'MHN/MFR series coin-op and card-op washers' },
            { name: 'Huebsch', desc: 'Alliance Laundry Systems brand for vended laundry' },
            { name: 'Wascomat', desc: 'European-engineered soft-mount washer-extractors' },
            { name: 'Continental Girbau', desc: 'High-efficiency washer-extractors, E-series' },
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
    appliance="Commercial Washer"
    pageTitle="Commercial Washer Repair Bay Area | FixitBay"
    metaDescription="Commercial washer repair in San Francisco, Peninsula & Marin County. Coin-op, card-op, industrial washers for laundromats, hotels, healthcare. Fast scheduling, $100 diagnostic, 180-day warranty. Speed Queen, Dexter, Maytag Commercial."
    commonProblems={commonProblems}
    faqData={faqData}
    relatedServicesCategory="Commercial"
    relatedServicesSubtitle="Expert repair for commercial appliances"
    pricingTable={SERVICE_CONTENT['Commercial Washer'].pricingTable}
    comparisonTable={SERVICE_CONTENT['Commercial Washer'].comparisonTable}
    symptomsChecklist={SERVICE_CONTENT['Commercial Washer'].symptomsChecklist}
    diagnosisSteps={SERVICE_CONTENT['Commercial Washer'].diagnosisSteps}
    serviceDescription={serviceDescription}
  >
    <UniqueContent />
  </ApplianceRepairPageNew>
);

const mobileIssues = [
  { icon: '🔄', label: 'Not Spinning' },
  { icon: '💧', label: 'Not Draining' },
  { icon: '🚰', label: 'No Water Fill' },
  { icon: '🔊', label: 'Vibration' },
  { icon: '💳', label: 'Coin/Card' },
  { icon: '⚠️', label: 'Error Codes' },
];

const mobileFaqs = [
  { q: 'Do you repair coin-op and card-op washers?', a: 'Yes — all types including coin-operated, card-operated, and app-controlled units for laundromats, hotels, and multi-family properties.' },
  { q: 'How fast can you respond?', a: 'Same- or next-day priority service for commercial laundry equipment.' },
  { q: 'What brands do you repair?', a: 'Speed Queen, Maytag Commercial, Dexter, Huebsch, Wascomat, and all major commercial washer brands.' },
  { q: 'Is there a warranty?', a: '180-day warranty on parts and labor for all commercial washer repairs.' },
];

const mobileBrands = [
  { name: 'Speed Queen', href: '/brands', logo: '/images/brands/speed-queen.svg', h: 38 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
  { name: 'Maytag', href: '/maytag-appliance-repair', logo: '/images/brands/maytag.svg', h: 30 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'LG', href: '/lg-appliance-repair', logo: '/images/brands/lg.svg', h: 38 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'Kenmore', href: '/kenmore-appliance-repair', logo: '/images/brands/kenmore.svg', h: 38 },
];

const MobilePage = () => (
  <MobileServiceLanding
    appliance="Commercial Washer"
    pageSlug="commercial-washer-repair"
    pageTitle="Commercial Washer Repair – Laundromat & Multi-Family Units"
    metaDescription="Commercial washer repair in San Francisco & Bay Area. Coin-op, card-op washers. Fast scheduling, 180-day warranty."
    heroTitle={<>Commercial Washer<br />Repair. Fast Fix.</>}
    heroSubtitle="Priority Service for Laundromats & Hotels"
    issues={mobileIssues}
    faqs={mobileFaqs}
    brands={mobileBrands}
    schemaData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Washer Repair",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": PHONE_DISPLAY },
    }}
  />
);

const CommercialWasherRepairPage = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobilePage /> : <DesktopPage />;
};

export default CommercialWasherRepairPage;
