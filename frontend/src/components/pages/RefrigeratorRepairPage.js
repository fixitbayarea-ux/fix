import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';

const BOOKING_URL = '/book?go=1';
const PHONE = '+17605435733';
const PHONE_DISPLAY = '(760) 543-5733';

const track = (name, params = {}) => { try { window.gtag?.('event', name, params); } catch(e) {} };
const handleCall = (loc) => { track('call_click', { page: 'refrigerator_repair', location: loc }); window.location.href = `tel:${PHONE}`; };
const handleBook = (loc) => { track('book_click', { page: 'refrigerator_repair', location: loc }); window.open(BOOKING_URL, '_blank'); };

/* ═══ DESKTOP DATA (for old template) ═══ */
const desktopCommonProblems = [
  { title: "Refrigerator Not Cooling", description: "Temperature issues can be caused by faulty thermostats, compressor problems, or refrigerant leaks." },
  { title: "Leaking Water", description: "Puddles around the fridge, dripping, or water pooling underneath." },
  { title: "Ice Maker Not Working", description: "No ice, strange noises, taste issues, or ice maker cycling problems." },
  { title: "Strange Noises", description: "Humming, clicking, buzzing, or rattling sounds from the compressor or fans." },
  { title: "Freezer Problems", description: "Not freezing, frost buildup, inconsistent temperature." },
  { title: "Door Seal Worn", description: "Cold air escaping, gasket damage, door not sealing properly." },
];

const desktopFaqData = [
  { question: "How much does refrigerator repair cost?", answer: "$60 diagnostic visit, fully applied to repair cost. Most repairs run $150–$400. You get an upfront quote before any work begins — no surprises." },
  { question: "How fast can you come?", answer: "Same-day and next-day service across the Bay Area — SF, Peninsula, and Marin County. Most urgent cooling issues are handled the same day." },
  { question: "What brands do you repair?", answer: "All major brands: Sub-Zero, Viking, Thermador, Samsung, LG, Whirlpool, GE, Bosch, Miele, KitchenAid, Frigidaire, Maytag, and more." },
  { question: "Do you offer a warranty?", answer: "Yes — every repair comes with a 180-day warranty on parts and labor. If the same issue returns, we fix it at no additional charge." },
  { question: "Do you repair built-in refrigerators?", answer: "Yes — French door, side-by-side, built-in, counter-depth, under-counter, and commercial units. All types and configurations." },
  { question: "How much does refrigerator repair cost in San Francisco in 2026?", answer: "Refrigerator repair typically costs $150–$400 after the $60 diagnostic fee. Common repairs like thermostat replacement run $150–$200, while compressor work ranges $400–$600. FixitBay LLC's $60 diagnostic is fully applied toward your repair cost." },
  { question: "Is it worth repairing a refrigerator in SF?", answer: "For refrigerators under 10 years old, repair almost always beats replacement. New fridges in SF start at $800–$1,500+ for comparable models. A $200–$400 repair pays for itself in 2–3 years." },
];

const desktopServiceDescription = {
  title: "Expert Refrigerator Repair Across the Bay Area",
  paragraphs: [
    <>Refrigerator repair typically costs $150–$400 after the $60 diagnostic visit. Our licensed technicians provide same-day service across the SF Bay Area for all refrigerator types — French door, side-by-side, built-in, counter-depth, and more. We diagnose temperature control failures, compressor issues, ice maker malfunctions, and door seal problems. We charge a <strong>$60 diagnostic fee</strong> (waived with repair) and provide an upfront estimate before any work begins.</>,
    <>Our repair process includes testing thermostats, checking compressor operation, inspecting evaporator fans, and examining defrost systems. We use professional diagnostic tools to identify refrigerant leaks and measure temperature accuracy. Most repairs — from thermostat replacement to compressor fixes — are completed during our first visit with parts stocked for all major brands.</>,
    <>Whether your refrigerator isn't cooling properly, has a leaking water line, or the ice maker stopped working, we'll diagnose and fix it fast. We service all major brands including Sub-Zero, Viking, Samsung, LG, Whirlpool, GE, Bosch, and more. Every repair includes our <strong>180-day warranty</strong> on parts and labor.</>,
    <><strong>Looking for refrigerator repair specifically in San Francisco?</strong> Visit our <a href="/san-francisco-refrigerator-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Refrigerator Repair</a> page for local details and availability.</>,
  ]
};

/* Desktop version using the shared template */
const refrigeratorServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Refrigerator Repair Bay Area",
  "serviceType": "Refrigerator Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "FixitBay LLC",
    "telephone": "+17605435733"
  },
  "priceRange": "From $255",
  "areaServed": [
    "San Francisco", "Daly City", "South San Francisco", "San Bruno",
    "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
    "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
    "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
    "Fairfax", "San Anselmo", "Novato"
  ]
};

