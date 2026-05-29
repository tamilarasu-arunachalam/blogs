# TechBlog - Premium Developer & Affiliate Jekyll Blog

A high-performance, modern Jekyll blog designed specifically for technical creators, product reviewers, and affiliate marketers. This theme is optimized for high readability, clean SEO, and maximum engagement.

## 🚀 Quick Start

### 1. Installation
Install Ruby and Bundler, then run:
```bash
bundle install
```

### 2. Live Development
Run the local server to see changes in real-time:
```bash
bundle exec jekyll serve
```
Site access: `http://localhost:4000/blogs/`

---

## ✍️ Writing a New Blog Post

All posts live in the `_posts/` directory. Filenames **must** follow the format `YYYY-MM-DD-filename.md` (e.g., `2026-04-01-my-tech-stack.md`).

### Post Front Matter (Template)
Every post should start with this exact configuration block:

```markdown
---
layout: post
title: "Title of your Blog"
date: 2026-04-01 12:00:00 +0530
category: Main Category
categories: [Primary, Secondary]
pinned: false
meta_description: "A summary for Google search results (160 characters max)."
meta_keywords: [keyword1, keyword2]
image: "https://your-image-url.jpg"
read_time: "8 min read"
---
```

### 💎 Exclusive Features & Shortcodes

- **📌 Pinned Posts**: Set `pinned: true` in any post to make it stay at the top of the homepage list permanently.
- **🔗 Clean URLs**: Your URLs are now automatically formatted as `yourdomain.com/post-title.html` for better SEO and clean sharing.
- **🧭 Live Category Filter**: The home page features a real-time JavaScript filter. Simply adding a new category to a post will automatically add a filter button to the list.
- **🗂️ Table of Contents**: Use the `topics:` field in the front matter to generate a professional TOC at the top of your post.
- **💡 Smart Related Posts**: The bottom of every post now features a 3-grid "You might also like" section, which intelligently pulls articles from the same category.
- **❓ FAQ Accordion**: Use the `faq:` field in the front matter to include a professional FAQ section at the end of your content.
- **💰 Affiliate Tables**: Insert a high-converting comparison table using data from `_data/comparisons/`:
  `{% include affiliate-table.html items=site.data.comparisons.your_file %}`

---

## 🎨 Design System

- **Line Height**: Optimized to **1.7** for a dense but comfortable technical reading experience.
- **Responsive Width**: Post bodies scale from **col-lg-10** to **col-xl-9** on larger screens to maximize sprawl without breaking line length.
- **Glassmorphism**: The mobile menu uses a modern backdrop-blur card design.
- **Icons**: Powered by **Bootstrap Icons**. Use any icon with `<i class="bi bi-ICON-NAME"></i>`.

---

## 📁 Key Directories

- `_posts/`: All Markdown articles.
- `_data/`: YAML files for comparison tables and affiliate products.
- `_layouts/`: Page skeletons (`post.html`, `category.html`, `default.html`).
- `_includes/`: Modular UI components (Navbar, Footer, Related Posts).
- `assets/css/style.css`: The primary design engine.

---

## 🛠️ SEO & Performance Best Practices

1. **Category Flattening**: Use clear, standard categories. The site automatically flattens and unique-sorts them for navigation.
2. **Meta Fields**: Never leave `meta_description` empty; it’s the most important factor for CTR on Google.
3. **Image Logic**: Use the `{% include image.html ... %}` tag for automated lazy loading and placeholder support.

---
Built with ❤️ for performance-driven technical writing.