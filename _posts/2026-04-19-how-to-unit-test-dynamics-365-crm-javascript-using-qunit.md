---
post_id: "065"
layout: post
title: "How to Unit Test Dynamics 365 CRM JavaScript using QUnit?"
date: 2026-04-19 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/065/img_508a786ff1.gif
categories: ["Unit Testing", "JavaScript", "Dynamics 365 CE", "Dynamics 365 CRM Online", "Web resource"]
---
A few weeks ago, our team made an important decision — we wanted to improve the quality of our Dynamics 365 CRM project by introducing **unit testing**. Until then, testing was mostly manual and relied heavily on functional testing inside the CRM environment. Unit testing felt like a natural next step.

Soon after the decision, I was assigned a task: **create a proof of concept (PoC) for unit testing JavaScript (JScript) web resources used in Dynamics 365 CRM.**

> Note: I couldn’t find many simple blogs explaining how to do **unit testing for JavaScript in Dynamics 365 CRM**. So, I decided to share what I learned and document a simple approach that worked for me, mainly to help beginners get started.

At first, I was unsure how to approach it. In my mind, unit testing was something usually done in full‑stack applications, like React with Node.js or Angular projects. I had never written unit tests for plain JavaScript files used in CRM forms. This was new territory for me.

## The Initial Challenge:

Like anyone starting something new, I began researching. A quick web search showed popular JavaScript testing frameworks like Jest, Mocha, and Jasmine. They looked powerful, well‑documented, and widely used.

But there was a catch.

Almost all of them required Node.js. Installing Node.js on my organization‑issued laptop meant raising a helpdesk ticket and waiting for admin approval. From experience, I knew this could easily take a week or more.

Since this was just a proof of concept, waiting that long didn’t feel efficient. I needed a simple, lightweight solution that didn’t require installing anything new.

## A Different Way of Thinking

That’s when I paused and reflected on the nature of the problem.

Since these scripts already run in the browser, I started looking for browser‑friendly JavaScript unit testing frameworks  -  something that could work directly with an HTML file.

## Discovering QUnit

During this search, I came across **[QUnit](https://qunitjs.com/)**.

QUnit immediately stood out because it is:

-   Lightweight and simple
-   Designed for testing JavaScript in the browser
-   Available via CDN
-   Supports integration with mocking libraries

With QUnit, you just include a script reference in an HTML file, open it in the browser, and your tests run instantly.

That was exactly what I was looking for.

## Setting Up the Proof of Concept

I created a simple project structure to demonstrate the idea.

[![]({{ site.baseurl }}/assets/images/065/img_b6f3ea64b3.png)]({{ site.baseurl }}/assets/images/065/img_b6f3ea64b3.png)

  

-   formScripts.js → One JavaScript file contained the CRM form logic (the actual code under test)
-   tests.js → Another JavaScript file contained the unit test cases
-   index.html → file loaded QUnit via CDN and referenced both scripts

By opening index.html in the browser, I could run all unit tests and see results immediately - pass, fail, and errors - all in a clean UI provided by QUnit. You can find my sample code below.

**formScripts.js**

<script src="https://gist.github.com/tamilarasu-arunachalam/589ad8f97323f6fb570c93999bbf8611.js?file=formScripts.js"></script>

**tests.js**

<script src="https://gist.github.com/tamilarasu-arunachalam/589ad8f97323f6fb570c93999bbf8611.js?file=tests.js"></script>

**index.html**

<script src="https://gist.github.com/tamilarasu-arunachalam/589ad8f97323f6fb570c93999bbf8611.js?file=index.html"></script>

Later, I learned how to write test for the basic and necessary objects like executionContext, formContext, getValue and setValue. I ran the index.html file and the test runs showing up. You can refer the below image to see so.

[![]({{ site.baseurl }}/assets/images/065/img_d619c1a3cb.png)]({{ site.baseurl }}/assets/images/065/img_d619c1a3cb.png)

This gave me enough confidence to share my findings with the team. I plan to continue working on this and will share more updates as I start implementing unit testing in the full project.

## References:

-   [Browser Runner | QUnit](https://qunitjs.com/browser/)
-   [Assertions | QUnit](https://qunitjs.com/api/assert/)
-   [QUnit.module() | QUnit](https://qunitjs.com/api/QUnit/module/)
-   [QUnit.test() | QUnit](https://qunitjs.com/api/QUnit/test/)

Have a great day!