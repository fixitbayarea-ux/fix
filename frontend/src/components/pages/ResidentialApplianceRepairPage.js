import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const ResidentialApplianceRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: 'Kitchen Appliances Not Working Reliably',
      description: 'Refrigerators, dishwashers, ovens and ranges in your home starting to fail, run noisy, or stop working altogether.'
    },
    {
      title: 'Laundry Appliances Breaking Your Routine',
      description: 'Washers or dryers not starting, not spinning, taking too long to dry, or leaving clothes wet and musty.'
    },
    {
      title: 'Water Leaks or Electrical Issues in Home',
      description: 'Water under or behind appliances, tripping breakers, or burning smells coming from motors or wiring.'
    },
    {
      title: 'Appliances Causing Higher Utility Bills',
      description: 'Older or failing appliances running constantly, overheating, or cycling too often and driving up energy costs.'
    },
    {
      title: 'Strange Noises and Vibrations',
      description: 'Loud banging, grinding, rattling, or vibration coming from home appliances during normal use.'
    },
    {
      title: 'Appliances Not Performing Like They Used To',
      description: 'Food not staying cold, dishes not getting clean, clothes not drying, or inconsistent cooking results.'
    },
    {
      title: 'Error Codes and Digital Display Problems',
      description: 'Modern appliances showing error codes, digital displays not working, or control panels malfunctioning.'
    },
    {
      title: 'Warranty Expiration Concerns',
      description: 'Manufacturer warranty expired and need reliable, affordable repair service to extend appliance lifespan.'
    }
  ];

  const faqData = [
    {
      question: 'Do you work with homeowners, renters, and landlords?',
      answer: 'Yes. We regularly help homeowners, renters, and property owners with residential appliance repairs across San Francisco, Peninsula, and Marin County. We can coordinate directly with landlords and property managers when needed, providing detailed invoices and documentation for rental property maintenance records.'
    },
    {
      question: 'What residential appliances do you repair in Bay Area homes?',
      answer: 'We repair all major home appliances including refrigerators, freezers, washers, dryers, dishwashers, ovens, ranges, cooktops, garbage disposals, ice makers, and wine refrigerators. Our technicians service all brands—from budget-friendly models to high-end appliances from brands like Sub-Zero, Wolf, Bosch, and Miele.'
    },
    {
      question: 'Is your $60 diagnostic fee applied toward the repair?',
      answer: 'Yes. Our standard residential diagnostic fee is $60 and it is fully credited toward the cost of the repair when you proceed with the service. This upfront fee covers our technician\'s visit, professional diagnosis, and transparent pricing estimate before any work begins.'
    },
    {
      question: 'Do you offer a warranty on residential repairs?',
      answer: 'All residential appliance repairs include our comprehensive 180-day parts and labor warranty. If the same issue comes back within that 180-day period, we will return to your home at no additional charge and make it right. This warranty covers the specific repair performed, giving you peace of mind.'
    },
    {
      question: 'How quickly can you come to my Bay Area home for appliance repair?',
      answer: 'We offer same- or next-day appointments throughout San Francisco, Peninsula, and Marin County. When you book online or call (760) 543-5733, we will offer the earliest available time slot for your address. For urgent repairs affecting food storage or laundry needs, we prioritize scheduling to minimize inconvenience.'
    }
  ];

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Appliance"
        pageSlug="residential-appliance-repair"
        pageTitle="Residential Appliance Repair in Bay Area"
        metaDescription="Residential appliance repair for Bay Area homes. Licensed technicians, 180-day warranty, and same/next day service. Call (760) 543-5733 or book online."
        heroTitle={<>Expert Appliance<br />Repair in SF. Today.</>}
        issues={[
          { icon: '❄️', label: 'Fridge' },
          { icon: '🔄', label: 'Washer' },
          { icon: '🔥', label: 'Dryer' },
          { icon: '🍽️', label: 'Dishwasher' },
          { icon: '🌡️', label: 'Oven' },
          { icon: '🧊', label: 'Freezer' },
        ]}
        faqs={faqData}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Residential Appliance"
      pageTitle="Residential Appliance Repair in Bay Area"
      metaDescription="Residential appliance repair for Bay Area homes. Licensed technicians, 180-day warranty, and same/next day service for refrigerators, washers, dryers, dishwashers, ovens and more. Call (760) 543-5733 or book online."
      commonProblems={commonProblems}
      faqData={faqData}
      relatedServicesCategory={null} // Show all home appliances (Kitchen + Laundry)
      relatedServicesSubtitle="Expert repair for all major home appliances"
      serviceDescription={{
        title: "Professional Home Appliance Repair Service",
        paragraphs: [
          <>When your home appliances break down, it disrupts your daily routine and causes stress. Our licensed technicians provide same/next day residential appliance repair service throughout San Francisco, Peninsula, and Marin County. We diagnose refrigerator failures, washer and dryer issues, dishwasher problems, and oven malfunctions in your home. We charge a <strong>$60 diagnostic fee</strong> (fully credited toward your repair) and provide transparent, upfront pricing before starting any work.</>,
          <>Our residential repair process covers all major home appliances in your kitchen and laundry room. We inspect refrigerators, freezers, dishwashers, ovens, ranges, cooktops, washers, dryers, garbage disposals, and ice makers using professional diagnostic tools. We check mechanical components, electrical systems, water connections, and control boards to identify the exact problem. Most home appliance repairs are completed during our first visit, as our technicians stock common replacement parts for all major brands.</>,
          <>Whether your refrigerator stopped cooling, your washer won't drain, your dishwasher is leaking, or your dryer won't heat, we'll diagnose and fix it properly. We service all appliance brands from budget-friendly models to luxury brands like Sub-Zero, Wolf, Viking, Bosch, and Miele. We work with homeowners, renters, and landlords throughout the Bay Area. Every residential appliance repair includes our <strong>180-day parts and labor warranty</strong> for complete peace of mind.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Home Appliances",
        intro: "Smart guidance from our Bay Area technicians on your home appliances.",
        items: [
          { action: 'repair', condition: 'Appliance under 8 years with one issue', recommendation: 'Single-component failures (pump, motor, thermostat) typically cost $250–$450. That\'s 15–25% of replacement cost.' },
          { action: 'repair', condition: 'High-end or premium brand appliance', recommendation: 'Sub-Zero, Viking, Wolf, and Miele appliances are built to last 20+ years. Repair almost always makes sense.' },
          { action: 'replace', condition: 'Budget appliance with major failure after 8+ years', recommendation: 'When repair costs exceed 50% of a new unit, upgrading gives you better efficiency, features, and a full warranty.' },
          { action: 'replace', condition: 'Frequent breakdowns across the household', recommendation: 'If multiple appliances are failing, consider a phased upgrade plan. Our technicians can help prioritize.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker problems' },
        { href: '/washer-repair', label: 'Washer Repair', desc: 'Won\'t drain, spin, or agitate properly' },
        { href: '/dryer-repair', label: 'Dryer Repair', desc: 'No heat, won\'t tumble, or takes too long' },
        { href: '/dishwasher-repair', label: 'Dishwasher Repair', desc: 'Not cleaning, leaking, or drainage issues' },
      ]}
    />

  );
};

export default ResidentialApplianceRepairPage;
