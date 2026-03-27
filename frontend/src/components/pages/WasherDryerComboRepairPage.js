import React from 'react';
import ApplianceRepairPage from '../templates/ApplianceRepairPage';

const WasherDryerComboRepairPage = () => {
  const applianceData = {
    appliance: "Washer Dryer Combo",
    pageTitle: "Washer Dryer Combo Repair – All-in-One Laundry Solutions",
    metaDescription: "Expert washer dryer combo repair in the Bay Area. All-in-one laundry appliance specialists. Licensed technicians, 180-day warranty. Call (760) 543-5733!",
    commonProblems: [
      {
        title: "Not Switching Between Wash and Dry Cycles",
        description: "Cycle transition problems are common in combo units. We repair control systems, sensors, and switching mechanisms for seamless operation."
      },
      {
        title: "Clothes Still Wet After Full Cycle",
        description: "Incomplete drying indicates heating, ventilation, or moisture sensor issues. We optimize drying performance in combo units."
      },
      {
        title: "Long Cycle Times or Never Finishing",
        description: "Extended cycles suggest efficiency problems. We diagnose and repair systems that cause abnormally long wash or dry times."
      },
      {
        title: "Error Codes and Digital Display Issues",
        description: "Complex combo units show various error codes. We decode and repair the specific systems causing electronic malfunctions."
      },
      {
        title: "Water Not Draining Completely",
        description: "Drainage problems affect both washing and drying performance. We repair pumps, hoses, and drainage systems in combo units."
      },
      {
        title: "Unusual Noises During Any Cycle",
        description: "Mechanical noise indicates worn components. We identify and replace damaged parts in the integrated wash/dry system."
      }
    ],
    localAreas: [
      "San Francisco", "Mountain View", "Palo Alto", "Sunnyvale", "Santa Clara", "Oakland",
      "Berkeley", "Fremont", "San Mateo", "Redwood City", "Hayward", "Union City"
    ],
    faqData: [
      {
        question: "Are washer dryer combos more difficult to repair?",
        answer: "They require specialized knowledge due to integrated systems, but our technicians are trained specifically on combo units and their unique challenges."
      },
      {
        question: "Why does my combo take so long to dry clothes?",
        answer: "Combo units use condensation drying which takes longer. However, excessive times indicate problems we can diagnose and repair."
      },
      {
        question: "Can you repair ventless washer dryer combos?",
        answer: "Yes! We specialize in both vented and ventless combo units, including condensation and heat pump drying systems."
      },
      {
        question: "Do you service European combo brands?",
        answer: "Absolutely! We repair all combo brands including Bosch, Miele, LG, Samsung, GE, and other European and Asian manufacturers."
      },
      {
        question: "Is it worth repairing a combo unit vs. buying separate machines?",
        answer: "For newer units under 8 years old, repair is usually cost-effective. We provide honest assessments based on your specific situation."
      }
    ]
  };

  return <ApplianceRepairPage {...applianceData} />;
};

export default WasherDryerComboRepairPage;