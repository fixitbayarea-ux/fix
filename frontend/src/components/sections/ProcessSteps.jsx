import React from 'react';
import { CalendarCheck, Search, ClipboardCheck, Wrench } from 'lucide-react';

const S_FONT = 'Montserrat, sans-serif';

const STEPS = [
  { num: '01', icon: <CalendarCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'Book Online', text: 'Schedule your appointment at your convenience.' },
  { num: '02', icon: <Search size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Diagnose', text: '$60 diagnostic visit — applied to repair if you proceed.' },
  { num: '03', icon: <ClipboardCheck size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'You Approve', text: 'Upfront estimate before any work begins. No surprises.' },
  { num: '04', icon: <Wrench size={28} strokeWidth={1.5} style={{ color: '#FF5722' }} />, title: 'We Fix It', text: 'Professional repair with 180-day warranty on parts and labor.' },
];

const ProcessSteps = ({ gridClassName = 'grid grid-cols-2 lg:grid-cols-4 gap-8', testId = 'process', background = '#F8F5F0' }) => (
  <section data-testid={testId} style={{ background, padding: '70px 0' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
      <div style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center', marginBottom: 10 }}>THE PROCESS</div>
      <h2 style={{ fontFamily: S_FONT, fontWeight: 800, fontSize: 36, lineHeight: 1.15, color: '#0D1B2A', textAlign: 'center', marginBottom: 48 }}>Simple. Fast. Professional.</h2>
      <div className={gridClassName}>
        {STEPS.map(s => (
          <div key={s.num} data-testid={`${testId}-step-${s.num}`}>
            <div style={{ fontFamily: S_FONT, fontWeight: 800, fontSize: 72, color: 'rgba(255,87,34,0.18)', lineHeight: 1 }}>{s.num}</div>
            <div style={{ marginTop: 12 }}>{s.icon}</div>
            <div style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 14, color: '#0D1B2A', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>{s.title}</div>
            <p style={{ fontFamily: S_FONT, fontWeight: 400, fontSize: 14, lineHeight: 1.7, color: '#4A5568', marginTop: 8 }}>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
