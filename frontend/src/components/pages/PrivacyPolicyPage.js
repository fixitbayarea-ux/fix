import React, { useEffect, useMemo } from 'react';
import SEOMetaTags from '../SEOMetaTags';
import { useSchemas } from '../../hooks/useSchema';
import navbarLogo from '../../assets/navbar-logo-new-112.webp';

const F = 'Montserrat, sans-serif';
const EYE = { fontFamily: F, fontWeight: 700, fontSize: 11, color: '#FF5722', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 10 };
const H2B = { fontFamily: F, fontWeight: 800, fontSize: 20, color: '#1A1A1A' };
const P = { fontFamily: F, fontWeight: 400, fontSize: 14, color: '#4A5568', lineHeight: 1.8 };
const B = { fontFamily: F, fontWeight: 700, color: '#1A1A1A' };
const SUB = { fontFamily: F, fontWeight: 700, fontSize: 14, color: '#1A1A1A', margin: '16px 0 8px' };

const TOC = [
  { id: 'section-1', label: 'Information We Collect' },
  { id: 'section-2', label: 'How We Use It' },
  { id: 'section-3', label: 'How We Share It' },
  { id: 'section-4', label: 'Data Retention' },
  { id: 'section-5', label: 'Data Security' },
  { id: 'section-6', label: 'Cookies & Analytics' },
  { id: 'section-7', label: 'Communications / SMS' },
  { id: 'section-8', label: 'California Rights' },
  { id: 'section-9', label: "Children's Privacy" },
  { id: 'section-10', label: 'Policy Changes' },
  { id: 'section-11', label: 'Contact Us' },
];

const Dot = () => <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF5722', marginTop: 7, flexShrink: 0 }} />;
const Li = ({ children }) => (
  <div style={{ display: 'flex', gap: 8, padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
    <Dot />
    <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: '#4A5568', lineHeight: 1.6 }}>{children}</span>
  </div>
);

const SecH = ({ num, title, id }) => (
  <div id={id}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
      <span style={{ background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 800, fontSize: 11, padding: '3px 10px', borderRadius: 3, flexShrink: 0, whiteSpace: 'nowrap' }}>{num}</span>
      <h2 style={H2B}>{title}</h2>
    </div>
    <div style={{ borderBottom: '2px solid rgba(255,87,34,0.15)', marginBottom: 16 }} />
  </div>
);

const PrivacyPolicyPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const schemas = useMemo(() => [
    { id: 'breadcrumb-schema', data: { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fixitbay.net" }, { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://fixitbay.net/privacy-policy" }] } }
  ], []);
  useSchemas(schemas);

  const secStyle = { marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(0,0,0,0.07)' };
  const lastSec = { marginBottom: 0 };

  return (
    <>
      <SEOMetaTags
        title="Privacy Policy | FixitBay LLC Appliance Repair & Maintenance"
        description="Privacy Policy for FixitBay LLC Appliance Repair & Maintenance – learn how we collect, use, and protect your information when you contact us for appliance repair in San Francisco, Peninsula, and Marin County."
        canonical="https://fixitbay.net/privacy-policy"
        noindex={true}
      />
      <div style={{ fontFamily: F }}>
        <style>{`
          .pp-h1{font-size:36px !important}
          @media(max-width:767px){
            .pp-h1{font-size:24px !important}
            .pp-grid{grid-template-columns:1fr !important}
          }
          .toc-link{transition:color 0.15s}.toc-link:hover{color:#FF5722 !important}
          .phone-cta:hover{background:#FF7043 !important}
          .email-cta:hover{background:rgba(255,255,255,0.06) !important}
        `}</style>

        {/* ━━━ 1. HERO ━━━ */}
        <section data-testid="privacy-hero" style={{ background: '#0D1B2A', minHeight: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px', color: '#fff', borderBottom: '3px solid #FF5722' }}>
          <div style={{ textAlign: 'center' }}>
            <nav style={{ fontFamily: F, fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</a>
              <span style={{ color: '#FF5722', margin: '0 6px' }}>&rarr;</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Privacy Policy</span>
            </nav>
            <h1 className="pp-h1" data-testid="privacy-title" style={{ fontFamily: F, fontWeight: 800, color: '#fff', marginBottom: 8 }}>Privacy Policy</h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>FixitBay LLC Appliance Repair &amp; Maintenance</p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Effective date: December 24, 2025</span>
              <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>&middot;</span>
              <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Last updated: December 24, 2025</span>
            </div>
          </div>
        </section>

        {/* ━━━ 2. DOCUMENT LAYOUT ━━━ */}
        <section style={{ background: '#F8F5F0', padding: '56px 24px' }}>
          <div className="pp-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '72% 28%', gap: 40, alignItems: 'start' }}>

            {/* ━━━ 3. LEFT — DOCUMENT CONTENT ━━━ */}
            <article data-testid="privacy-content" style={{ background: '#fff', borderRadius: 4, padding: '40px 44px', border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
              {/* Intro */}
              <p style={{ ...P, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                FixitBay LLC Appliance Repair ({'\u201C'}FixitBay,{'\u201D'} {'\u201C'}we,{'\u201D'} {'\u201C'}us,{'\u201D'} or {'\u201C'}our{'\u201D'}) respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you interact with us, including through our website, ads (including lead forms), phone calls, texts, and email.
              </p>

              {/* Section 1 */}
              <div style={secStyle}>
                <SecH num="01" id="section-1" title="Information We Collect" />
                <p style={{ ...P, marginBottom: 12 }}>We may collect the following types of information:</p>
                <p style={SUB}>A. Information You Provide</p>
                <Li>Contact details: name, phone number, email address</Li>
                <Li>Service details: service address or ZIP code, appliance type, problem description, preferred time/date</Li>
                <Li>Messages you send us (via forms, SMS, email, or platform messaging)</Li>
                <p style={{ ...SUB, marginTop: 20 }}>B. Information Collected Automatically (Website)</p>
                <Li>Basic usage data such as IP address, device/browser type, and pages visited</Li>
                <Li>Cookies or similar technologies (see Section 6)</Li>
                <p style={{ ...SUB, marginTop: 20 }}>C. Information from Third Parties</p>
                <Li>Lead information from advertising/lead platforms when you submit a form</Li>
                <Li>Scheduling/invoicing/customer management data if you interact with our CRM</Li>
              </div>

              {/* Section 2 */}
              <div style={secStyle}>
                <SecH num="02" id="section-2" title="How We Use Your Information" />
                <p style={{ ...P, marginBottom: 12 }}>We use your information to:</p>
                <Li>Respond to your requests and provide estimates or service</Li>
                <Li>Schedule visits, confirm appointments, and send service updates</Li>
                <Li>Communicate by phone, text, or email about your service request</Li>
                <Li>Improve our services, website, and marketing effectiveness</Li>
                <Li>Prevent fraud, abuse, or spam leads</Li>
                <Li>Comply with legal obligations and enforce our terms</Li>
              </div>

              {/* Section 3 */}
              <div style={secStyle}>
                <SecH num="03" id="section-3" title="How We Share Your Information" />
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(255,87,34,0.06)', borderLeft: '3px solid #FF5722', borderRadius: 4, padding: '12px 16px', marginBottom: 12 }}>
                  <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 16 }}>{'\u2713'}</span>
                  <span style={{ ...B, fontSize: 14 }}>We do not sell your personal information.</span>
                </div>
                <p style={{ ...P, marginBottom: 12 }}>We may share information only as needed with:</p>
                <Li>Service providers who help us operate (CRM tools, hosting, analytics, communications providers, payment processors)</Li>
                <Li>Advertising/lead platforms to receive your submitted lead and measure ad performance</Li>
                <Li>Legal/Compliance: if required by law, court order, or to protect rights and safety</Li>
              </div>

              {/* Section 4 */}
              <div style={secStyle}>
                <SecH num="04" id="section-4" title="Data Retention" />
                <p style={{ ...P, marginBottom: 12 }}>We keep personal information only as long as reasonably necessary for:</p>
                <Li>Providing service and support</Li>
                <Li>Maintaining business records (invoices, warranties, taxes)</Li>
                <Li>Resolving disputes and enforcing agreements</Li>
              </div>

              {/* Section 5 */}
              <div style={secStyle}>
                <SecH num="05" id="section-5" title="Data Security" />
                <p style={P}>We use reasonable safeguards to protect your information. However, no method of transmission or storage is 100% secure.</p>
              </div>

              {/* Section 6 */}
              <div style={secStyle}>
                <SecH num="06" id="section-6" title="Cookies & Analytics (Website)" />
                <p style={{ ...P, marginBottom: 12 }}>Our website may use cookies or similar technologies to:</p>
                <Li>Make the site function properly</Li>
                <Li>Understand traffic and improve performance</Li>
                <p style={{ ...P, marginTop: 12 }}>You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>
              </div>

              {/* Section 7 */}
              <div style={secStyle}>
                <SecH num="07" id="section-7" title="Communications, Calls, and Text Messages (SMS)" />
                <p style={{ ...P, marginBottom: 8 }}>If you contact us by phone or text, we may communicate with you using the number you provide.</p>
                <p style={{ ...P, marginBottom: 8 }}>By providing your phone number, you agree we may contact you by call or text about your service request and appointment updates.</p>
                <p style={{ ...P, marginBottom: 8 }}>We do not send marketing texts unless you explicitly opt in.</p>
                <p style={{ ...P, marginBottom: 8 }}>You can stop texts at any time by replying <span style={{ fontFamily: F, fontWeight: 800, background: 'rgba(255,87,34,0.1)', color: '#FF5722', padding: '1px 8px', borderRadius: 3, display: 'inline-block' }}>STOP</span>.</p>
                <p style={P}>Message and data rates may apply.</p>
              </div>

              {/* Section 8 */}
              <div style={secStyle}>
                <SecH num="08" id="section-8" title="Your Privacy Rights (California)" />
                <p style={P}>If you are a <strong style={B}>California resident</strong>, you may have rights to request access, correction, or deletion of certain personal information. To make a request, contact us using the details below. We may need to verify your identity.</p>
              </div>

              {/* Section 9 */}
              <div style={secStyle}>
                <SecH num="09" id="section-9" title="Children's Privacy" />
                <p style={P}>Our services are not directed to children under 13, and we do not knowingly collect personal information from children.</p>
              </div>

              {/* Section 10 */}
              <div style={secStyle}>
                <SecH num="10" id="section-10" title="Changes to This Policy" />
                <p style={P}>We may update this Privacy Policy from time to time. We will post the updated version on this page and update the {'\u201C'}Last updated{'\u201D'} date.</p>
              </div>

              {/* Section 11 */}
              <div style={lastSec}>
                <SecH num="11" id="section-11" title="Contact Us" />
                <div data-testid="contact-card" style={{ background: '#0D1B2A', borderRadius: 4, padding: '24px 28px', borderTop: '3px solid #FF5722' }}>
                  <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 16 }}>FixitBay LLC Appliance Repair &amp; Maintenance</p>
                  {[
                    { label: 'Phone', value: '(760) 543-5733', href: 'tel:7605435733', accent: true },
                    { label: 'Email', value: 'info@fixitbay.net', href: 'mailto:info@fixitbay.net', accent: true },
                    { label: 'Area', value: 'San Francisco, Peninsula & Marin County' },
                    { label: 'Website', value: 'https://fixitbay.net', href: 'https://fixitbay.net', accent: true },
                  ].map((r, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ fontFamily: F, fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.5)', minWidth: 80 }}>{r.label}</span>
                      {r.href ? (
                        <a href={r.href} style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: r.accent ? '#FF5722' : 'rgba(255,255,255,0.82)', textDecoration: 'none' }}>{r.value}</a>
                      ) : (
                        <span style={{ fontFamily: F, fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.82)' }}>{r.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* ━━━ 4. RIGHT — STICKY SIDEBAR ━━━ */}
            <aside data-testid="sidebar" style={{ position: 'sticky', top: 80 }}>
              {/* Widget 1: TOC */}
              <div style={{ background: '#fff', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.2)', borderTop: '3px solid #FF5722' }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Contents</p>
                {TOC.map((t, i) => (
                  <a key={t.id} href={`#${t.id}`} className="toc-link" style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', textDecoration: 'none', alignItems: 'center' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,87,34,0.1)', color: '#FF5722', fontFamily: F, fontWeight: 800, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: '#4A5568' }}>{t.label}</span>
                  </a>
                ))}
              </div>

              {/* Widget 2: Key Highlights */}
              <div style={{ background: '#F8F5F0', borderRadius: 4, padding: 20, border: '1px solid rgba(255,87,34,0.15)', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#1A1A1A', paddingBottom: 12, borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 14 }}>Key Points</p>
                {[
                  'We never sell your personal information',
                  'Text STOP anytime to opt out of SMS',
                  'California residents have data rights',
                  'Cookies can be controlled in browser settings',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ color: '#FF5722', fontFamily: F, fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>{'\u2713'}</span>
                    <span style={{ fontFamily: F, fontWeight: 500, fontSize: 12, color: '#4A5568', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Widget 3: Contact */}
              <div style={{ background: '#0D1B2A', borderRadius: 4, padding: 20, borderTop: '3px solid #FF5722', marginTop: 20 }}>
                <p style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 6 }}>Questions?</p>
                <p style={{ fontFamily: F, fontWeight: 400, fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>Contact us about your privacy rights.</p>
                <a href="tel:7605435733" className="phone-cta" data-testid="sidebar-phone" style={{ display: 'block', background: '#FF5722', color: '#fff', fontFamily: F, fontWeight: 700, fontSize: 13, padding: 11, borderRadius: 4, textAlign: 'center', textDecoration: 'none', transition: 'background 0.2s' }}>(760) 543-5733</a>
                <a href="mailto:info@fixitbay.net" className="email-cta" style={{ display: 'block', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontFamily: F, fontWeight: 700, fontSize: 13, padding: 11, borderRadius: 4, textAlign: 'center', textDecoration: 'none', marginTop: 8, transition: 'background 0.2s' }}>info@fixitbay.net</a>
              </div>
            </aside>
          </div>
        </section>

        {/* ━━━ 5. FOOTER ━━━ */}
        <footer data-testid="privacy-footer" style={{ background: '#0D1B2A', borderTop: '1px solid rgba(255,87,34,0.2)', padding: '20px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <img src={navbarLogo} alt="FixitBay" style={{ height: 28, width: 'auto' }} />
            <a href="tel:7605435733" style={{ fontFamily: F, fontWeight: 700, fontSize: 13, color: '#FF5722', textDecoration: 'none' }}>(760) 543-5733</a>
            <a href="/terms" style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Terms of Service</a>
            <span style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>&copy; 2026 FixitBay LLC. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
