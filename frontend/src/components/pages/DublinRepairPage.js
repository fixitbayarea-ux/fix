import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const DublinRepairPage = () => {
  const cityData = {
    city: "Dublin",
    pageTitle: "Appliance Repair in Dublin, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in Dublin, CA. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "East Dublin",
      "West Dublin", 
      "Emerald Glen",
      "Jordan Ranch",
      "John Green",
      "Schaefer Ranch",
      "Stoneridge Creek",
      "Dublin Ranch"
    ],
    localFeatures: "Dublin residents love our reliable service and modern approach. We understand the lifestyle of this growing, family-oriented Tri-Valley community with excellent schools.",
    faqData: [
      {
        question: "Do you offer fast appliance repair in Dublin?",
        answer: "Yes! We provide fast appliance repair service throughout Dublin, including East Dublin, West Dublin, Emerald Glen, and all surrounding neighborhoods. Call us before 2 PM for fast scheduling."
      },
      {
        question: "What appliance brands do you repair in Dublin?",
        answer: "We repair all major appliance brands in Dublin including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in Dublin?",
        answer: "Our service call fee is FREE with repair (otherwise $80). We provide upfront pricing before starting any work. Most repairs in Dublin range from $250-$650 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in Dublin?",
        answer: "Absolutely! All appliance repairs in Dublin come with our comprehensive 180-day warranty covering both parts and labor. This gives Dublin residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in Dublin?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout Dublin and the entire Bay Area. We're a local family-owned business serving the Tri-Valley."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default DublinRepairPage;