---
layout: post
post_id: '022'
title: How to create Custom Connector for Power Automate from Scratch
date: 2023-06-12 17:41:00 +0000
image: assets/images/022/img_374c6419b0.png
description: ''
meta_keywords: ''
category: Power Automate
categories:
  - Power Apps
  - Custom Connector
  - Power Automate
---

- [Connectors](#connectors)
- [Custom Connectors](#custom-connectors)
- [Creating Custom Connector](#creating-custom-connector)
- [Use Custom Connector in Flow](#use-custom-connector-in-flow)
- [Summary](#summary)

## Connectors

    A connector is a proxy or wrapper around an API which enables interaction between the underlying service and Microsoft Power Automate or Power Apps. It gives users a means to link their accounts and use a library of premade actions and triggers to create apps and processes.

    Each connector provides a set of actions and triggers that can be used. These activities can be readily utilised within your apps and processes after you connect to the underlying service.

## Custom Connectors

    There may be occasions when you need to use APIs, services, and systems that don't have ready-made connectors. You can create bespoke connectors with their own triggers and actions to support more specialised circumstances. These connectors work by calling particular functions in the underlying service, and data is returned as a result.

    You can use the custom connector in both Power Apps, Power Automate and Logic Apps. The custom connector can be shared to another user within the organization. Sharing is optional. They can use it as like the Microsoft managed connector.

In this article, I have used the [JSON Placeholder API](https://jsonplaceholder.typicode.com/) for demonstrating the custom connector.

## Creating Custom Connector

-   Go to [https://make.powerautomate.com](https://make.powerautomate.com)  **→** Data  **→** Custom Connector.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_aef1785fda.png)]({{ site.baseurl }}/assets/images/022/img_aef1785fda.png)

-   Click on the + New Custom Connector and select Create from blank from the list.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_6994d97032.png)]({{ site.baseurl }}/assets/images/022/img_6994d97032.png)

-   Add a relevant name to the connector and hit the continue button.
-   It will navigate you to the General section of the custom connector page. There fill the necessary fields like description, scheme, host, and base as like the below image.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_04da16391a.png)]({{ site.baseurl }}/assets/images/022/img_04da16391a.png)

-   Then click on the security button in the bottom. It will take you to the Security Page. Select No Authentication for Authentication Type (**_Note:_** _As the JSON Placeholder API doesn't need any authentication_). If the API that you have used needs Authentication, you need to select any other suitable Authentication. Then click on the Definition.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_4a5dda9732.png)]({{ site.baseurl }}/assets/images/022/img_4a5dda9732.png)

-   In the Definition page, click on the + New Action under the Actions section on the left. 

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_50f352a042.png)]({{ site.baseurl }}/assets/images/022/img_50f352a042.png)

-   A form opens with some inputs in the right. Add Summary, Description, and Operation ID. 

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_8e802689c2.png)]({{ site.baseurl }}/assets/images/022/img_8e802689c2.png)

-   Scroll a little bit and move to the request section and click on + Import from sample.
-   Select the verb as GET and add https://jsonplaceholder.typicode.com/users?id=1 to the URL.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_5bca0ce332.png)]({{ site.baseurl }}/assets/images/022/img_5bca0ce332.png)

-   The request got added to the connector with the query. Move to the response section.
-   Paste the same URL (https://jsonplaceholder.typicode.com/users?id=1) in the browser and copy the response JSON.
-   Click on the + Add default response and paste the copied response to the body and click on import.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_722b82f63a.png)]({{ site.baseurl }}/assets/images/022/img_722b82f63a.png)

-   Click on code. In the code page, as our connector doesn't need code, so skip and click on Create Connector on the Top menu bar.
-    Move to the Test section and create a new connection if not created. In the Operations section. Add id as 1 and click on Test Operation.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_519c08ffb5.png)]({{ site.baseurl }}/assets/images/022/img_519c08ffb5.png)

-   After the test got succeeded, you will get the response below the operation.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_ae74001379.png)]({{ site.baseurl }}/assets/images/022/img_ae74001379.png)

-   Our connector is ready to use now.

## Use Custom Connector in Flow

-   Go to the solution and navigate to + New  **→** Automation **→** Cloud Flow **→** Instant.
-   Add a relevant name and select Manually trigger a flow as a trigger. Add a number input for passing user id.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_a4ce7f08a1.png)]({{ site.baseurl }}/assets/images/022/img_a4ce7f08a1.png)

-   Add a new step and navigate to custom, you'll get to see the connector you created.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_699d4d378c.png)]({{ site.baseurl }}/assets/images/022/img_699d4d378c.png)

-   Click on the Custom connector, and you will see the action you created.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_944aa61676.png)]({{ site.baseurl }}/assets/images/022/img_944aa61676.png)

-   Select the action and pass the user id parameter, which we initialized inside the trigger.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_179e42d90f.png)]({{ site.baseurl }}/assets/images/022/img_179e42d90f.png)

-   Save the Flow and Run.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_2ef3d8e4f7.png)]({{ site.baseurl }}/assets/images/022/img_2ef3d8e4f7.png)

-   The flow ran successfully and when we check the response from the run history of the custom connector looks like the below image.

[![How to create Custom Connector for Power Automate from Scratch]({{ site.baseurl }}/assets/images/022/img_ad6ab91f84.png)]({{ site.baseurl }}/assets/images/022/img_ad6ab91f84.png)

-   As I have passed the id 2, so I got the details of the user who has the id of 2.

## Summary

    Custom connectors are used for leveraging the API with the Power Apps or Power Automate. We can use this custom Connector with Power Apps too. By this way, we can create and use the custom connector in Power Automate.

Have a Great Day!
