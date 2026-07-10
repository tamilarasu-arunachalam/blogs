---
layout: post
post_id: '078'
title: How to Configure and Manage Global Notifications in Dynamics 365 CRM Using JavaScript
date: 2026-07-19T23:11
image: /assets/images/078/1000122064.png
description: Learn how to create and manage Global Notifications in Dynamics 365 CRM and Power Apps Model-Driven Apps using JavaScript. Explore notification types, action buttons, notification levels, and a birthday notification example.
meta_keywords: Dynamics 365 CRM Global Notification, Model-Driven Apps Global Notification, Global Notification Dynamics 365, Xrm.App.addGlobalNotification, Xrm.App.clearGlobalNotification, Global Notifications in Dynamics 365, App Notifications Model-Driven App JavaScript, Dynamics 365 Custom Notifications, notification dynamics 365 javascript
category: Dynamics 365 CE
read_time: 10 mins
published: true
---

In Model-Driven Apps and Dynamics 365 CRM, we can configure notifications at the field level, form level, global level, and even as in-app notifications. In this article, we will explore **Global Notifications** and demonstrate how to configure them in a Model-Driven App using JavaScript.

Global notifications are not specific to any form or view. They are displayed across the application and can be accessed globally by users. Similar to form notifications, global notifications can display **Error**, **Warning**, **Success**, or **Information** messages. However, unlike form notifications, global notifications also support actions with event handlers.

Below is the syntax for setting a Global Notification.

```plain
Xrm.App.addGlobalNotification(notification).then(successCallback, errorCallback);
```

The `notification` parameter is a required object that must contain the following properties:

- `action` → An optional object that contains the properties `actionLabel` and `eventHandler`.
- `level` → A required numeric property that specifies the notification level. Possible values are 1: Success (Green), 2: Error (Red), 3: Warning (Orange), 4: Information (Gray)
- `message` → A required string property that contains the notification message.
- `showCloseButton` → A Boolean property that determines whether the close (x) button is displayed. If this property is set to false or not specified, users cannot manually dismiss the notification.
- `type` → A required numeric property that specifies the notification type. Currently, only the value `2` is supported, which displays the notification as a banner at the top of the application.

In the `successcallback`, a Promise object is returned containing the GUID that uniquely identifies the notification.

Below is the syntax for clearing an existing Global Notification.

```plain
Xrm.App.clearGlobalNotification(uniqueId).then(successCallback, errorCallback);
```

The parameter used is:

- `uniqueid` → A required GUID returned when the notification was created. This GUID is used to identify and clear the specific notification.

For demonstration purposes, I have implemented a scenario where all users receive a Global Notification whenever it is a user’s birthday, along with a **Wish** button.

To achieve this, I created a new **Date of Birth** field in the **User** table as a **Date Only** field. Then, I developed a JavaScript method to display the global birthday notification. You can find the code below.

Next, I created a button in the **Application Ribbon** using **Ribbon Workbench** and configured an **Enable Rule** with a **Custom Rule** step. I set the **InvertResult** property to **true** and added the required method and JavaScript web resource library.

[![Dynamics 365 CRM Global Notification](/assets/images/078/global-notification-enable-rule.png)](/assets/images/{{post_id}}/global-notification-enable-rule.png)

After a few debugging iterations, the code worked successfully. Below are the resulting screenshots.

For another user’s birthday

[![Dynamics 365 CRM Global Notification](/assets/images/078/other-user-global-notification.png)](/assets/images/{{post_id}}/other-user-global-notification.png)

For current user birthday

[![Dynamics 365 CRM Global Notification](/assets/images/078/same-user-global-notification.png)](/assets/images/{{post_id}}/same-user-global-notification.png)

#### References:

- [addGlobalNotification (Client API reference) in model-driven apps — Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/addglobalnotification)
- [clearGlobalNotification (Client API reference) in model-driven apps — Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app/clearglobalnotification)
