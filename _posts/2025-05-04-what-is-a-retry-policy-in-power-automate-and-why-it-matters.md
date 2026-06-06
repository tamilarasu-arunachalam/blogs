---
post_id: "043"
layout: post
title: "What Is a Retry Policy in Power Automate (And Why It Matters)?"
date: 2025-05-04 17:41:00 +0000
category: Power Automate
categories: ["Microsoft Flows", "Power Automate"]
---

<img alt="" border="0" data-original-height="400" data-original-width="700" src="{{ site.baseurl }}/assets/images/043/img_5a8ccf0457.png" />
<p style="text-align: justify;">
  <b>Ever had a Power Automate flow fail and wondered, "Why didn’t it just try
    again?"&nbsp;</b>
</p>
<p></p>
<!--css for changing default bulletin start-->
<style>
.post-body ul { list-style: none; } /* Remove default bullets */

.post-body ul li::before {
    content: "\2605"; /* Unicode bullet symbol for star */
    color: black;  /* Bullet color */
    font-weight: bold;
    padding-right: 3px;
}
</style>
<!--css for changing default bulletin end-->
<p data-end="721" data-start="498" style="text-align: justify;">
  You're not alone. One of the more powerful - but often overlooked - features
  in Microsoft Power Automate is the
  <span data-end="622" data-start="606">retry policy</span>. It’s the safety net
  that makes your flows more resilient when things don’t go exactly as planned.
</p>
<p data-end="992" data-start="723" style="text-align: justify;">
  In this post, we’ll break down what a retry policy is, how it works behind the
  scenes, when you should customize it, and how to avoid common pitfalls.
  Whether you’re a beginner or have a few flows under your belt, this guide will
  help you level up your automation game.
</p>
<h2 data-end="1033" data-start="999">What Exactly Is a Retry Policy?</h2>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmVEOdTpKyf10H_o2rd5YVQobeG7PlZ2VnONx289m1xHbhkM52-P40DRBBlcuhrl1Vz5YCW1R5pmFuLgJZzLl6gQq5hlPxmK9Ng6_vU0i5w9eu3bqsGorv455ZMSxejVi3V5hrJNc-OfPMfNyyp_zyU4m51IcRq9WODwPPh-YmRNUqpWshAHswmP7XZeo/s867/retry-policy-1.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="468" data-original-width="867" height="216" src="{{ site.baseurl }}/assets/images/043/img_5c19d1e9bc.png" width="400" /></a>
</div>
<p data-end="1214" data-start="1035" style="text-align: justify;">
  <span>&nbsp;&nbsp; &nbsp;</span>Simply put, a
  <span data-end="1065" data-start="1049">retry policy</span> tells Power
  Automate how to respond when an action doesn’t succeed the first time - like
  when a service is temporarily down or a connection times out.
</p>
<p data-end="1352" data-start="1216" style="text-align: justify;">
  <span>&nbsp;&nbsp; &nbsp;</span>Instead of giving up right away, Power
  Automate can try again automatically. This is super helpful when you’re
  dealing with things like:
</p>

<p data-end="1384" data-start="1355" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>Unstable internet connections</li>
  <li>APIs that hit rate limits</li>
  <li>Temporary server issues</li>
</ul>
<p></p>
<ul data-end="1438" data-start="1353"></ul>
<h2 data-end="1474" data-start="1445">The Default Retry Behavior</h2>
<p data-end="1691" data-start="1476" style="text-align: justify;">
  <span>&nbsp;&nbsp; &nbsp;</span>By default, many actions in Power Automate
  already have retry logic built in. If something goes wrong temporarily, the
  platform will retry the action
  <span data-end="1643" data-start="1626">up to 4 times</span> using something
  called <span data-end="1690" data-start="1667">exponential backoff</span>.
</p>
<h3 data-end="1724" data-start="1693">What’s exponential backoff?</h3>
<p data-end="1895" data-start="1725" style="text-align: justify;">
  <span>&nbsp;&nbsp; &nbsp;</span>It’s a fancy way of saying that the time
  between each retry keeps getting longer. So if the first retry happens after 5
  seconds, the next might be 10, then 20, and so on.
</p>
<p data-end="1997" data-start="1897" style="text-align: justify;">
  This approach prevents hammering the system with constant requests - and gives
  it a chance to recover.
</p>
<h2 data-end="2039" data-start="2004">Want More Control? Customize It.</h2>
<p data-end="2215" data-start="2041">
  Sometimes, the default retry policy isn’t quite right for your scenario. Maybe
  the system you’re calling has specific retry rules, or maybe you don’t want it
  to retry at all.
