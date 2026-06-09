---
post_id: "051"
layout: post
title: "Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)"
date: 2025-11-02 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/051/img_81b48ca268.gif
categories: ["Dataverse", "Dynamics 365 CE", "Dynamics 365 CRM Online", "Dynamics 365 Web API", "JavaScript", "Model Driven Apps", "Power Apps", "Web resource"]
---
Recently, I worked on a Dynamics 365 customization where I needed to associate selected subgrid records with a parent record - specifically, linking multiple contacts to an account using a custom button.

Initially, I thought of using Power Automate or a custom plugin with an action, but after exploring more, I discovered that the XRM WebAPI already provides built-in methods to associate and disassociate records. This approach turned out to be much simpler and faster.

## Scenario Overview

I had a Contact subgrid on the Account form showing "All Active Contacts."

The goal was simple:

-   Select a few contacts from the subgrid.
-   Click a custom button labeled "Associate."
-   Automatically link those selected contacts to the current account record.

To make it more interactive, I also added another subgrid showing only the related contacts for that account.

When I clicked the "Associate" button, the selected contacts appeared instantly in that related subgrid.

## Associate Records using XRM WebAPI

The Associate action works perfectly for relationships such as One-to-Many and Many-to-Many.  
Here’s the full JavaScript code I used:

<script src="https://gist.github.com/tamilarasu-arunachalam/2f017b3dba30b252a12fbbccf3af5884.js?file=associateContactWithAccount.js"></script>

### Demonstration

![Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)]({{ site.baseurl }}/assets/images/051/img_29fa5b8871.png)2.  Added two Contact subgrids on the Account form:
    -   One shows All Active Contacts.
    -   Another shows Related Contacts.
![Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)]({{ site.baseurl }}/assets/images/051/img_1238f49940.png)4.  Created a custom subgrid button labeled "Associate".
![Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)]({{ site.baseurl }}/assets/images/051/img_49e580ab1a.png)6.  On clicking it, the selected contacts from the active view got linked with the account — instantly reflecting in the related subgrid.

## Disassociate Records using XRM WebAPI

Just like the associate action, we can disassociate records easily with a similar approach.  
Here's the sample code:

<script src="https://gist.github.com/tamilarasu-arunachalam/2f017b3dba30b252a12fbbccf3af5884.js?file=disassociateContactWithAccount.js"></script>

### Reference

-   [Associate Records using XRM WebAPI - Microsoft Docs](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute#associate-a-record)
-   [Disassociate Records using XRM WebAPI - Microsoft Docs](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute#disassociate-a-record)

_Have a great day!_