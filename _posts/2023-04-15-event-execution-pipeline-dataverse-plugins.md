---
layout: post
post_id: '014'
title: Plugins and Event Execution Pipeline in Dataverse
date: 2023-04-15 18:46:00 +0000
image: assets/images/014/img_dba72be05a.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Dynamics 365 CE
  - Dataverse
  - Plugins
---

-   [Plugins in Dataverse](#plugins-in-dataverse)
-   [Event Execution Pipeline](#event-execution-pipeline)
-   [Pre and Post Images](#pre-and-post-images)
-   [Points to Remember](#points-to-remember)

## Plugins in Dataverse

        Plugin is a custom event handler that executes in response to a specific event raised during processing a Dataverse operation. It is a custom business logic implemented using custom class as a Class Library in .NET framework. It is compiled into a  assembly that can be uploaded and registered in Dataverse. One or more combined plugin classes are compiled within an assembly which can be registered on specific events within the Dataverse plugin event framework. When the target event occurs on the specified data processing operation, the plugin registered on the event gets executed. Get more curated details of plugin from the Microsoft documentation [here](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/plug-ins).

## Event Execution Pipeline

[![Plugins and Event Execution Pipeline in Dataverse]({{ site.baseurl }}/assets/images/014/img_6295358b9d.png)]({{ site.baseurl }}/assets/images/014/img_6295358b9d.png)

1.  Pre-Validation
2.  Pre-Operation
3.  Main-Operation
4.  Post-Operation

### **Pre-Validation**

    The plugins registered in this pre-event executes outside the database transactions and before the security validations like permission or calling or logged in user check . The stage number for Pre-Validation is 10. In this event we can add some logic to cancel or rollback the operation which is tend to happen. It executes before the occurrence of the Main-Operation, an internal server operation. The plugins in Pre-Validation stage runs in synchronous mode.

### Pre-Operation

    The Plugins under this stage are executed inside the database transaction and before the Main-Operation. The stage number for Pre-Operation is 20. This stage includes security checks and validations. Cancelling an operations is not recommended in Pre-Operation because the cancellation may trigger rollbacks and it may impact performance. The plugins in this stage runs in synchronous mode. Change the value of the entity mentioned in the message before the main operation can be achieved through this stage.

### Main-Operation

    A Platform core operation held internally. No custom plugins can be registered in this stage. It is the stage 30.

### Post-Operation

    The plugins registered in this stage runs after the execution of  main operation and it is held with in the database transaction. The stage number for Post-Operation is 40. This stage is used for modifying the message before it is returned back to the caller. This stage shouldn't be used for modifying the entity mentioned in the message because it will trigger new update event. The plugins in this stage runs in both synchronous and asynchronous mode. The asynchronous plugins may runs after the database transaction. 

## Pre and Post Images

    Images are the snapshots of the entity's attributes before and after the main operation. The value of the attributes before the update operation can be retrieved with these images. 

Two types of Images:

-   Pre-Image
-   Post-Image

#### Pre-Image

    The value of the attributes before the main operation can be retrieved through this Pre-Image.

#### Post-Image

    The value of the attributes after the main operation can be retrieved through this Post-Image.

The below table shows the availability of images in Pre and Post Events

[![Plugins and Event Execution Pipeline in Dataverse]({{ site.baseurl }}/assets/images/014/img_35ca6f65a9.png)]({{ site.baseurl }}/assets/images/014/img_35ca6f65a9.png)

✔ - Available

✖ - Not Available

## Points to Remember

-   The time limit for the execution of plugin in 2 minutes, rather it would be a synchronous or asynchronous plugin. 
-   If the plugin fails by exceeding the time limit of 2 minutes, it will throw a [System.TimeoutException](https://learn.microsoft.com/en-us/dotnet/api/system.timeoutexception)
-   Asynchronous plugins are queued by the Asynchronous Queue Agent and executed later by the Asynchronous Service.
