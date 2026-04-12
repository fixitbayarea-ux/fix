import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';

const BOOKING_URL = '/book?go=1';
const PHONE = '+17605435733';
const PHONE_DISPLAY = '(760) 543-5733';

const track = (name, params = {}) => { try { window.gtag?.('event', name, params); } catch(e) { if (process.env.NODE_ENV === 'development') console.error('gtag error:', e); } };
const handleCall = (loc) => { track('call_click', { page: 'refrigerator_repair', location: loc }); window.location.href = `tel:${PHONE}`; };
const handleBook = (loc) => { track('book_click', { page: 'refrigerator_repair', location: loc }); window.open(BOOKING_URL, '_blank'); };

/* ═══ DESKTOP DATA (for old template) ═══ */
const desktopCommonProblems = [
  { title: "Refrigerator Not Cooling", description: "Temperature issues can be caused by faulty thermostats, compressor problems, or refrigerant leaks." },
  { title: "Leaking Water", description: "Puddles around the fridge, dripping, or water pooling underneath." },
  { title: "Ice Maker Not Working", description: "No ice, strange noises, taste issues, or ice maker cycling problems." },
  { title: "Strange Noises", description: "Humming, clicking, buzzing, or rattling sounds from the compressor or fans." },
  { title: "Freezer Problems", description: "Not freezing, frost buildup, inconsistent temperature." },
  { title: "Door Seal Worn", description: "Cold air escaping, gasket damage, door not sealing properly." },
];

const desktopFaqData = [
  { question: "How much does refrigerator repair cost?", answer: "$80 diagnostic visit, fully applied to your repair cost. Most repairs run $250–$650, including parts and labor. You get an upfront written quote before any work begins — no surprises." },
  { question: "How fast can you come?", answer: "Same- or next-day service across the Bay Area — SF, Peninsula, and Marin County. Most urgent cooling issues are handled the same day." },
  { question: "What brands do you repair?", answer: "All major brands: Sub-Zero, Viking, Thermador, Samsung, LG, Whirlpool, GE, Bosch, Miele, KitchenAid, Frigidaire, Maytag, and more." },
  { question: "Do you offer a warranty?", answer: "Yes — every repair comes with a 180-day warranty on parts and labor. If the same issue returns, we fix it at no additional charge." },
  { question: "Do you repair built-in refrigerators?", answer: "Yes — French door, side-by-side, built-in, counter-depth, under-counter, and commercial units. All types and configurations." },
  { question: "How much does refrigerator repair cost in San Francisco in 2026?", answer: "Refrigerator repair typically costs $250–$650 after the $80 diagnostic fee. Common repairs like thermostat from $295, ice maker from $295, evaporator fan from $285, while compressor work ranges $400–$800. FixitBay LLC's $80 diagnostic is fully applied toward your repair cost." },
  { question: "Is it worth repairing a refrigerator in SF?", answer: "For refrigerators under 10 years old, repair almost always beats replacement. New fridges in SF start at $800–$1,500+ for comparable models. A $200–$400 repair pays for itself in 2–3 years." },
];

const desktopServiceDescription = {
  title: "Expert Refrigerator Repair Across the Bay Area",
  paragraphs: [
    <>Refrigerator repair typically costs $250–$650 after the $80 diagnostic visit. Our licensed technicians provide fast, reliable service across the SF Bay Area for all refrigerator types — French door, side-by-side, built-in, counter-depth, and more. We diagnose temperature control failures, compressor issues, ice maker malfunctions, and door seal problems. We charge a <strong>$80 diagnostic fee</strong> (waived with repair) and provide an upfront estimate before any work begins.</>,
    <>Our repair process includes testing thermostats, checking compressor operation, inspecting evaporator fans, and examining defrost systems. We use professional diagnostic tools to identify refrigerant leaks and measure temperature accuracy. Most repairs — from thermostat replacement to compressor fixes — are completed during our first visit with parts stocked for all major brands.</>,
    <>Whether your refrigerator isn't cooling properly, has a leaking water line, or the ice maker stopped working, we'll diagnose and fix it fast. We service all major brands including Sub-Zero, Viking, Samsung, LG, Whirlpool, GE, Bosch, and more. Every repair includes our <strong>180-day warranty</strong> on parts and labor.</>,
    <><strong>Looking for refrigerator repair specifically in San Francisco?</strong> Visit our <a href="/san-francisco-refrigerator-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Refrigerator Repair</a> page for local details and availability.</>,
  ]
};


/* Desktop version using the shared template */
const refrigeratorServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Refrigerator Repair Bay Area",
  "serviceType": "Refrigerator Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "telephone": "+17605435733"
  },
  "priceRange": "From $255",
  "areaServed": [
    "San Francisco", "Daly City", "South San Francisco", "San Bruno",
    "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
    "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
    "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
    "Fairfax", "San Anselmo", "Novato"
  ]
};

