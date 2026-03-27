import React from 'react';
import CityRepairPage from '../templates/CityRepairPage';

const DalyCityRepairPage = () => {
  const neighborhoods = [
    "Westlake", "Serramonte", "Top of the Hill", "St. Francis Heights", "Crocker", "Mission Terrace", "Bayshore", "Daly City Highlands", "Colma Border", "Cemetery District"
  ];

  const localFeatures = "Daly City's dense residential neighborhoods and unique fog patterns make local knowledge essential for appliance repair. Our technicians understand the city's layout and can efficiently navigate to your home for fast, reliable service.";

  const faqData = [
    {
      question: "Do you offer fast appliance repair in Daly City?",
      answer: "Yes! We provide fast appliance repair service throughout Daly City, from Westlake to Serramonte. Our technicians are familiar with all Daly City neighborhoods and can typically arrive within an hour."
    },
    {
      question: "How much does appliance repair cost in Daly City?",
      answer: "Appliance repair costs in Daly City typically range from $150-$400 depending on the appliance and issue. We offer free diagnostics with repair service (otherwise $60) and provide upfront, transparent pricing."
    },
    {
      question: "Which Daly City neighborhoods do you serve?",
      answer: "We serve all Daly City areas including Westlake, Serramonte, Top of the Hill, St. Francis Heights, Crocker, Mission Terrace, Bayshore, Daly City Highlands, and surrounding neighborhoods."
    },
    {
      question: "Do you service condos and townhomes in Daly City?",
      answer: "Absolutely! We service all housing types in Daly City including condos, townhomes, single-family homes, and apartments. Our technicians are experienced with Daly City's diverse housing stock."
    },
    {
      question: "Are you licensed to provide appliance repair in Daly City?",
      answer: "Yes, FixitBay LLC is fully licensed and insured to provide appliance repair services in Daly City and throughout San Mateo County. Our technicians meet all local requirements and carry proper insurance."
    }
  ];

  return (
    <CityRepairPage
      city="Daly City"
      pageTitle="Appliance Repair in Daly City, CA"
      metaDescription="Professional appliance repair in Daly City. Same/next day service, 180-day warranty, licensed technicians. Serving Westlake, Serramonte and all Daly City neighborhoods. Call (760) 543-5733."
      neighborhoods={neighborhoods}
      localFeatures={localFeatures}
      faqData={faqData}
    />
  );
};

export default DalyCityRepairPage;