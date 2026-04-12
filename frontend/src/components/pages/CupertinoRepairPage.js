import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const CupertinoRepairPage = () => {
  const cityData = {
    city: "Cupertino",
    pageTitle: "Appliance Repair in Cupertino, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in Cupertino, CA. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Monta Vista",
      "Rancho Rinconada", 
      "Garden Gate",
      "Fairgrove",
      "Wilson Park",
      "Oak Valley High",
      "Homestead",
      "Seven Springs"
    ],
    localFeatures: "Cupertino families appreciate our attention to detail and premium service quality. We're proud to serve this prestigious Silicon Valley community known for excellent schools.",
    faqData: [
      {
        question: "Do you offer fast appliance repair in Cupertino?",
        answer: "Yes! We provide fast appliance repair service throughout Cupertino, including Monta Vista, Rancho Rinconada, Garden Gate, and all surrounding neighborhoods. Call us before 2 PM for fast scheduling."
      },
      {
        question: "What appliance brands do you repair in Cupertino?",
        answer: "We repair all major appliance brands in Cupertino including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in Cupertino?",
        answer: "Our service call fee is FREE with repair (otherwise $80). We provide upfront pricing before starting any work. Most repairs in Cupertino range from $250-$650 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in Cupertino?",
        answer: "Absolutely! All appliance repairs in Cupertino come with our comprehensive 180-day warranty covering both parts and labor. This gives Cupertino residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in Cupertino?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout Cupertino and the entire Bay Area. We're a local family-owned business serving Silicon Valley."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default CupertinoRepairPage;