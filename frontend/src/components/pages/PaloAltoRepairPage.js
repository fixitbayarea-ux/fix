import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const PaloAltoRepairPage = () => {
  const neighborhoods = [
    "Downtown Palo Alto", "Stanford", "Crescent Park", "Professorville", "Midtown", "Ventura", "Barron Park", "Mayfield", "College Terrace", "Old Palo Alto"
  ];

  const localFeatures = "Palo Alto's mix of historic neighborhoods and modern developments requires specialized appliance repair knowledge. From Stanford faculty homes to tech executive residences, our technicians understand Palo Alto's unique housing styles and can provide premium appliance repair service.";

  const faqData = [
    {
      question: "Do you provide fast appliance repair in Palo Alto?",
      answer: "Yes! We offer fast appliance repair service throughout Palo Alto, from Stanford to downtown. Our technicians are familiar with Palo Alto's tree-lined streets and can navigate efficiently to reach you quickly."
    },
    {
      question: "What's the cost of appliance repair in Palo Alto?",
      answer: "Appliance repair costs in Palo Alto typically range from $250-$650 depending on the appliance and issue. We provide free diagnostics with repair service (otherwise $60) and always offer transparent, upfront pricing."
    },
    {
      question: "Which Palo Alto neighborhoods do you serve?",
      answer: "We serve all Palo Alto areas including Downtown, Stanford, Crescent Park, Professorville, Midtown, Ventura, Barron Park, Mayfield, College Terrace, Old Palo Alto, and surrounding areas."
    },
    {
      question: "Do you work on high-end appliances in Palo Alto homes?",
      answer: "Absolutely! Our technicians are experienced with premium appliance brands commonly found in Palo Alto homes. Whether it's Sub-Zero, Wolf, Miele, or other luxury brands, we have the expertise to service them properly."
    },
    {
      question: "Are you licensed for appliance repair in Palo Alto?",
      answer: "Yes, FixitBay LLC is fully licensed and insured to provide appliance repair services in Palo Alto and throughout Santa Clara County. Our technicians meet all local requirements and carry comprehensive insurance."
    }
  ];

  return (
    <CityRepairPage
      city="Palo Alto"
      pageTitle="Appliance Repair in Palo Alto, CA"
      metaDescription="Professional appliance repair in Palo Alto. Same/next day service, 180-day warranty, licensed technicians. Serving Stanford and all Palo Alto neighborhoods. Call (760) 543-5733."
      neighborhoods={neighborhoods}
      localFeatures={localFeatures}
      faqData={faqData}
    />
  );
};

export default PaloAltoRepairPage;