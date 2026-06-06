---
post_id: "066"
layout: post
title: "How to Hide Sensitive Data in Power Automate Using Secure Inputs and Outputs?"
date: 2026-04-26 17:41:00 +0000
category: Power Automate
---

<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKwl6mgKfOo4oBBdY6rxhIsU9eUSvjS0zFTBQX8L4qc_avGThGVCBv9qJzm1T09bp6M4JbStq2H_MJJqaGinCz0esD8b-7UjrOVn6OJ26U9IwlG6fBfy-DF8YJFeIOGgrbqNhZ7yzXBvQPh5mVJqJ93mBPqP6e8-exHePW01S1wz2lBO5aWfO2zyp5ONw/s480/giphy-downsized-large.gif" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="343" data-original-width="480" src="{{ site.baseurl }}/assets/images/066/img_be2a5971b6.gif" /></a></div><p style="text-align: justify;">
  There was a moment while debugging a Power Automate flow when something
  unexpected showed up. Instead of just checking an error, the entire API
  request and response data were visible in the run history. It included
  sensitive details that should never be exposed so easily. That’s when the
  importance of secure inputs and outputs became very real.
</p>

<p style="text-align: justify;">
  In Power Automate, every action logs its inputs and outputs in the run
  history. While this is helpful for debugging, it becomes a risk when working
  with confidential data like customer details, API payloads, or authentication
  tokens. Anyone with access to the flow history can view this information
  unless it is protected.
</p>

<p style="text-align: justify;">
  This is where Secure Inputs and Secure Outputs come into play. These settings
  allow you to hide sensitive data from the run history. Once enabled, the
  actual values are no longer visible, ensuring that critical information
  remains protected even if someone accesses the flow logs.
</p>

<p style="text-align: justify;">
  Consider a simple scenario where a flow sends customer data to an external API
  using an HTTP action. Without enabling these settings, both the request and
  response data will be fully visible in the run history. By turning on secure
  inputs and outputs from the action settings, this data becomes hidden while
  the flow continues to function normally.
</p>
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijxT5eW4bz5u_BavcNTT5Nhww1wpANDhCqv0ZjgM4hm-0zw8_V5RiwfiIrFkAyu3LrFED1SwtyM6JwabcYV8H4s6A81jOC8N2jhsp3z9B8ioIiav5YMIxY5U_Wzyda81vX5uvxfkgP2ggws0cxdRuzGbvsyqZeeYISqdYqNp1R94iUR1uquunWQiOv4Kg/s1600/secure-input-output-disabled.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="287" data-original-width="681" src="{{ site.baseurl }}/assets/images/066/img_6786aaa34f.png" /></a></div>
<!--Image Placeholder: Secure Inputs and Outputs Settings-->

<p style="text-align: justify;">
  It’s important to remember that this setting is action-specific and must be
  enabled wherever sensitive data is involved. While it may limit visibility
  during debugging, it is essential for production environments where data
  security is critical.
</p>
<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6XLm49eRsqyR0z_xuh1f3HZuQo9Md3rAEAyURLd6qtzyqZFqnooNB1pAnRzPMEoGQG3tK7YrX3R6VUKJFO9LGV6a97spfKmLCNRi3IersdxUGZie3inIYC-3FoVZM7f20wk1t2HdTq_yY-ureMeK2bzRvG56qu9U7zU7jEA3vjBFnLdQZH8XhJYhJK1c/s1600/secure-input-output-result.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="417" data-original-width="692" src="{{ site.baseurl }}/assets/images/066/img_f1b8f21135.png" /></a></div>
<p style="text-align: justify;">
  In Dynamics 365 and Dataverse-based implementations, flows often handle
  business-critical and sensitive information. Leaving such data exposed in logs
  can lead to security risks and compliance issues.
</p>

<p style="text-align: justify;">
  Secure inputs and outputs may seem like a small feature, but they play a big
  role in building secure and reliable Power Automate solutions.
</p><h3 style="text-align: justify;">References:</h3><div><span style="display: none;"></span><ul><li><a href="https://learn.microsoft.com/en-us/power-automate/how-tos-use-sensitive-input" rel="noopener nofollow noreferrer" target="_blank">Manage sensitive input like passwords in Power Automate — Power Automate | Microsoft Learn<span style="display: none;"></span></a><br /><span style="display: none;"></span></li><li><a href="https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-secure-inputs-outputs-triggers" rel="noopener nofollow noreferrer" target="_blank">Secure data used in cloud flows — Power Automate | Microsoft Learn<span style="display: none;"></span></a><br /><span style="display: none;"></span></li><li><a href="https://learn.microsoft.com/en-us/power-automate/guidance/planning/define-input-output" rel="noopener nofollow noreferrer" target="_blank">Defining inputs and outputs as you plan a Power Automate project — Power Automate | Microsoft Learn</a></li></ul></div><p style="text-align: center;">Have a great day!</p>
