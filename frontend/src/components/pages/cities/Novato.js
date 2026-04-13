import React from 'react';
import ApplianceRepairPageNew from '../../templates/ApplianceRepairPageNew';

const F = 'Montserrat, sans-serif';
const C = { navy: '#0d1b2a', navyMid: '#1a2f45', accent: '#ff5722', cream: '#f8f5f0', textDark: '#1a1a1a', textMid: '#4a5568', white: '#ffffff', white60: 'rgba(255,255,255,0.6)', white75: 'rgba(255,255,255,0.75)' };

const Novato = () => {
  const commonProblems = [
    { title: 'Refrigerator Cooling Issues', description: 'Novato\'s inland location with temperature extremes challenges refrigerator compressors and cooling systems. Summer heat in inland neighborhoods pushes compressors harder than coastal areas. Homes in San Marin and Indian Valley regularly reach 95°F+ in summer, causing refrigerators to work overtime. We diagnose compressor strain, thermostat drift, and condenser fan failures specific to high-heat conditions.' },
    { title: 'Washer Drainage Problems', description: 'Drainage issues in Novato homes, especially in Bel Marin Keys and Hamilton areas where older plumbing infrastructure can restrict water flow. Hamilton\'s converted military housing often has original drain lines that weren\'t designed for modern high-efficiency washers. We diagnose pump failures, drain restrictions, and plumbing compatibility issues.' },
    { title: 'Dryer No Heat', description: 'Heating element failures common in Novato\'s residential neighborhoods. Lint buildup in long vent runs accelerates element wear.' },
    { title: 'Dishwasher Not Cleaning', description: 'Hard water affects dishwasher performance throughout Novato. Mineral deposits clog spray arms and reduce cleaning effectiveness in Bosch, Miele, and standard brands.' },
    { title: 'Oven Temperature Issues', description: 'Thermostat and sensor failures in ovens across Novato\'s housing stock, from older ranch homes to newer developments.' },
    { title: 'Ice Maker Failures', description: 'Water line issues and valve failures cause ice maker problems in Novato refrigerators, especially in homes with older supply lines.' },
    { title: 'Gas Range Problems', description: 'Igniter failures in gas ranges throughout Novato. We carry common igniters for Whirlpool, GE, Samsung, and LG models.' },
    { title: 'Cooktop Element Burnout', description: 'Electric cooktop elements fail in Novato homes, particularly in Hamilton\'s converted units with original wiring.' }
  ];

  const faqData = [
    { question: 'Do you serve all Novato neighborhoods?', answer: 'Yes! We serve downtown Novato, Bel Marin Keys, Hamilton, Ignacio, San Marin, Indian Valley, Atherton Avenue, Black Point, and all other Novato areas with fast scheduling.' },
    { question: 'What\'s your response time to Novato?', answer: 'We offer same- or next-day appointments throughout Novato. We access Novato via Highway 101 and serve all areas from Hamilton in the south to Black Point in the north.' },
    { question: 'Are you licensed in Marin County?', answer: 'Yes. FixitBay LLC holds CA License #51001 and is fully insured for appliance repair throughout Novato and all of Marin County.' },
    { question: 'What brands do you repair?', answer: 'We repair all major brands including Whirlpool, GE, Samsung, LG, Bosch, KitchenAid, Maytag, Kenmore, Frigidaire, Sub-Zero, Wolf, Thermador, Miele, and Viking.' },
    { question: 'Do you offer warranties?', answer: 'Yes. Every repair includes a 180-day parts and labor warranty. If the same issue returns within 180 days, we come back at no charge.' },
    { question: 'Do you serve Hamilton and Bel Marin Keys?', answer: 'Yes. We regularly service both Hamilton Landing\'s converted military housing and Bel Marin Keys waterfront homes. We understand the unique appliance challenges in each area — from Hamilton\'s original utility connections to Bel Marin Keys\' salt air corrosion issues.' },
    { question: 'What is your response time to North Novato?', answer: 'We provide same- or next-day service to all of North Novato including Atherton Avenue, Indian Valley, and Black Point. Our technician accesses North Novato via Highway 101 and Atherton Avenue. Most scheduled appointments arrive within the confirmed window.' },
    { question: 'Do you repair older appliances (10+ years)?', answer: 'Yes. Many Novato homes have appliances from the 2005-2015 range — Whirlpool, Kenmore, and Maytag units that are absolutely worth repairing rather than replacing. We carry common parts for these brands and resolve most calls in a single visit. We\'ll always give you an honest assessment of whether repair or replacement makes more sense.' },
    { question: 'Do you offer commercial appliance repair in Novato?', answer: 'Yes. We provide commercial appliance repair in Novato with a $100 diagnostic fee (credited toward repair). We service restaurants, cafes, and businesses along Novato Boulevard and throughout the city.' },
  ];

  const serviceDescription = {
    title: 'Novato Appliance Repair — North Marin\'s Largest City',
    paragraphs: [
      'Novato, as North Marin\'s largest city, offers diverse appliance service needs from downtown to suburban neighborhoods. Our technicians serve all Novato areas including Bel Marin Keys, Hamilton, San Marin, and Ignacio. We navigate Novato\'s geography efficiently, providing fast response throughout this sprawling North Bay community.',
      'We understand Novato\'s housing stock from older homes near downtown to newer developments in the hills. Our vans carry parts for common appliance failures, and we can source specialized components quickly from our Bay Area network.',
      'Novato is Marin County\'s largest and most diverse city. Hamilton Landing\'s converted military housing, Bel Marin Keys\' waterfront homes, and Black Point\'s rural properties all have different appliance challenges. Hamilton\'s converted units often have original utility connections that restrict modern appliance installations — our technician assesses code compliance and vent routing before every installation. Bel Marin Keys waterfront homes face accelerated corrosion from salt air — refrigerator coils and washing machine components corrode faster than inland. We recommend annual maintenance for appliances in waterfront properties. Northern Novato and Atherton Avenue homes tend to have older appliance fleets — Whirlpool, Kenmore, and Maytag from the 2005-2015 range that are worth repairing rather than replacing. We carry common parts for these brands and resolve most calls in a single visit.',
      'Fast scheduling is available in Novato with a $80 diagnostic fee credited toward repairs. We provide transparent estimates and back every repair with a 180-day warranty. Our licensed technicians service all major brands.'
    ]
  };

  return (
    <div style={{ paddingTop: 0 }}>
      <ApplianceRepairPageNew
        appliance="Appliance Repair"
        pageTitle="Appliance Repair Novato | Fast Scheduling | FixitBay LLC"
        metaDescription="Professional appliance repair in Novato. Fast, reliable service throughout North Marin. Licensed technicians, 180-day warranty. Call (760) 543-5733."
        commonProblems={commonProblems}
        faqData={faqData}
        serviceDescription={serviceDescription}
        breadcrumbCategoryName="Service Areas"
        breadcrumbCategoryHref="/service-areas"
        relatedServicesCategory="Kitchen"
        relatedServicesSubtitle="North Marin appliance experts"
        cityName="Novato"
      >
      </ApplianceRepairPageNew>

      {/* Novato Maintenance Tips Section */}
      <section style={{ background: C.cream, padding: '56px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <span style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.2px', marginBottom: 12, display: 'block', fontFamily: F }}>MAINTENANCE TIPS</span>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.navy, lineHeight: '33.6px', marginBottom: 16, fontFamily: F }}>Novato Appliance Maintenance Tips</h2>
          <p style={{ fontSize: 16, lineHeight: '24px', color: C.textMid, fontFamily: F, marginBottom: 24 }}>Living in North Marin means your appliances face unique challenges depending on your neighborhood.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: 'Waterfront Corrosion Prevention (Bel Marin Keys)', description: 'Salt air from the San Pablo Bay accelerates corrosion on refrigerator condenser coils, washing machine components, and metal dryer parts. Clean condenser coils every 4-6 months in waterfront homes (vs. annually for inland). Inspect washing machine hoses for corrosion damage every 6 months — a burst hose in a waterfront home can cause significant water damage.' },
              { title: 'Hard Water Management (Inland Novato)', description: 'Inland Novato neighborhoods — San Marin, Indian Valley, Atherton Avenue — have higher mineral content in water. Run a dishwasher cleaning cycle with citric acid monthly. Clean washing machine gaskets and dispensers every 2 months to prevent mineral buildup. Hard water reduces appliance efficiency and shortens lifespan if not managed.' },
              { title: 'Rural Property Challenges (Black Point & North Novato)', description: 'Rural Novato properties often have well water, older electrical panels, and longer distances from service. Well water requires more frequent filter changes in refrigerators and ice makers. We recommend annual appliance checkups for rural properties where appliance failure can mean a longer wait for service.' },
              { title: 'Dryer Vent Safety for All Novato Homes', description: 'Novato\'s dry summer heat combined with dryer lint buildup creates a fire risk. Cal Fire recommends annual dryer vent cleaning for all Marin County homes. We offer standalone vent cleaning and inspection — especially important for homes with long vent runs through walls or attics.' },
            ].map((tip, i) => (
              <div key={i} style={{ padding: '16px 20px', background: C.white, borderRadius: 8, borderLeft: `3px solid ${C.accent}` }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 6, fontFamily: F }}>{tip.title}</h3>
                <p style={{ fontSize: 14, color: C.textMid, lineHeight: '22px', fontFamily: F }}>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Novato;
