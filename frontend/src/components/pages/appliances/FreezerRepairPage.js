import React from 'react';
import ApplianceRepairPage from '../../templates/ApplianceRepairPage';

const FreezerRepairPage = () => {
  const commonProblems = [
    {
      title: "Not Freezing Properly",
      description: "Freezer not maintaining proper temperature, items thawing, or inconsistent freezing performance."
    },
    {
      title: "Excessive Frost Buildup",
      description: "Ice accumulation on walls, food items covered in frost, or defrost system not working properly."
    },
    {
      title: "Strange Noises",
      description: "Loud humming, clicking, or grinding sounds coming from the freezer during operation."
    },
    {
      title: "Door Seal Problems",
      description: "Worn gaskets, doors not sealing properly, or cold air escaping from the freezer."
    },
    {
      title: "Compressor Issues",
      description: "Compressor not running, overheating, or cycling problems affecting freezing performance."
    },
    {
      title: "Water Leaking",
      description: "Water pooling around freezer, internal leaks, or drain problems causing water issues."
    },
    {
      title: "Temperature Fluctuations",
      description: "Inconsistent temperatures, freezer too cold or warm, or thermostat control problems."
    },
    {
      title: "Interior Light Problems",
      description: "Light not working, bulb issues, or electrical problems with freezer lighting system."
    }
  ];

  const faqData = [
    {
      question: "Why isn't my freezer keeping food frozen?",
      answer: "Poor freezing performance is often caused by faulty compressors, damaged door seals, or thermostat issues. It can also be due to overloading or blocked air vents. Our technicians can diagnose and fix these issues quickly."
    },
    {
      question: "How much does freezer repair cost?",
      answer: "Freezer repairs typically range from $150-$400. Simple fixes like replacing door seals are less expensive, while compressor or control system repairs cost more. We provide free diagnostics with repair service."
    },
    {
      question: "Is it worth repairing an old freezer?",
      answer: "Most freezers can be repaired effectively, especially those less than 8-10 years old. Our technicians will assess the issue and provide honest advice about the best repair approach to restore your freezer's function."
    },
    {
      question: "How do I prevent frost buildup in my freezer?",
      answer: "Regular defrosting, checking door seals, and not overloading the freezer help prevent frost buildup. If frost accumulates quickly, it usually indicates a defrost system problem that we can repair."
    },
    {
      question: "Do you repair both upright and chest freezers?",
      answer: "Yes! We service all types of freezers including upright freezers, chest freezers, and freezer compartments in refrigerators. Our technicians are experienced with all major brands and models."
    }
  ];

  const localAreas = [
    "San Francisco", "Oakland", "San Jose", "Palo Alto", "San Mateo", "Redwood City", "Mountain View", "Berkeley", "Fremont", "Daly City"
  ];

  return (
    <ApplianceRepairPage
      appliance="Freezer"
      pageTitle="Professional Freezer Repair in Bay Area"
      metaDescription="Expert freezer repair service in San Francisco Bay Area. Same/next day service, 180-day warranty, licensed technicians. Call (760) 543-5733 or book online."
      commonProblems={commonProblems}
      localAreas={localAreas}
      faqData={faqData}
    />
  );
};

export default FreezerRepairPage;