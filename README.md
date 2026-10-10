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
description: "A summary for Google search results (160 characters max)."
meta_keywords: [keyword1, keyword2]
image: "https://your-image-url.jpg"
read_time: "8 min read"
---
```

### 💎 Exclusive Features & Shortcodes

- **📌 Pinned Posts**: Set `pinned: true` in any post to make it stay at the top of the homepage list permanently.
- **🔗 Clean URLs**: Your URLs are now automatically formatted as `yourdomain.com/post-title.html` for better SEO and clean sharing.
- **🧭 Live Category Filter**: The home page builds its filter buttons from the distinct `category` values used in published posts. Add a `category` to a new post and its filter option appears on the next site build; `categories` is for secondary tags and does not add filter options.
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

## 🧑‍💻 Content Management System

A custom CMS is available at `/admin/` using Google authentication and GitHub API.

- `admin/index.html`: Launches the custom CMS UI.
- `admin/config.yml`: Not used by this custom admin panel.
- `posts` are managed from `_posts/`.
- Common pages are available as editable files: `about.md`, `contact.md`, `privacy.md`, and `terms.md`.
- Assign each post a unique numeric `post_id` before uploading images. The CMS uses that ID for the asset folder, saving images under `assets/images/<post_id>/` while keeping the post filename based on its date and title.

### How to use it

1. Create a Google OAuth client ID and replace `YOUR_GOOGLE_OAUTH_CLIENT_ID` in `admin/index.html`.
2. Open `/admin/` in your browser.
3. Sign in with Google.
4. Paste a GitHub personal access token with `repo` scope.
5. Select a file, edit the content, and save.

> This custom admin panel does not rely on Netlify.

## Contact Form Spam Protection

The contact form sends submissions to a Google Apps Script web app. The app checks the honeypot and submission timing server-side, saves accepted messages to the Google Form's linked response spreadsheet, and sends an admin notification. It does not send confirmation emails to submitted addresses. No CAPTCHA service is used.

1. In Google Forms, open **Responses** and turn off **Accepting responses** so the public `formResponse` URL cannot bypass the web app.
2. Open the linked response spreadsheet and copy its ID from the URL.
3. In Apps Script, remove any installed `onFormSubmit` trigger for the old email handler so it cannot send duplicate notifications.
4. Create or update the Apps Script project with `google-apps-script/Code.gs`, then add this Script Property under **Project Settings**:
   - `SPREADSHEET_ID`: the linked response spreadsheet ID.
5. Deploy the script as a **Web app**, executing as yourself and allowing access to anyone. Copy the deployment URL.
6. Set `contact_form_endpoint` in `_config.yml` to the deployment URL, then rebuild and deploy the site.

The linked response sheet must retain its Google Form headers (`Full Name`, `Email Address`, `Subject`, and `Message`). The script appends accepted messages and sends an admin notification to `hello@tamilarasu.blog`; it never sends email to the address entered by the visitor. Without a CAPTCHA or server-side identity/rate-limit service, the honeypot and timing checks only deter basic bots; a bot that directly posts forged values can still submit.

---
Built with ❤️ for performance-driven technical writing.