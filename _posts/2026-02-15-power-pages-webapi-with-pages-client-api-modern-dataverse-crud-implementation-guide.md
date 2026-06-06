---
post_id: "060"
layout: post
title: "Power Pages WebAPI with $pages Client API: Modern Dataverse CRUD Implementation Guide"
date: 2026-02-15 17:41:00 +0000
category: Power Pages
categories: ["Power Pages", "Power Portal", "Dataverse", "Dataverse API", "HTML", "JavaScript"]
---

<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje1FIEmCQufPFGfLq3Qy-rZ89VwOrXgenD4hbFVjON5cd9sIcFU-2Zsu4f9AhAPSJGnOgA9zSSUXnvNRU1HmR49cTDq3vsXRKMYY8bh50Z96kfCYp5OOwNljAp1mwD_SC2Nfe2-GQgWuCexMUzJPdYnzBnaqPzb9ZCXA6SvfMDneQxhizw3mXYMdo9rI4/s600/spiderman-vs-mysterio.gif" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="338" data-original-width="600" src="{{ site.baseurl }}/assets/images/060/img_25db1d708c.gif" /></a></div><ul><li><a href="#overview">Overview</a></li>
  <li><a href="#initialize-client-api">Initialize Client API</a></li>
  <li><a href="#pages-client-api-objects">$pages Client API Objects</a></li>
  <li><a href="#currentpage-object">currentPage Object</a></li>
  <li><a href="#user-object">user Object</a></li>
  <li><a href="#webapi-object">webAPI Object</a></li>
  <li><a href="#languages-object">languages Object</a></li>
  <li><a href="#demonstration">Demonstration: Custom Appointment Form</a></li>
  <li><a href="#references">References</a></li>
</ul>

<h2 id="overview">Overview</h2>
<p>If you have worked with Power Pages, you probably got stuck at some point using webapi.safeAjax for Dataverse operations. Microsoft introduced the $pages Client API to simplify how developers interact with forms, authentication, Dataverse data, and multilingual configuration directly from custom HTML and JavaScript pages.</p>

<h2 id="initialize-client-api">Initialize Client API</h2>
<p>The $pages Client API is not automatically available on page load. You must ensure it is initialized before calling its methods.</p>
<ul>
  <li>Callback-based readiness</li>
  <pre><code>Microsoft.Dynamic365.Portal.onPagesClientApiReady(($pages) =&gt; {
    const forms = $pages.currentPage.forms.getAll();
    console.log(`Found ${forms.length} forms on the page.`);
});</code></pre>
  <li>Promise or async/await-based readiness</li>
  <pre><code>let $pages = await Microsoft.Dynamic365.Portal.onPagesClientApiReady();
const forms = $pages.currentPage.forms.getAll();</code></pre>
</ul>
<!--Code Placeholder: Initialize $pages-->

<h2 id="pages-client-api-objects">$pages Client API Objects</h2>
<p>The Client API exposesthe below objects</p>
<ul>
  <li>currentPage</li>
  <li>user</li>
  <li>webAPI</li>
  <li>languages</li>
</ul>
<h3 id="currentpage-object">currentPage Object</h3>
<p>Provides access to forms and components available on the current page.</p>
<p>The below piece of code will get all the forms inside the current page</p>
<pre><code>let forms = $pages.currentPage.forms.getAll();</code></pre>
<p>The below piece of code will get all the list inside the current page</p>
<pre><code>let lists = $pages.currentPage.lists.getAll();</code></pre>
<h3 id="user-object">user Object</h3>
<p>Allows programmatic sign-in and sign-out operations.</p>
<p>The below line of code will sign the user into the site.</p>
<pre><code>$pages.user.signIn</code></pre>
<p>The below line of code will sign the user into the site.</p>
<pre><code>$pages.user.signOut</code></pre>
<h2 id="webapi-object">webAPI Object</h2>
<p>Supports Create, Retrieve, and Retrieve Multiple operations in Dataverse.</p>
<strong><p>Create</p></strong>
<pre><code>$pages.webAPI.createRecord('contacts', {  
firstName: 'John',
lastName: 'Doe'  
});</code></pre>
<strong><p>Retrieve</p></strong>
<pre><code>
let record = await $pages.webAPI.retrieveRecord('accounts', 'aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb',  '$select=name');</code></pre>
<strong><p>Retrieve Multiple</p></strong>
<pre><code>
let records = await $pages.webAPI.retrieveMultipleRecords('accounts','$select=name&amp;$top=3');</code></pre>
<h2 id="languages-object">languages Object</h2>
<p>Retrieves the list of configured languages for the website.</p>
<pre><code></code></pre>
<h2 id="demonstration">Demonstration: Custom Appointment Form</h2>
<p>A Bootstrap-based custom HTML page submits form data into the Appointment table in Dataverse. Choice values are fetched from the StringMaps table using $pages.webAPI.retrieveMultiple and records are created using $pages.webAPI.createRecord</p><p><a href="https://blogger.googleusercontent.com/img/a/AVvXsEjsf3fdHCv5nLRbfvdjOv371QFf6ljc9cZzIyj1z1qOlf6jc_BhDEvXZ3DPOc-J4PmaOKMghq16uqLAFOGLt9T0pAeB7Ev5IA-_UgWrxlGdz4eHZ6UIIFQ7Hkd5PDAOfl1sqhJJ7WOBwnL8pj6GbsY3VZxN6opaOq1jZlTRhkWLDQAOgwqebNXY6L6CV8A" style="font-size: 24px; font-weight: 700; margin-left: 1em; margin-right: 1em; text-align: center;"><img alt="" data-original-height="232" data-original-width="800" src="{{ site.baseurl }}/assets/images/060/img_c88c457720.png" /></a></p>
<p>Below is the HTML code of the page</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/426431069fb79661b6f5495a165a3c5f.js?file=mw_appointments.page.html"></script>
<p>Below is the JS Code</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/426431069fb79661b6f5495a165a3c5f.js?file=mw_appointments.page.js"></script>
<p>Below is the image after the appointment is booked</p><p>
</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEizugMwBzHMUHpkmpd9fiLOXU-FzLWTztt0mqa4YhsKKX57QNhzRxXAaJ4TOUi_eS5tcVSdDvCc1PtLMSyKlu71Y7eEWjwmSXtqKq0DOxno917rVb7iiAEl5WShmHNmk8vuYFmIZyrWFxoA98UZX30cvbW1mksVbrV_Tqa3-RuQX5cX4j1aCzs4Zln-06c" style="font-size: medium; font-weight: 400; margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="247" data-original-width="800" src="{{ site.baseurl }}/assets/images/060/img_0d02769f61.png" /></a></div>
<h2>References</h2>
<ul>
  <li class="graf graf--li" name="8252"><a class="markup--anchor markup--li-anchor" data-href="https://learn.microsoft.com/en-us/power-pages/configure/client-api" href="https://learn.microsoft.com/en-us/power-pages/configure/client-api" rel="noopener" target="_blank">Power Pages Client APIs Overview (preview) | Microsoft Learn</a></li><li class="graf graf--li" name="8002"><a class="markup--anchor markup--li-anchor" data-href="https://learn.microsoft.com/en-us/power-pages/configure/client-api-controls" href="https://learn.microsoft.com/en-us/power-pages/configure/client-api-controls" rel="noopener" target="_blank">Power Pages Client API supported controls (preview) | Microsoft Learn</a></li>
</ul>
<p style="text-align: center;">Have a great day!</p><p></p><p></p>