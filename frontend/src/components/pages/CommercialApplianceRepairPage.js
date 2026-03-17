import React from 'react';
import { Helmet } from 'react-helmet-async';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const PHONE_DISPLAY = '(760) 543-5733';

/* ═══ DESKTOP DATA ═══ */
const desktopCommonProblems = [
  { title: 'Equipment Failures Disrupting Operations', description: 'Commercial refrigeration, laundry, or kitchen equipment stops working and impacts revenue or customer service.' },
  { title: 'Commercial Refrigerators Not Holding Temperature', description: 'Walk-in coolers, prep tables, and display cases running warm, freezing up, or cycling constantly.' },
  { title: 'High-Use Washers and Dryers Breaking Down', description: 'On-site laundry equipment in hotels, laundromats, and multi-family buildings not spinning, heating, or draining properly.' },
  { title: 'Ovens, Ranges, and Cooktops Failing During Service', description: 'Commercial ovens or burners not heating, not igniting, or cooking unevenly in restaurants and food service operations.' },
  { title: 'Repeated Error Codes or Intermittent Failures', description: 'Digital controls, sensors, and safety systems on commercial equipment triggering frequent error codes or shutdowns.' },
  { title: 'Leaks, Electrical Issues, or Safety Concerns', description: 'Water on the floor, tripped breakers, burning smells, or other safety-critical symptoms that require urgent attention.' },
  { title: 'Preventive Maintenance Needs', description: 'Regular maintenance to prevent costly downtime and extend equipment lifespan in commercial operations.' },
  { title: 'Compliance and Documentation Requirements', description: 'Health code compliance issues, warranty documentation, and service records for business operations.' },
];

const desktopFaqData = [
  { question: 'Do you offer priority service for commercial clients?', answer: 'Yes. We understand downtime is expensive for businesses. Commercial repair calls are prioritized for same-day or next-day response whenever possible to keep your business running. We offer flexible scheduling including early morning, evening, and weekend appointments to minimize disruption to your operations.' },
  { question: 'What types of commercial appliances do you repair?', answer: 'We repair commercial refrigeration (walk-in coolers, reach-in refrigerators, prep tables, display cases), restaurant equipment (commercial ovens, ranges, fryers), commercial laundry equipment (industrial washers and dryers for hotels, laundromats, multi-family buildings), and office break-room appliances used in Bay Area businesses.' },
  { question: 'Can you work outside of normal business hours?', answer: 'Absolutely. We offer flexible scheduling and can arrange early morning (before opening), evening (after closing), or weekend appointments to minimize disruption to your operations. Emergency same-day service is available for critical equipment failures affecting business operations.' },
  { question: 'Do you provide invoices and documentation for business records?', answer: 'Yes. Every commercial repair includes detailed documentation of work performed, parts used, labor hours, and warranty coverage for your accounting and compliance needs. We provide itemized invoices suitable for business expense tracking and tax purposes.' },
  { question: 'Is there a warranty on commercial repairs?', answer: 'Most commercial repairs are backed by our 180-day parts and labor warranty. We stand behind our work and will return if the same problem reappears within the warranty period at no additional charge. For high-use commercial equipment, we also offer extended maintenance contracts.' },
];

const desktopServiceDescription = {
  title: 'Priority Commercial Appliance Repair Service',
  paragraphs: [
    <>Commercial appliance failures can halt operations and impact revenue. Our licensed technicians provide priority same-day or next-day service for Bay Area businesses. We diagnose commercial refrigeration failures, restaurant equipment issues, and industrial laundry breakdowns. We charge a <strong>$100 diagnostic fee</strong> (credited toward your repair) and understand that minimizing downtime is critical for your bottom line.</>,
    <>Our commercial repair process covers walk-in coolers, reach-in refrigerators, commercial ovens, ranges, fryers, industrial washers and dryers, and prep tables. We perform comprehensive diagnostics using professional-grade tools, check compliance with health codes, and ensure safety systems function properly. Most commercial repairs are completed same-day with parts stocked for common commercial equipment from brands like True, Hobart, Hoshizaki, and Turbo Air.</>,
    <>Whether your commercial refrigerator isn't holding temperature, your restaurant oven stopped heating, or your laundromat dryers won't run, we'll get your equipment operational fast. We provide flexible scheduling including early morning, evening, and weekend appointments to work around your business hours. Every commercial repair includes detailed documentation for your records and our <strong>180-day warranty</strong> on parts and labor.</>,
  ],
};

