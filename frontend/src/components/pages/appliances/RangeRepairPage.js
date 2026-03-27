import React from 'react';
import ApplianceRepairPage from '../../templates/ApplianceRepairPage';

const RangeRepairPage = () => {
  const commonProblems = [
    {
      title: "Oven Not Heating",
      description: "Range oven not reaching temperature, heating elements not working, or gas oven ignition problems."
    },
    {
      title: "Cooktop Burners Not Working",
      description: "Stovetop burners not heating, gas burners not lighting, or electric elements not functioning."
    },
    {
      title: "Temperature Control Issues",
      description: "Oven not maintaining set temperature, thermostat problems, or inconsistent cooking results."
    },
    {
      title: "Door Problems",
      description: "Oven door not closing properly, hinges broken, or door seal damaged affecting heat retention."
    },
    {
      title: "Control Panel Malfunctions",
      description: "Digital display not working, buttons not responding, or timer and clock issues."
    },
    {
      title: "Self-Cleaning Function Problems",
      description: "Self-clean cycle not working, door won't lock during cleaning, or excessive smoke during cleaning."
    },
    {
      title: "Gas Safety Issues",
      description: "Gas smell, pilot light problems, or safety valve issues requiring immediate attention."
    },
    {
      title: "Electrical Problems",
      description: "Range not getting power, breaker tripping, or electrical connection issues."
    }
  ];

  const faqData = [
    {
      question: "Why isn't my range heating properly?",
      answer: "Range heating issues can be caused by faulty heating elements, igniter problems in gas ranges, thermostat issues, or control board failures. Our technicians can diagnose both oven and cooktop problems and provide comprehensive repairs."
    },
    {
      question: "How much does range repair cost?",
      answer: "Range repairs typically cost $150-$450 depending on the issue and whether it's the oven, cooktop, or both. Common repairs like element repair are less expensive than control board or gas valve repairs. We provide free diagnostics with repair service."
    },
    {
      question: "Do you repair both gas and electric ranges?",
      answer: "Yes! Our licensed technicians are qualified to work on both gas and electric ranges. We handle all types including slide-in, freestanding, and drop-in models from all major brands."
    },
    {
      question: "Can you fix ranges with dual fuel (gas cooktop, electric oven)?",
      answer: "Absolutely! We service dual fuel ranges that combine gas cooktops with electric ovens. Our technicians are trained on both gas and electrical systems and can handle any combination range."
    },
    {
      question: "Is it worth repairing an old range?",
      answer: "If your range is less than 12-15 years old and the repair cost is reasonable, it's usually worth fixing. Ranges generally last longer than other appliances. Our technicians will provide honest advice about repair options."
    }
  ];

  const localAreas = [
    "San Francisco", "Oakland", "San Jose", "Palo Alto", "San Mateo", "Redwood City", "Mountain View", "Berkeley", "Fremont", "Daly City"
  ];

  return (
    <ApplianceRepairPage
      appliance="Range"
      pageTitle="Professional Range Repair in Bay Area"
      metaDescription="Expert range repair service in San Francisco Bay Area. Gas and electric range specialists, 180-day warranty, licensed technicians. Call (760) 543-5733 or book online."
      commonProblems={commonProblems}
      localAreas={localAreas}
      faqData={faqData}
    />
  );
};

export default RangeRepairPage;