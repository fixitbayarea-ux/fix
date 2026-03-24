import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';
import { SERVICE_CITIES_SCHEMA } from '../../data/serviceCities';

const DisposalRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: "Won't Turn On",
      description: "Garbage disposal not responding to switch, no power, or tripped circuit breaker."
    },
    {
      title: "Jammed or Stuck",
      description: "Disposal blades won't turn, grinding sounds, or foreign objects causing blockage."
    },
    {
      title: "Leaking Water",
      description: "Water leaking from bottom, connections, or mounting assembly causing puddles."
    },
    {
      title: "Strange Noises",
      description: "Loud grinding, rattling, or humming sounds during operation indicating mechanical issues."
    },
    {
      title: "Not Draining Properly",
      description: "Water backing up in sink, slow drainage, or complete blockage in disposal system."
    },
    {
      title: "Bad Odors",
      description: "Foul smells coming from disposal, food buildup, or bacterial growth inside unit."
    },
    {
      title: "Frequent Resets Required",
      description: "Disposal keeps tripping reset button, overheating, or electrical problems."
    },
    {
      title: "Needs Replacement",
      description: "Old disposal beyond repair or upgrading to more powerful unit."
    }
  ];

  const faqData = [
    {
      question: "How much does garbage disposal repair cost in the Bay Area?",
      answer: "Garbage disposal repairs typically cost $125-$250 depending on the issue. Simple fixes like resetting tripped circuits ($100-$150), unjamming blades ($125-$175), or fixing leaks at connections ($140-$180) are more affordable. Motor replacement or chronic jam issues ($200-$250) cost more. We charge a $60 diagnostic fee (waived with repair) and provide upfront pricing."
    },
    {
      question: "Should I repair or replace my garbage disposal that keeps jamming?",
      answer: "For disposals under 8-10 years old, repair is usually worth it for occasional jams caused by foreign objects. However, if your disposal jams frequently despite proper use, has a burning smell, or is very old, replacement ($200-$400 installed) is the better long-term solution. Our technicians assess your unit and provide honest repair-vs-replace recommendations."
    },
    {
      question: "Why does my garbage disposal keep jamming and how do you fix it?",
      answer: "Frequent jams are caused by putting inappropriate items down the disposal (bones, fibrous vegetables, grease), dull grinding blades, weak motors, or mechanical wear. Our technicians unjam the unit using proper tools, inspect blade sharpness, clear the drain trap, and advise on usage best practices to prevent future jams."
    },
    {
      question: "Do you repair all garbage disposal brands?",
      answer: "Yes! We repair and install all major garbage disposal brands including InSinkErator, Waste King, KitchenAid, Moen, Badger, Evolution models, and others. We stock common parts like reset switches, mounting gaskets, and disposal wrenches, allowing us to fix most issues same day."
    },
    {
      question: "Does your garbage disposal repair warranty cover leaks and motor failures?",
      answer: "Yes! Our 180-day comprehensive warranty covers all disposal repairs—parts and labor—including motor fixes, leak repairs, electrical work, and blade issues. If your disposal leaks again or jams within 180 days, we'll return at no charge to fix it properly."
    }
  ];


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Disposal Repair",
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
        appliance="Garbage Disposal"
        pageSlug="disposal-repair"
        pageTitle="Garbage Disposal Repair San Francisco | Same-Day | FixitBay"
        metaDescription="Garbage disposal repair in SF & Bay Area. Jammed, leaking, humming, won't turn on. $60 diagnostic applied to repair. 180-day warranty. Call FixitBay."
        heroTitle={<>Expert Disposal<br />Repair in SF. Today.</>}
        issues={[
          { icon: '🔧', label: 'Jammed' },
          { icon: '💧', label: 'Leaking' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '⚡', label: 'Won\'t Turn On' },
          { icon: '🌀', label: 'Slow Drain' },
          { icon: '👃', label: 'Bad Odor' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Garbage Disposal"
      cmsSlug="garbage-disposal-repair"
      pageTitle="Garbage Disposal Repair in San Francisco | FixitBay"
      metaDescription="Professional garbage disposal repair in San Francisco. $60 diagnostic applied to repair. 180-day warranty. Same-day service."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Fast Garbage Disposal Repair & Replacement",
        paragraphs: [
          <>Garbage disposal problems can disrupt your kitchen routine. Our technicians provide same/next day service to diagnose jammed blades, electrical issues, leaks, and motor failures. We charge a <strong>$60 diagnostic fee</strong> (waived with repair or replacement) and provide honest recommendations on whether repair or replacement makes better financial sense for your situation.</>,
          <>Our disposal repair process includes testing the reset button, inspecting mounting gaskets, checking electrical connections, and unjamming blades using proper tools. We clear drain lines, tighten leaking connections, and replace worn components. For units beyond cost-effective repair, we offer professional disposal replacement and installation with upgraded models that match your needs.</>,
          <>Whether your disposal won't turn on, makes grinding noises, or leaks under the sink, we'll fix it quickly. We service all major brands including InSinkErator, Waste King, Moen, and KitchenAid. Every garbage disposal repair and installation includes our <strong>180-day warranty</strong> on parts and labor for worry-free operation.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Garbage Disposal",
        intro: "Garbage disposals are affordable appliances, but repair is often the smarter first step.",
        items: [
          { action: 'repair', condition: 'Jammed blades or humming but not spinning', recommendation: 'Most jams are cleared in 30 minutes for $80–$150. The motor is fine — the blades just need freeing.' },
          { action: 'repair', condition: 'Leaking from the bottom flange', recommendation: 'A loose mount or worn gasket costs $90–$140 to fix. Much cheaper than a full replacement.' },
          { action: 'replace', condition: 'Motor burned out or won\'t turn on', recommendation: 'Motor replacement costs nearly as much as a new disposal ($150–$250 installed). Upgrade to a quieter, more powerful model.' },
          { action: 'replace', condition: 'Unit is 10+ years old with chronic jams', recommendation: 'Older disposals lose grinding power. A new 3/4 HP unit ($180–$300 installed) handles food waste better and runs quieter.' },
        ]
      }}
      relatedLinks={[
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Often connected to the same drain line' },
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker issues' },
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Won\'t drain, spin, or fill with water' },
        { href: '/residential-appliance-repair', label: 'Residential Repair', desc: 'Full home appliance service' },
      ]}
    />
  );
};

export default DisposalRepairPage;