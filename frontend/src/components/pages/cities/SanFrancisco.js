import React, { useState, useEffect, useMemo } from 'react';
import SEOMetaTags from '../../SEOMetaTags';
import { useSchemas } from '../../../hooks/useSchema';
import cityLocalData from '../../../data/cityLocalData';
import {
  Phone, MapPin, Wrench, HelpCircle,
  CalendarCheck, Search, ClipboardCheck, Star, ArrowRight, Shield, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ═══ Design System ═══ */
const S = {
  font: 'Montserrat, sans-serif',
  eyebrow: { fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em' },
  h2: { fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 36, lineHeight: 1.15 },
  body: { fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: 14, lineHeight: 1.7, color: '#4A5568' },
};

/* ═══ Schema ═══ */
const sfServiceSchema = {
  "@context": "https://schema.org", "@type": "Service",
  "serviceType": "Appliance Repair",
  "provider": { "@id": "https://fixitbay.net/#organization" },
  "areaServed": { "@type": "City", "name": "San Francisco, CA" },
  "url": "https://fixitbay.net/san-francisco-appliance-repair",
  "description": "Fast appliance repair throughout San Francisco. $60 diagnostic credited toward repair. 180-day warranty."
};
const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({ "@type": "ListItem", "position": i + 1, "name": it.name, "item": it.url }))
});
const buildFAQSchema = (faqData) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } }))
});

/* ═══ Brand Data ═══ */
const BRAND_LOGOS = {
  'Amana':'/images/brands/amana.svg','Bosch':'/images/brands/bosch.svg',
  'Electrolux':'/images/brands/electrolux.svg','Fisher & Paykel':'/images/brands/fisher-paykel.svg',
  'Frigidaire':'/images/brands/frigidaire.png','GE':'/images/brands/ge.svg',
  'Jenn-Air':'/images/brands/jenn-air.svg','Kenmore':'/images/brands/kenmore.png',
  'KitchenAid':'/images/brands/kitchenaid.svg','LG':'/images/brands/lg.svg',
  'Maytag':'/images/brands/maytag.svg','Miele':'/images/brands/miele.svg',
  'Samsung':'/images/brands/samsung.svg','Sub-Zero':'/images/brands/sub-zero.svg',
  'Thermador':'/images/brands/thermador.png','Viking':'/images/brands/viking.svg',
  'Whirlpool':'/images/brands/whirlpool.jpg','Wolf':'/images/brands/wolf.svg',
};
const BRAND_LINKS = {
  Whirlpool:'/whirlpool-appliance-repair',LG:'/lg-appliance-repair',Samsung:'/samsung-appliance-repair',
  GE:'/ge-appliance-repair',Bosch:'/bosch-appliance-repair',KitchenAid:'/kitchenaid-appliance-repair',
  Maytag:'/maytag-appliance-repair',Frigidaire:'/frigidaire-appliance-repair',Kenmore:'/kenmore-appliance-repair',
  Thermador:'/thermador-appliance-repair',Viking:'/viking-appliance-repair',Miele:'/miele-appliance-repair',
  'Sub-Zero':'/sub-zero-appliance-repair',Wolf:'/wolf-appliance-repair',
};
const BRAND_LOGO_H = 54;
const BRAND_LOGO_OVERRIDE = { 'Kenmore': 70, 'LG': 70 };
const COMMON_BRANDS = [
  'Whirlpool','GE','Samsung','LG','Frigidaire','Maytag','KitchenAid','Bosch',
  'Kenmore','Amana','Thermador','Viking','Sub-Zero','Wolf','Miele','Jenn-Air','Electrolux','Fisher & Paykel'
];

