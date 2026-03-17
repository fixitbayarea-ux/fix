import React from 'react';
import ApplianceRepairPage from '../templates/ApplianceRepairPage';

const StackedWasherDryerRepairPage = () => {
  const applianceData = {
    appliance: "Stacked Washer Dryer",
    pageTitle: "Stacked Washer Dryer Repair – Space-Saving Laundry Solutions",
    metaDescription: "Expert stacked washer dryer repair in San Francisco, Peninsula & Marin County. Maximize your laundry space with professional service. Licensed technicians, 180-day warranty. Call (760) 543-5733!",
    commonProblems: [
      {
        title: "Washer Not Draining or Spinning",
        description: "Drainage and spin issues in stacked units require specialized diagnosis. We repair pumps, belts, and control systems for both washers and dryers."
      },
      {
        title: "Dryer Not Heating or Taking Too Long",
        description: "Heat problems affect drying efficiency. We repair heating elements, thermostats, and ventilation systems in stacked configurations."
      },
      {
        title: "Excessive Vibration or Noise",
        description: "Stacked units amplify vibrations. We balance units, repair shock absorbers, and secure mounting systems for quiet operation."
      },
      {
        title: "Door Seal and Latch Problems",
        description: "Door issues on either unit can prevent proper operation. We replace seals and latches while maintaining stacked alignment."
      },
      {
        title: "Control Panel Malfunctions",
        description: "Electronic controls can fail on either unit. We repair digital displays, control boards, and user interfaces for both appliances."
      },
      {
        title: "Water Leaking from Either Unit",
        description: "Leaks in stacked units can damage both appliances. We locate and repair water supply, drainage, and seal issues."
      }
    ],
    localAreas: [
      "San Francisco", "Oakland", "Berkeley", "Mountain View", "Palo Alto", "Sunnyvale",
      "Santa Clara", "Fremont", "Hayward", "San Mateo", "Redwood City", "Daly City"
    ],
    faqData: [
      {
        question: "Can you repair both units in a stacked washer dryer?",
        answer: "Yes! Our technicians are trained to service both the washer and dryer components in stacked units, including shared systems and connections."
      },
      {
        question: "Do I need to unstack the units for repair?",
        answer: "Usually not! Our technicians have specialized tools and techniques to repair stacked units in place, saving you time and hassle."
      },
      {
        question: "How long does stacked washer dryer repair take?",
        answer: "Most repairs take 1-3 hours. Complex issues affecting both units may require additional time, but we provide estimates upfront."
      },
      {
        question: "Do you service all stacked washer dryer brands?",
        answer: "Yes! We repair all major brands including LG, Samsung, Whirlpool, GE, Maytag, Electrolux, and specialized stackable models."
      },
      {
        question: "Can you help if my stacked units are off-balance?",
        answer: "Absolutely! We specialize in leveling and securing stacked units to prevent vibration, reduce noise, and ensure safe operation."
      }
    ]
  };

  return <ApplianceRepairPage {...applianceData} />;
};

export default StackedWasherDryerRepairPage;