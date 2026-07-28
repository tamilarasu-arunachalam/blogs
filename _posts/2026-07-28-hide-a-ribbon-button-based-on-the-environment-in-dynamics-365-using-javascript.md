---
layout: post
post_id: '080'
title: Hide a Ribbon Button Based on the Environment in Dynamics 365 Using JavaScript
date: 2026-08-02T23:11
image: ''
description: Learn how to detect environment type in Dynamics 365 using RetrieveOrganizationInfo and hide the Word Template button in Production.
meta_keywords: RetrieveOrganizationInfo, Dynamics 365 Environment Type, Hide Word Template Button, Dynamics 365 Web API, Power Apps Environment, Dynamics 365 Production Environment, Sandbox Environment, Developer Environment, Dataverse API
category: Dynamics 365 CE
read_time: 10 mins
published: true
---

A while back, I was asked to implement a requirement to hide the **Word Template** button for users in the **Production** environment while keeping it visible in **Sandbox** and **Developer** environments.

Initially, I was scratching my head trying to figure out the best approach. After some research, I realized that the ultimate goal was to show or hide command bar buttons based on the **Dynamics 365 environment type**. I then took a deeper dive into identifying the current environment programmatically.

Usually, we can determine the environment type from the URL. For example, a Production environment may have a URL such as: `[org-url]-prod.crm8.dynamics.com`.

However, relying on the URL is not the most reliable or recommended approach. After further investigation, I discovered a better solution. Microsoft provides a Web API function called `RetrieveOrganizationInfo`, which can be used to identify the current organization’s environment type.

You can find the different environment types in the table below.

![Environment types in Power Platform](/assets/images/1fa130044712/environment-types-table.png)

Once I found the approach, I jumped straight into the implementation. I wrote a script that hides the **Word Templates** button when the current environment is a **Production** environment. You can refer to the code sample below.

To hide the button, you need to add an **Enable Rule** to the existing command. The screenshot below shows how this can be configured.

![Enable rule in Ribbon WorkBench](/assets/images/21440beb985f/ShowBtnOnDev-enable-rule.png)

Since I currently have access only to a developer environment and not a Production environment, I cannot demonstrate the functionality directly. However, I performed reverse testing, and the solution worked as expected.

#### References:

- [RetrieveOrganizationInfo Function (Microsoft.Dynamics.CRM) — Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/retrieveorganizationinfo?view=dataverse-latest)
- [OrganizationType EnumType (Microsoft.Dynamics.CRM) — Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/organizationtype?view=dataverse-latest)
- [Xrm.WebApi.online.execute (Client API reference) in model-driven apps — Power Apps — Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute)