/* ═══ Neighborhood Tabs Data ═══ */
const NEIGHBORHOOD_TABS = [
  { id: 'mission', label: 'The Mission', nhSlug: 'mission-district', nhLabel: 'Mission District',
    issues: [
      { title: 'Gas Range Igniter Failure', desc: 'Victorian-era gas lines in the Mission create pressure fluctuations that wear out igniters faster than modern systems.' },
      { title: 'Washer Drain Clogs', desc: 'Aging cast-iron drain pipes in pre-1920 homes cause slow drainage and backups in modern high-efficiency washers.' },
      { title: 'Refrigerator Seal Wear', desc: 'Temperature swings between foggy mornings and sunny afternoons stress door gaskets and cause condensation.' },
    ],
    info: 'The Mission\'s Victorian and Edwardian homes feature narrow hallways, steep staircases, and compact kitchens. Our technicians carry slim-profile tools designed for tight spaces and are experienced navigating multi-unit buildings common throughout the district.'
  },
  { id: 'castro', label: 'Castro', nhSlug: 'castro', nhLabel: 'Castro',
    issues: [
      { title: 'Oven Calibration Issues', desc: 'Hilltop elevation changes in Castro affect gas pressure, requiring oven recalibration more frequently.' },
      { title: 'Dishwasher Hard Water Buildup', desc: 'Mineral deposits from older water infrastructure clog spray arms and reduce cleaning performance.' },
      { title: 'Dryer Vent Restriction', desc: 'Multi-story Victorians with long vent runs restrict airflow, causing longer dry times and overheating.' },
    ],
    info: 'Castro\'s charming Victorian row houses have been beautifully maintained but often have original plumbing and gas line infrastructure. We understand the unique challenges of servicing appliances in these historic homes while preserving their character.'
  },
  { id: 'pacific-heights', label: 'Pacific Heights', nhSlug: 'pacific-heights', nhLabel: 'Pacific Heights',
    issues: [
      { title: 'Sub-Zero Compressor Issues', desc: 'Premium built-in refrigerators in Pacific Heights require factory-trained technicians and specialty parts.' },
      { title: 'Wolf Range Burner Problems', desc: 'High-end gas ranges need precise calibration. We carry Wolf-specific components on every Pac Heights call.' },
      { title: 'Wine Cooler Temperature Drift', desc: 'Built-in wine storage units in luxury kitchens are sensitive to ambient temperature and vibration.' },
    ],
    info: 'Pacific Heights homes feature premium appliances from Sub-Zero, Wolf, Thermador, Viking, and Miele. Our technicians are factory-trained on all luxury brands and carry specialty parts. We coordinate with property managers and follow all building access protocols.'
  },
  { id: 'soma', label: 'SOMA', nhSlug: 'soma', nhLabel: 'SOMA',
    issues: [
      { title: 'Smart Appliance Wi-Fi Errors', desc: 'Newer SOMA condos feature Samsung and LG smart appliances that require software diagnostics alongside hardware repair.' },
      { title: 'Compact Washer/Dryer Units', desc: 'Space-saving stackable and ventless units in high-rise apartments need specialized service knowledge.' },
      { title: 'Dishwasher Installation Issues', desc: 'Tight undercounter spaces in modern condo kitchens create installation and connection challenges.' },
    ],
    info: 'SOMA\'s high-rise condos and loft conversions feature modern appliances in compact layouts. We handle freight elevator scheduling, HOA coordination, and building management protocols. Our technicians are experienced with both luxury loft kitchens and standard condo units.'
  },
  { id: 'richmond', label: 'Richmond', nhSlug: 'richmond-district', nhLabel: 'Richmond District',
    issues: [
      { title: 'Refrigerator Humidity Problems', desc: 'Richmond\'s fog belt creates persistent moisture that strains refrigerator dehumidification systems and door seals.' },
      { title: 'Dryer Moisture Buildup', desc: 'Coastal dampness causes condensation in dryer vent lines, reducing efficiency and creating lint hazards.' },
      { title: 'Freezer Frost Accumulation', desc: 'Temperature fluctuations from fog-to-sun transitions cause excessive frost buildup in freezer compartments.' },
    ],
    info: 'The Richmond District sits in San Francisco\'s fog belt, with persistent marine moisture that affects every appliance in the home. Our technicians understand these climate-specific challenges and come prepared with extra seals, gaskets, and moisture-resistant components.'
  },
  { id: 'sunset', label: 'Sunset', nhSlug: 'sunset-district', nhLabel: 'Sunset District',
    issues: [
      { title: 'Dryer Not Heating', desc: 'Thermal fuses and heating elements fail faster in the Sunset due to constant fog moisture entering vent systems.' },
      { title: 'Gas Range Pilot Issues', desc: 'Humidity from ocean air affects pilot lights and electronic ignition in gas ranges throughout the Outer Sunset.' },
      { title: 'Washer Vibration Problems', desc: 'Sandy soil beneath Sunset row houses amplifies washer vibration, loosening connections over time.' },
    ],
    info: 'The Sunset District\'s row houses share similar construction — 1940s-60s builds with standard kitchen layouts. This means our technicians know exactly what to expect and can complete most repairs efficiently. We stock parts that commonly fail in the Sunset\'s heavy fog environment.'
  },
  { id: 'noe-valley', label: 'Noe Valley', nhSlug: 'noe-valley', nhLabel: 'Noe Valley',
    issues: [
      { title: 'High-End Dishwasher Repairs', desc: 'Noe Valley\'s renovated kitchens often feature Bosch and Miele dishwashers requiring specialized diagnostics.' },
      { title: 'Refrigerator Compressor Noise', desc: 'Open-plan kitchen renovations amplify compressor noise, requiring careful diagnosis to distinguish normal from failing.' },
      { title: 'Cooktop Glass Cracks', desc: 'Induction and ceramic cooktops in remodeled Noe Valley homes are prone to thermal stress cracks.' },
    ],
    info: 'Noe Valley has seen extensive kitchen renovations blending Victorian architecture with modern appliances. We service both the high-end brands in newly remodeled homes and the reliable workhorses in original kitchens. Our technicians navigate Noe Valley\'s hills and parking challenges daily.'
  },
  { id: 'marina', label: 'Marina', nhSlug: 'marina', nhLabel: 'Marina',
    issues: [
      { title: 'Appliance Corrosion', desc: 'Salt air from the bay corrodes electrical connections and metal components in Marina-district appliances.' },
      { title: 'Gas Line Pressure Issues', desc: 'Marina\'s landfill-built terrain causes subtle shifts that affect gas line connections over time.' },
      { title: 'Ice Maker Water Line Clogs', desc: 'Mineral-rich water supply in the Marina clogs ice maker valves and supply lines.' },
    ],
    info: 'The Marina District\'s proximity to the bay brings salt air that accelerates component wear. Our technicians apply anti-corrosion treatments and use marine-grade connectors when needed. We\'re familiar with the parking constraints and building layouts throughout the Marina.'
  },
  { id: 'haight', label: 'Haight',
    issues: [
      { title: 'Vintage Appliance Compatibility', desc: 'The Haight\'s eclectic homes sometimes mix vintage appliances with modern systems, creating compatibility issues.' },
      { title: 'Electrical Overload', desc: 'Older wiring in Haight-Ashbury homes can\'t always support modern high-draw appliances without circuit upgrades.' },
      { title: 'Washer Hookup Problems', desc: 'Non-standard plumbing in remodeled Victorian flats creates washer connection and drainage challenges.' },
    ],
    info: 'Haight-Ashbury\'s Victorian homes range from lovingly restored to creatively adapted. Our technicians are experienced with the full spectrum of plumbing, electrical, and gas configurations found in this unique neighborhood. We respect the character of these historic homes while ensuring modern appliances work safely.'
  },
  { id: 'bernal', label: 'Bernal Heights', nhSlug: 'bernal-heights', nhLabel: 'Bernal Heights',
    issues: [
      { title: 'Dryer Vent Length Issues', desc: 'Bernal\'s hillside homes often have extended dryer vent runs that reduce efficiency and require regular clearing.' },
      { title: 'Refrigerator Level Problems', desc: 'Sloped floors in older Bernal homes cause refrigerators to run unevenly, stressing compressors.' },
      { title: 'Dishwasher Drain Issues', desc: 'Steep terrain creates unusual plumbing angles that affect dishwasher drainage in hillside homes.' },
    ],
    info: 'Bernal Heights\' hillside location means homes are built on slopes, creating unique appliance challenges from uneven floors to extended vent runs. Our technicians bring leveling tools and extended vent kits on every Bernal Heights call.'
  },
];

