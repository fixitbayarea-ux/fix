import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="back-button"
      aria-label="Go back to previous page"
      style={{
        background:'#1A3B5D',
        color:'#FFFFFF',
        borderRadius:'999px',
        padding:'10px 22px',
        fontWeight:600,
        fontSize:'14px',
        display:'inline-flex',
        alignItems:'center',
        gap:'8px',
        boxShadow:'0 4px 10px rgba(0,0,0,.18)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#C0362C'}
      onMouseLeave={(e) => e.currentTarget.style.background = '#1A3B5D'}
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
};

export default BackButton;
