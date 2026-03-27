import React from 'react';
import ApplianceRepairPage from '../templates/ApplianceRepairPage';

const WallOvenRepairPage = () => {
  const applianceData = {
    appliance: "Wall Oven",
    pageTitle: "Wall Oven Repair Service – Built-In Oven Specialists Bay Area",
    metaDescription: "Expert wall oven repair in the Bay Area. Built-in oven specialists. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733!",
    commonProblems: [
      {
        title: "Oven Not Heating to Temperature",
        description: "Inaccurate temperatures affect cooking results. We calibrate thermostats and repair heating elements for precise temperature control."
      },
      {
        title: "Convection Fan Not Working",
        description: "Failed convection fans prevent even heating. We repair or replace fan motors and control circuits for proper air circulation."
      },
      {
        title: "Self-Clean Cycle Malfunctions",
        description: "Self-clean problems can lock doors or fail to reach cleaning temperatures. We repair self-clean systems and safety mechanisms."
      },
      {
        title: "Door Seal and Hinge Issues",
        description: "Damaged door seals or hinges cause heat loss and safety concerns. We replace gaskets and hinges for proper door operation."
      },
      {
        title: "Digital Control Problems",
        description: "Unresponsive touchpads or blank displays indicate electronic failures. We repair control boards and user interface systems."
      },
      {
        title: "Interior Light Not Working",
        description: "Failed oven lights make cooking monitoring difficult. We replace bulbs, sockets, and light switches for proper illumination."
      }
    ],
    localAreas: [
      "Palo Alto", "Los Altos", "Saratoga", "Los Gatos", "Cupertino", "Mountain View",
      "Redwood City", "Burlingame", "San Mateo", "Foster City", "Menlo Park", "Atherton"
    ],
    faqData: [
      {
        question: "Do you repair all wall oven brands?",
        answer: "Yes! We service all major wall oven brands including KitchenAid, Whirlpool, GE, Bosch, Wolf, Viking, Thermador, and more."
      },
      {
        question: "Can you repair double wall ovens?",
        answer: "Absolutely! We specialize in single and double wall oven repairs including combination microwave/oven units and steam ovens."
      },
      {
        question: "How do you access built-in wall ovens for repair?",
        answer: "Our technicians have specialized tools and techniques to safely access and repair built-in ovens without damaging cabinetry."
      },
      {
        question: "Is it worth repairing a wall oven vs. replacement?",
        answer: "For ovens under 10 years old, repair is usually cost-effective. We provide honest assessments and cost comparisons to help you decide."
      },
      {
        question: "Do you offer fast wall oven repair?",
        answer: "Yes! We understand kitchen disruptions are inconvenient. We offer fast scheduling and carry common parts for faster repairs."
      }
    ]
  };

  return <ApplianceRepairPage {...applianceData} />;
};

export default WallOvenRepairPage;