const DesktopRefrigeratorRepair = () => (
    <ApplianceRepairPageNew
      appliance="Refrigerator"
      customH1="Expert Refrigerator Repair in the Bay Area"
      heroDescription="Serving the SF Bay Area since 2023. Over 500 refrigerators repaired across 22 cities. Most repairs completed on the first visit."
      pageTitle="Refrigerator Repair in SF Bay Area | FixitBay"
      metaDescription="Expert refrigerator repair across the Bay Area. Cooling issues, leaks, ice buildup. $80 diagnostic applied to repair. 180-day warranty. Call FixitBay LLC."
      commonProblems={desktopCommonProblems}
      faqData={desktopFaqData}
      serviceDescription={desktopServiceDescription}
      serviceSchema={refrigeratorServiceSchema}
      heroImage="/images/technicians/fridge-tech.jpg"
      heroImageAlt="FixitBay technician next to a refrigerator in a Bay Area home"
      pricingTable={SERVICE_CONTENT.Refrigerator.pricingTable}
      comparisonTable={SERVICE_CONTENT.Refrigerator.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Refrigerator.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Refrigerator.diagnosisSteps}
      relatedLinks={[
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Frost buildup, not freezing, or temperature issues' },
        { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, leaking, or jammed dispenser' },
        { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Temperature fluctuations or compressor problems' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or not cleaning dishes' },
      ]}
    />
);

/* ═══ MOBILE: Refrigerator Repair uses the shared MobileServiceLanding template ═══ */
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import SERVICE_CONTENT from '../../data/serviceContentData';

const mobileIssues = [
  { icon: '❄️', label: 'Not Cooling' },
  { icon: '💧', label: 'Leaking' },
  { icon: '🧊', label: 'Ice Maker' },
  { icon: '🔊', label: 'Loud Noise' },
  { icon: '🔧', label: 'Door Seal' },
  { icon: '⚡', label: 'Won\'t Start' },
];

const mobileFaqs = [
  { q: 'How much does refrigerator repair cost?', a: '$80 diagnostic visit, fully applied to repair cost. Most repairs run $250–$650. You get an upfront quote before any work begins — no surprises.' },
  { q: 'How fast can you come?', a: 'Same- or next-day service across the Bay Area — SF, Peninsula, and Marin County. Most urgent cooling issues are handled the same day.' },
  { q: 'What brands do you repair?', a: 'All major brands: Sub-Zero, Viking, Thermador, Samsung, LG, Whirlpool, GE, Bosch, Miele, KitchenAid, Frigidaire, Maytag, and more.' },
  { q: 'Do you offer a warranty?', a: 'Yes — every repair comes with a 180-day warranty on parts and labor. If the same issue returns, we fix it at no additional charge.' },
  { q: 'Do you repair built-in refrigerators?', a: 'Yes — French door, side-by-side, built-in, counter-depth, under-counter, and commercial units.' },
  { q: 'How much does refrigerator repair cost in San Francisco in 2026?', a: 'Refrigerator repair typically costs $250–$650 after the $80 diagnostic fee. Common repairs like thermostat from $295, ice maker from $295, evaporator fan from $285, while compressor work ranges $400–$800. FixitBay LLC\'s $80 diagnostic is fully applied toward your repair cost.' },
  { q: 'Is it worth repairing a refrigerator in SF?', a: 'For refrigerators under 10 years old, repair almost always beats replacement. New fridges in SF start at $800–$1,500+ for comparable models. A $200–$400 repair pays for itself in 2–3 years.' },
];

/* ═══ MOBILE LANDING PAGE — uses shared template ═══ */
const MobileRefrigeratorRepair = () => (
  <MobileServiceLanding
    appliance="Refrigerator"
    pageSlug="refrigerator-repair"
    pageTitle="Refrigerator Repair in SF Bay Area | FixitBay"
    metaDescription="Expert refrigerator repair across the Bay Area — SF, Peninsula & Marin. $80 diagnostic applied to repair. 180-day warranty."
    heroTitle={<>Refrigerator Repair<br />Bay Area. Fast & Local.</>}
    heroSubtitle="Fast & Local — Most Repairs Completed on First Visit"
    heroDescription="Serving the SF Bay Area since 2023. Over 500 refrigerators repaired across 22 cities. Most repairs completed on the first visit."
    techImage="/images/technicians/fridge-tech.jpg"
    techImageAlt="FixitBay technician next to a refrigerator in a Bay Area home"
    issues={mobileIssues}
    faqs={mobileFaqs}
    relatedLinks={[
      { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Frost buildup or temperature issues' },
      { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, leaking, or jammed dispenser' },
      { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Temperature or compressor problems' },
    ]}
    schemaData={refrigeratorServiceSchema}
  />
);

/* ═══ MAIN PAGE (responsive switch) ═══ */
const RefrigeratorRepairPage = () => {
  const isMobile = useIsMobile();
  if (!isMobile) return <DesktopRefrigeratorRepair />;
  return <MobileRefrigeratorRepair />;
};

export default RefrigeratorRepairPage;
