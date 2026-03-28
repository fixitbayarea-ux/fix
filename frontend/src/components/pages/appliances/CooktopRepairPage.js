import React from 'react';
import ApplianceRepairPage from '../../templates/ApplianceRepairPage';

const CooktopRepairPage = () => {
  const commonProblems = [
    {
      title: "Burners Not Heating",
      description: "Gas burners not lighting, electric burners not heating, or inconsistent heat output from cooking surfaces."
    },
    {
      title: "Ignition System Problems",
      description: "Gas cooktop igniter not working, continuous clicking sounds, or pilot light issues."
    },
    {
      title: "Control Knobs Not Working",
      description: "Temperature controls not responding, knobs loose or broken, or control panel malfunctions."
    },
    {
      title: "Glass Top Cracks",
      description: "Cracked or damaged glass ceramic surface, scratches, or heat damage to cooktop surface."
    },
    {
      title: "Uneven Heating",
      description: "Hot spots on cooktop, inconsistent temperature distribution, or some areas not heating properly."
    },
    {
      title: "Gas Smell",
      description: "Gas odor around cooktop, suspected gas leaks, or safety concerns with gas connections."
    },
    {
      title: "Electric Burner Problems",
      description: "Electric coils not heating, induction elements not working, or electrical connection issues."
    },
    {
      title: "Touch Controls Not Responding",
      description: "Digital touch panel not working, controls unresponsive, or electronic control board issues."
    }
  ];

  const faqData = [
    {
      question: "Why won't my gas cooktop burners light?",
      answer: "Gas burners may not light due to clogged igniters, faulty ignition switches, or gas supply issues. Sometimes food debris blocks the igniter ports. Our technicians can clean, repair, or replace ignition components safely."
    },
    {
      question: "How much does cooktop repair cost?",
      answer: "Cooktop repairs typically range from $250-$650. Simple fixes like cleaning igniters or replacing knobs are less expensive, while glass top replacement or control board repairs cost more. We provide free diagnostics with repair service."
    },
    {
      question: "Can you repair cracked glass cooktops?",
      answer: "Yes, we can replace cracked glass ceramic cooktop surfaces. However, sometimes replacement is more cost-effective than repair. Our technicians will assess the damage and provide honest advice about repair vs. replacement."
    },
    {
      question: "Do you service both gas and electric cooktops?",
      answer: "Absolutely! We repair gas, electric coil, glass ceramic, and induction cooktops. Our licensed technicians are qualified to work on both gas and electrical systems safely."
    },
    {
      question: "Is it safe to use my cooktop if I smell gas?",
      answer: "No! If you smell gas, turn off the cooktop immediately, don't use any electrical switches, and call us right away. Gas leaks are serious safety hazards that require immediate professional attention."
    }
  ];

  const localAreas = [
    "San Francisco", "Oakland", "San Jose", "Palo Alto", "San Mateo", "Redwood City", "Mountain View", "Berkeley", "Fremont", "Daly City"
  ];

  return (
    <ApplianceRepairPage
      appliance="Cooktop"
      pageTitle="Professional Cooktop Repair in Bay Area"
      metaDescription="Expert cooktop repair service in San Francisco Bay Area. Gas and electric cooktop specialists, 180-day warranty, licensed technicians. Call (760) 543-5733 or book online."
      commonProblems={commonProblems}
      localAreas={localAreas}
      faqData={faqData}
    />
  );
};

export default CooktopRepairPage;