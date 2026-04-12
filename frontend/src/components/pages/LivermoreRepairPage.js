import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const LivermoreRepairPage = () => {
  const cityData = {
    city: "Livermore",
    pageTitle: "Appliance Repair in Livermore, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in Livermore, CA. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Downtown Livermore",
      "Jensen Tract", 
      "Springtown",
      "Vineyard Hills",
      "Portola Hills",
      "Altamont Creek",
      "South Livermore",
      "East Livermore"
    ],
    localFeatures: "Livermore residents love our dependable service and wine country hospitality. We understand the unique character of this Tri-Valley gem.",
    faqData: [
      {
        question: "Do you offer fast appliance repair in Livermore?",
        answer: "Yes! We provide fast appliance repair service throughout Livermore, including Downtown, Jensen Tract, Springtown, and all surrounding neighborhoods. Call us before 2 PM for fast scheduling."
      },
      {
        question: "What appliance brands do you repair in Livermore?",
        answer: "We repair all major appliance brands in Livermore including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in Livermore?",
        answer: "Our service call fee is FREE with repair (otherwise $80). We provide upfront pricing before starting any work. Most repairs in Livermore range from $250-$650 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in Livermore?",
        answer: "Absolutely! All appliance repairs in Livermore come with our comprehensive 180-day warranty covering both parts and labor. This gives Livermore residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in Livermore?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout Livermore and the entire Bay Area. We're a local family-owned business serving the Tri-Valley."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default LivermoreRepairPage;