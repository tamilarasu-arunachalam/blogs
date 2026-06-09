---
post_id: "062"
layout: post
title: "How to Customize the Sign in page in Power Pages Easily"
date: 2026-03-29 21:11:00 +0000
category: Power Pages
image: assets/images/062/img_478dd1953a.gif
categories: ["Power Pages", "Power Portal", "Dataverse", "Authentication", "Custom Pages"]
---
Power Pages allows users to sign in using different providers like Entra ID, Google, LinkedIn, and others, which is great for authentication flexibility, but the default sign in page UI is quite basic and not easy to customize. Many developers struggle to match the login experience with their branding or modern UI expectations, so in this blog, we will see a simple and practical way to customize the sign in page by using content snippets, hiding the default components, and building a clean custom login page using Bootstrap.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Add a Content Snippet](#add-a-content-snippet)
- [Hide the Existing Components](#hide-the-existing-components)
- [Design a New Login Page](#design-a-new-login-page)
- [Reference](#reference)

## Add a Content Snippet

In Power Pages, the default sign in page is not directly available as a normal web page or template, so we cannot edit it like other pages. To customize it, we need to create a Content Snippet with the correct name(`Account/SignIn/PageCopy`) so that Power Pages uses it for the sign in page.

[![]({{ site.baseurl }}/assets/images/062/img_ce4af0bcbe.png)]({{ site.baseurl }}/assets/images/062/img_ce4af0bcbe.png)

Go to the Power Pages Management App and create a new Content Snippet. Make sure the name matches the sign in page snippet and also ensure the required site settings for authentication are already configured.

[![]({{ site.baseurl }}/assets/images/062/img_933776f92c.png)]({{ site.baseurl }}/assets/images/062/img_933776f92c.png)

Once you save it, you can open and edit it from the HTML editor or through Visual Studio Code. This is where we will add our custom UI.

## Hide the Existing Components

Even after adding the content snippet, the default login UI will still appear on the page. To fully replace it, we need to hide those existing elements.

We can do this by adding simple CSS that targets the default components and hides them. This step ensures that only our custom design is visible to the users. Below is the CSS to hide the default components.

```css
.nav-account {
    display: none !important;
}

#mainContent .row:nth-child(2) {
    display: none !important;
}
```

## Design a New Login Page

After hiding the default UI, we can create our own login page design. Power Pages supports Bootstrap, so it becomes easy to build a responsive and clean layout.

You can design a simple login form with username, password fields, and buttons. You can also add external login options like Google or Entra ID inside your custom UI.

This way, you keep the same functionality but improve the overall look and user experience.

[![]({{ site.baseurl }}/assets/images/062/img_f5ff876fa7.png)]({{ site.baseurl }}/assets/images/062/img_f5ff876fa7.png)

<script src="https://gist.github.com/tamilarasu-arunachalam/685058eb12ef6d6680cdea913378a756.js"></script>

## Reference

-   [Customize the sign-in and registration page in Power App Portals — Ulrikke Akerbæk](https://ulrikke.akerbak.com/2020/02/16/customize-the-sign-in-and-registration-page-in-power-app-portals/)
-   [Personalize Your Power Pages Portal with Custom Sign-Out Redirects — Microsoft Dynamics 365 CRM Tips and Tricks](https://www.inogic.com/blog/2024/07/personalize-your-power-pages-portal-with-custom-sign-out-redirects/)
-   [How to Set Up Google Authentication in Power Pages (Beginner Guide)?](https://www.tamilarasu.blog/2025/12/set-up-google-authentication-in-power-pages.html)

Have a great day!