</p>
<p data-end="2244" data-start="2217">You can adjust this easily:</p>
<h3 data-end="2282" data-start="2246">How to Customize Retry Settings:</h3>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKXsACAjDWHjIHr4epgIVWNoGipOmoEO9yFr_43ZubgK1_NYaE-wTnRWqCfipu1yK8WRN_3zzgJfyf2svgUqdbYFwiAkD0E7gzOhrEuciISPESZq0EC6CLYfGvOVgstiegjAyZ4o7hV-z97GoKHNKwu0ZCdKPUk5p0OhCPQzojAxcUp01_btNFvdkioAw/s918/retry-policy-2.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="381" data-original-width="918" height="166" src="{{ site.baseurl }}/assets/images/043/img_19f32fcbbb.png" width="400" /></a>
</div>

<p data-end="2325" data-start="2286" style="text-align: left;"></p>
<ol style="text-align: left;">
  <li>Click on the action you want to change.</li>
  <li>
    Tap the
    <span data-end="2357" data-start="2337">three dots (...)</span>&nbsp;&gt;&nbsp;<span data-end="2372" data-start="2360">Settings</span>.
  </li>
  <li>
    Under <span data-end="2399" data-start="2383">Retry Policy</span>,
    choose:<br />
  </li>
  <ul style="text-align: left;">
    <li>
      <span data-end="2422" data-start="2414">None</span>&nbsp;– Don’t retry at
      all.
    </li>
    <li>
      <span data-end="2468" data-start="2450">Fixed Interval</span>&nbsp;– Retry
      after the same delay each time.
    </li>
    <li>
      <span data-end="2538" data-start="2514">Exponential Interval</span>&nbsp;–
      Retry with increasing delays.
    </li>
  </ul>
  <li>Set how many times to retry and how long to wait between tries.</li>
