import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';

const WineCoolerMaintenance = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    { title: 'Temperature Fluctuations', description: 'Inconsistent temperatures can ruin your wine collection. We diagnose thermostat issues, cooling system problems, and sensor malfunctions to maintain ideal wine storage conditions.' },
    { title: 'Not Cooling', description: 'If your wine cooler stops cooling, the compressor, cooling fan, or refrigerant system may be failing. We test all components and restore proper cooling to protect your investment.' },
    { title: 'Excessive Condensation', description: 'Too much moisture can damage labels and promote mold. Humidity issues often stem from door seal problems or drainage blockages. We repair seals and clear drainage systems.' },
    { title: 'Noisy Operation', description: 'Loud humming, clicking, or rattling sounds indicate compressor issues, failing fans, or loose components. We diagnose and repair noise sources for quiet operation.' },
    { title: 'Door Seal Problems', description: 'Worn or damaged door gaskets allow warm air in, forcing the cooler to work harder and potentially spoiling wine. We replace seals to maintain consistent temperature and humidity.' },
    { title: 'Interior Light Not Working', description: 'Failed interior lights make it difficult to read labels and select wines. We replace bulbs, test light switches, and repair electrical connections.' },
    { title: 'Frost Buildup', description: 'Excessive frost indicates door seal problems, thermostat issues, or defrost system failures. We identify the cause and restore proper operation.' },
    { title: 'Display or Control Issues', description: 'Error codes, unresponsive controls, or blank displays point to electronic control board problems. We diagnose and repair or replace control systems.' }
  ];

  const faqData = [
    { question: 'How much does wine cooler maintenance cost?', answer: 'Our diagnostic fee is $60 and includes testing temperature accuracy, inspecting door seals, checking the cooling system, and identifying any issues. This fee applies toward repair costs if you proceed.' },
    { question: 'How often should I service my wine cooler?', answer: 'We recommend professional maintenance annually to ensure optimal storage conditions. Between visits, clean condenser coils every 6 months, wipe interior surfaces monthly, and check door seals regularly.' },
    { question: 'What temperature should I set my wine cooler?', answer: 'For long-term storage of all wines, 55\u00B0F is ideal. For serving, reds do best at 60-65\u00B0F and whites at 45-50\u00B0F. Dual-zone coolers let you maintain both temperatures. We can calibrate your cooler for perfect settings.' },
    { question: 'Why is my wine cooler not maintaining temperature?', answer: 'Temperature problems can result from failing thermostats, cooling system issues, door seal damage, or blocked ventilation. We diagnose the exact cause and make repairs to protect your wine collection.' },
    { question: 'What brands of wine coolers do you service?', answer: 'We service all major wine cooler brands including Vinotemp, EdgeStar, NewAir, Avanti, Haier, Frigidaire, Whynter, and more. We work on freestanding, built-in, and under-counter models.' },
    { question: 'How do I prevent wine cooler odors?', answer: 'Clean the interior regularly with a mild solution, ensure proper ventilation, wipe up spills immediately, and place an open box of baking soda inside. If odors persist, we can deep clean your unit.' }
  ];

  const serviceDescription = {
    title: 'Professional Wine Cooler Maintenance & Repair',
    paragraphs: [
      'Your wine collection represents a significant investment, and proper storage conditions are essential to preserve quality and value. Wine coolers require specialized maintenance to maintain precise temperature and humidity levels. FixitBay LLC provides expert wine cooler maintenance and repair services throughout San Francisco, Peninsula, and Marin County for all brands and models.',
      'Our certified technicians understand wine storage requirements and perform comprehensive maintenance including testing and calibrating temperature controls, inspecting and cleaning condenser coils, checking door seals for proper closure, testing humidity levels, inspecting cooling systems, and verifying proper ventilation. We service both single-zone and dual-zone wine coolers, from compact countertop units to large built-in installations. We also handle specialized features like UV-protected glass doors and vibration dampening systems.',
      'During our $60 diagnostic visit, we verify your wine cooler maintains consistent temperature, check door seals for air leaks, test the cooling system, clean accessible coils, and inspect all controls. We also assess interior lighting, shelving condition, and overall unit performance. Regular maintenance prevents temperature fluctuations that can ruin wine, extends your cooler\'s lifespan, and ensures your collection is stored under ideal conditions. All our work is backed by a 180-day warranty, and we offer convenient same- or next-day service appointments.'
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wine Cooler Maintenance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "(760) 543-5733"
    }
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Wine Cooler"
        pageSlug="maintenance/wine-cooler"
        pageTitle="Wine Cooler Maintenance San Francisco Bay Area | FixitBay LLC"
        metaDescription="Professional wine cooler maintenance in San Francisco Bay Area. Protect your wine collection with expert service from FixitBay LLC. $60 diagnostic, 180-day warranty."
        heroTitle={<>Wine Cooler<br />Maintenance. Today.</>}
        heroSubtitle="Protect Your Collection"
        issues={[
          { icon: '\u{1F321}', label: 'Temp Issues' },
          { icon: '\u{2744}', label: 'Not Cooling' },
          { icon: '\u{1F4A7}', label: 'Condensation' },
          { icon: '\u{1F50A}', label: 'Noisy' },
          { icon: '\u{1F6AA}', label: 'Door Seal' },
          { icon: '\u{2744}', label: 'Frost' },
        ]}
        faqs={faqData}
        schemaData={serviceSchema}
      />
    );
  }

  return (
    <ApplianceRepairPageNew
      appliance="Wine Cooler"
      pageTitle="Wine Cooler Maintenance San Francisco Bay Area | FixitBay LLC"
      metaDescription="Professional wine cooler maintenance in San Francisco Bay Area. Protect your wine collection with expert service from FixitBay LLC. $60 diagnostic, 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={serviceDescription}
      breadcrumbCategoryName="Maintenance"
      breadcrumbCategoryHref="/maintenance"
      relatedServicesCategory="Kitchen"
      relatedServicesSubtitle="Expert maintenance for all your kitchen appliances"
      isMaintenance={true}
      serviceWord="Maintenance"
      maintenancePricing={[
        { service: 'Condenser coil cleaning', price: 'from $75' },
        { service: 'Door seal inspection', price: 'from $55' },
        { service: 'Temperature calibration', price: 'from $65' },
        { service: 'Vibration & leveling check', price: 'from $45' },
        { service: 'Full maintenance check (all of the above)', price: 'from $119' },
      ]}
      maintenanceSchedule={{
        title: 'When to Call for Wine Cooler Maintenance',
        intro: 'Proper maintenance protects your wine collection from temperature fluctuations and humidity issues.',
        items: [
          { interval: 'Every 6 months', title: 'Condenser Coil Cleaning', description: 'Dusty coils reduce cooling efficiency and force the compressor to overwork. Essential for maintaining stable wine storage temperatures.' },
          { interval: 'Annually', title: 'Door Seal & Humidity Check', description: 'A damaged seal allows warm air in, causing condensation and temperature swings that damage wine. Check for gaps or mold.' },
          { interval: 'Annually', title: 'Full Maintenance Check', description: 'Our technician calibrates temperature zones, inspects the compressor, checks humidity levels, and ensures vibration damping is working properly.' },
        ]
      }}
      repairVsReplace={{
        title: "Wine Cooler Maintenance vs. Repair",
        intro: "Protect your wine collection with regular maintenance. Here's when service pays off most.",
        items: [
          { action: 'repair', condition: 'Annual condenser coil cleaning', recommendation: 'Dust on coils forces the compressor to overwork. A $60 cleaning visit prevents $300+ compressor failures and protects your wine.' },
          { action: 'repair', condition: 'Temperature calibration and seal check', recommendation: 'Wine stored at incorrect temps loses quality fast. Annual calibration ($60–$100) ensures optimal 55°F storage.' },
          { action: 'replace', condition: 'Thermoelectric unit with poor cooling', recommendation: 'Thermoelectric coolers have shorter lifespans (5–8 years). If cooling performance drops, a compressor-based upgrade offers superior temperature stability.' },
          { action: 'replace', condition: 'Compressor-based unit over 12 years old', recommendation: 'Older wine coolers with refrigerant leaks or compressor wear cost $400+ to repair. Newer models offer dual-zone temperature control and UV protection.' },
        ]
      }}
      relatedLinks={[
        { href: '/wine-cooler-repair', label: 'Wine Cooler Repair', desc: 'Temperature issues, vibration, or compressor failure' },
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or ice maker problems' },
        { href: '/maintenance/refrigerator', label: 'Fridge Maintenance', desc: 'Coil cleaning and seal inspection' },
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Temperature and frost issues' },
      ]}
    />

  );
};

export default WineCoolerMaintenance;
