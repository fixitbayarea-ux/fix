import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const HomeButton = () => {
  const goBack = () => {
    if (document.referrer && document.referrer.includes(window.location.host)) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };
  return (
    <motion.a
      href="#"
      onClick={(e)=>{ e.preventDefault(); goBack(); }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="back-button fixed top-20 left-6 z-40 back-btn"
    >
      <svg viewBox="0 0 24 24" fill="none"><path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      <span>Back</span>
    </motion.a>
  );
};

export default HomeButton;