</ol>
<div>
  <h2 data-end="846" data-start="811">1. "None" – No Second Chances</h2>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhakiqbsMNo5NEOWq99ycmOOny3ATXMBZ6TOSUQsueHiNxe9dI8EMxwSyDJz45_sXSWl-I2dlmHAuO9L76p-eB7R6z10IdUp-EmbhOg07dcje36m0oE6Rr_nIQ0eOXEUb-IkNlSGRpiSntB8fZhM_4SecRr5lmRgpYmY7SxveAvWnI1ThDIffqa4_oB65c/s890/retry-policy-3-none.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="324" data-original-width="890" height="145" src="{{ site.baseurl }}/assets/images/043/img_ec734a3aed.png" width="400" /></a>
  </div>
  <p data-end="1030" data-start="872">
    Choosing <span data-end="889" data-start="881">None</span> means your flow
    won’t retry the action at all. If it fails once, it’s done. The flow moves
    on (or stops, depending on how you’ve set it up).
  </p>
  <h3 data-end="1059" data-start="1032">When should you use it?</h3>
  <p data-end="1077" data-start="1061">Go with this if:</p>

  <p data-end="1167" data-start="1080" style="text-align: left;"></p>
  <ul style="text-align: left;">
    <li>
      The action
      <span data-end="1122" data-start="1091">must not run more than once -&nbsp;</span>like sending a payment or submitting a form.
    </li>
    <li>
      You want the flow to
      <span data-end="1204" data-start="1191">fail fast</span> and hit an error
      path quickly.
    </li>
    <li>
      Retrying would create
      <span data-end="1287" data-start="1260">duplicates or conflicts</span>
      (like multiple emails).
    </li>
  </ul>
  <p></p>
  <ul data-end="1311" data-start="1078"></ul>
  <h3 data-end="1326" data-start="1313">Heads-up:</h3>
  <p data-end="1464" data-start="1328" style="text-align: justify;">
    This policy is pretty unforgiving. Even a tiny glitch can cause your flow to
    stop. So, use it only when you're sure retries aren't safe.
  </p>
  <h2 data-end="1520" data-start="1471">
    2. Fixed Interval – Try Again After a Break
  </h2>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjskHEk2b7j6o7gCbSkU4C-aVuzj7qMcKVv4fJkzmiCao6Jk4VQ_vJKSr41o7tckEeByftRsq8E48HHjfbs4rrWlFstFX-Z5z6do0Pdxzm89gyRliEX1sds315tPJWzcgvIq41_v2AYhXaReGKN4aeLcEWeuem8mjDoi1lJWxbGJ-BNz-GVTK4-qdIN9Ic/s900/retry-policy-6-fixed-interval.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="434" data-original-width="900" height="193" src="{{ site.baseurl }}/assets/images/043/img_5d56280ddd.png" width="400" /></a>
  </div>
  <p data-end="1672" data-start="1548" style="text-align: justify;">
    With <span data-end="1571" data-start="1553">Fixed Interval</span>, Power
    Automate will retry the action a few times, waiting the same amount of time
    between each try.
  </p>
  <p data-end="1827" data-start="1674" style="text-align: justify;">
    Let’s say you choose a fixed interval of 10 seconds and 3 retries. That
    means Power Automate will try once, then again in 10 seconds, again in
    another 10, and a final time after another 10—then give up if it still
    fails.
  </p>
  <ul data-end="2009" data-start="1861"></ul>
  <h3 data-end="2033" data-start="2011">You can customize:</h3>

  <p data-end="2065" data-start="2036" style="text-align: left;"></p>
  <ul style="text-align: left;">
    <li>
      <span data-end="2065" data-start="2036">How many times it retries</span>
    </li>
    <li>
      <span data-end="2089" data-start="2068">How long it waits</span> between
      each try
    </li>
  </ul>
  <p></p>
  <ul data-end="2106" data-start="2034"></ul>
  <h2 data-end="2174" data-start="2113">
    3. Exponential Interval – Smart Retrying That Backs Off
  </h2>
  <p data-end="2348" data-start="2193" style="text-align: justify;">
    Instead of retrying every 30 seconds like Fixed Interval,
    <span data-end="2304" data-start="2280">Exponential Interval</span>
    increases the wait time after each attempt.
  </p>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitiTJyBrUY63woWb0Ge7eAkdHBj1KHww5fbZFvs2iFIq4Ihtj8TmQGCN76-uNN1PyAxzWv3G3EgC-I1oCxMPaFMd0pVrmQ6NGoL3Tmu6ACdeua0ffMMVdgSGJwA-5U69O_Wya0oDArib3uxO8lgTUbUzRsq2Ics1XOoX30PDJnoYmN6RA74xS9RwQv27M/s885/retry-policy-4-exp-interval.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="528" data-original-width="885" height="239" src="{{ site.baseurl }}/assets/images/043/img_bc08bffb11.png" width="400" /></a>
  </div>
  <p data-end="2358" data-start="2350"><b>Example:</b></p>

  <p data-end="2385" data-start="2361" style="text-align: left;"></p>
  <ul style="text-align: left;">
    <li>First retry: 5 seconds</li>
    <li>Second retry: 10 seconds</li>
    <li>Third retry: 20 seconds</li>
    <li>…and so on</li>
  </ul>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSy5FMXYW5GGNVc8RU-q3BtccCzI8zo2YreQfeUiAEZyLeP1mQQ5584JOahcmFQE9X7L17-V-PuglOMXhNGq455bFFC2iFyk66sOrRAFMBl6SPsK4nJ8YbECM37Sjyj_9V2dp0p4d2NiGiUK4qjNET4wtHBSWIn9K575ZYFxEuhyphenhyphenUEgr80fXWjdRnjrB0/s885/retry-policy-5-exp-interval.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="530" data-original-width="885" height="240" src="{{ site.baseurl }}/assets/images/043/img_1ad1a5308a.png" width="400" /></a>
  </div>
  <p></p>
  <ul data-end="2455" data-start="2359"></ul>
  <h3 data-end="2473" data-start="2457">Perfect for:</h3>

  <p data-end="2522" data-start="2477" style="text-align: left;"></p>
  <ul style="text-align: left;">
    <li>
      <span data-end="2522" data-start="2477">APIs that throttle or rate-limit requests</span>
    </li>
    <li>Systems under heavy load</li>
    <li>
      General-purpose retrying when you're not sure how long a system might take
      to recover
    </li>
  </ul>
  <p></p>
  <ul data-end="2637" data-start="2475"></ul>
  <h3 data-end="2660" data-start="2639">Why it's awesome:</h3>
  <p data-end="2842" data-start="2662" style="text-align: justify;">
    This is actually the
    <span data-end="2707" data-start="2683">default retry policy</span> for most
    actions in Power Automate - and for good reason. It gives systems time to
    breathe and reduces the risk of overloading anything.
  </p>
</div>
<h2 data-end="2926" data-start="2881">
  When Should You Use Custom Retry Policies?
</h2>
<p data-end="3006" data-start="2928">
  Here are some common situations where tweaking the retry settings makes sense:
</p>

<p data-end="3078" data-start="3010" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>
    <span data-end="3037" data-start="3010">Calling an external API</span> that
    might temporarily throttle requests
  </li>
  <li>
    <span data-end="3111" data-start="3081">Working with cloud storage</span>
    like SharePoint or OneDrive where things might lag
  </li>
  <li>
    <span data-end="3183" data-start="3165">Sending emails</span> through
    servers that occasionally delay or reject requests
  </li>
  <li>
    <span data-end="3267" data-start="3245">Handling approvals</span> where
    duplicate requests could cause issues (you might want no retries here)
  </li>
