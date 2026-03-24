import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

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
      question: "How much does dishwasher repair cost in San Francisco?",
      answer: "Dishwasher repair costs vary by issue. Common repairs like replacing a drain pump, door latch, or heating element typically range from $150-$280. More complex repairs involving the control board or motor may cost $280-$450. Our $60 diagnostic fee is fully applied to your repair cost. We provide clear pricing before starting any work."
    },
    {
      question: "Should I repair or replace my dishwasher that won't drain?",
      answer: "For dishwashers under 8-10 years old, repair is usually the best choice. Drainage issues are often caused by a clogged filter, bad drain pump, or blocked hose—all cost-effective fixes. If your dishwasher is older and multiple components are failing, replacement may be more economical. Our technicians will provide honest advice based on your dishwasher's condition."
    },
    {
      question: "How quickly can you fix a dishwasher that's leaking?",
      answer: "We offer same-day and next-day service for urgent dishwasher issues across the Bay Area. Most leak problems—like worn door seals, loose hose connections, or damaged spray arms—can be diagnosed and repaired within 1-2 hours. Our vans carry common dishwasher parts for faster repairs."
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
      answer: "Absolutely! We service dishwashers in all living situations—single-family homes, apartments, condos, and townhomes across the Bay Area—SF, the Peninsula, and Marin County."
    },
    {
      question: "What's included in the $60 diagnostic?",
      answer: "Our diagnostic includes a thorough inspection of your dishwasher's drain pump, spray arms, heating element, door seal, control board, inlet valve, and filters. We identify the root cause and provide a detailed estimate. This $60 fee is credited toward your repair when you proceed."
    }
  ];

  const brands = ['Bosch', 'KitchenAid', 'Whirlpool', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Maytag', 'Miele', 'Thermador', 'Viking', 'JennAir'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dishwasher Repair",
    "provider": { "@id": "https://fixitbay.net/#organization" },
    "areaServed": SERVICE_CITIES_SCHEMA,
    "url": "https://fixitbay.net/dishwasher-repair",
    "description": "Same-day dishwasher repair across the Bay Area — SF, Peninsula, and Marin. All major brands including Bosch, Samsung, LG, GE, Whirlpool, KitchenAid, Miele, and Thermador. Drain pumps, spray arms, door seals, and control boards. $60 diagnostic credited toward repair. 180-day warranty."
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Dishwasher"
        pageSlug="dishwasher-repair"
        pageTitle="Dishwasher Repair Bay Area | Same-Day Service | FixitBay"
        metaDescription="Dishwasher repair across the Bay Area. Leaks, draining, won't start. Same-day service, $60 diagnostic applied to repair. Call FixitBay."
        heroTitle={<>Expert Dishwasher<br />Repair. Bay Area.</>}
        heroImage="/images/technicians/dishwasher-tech.jpg"
        heroImageAlt="FixitBay technician repairing a dishwasher in a Bay Area home"
        heroImagePosition="center center"
        techImage="/images/technicians/dishwasher-tech.jpg"
        techImageAlt="FixitBay technician repairing a dishwasher in a Bay Area home"
        issues={[
          { icon: '💧', label: 'Not Draining' },
          { icon: '🚿', label: 'Not Cleaning' },
          { icon: '🌊', label: 'Leaking' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '🧊', label: 'Not Drying' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Dishwasher",
          intro: "Dishwashers typically last 9–12 years. Here's how to decide.",
          items: [
            { action: 'repair', condition: 'Under 8 years old, won\'t drain or clean', recommendation: 'Clogged filters, bad drain pumps are affordable fixes ($150–$280).' },
            { action: 'repair', condition: 'Door latch broken or seal leaking', recommendation: 'Gaskets and latches are inexpensive ($80–$180 installed).' },
            { action: 'replace', condition: 'Motor or board failure on 10+ year unit', recommendation: '$300–$450 repair. A new model is more economical if aging.' },
            { action: 'replace', condition: 'Cracked tub or inner drum corrosion', recommendation: 'Tub replacement is rarely cost-effective. Newer models save water too.' },
          ]
        }}
        relatedLinks={[
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
          { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating or igniter problems' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Dishwasher"
      pageTitle="Dishwasher Repair Bay Area | Same-Day Service | FixitBay"
      metaDescription="Dishwasher repair across the Bay Area. Leaks, draining, won't start. Same-day service, $60 diagnostic applied to repair. Call FixitBay."
      heroImage="/images/technicians/dishwasher-tech.jpg"
      heroImageAlt="FixitBay technician repairing a dishwasher in a Bay Area home"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Bay Area Dishwasher Repair — Expert Same-Day Service",
        paragraphs: [
          <>Looking for professional <strong>dishwasher repair</strong> you can trust? FixitBay delivers same-day service throughout the SF Bay Area — San Francisco, the Peninsula, and Marin County. Our licensed technicians diagnose and fix most dishwasher issues on the first visit. We charge a transparent <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost—no hidden charges.</>,
          <>Our dishwasher repair process includes a comprehensive inspection of the drain pump, spray arms, heating element, door seal, control board, inlet valve, and filters. We test all cycles, check for leaks and blockages, and identify the root cause of issues like drainage failures, poor cleaning, water leaks, or error codes. Whether you have a basic dishwasher or a high-end European model, we have the expertise.</>,
          <>We service all major dishwasher brands including {brands.slice(0, 6).join(', ')}, and more. Our technicians carry common replacement parts like pumps, heating elements, and door seals, enabling same-day repairs in most cases. Every repair is backed by our <strong>180-day warranty</strong> on parts and labor. From Bay Area apartments to Peninsula homes, we keep your kitchen running smoothly.</>,
          <><strong>Looking for dishwasher repair specifically in San Francisco?</strong> Visit our <a href="/san-francisco-dishwasher-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Dishwasher Repair</a> page for local details, neighborhood coverage, and availability.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Dishwasher",
        intro: "Dishwashers typically last 9–12 years. Here's how to decide what makes sense for yours.",
        items: [
          { action: 'repair', condition: 'Under 8 years old and won\'t drain or clean properly', recommendation: 'Clogged filters, bad drain pumps, and blocked spray arms are common, affordable fixes ($150–$280). Your dishwasher has plenty of life left.' },
          { action: 'repair', condition: 'Door latch broken or seal leaking', recommendation: 'Gaskets and latches are inexpensive parts ($80–$180 installed). A new seal often eliminates leaks completely.' },
          { action: 'replace', condition: 'Motor or control board failure on a 10+ year unit', recommendation: 'These repairs run $300–$450. If the dishwasher is already showing its age with rust or multiple issues, a new model is more economical.' },
          { action: 'replace', condition: 'Cracked tub or inner drum corrosion', recommendation: 'Tub replacement is rarely cost-effective. Newer dishwashers also use significantly less water and energy, saving money monthly.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
        { href: '/oven-repair', label: 'Oven Repair', desc: 'Not heating, temperature off, or igniter problems' },
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Not spinning, won\'t drain, or leaking' },
      ]}
    />
  );
};

export default DishwasherRepairPage;