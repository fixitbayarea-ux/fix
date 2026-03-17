import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

const IceMakerRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: "Not Making Ice", description: "No ice production, ice maker stopped working, or very slow ice production." },
    { title: "Water Leaking", description: "Water leaks around ice maker, dripping from dispenser, or puddles in freezer." },
    { title: "Ice Tastes Bad", description: "Ice has strange taste, smells bad, or tastes like plastic." },
    { title: "Ice Maker Jammed", description: "Ice stuck in maker, cubes clumped together, or dispenser blocked." },
    { title: "Dispenser Not Working", description: "Ice won't dispense, dispenser motor failure, or mechanical jam." },
    { title: "Small or Misshapen Ice", description: "Ice cubes too small, hollow, or irregularly shaped." },
    { title: "Ice Maker Overfilling", description: "Too much ice, ice overflows, or won't stop making ice." },
    { title: "Strange Noises", description: "Grinding, buzzing, or clicking sounds from ice maker." },
    { title: "Water Line Frozen", description: "Water line frozen, no water reaching ice maker, or slow fill." },
    { title: "Ice Cloudy or White", description: "Ice not clear, cloudy appearance, or white residue." }
  ];

  const faqData = [
    {
      question: "How much does ice maker repair cost in San Francisco?",
      answer: "Ice maker repair costs vary by issue. Common repairs like replacing a water inlet valve, ice maker assembly, or water filter typically range from $150-$280. More complex repairs involving the control board or water line may cost $280-$400. Our $60 diagnostic fee is fully applied to your repair cost. We provide clear pricing before starting any work."
    },
    {
      question: "Should I repair or replace my ice maker that's not making ice?",
      answer: "For ice makers under 8 years old, repair is usually the best option. Most ice production issues are caused by a frozen water line, bad water inlet valve, or faulty ice maker assembly—all cost-effective fixes. If your ice maker is older and the refrigerator is nearing end-of-life, replacement may make more sense. Our technicians will provide honest recommendations."
    },
    {
      question: "How quickly can you fix an ice maker that stopped working?",
      answer: "We offer same-day and next-day service for urgent ice maker issues across San Francisco and the Bay Area. Most problems—like frozen water lines, bad inlet valves, or jammed ice makers—can be diagnosed and repaired within 1-2 hours. Our vans carry common ice maker parts for faster repairs."
    },
    {
      question: "What brands of ice makers do you repair?",
      answer: "We service ice makers in all major refrigerator brands including GE, Whirlpool, Samsung, LG, Frigidaire, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Thermador, and more. We also service standalone ice maker units."
    },
    {
      question: "Does your warranty cover ice maker repairs?",
      answer: "Yes! Every ice maker repair includes a comprehensive 6-month warranty on parts and labor. If the same issue reoccurs within 6 months, we'll return at no charge to fix it properly."
    },
    {
      question: "Why is my ice maker not making ice but water works?",
      answer: "Common causes include a frozen water line, faulty water inlet valve, bad ice maker assembly, clogged water filter, or temperature issues in the freezer. Our technicians will diagnose the exact problem and restore ice production."
    },
    {
      question: "Can you service built-in ice makers?",
      answer: "Yes! We service both refrigerator-integrated ice makers and standalone/built-in ice maker units. Our technicians are trained on all types of ice making systems."
    },
    {
      question: "Why does my ice taste bad or smell funny?",
      answer: "Common causes include an old water filter, contaminated water supply, food odors in the freezer, or mineral buildup in the ice maker. We'll identify the source and recommend solutions to improve ice quality."
    }
  ];

  const brands = ['GE', 'Whirlpool', 'Samsung', 'LG', 'Frigidaire', 'Maytag', 'KitchenAid', 'Bosch', 'Sub-Zero', 'Viking', 'Thermador', 'Scotsman'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Ice Maker Repair",
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
        appliance="Ice Maker"
        pageSlug="ice-maker-repair"
        pageTitle="Ice Maker Repair San Francisco | Same-Day | FixitBay"
        metaDescription="Expert ice maker repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty."
        heroTitle={<>Expert Ice Maker<br />Repair in SF. Today.</>}
        heroImage="/images/technicians/ice-maker-tech.jpg"
        heroImageAlt="FixitBay technician repairing an ice maker in a San Francisco home"
        heroImagePosition="center top"
        techImage="/images/technicians/ice-maker-tech.jpg"
        techImageAlt="FixitBay technician repairing an ice maker in a San Francisco home"
        issues={[
          { icon: '🧊', label: 'No Ice' },
          { icon: '💧', label: 'Leaking' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '❄️', label: 'Small Cubes' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '👃', label: 'Bad Taste' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Ice Maker",
          intro: "Ice maker issues are usually tied to the refrigerator's age and condition.",
          items: [
            { action: 'repair', condition: 'Stopped making ice but fridge works fine', recommendation: 'Frozen water line or bad inlet valve costs $150–$280 to fix.' },
            { action: 'repair', condition: 'Ice tastes bad or has an odor', recommendation: 'New water filter + cleaning usually resolves this for under $100.' },
            { action: 'repair', condition: 'Leaking water into the freezer', recommendation: 'Cracked water line or misaligned fill tube — quick $120–$200 fix.' },
            { action: 'replace', condition: 'Standalone unit 8+ years old, compressor issues', recommendation: 'Compressor repairs cost $300+. A new countertop model may be better.' },
          ]
        }}
        relatedLinks={[
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling or temperature issues' },
          { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Not freezing or frost buildup' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Ice Maker"
      cmsSlug="ice-maker-repair"
      pageTitle="Ice Maker Repair San Francisco | Same-Day | FixitBay"
      metaDescription="Expert ice maker repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty."
      heroImage="/images/technicians/ice-maker-tech.jpg"
      heroImageAlt="FixitBay technician repairing an ice maker in a San Francisco home"
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Expert Ice Maker Repair in San Francisco",
        paragraphs: [
          <>When your ice maker stops making ice, leaks water, or produces bad-tasting cubes, FixitBay provides professional repair service across San Francisco, the Peninsula, and North Bay. Our licensed technicians diagnose and fix most ice maker issues on the same visit. We charge a straightforward <strong>$60 diagnostic fee</strong> that's fully applied to your repair cost—transparent pricing, every time.</>,
          <>Our ice maker repair process includes a complete inspection of the water inlet valve, ice maker assembly, water line, water filter, temperature controls, dispenser motor, and freezer conditions. We test water flow, check for frozen lines, and identify the root cause of issues like no ice production, water leaks, jammed dispensers, or poor ice quality. Whether you have a built-in ice maker or a refrigerator ice maker, we have the expertise.</>,
          <>We service ice makers in all major refrigerator brands including {brands.slice(0, 6).join(', ')}, and more. Our technicians carry common replacement parts like water inlet valves, ice maker assemblies, and filters, enabling same-day repairs in most cases. Every repair is backed by our <strong>6-month warranty</strong> on parts and labor. From SF apartments to North Bay homes, we keep your ice flowing.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Ice Maker",
        intro: "Ice maker issues are usually tied to the refrigerator's age and condition. Here's how to decide.",
        items: [
          { action: 'repair', condition: 'Ice maker stopped producing ice but fridge works fine', recommendation: 'A frozen water line, bad inlet valve, or failed ice maker assembly costs $150–$280 to fix. The refrigerator itself is usually in great shape.' },
          { action: 'repair', condition: 'Ice tastes bad or has an odor', recommendation: 'Replacing the water filter and cleaning the ice maker assembly usually resolves this completely for under $100.' },
          { action: 'repair', condition: 'Ice maker leaking water into the freezer', recommendation: 'A cracked water line or misaligned fill tube is a quick, affordable fix ($120–$200) that prevents water damage.' },
          { action: 'replace', condition: 'Standalone ice maker is 8+ years old with compressor issues', recommendation: 'Compressor repairs on standalone units cost $300+. If the unit is aging, a new countertop or under-counter model may be a better investment.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or temperature issues' },
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Not freezing, frost buildup, or temperature problems' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not draining, leaking, or not cleaning' },
      ]}
    />
  );
};

export default IceMakerRepairPage;