</ul>
<p></p>
<ul data-end="3344" data-start="3008"></ul>
<h2 data-end="3384" data-start="3351">Best Practices to Keep in Mind</h2>
<p data-end="3459" data-start="3386">
  If you’re customizing retry settings, here are a few tips to do it right:
</p>
<p data-end="3949" data-start="3461" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>
    <span data-end="3497" data-start="3463">Start with exponential backoff</span>
    – It’s the safest way to avoid overloading a system.
  </li>
  <li>
    <span data-end="3576" data-start="3555">Avoid retry loops</span> – Don’t set
    retries too high or too frequent; it can make things worse.
  </li>
  <li>
    <span data-end="3675" data-start="3653">Use error handling</span> – Combine
    retry policies with Scope controls and “Configure Run After” options.
  </li>
  <li>
    <span data-end="3780" data-start="3760">Log your retries</span> – Use
    Compose or Append to Array to track what’s happening during retries.
  </li>
  <li>
    <span data-end="3881" data-start="3860">Know when to stop</span> – If a
    retry won’t help (e.g., the request is invalid), disable it.
  </li>
</ul>
<p></p>
<h2 data-end="3990" data-start="3956">How to Know If a Retry Happened</h2>
<p data-end="4028" data-start="3992">Curious if a flow retried an action?</p>
<p data-end="4061" data-start="4030">
  Check the <span data-end="4060" data-start="4040">flow run history</span>:
</p>

<p data-end="4081" data-start="4064" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>Open the flow run</li>
  <li>Click the action</li>
  <li>You’ll see retry attempts, delays, and error messages (if any)</li>
</ul>
<p></p>
<ul data-end="4165" data-start="4062"></ul>
<p data-end="4224" data-start="4167">
  This is great for troubleshooting or refining your logic.
</p>
<h2 data-end="4245" data-start="4231">Wrapping Up</h2>
<p data-end="4395" data-start="4247" style="text-align: justify;">
  Retry policies might not be the flashiest feature in Power Automate, but
  they’re
  <span data-end="4352" data-start="4328">absolutely essential</span> for
  building dependable, real-world flows.
</p>
<p data-end="4521" data-start="4397" style="text-align: justify;">
  Whether you’re working with APIs, cloud storage, or approvals, adding (or
  disabling) retries at the right time can help you:
</p>

<p data-end="4543" data-start="4524" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>Avoid flow failures</li>
  <li>Reduce false alerts</li>
  <li>Handle real-life network issues gracefully</li>
</ul>
<p></p>
<ul data-end="4610" data-start="4522"></ul>
<p data-end="4765" data-start="4612" style="text-align: justify;">
  Next time a flow action fails, don’t just ask “what went wrong”—check the
  retry settings. A small tweak there could save you a lot of time and
  headaches.
</p>
<!--style for accordion-->
<style>
  .faq-container {
    max-width: 800px;
    margin: 2rem auto;
    font-family: Arial, sans-serif;
  }

  .faq-item {
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.5rem;
  }

  .faq-toggle {
    display: none;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #f7f7f7;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
    position: relative;
  }

  .faq-question::after {
    content: "+";
    font-size: 1.5rem;
    transition: transform 0.3s;
  }

  .faq-toggle:checked + .faq-question::after {
    content: "-";
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    padding: 0 1rem;
    background: #fff;
    transition: max-height 0.4s ease, padding 0.3s ease;
  }

  .faq-toggle:checked ~ .faq-answer {
    max-height: 200px; /* Adjust for expected content */
    padding: 1rem;
  }
</style>
<!--accordion-->
<h2 data-end="4815" data-start="4772">
  FAQs About Power Automate Retry Policies
</h2>
<div class="faq-container">
  <div class="faq-item">
    <input class="faq-toggle" id="faq1" type="checkbox" />
    <label class="faq-question" for="faq1">
      Can I disable retries completely?</label
    >
    <div class="faq-answer">
      Yes. Just go to the action’s settings and change the retry policy to
      “None.”
    </div>
  </div>
  <div class="faq-item">
    <input class="faq-toggle" id="faq2" type="checkbox" />
    <label class="faq-question" for="faq2">
      What happens if all retries fail?</label
    >
    <div class="faq-answer">
      The action fails, and the flow continues based on how you’ve set
      “Configure Run After” for the next step.
    </div>
  </div>
  <div class="faq-item">
    <input class="faq-toggle" id="faq3" type="checkbox" />
    <label class="faq-question" for="faq3">
      Do all connectors support retry logic?</label
    >
    <div class="faq-answer">
      Most major ones do—especially HTTP actions, SharePoint, Outlook, and other
      cloud services.
    </div>
  </div>
</div>
<p style="text-align: center;">Have a good day!</p>
