import React from 'react';
import ApplianceRepairPage from '../templates/ApplianceRepairPage';

const BuiltInRefrigeratorRepairPage = () => {
  const applianceData = {
    appliance: "Built-In Refrigerator",
    pageTitle: "Built-In Refrigerator Repair – Premium Kitchen Appliance Service",
    metaDescription: "Expert built-in refrigerator repair in the Bay Area. Premium kitchen appliance specialists. Licensed technicians, 180-day warranty. Call (760) 543-5733!",
    commonProblems: [
      {
        title: "Temperature Control Issues",
        description: "Built-in units require precise temperature control. We repair advanced climate systems, multi-zone controls, and electronic temperature management."
      },
      {
        title: "Ice Maker and Water Dispenser Problems",
        description: "Integrated ice and water systems can malfunction. We repair dispensers, filters, pumps, and ice production components."
      },
      {
        title: "Door Seal and Hinge Complications",
        description: "Custom door seals and heavy doors create unique challenges. We repair and replace sealing systems and heavy-duty hinges."
      },
      {
        title: "Compressor and Cooling System Failures",
        description: "High-end compressors require specialized service. We repair premium cooling systems and refrigerant circuits in built-in units."
      },
      {
        title: "Electronic Control Board Malfunctions",
        description: "Advanced electronics control many functions. We diagnose and repair sophisticated control systems and user interfaces."
      },
      {
        title: "Custom Panel and Trim Issues",
        description: "Built-in refrigerators often have custom panels. We work carefully around decorative elements and custom cabinetry and ventilation."
      }
    ],
    localAreas: [
      "Palo Alto", "Los Altos", "Saratoga", "Los Gatos", "Atherton", "Menlo Park",
      "Hillsborough", "Burlingame", "San Mateo", "Foster City", "Redwood City", "Cupertino"
    ],
    faqData: [
      {
        question: "Do you service all built-in refrigerator brands?",
        answer: "Yes! We specialize in premium built-in brands including Sub-Zero, Wolf, Viking, KitchenAid, GE Monogram, Thermador, and Bosch."
      },
      {
        question: "Can you repair built-ins without removing custom panels?",
        answer: "Usually yes! Our technicians have specialized tools and techniques to service built-in refrigerators while preserving custom cabinetry and panels."
      },
      {
        question: "How long do built-in refrigerator repairs take?",
        answer: "Most repairs take 1-3 hours. Complex issues with integrated systems may require additional time, but we minimize kitchen disruption."
      },
      {
        question: "Do you carry parts for high-end built-in refrigerators?",
        answer: "We stock common parts for premium brands and can quickly source specialized components for built-in refrigerators when needed."
      },
      {
        question: "Is built-in refrigerator repair more expensive?",
        answer: "Parts may cost more due to premium construction, but our labor rates are the same. We provide upfront pricing before starting work."
      }
    ]
  };

  return <ApplianceRepairPage {...applianceData} />;
};

export default BuiltInRefrigeratorRepairPage;