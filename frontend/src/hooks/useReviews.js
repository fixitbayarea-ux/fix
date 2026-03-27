import { useState, useEffect } from 'react';
import staticReviews from '../data/reviewsData';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const useReviews = (featuredOnly = false) => {
  const [reviews, setReviews] = useState(staticReviews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!API_URL) return;

    const endpoint = featuredOnly
      ? `${API_URL}/api/cms/reviews/featured`
      : `${API_URL}/api/cms/reviews`;

    setLoading(true);
    fetch(endpoint)
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setReviews(data.data);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [featuredOnly]);

  return { reviews, loading };
};

export default useReviews;
