import React from 'react';
import ApplianceRepairPage from '../../templates/ApplianceRepairPage';

const WineRefrigeratorRepairPage = () => {
  const commonProblems = [
    {
      title: "Temperature Control Issues",
      description: "Wine cooler not maintaining proper temperature, inconsistent cooling, or temperature fluctuations affecting wine storage."
    },
    {
      title: "Humidity Problems",
      description: "Incorrect humidity levels, cork drying out, or condensation issues affecting wine preservation."
    },
    {
      title: "Compressor Not Working",
      description: "Cooling system failure, compressor not running, or refrigeration cycle problems."
    },
    {
      title: "Door Seal Problems",
      description: "Worn gaskets, doors not sealing properly, or temperature loss through damaged seals."
    },
    {
      title: "Interior Light Issues",
      description: "LED lights not working, flickering, or electrical problems with wine cooler lighting."
    },
    {
      title: "Vibration Problems",
      description: "Excessive vibration affecting wine sediment, noisy operation, or unstable shelving."
    },
    {
      title: "Display Panel Malfunctions",
      description: "Digital display not working, temperature controls unresponsive, or electronic control issues."
    },
    {
      title: "Thermoelectric Cooling Problems",
      description: "Thermoelectric cooling system failure, Peltier module issues, or fan problems."
    }
  ];

  const faqData = [
    {
      question: "Why isn't my wine refrigerator maintaining the right temperature?",
      answer: "Temperature issues in wine coolers are often caused by faulty thermostats, compressor problems, or damaged door seals. For thermoelectric models, Peltier modules or fans may need replacement. Our technicians specialize in wine storage appliances."
    },
    {
      question: "How much does wine refrigerator repair cost?",
      answer: "Wine cooler repairs typically range from $150-$450 depending on the issue and brand. Premium wine storage units may cost more to repair due to specialized components. We provide free diagnostics with repair service."
    },
    {
      question: "Do you repair both compressor and thermoelectric wine coolers?",
      answer: "Yes! We service both compressor-based and thermoelectric wine refrigerators. Our technicians are trained on both cooling technologies and carry parts for major wine cooler brands."
    },
    {
      question: "Can you repair built-in wine refrigerators?",
      answer: "Absolutely! We service built-in, under-counter, and freestanding wine refrigerators. Whether it's a single-zone or dual-zone model, our technicians can handle the repair professionally."
    },
    {
      question: "What wine cooler brands do you service?",
      answer: "We repair all major wine refrigerator brands including Sub-Zero, Viking, Thermador, U-Line, Avanti, NewAir, Kalamera, and many others. We carry parts for both residential and commercial wine storage units."
    }
  ];

  const localAreas = [
    "San Francisco", "Oakland", "San Jose", "Palo Alto", "San Mateo", "Redwood City", "Mountain View", "Berkeley", "Walnut Creek", "Napa"
  ];

  return (
    <ApplianceRepairPage
      appliance="Wine Refrigerator"
      pageTitle="Professional Wine Refrigerator Repair in Bay Area"
      metaDescription="Expert wine cooler repair service in San Francisco Bay Area. Specializing in wine storage appliances, 180-day warranty, licensed technicians. Call (760) 543-5733 or book online."
      commonProblems={commonProblems}
      localAreas={localAreas}
      faqData={faqData}
    />
  );
};

export default WineRefrigeratorRepairPage;