/* ═══ DESKTOP ═══ */
const DesktopCommercialRepair = () => (
  <ApplianceRepairPageNew
    appliance="Commercial Appliance"
    pageTitle="Commercial Appliance Repair for Bay Area Businesses"
    metaDescription="Commercial appliance repair for Bay Area businesses. Priority scheduling, licensed technicians, and 180-day warranty on commercial refrigeration, laundry and kitchen equipment. Call (760) 543-5733 or book online."
    commonProblems={desktopCommonProblems}
    faqData={desktopFaqData}
    relatedServicesCategory="Commercial"
    relatedServicesSubtitle="Expert repair for commercial appliances"
    serviceDescription={desktopServiceDescription}
    isCommercial={true}
    repairVsReplace={{
      title: "Repair vs. Replace Commercial Equipment",
      intro: "Downtime costs money. Here's how Bay Area businesses decide.",
      items: [
        { action: 'repair', condition: 'Equipment under 7 years with isolated issue', recommendation: 'Single-component failures (thermostat, motor, gasket) cost $200–$500 to fix vs. $3,000+ for commercial replacement.' },
        { action: 'repair', condition: 'Refrigeration unit running warm', recommendation: 'Often a condenser coil cleaning, fan motor, or thermostat fix ($150–$350). Quick turnaround minimizes food safety risk.' },
        { action: 'replace', condition: 'Compressor failure on 10+ year unit', recommendation: 'Commercial compressor replacement runs $800–$1,500. For aging units, newer models offer better energy efficiency and reliability.' },
        { action: 'replace', condition: 'Recurring breakdowns affecting operations', recommendation: 'Repeated service calls cost more in downtime and lost product than investing in reliable new equipment.' },
      ]
    }}
    relatedLinks={[
      { href: '/residential-appliance-repair', label: 'Residential Repair', desc: 'Home kitchen and laundry appliance service' },
      { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'All types including commercial-grade units' },
      { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Commercial and residential dishwashers' },
      { href: '/washer-repair', label: 'Washer Repair', desc: 'Commercial laundry and home washers' },
    ]}
  />
);

/* ═══ MOBILE DATA ═══ */
const mobileIssues = [
  { icon: '🏢', label: 'Equipment Down' },
  { icon: '❄️', label: 'Walk-in Cooler' },
  { icon: '🔥', label: 'Oven / Range' },
  { icon: '🧺', label: 'Laundry Equipment' },
  { icon: '⚠️', label: 'Error Codes' },
  { icon: '💧', label: 'Leaks / Safety' },
];

const mobileFaqs = [
  { q: 'Do you offer priority service for commercial clients?', a: 'Yes. Commercial repair calls are prioritized for same-day or next-day response. We offer flexible scheduling including early morning, evening, and weekend appointments.' },
  { q: 'What types of commercial appliances do you repair?', a: 'Walk-in coolers, reach-in refrigerators, commercial ovens, ranges, fryers, industrial washers/dryers, prep tables, and display cases.' },
  { q: 'Can you work outside of normal business hours?', a: 'Absolutely. We arrange early morning, evening, or weekend appointments to minimize disruption to your operations.' },
  { q: 'Is there a warranty on commercial repairs?', a: 'Yes — 180-day parts and labor warranty. We also offer extended maintenance contracts for high-use commercial equipment.' },
];

const mobileBrands = [
  { name: 'True', href: '/brands', logo: '/images/brands/true.png', h: 36 },
  { name: 'Sub-Zero', href: '/sub-zero-appliance-repair', logo: '/images/brands/sub-zero.svg', h: 30 },
  { name: 'Viking', href: '/viking-appliance-repair', logo: '/images/brands/viking.svg', h: 38 },
  { name: 'Speed Queen', href: '/brands', logo: '/images/brands/speed-queen.svg', h: 38 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
];

const MobileCommercialRepair = () => (
  <MobileServiceLanding
    appliance="Commercial Appliance"
    pageSlug="commercial-appliance-repair"
    pageTitle="Commercial Appliance Repair for Bay Area Businesses"
    metaDescription="Commercial appliance repair for Bay Area businesses. Priority scheduling, licensed technicians, and 180-day warranty. Call (760) 543-5733 or book online."
    heroTitle={<>Commercial Appliance<br />Repair. Priority Service.</>}
    heroSubtitle="Same-Day/Next-Day Service for Businesses"
   
    issues={mobileIssues}
    faqs={mobileFaqs}
    brands={mobileBrands}
    schemaData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Appliance Repair",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay", "telephone": PHONE_DISPLAY },
    }}
  />
);

/* ═══ MAIN PAGE (responsive switch) ═══ */
const CommercialApplianceRepairPage = () => {
  const isMobile = useIsMobile();
  if (!isMobile) return <DesktopCommercialRepair />;
  return <MobileCommercialRepair />;
};

export default CommercialApplianceRepairPage;
