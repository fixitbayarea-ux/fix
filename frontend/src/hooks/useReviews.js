import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const useReviews = (featuredOnly = false) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!API_URL) { setLoading(false); return; }
    
    const endpoint = featuredOnly 
      ? `${API_URL}/api/cms/reviews/featured`
      : `${API_URL}/api/cms/reviews`;

    fetch(endpoint)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        if (data.success && data.data) {
          setReviews(data.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [featuredOnly]);

  return { reviews, loading };
};

export default useReviews;
