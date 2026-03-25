import React, { useEffect } from 'react';
import BackButton from '../BackButton';
import SEOMetaTags from '../SEOMetaTags';

export default function ApplianceReplacementPage(){
  useEffect(()=>{ window.scrollTo(0,0); },[]);
  const canonical = 'https://fixitbay.net/appliance-replacement';
  return (
    <main className="container" style={{padding:'24px'}}>
      <SEOMetaTags title="Appliance Replacement | FixItBay Appliance Repair & Maintenance" description="Need a new appliance installed or an old unit replaced? We provide professional appliance replacement and installation across the Bay Area with transparent pricing and a 180-day workmanship warranty." canonical={canonical} />
      <BackButton />
      <h1 className="h1" style={{color:'#1A3B5D', marginTop: 8}}>Professional Appliance Replacement</h1>
      <p style={{color:'#1A3B5D', opacity:.9, marginTop:12}}>When repair is not cost‑effective, our team can remove your old unit and install a new one to manufacturer specifications. We handle refrigerators, ranges, cooktops, dishwashers, washers, dryers, and more. Every installation includes a clean finish and a 180‑day workmanship warranty.</p>
      <p style={{color:'#1A3B5D', opacity:.9, marginTop:12}}>We’ll advise honestly whether replacement makes sense for your situation, and if you choose to replace, we’ll schedule a convenient time, arrive on time, and complete the work safely and professionally.</p>
    </main>
  );
}
