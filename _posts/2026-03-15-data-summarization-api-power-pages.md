---
layout: post
post_id: '061'
title: Implement Data Summarization API for Dataverse in Power Pages
date: 2026-03-15 17:41:00 +0000
image: assets/images/061/img_7130141458.gif
description: ''
meta_keywords: ''
category: Power Pages
categories:
  - Power Pages
  - Power Portal
  - Dataverse
  - Dataverse API
  - Dataverse AI
---

In today’s AI-driven world, summarizing information has become incredibly easy. We can summarize long articles, web pages, books, and even lengthy videos within seconds using AI tools. Microsoft is gradually bringing similar AI capabilities into the Power Platform ecosystem.

One interesting feature I recently explored is the Dataverse record summarization capability in Power Pages. This allows us to generate AI-powered summaries of Dataverse records directly from a portal page. I tried this feature with one of my custom entity forms and it worked really well.

In this article, we will walk through how to enable the summarization feature in Power Pages and how it can be used in a custom HTML form using Dataverse data.

## Topics

- [Topics](#topics)
- [Understanding Dataverse Record Summarization](#understanding-dataverse-record-summarization)
- [Required Site Settings in Power Pages](#required-site-settings-in-power-pages)
    - [Enable Summarization](#enable-summarization)
    - [Content Size Limit](#content-size-limit)
    - [Prompt Configuration](#prompt-configuration)
- [Implementing Summarization in a Custom HTML Form](#implementing-summarization-in-a-custom-html-form)
- [Example Using Appointment Table](#example-using-appointment-table)
- [Conclusion](#conclusion)
- [References](#references)

## Understanding Dataverse Record Summarization

Power Pages allows external users to interact with Dataverse data through secure portal pages. Sometimes records in Dataverse contain a lot of descriptive information such as notes, appointment details, or long text fields. Reading the entire content can take time for portal users.

The Data Summarization API helps solve this problem by generating a short summary of the record using AI. Instead of reading the entire form, users can quickly understand the important information from the summarized output.

## Required Site Settings in Power Pages

Before using the summarization feature, a few configurations must be completed in Power Pages. First, the Dataverse table that you plan to summarize must have the site setting for enabling the web API. If you are not aware, please refer the link [here](https://learn.microsoft.com/en-us/power-pages/configure/webapi-how-to). This allows the portal page to access the record data that will be sent for summarization. Once the table permissions are configured, you need to create the required **site settings** in Power Pages. These site settings enable the **Data Summarization API**, define the fields that can be summarized, and control how the summarization request is processed. By properly configuring these settings, the portal can securely retrieve the record data and generate AI-powered summaries.

There are three important site settings that must be configured to use the summarization capability.

[![]({{ site.baseurl }}/assets/images/061/img_a9c416d035.png)]({{ site.baseurl }}/assets/images/061/img_a9c416d035.png)

### Enable Summarization

This setting enables the summarization capability in Power Pages.

```json
Name: WebAPI/AI/Summarize/Enabled  
Value: true
```

### Content Size Limit

This setting defines the maximum amount of content that can be sent to the summarization API.

```json
Name: WebAPI/AI/Summarize/ContentSizeLimit  
Value: 100000
```

The content size can be configured up to 100000 characters depending on the amount of text present in the Dataverse record.

### Prompt Configuration

The prompt defines how the AI should generate the summary. Developers can customize the prompt depending on the business requirement.

```json
Name: WebAPI/AI/Summarize/Prompt  
Value: Summarize the following appointment details clearly.
```

By changing the prompt, we can control how the summary is generated and what type of response the AI should return.

## Implementing Summarization in a Custom HTML Form

After configuring the required site settings, the summarization API can be used in a Power Pages page. For this demonstration, I created a custom HTML form using HTML, JavaScript, and Liquid. The form retrieves data from a Dataverse table and sends the content to the summarization API.

When the user triggers the summarization action, the content from the Dataverse record is sent to the API and the summarized response is returned to the page.

<script src="https://gist.github.com/tamilarasu-arunachalam/5f04f0cd65ef19e02dbcd4f30bf72e9e.js"></script>

## Example Using Appointment Table

For this example, I used the Appointment table from Dataverse. The form retrieves appointment details such as descriptions or notes entered by users. Instead of displaying the full text content, the summarization API generates a short and meaningful summary.

This approach helps portal users quickly understand the important information from the record without reading the entire description.

[![]({{ site.baseurl }}/assets/images/061/img_26b74aa8de.png)]({{ site.baseurl }}/assets/images/061/img_26b74aa8de.png)

## Conclusion

This feature is especially useful when working with records that contain large amounts of text, helping users quickly understand key information. As AI capabilities continue to evolve within the Power Platform, features like this will make Power Pages portals more intelligent and user friendly.

## References

-   [Data summarization API overview (preview) | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/data-summarization-api)
-   [Introducing the Power Pages Data Summarization API - Microsoft Power Platform Blog](https://www.microsoft.com/en-us/power-platform/blog/power-pages/introducing-the-power-pages-data-summarization-api/)
-   [Add Copilot summarization to case page (Preview) | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/add-copilot-summarization-to-case-page)

Have a great day!
