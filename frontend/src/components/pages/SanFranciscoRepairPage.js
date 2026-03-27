import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const SanFranciscoRepairPage = () => {
  const neighborhoods = [
    "Mission District", "SOMA", "Castro", "Nob Hill", "Pacific Heights", "Richmond", "Sunset", "Marina", "Financial District", "Chinatown"
  ];

  const localFeatures = "We know San Francisco's unique housing challenges - from Victorian homes with older electrical systems to modern high-rise condos. Our technicians are familiar with SF building requirements and can navigate the city's busy streets to reach you quickly.";

  const faqData = [
    {
      question: "Do you provide fast appliance repair in San Francisco?",
      answer: "Yes! We offer fast appliance repair service throughout San Francisco, including all neighborhoods from the Mission to Pacific Heights. Our technicians know the city well and can typically arrive within 60 minutes of your call."
    },
    {
      question: "How much does appliance repair cost in San Francisco?",
      answer: "Appliance repair costs in San Francisco typically range from $150-$400 depending on the issue. We provide free diagnostics when you choose our repair service (otherwise $60). Our upfront pricing means no surprises regardless of your SF location."
    },
    {
      question: "Do you service apartments and condos in San Francisco?",
      answer: "Absolutely! We service apartments, condos, townhomes, and single-family homes throughout San Francisco. Our technicians are experienced with the unique challenges of SF housing, from narrow Victorian hallways to high-rise building access."
    },
    {
      question: "What areas of San Francisco do you serve?",
      answer: "We serve all San Francisco neighborhoods including Mission, SOMA, Castro, Nob Hill, Pacific Heights, Richmond, Sunset, Marina, Financial District, Chinatown, and many more. No matter where you are in SF, we can reach you."
    },
    {
      question: "Are you licensed to work in San Francisco?",
      answer: "Yes, FixitBay LLC is fully licensed and insured to provide appliance repair services in San Francisco. Our technicians meet all city requirements and carry proper insurance for your peace of mind."
    }
  ];

  return (
    <CityRepairPage
      city="San Francisco"
      pageTitle="Appliance Repair in San Francisco, CA"
      metaDescription="Professional appliance repair in San Francisco. Same/next day service, 180-day warranty, licensed technicians. Serving all SF neighborhoods. Call (760) 543-5733."
      neighborhoods={neighborhoods}
      localFeatures={localFeatures}
      faqData={faqData}
    />
  );
};

export default SanFranciscoRepairPage;