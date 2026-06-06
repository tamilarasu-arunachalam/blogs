---
post_id: "061"
layout: post
title: "Implement Data Summarization API for Dataverse in Power Pages"
date: 2026-03-15 17:41:00 +0000
category: Power Pages
categories: ["Power Pages", "Power Portal", "Dataverse", "Dataverse API", "Dataverse AI"]
---

<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEs30KS8FJrv4E8MjmIyrXcrBs5K5yYIqFIV1pCT-RzMtPou5jXlJIViBaNX59MWy_78lth55n4dN39GfwoDgqSLIPxBlHDHuNuehsWTN2qHXGa_jG5fUkC8oRlCYCDiS1gDDGPDvvi_NsEMFmwwqT_gWsVEOKNkCezZthkfxLhTtBauZzOWPtivLxuCo/s1600/spiderman-gif.gif" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="600" data-original-width="800" src="{{ site.baseurl }}/assets/images/061/img_7130141458.gif" /></a></div>
<p style="text-align: justify;">In today’s AI-driven world, summarizing information has become incredibly
  easy. We can summarize long articles, web pages, books, and even lengthy
  videos within seconds using AI tools. Microsoft is gradually bringing similar
  AI capabilities into the Power Platform ecosystem.</p>
<p style="text-align: justify;">
  One interesting feature I recently explored is the Dataverse record
  summarization capability in Power Pages. This allows us to generate AI-powered
  summaries of Dataverse records directly from a portal page. I tried this
  feature with one of my custom entity forms and it worked really well.
</p>
<p style="text-align: justify;">
  In this article, we will walk through how to enable the summarization feature
  in Power Pages and how it can be used in a custom HTML form using Dataverse
  data.
</p>

<h2 id="topics">Topics</h2>
<ul>
  <li>
    <a href="#understanding-summarization">Understanding Dataverse Record Summarization</a>
  </li>
  <li><a href="#site-settings">Required Site Settings in Power Pages</a></li>
  <li>
    <a href="#custom-html-form">Implementing Summarization in a Custom HTML Form</a>
  </li>
  <li><a href="#appointment-example">Demonstration</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
</ul>

<h2 id="understanding-summarization">
  Understanding Dataverse Record Summarization
</h2>
<p style="text-align: justify;">
  Power Pages allows external users to interact with Dataverse data through
  secure portal pages. Sometimes records in Dataverse contain a lot of
  descriptive information such as notes, appointment details, or long text
  fields. Reading the entire content can take time for portal users.
</p>
<p style="text-align: justify;">
  The Data Summarization API helps solve this problem by generating a short
  summary of the record using AI. Instead of reading the entire form, users can
  quickly understand the important information from the summarized output.
</p>

<h2 id="site-settings">Required Site Settings in Power Pages</h2>
<p style="text-align: justify;">Before using the summarization feature, a few configurations must be completed in Power Pages. First, the Dataverse table that you plan to summarize must have the site setting for enabling the web API. If you are not aware, please refer the link <a href="https://learn.microsoft.com/en-us/power-pages/configure/webapi-how-to" rel="nofollow" target="_blank">here</a>. This allows the portal page to access the record data that will be sent for summarization. Once the table permissions are configured, you need to create the required <strong data-end="403" data-start="386">site settings</strong> in Power Pages. These site settings enable the <strong data-end="477" data-start="451">Data Summarization API</strong>, define the fields that can be summarized, and control how the summarization request is processed. By properly configuring these settings, the portal can securely retrieve the record data and generate AI-powered summaries.</p>
<p>
  There are three important site settings that must be configured to use the
  summarization capability.
</p><div class="separator" style="clear: both;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH8OPy9WjaPwJ1AeJ-cuA4wCju_lpG8V-HlNREfFE6zDXA5N-rKDZg3t8WTg5kgVkKfEoMDjgn4u9aDgrdtrggAvLxOVBcQD6vB37gOi6aJ0n5O8ho4yVHO26aRIZxFC8IPqFfDUsyqFWGIGo1Qm82TzBtkDvZXYuH19QOXiMu2_8ZrklzyzcB5iJfRQ8/s1600/site-settings-config.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="182" data-original-width="800" src="{{ site.baseurl }}/assets/images/061/img_a9c416d035.png" /></a>
</div><p></p>

