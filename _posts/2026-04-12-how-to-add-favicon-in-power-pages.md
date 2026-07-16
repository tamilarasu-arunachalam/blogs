---
layout: post
post_id: '064'
title: How to Add a Favicon in Power Pages?
date: 2026-04-12 17:41:00 +0000
image: assets/images/064/img_0e751ab16e.gif
description: ''
meta_keywords: ''
category: Power Pages
categories:
  - Power Pages
  - Power Portal
  - HTML
  - Power Platform
---

When you open a website in your browser, one small detail quietly helps you recognize it instantly. That tiny icon shown in the browser tab, bookmarks, history, and address bar is called a **favicon**. The word favicon stands for “favorite icon,” and even though it is small, it plays a big role in improving **user experience** and maintaining **brand consistency**.

Think about the times when your browser is filled with multiple tabs. It becomes difficult to read every page title, but the favicon helps you quickly identify which tab belongs to which website. This makes navigation easier and saves time, especially for users who frequently switch between tabs.

[![]({{ site.baseurl }}/assets/images/064/img_1fbc8949e2.png)]({{ site.baseurl }}/assets/images/064/img_1fbc8949e2.png)

A standard favicon is usually created in a **16x16 pixel** size and comes in formats like **PNG, GIF, or ICO**, with ICO being the most recommended format for better browser compatibility. If you already have a logo, you can easily convert it into a favicon using online tools. One simple approach is to upload your logo to **favicon.io** and download the generated favicon files. If you do not have a logo, you can even create a text-based favicon by customizing fonts and colors directly on the same platform. The downloaded file usually comes as a ZIP, where you can find the **.ico file** ready to use.

For a regular HTML website, adding a favicon is straightforward. You just need to include a simple link tag inside the head section of your website.

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
```

However, if you are working with **Power Pages**, the process is slightly different since it is a low-code platform. To add a favicon in Power Pages, you need to go to the Power Pages Management app and select your site. 

[![]({{ site.baseurl }}/assets/images/064/img_73a86ff2a0.png)]({{ site.baseurl }}/assets/images/064/img_73a86ff2a0.png)

From there, create a new web file and name it **favicon.ico**. Set the state to published and upload your .ico file in the file upload section. Once you save the web file, go back to the maker portal, sync the site, and refresh it.

[![]({{ site.baseurl }}/assets/images/064/img_853ee467a1.png)]({{ site.baseurl }}/assets/images/064/img_853ee467a1.png)

After completing these steps, you will notice that the default globe icon in your browser tab is replaced with your custom favicon. This small change gives your website a more professional look and makes it easier for users to recognize your site among multiple open tabs.

[![]({{ site.baseurl }}/assets/images/064/img_b753786854.png)]({{ site.baseurl }}/assets/images/064/img_b753786854.png)

Adding a favicon may seem like a minor step, but it contributes significantly to **branding**, **usability**, and overall **website experience**. It is one of those small details that can make your website feel complete and polished.

### References

-   [The best Favicon Generator (completely free) - favicon.io](https://favicon.io/)  
-   [MDN Favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon)
-   [How do I change the favicon in Power Pages? | Microsoft Learn](https://learn.microsoft.com/en-us/shows/one-dev-minute/how-do-i-change-the-favicon-in-power-pages)
-   [Add browser icon (favicon) to Power Pages - Ulrikke Akerbæk](https://ulrikke.akerbak.com/2022/09/23/browser-icon-favicon-power-pages/)

Have a great day!
