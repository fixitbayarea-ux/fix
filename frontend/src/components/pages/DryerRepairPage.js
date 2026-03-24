import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

const DryerRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: "Not Heating", description: "Dryer runs but clothes stay wet, no heat, or takes multiple cycles to dry." },
    { title: "Won't Start", description: "Dryer won't turn on, door won't close, or no power to unit." },
    { title: "Not Tumbling", description: "Drum won't spin, belt broken, or motor failure." },
    { title: "Loud Noises", description: "Squealing, thumping, grinding, or rattling sounds during operation." },
    { title: "Overheating", description: "Dryer gets too hot, shuts off mid-cycle, or burns clothes." },
    { title: "Takes Too Long", description: "Clothes take forever to dry, poor airflow, or clogged vent." },
    { title: "Won't Shut Off", description: "Dryer keeps running, timer stuck, or thermostat failure." },
    { title: "Door Won't Latch", description: "Door won't close properly, latch broken, or won't stay shut." },
    { title: "Error Codes", description: "Digital display shows fault codes or error messages." },
    { title: "Burning Smell", description: "Burning odor, lint buildup, or overheating components." }
  ];

  const faqData = [
    {
      question: "How much does dryer repair cost in San Francisco?",
      answer: "Dryer repair costs depend on the issue. Common repairs like replacing a heating element, thermal fuse, or belt typically range from $150-$280. More complex repairs involving the motor or control board may cost $280-$450. Our $60 diagnostic fee is fully credited toward your repair. We provide transparent, upfront pricing before starting work."
    },
    {
      question: "Should I repair or replace my dryer that's not heating?",
      answer: "For dryers under 10 years old, repair is usually the best option. Heating issues are often caused by a faulty heating element, thermal fuse, or thermostat—all cost-effective fixes. If your dryer is older and the motor or drum needs replacement, buying new may be more economical. Our technicians will provide honest recommendations based on your dryer's condition."
    },
    {
      question: "Do you service both gas and electric dryers?",
      answer: "Yes! We repair both gas and electric dryers following all safety procedures. Our technicians are trained to work with gas lines, igniters, and electric heating elements. We service all major brands and models."
    },
    {
      question: "How quickly can you fix a dryer that's not heating?",
      answer: "We offer same-day and next-day service for urgent dryer issues across the Bay Area. Most heating problems—like bad heating elements, blown thermal fuses, or clogged vents—can be diagnosed and repaired within 1-2 hours. Our vans carry common dryer parts for fast repairs."
    },
    {
      question: "What brands of dryers do you repair?",
      answer: "We service all major dryer brands including Whirlpool, Maytag, GE, Samsung, LG, Bosch, Frigidaire, KitchenAid, Kenmore, Electrolux, and more. Whether you have a basic model or a high-end condensing dryer, we can fix it."
    },
    {
      question: "Does your warranty cover dryer repairs?",
      answer: "Yes! Every dryer repair includes a comprehensive 180-day warranty on parts and labor. If the same issue reoccurs within 180 days, we'll return at no charge to fix it properly."
    },
    {
      question: "Why is my dryer taking so long to dry clothes?",
      answer: "The most common cause is a clogged lint trap or exhaust vent. Clean both and retest. If the problem persists, a failing heating element or thermal fuse needs professional replacement — a $150–$250 repair."
    },
    {
      question: "Can you clean dryer vents during the repair?",
      answer: "Yes! If we identify a clogged vent as part of the problem, we can clean it during our visit. Proper vent maintenance improves drying efficiency and reduces fire risk."
    }
  ];

  const brands = ['Whirlpool', 'Maytag', 'GE', 'Samsung', 'LG', 'Bosch', 'Frigidaire', 'KitchenAid', 'Kenmore', 'Electrolux', 'Speed Queen', 'Amana'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dryer Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay",
      "telephone": "(760) 543-5733"
    },
    "areaServed": SERVICE_CITIES_SCHEMA
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Dryer"
        pageSlug="dryer-repair"
        pageTitle="Dryer Repair Bay Area | Same-Day Service | FixitBay"
        metaDescription="Expert dryer repair across the Bay Area. Gas and electric. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Dryer<br />Repair. Bay Area.</>}
        heroImage="/images/technicians/dryer-tech.jpg"
        heroImageAlt="FixitBay technician repairing a dryer in a Bay Area home"
        heroImagePosition="60% top"
        techImage="/images/technicians/dryer-tech.jpg"
        techImageAlt="FixitBay technician repairing a dryer in a Bay Area home"
        issues={[
          { icon: '🔥', label: 'Not Heating' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '🌡️', label: 'Overheating' },
          { icon: '⏰', label: 'Takes Too Long' },
          { icon: '🔧', label: 'Won\'t Tumble' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Dryer",
          intro: "Dryers are built to last, but every machine has limits.",
          items: [
            { action: 'repair', condition: 'Under 10 years old with a heating issue', recommendation: 'Heating elements, thermal fuses cost $150–$250 to replace. Several more years of use.' },
            { action: 'repair', condition: 'Loud thumping or squealing noises', recommendation: 'Worn drum rollers or frayed belt — affordable $120–$200 fix.' },
            { action: 'replace', condition: 'Motor failure on a 12+ year old dryer', recommendation: 'Motor replacement costs $300–$500. A new energy-efficient model makes more sense.' },
            { action: 'repair', condition: 'Takes forever to dry clothes', recommendation: 'Usually a clogged vent or weak heating element — both repairable.' },
          ]
        }}
        relatedLinks={[
          { href: '/washer-repair', label: 'Washer Repair', desc: 'Not spinning, draining, or filling' },
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling or leaking' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
        serviceSchema={serviceSchema}
        appliance="Dryer"
        cmsSlug="dryer-repair"
        pageTitle="Dryer Repair Bay Area | Same-Day Service | FixitBay"
        metaDescription="Expert dryer repair across the Bay Area — SF, Peninsula & Marin. Gas and electric. $60 diagnostic applied to repair. 180-day warranty."
        heroImage="/images/technicians/dryer-tech.jpg"
        heroImageAlt="FixitBay technician repairing a dryer in a Bay Area home"
        heroImagePosition="60% top"
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={{
          title: "Professional Dryer Repair Across the Bay Area",
          paragraphs: [
            <>When your dryer stops heating, won't start, or makes loud noises, FixitBay provides expert repair service across the SF Bay Area — San Francisco, the Peninsula, and Marin County. Our licensed technicians diagnose and fix most dryer issues on the same visit. We charge a straightforward <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost—honest pricing, every time.</>,
            <>Our dryer repair process includes a complete inspection of the heating element, thermal fuse, thermostat, drum belt, motor, control board, and vent system. We test all cycles, check for airflow restrictions, and identify the root cause of issues like no heat, failure to start, excessive noise, or long dry times. Whether you have a gas or electric dryer, front-load or top-load, we have the skills to restore it.</>,
            <>We service all major dryer brands including {brands.slice(0, 6).join(', ')}, and more. Our technicians carry common replacement parts like heating elements, belts, and thermal fuses, enabling same-day repairs in most cases. Every repair is backed by our <strong>180-day warranty</strong> on parts and labor. From apartments to single-family homes, we keep your laundry moving.</>,
            <><strong>Looking for dryer repair specifically in San Francisco?</strong> Visit our <a href="/san-francisco-dryer-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Dryer Repair</a> page for local details and availability.</>
          ]
        }}
        repairVsReplace={{
          title: "When to Repair vs. Replace Your Dryer",
          intro: "Dryers are built to last, but every machine has limits. Here's how our technicians help Bay Area homeowners decide.",
          items: [
            { action: 'repair', condition: 'Dryer under 10 years old with a heating issue', recommendation: 'Heating elements, thermal fuses, and thermostats are the most common failures. These parts cost $150–$250 to replace and your dryer should run for several more years.' },
            { action: 'repair', condition: 'Loud thumping or squealing noises', recommendation: 'Worn drum rollers, a frayed belt, or a failing idler pulley are affordable fixes ($120–$200). Ignoring them risks damaging the drum or motor.' },
            { action: 'replace', condition: 'Motor failure on a 12+ year old dryer', recommendation: 'Motor replacement costs $300–$500. If the dryer is nearing end-of-life, investing in a new energy-efficient model makes more sense long-term.' },
            { action: 'repair', condition: 'Dryer takes forever to dry clothes', recommendation: 'This is usually a clogged vent or a weak heating element — both repairable. Clearing the vent also reduces fire risk, which is critical in SF\'s dense housing.' },
          ]
        }}
        relatedLinks={[
          { href: '/washer-repair', label: 'Washer Repair', desc: 'Not spinning, draining, or filling properly' },
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
          { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, temperature problems, or igniter issues' },
        ]}
      />
  );
};

export default DryerRepairPage;