<h3 id="enable-summarization">Enable Summarization</h3>
<p>This setting enables the summarization capability in Power Pages.</p>



<p>
  Name: WebAPI/AI/Summarize/Enabled<br />
  Value: true
</p>

<h3 id="content-size-limit">Content Size Limit</h3>
<p>
  This setting defines the maximum amount of content that can be sent to the
  summarization API.
</p>

<p>
  Name: WebAPI/AI/Summarize/ContentSizeLimit<br />
  Value: 100000
</p>

<p>
  The content size can be configured up to 100000 characters depending on the
  amount of text present in the Dataverse record.
</p>

<h3 id="prompt-configuration">Prompt Configuration</h3>
<p style="text-align: justify;">
  The prompt defines how the AI should generate the summary. Developers can
  customize the prompt depending on the business requirement.
</p>

<p>
  Name: WebAPI/AI/Summarize/Prompt<br />
  Value: Summarize the following appointment details clearly.
</p>

<p style="text-align: justify;">
  By changing the prompt, we can control how the summary is generated and what
  type of response the AI should return.
</p>

<h2 id="custom-html-form">Implementing Summarization in a Custom HTML Form</h2>
<p style="text-align: justify;">
  After configuring the required site settings, the summarization API can be
  used in a Power Pages page. For this demonstration, I created a custom HTML
  form using HTML, JavaScript, and Liquid. The form retrieves data from a
  Dataverse table and sends the content to the summarization API.
</p>

<p style="text-align: justify;">
  When the user triggers the summarization action, the content from the
  Dataverse record is sent to the API and the summarized response is returned to
  the page.
</p>

<script src="https://gist.github.com/tamilarasu-arunachalam/5f04f0cd65ef19e02dbcd4f30bf72e9e.js"></script>

<h2 id="appointment-example">Example Using Appointment Table</h2>
<p>
  For this example, I used the Appointment table from Dataverse. The form
  retrieves appointment details such as descriptions or notes entered by users.
  Instead of displaying the full text content, the summarization API generates a
  short and meaningful summary.
</p>
<p>
  This approach helps portal users quickly understand the important information
  from the record without reading the entire description.
</p>

<div class="separator" style="clear: both;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeS15PE2aWmZLzyxG5hX_V5e9cwygDbpNiiJNHvUtgAjxgA4lwaUuqh8sYpl0LTJMVJLlyl1jvJaJro10SMZiUTLg-9ceGfFzNHWaEZddwfPpzvZJ_ltX07CGYj4_BLDaWN2wB4hptxPm8qAJEq0OU4nznQ6693rTz83kM73idKbpH-IZlOa6oSYwFOEA/s1600/summary-form-page-final.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="489" data-original-width="800" src="{{ site.baseurl }}/assets/images/061/img_26b74aa8de.png" /></a>
</div>

<h2 id="conclusion">Conclusion</h2>
<p style="text-align: justify;">This feature is especially useful when working with records that contain large
  amounts of text, helping users quickly understand key information. As AI
  capabilities continue to evolve within the Power Platform, features like this
  will make Power Pages portals more intelligent and user friendly.</p>

<h2 id="references">References</h2>
<ul>
  <li>
    <a href="https://learn.microsoft.com/en-us/power-pages/configure/data-summarization-api" target="_blank">Data summarization API overview (preview) | Microsoft Learn</a>
  </li>
  <li>
    <a href="https://www.microsoft.com/en-us/power-platform/blog/power-pages/introducing-the-power-pages-data-summarization-api/" target="_blank">Introducing the Power Pages Data Summarization API - Microsoft Power
      Platform Blog</a>
  </li>
  <li>
    <a href="https://learn.microsoft.com/en-us/power-pages/configure/add-copilot-summarization-to-case-page" target="_blank">Add Copilot summarization to case page (Preview) | Microsoft Learn</a>
  </li>
</ul>
<p style="text-align: center;">Have a great day!</p>
