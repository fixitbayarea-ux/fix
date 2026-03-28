import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const F = "'Montserrat', sans-serif";
const PHONE_DISPLAY = '(760) 543-5733';

const commonProblems = [
  { title: 'Convection Oven Not Heating Evenly', description: 'Convection fan motor failures, element burnout, or baffle damage causing hot spots and cold zones in commercial convection ovens. Critical for bakeries and restaurants that depend on consistent baking results.' },
  { title: 'Pizza Oven Temperature Issues', description: 'Deck pizza ovens not reaching or maintaining target temperature (typically 500-700°F). Gas burner clogs, thermostat drift, or insulation degradation affecting pizza quality in San Francisco pizzerias.' },
  { title: 'Combi Oven Steam Generator Problems', description: 'Steam generator scale buildup, heating element failure, or water supply issues in combi ovens. Scale from San Francisco\'s mineral-rich water supply is the leading cause of combi oven failures.' },
  { title: 'Gas Burner Ignition Failures', description: 'Commercial gas ovens and ranges failing to ignite. Pilot light going out, electronic igniters cracking, or gas valve solenoids failing in high-use restaurant environments.' },
  { title: 'Digital Control Panel Errors', description: 'Modern commercial ovens displaying error codes, touchscreen becoming unresponsive, or programmed cooking profiles lost due to control board failures or power surge damage.' },
  { title: 'Door Seal and Hinge Failures', description: 'Oven door gaskets degrading from thousands of heating cycles, allowing heat loss. Broken hinges, worn springs, or latch failures on commercial ovens and ranges requiring heavy-duty replacements.' },
  { title: 'Range Hood and Exhaust Issues', description: 'Kitchen range hoods with failed fan motors, worn belts, or grease-clogged filters reducing ventilation. Proper exhaust is required by San Francisco fire code for all commercial cooking equipment.' },
  { title: 'Conveyor Oven Belt Problems', description: 'Conveyor ovens with belt tracking issues, belt tears, or speed control failures affecting cook time and food quality in high-volume restaurant and catering operations.' },
];

const faqData = [
  { question: 'Do you repair all types of commercial ovens?', answer: 'Yes. We service convection ovens, deck ovens, conveyor ovens, combi ovens, pizza ovens, commercial ranges, griddles, charbroilers, and salamanders. We work with restaurants, bakeries, pizzerias, hotels, hospitals, and catering companies throughout San Francisco, the Peninsula, and Marin County.' },
  { question: 'What commercial oven brands do you repair?', answer: 'We repair Vulcan, Blodgett, Hobart, Garland, Southbend, Wolf Commercial, Viking Professional, Rational, Alto-Shaam, Bakers Pride, Middleby Marshall, Lincoln, TurboChef, and all other major commercial cooking equipment brands.' },
  { question: 'Can you repair combi ovens?', answer: 'Yes. Combi ovens are among the most complex commercial cooking equipment. We service the steam generator, heating elements, fan motors, water supply systems, control boards, and descaling systems on Rational, Alto-Shaam, Electrolux Professional, and other combi oven brands.' },
  { question: 'Do you service commercial range hoods?', answer: 'Yes. We repair range hood fan motors, replace belts, clean grease filters, and verify proper exhaust airflow. Proper kitchen ventilation is a San Francisco fire code requirement and critical for staff safety and comfort.' },
  { question: 'How much does commercial oven repair cost?', answer: 'Our $100 diagnostic fee is credited toward your repair. Most common oven repairs range from $200-$600. Combi oven steam generator and control board replacements can be higher. We always provide a written estimate before starting work.' },
  { question: 'Is there a warranty on commercial oven repairs?', answer: 'Yes. All commercial oven and range repairs include our 180-day warranty on parts and labor.' },
];

