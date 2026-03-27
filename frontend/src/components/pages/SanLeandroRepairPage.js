import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const SanLeandroRepairPage = () => {
  const cityData = {
    city: "San Leandro",
    pageTitle: "Appliance Repair in San Leandro, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in San Leandro, CA. Licensed technicians, 180-day warranty, fast scheduling. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Downtown San Leandro",
      "Marina Park", 
      "Estudillo Estates",
      "Halcyon",
      "Washington Manor",
      "Mulford Gardens",
      "Cherry Blossom",
      "Roosevelt"
    ],
    localFeatures: "San Leandro residents appreciate our straightforward approach and community commitment. We're proud to serve this diverse, working East Bay community with integrity.",
    faqData: [
      {
        question: "Do you offer fast appliance repair in San Leandro?",
        answer: "Yes! We provide fast appliance repair service throughout San Leandro, including Downtown, Marina Park, Estudillo Estates, and all surrounding neighborhoods. Call us before 2 PM for fast scheduling."
      },
      {
        question: "What appliance brands do you repair in San Leandro?",
        answer: "We repair all major appliance brands in San Leandro including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in San Leandro?",
        answer: "Our service call fee is FREE with repair (otherwise $60). We provide upfront pricing before starting any work. Most repairs in San Leandro range from $150-$400 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in San Leandro?",
        answer: "Absolutely! All appliance repairs in San Leandro come with our comprehensive 180-day warranty covering both parts and labor. This gives San Leandro residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in San Leandro?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout San Leandro and the entire Bay Area. We're a local family-owned business serving Alameda County."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default SanLeandroRepairPage;