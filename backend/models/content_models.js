// Content Management System - Database Models
// MongoDB collections for managing all content

// Content types
export const CONTENT_TYPES = {
  SERVICE_PAGE: 'service_page',
  CITY_PAGE: 'city_page',
  BLOG_POST: 'blog_post',
  FAQ: 'faq',
  REVIEW: 'review',
  IMAGE: 'image',
  SEO_META: 'seo_meta'
};

// Service Page Model
export const ServicePageSchema = {
  id: String,  // e.g., 'refrigerator-repair'
  title: String,
  subtitle: String,  // e.g., 'San Francisco & Bay Area'
  meta_title: String,
  meta_description: String,
  h1: String,
  hero_image: String,  // URL or path
  intro_paragraphs: [String],  // Array of paragraphs
  common_problems: [{
    title: String,
    description: String
  }],
  brands: [String],
  faqs: [{
    question: String,
    answer: String
  }],
  how_it_works_steps: [{
    step_number: Number,
    title: String,
    description: String
  }],
  internal_links: [String],
  is_published: Boolean,
  created_at: Date,
  updated_at: Date
};

// City Page Model
export const CityPageSchema = {
  id: String,  // e.g., 'san-francisco'
  name: String,
  slug: String,
  region: String,  // 'San Francisco', 'Peninsula', 'North Bay'
  meta_title: String,
  meta_description: String,
  h1: String,
  intro_text: String,
  services_offered: [String],
  why_choose_section: [{
    title: String,
    content: String
  }],
  brands_list: [String],
  is_published: Boolean,
  created_at: Date,
  updated_at: Date
};

// Blog Post Model
export const BlogPostSchema = {
  id: String,
  title: String,
  slug: String,
  author: String,
  featured_image: String,
  excerpt: String,
  content: String,  // Rich HTML content
  categories: [String],
  tags: [String],
  meta_title: String,
  meta_description: String,
  is_published: Boolean,
  publish_date: Date,
  created_at: Date,
  updated_at: Date
};

// FAQ Model
export const FAQSchema = {
  id: String,
  question: String,
  answer: String,
  category: String,  // e.g., 'general', 'refrigerator', 'washer'
  page_id: String,  // Which page this FAQ belongs to
  order: Number,
  is_published: Boolean,
  created_at: Date,
  updated_at: Date
};

// Image/Media Model
export const MediaSchema = {
  id: String,
  filename: String,
  original_name: String,
  file_path: String,
  file_url: String,
  file_type: String,  // 'image/jpeg', 'image/png', etc.
  file_size: Number,
  width: Number,
  height: Number,
  alt_text: String,
  caption: String,
  uploaded_by: String,
  uploaded_at: Date
};

// SEO Meta Model
export const SEOMetaSchema = {
  id: String,
  page_url: String,
  title: String,
  description: String,
  canonical_url: String,
  og_title: String,
  og_description: String,
  og_image: String,
  twitter_card: String,
  keywords: [String],
  robots: String,  // 'index,follow', etc.
  updated_at: Date
};
