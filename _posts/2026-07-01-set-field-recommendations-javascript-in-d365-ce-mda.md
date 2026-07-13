---
layout: post
post_id: '076'
title: Set Field Recommendations Using JavaScript in Dynamics 365 CE / Model-Driven Apps
date: 2026-07-05T23:11
image: assets/images/076/recommendation-using-javascript.png
description: Learn how to display field recommendation notifications in Dynamics 365 CE and Model-Driven Apps using JavaScript and the addNotification() method. Step-by-step explanation with practical examples.
meta_keywords: addNotification Dynamics 365, Dynamics 365 field recommendation, Recommendation notification Dynamics 365, How to show recommendation notification in Dynamics 365 CE, Using addNotification method in Dynamics 365 Model-Driven Apps, Display field recommendations using JavaScript in Dynamics 365, Dynamics 365 form field recommendation example, Dynamics 365 CE notificationLevel recommendation, How to add field notifications in Model-Driven Apps
category: Dynamics 365 CE
read_time: 5 mins
published: true
---

In Dynamics 365 Customer Engagement (CE), we often use **Business Rules** to provide field recommendations. However, there may be scenarios where we need more flexibility and want to display recommendations dynamically using JavaScript.

In this blog, we’ll learn how to set a **recommendation notification** on a field in **Dynamics 365 CE / Model-Driven Apps** using the `addNotification()` method.

Since a recommendation is essentially a field-level notification, it can be implemented using the `addNotification(notification)` method available on form controls.

- `actions` → An Optional property. Represents an array of action objects that can be displayed along with the notification. Typically, not required when using the `ERROR` notification level.
- `messages` → A required property, must be an array of strings. The specified text is displayed as the notification title or recommendation message.
- `notificationLevel` → Required property which must be either `ERROR` or `RECOMMENDATION`.
- `uniqueId` → Required property which must be a unique string identifier for the notification. Used later to remove the notification by calling the `clearNotification(uniqueId)` method.

#### Demonstration:

In this example, I have implemented a simple use case to demonstrate field recommendations using JavaScript. 

If the **Nickname** field on the Contact form is empty, the system recommends using the **First Name** value as the Nickname.

To achieve this, I created a JavaScript web resource and registered the method in the form’s **OnLoad** event handler.

<script src="https://gist.github.com/tamilarasu-arunachalam/71a6fb82844f0d73103b4ad5ada1a0ed.js"></script>

When the form loads, the recommendation appears on the Nickname field, prompting the user to use the First Name as a suggested value.

The GIF below demonstrates the recommendation notification in action.

![Set Recommendation for a field using JavaScript Dynamics 365 CE](/assets/images/076/set-recommendation.gif)

#### References:

- [addNotification (Client API reference) in model-driven apps — Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification)
