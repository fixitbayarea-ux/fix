import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const useCMSContent = (slug) => {
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || !API_URL) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    
    fetch(`${API_URL}/api/cms/service-pages/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('CMS fetch failed');
        return res.json();
      })
      .then(data => {
        if (!cancelled && data.success && data.data) {
          setCmsData(data.data);
        }
      })
      .catch(() => {
        // Silently fall back to hardcoded content
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [slug]);

  return { cmsData, loading };
};

export default useCMSContent;
