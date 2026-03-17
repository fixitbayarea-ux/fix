import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const NewarkRepairPage = () => {
  const cityData = {
    city: "Newark",
    pageTitle: "Appliance Repair in Newark, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in Newark, CA. Licensed technicians, 180-day warranty, same-day service. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Old Town",
      "Cedar Boulevard", 
      "Musser",
      "Lakeshore",
      "Graham Park",
      "Newpark Mall",
      "Thorton",
      "Cherry"
    ],
    localFeatures: "Newark residents choose us for our personal service and small-town values. We appreciate the quiet, family-friendly character of this East Bay community.",
    faqData: [
      {
        question: "Do you offer same-day appliance repair in Newark?",
        answer: "Yes! We provide same-day appliance repair service throughout Newark, including Old Town, Cedar Boulevard, Musser, and all surrounding neighborhoods. Call us before 2 PM for same-day availability."
      },
      {
        question: "What appliance brands do you repair in Newark?",
        answer: "We repair all major appliance brands in Newark including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in Newark?",
        answer: "Our service call fee is FREE with repair (otherwise $60). We provide upfront pricing before starting any work. Most repairs in Newark range from $150-$400 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in Newark?",
        answer: "Absolutely! All appliance repairs in Newark come with our comprehensive 180-day warranty covering both parts and labor. This gives Newark residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in Newark?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout Newark and the entire Bay Area. We're a local family-owned business serving Alameda County."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default NewarkRepairPage;