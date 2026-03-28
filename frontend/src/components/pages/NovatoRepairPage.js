import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const NovatoRepairPage = () => {
  const cityData = {
    city: "Novato",
    pageTitle: "Appliance Repair in Novato, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in Novato, CA. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Downtown Novato",
      "Bel Marin Keys", 
      "Indian Valley",
      "Hamilton",
      "Ignacio",
      "Bahia",
      "Atherton Ranch",
      "Oak Creek"
    ],
    localFeatures: "Novato residents trust our friendly service and North Bay values. We appreciate the relaxed lifestyle and natural beauty of this Marin County community.",
    faqData: [
      {
        question: "Do you offer fast appliance repair in Novato?",
        answer: "Yes! We provide fast appliance repair service throughout Novato, including Downtown, Bel Marin Keys, Indian Valley, and all surrounding neighborhoods. Call us before 2 PM for fast scheduling."
      },
      {
        question: "What appliance brands do you repair in Novato?",
        answer: "We repair all major appliance brands in Novato including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in Novato?",
        answer: "Our service call fee is FREE with repair (otherwise $60). We provide upfront pricing before starting any work. Most repairs in Novato range from $250-$650 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in Novato?",
        answer: "Absolutely! All appliance repairs in Novato come with our comprehensive 180-day warranty covering both parts and labor. This gives Novato residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in Novato?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout Novato and the entire Bay Area. We're a local family-owned business serving Marin County."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default NovatoRepairPage;