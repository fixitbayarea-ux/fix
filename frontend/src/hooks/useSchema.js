import { useEffect } from 'react';

/**
 * Injects JSON-LD schema scripts into <head> via useEffect.
 * Bypasses react-helmet-async which is broken with React 19.
 * 
 * @param {string} id - Unique ID for the script tag (for cleanup)
 * @param {Object|null} data - The JSON-LD schema object, or null to skip
 */
export function useSchema(id, data) {
  useEffect(() => {
    if (!data) return;
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [id, data]);
}

/**
 * Injects multiple schemas at once.
 * @param {Array<{id: string, data: Object}>} schemas
 */
export function useSchemas(schemas) {
  useEffect(() => {
    const ids = [];
    schemas.forEach(({ id, data }) => {
      if (!data) return;
      const existing = document.getElementById(id);
      if (existing) existing.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      ids.push(id);
    });

    return () => {
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [schemas]);
}
