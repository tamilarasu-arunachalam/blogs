---
layout: post
post_id: '017'
title: Send In-app Notifications to Model Driven App from Power Automate
date: 2023-05-07 12:30:00 +0000
image: assets/images/017/img_bd5fd7ae90.png
description: ''
meta_keywords: In-App Notifications model driven apps, In-App Notifications dynamics 365 ce, In-App Notifications power automate,
category: Dynamics 365 CE
read_time: ''
categories:
  - Model Driven Apps
  - Dynamics 365 CRM Online
  - Power Automate
  - Dynamics 365 CE
---

In-app notifications in Model Driven Apps is a great option for notifying the user for any process, approval, and task related information. We can even create In-app notification in Power Automate. Let's see this process step by step. For this, you need to enable the In-app notifications from the app settings.

[![Send In-app Notifications to Model Driven App from Power Automate]({{ site.baseurl }}/assets/images/017/img_3e18198f16.png)]({{ site.baseurl }}/assets/images/017/img_3e18198f16.png)

Create an Instant flow in Power Automate by navigating to +New inside solution → Automation → Instant Flow. Add a new step to create a new record in Account table. Fill all the necessary fields. 

[![]({{ site.baseurl }}/assets/images/017/img_95c89a710d.png)]({{ site.baseurl }}/assets/images/017/img_95c89a710d.png)

Add another step to create notification. The table name should be Notifications, add title and body. In the Data field, add an object with fields like title, url, and navigationTarget. Add the entity and record ID to the url and select dialog for navigationTarget. I have used the below object in my flow.

```json
{
   "actions":[
      {
         "title":"View Account",
         "data":{
            "url":"?pagetype=entityrecord&etn=account&id=@{outputs('Create_New_Account')?['body/accountid']}",
            "navigationTarget":"dialog"
         }
      }
   ]
}
```

[![Send In-app Notifications to Model Driven App from Power Automate]({{ site.baseurl }}/assets/images/017/img_0d1e7f6299.png)]{{ site.baseurl }}/assets/images/017/img_0d1e7f6299.png)

I have added expiry to 60 (seconds) and iconType as Success. Save the Flow and Run. Once the flow ran successfully, navigate to the Model Driven App, and you'll get to see the notification popped out. 

[![Send In-app Notifications to Model Driven App from Power Automate]({{ site.baseurl }}/assets/images/017/img_30d5073c97.png)]({{ site.baseurl }}/assets/images/017/img_30d5073c97.png)

If we click on the View Account URL in the notification, the dialog will be prompted with the created account. As the expiry time is 60 seconds, it will be vanished after the expiry time.
