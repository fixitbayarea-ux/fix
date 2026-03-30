import React from 'react';

const F = 'Montserrat, sans-serif';
const C = { navy: '#0d1b2a', navyMid: '#1a2f45', accent: '#ff5722', cream: '#f8f5f0', textDark: '#1a1a1a', textMid: '#4a5568', white: '#ffffff', white60: 'rgba(255,255,255,0.6)' };

const Eyebrow = ({ children }) => (
  <span style={{ color: C.accent, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.2px', marginBottom: 12, display: 'block', fontFamily: F }}>{children}</span>
);

const MaintenanceSections = ({ appliance, vsRepairData, checklistItems, scheduleNote }) => {
  const defaultSchedule = [
    { season: 'Spring', task: 'Washer + Dryer maintenance before heavy summer use', icon: '&#9728;' },
    { season: 'Fall', task: 'Refrigerator + Oven tune-up before holiday cooking season', icon: '&#127810;' },
    { season: 'Year-Round', task: 'Wine Cooler service every 12 months for optimal storage', icon: '&#128197;' },
  ];

  return (
    <>
      {/* Section 1: Maintenance vs Repair */}
      <section style={{ padding: '70px 0', background: C.white }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow>KNOW THE DIFFERENCE</Eyebrow>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.navy, lineHeight: '33.6px', marginBottom: 20, fontFamily: F }}>
            {appliance} Maintenance vs. {appliance} Repair — What's the Difference?
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F, fontSize: 15 }}>
              <thead>
                <tr style={{ background: C.navy, color: C.white }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, borderRadius: '8px 0 0 0' }}></th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700 }}>Maintenance</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 700, borderRadius: '0 8px 0 0' }}>Repair</th>
                </tr>
              </thead>
              <tbody>
                {(vsRepairData || [
                  { label: 'When', maintenance: 'Annually or as preventive care', repair: 'When something breaks or fails' },
                  { label: 'Goal', maintenance: 'Prevent breakdowns, extend lifespan', repair: 'Fix an existing malfunction' },
                  { label: 'Typical Cost', maintenance: `From $250`, repair: '$60 diagnostic + parts & labor' },
                  { label: 'Duration', maintenance: '45–60 minutes', repair: '60–120 minutes' },
                ]).map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? C.cream : C.white, borderBottom: '1px solid #e5e2dd' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 700, color: C.navy }}>{row.label}</td>
                    <td style={{ padding: '14px 20px', color: C.textMid }}>{row.maintenance}</td>
                    <td style={{ padding: '14px 20px', color: C.textMid }}>{row.repair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 14, color: C.textMid, fontFamily: F, marginTop: 16, lineHeight: '22px' }}>
            <strong>Bottom line:</strong> Maintenance prevents problems. Repair fixes them. Regular {appliance.toLowerCase()} maintenance reduces repair frequency and extends appliance life by 2–5 years on average.
          </p>
        </div>
      </section>

      {/* Section 2: Maintenance Checklist */}
      <section style={{ padding: '70px 0', background: C.cream }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow>MAINTENANCE CHECKLIST</Eyebrow>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.navy, lineHeight: '33.6px', marginBottom: 20, fontFamily: F }}>
            What We Check During {appliance} Maintenance
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {checklistItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 20px', background: C.white, borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ color: C.accent, fontWeight: 700, fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>&#10003;</span>
                <span style={{ fontSize: 14, color: C.textDark, fontFamily: F, lineHeight: '22px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Annual Maintenance Schedule */}
      <section style={{ padding: '70px 0', background: C.navy }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Eyebrow>PLAN AHEAD</Eyebrow>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.white, lineHeight: '33.6px', marginBottom: 8, fontFamily: F }}>
            Recommended Maintenance Schedule for Bay Area Homes
          </h2>
          <p style={{ fontSize: 15, color: C.white60, fontFamily: F, marginBottom: 24, lineHeight: '24px' }}>
            {scheduleNote || `Stay ahead of breakdowns. Here's when to schedule ${appliance.toLowerCase()} maintenance in the Bay Area.`}
          </p>
          <div style={{ display: 'grid', gap: 16 }}>
            {defaultSchedule.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px', background: C.navyMid, borderRadius: 8 }}>
                <span style={{ fontSize: 28, lineHeight: 1 }} dangerouslySetInnerHTML={{ __html: s.icon }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.white, fontFamily: F }}>{s.season}</div>
                  <div style={{ fontSize: 14, color: C.white60, fontFamily: F, marginTop: 4 }}>{s.task}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MaintenanceSections;
