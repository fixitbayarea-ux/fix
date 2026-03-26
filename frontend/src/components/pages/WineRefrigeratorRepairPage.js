import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const WineRefrigeratorRepairPage = () => {
  const isMobile = useIsMobile();
  const commonProblems = [
    {
      title: "Temperature Fluctuations",
      description: "Inconsistent temperatures can damage wine. We repair faulty thermostats, sensors, and cooling systems."
    },
    {
      title: "Humidity Control Issues",
      description: "Wrong humidity levels affect cork integrity. We fix humidity controls and ventilation systems."
    },
    {
      title: "Vibration Problems",
      description: "Excessive vibrations disturb wine sediment. We repair or replace faulty compressors and mounting systems."
    },
    {
      title: "Door Seal and Gasket Issues",
      description: "Poor sealing compromises temperature and humidity. We replace door gaskets to maintain optimal storage."
    },
    {
      title: "Compressor Not Working",
      description: "Failed compressors stop cooling entirely. We diagnose and repair or replace compressor units."
    },
    {
      title: "Interior Light Problems",
      description: "UV-filtered lighting is crucial for wine storage. We repair lighting systems that won't turn on or stay on."
    }
  ];

  const faqData = [
    {
      question: "Do you repair all wine refrigerator and cooler brands?",
      answer: "Yes! We service all major wine refrigerator brands—Sub-Zero, Vintec, EuroCave, Wine Enthusiast, NewAir, Kalamera, Phiestina, EdgeStar, and more. Our technicians are trained on single-zone, dual-zone, and multi-zone wine coolers with separate temperature controls for red and white wines. We stock thermostats, door gaskets, and compressor parts for same-day repairs."
    },
    {
      question: "How quickly can you repair a wine refrigerator that's warming up?",
      answer: "We understand wine storage is time-critical to protect your collection from spoilage. We offer same-day emergency service across the Bay Area — SF, Peninsula, and Marin County. Most wine cooler repairs (thermostat, compressor, door seal) take 1-2 hours. Call us immediately to prevent wine damage from temperature fluctuations."
    },
    {
      question: "Can you repair built-in and freestanding wine refrigerators?",
      answer: "Absolutely! We service both freestanding wine coolers and built-in under-counter wine refrigerators. Our technicians understand custom cabinetry clearances, front-ventilation requirements, and proper spacing for built-in units. Whether your wine fridge is in the kitchen, wine cellar, or bar area, we'll repair it correctly."
    },
    {
      question: "Why is the temperature in my dual-zone wine cooler uneven?",
      answer: "Dual-zone wine coolers have separate cooling systems or dampers for each zone. Uneven temperatures are caused by faulty zone thermostats, broken damper controls, or failing fan motors. Our technicians diagnose which zone's components are malfunctioning and replace the thermostat, damper actuator, or fan to restore proper red wine (55-65°F) and white wine (45-55°F) zones."
    },
    {
      question: "Do you offer preventive maintenance for wine refrigerators?",
      answer: "Yes! Regular maintenance extends lifespan and prevents costly repairs that could damage your wine collection. Our maintenance service includes cleaning condenser coils, calibrating temperature controls, inspecting door gaskets for air leaks, checking UV lighting, and testing humidity sensors. Schedule annual maintenance to keep your wine cooler in optimal condition."
    }
  ];


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wine Cooler Repair Bay Area",
    "serviceType": "Wine Cooler Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "FixitBay LLC",
      "telephone": "+17605435733",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1549 Franklin St, Unit A",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94109"
      }
    },
    "areaServed": [
      "San Francisco", "Daly City", "South San Francisco", "San Bruno",
      "Pacifica", "Millbrae", "Colma", "Brisbane", "Montara",
      "Mill Valley", "San Rafael", "Sausalito", "Belvedere", "Tiburon",
      "Corte Madera", "San Quentin", "Larkspur", "Greenbrae", "Ross",
      "Fairfax", "San Anselmo", "Novato"
    ],
    "priceRange": "From $195"
  };

  if (isMobile) {
    return (
      <MobileServiceLanding
        appliance="Wine Cooler"
        pageSlug="wine-refrigerator-repair"
        pageTitle="Wine Cooler Repair San Francisco | Same-Day | FixitBay LLC"
        metaDescription="Specialized wine refrigerator repair across the Bay Area. Temperature, humidity, compressor issues. Same-day service. 180-day warranty."
        heroTitle={<>Wine Cooler Repair<br />Bay Area. Same Day.</>}
        heroImageAlt="wine cooler repair Bay Area"
        heroDescription="FixitBay LLC repairs all types of wine coolers and wine refrigerators across the Bay Area — thermoelectric units, compressor-based systems, dual-zone wine fridges, and built-in wine refrigerators. Same-day service, from $195 after $60 diagnostic."
       
        issues={[
          { icon: '🌡️', label: 'Temp Wrong' },
          { icon: '🔊', label: 'Loud Noise' },
          { icon: '💧', label: 'Leaking' },
          { icon: '❄️', label: 'Over Cooling' },
          { icon: '⚡', label: 'Won\'t Start' },
          { icon: '💡', label: 'Light Out' },
        ]}
        faqs={faqData}
        repairVsReplace={{
          title: "Repair vs. Replace Your Wine Cooler",
          intro: "Wine coolers protect an investment — your wine collection.",
          items: [
            { action: 'repair', condition: 'Temperature fluctuating but compressor runs', recommendation: 'Faulty thermostat or sensor costs $150–$250 to replace.' },
            { action: 'repair', condition: 'Door seal worn or not closing properly', recommendation: 'New gasket $80–$150 installed — restores seal and humidity.' },
            { action: 'replace', condition: 'Compressor failure on thermoelectric cooler', recommendation: 'Compact thermoelectric units ($200–$500 new). Repair may cost as much.' },
            { action: 'repair', condition: 'Compressor failure on premium built-in', recommendation: 'High-end units cost $2,000–$8,000+. Compressor repair ($400–$800) is worth it.' },
          ]
        }}
        relatedLinks={[
          { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling or temperature issues' },
          { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice or leaking' },
        ]}
        schemaData={serviceSchema}
      />
    );
  }

  return (
      <ApplianceRepairPageNew
      serviceSchema={serviceSchema}
      appliance="Wine Cooler"
      heroImageAlt="wine cooler repair Bay Area"
      heroDescription="FixitBay LLC repairs all types of wine coolers and wine refrigerators across the Bay Area — thermoelectric units, compressor-based systems, dual-zone wine fridges, and built-in wine refrigerators. Same-day service, from $195 after $60 diagnostic."
      cmsSlug="wine-cooler-repair"
      pageTitle="Wine Cooler Repair San Francisco | Same-Day | FixitBay LLC"
      metaDescription="Specialized wine refrigerator repair across the Bay Area. Temperature, humidity, compressor issues. Same-day service. 180-day warranty."
      commonProblems={commonProblems}
      faqData={faqData}
      serviceDescription={{
        title: "Specialized Wine Cooler Repair Service",
        paragraphs: [
          <>Wine refrigerators require precise temperature and humidity control to protect valuable wine collections. Our technicians specialize in diagnosing single-zone, dual-zone, and built-in wine coolers. We identify thermostat failures, compressor issues, humidity control problems, and vibration concerns. We charge a <strong>$60 diagnostic fee</strong> (waived with repair) and respond urgently to prevent wine damage from temperature fluctuations.</>,
          <>Our wine cooler repair process includes calibrating temperature controls, testing compressor performance, checking humidity sensors, inspecting door gaskets for proper sealing, and examining UV-filtered lighting systems. We understand the critical importance of maintaining optimal red wine (55-65°F) and white wine (45-55°F) storage temperatures. Most wine refrigerator repairs are completed same-day to minimize risk to your collection.</>,
          <>Whether your wine cooler has inconsistent temperatures, excessive vibration, or humidity problems, we'll restore proper function. We service all wine refrigerator brands including Sub-Zero, Vintec, EuroCave, Wine Enthusiast, and NewAir. Every wine cooler repair includes our <strong>180-day warranty</strong> on parts and labor, protecting your investment.</>,
          <><strong>Looking for wine cooler repair specifically in San Francisco?</strong> Visit our <a href="/san-francisco-wine-cooler-repair" style={{color: '#C0362C', fontWeight: 'bold'}}>San Francisco Wine Cooler Repair</a> page for local details and availability.</>
        ]
      }}
      repairVsReplace={{
        title: "When to Repair vs. Replace Your Wine Cooler",
        intro: "Wine coolers protect an investment — your wine collection. Here's how to make the right call.",
        items: [
          { action: 'repair', condition: 'Temperature fluctuating but compressor runs', recommendation: 'A faulty thermostat or temperature sensor ($150–$250 to replace) is the most common cause. Your compressor and cooling system are likely fine.' },
          { action: 'repair', condition: 'Door seal worn or not closing properly', recommendation: 'A new gasket ($80–$150 installed) restores the seal, maintains humidity, and prevents the compressor from overworking.' },
          { action: 'replace', condition: 'Compressor failure on a thermoelectric wine cooler', recommendation: 'Thermoelectric coolers are compact and affordable ($200–$500 new). Compressor repair may cost nearly as much as a replacement unit.' },
          { action: 'repair', condition: 'Compressor failure on a premium built-in unit (Sub-Zero, EuroCave)', recommendation: 'High-end wine refrigerators cost $2,000–$8,000+ new. Compressor replacement ($400–$800) is almost always worth it to protect a premium unit and your wine collection.' },
        ]
      }}
      relatedLinks={[
        { href: '/refrigerator-repair', label: 'Refrigerator Repair', desc: 'Not cooling, leaking, or temperature issues' },
        { href: '/ice-maker-repair', label: 'Ice Maker Repair', desc: 'No ice, leaking, or jammed dispenser' },
        { href: '/freezer-repair', label: 'Freezer Repair', desc: 'Not freezing, frost buildup, or temp problems' },
      ]}
    >
      {/* ═══ ENHANCEMENT 1: SF-specific climate section ═══ */}
      <section style={{ background: '#FAFAF7', padding: '48px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#1A3B5D', marginBottom: 20 }}>Wine Cooler Repair for the Bay Area's Unique Climate</h2>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, lineHeight: 1.75, color: '#4A5568' }}>
            <p style={{ marginBottom: 16 }}>The Bay Area's coastal microclimate — fog, salt air, and humidity swings between 50–95% — creates specific challenges for wine coolers. Door seals degrade faster in coastal neighborhoods and any home within a mile of the ocean. Thermoelectric units struggle when kitchen ambient temperatures spike above 80°F during summer months in the Peninsula and beyond.</p>
            <p style={{ marginBottom: 16 }}>Our technician Andrei has repaired wine coolers in Victorian flats in the Mission, high-rise condos in SoMa, penthouse kitchens in Pacific Heights, and estate wine cellars in Ross and Tiburon. We understand that a built-in undercounter unit in a San Francisco kitchen has different ventilation needs than a freestanding cooler in a Marin County garage.</p>
            <p>When your cooler drifts more than 5°F from setpoint, your wine collection is at risk. We diagnose and fix the root cause — not just reset the thermostat.</p>
          </div>
        </div>
      </section>

      {/* ═══ ENHANCEMENT 2: Types of wine coolers ═══ */}
      <section style={{ background: '#FFFFFF', padding: '48px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#1A3B5D', marginBottom: 28, textAlign: 'center' }}>Types of Wine Coolers We Repair</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { title: 'Thermoelectric', desc: 'Silent operation, ideal for apartments. Struggles above 80°F ambient — common in summer months across the Bay Area.' },
              { title: 'Compressor-Based', desc: 'Powerful cooling, handles Bay Area fog climate. Best for larger collections and consistent temperature control.' },
              { title: 'Dual-Zone', desc: 'Popular in Marin County and Peninsula homes. Separate temps for reds (55–65°F) and whites (45–55°F).' },
              { title: 'Built-In Undercounter', desc: 'Common in Pacific Heights, Nob Hill, SoMa renovations. Requires precise ventilation clearance.' },
            ].map(t => (
              <div key={t.title} style={{ border: '1px solid #E5E2DD', borderRadius: 8, padding: 24, background: '#FAFAF7' }}>
                <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 16, fontWeight: 700, color: '#1A3B5D', marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, lineHeight: 1.65, color: '#4A5568', margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENHANCEMENT 3: Expanded brands ═══ */}
      <section style={{ background: '#FAFAF7', padding: '48px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#1A3B5D', marginBottom: 20, textAlign: 'center' }}>Wine Cooler Brands We Repair</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {['Sub-Zero', 'Vinotemp', 'EuroCave', 'Wine Enthusiast', 'NewAir', 'Whynter', 'EdgeStar', 'Marvel', 'Liebherr', 'Kalamera', 'hOmelabs', 'Thermador', 'U-Line', 'KitchenAid', 'Frigidaire', 'Bosch', 'GE Monogram'].map(b => (
              <span key={b} style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, padding: '8px 16px', borderRadius: 6, background: '#FFFFFF', border: '1px solid #E5E2DD', color: '#1A3B5D' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENHANCEMENT 4: Wine temperature guide ═══ */}
      <section style={{ background: '#FFF9F0', padding: '48px 40px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#1A3B5D', marginBottom: 24, textAlign: 'center' }}>Optimal Wine Storage Temperatures</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
            {[
              { type: 'Red Wine', temp: '55–65°F', metric: '13–18°C', color: '#8B2252' },
              { type: 'White Wine', temp: '45–55°F', metric: '7–13°C', color: '#C9A830' },
              { type: 'Sparkling', temp: '40–50°F', metric: '4–10°C', color: '#4A7C59' },
              { type: 'Rosé', temp: '48–55°F', metric: '9–13°C', color: '#D4758B' },
            ].map(w => (
              <div key={w.type} style={{ background: '#FFFFFF', border: '1px solid #E5E2DD', borderRadius: 8, padding: 20, textAlign: 'center' }}>
                <div style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, fontWeight: 700, color: w.color, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{w.type}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 22, fontWeight: 800, color: '#1A3B5D' }}>{w.temp}</div>
                <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#718096', marginTop: 4 }}>{w.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENHANCEMENT 5: Andrei's Note (E-E-A-T) ═══ */}
      <section style={{ background: '#FFFFFF', padding: '48px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '1.3rem', fontWeight: 800, color: '#1A3B5D', marginBottom: 20 }}>From the Field</h2>
          <blockquote style={{ borderLeft: '4px solid #FF5722', padding: '20px 24px', margin: 0, background: '#FAFAF7', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, lineHeight: 1.75, color: '#4A5568', fontStyle: 'italic', margin: '0 0 16px 0' }}>"Last month in Pacific Heights, a customer's Sub-Zero wine unit was cycling on/off every 3 minutes — a classic compressor overload symptom worsened by a blocked condenser coil. The unit sat in a tight undercounter cavity with only 1 inch of ventilation clearance instead of the required 3 inches. We cleaned the condenser, improved the airflow, and the unit has been running perfectly since. Same-day fix, 180-day warranty."</p>
            <footer style={{ fontFamily: 'Montserrat,sans-serif', fontSize: 14, fontWeight: 700, color: '#1A3B5D' }}>— Andrei, Lead Appliance Technician, FixitBay LLC</footer>
          </blockquote>
        </div>
      </section>

      {/* ═══ ENHANCEMENT 6: Orphan page links ═══ */}
      <section style={{ background: '#FAFAF7', padding: '36px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#1A3B5D', marginBottom: 16 }}>Related Resources</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <a href="/blog/same-day-appliance-repair-bay-area" style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, color: '#C0362C', textDecoration: 'none' }}>Same-Day Repair Guide &rarr;</a>
            <a href="/marin-county-appliance-repair" style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, color: '#C0362C', textDecoration: 'none' }}>Marin County Appliance Repair &rarr;</a>
            <a href="/blog/appliance-repair-marin-county" style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, fontWeight: 600, color: '#C0362C', textDecoration: 'none' }}>Appliance Repair in Marin County &rarr;</a>
          </div>
        </div>
      </section>
    </ApplianceRepairPageNew>

  );
};

export default WineRefrigeratorRepairPage;
