import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';
import SERVICE_CONTENT from '../../data/serviceContentData';

const WasherRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: "Not Spinning", description: "Washer won't spin, clothes stay soaking wet, or spin cycle is weak." },
    { title: "Won't Drain", description: "Water remains in the drum, drain pump not working, or slow drainage." },
    { title: "Leaking Water", description: "Puddles around washer, hose leaks, or door seal failure." },
    { title: "Won't Fill with Water", description: "No water entering drum, slow fill, or water inlet valve issues." },
    { title: "Loud Noises", description: "Grinding, banging, or squealing sounds during wash or spin cycles." },
    { title: "Won't Start", description: "Washer won't turn on, door won't lock, or control panel unresponsive." },
    { title: "Shaking Excessively", description: "Violent shaking or walking across floor during spin cycle." },
    { title: "Error Codes", description: "Digital display showing error messages or fault codes." },
    { title: "Door Won't Lock", description: "Door latch broken, won't close properly, or lock failure." },
    { title: "Bad Odors", description: "Musty smell, mold buildup, or drainage issues causing odors." }
  ];

  const faqData = [
    {
      question: "How much does washer repair cost in San Francisco?",
      answer: "Washer repair costs vary by issue. Common repairs like replacing a door latch, drain pump, or water inlet valve typically range from $150-$280. More complex repairs involving the drum, motor, or transmission may cost $300-$500. Our $60 diagnostic fee is fully applied to your repair cost. We provide clear, upfront pricing before starting any work."
    },
    {
      question: "Should I repair or replace my washing machine?",
      answer: "If your washer is under 8 years old, repair is usually the smarter choice. Issues like drain pump failures, door seal leaks, or control board problems are cost-effective fixes. For older machines with major failures (motor, transmission), replacement may be more economical. Our technicians will provide honest recommendations based on your washer's age, condition, and repair cost."
    },
    {
      question: "Can you fix both front-load and top-load washers?",
      answer: "Yes! We repair all washer types including front-load, top-load, high-efficiency (HE), and stackable washer/dryer combos. Our technicians are trained on all major brands and models sold in the Bay Area."
    },
    {
      question: "How quickly can you fix a washer that won't drain or spin?",
      answer: "We offer same- or next-day service for urgent washer issues across the Bay Area. Most drainage and spinning problems—like clogged pumps, broken belts, or faulty lid switches—can be diagnosed and repaired within 1-2 hours. Our vans carry common washer parts for faster repairs."
    },
    {
      question: "What brands of washers do you repair?",
      answer: "We service all major washer brands including Whirlpool, Maytag, GE, Samsung, LG, Bosch, Frigidaire, KitchenAid, Kenmore, Electrolux, Speed Queen, and more. Whether you have a budget model or a premium front-loader, we have the expertise to fix it."
    },
    {
      question: "Does your warranty cover washer repairs?",
      answer: "Yes! Every washer repair comes with a comprehensive 180-day warranty on parts and labor. If the same issue reoccurs within 180 days, we'll return at no additional charge to make it right."
    },
    {
      question: "Can you repair washers in apartments and condos?",
      answer: "Absolutely! We service washers in all living situations—single-family homes, apartments, condos, and townhomes. Our technicians work efficiently in tight laundry spaces and high-rise buildings."
    },
    {
      question: "How much does washer repair cost in San Francisco?",
      answer: "Washer repair typically costs $150–$350 for most common issues — pump replacement, control board, drum bearing. Our $60 diagnostic is applied to the repair total."
    },
    {
      question: "What's included in the $60 diagnostic?",
      answer: "Our diagnostic includes a full inspection of your washer's motor, drum, pump, belts, hoses, door seal, control board, and water inlet valves. We identify the root cause and provide a detailed estimate. This $60 fee is credited toward your repair when you proceed."
    }
  ];

  const brands = ['Whirlpool', 'Maytag', 'GE', 'Samsung', 'LG', 'Bosch', 'Frigidaire', 'KitchenAid', 'Kenmore', 'Electrolux', 'Speed Queen', 'Amana'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Washing Machine Repair",
    "provider": { "@id": "https://fixitbay.net/#organization" },
    "areaServed": SERVICE_CITIES_SCHEMA,
    "url": "https://fixitbay.net/washer-repair",
    "description": "Fast washing machine repair across the Bay Area — SF, Peninsula, and Marin. Front-load, top-load, and high-efficiency models. All major brands including Whirlpool, Samsung, LG, GE, Maytag, and Bosch. $60 diagnostic credited toward repair. 180-day warranty."
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Washer"
        pageSlug="washer-repair"
        pageTitle="Washer Repair Bay Area | Fast Scheduling | FixitBay LLC"
        metaDescription="Expert washing machine repair across the Bay Area. $60 diagnostic applied to repair. Licensed & insured. 180-day warranty."
        heroTitle={<>Expert Washer<br />Repair. Bay Area.</>}
        heroImage="/images/technicians/washer-tech.jpg"
        heroImageAlt="FixitBay technician next to a washing machine in a Bay Area home"
        heroImagePosition="65% center"
        techImage="/images/technicians/washer-tech.jpg"
        techImageAlt="FixitBay technician next to a washing machine in a Bay Area home"
        issues={[
          { icon: '🔄', label: 'Not Spinning' },
          { icon: '💧', label: 'Won\'t Drain' },
          { icon: '🌊', label: 'Leaking' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '📳', label: 'Shaking' },
        ]}
        faqs={faqData}
        comparisonTable={SERVICE_CONTENT.Washer.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Washer.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Washer.diagnosisSteps}
      relatedLinks={[
          { href: '/dryer-repair', label: 'Dryer Repair', desc: 'Not heating, loud noises, or won\'t start' },
          { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining or dishes still dirty' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Washer"
      cmsSlug="washer-repair"
      pageTitle="Washer Repair Bay Area | Fast Scheduling | FixitBay LLC"
      metaDescription="Expert washing machine repair across the Bay Area — SF, Peninsula & Marin. $60 diagnostic applied to repair. 180-day warranty."
      heroImage="/images/technicians/washer-tech.jpg"
      heroImageAlt="FixitBay technician next to a washing machine in a Bay Area home"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Expert Washer Repair Across the Bay Area",
        paragraphs: [
          <>When your washing machine won't spin, drain, or start, FixitBay LLC delivers fast, reliable repair service throughout the SF Bay Area — San Francisco, the Peninsula, and Marin County. Our licensed technicians diagnose and fix most washer issues on the same visit. We charge a <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost—transparent pricing from start to finish.</>,
          <>Our washer repair process includes a thorough inspection of the motor, drum, drain pump, belts, hoses, door seal, control board, and water inlet valves. We test all cycles, check for leaks, and identify the root cause of issues like failure to spin, drain problems, excessive shaking, or error codes. Whether you have a front-load, top-load, or high-efficiency model, we have the expertise to restore it.</>,
          <>We service all major washer brands including {brands.slice(0, 6).join(', ')}, and more. Our technicians carry common replacement parts, allowing us to complete most repairs during the first visit. Every repair is backed by our <strong>180-day warranty</strong> on parts and labor. From Bay Area apartments to Peninsula homes, we've got your laundry covered.</>,
          <><strong>Looking for washer repair specifically in San Francisco?</strong> Visit our <a href="/san-francisco-washer-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Washer Repair</a> page for local details and availability.</>
        ]
      }}
      comparisonTable={SERVICE_CONTENT.Washer.comparisonTable}
      symptomsChecklist={SERVICE_CONTENT.Washer.symptomsChecklist}
      diagnosisSteps={SERVICE_CONTENT.Washer.diagnosisSteps}
      relatedLinks={[
        { href: '/dryer-repair', label: 'Dryer Repair', desc: 'Not heating, loud noises, or won\'t start' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or dishes still dirty' },
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, ice maker issues, or leaking' },
      ]}
    />
  );
};

export default WasherRepairPage;