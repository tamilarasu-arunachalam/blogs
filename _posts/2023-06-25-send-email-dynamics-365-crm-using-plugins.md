---
layout: post
post_id: '024'
title: Send a Email in Dynamics 365 CRM using C# Plugins
date: 2023-06-25 10:03:00 +0000
image: assets/images/024/img_ec9c18d4fc.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
read_time: ''
categories:
  - Model Driven Apps
  - Dynamics 365 CRM Online
  - Power Apps
  - Dynamics 365 CE
  - Plugins
---

We have all came through the activity timeline section in account and contact forms. The activities include Email, Phone call, Appointments, Tasks, Posts, and Notes. I have explored how to send an email inside Dynamics 365 CRM using plugins. It is quite simple by using the two pre-defined objects, which are **SendEmailRequest** and **SendEmailResponse.**

**_Note:_** The **sender** of the email should be a system user or queue. And the **receiver** might be a user, queue, account, contact, lead, entitlement, facility/equipment, or knowledge article.

The agenda of this article is to send a welcome email when a contact is created. The plugin is triggered when a contact record is created. Please refer to the below code for creating and sending the new email activity.

<script src="https://gist.github.com/tamilarasu-arunachalam/08a5f26ad3bbd10f33a28321ebd481d3.js"></script>

**Result**

[![Send a Email in Dynamics 365 CRM using C# Plugins]({{ site.baseurl }}/assets/images/024/img_7f7dc3f838.png)]({{ site.baseurl }}/assets/images/024/img_7f7dc3f838.png)

Have a great day!
