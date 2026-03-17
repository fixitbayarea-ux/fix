#!/usr/bin/env node

/**
 * Post-build script to update preload paths with hashed filenames
 * Runs after webpack build to inject correct asset paths into index.html
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(__dirname, '..', 'build');
const INDEX_HTML = path.join(BUILD_DIR, 'index.html');
const MEDIA_DIR = path.join(BUILD_DIR, 'static', 'media');

console.log('🔄 Updating preload paths with hashed filenames...');

try {
  // Read index.html
  let html = fs.readFileSync(INDEX_HTML, 'utf8');
  
  // Get all files in static/media
  const mediaFiles = fs.readdirSync(MEDIA_DIR);
  
  // Find hashed filenames for critical assets
  const assets = {
    'hero-bg-640.avif': mediaFiles.find(f => f.startsWith('hero-bg-640.') && f.endsWith('.avif')),
    'hero-bg-640.webp': mediaFiles.find(f => f.startsWith('hero-bg-640.') && f.endsWith('.webp')),
    'hero-bg-960.avif': mediaFiles.find(f => f.startsWith('hero-bg-960.') && f.endsWith('.avif')),
    'hero-bg-1280.avif': mediaFiles.find(f => f.startsWith('hero-bg-1280.') && f.endsWith('.avif')),
    'hero-bg-1920.avif': mediaFiles.find(f => f.startsWith('hero-bg-1920.') && f.endsWith('.avif')),
    'logo-256.avif': mediaFiles.find(f => f.startsWith('logo-256.') && f.endsWith('.avif')),
  };
  
  // Replace placeholder paths with hashed paths
  Object.entries(assets).forEach(([placeholder, hashedName]) => {
    if (hashedName) {
      const oldPath = `/static/media/${placeholder}`;
      const newPath = `/static/media/${hashedName}`;
      html = html.replace(new RegExp(oldPath, 'g'), newPath);
      console.log(`✓ Updated: ${placeholder} → ${hashedName}`);
    } else {
      console.warn(`⚠ Warning: Could not find hashed file for ${placeholder}`);
    }
  });
  
  // Write updated HTML
  fs.writeFileSync(INDEX_HTML, html, 'utf8');
  console.log('✅ Preload paths updated successfully!');
  
} catch (error) {
  console.error('❌ Error updating preload paths:', error.message);
  process.exit(1);
}