/* ═══ Common Problems ═══ */
const COMMON_PROBLEMS = [
  { title: 'Refrigerator Not Cooling', description: 'Compressor failures, thermostat issues, and condenser coil problems. SF\'s coastal humidity accelerates seal and gasket wear in every neighborhood.' },
  { title: 'Washer Drainage Issues', description: 'Older Victorian plumbing creates water pressure and drainage problems. Narrow drain lines and aging pipes cause failures in modern washers.' },
  { title: 'Oven Temperature Problems', description: 'Gas ovens require calibration due to elevation differences across SF neighborhoods. Igniter failures are common in homes with older gas lines.' },
  { title: 'Ice Maker Malfunctions', description: 'Mineral-rich water clogs supply lines and valves. Built-in units in luxury kitchens are especially prone to water filter and valve issues.' },
  { title: 'Range Burner Issues', description: 'Gas burner igniter failures and flame adjustment problems. Persistent fog moisture affects electronic ignition systems throughout the city.' },
  { title: 'Cooktop Element Failure', description: 'Electric and induction cooktop element burnout, cracked glass surfaces, and control board failures in both older and newly renovated kitchens.' },
];

/* ═══ FAQ ═══ */
const FAQ_DATA = [
  { q: 'Do you offer fast scheduling in San Francisco?', a: 'Yes. We provide fast appointments for most San Francisco service calls when you contact us before noon, and next-day availability for afternoon requests. We serve every SF neighborhood including Sunset, Richmond, Mission, SOMA, Nob Hill, Pacific Heights, and all others.' },
  { q: 'How much does appliance repair cost in San Francisco?', a: 'Our diagnostic fee is $60, which is fully credited toward your repair if you choose to proceed. Final costs depend on the appliance type and parts required. We always provide a written upfront estimate before starting any work — no surprises.' },
  { q: 'How quickly can you reach my neighborhood?', a: 'We typically arrive within a 2-hour window for fast appointments. Our technicians know SF traffic patterns, parking challenges, and the fastest routes to every neighborhood from the Avenues to the Bayshore.' },
  { q: 'Do you charge extra for parking or steep hill access?', a: 'No. Our $60 diagnostic fee covers the visit regardless of parking difficulty or building access. We carry city parking permits and are experienced navigating San Francisco\'s hills and tight streets.' },
  { q: 'Can you service appliances in older Victorian homes?', a: 'Absolutely. We have extensive experience in San Francisco\'s historic Victorian, Edwardian, and earthquake cottage homes. Our technicians bring compact tools designed for navigating steep stairs and tight kitchen spaces.' },
  { q: 'Do you service high-rise apartment buildings?', a: 'Yes. We service appliances in all SF high-rise buildings downtown, SOMA, and throughout the city. We coordinate with building management for freight elevator access and follow all HOA protocols.' },
  { q: 'Can you work in buildings with no elevator?', a: 'Yes. Our technicians regularly service appliances in walkup apartments across Pacific Heights, Russian Hill, and Nob Hill. We carry replacement parts up multiple flights as needed.' },
  { q: 'What brands do you repair in San Francisco?', a: 'We repair all major brands: Sub-Zero, Wolf, Thermador, Viking, Bosch, Miele, LG, Samsung, GE, Whirlpool, Maytag, KitchenAid, Frigidaire, Kenmore, Amana, Electrolux, Jenn-Air, Fisher & Paykel, and more.' },
  { q: 'What if you don\'t have the part on the truck?', a: 'We stock the most common parts for Bay Area appliances on every service call. If a specialty part is needed, we order it (usually arrives next business day) and schedule a return visit at no additional trip charge.' },
  { q: 'What warranty do you offer?', a: 'Every repair includes a 180-day warranty on parts and labor. If the same issue recurs within that period, we return and fix it at no additional cost.' },
];

