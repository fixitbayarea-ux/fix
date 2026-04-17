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

/**
 * Injects a validated Article/BlogPosting JSON-LD schema.
 * Validates required fields before injection; logs warning in dev if invalid.
 * Uses id-based upsert: replaces existing script with same id, cleans up on unmount.
 *
 * @param {string} id - Unique script element ID (e.g. "blog-article-schema")
 * @param {Object|null} data - The Article JSON-LD object
 */
const REQUIRED_ARTICLE_FIELDS = ['mainEntityOfPage', 'datePublished', 'dateModified', 'author', 'publisher'];

export function useArticleSchema(id, data) {
  useEffect(() => {
    if (!data) return;

    // Validate required fields
    const missing = REQUIRED_ARTICLE_FIELDS.filter(field => !data[field]);
    if (missing.length > 0) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[useArticleSchema] Skipping injection for "${id}" — missing required fields: ${missing.join(', ')}`);
      }
      return;
    }

    // Id-based upsert: remove existing, then insert fresh
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
