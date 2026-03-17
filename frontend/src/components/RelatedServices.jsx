import React, { useEffect, useMemo, useState } from 'react';
import './RelatedServices.css';

const CARD_INDEX = {
  'refrigerator': { title: 'Refrigerator Repair', url: '/refrigerator-repair', alt: 'Technician repairing refrigerator in San Francisco', img: 'refrigerator' },
  'washer-dryer': { title: 'Washer & Dryer Repair', url: '/washer-repair', alt: 'Washer and dryer service in laundry room', img: 'washer-dryer' },
  'dryer': { title: 'Dryer Repair', url: '/dryer-repair', alt: 'Technician fixing home dryer', img: 'dryer' },
  'dishwasher': { title: 'Dishwasher Repair', url: '/dishwasher-repair', alt: 'Technician repairing dishwasher', img: 'dishwasher' },
  'oven-stove': { title: 'Oven & Stove Repair', url: '/oven-repair', alt: 'Oven and stove service', img: 'oven-stove' },
  'cooktop': { title: 'Cooktop Repair', url: '/cooktop-repair', alt: 'Cooktop element replacement', img: 'cooktop' },
  'ice-maker': { title: 'Ice Maker Repair', url: '/ice-maker-repair', alt: 'Ice maker service', img: 'ice-maker' },
  'wine-fridge': { title: 'Wine Fridge Repair', url: '/wine-fridge-repair', alt: 'Wine cooler maintenance', img: 'wine-fridge' },
  'garbage-disposal': { title: 'Garbage Disposal Repair', url: '/garbage-disposal-repair', alt: 'Kitchen disposal repair', img: 'garbage-disposal' },
  'commercial': { title: 'Commercial Appliance Repair', url: '/commercial-appliance-repair', alt: 'Commercial kitchen equipment repair', img: 'commercial' },
  'residential': { title: 'Residential Appliance Repair', url: '/residential-appliance-repair', alt: 'Home appliance repair service', img: 'residential' }
};

const ROUTE_MAP = {
  '/refrigerator-repair': ['washer-dryer','dryer','dishwasher','oven-stove'],
  '/washer-repair': ['refrigerator','dryer','oven-stove','dishwasher'],
  '/dryer-repair': ['washer-dryer','refrigerator','dishwasher','cooktop'],
  '/dishwasher-repair': ['refrigerator','oven-stove','washer-dryer','cooktop'],
  '/oven-repair': ['refrigerator','dishwasher','washer-dryer','cooktop'],
  '/stove-repair': ['refrigerator','dishwasher','washer-dryer','cooktop'],
  '/cooktop-repair': ['oven-stove','refrigerator','dishwasher','washer-dryer'],
  '/ice-maker-repair': ['refrigerator','dishwasher','washer-dryer','dryer'],
  '/wine-fridge-repair': ['refrigerator','ice-maker','dryer','dishwasher'],
  '/commercial-appliance-repair': ['refrigerator','washer-dryer','dryer','dishwasher'],
  '/residential-appliance-repair': ['refrigerator','dishwasher','oven-stove','washer-dryer']
};

export default function RelatedServices({ cityName }){
  const [loaded, setLoaded] = useState(0);
  const [fallbacks, setFallbacks] = useState([]);
  const [route, setRoute] = useState('/');

  useEffect(() => { setRoute(window.location.pathname); }, []);

  const keys = ROUTE_MAP[route] || ['refrigerator','washer-dryer','dryer','dishwasher'];
  const cards = useMemo(() => keys.map(k => CARD_INDEX[k]).filter(Boolean), [keys]);

  useEffect(() => {
  }, [loaded, fallbacks, cards.length]);

  return (
    <div className="rs-grid">
      {cards.map(card => (
        <article className="rs-card" key={card.url}>
          <div className="rs-img">
            <picture>
              <source srcSet={`/ai/services/${card.img}.webp`} type="image/webp" />
              <img
                src={`/ai/services/${card.img}.jpg`}
                alt={card.alt}
                loading="lazy"
                width="320" height="200"
                onLoad={() => setLoaded(v => v+1)}
                onError={(e)=>{ if(!e.currentTarget.dataset.fallback){ e.currentTarget.dataset.fallback=1; e.currentTarget.src='/ai/services/placeholder.jpg'; setFallbacks(arr=>[...arr, card.img]); }}}
              />
            </picture>
          </div>
          <h3 className="rs-title">{card.title}</h3>
          <p className="rs-sub">Fast Same/Next Day Service</p>
          <a className="rs-btn" href={card.url} aria-label={`Learn more about ${card.title}`}>Learn More</a>
        </article>
      ))}
    </div>
  );
}
