import React from 'react';
import ApplianceRepairPageNew from '../templates/ApplianceRepairPageNew';
import MobileServiceLanding from '../templates/MobileServiceLanding';
import { useIsMobile } from '../../hooks/useIsMobile';

const F = "'Montserrat', sans-serif";
const PHONE_DISPLAY = '(760) 543-5733';

const commonProblems = [
  { title: 'Not Heating — Gas Dryers', description: 'Gas commercial dryers producing no heat despite the drum turning. Common causes include failed gas valve solenoids (the #1 issue in laundromat gas dryers), worn igniters, or defective flame sensors that prevent gas ignition.' },
  { title: 'Not Heating — Electric Dryers', description: 'Electric commercial dryers running cold. Heating element burnout, high-limit thermostat trips, or broken thermal fuses cutting power to the heating circuit. Electric stack dryers in apartment buildings are particularly prone to element failures.' },
  { title: 'Taking Too Long to Dry', description: 'Commercial dryers running 2-3 cycles to dry a single load. In laundromats, this is the most common customer complaint. Restricted exhaust venting is the primary cause, followed by worn drum seals allowing cold air infiltration.' },
  { title: 'Stack Dryer Alignment Issues', description: 'Double-stack and triple-stack dryer configurations developing alignment problems, vibration, or structural looseness that creates noise and safety concerns in laundromat and multi-family installations.' },
  { title: 'Drum Not Turning', description: 'Broken drive belts, seized drum bearings, or failed drive motors preventing the drum from rotating. In high-use commercial environments, belts typically last 3-5 years before needing replacement.' },
  { title: 'Venting System Problems', description: 'Inadequate exhaust venting causing lint buildup, moisture retention, and fire risk. San Francisco building codes require specific commercial dryer venting standards that many older installations don\'t meet.' },
  { title: 'Coin-Op or Card Payment Failures', description: 'Coin slides jamming, card readers failing to process payment, or app-connected systems losing connectivity — directly impacting laundromat and multi-family dryer revenue.' },
  { title: 'Overheating and Safety Shutoffs', description: 'Commercial dryers tripping high-limit thermostats, thermal fuses blowing, or cycling thermostats failing — causing either overheating or premature shutoff. Both are fire safety concerns.' },
];

const faqData = [
  { question: 'Do you repair both gas and electric commercial dryers?', answer: 'Yes. We service gas and electric commercial dryers of all types including single-pocket, double-stack, triple-stack, and large-capacity tumble dryers. Gas dryers are more common in San Francisco laundromats, while electric stack dryers dominate multi-family residential buildings.' },
  { question: 'What are the most common commercial dryer issues?', answer: 'In our San Francisco service area, the top three commercial dryer issues are: (1) gas valve solenoid failure causing no heat, (2) restricted exhaust venting causing extended dry times, and (3) worn drum seals allowing cold air infiltration. Together, these account for about 70% of our commercial dryer service calls.' },
  { question: 'What commercial dryer brands do you repair?', answer: 'We repair Speed Queen, Dexter, Maytag Commercial, Huebsch, American Dryer Corporation (ADC), Electrolux Professional, IPSO, UniMac, Wascomat, and Continental Girbau commercial dryers.' },
  { question: 'Can you service commercial dryer venting systems?', answer: 'Yes. We inspect and repair commercial dryer venting, including cleaning lint accumulation, replacing damaged duct sections, ensuring proper termination, and verifying airflow meets manufacturer specifications. Proper venting is critical for dryer performance and fire safety.' },
  { question: 'How quickly can you respond to a laundromat dryer breakdown?', answer: 'We prioritize commercial laundry equipment for same- or next-day or next-day service. In a laundromat, every down dryer means lost revenue and unhappy customers, so we treat these as urgent calls.' },
  { question: 'Is there a warranty on commercial dryer repairs?', answer: 'Yes. All commercial dryer repairs include our 180-day warranty on parts and labor.' },
];

const serviceDescription = {
  title: 'Commercial Dryer Repair — Gas, Electric & Stack Dryers',
  paragraphs: [
    <>A non-heating commercial dryer is one of the most costly breakdowns for laundromat owners. Customers leave, revenue drops, and negative reviews pile up. FixitBay LLC provides <strong>priority commercial dryer repair</strong> for gas and electric dryers in laundromats, hotels, healthcare facilities, and multi-family buildings throughout San Francisco, the Peninsula, and Marin County.</>,
    <>Our licensed technician diagnoses gas valve solenoids, igniters, heating elements, thermostats, drum bearings, belts, motors, and control boards. We carry common parts for Speed Queen and Dexter dryers — the two most popular brands in Bay Area commercial laundry. The <strong>$100 diagnostic fee</strong> is credited toward your repair.</>,
    <>Whether your laundromat gas dryer won't heat, your hotel stack dryer is taking too long, or your apartment building dryer won't start, we'll fix it fast. Every repair includes our <strong>180-day warranty on parts and labor</strong>.</>,
  ],
};

