// Custom illustrated icons for "How It Works" section
// Consistent style: modern, rounded, 2px stroke, navy blue theme

import React from 'react';

// Icon 1: Book Online - Clipboard with calendar and checkmark
export const IconBookOnline = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clipboard */}
    <rect x="10" y="8" width="28" height="34" rx="3" stroke="#1A3B5D" strokeWidth="2" fill="#EFF6FF"/>
    {/* Calendar header */}
    <rect x="10" y="8" width="28" height="8" fill="#3B82F6" opacity="0.2"/>
    {/* Calendar dots */}
    <circle cx="16" cy="12" r="1.5" fill="#1A3B5D"/>
    <circle cx="24" cy="12" r="1.5" fill="#1A3B5D"/>
    <circle cx="32" cy="12" r="1.5" fill="#1A3B5D"/>
    {/* Calendar grid */}
    <line x1="14" y1="20" x2="20" y2="20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="20" x2="30" y2="20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="20" y2="26" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="26" x2="30" y2="26" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    {/* Checkmark */}
    <circle cx="34" cy="34" r="8" fill="#10B981" opacity="0.9"/>
    <path d="M30 34l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icon 2: Technician Arrives - Wrench with toolbox
export const IconTechnicianArrives = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Toolbox base */}
    <rect x="8" y="22" width="32" height="18" rx="2" stroke="#1A3B5D" strokeWidth="2" fill="#EFF6FF"/>
    {/* Toolbox handle */}
    <path d="M18 22 V18 Q18 14 22 14 H26 Q30 14 30 18 V22" stroke="#1A3B5D" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Toolbox latch */}
    <circle cx="24" cy="28" r="2" fill="#3B82F6"/>
    {/* Wrench */}
    <g transform="translate(26, 4) rotate(45 8 8)">
      <rect x="3" y="10" width="4" height="12" rx="1" fill="#3B82F6" stroke="#1A3B5D" strokeWidth="1.5"/>
      <circle cx="5" cy="6" r="4" fill="none" stroke="#1A3B5D" strokeWidth="2"/>
      <circle cx="5" cy="6" r="2" fill="#EFF6FF"/>
    </g>
    {/* Tools accent */}
    <line x1="14" y1="32" x2="20" y2="32" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
    <line x1="28" y1="32" x2="34" y2="32" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icon 3: Quick Diagnosis - Magnifying glass with checklist
export const IconQuickDiagnosis = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document */}
    <rect x="8" y="6" width="24" height="32" rx="2" stroke="#1A3B5D" strokeWidth="2" fill="#EFF6FF"/>
    {/* Checklist items */}
    <circle cx="14" cy="14" r="2" fill="#10B981"/>
    <path d="M12 14l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="14" x2="26" y2="14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    
    <circle cx="14" cy="22" r="2" fill="#10B981"/>
    <path d="M12 22l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="22" x2="26" y2="22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
    
    <circle cx="14" cy="30" r="2" fill="#3B82F6" opacity="0.3"/>
    <line x1="20" y1="30" x2="26" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Magnifying glass */}
    <circle cx="34" cy="28" r="8" fill="#3B82F6" opacity="0.1" stroke="#1A3B5D" strokeWidth="2.5"/>
    <line x1="39" y1="33" x2="44" y2="38" stroke="#1A3B5D" strokeWidth="3" strokeLinecap="round"/>
    <path d="M32 26l2 2 3-3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icon 4: Professional Repair - Shield with checkmark and tools
export const IconProfessionalRepair = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path d="M24 6 L38 12 L38 24 Q38 34 24 42 Q10 34 10 24 L10 12 Z" 
          fill="#EFF6FF" stroke="#1A3B5D" strokeWidth="2.5" strokeLinejoin="round"/>
    {/* Shield gradient accent */}
    <path d="M24 6 L38 12 L38 24 Q38 34 24 42 Q10 34 10 24 L10 12 Z" 
          fill="url(#shieldGradient)" opacity="0.3"/>
    <defs>
      <linearGradient id="shieldGradient" x1="24" y1="6" x2="24" y2="42">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#10B981"/>
      </linearGradient>
    </defs>
    {/* Large checkmark */}
    <path d="M16 24l6 6 10-12" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Small wrench accent */}
    <g opacity="0.6">
      <circle cx="18" cy="14" r="2" stroke="#1A3B5D" strokeWidth="1.5" fill="none"/>
      <rect x="17" y="16" width="2" height="4" rx="0.5" fill="#3B82F6"/>
    </g>
    {/* Star accent */}
    <circle cx="30" cy="14" r="1.5" fill="#F59E0B"/>
  </svg>
);
