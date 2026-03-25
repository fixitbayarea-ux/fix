import React from 'react';

export default function FloatingBookButton(){
  return (
    <a
      href="/book?go=1"
      target="_blank" rel="noopener noreferrer"
      rel="noopener noreferrer"
      className="fxb-fixed-book"
      aria-label="Book Online"
      onClick={() => {
        if (window.gtag) {
          window.gtag('event', 'click_book', { location: 'floating_button' });
        }
      }}
    >
      Easy Book Now
    <span className="sr-only"> (opens in new tab)</span></a>
  );
}