/* ═══ Nearby Cities ═══ */
const NEARBY_CITIES = [
  { name: 'Daly City', slug: 'daly-city' },
  { name: 'South San Francisco', slug: 'south-san-francisco' },
  { name: 'Brisbane', slug: 'brisbane' },
  { name: 'Colma', slug: 'colma' },
  { name: 'Pacifica', slug: 'pacifica' },
  { name: 'San Bruno', slug: 'san-bruno' },
  { name: 'Millbrae', slug: 'millbrae' },
  { name: 'Sausalito', slug: 'sausalito' },
  { name: 'Mill Valley', slug: 'mill-valley' },
  { name: 'Tiburon', slug: 'tiburon' },
  { name: 'Corte Madera', slug: 'corte-madera' },
  { name: 'San Rafael', slug: 'san-rafael' },
  { name: 'Novato', slug: 'novato' },
];

/* ═══════════════════════════════════════════ */
const SanFrancisco = () => {
  const sfData = cityLocalData['San Francisco'];
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('mission');
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyBtn(window.scrollY > 580);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pageSchemas = useMemo(() => [
    { id: 'sf-breadcrumb', data: buildBreadcrumbSchema([
      { name: 'Home', url: 'https://fixitbay.net/' },
      { name: 'Service Areas', url: 'https://fixitbay.net/service-areas' },
      { name: 'San Francisco', url: 'https://fixitbay.net/san-francisco-appliance-repair' }
    ])},
    { id: 'sf-faq', data: buildFAQSchema(FAQ_DATA) },
    { id: 'sf-service', data: sfServiceSchema },
  ], []);
  useSchemas(pageSchemas);

  const currentTab = NEIGHBORHOOD_TABS.find(t => t.id === activeTab) || NEIGHBORHOOD_TABS[0];

  return (
    <div className="pb-[72px] lg:pb-0" style={{ fontFamily: S.font, background: '#F8F5F0' }}>
      <SEOMetaTags
        title="Appliance Repair San Francisco | Fast Scheduling | FixitBay LLC"
        description="Professional appliance repair in San Francisco. Fast scheduling available. Licensed technicians, 180-day warranty. Serving all SF neighborhoods. Call (760) 543-5733."
        canonical="https://fixitbay.net/san-francisco-appliance-repair"
        ogImage="https://fixitbay.net/images/og-cover.png"
      />

      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section data-testid="sf-hero" style={{
        background: `linear-gradient(rgba(13,27,42,0.96),rgba(13,27,42,0.96)), url('/background_new2.webp')`,
        backgroundSize: 'cover', backgroundPosition: 'center 60%',
        minHeight: 520, maxHeight: 580, overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ maxWidth: 780, margin: '0 auto', padding: '100px 40px 80px' }}>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 36, height: 2, background: '#FF5722', display: 'inline-block' }} />
            <span style={S.eyebrow}>APPLIANCE REPAIR &middot; SAN FRANCISCO, CA</span>
          </div>
          {/* H1 */}
          <h1 className="hero-main-h1" data-testid="sf-hero-h1" style={{ fontFamily: S.font, fontWeight: 800, fontSize: 52, color: '#FFFFFF', lineHeight: 1.12, marginTop: 16 }}>Appliance Repair in San&nbsp;Francisco</h1>
          {/* Subtext */}
          <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginTop: 14 }}>
            Same- or next-day & next-day service &middot; $60 diagnostic &middot; 180-day warranty on all repairs
          </p>
          {/* CTAs */}
          <div className="sf-cta-row" style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <a href="/book?go=1" data-testid="sf-hero-book" className="sf-cta-book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 32px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#FF7043'} onMouseLeave={e => e.currentTarget.style.background = '#FF5722'}>BOOK REPAIR ONLINE</a>
            <a href="tel:+17605435733" data-testid="sf-hero-call" className="sf-cta-call" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 28px', borderRadius: 3, background: 'transparent', border: '1.5px solid rgba(255,255,255,0.30)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF5722'; e.currentTarget.style.color = '#FF5722'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)'; e.currentTarget.style.color = '#FFFFFF'; }}>CALL (760) 543-5733</a>
          </div>
          {/* Stats row */}
          <div style={{ width: 48, height: 2, background: 'rgba(255,87,34,0.40)', margin: '24px 0 20px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            {[
              { value: '10+', label: 'Years' },
              { value: '180-Day', label: 'Warranty' },
              { value: 'Fast', label: 'Scheduling' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.12)', margin: '0 20px' }} />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#FFFFFF' }}>{stat.value}</span>
                  <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <div className="city-trust-strip" data-testid="city-trust-strip" style={{ background: '#0D1B2A', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', fontFamily: S.font, fontWeight: 500, fontSize: 13, letterSpacing: '0.3px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#10003;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>Licensed CA Technician</span></span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FFB800' }}>&#11088;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>4.9 Google (94 Reviews)</span></span>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>&middot;</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: '#FF5722' }}>&#128737;</span><span style={{ color: 'rgba(255,255,255,0.9)' }}>License #51001</span></span>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          SF NEIGHBORHOODS TABS
          ═══════════════════════════════════════ */}
      <section data-testid="sf-neighborhoods" style={{ background: '#0D1B2A', padding: '60px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...S.eyebrow, color: '#FF5722', textAlign: 'center', marginBottom: 10 }}>SAN FRANCISCO NEIGHBORHOODS</div>
          <h2 style={{ ...S.h2, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>We Serve Every SF Neighborhood</h2>
          {/* Tabs */}
          <div data-testid="sf-tabs-row" style={{ display: 'flex', gap: 24, overflowX: 'auto', paddingBottom: 2, marginBottom: 36, WebkitOverflowScrolling: 'touch' }} className="sf-tabs-scroll">
            {NEIGHBORHOOD_TABS.map(tab => (
              <button
                key={tab.id}
                data-testid={`sf-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: S.font, fontWeight: 600, fontSize: 13,
                  color: activeTab === tab.id ? '#FFFFFF' : 'rgba(255,255,255,0.45)',
                  background: 'transparent', border: 'none', cursor: 'pointer',
                  padding: '0 0 8px', whiteSpace: 'nowrap',
                  borderBottom: activeTab === tab.id ? '2px solid #FF5722' : '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { if (activeTab !== tab.id) e.currentTarget.style.color = 'rgba(255,255,255,0.80)'; }}
                onMouseLeave={e => { if (activeTab !== tab.id) e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Tab panel */}
          <div data-testid="sf-tab-panel" className="grid md:grid-cols-2" style={{ gap: 24 }}>
            {/* Left: issue cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {currentTab.issues.map((issue, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
                  <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 14, color: '#FFFFFF', marginBottom: 6 }}>{issue.title}</div>
                  <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.60)', lineHeight: 1.6 }}>{issue.desc}</p>
                </div>
              ))}
            </div>
            {/* Right: neighborhood info */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 4, padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 18, color: '#FFFFFF', marginBottom: 14 }}>{currentTab.label}</div>
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.70)', lineHeight: 1.75 }}>{currentTab.info}</p>
              {currentTab.nhSlug && (
                <Link to={`/san-francisco/${currentTab.nhSlug}-appliance-repair`} data-testid="sf-neighborhood-detail-link" style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FF5722', marginTop: 16, display: 'inline-block', textDecoration: 'none', transition: 'opacity 0.2s' }} onMouseEnter={e => { e.currentTarget.style.opacity = '0.8'; }} onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}>
                  {currentTab.nhLabel} &rarr;
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
          ═══════════════════════════════════════ */}
      <section data-testid="sf-how-it-works" style={{ background: '#F8F5F0', padding: '70px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>THE PROCESS</div>
          <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 48 }}>Simple. Fast. Professional.</h2>
          <div className="sf-how-grid grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', icon: <CalendarCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'Book Online', text: 'Schedule your appointment at your convenience.' },
              { num: '02', icon: <Search size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Diagnose', text: '$60 diagnostic visit — applied to repair if you proceed.' },
              { num: '03', icon: <ClipboardCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'You Approve', text: 'Upfront estimate before any work begins. No surprises.' },
              { num: '04', icon: <Wrench size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Fix It', text: 'Professional repair with 180-day warranty on parts and labor.' },
            ].map(s => (
              <div key={s.num} data-testid={`sf-step-${s.num}`}>
                <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 72, color: 'rgba(255,87,34,0.18)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ marginTop: 12 }}>{s.icon}</div>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 14, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>{s.title}</div>
                <p style={{ ...S.body, fontSize: 13, marginTop: 8 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COMMON PROBLEMS WE FIX
          ═══════════════════════════════════════ */}
      <section data-testid="sf-problems" style={{ background: '#F8F5F0', padding: '70px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>WHAT WE FIX</div>
          <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 0 }}>Common Appliance Repair Problems</h2>
          <p style={{ maxWidth: 720, margin: '16px auto 40px', fontFamily: S.font, fontSize: 13, fontWeight: 400, lineHeight: 1.80, color: '#4A5568' }}>
            San Francisco homeowners face unique appliance challenges. The city's marine climate, Victorian-era plumbing, and diverse building types create conditions that accelerate component wear and cause failures uncommon in other cities.
          </p>
          <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
            {COMMON_PROBLEMS.map((p, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '20px 24px', borderLeft: '3px solid #FF5722' }}>
                <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 15, color: '#0D1B2A', marginBottom: 6 }}>{p.title}</div>
                <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════ */}
      <section data-testid="sf-cta-banner" style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', borderBottom: '3px solid #FF5722', padding: '60px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ ...S.h2, color: '#FFFFFF', marginBottom: 12 }}>Need Appliance Repair Today?</h2>
          <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.60)', marginBottom: 28 }}>Same- or next-day & next-day appointments available</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+17605435733" data-testid="sf-cta-call" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 30px', borderRadius: 3, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>
              <Phone size={16} /> Call (760) 543-5733
            </a>
            <a href="/book?go=1" data-testid="sf-cta-book" style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 3, background: 'transparent', border: '1.5px solid rgba(255,255,255,0.30)', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', textDecoration: 'none' }}>Book Online</a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
          ═══════════════════════════════════════ */}
      <section data-testid="sf-pricing" style={{ background: '#1A2F45', padding: '70px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ ...S.eyebrow, color: '#FF5722', marginBottom: 10 }}>TRANSPARENT PRICING</div>
          <h2 style={{ ...S.h2, color: '#FFFFFF', marginBottom: 36 }}>No Surprises. Ever.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 20 }}>
            {/* Card 1 — $60 Diagnostic (featured) */}
            <div style={{ border: '2px solid #FF5722', background: 'rgba(255,87,34,0.06)', borderRadius: 4, padding: '32px 24px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 16, right: 16, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 10, textTransform: 'uppercase', borderRadius: 2, padding: '3px 8px' }}>MOST ASKED</span>
              <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 48, color: '#FF5722', marginBottom: 8 }}>$60</div>
              <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 8 }}>Diagnostic Fee</div>
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Applied toward repair if you proceed</p>
            </div>
            {/* Card 2 — 180-Day Warranty */}
            <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '32px 24px' }}>
              <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 48, color: '#FFFFFF', marginBottom: 8 }}>180<span style={{ color: '#FF5722' }}>-Day</span></div>
              <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 8 }}>Warranty</div>
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>On parts & labor. Same issue returns — we fix it at no charge</p>
            </div>
            {/* Card 3 — No Hidden Fees */}
            <div style={{ border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, padding: '32px 24px' }}>
              <div style={{ fontFamily: S.font, fontWeight: 800, fontSize: 48, color: '#FFFFFF', marginBottom: 8 }}>$0</div>
              <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 16, color: '#FFFFFF', marginBottom: 8 }}>Hidden Fees</div>
              <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>No trip charges. No after-hours surcharges</p>
            </div>
          </div>
          <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', marginTop: 24 }}>Typical repairs range $150–$400 after diagnosis</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
          ═══════════════════════════════════════ */}
      <section data-testid="sf-faq" style={{ background: '#F8F5F0', padding: '70px 0' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>FAQ</div>
          <h2 style={{ ...S.h2, color: '#0D1B2A', marginBottom: 32 }}>Quick Answers</h2>
          {FAQ_DATA.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.09)', padding: '22px 0' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                data-testid={`sf-faq-q-${i}`}
                style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: S.font, fontSize: 15, fontWeight: 600, color: '#0D1B2A', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span style={{ paddingRight: 16 }}>{faq.q}</span>
                <span style={{ fontFamily: S.font, fontSize: 22, color: '#FF5722', flexShrink: 0 }}>{openFaq === i ? '\u00D7' : '+'}</span>
              </button>
              <div style={{ maxHeight: openFaq === i ? 500 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                <div style={{ fontFamily: S.font, fontSize: 14, lineHeight: 1.7, color: '#4A5568', paddingTop: 14, borderLeft: '2px solid #FF5722', paddingLeft: 16 }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
          ═══════════════════════════════════════ */}
      {sfData?.testimonials?.length > 0 && (
        <section data-testid="sf-reviews" style={{ background: '#0D1B2A', padding: '70px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ ...S.eyebrow, color: '#FF5722', textAlign: 'center', marginBottom: 10 }}>WHAT CLIENTS SAY</div>
            <h2 style={{ ...S.h2, color: '#FFFFFF', textAlign: 'center', marginBottom: 36 }}>Real People. Real Repairs.</h2>
            <div className="grid md:grid-cols-2" style={{ gap: 16 }}>
              {sfData.testimonials.map((t, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4, padding: '24px' }}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={14} style={{ fill: '#FFB800', color: '#FFB800' }} />
                    ))}
                  </div>
                  <p style={{ fontFamily: S.font, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.80)', lineHeight: 1.70, marginBottom: 14 }}>"{t.text}"</p>
                  <div>
                    <div style={{ fontFamily: S.font, fontWeight: 700, fontSize: 13, color: '#FFFFFF' }}>{t.name}</div>
                    <div style={{ fontFamily: S.font, fontWeight: 400, fontSize: 12, color: '#FF5722' }}>{t.area}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          BRANDS
          ═══════════════════════════════════════ */}
      <section data-testid="sf-brands" style={{ background: '#F8F5F0', padding: '60px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>BRANDS WE SERVICE</div>
          <h2 style={{ ...S.h2, fontSize: 30, color: '#0D1B2A', marginBottom: 28 }}>All Major Brands</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6" style={{ gap: 12 }}>
            {COMMON_BRANDS.map(brand => {
              const link = BRAND_LINKS[brand];
              const logo = BRAND_LOGOS[brand];
              const cell = (
                <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 4, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 96, transition: 'border-color 0.2s', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#FF5722'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'}>
                  {logo && <img src={logo} alt={`${brand} logo`} style={{ maxHeight: BRAND_LOGO_OVERRIDE[brand] || BRAND_LOGO_H, width: '100%', objectFit: 'contain' }} loading="lazy" />}
                </div>
              );
              return link
                ? <a key={brand} href={link} title={brand} style={{ textDecoration: 'none' }}>{cell}</a>
                : <div key={brand}>{cell}</div>;
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEARBY SERVICE AREAS
          ═══════════════════════════════════════ */}
      <section data-testid="sf-nearby" style={{ background: '#F8F5F0', padding: '60px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...S.eyebrow, marginBottom: 10 }}>ALSO SERVING</div>
          <h2 style={{ ...S.h2, fontSize: 30, color: '#0D1B2A', marginBottom: 24 }}>Nearby Service Areas</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {NEARBY_CITIES.map(city => (
              <Link key={city.slug} to={`/${city.slug}-appliance-repair`} style={{ fontFamily: S.font, fontWeight: 500, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.10)', borderRadius: 20, padding: '7px 16px', whiteSpace: 'nowrap', transition: 'all 0.15s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#0D1B2A'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'; }}>
                {city.name}
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <a href="/service-areas" style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#FF5722', textDecoration: 'none', transition: 'text-decoration 0.2s' }} onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>View all 22 service cities &rarr;</a>
          </p>
        </div>
      </section>

      {/* ═══ POPULAR REPAIRS IN SAN FRANCISCO ═══ */}
      <section style={{ background: '#F8F5F0', padding: '60px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ ...S.h2, fontSize: 28, color: '#0D1B2A', marginBottom: 24 }}>Popular Repairs in San Francisco</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" style={{ gap: 12 }}>
            {[
              { label: 'Refrigerator Repair', svc: 'refrigerator' }, { label: 'Washer Repair', svc: 'washer' },
              { label: 'Dryer Repair', svc: 'dryer' }, { label: 'Dishwasher Repair', svc: 'dishwasher' },
              { label: 'Oven & Range Repair', svc: 'oven' }, { label: 'Wine Cooler Repair', svc: 'wine-cooler' },
              { label: 'Ice Maker Repair', svc: 'ice-maker' },
            ].map(s => (
              <Link key={s.svc} to={`/san-francisco-${s.svc}-repair`} data-testid={`popular-repair-${s.svc}`} style={{ fontFamily: S.font, fontWeight: 600, fontSize: 13, color: '#0D1B2A', textDecoration: 'none', background: '#fff', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 3, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }} onMouseEnter={e => { e.currentTarget.style.background = '#0D1B2A'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0D1B2A'; }}>
                <Wrench size={14} style={{ color: '#FF5722' }} /> {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer data-testid="sf-footer" style={{ background: '#0D1B2A', borderTop: '3px solid #FF5722', padding: '24px 40px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/navbar-logo-new.png" alt="FixitBay" style={{ height: 36, width: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontFamily: S.font, fontWeight: 700, fontSize: 14, color: '#FFFFFF', display: 'block' }}>FixitBay LLC</span>
              <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.40)' }}>Appliance Repair & Maintenance</span>
            </div>
          </div>
          <a href="tel:+17605435733" style={{ fontFamily: S.font, fontWeight: 700, fontSize: 18, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
          <span style={{ fontFamily: S.font, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.30)' }}>&copy; 2026 FixitBay LLC</span>
        </div>
      </footer>

      {/* Floating sticky Book Repair */}
      {showStickyBtn && (
        <a href="/book?go=1" data-testid="sf-sticky-book" style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, background: '#FF5722', color: '#FFFFFF', fontFamily: S.font, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 24px', borderRadius: 4, boxShadow: '0 4px 20px rgba(255,87,34,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s ease' }} onMouseEnter={e => { e.currentTarget.style.background = '#FF7043'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,87,34,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={e => { e.currentTarget.style.background = '#FF5722'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,87,34,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
          <CalendarCheck size={16} /> BOOK REPAIR
        </a>
      )}

      {/* Mobile responsive */}
      <style>{`
        .sf-tabs-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .sf-tabs-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 1023px) {
          .hero-main-h1 { font-size: 28px !important; line-height: 1.2 !important; }
        }
        @media (max-width: 767px) {
          .sf-how-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          [data-testid="sf-hero"] { min-height: auto !important; max-height: none !important; }
          [data-testid="sf-hero"] > div { padding: 48px 20px !important; }
          .sf-cta-row { flex-direction: column !important; gap: 12px !important; align-items: stretch !important; }
          .sf-cta-book, .sf-cta-call { width: 100% !important; box-sizing: border-box !important; min-width: 0 !important; display: flex !important; justify-content: center !important; }
          .city-trust-strip > div { gap: 12px !important; font-size: 11px !important; }
          h2 { /* handled by global index.css */ }
        }
        @media (max-width: 480px) {
        }
      `}</style>
    </div>
  );
};

export default SanFrancisco;
