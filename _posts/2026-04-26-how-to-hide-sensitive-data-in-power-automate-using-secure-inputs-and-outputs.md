---
post_id: "066"
layout: post
title: "How to Hide Sensitive Data in Power Automate Using Secure Inputs and Outputs?"
category: Power Automate
image: assets/images/066/img_be2a5971b6.gif
date: 2026-04-26 17:41:00 +0000
category: Power Automate
---
There was a moment while debugging a Power Automate flow when something unexpected showed up. Instead of just checking an error, the entire API request and response data were visible in the run history. It included sensitive details that should never be exposed so easily. That’s when the importance of secure inputs and outputs became very real.

In Power Automate, every action logs its inputs and outputs in the run history. While this is helpful for debugging, it becomes a risk when working with confidential data like customer details, API payloads, or authentication tokens. Anyone with access to the flow history can view this information unless it is protected.

This is where Secure Inputs and Secure Outputs come into play. These settings allow you to hide sensitive data from the run history. Once enabled, the actual values are no longer visible, ensuring that critical information remains protected even if someone accesses the flow logs.

Consider a simple scenario where a flow sends customer data to an external API using an HTTP action. Without enabling these settings, both the request and response data will be fully visible in the run history. By turning on secure inputs and outputs from the action settings, this data becomes hidden while the flow continues to function normally.

[![]({{ site.baseurl }}/assets/images/066/img_6786aaa34f.png)]({{ site.baseurl }}/assets/images/066/img_6786aaa34f.png)

It’s important to remember that this setting is action-specific and must be enabled wherever sensitive data is involved. While it may limit visibility during debugging, it is essential for production environments where data security is critical.

[![]({{ site.baseurl }}/assets/images/066/img_f1b8f21135.png)]({{ site.baseurl }}/assets/images/066/img_f1b8f21135.png)

In Dynamics 365 and Dataverse-based implementations, flows often handle business-critical and sensitive information. Leaving such data exposed in logs can lead to security risks and compliance issues.

Secure inputs and outputs may seem like a small feature, but they play a big role in building secure and reliable Power Automate solutions.

### References:

-   [Manage sensitive input like passwords in Power Automate — Power Automate | Microsoft Learn](https://learn.microsoft.com/en-us/power-automate/how-tos-use-sensitive-input)  
    
-   [Secure data used in cloud flows — Power Automate | Microsoft Learn](https://learn.microsoft.com/en-us/power-automate/guidance/coding-guidelines/use-secure-inputs-outputs-triggers)  
    
-   [Defining inputs and outputs as you plan a Power Automate project — Power Automate | Microsoft Learn](https://learn.microsoft.com/en-us/power-automate/guidance/planning/define-input-output)

Have a great day!