import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';
import BrandUniqueContent from '../../shared/BrandUniqueContent';
import brandLocalData from '../../../data/brandLocalData';

const commonProblems = [
  { title: 'Kenmore Refrigerator Not Cooling', description: 'Compressor issues, evaporator fan failures, and defrost system problems in Kenmore refrigerators.' },
  { title: 'Kenmore Washer Not Spinning', description: 'Motor coupling, lid switch, and clutch assembly failures in Kenmore washers.' },
  { title: 'Kenmore Dryer Not Heating', description: 'Heating element burnout, thermal fuse failures, and gas igniter issues in Kenmore dryers.' },
  { title: 'Kenmore Dishwasher Issues', description: 'Cleaning performance problems, pump failures, and control board issues in Kenmore dishwashers.' },
  { title: 'Kenmore Elite Problems', description: 'Advanced features, smart connectivity, and premium component failures in Kenmore Elite line.' },
  { title: 'Kenmore Oven Not Heating', description: 'Igniter failures, thermostat problems, and bake/broil element burnout in Kenmore ranges.' },
  { title: 'Kenmore Ice Maker Problems', description: 'Ice production failures, water inlet valve issues, and temperature problems.' },
  { title: 'Kenmore Error Codes', description: 'F and E error codes across Kenmore appliance models.' },
];
const faqData = [
  { question: 'Do you still repair Kenmore appliances?', answer: 'Absolutely! Kenmore remains one of the most popular brands in Bay Area homes. We repair all models.' },
  { question: 'Kenmore parts availability?', answer: 'Kenmore appliances use parts from Whirlpool, LG, and other manufacturers. We source all Kenmore parts quickly.' },
  { question: 'Kenmore Elite specialists?', answer: 'Yes — we service both standard Kenmore and the premium Elite line.' },
  { question: 'Warranty?', answer: '180-day parts and labor warranty on all Kenmore repairs.' },
];
const serviceDescription = {
  title: 'Expert Kenmore Appliance Repair in San Francisco Bay Area',
  paragraphs: [
    "Kenmore has been in American homes for decades. We repair all Kenmore models including the Elite premium line. $80 diagnostic credited toward repairs.",
    "Kenmore appliances use components from various manufacturers — we source all parts quickly from our network.",
    "Same- or next-day service throughout SF Bay Area. 180-day warranty on parts and labor.",
  ],
};
const DesktopPage = () => (<ApplianceRepairPageNew appliance="Kenmore Appliance" pageTitle="Kenmore Appliance Repair San Francisco | FixitBay LLC" metaDescription="Kenmore appliance repair in San Francisco & Bay Area. Elite specialists. Fast scheduling, 180-day warranty. Call (760) 543-5733." commonProblems={commonProblems} faqData={faqData} serviceDescription={serviceDescription} breadcrumbCategoryName="Brands" breadcrumbCategoryHref="/brands" relatedServicesCategory="Kitchen" relatedServicesSubtitle="Expert Kenmore repair" />);
const MobilePage = () => (<MobileServiceLanding appliance="Kenmore Appliance" pageSlug="kenmore-appliance-repair" pageTitle="Kenmore Appliance Repair San Francisco | FixitBay LLC" metaDescription="Kenmore repair in SF & Bay Area. Fast scheduling, 180-day warranty." heroTitle={<>Kenmore Appliance<br/>Repair — Bay Area.</>} heroSubtitle="Kenmore & Elite Specialists"
  issues={[{icon:'❄️',label:'Fridge'},{icon:'🧺',label:'Washer'},{icon:'🔥',label:'Dryer'},{icon:'🍽️',label:'Dishwasher'},{icon:'🔌',label:'Oven'},{icon:'⚠️',label:'Error Codes'}]}
  faqs={[{q:'Still repair Kenmore?',a:'Absolutely! Kenmore remains one of the most popular brands. All models.'},{q:'Parts available?',a:'Yes — we source all Kenmore parts quickly from our network.'},{q:'Elite specialist?',a:'Yes — standard Kenmore and premium Elite line.'},{q:'Warranty?',a:'180-day parts and labor warranty.'}]}
  brands={[{name:'Kenmore',href:'/kenmore-appliance-repair',logo:'/images/brands/kenmore.svg',h:38},{name:'Whirlpool',href:'/whirlpool-appliance-repair',logo:'/images/brands/whirlpool.svg',h:38},{name:'GE',href:'/ge-appliance-repair',logo:'/images/brands/ge.svg',h:38},{name:'Samsung',href:'/samsung-appliance-repair',logo:'/images/brands/samsung.svg',h:24},{name:'LG',href:'/lg-appliance-repair',logo:'/images/brands/lg.svg',h:38},{name:'Frigidaire',href:'/frigidaire-appliance-repair',logo:'/images/brands/frigidaire.svg',h:28},{name:'Maytag',href:'/maytag-appliance-repair',logo:'/images/brands/maytag.svg',h:30},{name:'Bosch',href:'/bosch-appliance-repair',logo:'/images/brands/bosch.svg',h:30}]}
/>);
const KenmoreApplianceRepairPage = () => { const m = useIsMobile(); return m ? <><MobilePage/><BrandUniqueContent brandName="Kenmore" data={brandLocalData['Kenmore']} /></> : <><DesktopPage/><BrandUniqueContent brandName="Kenmore" data={brandLocalData['Kenmore']} /></>; };
export default KenmoreApplianceRepairPage;
