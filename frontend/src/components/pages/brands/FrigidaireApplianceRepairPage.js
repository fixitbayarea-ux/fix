import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';
import BrandUniqueContent from '../../shared/BrandUniqueContent';
import brandLocalData from '../../../data/brandLocalData';

const commonProblems = [
  { title: 'Frigidaire Refrigerator Not Cooling', description: 'Compressor failures, defrost system issues, and fan motor problems in Frigidaire refrigerators.' },
  { title: 'Frigidaire Washer Not Draining', description: 'Pump blockages, drain hose issues, and error codes in Frigidaire front-load washers.' },
  { title: 'Frigidaire Dryer Not Heating', description: 'Heating element failures, thermal fuse trips, and gas valve issues in Frigidaire dryers.' },
  { title: 'Frigidaire Dishwasher Problems', description: 'Poor cleaning, drainage issues, and spray arm clogs in Frigidaire dishwashers.' },
  { title: 'Frigidaire Oven Temperature Issues', description: 'Uneven heating, igniter failures, and thermostat problems in Frigidaire ranges.' },
  { title: 'Frigidaire Gallery & Professional Issues', description: 'Premium Frigidaire Gallery and Professional line problems with advanced features.' },
  { title: 'Frigidaire Freezer Problems', description: 'Frost buildup, temperature fluctuations, and compressor issues in Frigidaire freezers.' },
  { title: 'Frigidaire Error Codes', description: 'SY EF, HI, and other error codes across Frigidaire appliance models.' },
];
const faqData = [
  { question: 'All Frigidaire models?', answer: 'Yes — standard, Gallery, and Professional lines. All appliance types.' },
  { question: 'Genuine Frigidaire parts?', answer: 'OEM Frigidaire/Electrolux parts or high-quality equivalents.' },
  { question: 'Fast scheduling?', answer: 'Yes — same- or next-day throughout SF, Peninsula, and Marin County.' },
  { question: 'Warranty?', answer: '180-day parts and labor warranty on all Frigidaire repairs.' },
];
const serviceDescription = {
  title: 'Expert Frigidaire Appliance Repair in San Francisco Bay Area',
  paragraphs: [
    "Frigidaire, part of the Electrolux family, offers reliable appliances for every home. We repair all Frigidaire lines. $60 diagnostic credited toward repairs.",
    "We service Frigidaire Gallery and Professional premium lines with genuine parts.",
    "Same- or next-day service throughout SF Bay Area. 180-day warranty on parts and labor.",
  ],
};
const DesktopPage = () => (<ApplianceRepairPageNew appliance="Frigidaire Appliance" pageTitle="Frigidaire Appliance Repair San Francisco | FixitBay LLC" metaDescription="Frigidaire appliance repair in San Francisco & Bay Area. Fast scheduling, 180-day warranty. Call (760) 543-5733." commonProblems={commonProblems} faqData={faqData} serviceDescription={serviceDescription} breadcrumbCategoryName="Brands" breadcrumbCategoryHref="/brands" relatedServicesCategory="Kitchen" relatedServicesSubtitle="Expert Frigidaire repair" />);
const MobilePage = () => (<MobileServiceLanding appliance="Frigidaire Appliance" pageSlug="frigidaire-appliance-repair" pageTitle="Frigidaire Appliance Repair San Francisco | FixitBay LLC" metaDescription="Frigidaire repair in SF & Bay Area. Fast scheduling, 180-day warranty." heroTitle={<>Frigidaire<br/>Repair — Bay Area.</>} heroSubtitle="Frigidaire Certified Technicians"
  issues={[{icon:'❄️',label:'Fridge'},{icon:'🧺',label:'Washer'},{icon:'🔥',label:'Dryer'},{icon:'🍽️',label:'Dishwasher'},{icon:'🔌',label:'Oven'},{icon:'⚠️',label:'Error Codes'}]}
  faqs={[{q:'All Frigidaire models?',a:'Yes — standard, Gallery, and Professional lines.'},{q:'Genuine parts?',a:'OEM Frigidaire/Electrolux parts or equivalents.'},{q:'Fast scheduling?',a:'Yes — throughout SF, Peninsula, and Marin County.'},{q:'Warranty?',a:'180-day parts and labor warranty.'}]}
  brands={[{name:'Frigidaire',href:'/frigidaire-appliance-repair',logo:'/images/brands/frigidaire.svg',h:28},{name:'Electrolux',href:'/brands',logo:'/images/brands/electrolux.svg',h:24},{name:'GE',href:'/ge-appliance-repair',logo:'/images/brands/ge.svg',h:38},{name:'Samsung',href:'/samsung-appliance-repair',logo:'/images/brands/samsung.svg',h:24},{name:'LG',href:'/lg-appliance-repair',logo:'/images/brands/lg.svg',h:38},{name:'Whirlpool',href:'/whirlpool-appliance-repair',logo:'/images/brands/whirlpool.svg',h:38},{name:'Maytag',href:'/maytag-appliance-repair',logo:'/images/brands/maytag.svg',h:30},{name:'KitchenAid',href:'/kitchenaid-appliance-repair',logo:'/images/brands/kitchenaid.svg',h:24}]}
/>);
const FrigidaireApplianceRepairPage = () => { const m = useIsMobile(); return m ? <><MobilePage/><BrandUniqueContent brandName="Frigidaire" data={brandLocalData['Frigidaire']} /></> : <><DesktopPage/><BrandUniqueContent brandName="Frigidaire" data={brandLocalData['Frigidaire']} /></>; };
export default FrigidaireApplianceRepairPage;
