---
post_id: "065"
layout: post
title: "How to Unit Test Dynamics 365 CRM JavaScript using QUnit?"
date: 2026-04-19 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Unit Testing", "JavaScript", "Dynamics 365 CE", "Dynamics 365 CRM Online", "Web resource"]
---

<p style="text-align: justify;">
  </p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiZxShfRbYaYd3e8mBP6KzMfw4a3SZSmHi1HyMjKRR8sBGgwcNVPBDRoHnDunoAF3lmnePT8w9yp82pknN_NKgeZccfCaZ8JtVFj9ElztI0vOxCJczjp6j0sW6g8LO_g86DdHZ-QET9ycJ3GisyM3U2PSYveqCWdKEPgrX48WWjuhtVTfEbd8iMtL9K14/s480/testing-testing.gif" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="360" data-original-width="480" src="{{ site.baseurl }}/assets/images/065/img_508a786ff1.gif" /></a></div><p></p><p style="text-align: justify;">A few weeks ago, our team made an important decision — we wanted to
  improve the quality of our Dynamics 365 CRM project by introducing
  <b>unit testing</b>. Until then, testing was mostly manual and relied heavily
  on functional testing inside the CRM environment. Unit testing felt like a
  natural next step.
</p>
<p style="text-align: justify;">
  Soon after the decision, I was assigned a task:
  <b>create a proof of concept (PoC) for unit testing JavaScript (JScript) web
    resources used in Dynamics 365 CRM.</b>
</p>
<p></p>
<blockquote>
  Note: I couldn’t find many simple blogs explaining how to do
  <b>unit testing for JavaScript in Dynamics 365 CRM</b>. So, I decided to share
  what I learned and document a simple approach that worked for me, mainly to
  help beginners get started.
</blockquote>
<p></p>
<p style="text-align: justify;">
  At first, I was unsure how to approach it. In my mind, unit testing was
  something usually done in full‑stack applications, like React with Node.js or
  Angular projects. I had never written unit tests for plain JavaScript files
  used in CRM forms. This was new territory for me.
</p>
<h2 style="text-align: left;">The Initial Challenge:</h2>
<p style="text-align: justify;">
  Like anyone starting something new, I began researching. A quick web search
  showed popular JavaScript testing frameworks like Jest, Mocha, and Jasmine.
  They looked powerful, well‑documented, and widely used.
</p>
<p>But there was a catch.</p>
<p style="text-align: justify;">
  Almost all of them required Node.js. Installing Node.js on my
  organization‑issued laptop meant raising a helpdesk ticket and waiting for
  admin approval. From experience, I knew this could easily take a week or more.
</p>
<p style="text-align: justify;">
  Since this was just a proof of concept, waiting that long didn’t feel
  efficient. I needed a simple, lightweight solution that didn’t require
  installing anything new.
</p>
<h2 style="text-align: left;">A Different Way of Thinking</h2>
<p>That’s when I paused and reflected on the nature of the problem.</p>
<p style="text-align: justify;">
  Since these scripts already run in the browser, I started looking for
  browser‑friendly JavaScript unit testing frameworks  -  something that could
  work directly with an HTML file.
</p>
<h2 style="text-align: justify;">Discovering QUnit</h2>
<p>
  During this search, I came across
  <b><a href="https://qunitjs.com/" rel="nofollow" target="_blank">QUnit</a></b>.
</p>
<p>QUnit immediately stood out because it is:</p>
<p></p>
<ul style="text-align: left;">
  <li>Lightweight and simple</li>
  <li>Designed for testing JavaScript in the browser</li>
  <li>Available via CDN</li>
  <li>Supports integration with mocking libraries</li>
</ul>
<p></p>
<p>
  With QUnit, you just include a script reference in an HTML file, open it in
  the browser, and your tests run instantly.
</p>
<p>That was exactly what I was looking for.</p>
<h2 style="text-align: left;">Setting Up the Proof of Concept</h2>
<p>I created a simple project structure to demonstrate the idea.</p>
<p></p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEhs5lSFYArxgSLCdX97qzHZKtd2rNaW80bW2uiU9ReZFTmPbafh7QcHcjOJDOI2dhmIpEeEyF53Jmkzx97VFWdxyojTMAW0i4LdkHm5UrIPn8qdjgg6qbMISJ1dJcGMD9-VRhNp04hx_t2YA5Er-X5fQI6DY7gIPSMP1-nmcfTxHV3jaVdof4JeFjV-RMM" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="237" data-original-width="348" src="{{ site.baseurl }}/assets/images/065/img_b6f3ea64b3.png" /></a>
</div>
<br />
<p></p>
<p></p>
<ul style="text-align: left;">
  <li>
    formScripts.js → One JavaScript file contained the CRM form logic (the
    actual code under test)
  </li>
  <li>tests.js → Another JavaScript file contained the unit test cases</li>
  <li>index.html → file loaded QUnit via CDN and referenced both scripts</li>
</ul>
<p></p>
<p>
  By opening index.html in the browser, I could run all unit tests and see
  results immediately - pass, fail, and errors - all in a clean UI provided by
  QUnit. You can find my sample code below.
</p>
<blockquote><strong>formScripts.js</strong></blockquote>
<script src="https://gist.github.com/tamilarasu-arunachalam/589ad8f97323f6fb570c93999bbf8611.js?file=formScripts.js"></script>
<blockquote><strong>tests.js</strong></blockquote>
<script src="https://gist.github.com/tamilarasu-arunachalam/589ad8f97323f6fb570c93999bbf8611.js?file=tests.js"></script>
<blockquote><strong>index.html</strong></blockquote>
<script src="https://gist.github.com/tamilarasu-arunachalam/589ad8f97323f6fb570c93999bbf8611.js?file=index.html"></script>
<p>
  Later, I learned how to write test for the basic and necessary objects like
  executionContext, formContext, getValue and setValue. I ran the index.html
  file and the test runs showing up. You can refer the below image to see so.
</p>
<p></p>
<p style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEjSY6f5L507HMgqPoxod_Xwe9SSRXiuT_EF-KQZR6dduu8es5M72Ea4DQ9QZd2xWnCT8uxOzrN6J9AwsxdwD4UlBHZlP4sS4Rja1nwamIpvaoldjbXF98JTCxsv8AmBdTxhEQ_1mRBINzkwh1Va8eZPkUPaOk4UC3WSbDaIl2mPZWGS6lwZ71Hid-P46Oo" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="248" data-original-width="1200" src="{{ site.baseurl }}/assets/images/065/img_d619c1a3cb.png" /></a></p>
<p></p>
<p>
  This gave me enough confidence to share my findings with the team. I plan to
  continue working on this and will share more updates as I start implementing
  unit testing in the full project.
</p>
<h2 style="text-align: left;">References:</h2>
<p></p>
<ul style="text-align: left;">
  <li>
    <a href="https://qunitjs.com/browser/" rel="nofollow" target="_blank">Browser Runner | QUnit</a>
  </li>
  <li>
    <a href="https://qunitjs.com/api/assert/" rel="nofollow" target="_blank">Assertions | QUnit</a>
  </li>
  <li>
    <a href="https://qunitjs.com/api/QUnit/module/" rel="nofollow" target="_blank">QUnit.module() | QUnit</a>
  </li>
  <li>
    <a href="https://qunitjs.com/api/QUnit/test/" rel="nofollow" target="_blank">QUnit.test() | QUnit</a>
  </li>
</ul>
<p></p>
<p style="text-align: center;">Have a great day!</p>
