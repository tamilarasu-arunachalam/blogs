# Modern Premium Jekyll Blog Walkthrough

You now have a production-ready Jekyll structure designed for high conversion, readability, and SEO. Here is a guide to managing your new blog.

## 📁 Key File Structure
- `_config.yml`: Global settings (site title, SEO defaults, pagination count).
- `_layouts/`: Page wrappers. Use `default.html` for regular pages and `post.html` for blog articles.
- `_includes/`: Reusable modules (Navbar, Footer, Email Capture, Affiliate Table).
- `_posts/`: Where your content lives. Posts use Markdown with Front Matter headers.
- `_data/`: Centralized YAML data for affiliate tables and projects.
- `assets/css/style.css`: The "Modern & Premium" design system using CSS variables.

## 🚀 Creating Content

### Adding a New Post
Create a file in `_posts/` with the format `YYYY-MM-DD-title.md`. Ensure the front matter is correctly set:
```markdown
---
layout: post
title: "Your Post Title"
date: 2026-04-01 12:00:00 +0530
category: Tech Insights
image: "/assets/images/your-image.png"
description: "Brief summary for SEO meta tags"
read_time: "5 min read"
---
```

### Using Affiliate Comparison Tables
To add a premium comparison table, use the Liquid include tag and pass the data from your `_data/comparisons.yml`:
```liquid
{% include affiliate-table.html items=site.data.comparisons.laptops %}
```

## 🔍 SEO & Revenue Features
- **JSON-LD Schema**: Automatically generated for every post and the homepage for better Google Search snippets.
- **Chrome Extension Promotion**: A pre-built "Call to Action" section is included at the bottom of every blog post.
- **Pagination**: Configured to show 5 posts per page. Links are automatically generated as you add more content.

## 🛠️ How to View Locally
Since this is a Jekyll site, you can preview it by running:
```bash
bundle exec jekyll serve
```
*Note: Ensure you have Ruby and Jekyll installed on your system.*

## 🎨 Premium Visual Elements
I have generated several high-resolution assets to give your site an immediate professional feel:
- **Featured Workspace Image**: Saved to `assets/images/featured.png`.
- **Chrome Extension Icon**: Saved to `assets/images/chrome-icon.png`.

---
> [!TIP]
> To change the look of the comparison tables, simply update the entry in `_data/comparisons.yml`. The UI will update across all posts using that table!
