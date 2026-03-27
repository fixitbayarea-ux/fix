import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const SanRafaelRepairPage = () => {
  const cityData = {
    city: "San Rafael",
    pageTitle: "Appliance Repair in San Rafael, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in San Rafael, CA. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Downtown San Rafael",
      "West End", 
      "Gerstle Park",
      "Lincoln Hill",
      "Terra Linda",
      "Marinwood",
      "Peacock Gap",
      "Sun Valley"
    ],
    localFeatures: "San Rafael residents appreciate our reliable service and Marin County hospitality. We understand the unique needs of this diverse North Bay community.",
    faqData: [
      {
        question: "Do you offer fast appliance repair in San Rafael?",
        answer: "Yes! We provide fast appliance repair service throughout San Rafael, including Downtown, West End, Gerstle Park, and all surrounding neighborhoods. Call us before 2 PM for fast scheduling."
      },
      {
        question: "What appliance brands do you repair in San Rafael?",
        answer: "We repair all major appliance brands in San Rafael including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in San Rafael?",
        answer: "Our service call fee is FREE with repair (otherwise $60). We provide upfront pricing before starting any work. Most repairs in San Rafael range from $150-$400 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in San Rafael?",
        answer: "Absolutely! All appliance repairs in San Rafael come with our comprehensive 180-day warranty covering both parts and labor. This gives San Rafael residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in San Rafael?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout San Rafael and the entire Bay Area. We're a local family-owned business serving Marin County."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default SanRafaelRepairPage;