const UniqueContent = () => (
  <>
    {/* ── Gas vs Electric Commercial Dryers ── */}
    <section style={{ background: '#fff', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>DRYER TYPES</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Gas vs Electric Commercial Dryers: Repair Differences</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 24 }}>
          San Francisco laundromats predominantly use gas commercial dryers due to lower operating costs and faster drying times. Multi-family residential buildings, however, often use electric stack dryers where gas lines aren't available. Each type has distinct failure modes and repair requirements that our technician understands from years of hands-on experience.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 24, marginBottom: 24 }}>
          <div style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '24px 28px' }}>
            <div style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#0D1B2A', marginBottom: 12 }}>Gas Commercial Dryers</div>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 }}>
              Gas dryers heat air using a gas burner assembly with igniters, gas valves, and flame sensors. The most common failure is gas valve solenoid coils weakening over time — the dryer ignites initially but loses heat mid-cycle as the coils can't hold the valve open. This progressive failure is unique to gas dryers and accounts for roughly 40% of our laundromat no-heat calls.
            </p>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8 }}>
              Other common gas dryer issues include igniter cracks (the igniter glows but doesn't get hot enough to open the gas valve), flame sensor drift (the sensor doesn't detect the flame quickly enough), and gas supply pressure issues in older San Francisco buildings with aging gas infrastructure.
            </p>
          </div>
          <div style={{ background: '#F8F5F0', border: '1px solid rgba(255,87,34,0.15)', borderRadius: 4, padding: '24px 28px' }}>
            <div style={{ fontFamily: F, fontWeight: 800, fontSize: 18, color: '#0D1B2A', marginBottom: 12 }}>Electric Commercial Dryers</div>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8, marginBottom: 12 }}>
              Electric dryers use resistance heating elements powered by 240V circuits. The heating element is a coiled wire that glows red-hot — it's the most common failure point, especially in stack dryers where the elements cycle thousands of times per year. High-limit thermostats and thermal fuses provide safety protection but can fail prematurely in poorly vented installations.
            </p>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.8 }}>
              Electric stack dryers in San Francisco apartment buildings also commonly develop issues with the terminal block connection where the power cord attaches. Loose connections cause arcing, overheating, and eventually a fire hazard. We inspect these connections during every electric dryer service call.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── Venting Requirements ── */}
    <section style={{ background: '#F8F5F0', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>SAFETY & PERFORMANCE</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#0D1B2A', marginBottom: 24, lineHeight: 1.2 }}>Commercial Dryer Venting Requirements</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8, marginBottom: 20 }}>
          Proper exhaust venting is the single most important factor in commercial dryer performance and safety. Restricted venting causes extended dry times, increased energy costs, premature component failure, and fire risk. San Francisco Fire Department data shows that dryer fires are among the leading causes of commercial property fires — and the majority are caused by lint accumulation in exhaust systems.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { title: 'Vent Length & Material', detail: 'Commercial dryers require rigid metal ductwork (not flexible foil). Maximum vent length depends on the dryer model — typically 25-35 feet equivalent. Each 90° elbow adds 5 feet of equivalent length. Many San Francisco laundromats in older buildings have venting that exceeds manufacturer limits, causing persistent drying problems.' },
            { title: 'Lint Trap & Secondary Filtration', detail: 'Beyond the lint screen, many commercial dryers use secondary lint traps in the exhaust duct. These require periodic cleaning — typically monthly in high-volume laundromats. A clogged secondary filter can reduce airflow by 50% or more, doubling dry times.' },
            { title: 'Roof & Wall Terminations', detail: 'Exhaust termination caps must remain clear of debris, bird nests, and lint accumulation. In multi-story San Francisco buildings, rooftop terminations are particularly prone to blockage from wind-blown debris and moisture condensation.' },
          ].map(item => (
            <div key={item.title} style={{ background: '#fff', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#0D1B2A', marginBottom: 6 }}>{item.title}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Stack Dryer Configurations ── */}
    <section style={{ background: '#0D1B2A', padding: '70px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ fontFamily: F, fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', color: '#FF5722', textTransform: 'uppercase', marginBottom: 10 }}>STACK DRYERS</div>
        <h2 style={{ fontFamily: F, fontWeight: 800, fontSize: 32, color: '#FFFFFF', marginBottom: 24, lineHeight: 1.2 }}>Stack Dryer Repair for Laundromats & Apartments</h2>
        <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.70)', lineHeight: 1.8, marginBottom: 24 }}>
          Stack dryers — double and triple configurations — are space-efficient solutions common in San Francisco laundromats and apartment building laundry rooms. These units present unique repair challenges because the upper units require different service access and the stacking hardware itself can develop issues over time.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {[
            { title: 'Double-Stack Dryers', text: 'Two independent dryer pockets sharing a single footprint. The top unit is accessed by removing the front panel while standing on a step stool. Speed Queen ST and Dexter DL2X stack dryers are the most common in Bay Area laundromats.' },
            { title: 'Triple-Stack Dryers', text: 'Three dryer pockets in a single column, maximizing capacity per square foot. These are popular in space-constrained San Francisco laundromats. The top unit can be 6+ feet off the ground, requiring careful service access.' },
            { title: 'Stacking Hardware & Alignment', text: 'Over time, the stacking brackets and mounting hardware can loosen, causing vibration and noise. We inspect and tighten all mounting points, verify level, and replace worn stacking kits to ensure safe, stable operation.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '24px' }}>
              <div style={{ fontFamily: F, fontWeight: 700, fontSize: 15, color: '#FF5722', marginBottom: 8 }}>{item.title}</div>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.70)', lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const DesktopPage = () => (
  <ApplianceRepairPageNew
    appliance="Commercial Dryer"
    pageTitle="Commercial Dryer Repair – Gas, Electric & Stack Dryers for Laundromats"
    metaDescription="Commercial dryer repair in San Francisco, Peninsula & Marin County. Gas & electric, single and stack dryers for laundromats, hotels, apartments. Fast scheduling, $100 diagnostic, 180-day warranty. Speed Queen, Dexter, Maytag Commercial."
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
  { icon: '🔥', label: 'Not Heating' },
  { icon: '⏱️', label: 'Too Long' },
  { icon: '🔄', label: "Won't Tumble" },
  { icon: '💳', label: 'Coin/Card' },
  { icon: '🔊', label: 'Loud Noise' },
  { icon: '⚠️', label: 'Overheating' },
];

const mobileFaqs = [
  { q: 'Do you repair gas and electric commercial dryers?', a: 'Yes — both gas and electric, including single, double-stack, and triple-stack configurations.' },
  { q: 'How fast can you respond?', a: 'Same- or next-day or next-day priority service for commercial laundry equipment.' },
  { q: 'What brands do you repair?', a: 'Speed Queen, Dexter, Maytag Commercial, Huebsch, ADC, and all major commercial dryer brands.' },
  { q: 'Is there a warranty?', a: '180-day warranty on parts and labor for all commercial dryer repairs.' },
];

const mobileBrands = [
  { name: 'Speed Queen', href: '/brands', logo: '/images/brands/speed-queen.svg', h: 38 },
  { name: 'Whirlpool', href: '/whirlpool-appliance-repair', logo: '/images/brands/whirlpool.svg', h: 38 },
  { name: 'Maytag', href: '/maytag-appliance-repair', logo: '/images/brands/maytag.svg', h: 30 },
  { name: 'Samsung', href: '/samsung-appliance-repair', logo: '/images/brands/samsung.svg', h: 24 },
  { name: 'LG', href: '/lg-appliance-repair', logo: '/images/brands/lg.svg', h: 38 },
  { name: 'GE', href: '/ge-appliance-repair', logo: '/images/brands/ge.svg', h: 38 },
  { name: 'Bosch', href: '/bosch-appliance-repair', logo: '/images/brands/bosch.svg', h: 30 },
  { name: 'Kenmore', href: '/kenmore-appliance-repair', logo: '/images/brands/kenmore.svg', h: 38 },
];

const MobilePage = () => (
  <MobileServiceLanding
    appliance="Commercial Dryer"
    pageSlug="commercial-dryer-repair"
    pageTitle="Commercial Dryer Repair – Laundromat & Hotel Dryers"
    metaDescription="Commercial dryer repair in San Francisco & Bay Area. Gas & electric dryers. Fast scheduling, 180-day warranty."
    heroTitle={<>Commercial Dryer<br />Repair — Bay Area.</>}
    heroSubtitle="Priority Service for Laundromats & Hotels"
    issues={mobileIssues}
    faqs={mobileFaqs}
    brands={mobileBrands}
    schemaData={{
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Dryer Repair",
      "provider": { "@type": "LocalBusiness", "name": "FixitBay LLC", "telephone": PHONE_DISPLAY },
    }}
  />
);

const CommercialDryerRepairPage = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobilePage /> : <DesktopPage />;
};

export default CommercialDryerRepairPage;
