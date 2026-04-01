# TechBlog - Premium Developer & Affiliate Blog

A modern, high-performance Jekyll blog designed for technical content, review comparisons, and AdSense optimization.

## 🚀 Getting Started

### 1. Installation
Ensure you have Ruby and Bundler installed.
```bash
bundle install
```

### 2. Run Locally
```bash
bundle exec jekyll serve
```
Access the site at `http://localhost:4000/blogs/`.

---

## ✍️ How to Add a Blog Post

Create a new Markdown file in the `_posts/` directory. The filename must follow the format: `YYYY-MM-DD-title-of-post.md`.

### Post Front Matter (Configuration)
Every post needs "Front Matter" at the top. Here is a baseline template:

```markdown
---
layout: post
title: "The Future of Coding"
date: 2026-04-01 12:00:00 +0530
categories: [Engineering, Career]
pinned: false
meta_description: "A summary for Google search results."
meta_keywords: [coding, career, tech]
image: "https://unsplash.com/your-image-url"
read_time: "5 min read"
---
```

### Special Features
- **Pinned Posts**: Set `pinned: true` to make a post appear at the very top of the homepage in a highlighted view.
- **Topics/TOC**: Use the `topics:` field to generate a jump-link navigation section.
- **FAQ Section**: Use the `faq:` field to add a professional accordion at the bottom.
- **Affiliate Tables**: Drop in a table using `{% include affiliate-table.html items=site.data.comparisons.keyword %}`.

---

## 📄 How to Add a New Page
Create a Markdown file in the root directory (e.g., `projects.md`).
```markdown
---
layout: default
title: My Projects
permalink: /projects/
---
# Your Project Content Here
```

---

## 📁 Key Directories
- `_posts/`: All blog articles.
- `_layouts/`: Page containers (Home vs Post).
- `_includes/`: Reusable components (Navbar, Footer, SEO).
- `_data/`: Centralized data for comparison tables and list items.
- `assets/`: Stylesheets, images, and Javascript.

---

## 🛠️ SEO & Performance Guide
- **Meta Tags**: Always fill `meta_description`. It is the first thing Google crawlers look for.
- **Lazy Loading**: Use the `{% include image.html ... %}` tag for all images to ensure automatic placeholder support and performance optimization.
- **Categories**: Unlike tags, categories are hierarchical. Use standard categories to help readers filter content more effectively.

---
Built with ❤️ for Professionals and Enthusiasts.