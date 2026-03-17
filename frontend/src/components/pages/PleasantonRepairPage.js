import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const PleasantonRepairPage = () => {
  const cityData = {
    city: "Pleasanton",
    pageTitle: "Appliance Repair in Pleasanton, CA – Fast, Reliable, Affordable!",
    metaDescription: "Expert appliance repair in Pleasanton, CA. Licensed technicians, 180-day warranty, same-day service. Call (760) 543-5733 or book online now!",
    neighborhoods: [
      "Downtown Pleasanton",
      "Ruby Hill", 
      "Kottinger Ranch",
      "Vintage Hills",
      "Castlewood",
      "Birdland",
      "Northgate",
      "Pleasanton Ridge"
    ],
    localFeatures: "Pleasanton residents trust our premium service and attention to detail. We understand the high standards of this beautiful Tri-Valley community.",
    faqData: [
      {
        question: "Do you offer same-day appliance repair in Pleasanton?",
        answer: "Yes! We provide same-day appliance repair service throughout Pleasanton, including Downtown, Ruby Hill, Kottinger Ranch, and all surrounding neighborhoods. Call us before 2 PM for same-day availability."
      },
      {
        question: "What appliance brands do you repair in Pleasanton?",
        answer: "We repair all major appliance brands in Pleasanton including Samsung, LG, Whirlpool, GE, Frigidaire, Bosch, KitchenAid, Maytag, and many more. Our technicians carry parts for the most common brands."
      },
      {
        question: "How much does appliance repair cost in Pleasanton?",
        answer: "Our service call fee is FREE with repair (otherwise $60). We provide upfront pricing before starting any work. Most repairs in Pleasanton range from $150-$400 depending on the appliance and issue."
      },
      {
        question: "Do you provide warranty on repairs in Pleasanton?",
        answer: "Absolutely! All appliance repairs in Pleasanton come with our comprehensive 180-day warranty covering both parts and labor. This gives Pleasanton residents complete peace of mind."
      },
      {
        question: "Are your technicians licensed to work in Pleasanton?",
        answer: "Yes, all our technicians are fully licensed, insured, and bonded to work throughout Pleasanton and the entire Bay Area. We're a local family-owned business serving the Tri-Valley."
      }
    ]
  };

  return <CityRepairPage {...cityData} />;
};

export default PleasantonRepairPage;