const serviceDescription = {
  title: 'Commercial Oven Repair — Convection, Pizza, Combi & Range',
  paragraphs: [
    <>A broken commercial oven can shut down a restaurant kitchen in minutes. Bakeries can't bake, pizzerias can't make pizza, and hotels fall behind on banquet service. FixitBay LLC provides <strong>emergency commercial oven repair</strong> for every type of commercial cooking equipment in San Francisco, the Peninsula, and Marin County.</>,
    <>Our licensed technician has hands-on experience with convection ovens, deck ovens, pizza ovens, combi ovens, conveyor ovens, commercial ranges, and related cooking equipment from all major manufacturers. We test thermostats, calibrate temperature controls, inspect gas burners and igniters, check heating elements, and evaluate fan motors and convection systems. The <strong>$100 diagnostic fee</strong> is credited toward your repair.</>,
    <>From a Rational combi oven with a failed steam generator to a Bakers Pride pizza deck that won't hold temperature, we handle the full spectrum of commercial cooking equipment repair. Every job includes our <strong>180-day warranty on parts and labor</strong>.</>,
  ],
};

const UniqueContent = () => (
  <>
    {/* ── Commercial Oven Types We Service ── */}
    <section style={{ background: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>EQUIPMENT TYPES</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Commercial Oven Types We Repair</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 24 }}>
          San Francisco's diverse restaurant scene — from Michelin-starred kitchens in Nob Hill to neighborhood pizzerias in the Mission — uses every type of commercial cooking equipment. Our technician understands the engineering differences between each oven type and brings the right diagnostic approach and parts for efficient repair.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, marginBottom: 24 }}>
          {[
            { type: 'Convection Ovens', desc: 'Full-size and half-size convection ovens from Blodgett, Vulcan, and Garland. Fan-forced hot air circulation for even baking. Common issues: fan motor bearings, heating elements, thermostat calibration, and door gaskets. Used in nearly every San Francisco restaurant kitchen.' },
            { type: 'Pizza Ovens (Deck)', desc: 'Gas and electric deck ovens from Bakers Pride, Blodgett, and Marsal. Stone or steel decks that reach 500-700°F for artisan-style pizza. Common issues: burner clogs, thermostat drift, cracked decks, and insulation degradation.' },
            { type: 'Combi Ovens', desc: 'Combined steam and convection ovens from Rational, Alto-Shaam, and Electrolux Professional. The most versatile and complex commercial oven type. Common issues: steam generator scale buildup (especially with San Francisco water), control board failures, and fan motor problems.' },
            { type: 'Conveyor Ovens', desc: 'Belt-driven ovens from Middleby Marshall, Lincoln, and TurboChef for high-volume operations. Common issues: belt tracking, heating element zones, speed controller failures, and conveyor motor problems.' },
            { type: 'Commercial Ranges', desc: 'Gas and electric ranges with 4-12 burners plus ovens from Vulcan, Garland, and Wolf. The backbone of every commercial kitchen. Common issues: burner igniters, gas valves, oven thermostats, and range top regulator failures.' },
            { type: 'Range Hoods & Exhaust', desc: 'Kitchen ventilation systems including hood fans, make-up air units, and grease filtration. San Francisco fire code requires proper exhaust for all commercial cooking. Common issues: fan motor failure, belt wear, grease filter saturation, and airflow imbalance.' },
          ].map(t => (
            <div key={t.type} style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '20px 24px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 8 }}>{t.type}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Combi Oven Specialized Repair ── */}
    <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>SPECIALIZED SERVICE</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Combi Oven & Pizza Oven Specialized Repair</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
          Combi ovens and pizza ovens represent significant investments — a Rational combi oven costs $15,000-$40,000+, and a quality deck pizza oven runs $5,000-$20,000. These are not appliances you want repaired by a generalist. Our technician has specific training and experience with these high-value cooking systems.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { title: 'Combi Oven Steam Generator Descaling & Repair', detail: 'San Francisco water has moderate mineral content that causes scale buildup in combi oven steam generators over time. Scale reduces heating efficiency, causes temperature inaccuracy, and eventually blocks water flow entirely. We descale steam generators, replace calcified heating elements, repair water treatment systems, and advise on water filtration to prevent recurrence.' },
            { title: 'Pizza Oven Deck & Temperature Calibration', detail: 'Artisan pizza requires precise, consistent deck temperatures. We calibrate thermostats using professional infrared thermometers, test temperature recovery time (how quickly the oven returns to set temperature after loading), and repair gas burners, igniters, and insulation to ensure consistent performance for San Francisco pizzerias.' },
            { title: 'Conveyor Oven Belt & Zone Repair', detail: 'Conveyor pizza ovens and toasting ovens require precise belt speed and even heat distribution across multiple heating zones. We diagnose zone heating failures, calibrate belt speed controllers, replace worn belts, and repair conveyor motors to restore consistent throughput.' },
          ].map(item => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Brands We Service ── */}
    <section style={{ background: '#0D1B2A', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>BRANDS</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#FFFFFF', marginBottom: 24, lineHeight: 1.2 }}>Commercial Oven Brands We Service</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { name: 'Vulcan', desc: 'Convection, ranges, griddles, charbroilers' },
            { name: 'Blodgett', desc: 'Convection ovens, deck ovens, pizza ovens' },
            { name: 'Rational', desc: 'Combi ovens, SelfCookingCenter series' },
            { name: 'Alto-Shaam', desc: 'Combi ovens, cook & hold, smokers' },
            { name: 'Bakers Pride', desc: 'Pizza deck ovens, countertop ovens' },
            { name: 'Garland', desc: 'Ranges, convection ovens, griddles' },
            { name: 'Southbend', desc: 'Ranges, convection ovens, steamers' },
            { name: 'Middleby Marshall', desc: 'Conveyor ovens for high-volume' },
          ].map(b => (
            <div key={b.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '16px 20px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#FF5722', marginBottom: 4 }}>{b.name}</div>
              <div style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.60)' }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const DesktopPage = () => (
  <ApplianceRepairPageNew
    appliance="Commercial Oven"
    pageTitle="Commercial Oven Repair – Convection, Pizza, Combi Ovens & Range Hoods"
    metaDescription="Commercial oven repair in San Francisco, Peninsula & Marin County. Convection, pizza, combi ovens, commercial ranges. Fast scheduling, $100 diagnostic, 180-day warranty. Vulcan, Blodgett, Rational, Bakers Pride."
    commonProblems={commonProblems}
    faqData={faqData}
    relatedServicesCategory="Commercial"
    relatedServicesSubtitle="Expert repair for commercial appliances"
    serviceDescription={serviceDescription}
  >
    <UniqueContent />
  </ApplianceRepairPageNew>
);

const mobileIssues = [
  { icon: '🌡️', label: 'Temperature' },
  { icon: '🔥', label: 'No Ignition' },
  { icon: '💨', label: 'Convection Fan' },
  { icon: '🚪', label: 'Door Seals' },
  { icon: '⚠️', label: 'Error Codes' },
  { icon: '🔌', label: 'Heating Element' },
];

const mobileFaqs = [
  { q: 'Do you repair all types of commercial ovens?', a: 'Yes — convection, deck, pizza, combi, conveyor ovens, commercial ranges, griddles, and range hoods.' },
  { q: 'How fast can you respond?', a: 'Same- or next-day priority service for commercial kitchen equipment.' },
  { q: 'What brands do you repair?', a: 'Vulcan, Blodgett, Rational, Alto-Shaam, Bakers Pride, Garland, and all major commercial oven brands.' },
  { q: 'Is there a warranty?', a: '180-day warranty on parts and labor for all commercial oven repairs.' },
];

const mobileBrands = [
  { name: 'Viking', href: '/viking-appliance-repair', logo: '/images/brands/viking.svg', h: 38 },
  { name: 'Thermador', href: '/thermador-appliance-repair', logo: '/images/brands/thermador.svg', h: 38 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'LG', href: '/lg-appliance-repair', logo: '/images/brands/lg.svg', h: 38 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
  { name: 'KitchenAid', href: '/kitchenaid-appliance-repair', logo: '/images/brands/kitchenaid.svg', h: 24 },
];

const MobilePage = () => (
  <MobileServiceLanding
    appliance="Commercial Oven"
    pageSlug="commercial-oven-repair"
    pageTitle="Commercial Oven Repair – Restaurant & Bakery Equipment"
    metaDescription="Commercial oven repair in San Francisco & Bay Area. Convection, deck, combi ovens. Fast scheduling, 180-day warranty."
    heroTitle={<>Commercial Oven<br />Repair — Bay Area.</>}
    heroSubtitle="Priority Service for Restaurants & Bakeries"
    issues={mobileIssues}
    faqs={mobileFaqs}
    brands={mobileBrands}
    schemaData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Oven Repair",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": PHONE_DISPLAY },
    }}
  />
);

const CommercialOvenRepairPage = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobilePage /> : <DesktopPage />;
};

export default CommercialOvenRepairPage;
