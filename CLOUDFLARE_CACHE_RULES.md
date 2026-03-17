# Cloudflare Cache Configuration for PSI Optimization

## 🎯 **Objective**
Configure aggressive caching for hashed static assets to improve PageSpeed Insights score and reduce bandwidth.

---

## 📋 **Cloudflare Page Rules (Recommended)**

If you're using Cloudflare, set up these Page Rules for optimal caching:

### **Rule 1: Static Assets (Hashed) - Aggressive Cache**
**URL Pattern:** `*fixitbay.net/static/*`

**Settings:**
- **Browser Cache TTL:** 1 year
- **Cache Level:** Cache Everything
- **Edge Cache TTL:** 1 month

**Why:** Files in `/static/js/*` and `/static/css/*` have content-based hashes in filenames (e.g., `main.46bb8c0e.js`). When content changes, filename changes, so we can cache aggressively without risk of stale content.

---

### **Rule 2: HTML Files - Short Cache**
**URL Pattern:** `*fixitbay.net/*.html`

**Settings:**
- **Browser Cache TTL:** Respect Existing Headers
- **Cache Level:** Cache Everything
- **Edge Cache TTL:** 2 hours

**Why:** HTML files need shorter cache to ensure users get updates quickly when you deploy new content.

---

### **Rule 3: Root & Index - Short Cache**
**URL Pattern:** `fixitbay.net/` or `*fixitbay.net`

**Settings:**
- **Browser Cache TTL:** 4 hours
- **Cache Level:** Cache Everything
- **Edge Cache TTL:** 2 hours

---

## 🛠️ **Alternative: Nginx Configuration**

If you're NOT using Cloudflare, add this to your nginx config:

```nginx
# Cache static assets with hash in filename
location ~* ^/static/(js|css|media)/.*\.(js|css|webp|avif|jpg|png|svg)$ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# Short cache for HTML
location ~* \.html$ {
    add_header Cache-Control "public, max-age=0, must-revalidate";
}

# Root index - short cache
location = / {
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
```

Reload nginx: `sudo nginx -t && sudo nginx -s reload`

---

## ✅ **Verification**

After applying rules, test with:

```bash
# Check static asset headers
curl -I https://fixitbay.net/static/js/main.46bb8c0e.js | grep -i cache-control

# Expected: Cache-Control: public, max-age=31536000, immutable

# Check HTML headers
curl -I https://fixitbay.net/ | grep -i cache-control

# Expected: Cache-Control: public, max-age=0, must-revalidate
```

---

## 📊 **Expected PSI Impact**

- **Before:** "Serve static assets with an efficient cache policy" warning (~21 KiB potential savings)
- **After:** ✅ Warning removed, improved repeat visit performance

---

## ⚠️ **Important Notes**

1. **Only** use `immutable` + `max-age=31536000` for files with **hashes** in filename
2. **Never** use long cache for non-hashed files (HTML, sitemap.xml, robots.txt)
3. CRA already adds hashes to JS/CSS/media files during build
4. If you update your site, old cached files won't be served (filename hash changes)

---

## 🆘 **Troubleshooting**

**Problem:** Users see old version after deploy
- **Cause:** HTML is cached too aggressively
- **Fix:** Reduce HTML cache TTL to 0 or use `must-revalidate`

**Problem:** PSI still shows cache warning
- **Cause:** Headers not applied correctly
- **Fix:** Check curl command above, verify headers are actually sent

---

**Last Updated:** Jan 2025
**Status:** Ready for production
