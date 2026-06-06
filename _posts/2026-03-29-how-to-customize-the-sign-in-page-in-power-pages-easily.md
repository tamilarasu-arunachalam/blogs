---
post_id: "062"
layout: post
title: "How to Customize the Sign in page in Power Pages Easily"
date: 2026-03-29 21:11:00 +0000
category: Power Pages
categories: ["Power Pages", "Power Portal", "Dataverse", "Authentication", "Custom Pages"]
---

<p style="text-align: justify;"></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheNTV9x4Xf0IZ5BEmuxdCWsvmE4sPLM9rEjAj7nT3ynbWuqRrJ9tvfO8SlJiabED43ZvnOlp25nMx4M7iIxc5iXBfTj_8CrNNISgp73ZH21cFsQZ6YPWfxVtBTbB69xGU5pT0VyAtZ1eomxeLLRLPakXFk4EMbBrnsia2937nlIhieQj5FtC4X3XIrgcQ/s640/superman-animated.gif" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="360" data-original-width="640" src="{{ site.baseurl }}/assets/images/062/img_478dd1953a.gif" /></a></div><p></p><p style="text-align: justify;">
  Power Pages allows users to sign in using different providers like Entra ID,
  Google, LinkedIn, and others, which is great for authentication flexibility,
  but the default sign in page UI is quite basic and not easy to customize. Many
  developers struggle to match the login experience with their branding or
  modern UI expectations, so in this blog, we will see a simple and practical
  way to customize the sign in page by using content snippets, hiding the
  default components, and building a clean custom login page using Bootstrap.
</p>

<h2 id="table-of-contents">Table of Contents</h2>
<ul>
  <li><a href="#content-snippet">Add a Content Snippet</a></li>
  <li><a href="#hide-components">Hide the Existing Components</a></li>
  <li><a href="#design-login">Design a New Login Page</a></li>
</ul>

<h2 id="content-snippet">Add a Content Snippet</h2>
<p style="text-align: justify;">
  In Power Pages, the default sign in page is not directly available as a normal
  web page or template, so we cannot edit it like other pages. To customize it,
  we need to create a Content Snippet with the correct
  name(<code>Account/SignIn/PageCopy</code>) so that Power Pages uses it for the
  sign in page.
</p>
<p style="text-align: justify;"></p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEghOx9yAO6VC-N4zU7IeXotqfEk1m7n5F_jYuQ9XJSenL_QA-G4XrY6gQR1ebZ7JcmIno0ho06Z6w3fdtAIwZvzDLWVUVkLdxZOGAH0DRbHKPFsUMtsF06OXZJLCPntLb-QfeF0j90uHHERXiTWRpn0Ij6jIb5nr11XFSAsRbLG0eDPwSLNPuS6e-wXioc" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="374" data-original-width="1200" src="{{ site.baseurl }}/assets/images/062/img_ce4af0bcbe.png" /></a>
</div>
<p></p>

<p style="text-align: justify;">
  Go to the Power Pages Management App and create a new Content Snippet. Make
  sure the name matches the sign in page snippet and also ensure the required
  site settings for authentication are already configured.
</p>
<p style="text-align: justify;"></p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEiT6Bsx8W9KHGrvn4A8pZC_rrI-mpKvfm9IFuka7OALgBQ_CD6UN6lwxWZewm6tQ8s-_7LBZiAfpULMXcLmr-QazbiQ1f41CL4SfZKVCcc7WFH1J27gDnjKR2vmNL6mxNH9WHZg_DocrOanVWPBHr-wkkv-5mMTCSApjc5_tb4-qBUfEFhA5lgWGsDp9zs" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="378" data-original-width="335" src="{{ site.baseurl }}/assets/images/062/img_933776f92c.png" /></a>
</div>
<p></p>

<p>
  Once you save it, you can open and edit it from the HTML editor or through
  Visual Studio Code. This is where we will add our custom UI.
</p>

<!--Image Placeholder: Content snippet creation in Power Pages-->

<h2 id="hide-components">Hide the Existing Components</h2>
<p>
  Even after adding the content snippet, the default login UI will still appear
  on the page. To fully replace it, we need to hide those existing elements.
</p>

<p style="text-align: justify;">
  We can do this by adding simple CSS that targets the default components and
  hides them. This step ensures that only our custom design is visible to the
  users. Below is the CSS to hide the default components.
</p>
<pre><code>
.nav-account {
    display: none !important;
}

#mainContent .row:nth-child(2) {
    display: none !important;
}
</code></pre>
<h2 id="design-login">Design a New Login Page</h2>
<p>
  After hiding the default UI, we can create our own login page design. Power
  Pages supports Bootstrap, so it becomes easy to build a responsive and clean
  layout.
</p>

<p>
  You can design a simple login form with username, password fields, and
  buttons. You can also add external login options like Google or Entra ID
  inside your custom UI.
</p>

<p>
  This way, you keep the same functionality but improve the overall look and
  user experience.
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEjNB6Oxex4XBd3BzG6wdyTw9jL7wvxM3ZnVjDQ3_b6gEAkg2Y53MHoZZ9QsotvQ1ue_PWB5AFhAU23atXfBEPdMaDWfNA8DSSsm4ogRDaDnCOm-wJFyxWANItBjKrNF2Q6gWg49E9WhGxbPGDXR8_Am-y_mEkUxdaLcyCsGGcu2d6LFMDN_gEI8_zfjqiw" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="630" data-original-width="1200" src="{{ site.baseurl }}/assets/images/062/img_f5ff876fa7.png" /></a>
</div>
<br />

<script src="https://gist.github.com/tamilarasu-arunachalam/685058eb12ef6d6680cdea913378a756.js"></script>

<h2 id="reference">Reference</h2>
<div>
  <ul class="postList">
    <li class="graf graf--li" name="3991">
      <a class="markup--anchor markup--li-anchor" data-href="https://ulrikke.akerbak.com/2020/02/16/customize-the-sign-in-and-registration-page-in-power-app-portals/" href="https://ulrikke.akerbak.com/2020/02/16/customize-the-sign-in-and-registration-page-in-power-app-portals/" rel="noopener" target="_blank">Customize the sign-in and registration page in Power App
        Portals — Ulrikke Akerbæk</a>
    </li>
    <li class="graf graf--li" name="21a4">
      <a class="markup--anchor markup--li-anchor" data-href="https://www.inogic.com/blog/2024/07/personalize-your-power-pages-portal-with-custom-sign-out-redirects/" href="https://www.inogic.com/blog/2024/07/personalize-your-power-pages-portal-with-custom-sign-out-redirects/" rel="noopener" target="_blank">Personalize Your Power Pages Portal with Custom Sign-Out
        Redirects — Microsoft Dynamics 365 CRM Tips and Tricks</a>
    </li>
    <li class="graf graf--li" name="e595">
      <a class="markup--anchor markup--li-anchor" data-href="https://www.tamilarasu.blog/2025/12/set-up-google-authentication-in-power-pages.html" href="https://www.tamilarasu.blog/2025/12/set-up-google-authentication-in-power-pages.html" rel="noopener" target="_blank">How to Set Up Google Authentication in Power Pages (Beginner Guide)?</a>
    </li>
  </ul>
  <div style="text-align: center;">Have a great day!</div>
</div>
