import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../../templates/MobileServiceLanding';
import { useIsMobile } from '../../../hooks/useIsMobile';
import BrandUniqueContent from '../../shared/BrandUniqueContent';
import brandLocalData from '../../../data/brandLocalData';

const commonProblems = [
  { title: 'Wolf Range Igniter Failures', description: 'Dual-stacked burner igniters failing, causing no ignition or slow heating in Wolf ranges.' },
  { title: 'Wolf Oven Not Heating Evenly', description: 'Convection system problems, heating element failures, and temperature sensor issues in Wolf ovens.' },
  { title: 'Wolf Cooktop Burner Issues', description: 'Dual-stacked burner problems, flame adjustment issues, and igniter clicking in Wolf cooktops.' },
  { title: 'Wolf Steam Oven Problems', description: 'Steam generation failures, descaling issues, and control problems in Wolf Convection Steam Ovens.' },
  { title: 'Wolf Range Temperature Calibration', description: 'Temperature running high or low, thermostat drift, and oven sensor inaccuracy in Wolf ranges.' },
  { title: 'Wolf Induction Cooktop Errors', description: 'Induction coil failures, zone recognition issues, and power management problems.' },
  { title: 'Wolf Ventilation Issues', description: 'Motor failures, speed control issues, and noise problems in Wolf ventilation hoods.' },
  { title: 'Wolf Warming Drawer Problems', description: 'Temperature control, humidity settings, and heating element issues in Wolf warming drawers.' },
];
const faqData = [
  { question: 'Wolf range specialists?', answer: 'Yes — our technicians specialize in Wolf dual-fuel ranges, gas ranges, and pro-style cooktops.' },
  { question: 'Genuine Wolf parts?', answer: 'We use OEM Wolf/Sub-Zero parts from authorized distributors.' },
  { question: 'Wolf steam oven expert?', answer: 'Yes — we service Wolf Convection Steam Ovens including descaling and steam system repairs.' },
  { question: 'Warranty?', answer: '180-day parts and labor warranty on all Wolf repairs.' },
];
const serviceDescription = {
  title: 'Expert Wolf Appliance Repair in San Francisco Bay Area',
  paragraphs: [
    "Wolf, the sister brand of Sub-Zero, makes legendary cooking appliances. Our technicians specialize in Wolf ranges, ovens, cooktops, and steam ovens. $60 diagnostic credited toward repairs.",
    "We understand Wolf's dual-stacked burner technology, VertiCross convection, and steam cooking systems.",
    "Same- or next-day and next-day Wolf repair throughout SF, Peninsula, and Marin County. 180-day warranty.",
  ],
};
const DesktopPage = () => (<ApplianceRepairPageNew appliance="Wolf Appliance" pageTitle="Wolf Appliance Repair San Francisco | FixitBay LLC" metaDescription="Wolf range and oven repair in San Francisco & Bay Area. Dual-stacked burner specialists. Fast scheduling, 180-day warranty. Call (760) 543-5733." commonProblems={commonProblems} faqData={faqData} serviceDescription={serviceDescription} breadcrumbCategoryName="Brands" breadcrumbCategoryHref="/brands" relatedServicesCategory="Premium" relatedServicesSubtitle="Expert Wolf repair" />);
const MobilePage = () => (<MobileServiceLanding appliance="Wolf Appliance" pageSlug="wolf-appliance-repair" pageTitle="Wolf Appliance Repair San Francisco | FixitBay LLC" metaDescription="Wolf repair in SF & Bay Area. Range & oven specialists. 180-day warranty." heroTitle={<>Wolf Appliance<br/>Repair — Bay Area.</>} heroSubtitle="Wolf Range & Oven Experts"
  issues={[{icon:'🔥',label:'Range'},{icon:'🌡️',label:'Oven'},{icon:'♨️',label:'Steam Oven'},{icon:'🔌',label:'Cooktop'},{icon:'💨',label:'Ventilation'},{icon:'⚠️',label:'Calibration'}]}
  faqs={[{q:'Wolf range specialist?',a:'Yes — dual-fuel ranges, gas ranges, and pro-style cooktops.'},{q:'Steam oven expert?',a:'Yes — Wolf Convection Steam Ovens including descaling and steam system.'},{q:'Genuine parts?',a:'OEM Wolf/Sub-Zero parts from authorized distributors.'},{q:'Warranty?',a:'180-day parts and labor warranty.'}]}
  brands={[{name:'Wolf',href:'/wolf-appliance-repair',logo:'/images/brands/wolf.svg',h:30},{name:'Sub-Zero',href:'/sub-zero-appliance-repair',logo:'/images/brands/sub-zero.svg',h:30},{name:'Viking',href:'/viking-appliance-repair',logo:'/images/brands/viking.svg',h:38},{name:'Thermador',href:'/thermador-appliance-repair',logo:'/images/brands/thermador.svg',h:38},{name:'Miele',href:'/miele-appliance-repair',logo:'/images/brands/miele.svg',h:38},{name:'Bosch',href:'/bosch-appliance-repair',logo:'/images/brands/bosch.svg',h:30},{name:'Jenn-Air',href:'/brands',logo:'/images/brands/jenn-air.svg',h:30},{name:'KitchenAid',href:'/kitchenaid-appliance-repair',logo:'/images/brands/kitchenaid.svg',h:24}]}
/>);
const WolfApplianceRepairPage = () => { const m = useIsMobile(); return m ? <><MobilePage/><BrandUniqueContent brandName="Wolf" data={brandLocalData['Wolf']} /></> : <><DesktopPage/><BrandUniqueContent brandName="Wolf" data={brandLocalData['Wolf']} /></>; };
export default WolfApplianceRepairPage;
