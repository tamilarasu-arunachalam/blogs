---
post_id: "026"
layout: post
title: "Relate and Unrelate Dataverse rows using Power Automate"
date: 2023-07-09 03:39:00 +0000
category: Power Automate
image: assets/images/026/img_14c59e2764.png
categories: ["Power Apps", "Power Automate", "Dynamics 365 CE", "Dataverse"]
---
![]({{ site.baseurl }}/assets/images/026/img_14c59e2764.png)

## Relate rows

    We can associate Dataverse rows using Power Automate. The records must possess one-to-many or many-to-many relationship. 

-   Navigate to Power Automate 🡲 +New 🡲 Automation 🡲 Cloud Flow 🡲 Instant. 
-   Add a name to the flow and select manual flow as a trigger

[![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_c488f15644.png)]({{ site.baseurl }}/assets/images/026/img_c488f15644.png)

-   Add a Dataverse step named Relate Rows below the manual trigger step.

[![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_87f0ae32f6.png)]({{ site.baseurl }}/assets/images/026/img_87f0ae32f6.png)

-   In this article, I want to relate an account record with id 37b08bbd-30f7-ed11-8848-000d3a0a7d50 and a contact with record id a5268935-3e13-ee11-9cbd-000d3a0ab265.

[![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_e80a67c45d.png)]({{ site.baseurl }}/assets/images/026/img_e80a67c45d.png)

-   In the relate rows step, we must mention the Table/Entity, row ID (record ID), Relationship, and Relate with.
-   For the Relationship field, select the respective relationship for the record which we want to relate with. In my case, I have selected contact\_customer\_contacts.
-   Relate with field only accept the row URL or OData URL of the target record.
-   Save the flow and Test it.

![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_d693b6f0e4.png)

-   The flow ran successfully. Let's check the record which we related.

[![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_0188c4c3a2.png)]({{ site.baseurl }}/assets/images/026/img_0188c4c3a2.png)

-   The account **20 20 Printing Inc.** is related with the contact **John Doe.**

## Unrelate Rows

    We can disassociate the records which are associated using one-to-many or many-to-many relationship. We are using the same record (related in previous section) to demonstrate the Unrelate rows too.

-       Create a new Instant flow in Power Automate

[![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_0853f5b08b.png)]({{ site.baseurl }}/assets/images/026/img_0853f5b08b.png)

-   Add a Dataverse step named Unrelate rows below the manual trigger.

![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_ddf51f278e.png)

-   Add Table Name, Row ID, Relationship and Unrelate With fields.
-   For the Relationship field, select the respective relationship for the record which we want to disassociate with. In my case, I have selected contact\_customer\_contacts.
-   The unrelate with field accepts the record's OData URL. Do give it as mentioned in the above image.
-   Save the flow and run.
-   [![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_c0d61dc8ba.png)]({{ site.baseurl }}/assets/images/026/img_c0d61dc8ba.png)
    
-   The flow ran successfully. Let's check the record whether it is disassociated or not.

[![Relate and Unrelate Dataverse rows using Power Automate]({{ site.baseurl }}/assets/images/026/img_afc8b3991e.png)]({{ site.baseurl }}/assets/images/026/img_afc8b3991e.png)

-   Hurray! The record is disassociated.

Have a Great Day!