const DesktopRefrigeratorRepair = () => (
    <ApplianceRepairPageNew
      appliance="Refrigerator"
      customH1="Expert Refrigerator Repair in the Bay Area"
      heroDescription="Serving the SF Bay Area since 2023. Over 500 refrigerators repaired across 22 cities. Most repairs completed same day."
      pageTitle="Refrigerator Repair Bay Area | Same-Day Service | FixitBay LLC"
      metaDescription="Expert refrigerator repair across the Bay Area. Cooling issues, leaks, ice buildup. $60 diagnostic applied to repair. 180-day warranty. Call FixitBay LLC."
      commonProblems={desktopCommonProblems}
      faqData={desktopFaqData}
      serviceDescription={desktopServiceDescription}
      serviceSchema={refrigeratorServiceSchema}
      heroImage="/images/technicians/fridge-tech.jpg"
      heroImageAlt="FixitBay technician next to a refrigerator in a Bay Area home"
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Refrigerator",
        intro: "Refrigerators are a major investment. Here's a practical guide based on what our Bay Area technicians see every day.",
        items: [
          { action: 'repair', condition: 'Under 10 years old with a single issue', recommendation: 'Most single-component failures (thermostat, compressor relay, door seal, ice maker) cost $150–$400 to fix — far less than a $1,500+ replacement.' },
          { action: 'repair', condition: 'Faulty door seal or gasket', recommendation: 'A worn gasket lets cold air escape and overworks the compressor. Replacing it is quick, affordable, and often solves temperature complaints.' },
          { action: 'replace', condition: 'Compressor failure on a 12+ year unit', recommendation: 'Compressor replacement runs $600–$900. If the fridge is over 12 years old, that money is better put toward a new, more efficient model.' },
          { action: 'replace', condition: 'Frequent breakdowns or multiple failing parts', recommendation: 'If you\'ve needed 2+ repairs in the past year, the cumulative cost usually exceeds half the price of a new unit. It\'s time to upgrade.' },
        ]
      }}
      relatedLinks={[
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Frost buildup, not freezing, or temperature issues' },
        { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, leaking, or jammed dispenser' },
        { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Temperature fluctuations or compressor problems' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or not cleaning dishes' },
      ]}
    />
);

/* ═══ MOBILE: Refrigerator Repair uses the shared MobileServiceLanding template ═══ */
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const mobileIssues = [
  { icon: '❄️', label: 'Not Cooling' },
  { icon: '💧', label: 'Leaking' },
  { icon: '🧊', label: 'Ice Maker' },
  { icon: '🔊', label: 'Loud Noise' },
  { icon: '🔧', label: 'Door Seal' },
  { icon: '⚡', label: 'Won\'t Start' },
];

const mobileFaqs = [
  { q: 'How much does refrigerator repair cost?', a: '$60 diagnostic visit, fully applied to repair cost. Most repairs run $150–$400. You get an upfront quote before any work begins — no surprises.' },
  { q: 'How fast can you come?', a: 'Same-day and next-day service across the Bay Area — SF, Peninsula, and Marin County. Most urgent cooling issues are handled the same day.' },
  { q: 'What brands do you repair?', a: 'All major brands: Sub-Zero, Viking, Thermador, Samsung, LG, Whirlpool, GE, Bosch, Miele, KitchenAid, Frigidaire, Maytag, and more.' },
  { q: 'Do you offer a warranty?', a: 'Yes — every repair comes with a 180-day warranty on parts and labor. If the same issue returns, we fix it at no additional charge.' },
  { q: 'Do you repair built-in refrigerators?', a: 'Yes — French door, side-by-side, built-in, counter-depth, under-counter, and commercial units.' },
  { q: 'How much does refrigerator repair cost in San Francisco in 2026?', a: 'Refrigerator repair typically costs $150–$400 after the $60 diagnostic fee. Common repairs like thermostat replacement run $150–$200, while compressor work ranges $400–$600. FixitBay LLC\'s $60 diagnostic is fully applied toward your repair cost.' },
  { q: 'Is it worth repairing a refrigerator in SF?', a: 'For refrigerators under 10 years old, repair almost always beats replacement. New fridges in SF start at $800–$1,500+ for comparable models. A $200–$400 repair pays for itself in 2–3 years.' },
];

/* ═══ MOBILE LANDING PAGE — uses shared template ═══ */
const MobileRefrigeratorRepair = () => (
  <MobileServiceLanding
    appliance="Refrigerator"
    pageSlug="refrigerator-repair"
    pageTitle="Refrigerator Repair Bay Area | Same-Day Service | FixitBay LLC"
    metaDescription="Expert refrigerator repair across the Bay Area — SF, Peninsula & Marin. $60 diagnostic applied to repair. 180-day warranty."
    heroTitle={<>Refrigerator Repair<br />Bay Area. Same Day.</>}
    heroSubtitle="Same Day Service — Most Repairs Completed Today"
    heroDescription="Serving the SF Bay Area since 2023. Over 500 refrigerators repaired across 22 cities. Most repairs completed same day."
    techImage="/images/technicians/fridge-tech.jpg"
    techImageAlt="FixitBay technician next to a refrigerator in a Bay Area home"
    issues={mobileIssues}
    faqs={mobileFaqs}
    repairVsReplace={{
      title: "When to Repair vs. Replace Your Refrigerator",
      intro: "Here's a practical guide based on what our Bay Area technicians see every day.",
      items: [
        { action: 'repair', condition: 'Under 10 years old with a single issue', recommendation: 'Most single-component failures cost $150–$400 to fix — far less than a $1,500+ replacement.' },
        { action: 'repair', condition: 'Faulty door seal or gasket', recommendation: 'Replacing a worn gasket is quick, affordable, and often solves temperature complaints.' },
        { action: 'replace', condition: 'Compressor failure on a 12+ year unit', recommendation: 'Compressor replacement runs $600–$900. On an old fridge, that money is better put toward a new model.' },
        { action: 'replace', condition: 'Multiple failing parts or 2+ repairs/year', recommendation: 'Cumulative cost usually exceeds half the price of a new unit. Time to upgrade.' },
      ]
    }}
    relatedLinks={[
      { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Frost buildup or temperature issues' },
      { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, leaking, or jammed dispenser' },
      { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Temperature or compressor problems' },
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
