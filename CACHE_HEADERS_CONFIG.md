# Cache Headers Configuration for Production

## For Static Assets (Webpack/CRA hashed files)

These files have content hashes in their names (e.g., `main.abc123.js`), so they can be cached indefinitely:

### Nginx Configuration

```nginx
location /static/ {
    # JS, CSS, fonts, images with hashes
    location ~ \.(js|css|woff|woff2|ttf|eot|otf)$ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }
    
    # Images with hashes
    location ~ \.(jpg|jpeg|png|gif|webp|svg|ico)$ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }
}

# Root level images (without hashes)
location ~ ^/[^/]+\.(jpg|jpeg|png|gif|webp|svg|ico)$ {
    add_header Cache-Control "public, max-age=86400";  # 1 day
}

# HTML files - short cache
location ~ \.html$ {
    add_header Cache-Control "public, max-age=3600, must-revalidate";  # 1 hour
}

# SPA index.html - no cache
location = /index.html {
    add_header Cache-Control "no-cache, no-store, must-revalidate";
    expires 0;
}

# API routes - no cache
location /api/ {
    add_header Cache-Control "no-store, no-cache, must-revalidate";
}
```

### Apache Configuration (.htaccess)

```apache
<IfModule mod_headers.c>
    # Versioned static assets (with hashes) - long cache
    <FilesMatch "\.(js|css|woff|woff2|ttf|eot|otf)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>
    
    <FilesMatch "\.(jpg|jpeg|png|gif|webp|svg|ico)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>
    
    # HTML - short cache
    <FilesMatch "\.html$">
        Header set Cache-Control "public, max-age=3600, must-revalidate"
    </FilesMatch>
    
    # index.html - no cache
    <Files "index.html">
        Header set Cache-Control "no-cache, no-store, must-revalidate"
        Header set Expires "0"
    </Files>
</IfModule>
```

### Express.js (Node server)

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Static files with long cache
app.use('/static', express.static(path.join(__dirname, 'build/static'), {
    maxAge: '1y',
    immutable: true
}));

// Other static files
app.use(express.static(path.join(__dirname, 'build'), {
    maxAge: '1d',
    setHeaders: (res, path) => {
        if (path.endsWith('index.html')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    }
}));
```

## Verification

Test cache headers with:

```bash
curl -I https://fixitbay.net/static/js/main.abc123.js
curl -I https://fixitbay.net/static/css/main.abc123.css
curl -I https://fixitbay.net/static/media/hero-bg-1920.webp
curl -I https://fixitbay.net/index.html
```

Expected headers:
- Static hashed files: `Cache-Control: public, max-age=31536000, immutable`
- index.html: `Cache-Control: no-cache, no-store, must-revalidate`

## For Kubernetes/Docker

Add to your deployment or nginx config map:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-cache-config
data:
  cache.conf: |
    location /static/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
```

## Current Environment Detection

Since you're using CRA (Create React App):
- Production builds are in `/build` folder
- Static assets are in `/build/static`
- Assets are automatically hashed by Webpack

Apply the appropriate config above based on your hosting:
- **Netlify/Vercel**: Use their config files (netlify.toml / vercel.json)
- **AWS S3/CloudFront**: Set metadata on objects
- **Nginx/Apache**: Use config above
- **Node/Express**: Use middleware above
