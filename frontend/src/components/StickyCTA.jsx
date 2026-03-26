import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

const MobileBottomBar = () => {
  const location = useLocation();

  const excludedPaths = ['/thank-you-booking', '/llm-info'];

  const [is404, setIs404] = useState(false);
  useEffect(() => {
    const check = () => setIs404(!!document.querySelector('.nf-page'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location.pathname]);

  if (excludedPaths.includes(location.pathname) || is404) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        background: '#1A2F45',
        borderTop: '2px solid #FF5722',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.35)',
      }}
      data-testid="mobile-bottom-bar"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', minHeight: 56 }}>

        <a
          href="tel:+17605435733"
          style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3, color:'rgba(255,255,255,0.9)', textDecoration:'none', borderRight:'1px solid rgba(255,255,255,0.10)', minHeight:56 }}
          data-testid="mobile-bar-call-btn"
          aria-label="Call FixitBay LLC"
        >
          <Phone size={17} color="rgba(255,255,255,0.9)" />
          <span style={{ fontSize:10, fontFamily:'Montserrat,sans-serif', fontWeight:600, letterSpacing:'0.07em' }}>CALL</span>
        </a>

        <a
          href="/book?go=1"
          style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3, background:'#FF5722', color:'#fff', textDecoration:'none', minHeight:56, borderRight:'1px solid rgba(255,255,255,0.15)' }}
          data-testid="mobile-bar-book-btn"
          aria-label="Book appliance repair online"
        >
          <Calendar size={17} color="#fff" />
          <span style={{ fontSize:10, fontFamily:'Montserrat,sans-serif', fontWeight:800, letterSpacing:'0.07em' }}>BOOK ONLINE</span>
        </a>

        <a
          href="sms:7605435733?body=Hi%20FixitBay LLC!%20I%20need%20appliance%20repair."
          style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:3, color:'rgba(255,255,255,0.9)', textDecoration:'none', minHeight:56 }}
          data-testid="mobile-bar-text-btn"
          aria-label="Text FixitBay LLC"
        >
          <MessageSquare size={17} color="rgba(255,255,255,0.9)" />
          <span style={{ fontSize:10, fontFamily:'Montserrat,sans-serif', fontWeight:600, letterSpacing:'0.07em' }}>TEXT US</span>
        </a>

      </div>
    </div>
  );
};

export default MobileBottomBar;
