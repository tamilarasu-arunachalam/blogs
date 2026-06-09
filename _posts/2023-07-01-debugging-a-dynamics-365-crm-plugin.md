---
post_id: "025"
layout: post
title: "Debugging a Dynamics 365 CRM Plugin"
date: 2023-07-01 19:07:00 +0000
category: Dynamics 365 CE
image: assets/images/025/img_df0059ddb7.png
categories: ["Model Driven Apps", "Dynamics 365 CRM Online", "Dynamics 365 CE", "Plugins"]
---
- [Debugging](#debugging)
- [Debugging a Dynamics 365 CRM plugin](#debugging-a-dynamics-365-crm-plugin)
- [Trace Logs](#trace-logs)
- [Persist to Entity (Recommended)](#persist-to-entity-recommended)
  - [Follow the below steps to debug plugin using Persist to Entity:](#follow-the-below-steps-to-debug-plugin-using-persist-to-entity)
- [Exception](#exception)
  - [Follow the below steps to debug plugin using Exception:](#follow-the-below-steps-to-debug-plugin-using-exception)
- [Summary](#summary)

## Debugging

    Debugging is the process of identifying and resolving errors in a system. Though it is a complex and time-consuming task, it is necessary to debug the code and ensure the functionality of the application. Because, a single bug can cause a drastic impact. It might be an iterative process and might require multiple attempts to track and resolve the bugs.

## Debugging a Dynamics 365 CRM plugin

    Dynamics 365 CRM plugins are developed in C#(.NET). Plugins are of two types, which are synchronous and asynchronous. We cannot debug the plugin on the runtime, rather we can do it using profiler. A profiler will capture the instance of the plugin execution and save it as a row in the plugin-profiler table in Dataverse. You need [Plugin Registration tool](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/download-tools-nuget) to debug the Dataverse plugins.

    There are multiple ways in debugging a Dynamics 365 CRM Plugins. They are.  

-   Trace Logs
-   Persist to Entity
-   Exception

I have used [create email activity plugin](https://www.tamilarasu.me/2023/06/end-a-email-in-dynamics-365-crm-using-plugins.html) to demonstrate the debugging of the plugin. This plugin creates an email activity when a contact record gets created. After the development, build the plugin and sign the assembly.

## Trace Logs

    We can log the errors using **ITracingService** interface in plugin. This trace log accepts only the string to log. It is used for debugging both synchronous and asynchronous plugins. If you want to log values of any other data type, you should typecast it to string. This will log the errors, and it will appear on the Plugin Trace logs. Before that, you should make sure that your environment enabled the Plugin Trace logs.

`ITracingService log = (ITracingService)serviceProvider.GetService(typeof(ITracingService));   ``log.Trace("Execution Started");`

-   To do so, you should navigate to Settings 🡲 Advanced Settings 🡲 Administration 🡲 System Settings 🡲 Customization 🡲 Enable Plug-in and custom workflow activity tracing to All (if not enabled).

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_0db7a16c1e.png)]({{ site.baseurl }}/assets/images/025/img_0db7a16c1e.png)

-   To see the Trace logs, navigate to Settings 🡲 Advanced Settings 🡲 Plug-In Trace log.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_7eb3e81c34.png)]({{ site.baseurl }}/assets/images/025/img_7eb3e81c34.png)

-   Once we hit the Plug-In Trace log, it will take us to the Plugin Trace Logs grid view page. Click on any of the record, you will get to see the trace logs which are logged during the execution of Plugin code.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_bb2cf0f148.png)]({{ site.baseurl }}/assets/images/025/img_bb2cf0f148.png)

-   Open any of the record, you will see the configuration and execution details. In the execution section, you will see the message block which we logged while developing a plugin.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_94e3cd99e2.png)]({{ site.baseurl }}/assets/images/025/img_94e3cd99e2.png)

## Persist to Entity (Recommended)

    This is the recommended way of debugging Dynamics 365 CRM plugins. In this method, we can use the saved profiles from the plugin profiles table to debug the plugin code. It is used for debugging both synchronous and asynchronous plugins. In this method, we can catch the profiler once the whole process is completed.

### Follow the below steps to debug plugin using Persist to Entity:

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_01797fd2f6.png)]({{ site.baseurl }}/assets/images/025/img_01797fd2f6.png)

-   In Visual Studio, place some break points in the code to catch the debugger.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_fc1792d301.png)]({{ site.baseurl }}/assets/images/025/img_fc1792d301.png)

-   Go to Debug 🡲 Attach to Process and select Plugin Registration Tool and hit Attach.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_145bfe6593.png)]({{ site.baseurl }}/assets/images/025/img_145bfe6593.png)

-   For that, we have to register our plugin in Plugin Registration Tool. Create a new plugin assembly by uploading the .dll file from files. 

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_2d45214e0a.png)]({{ site.baseurl }}/assets/images/025/img_2d45214e0a.png)

-   Create a new step under the plugin by adding message, entity, event-execution, and type.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_90cd9dbfd3.png)]({{ site.baseurl }}/assets/images/025/img_90cd9dbfd3.png)

-   Select the step and click on the Start Profiling button on the navigation bar. A dialog box prompts up and asking for specifying profiler storage option.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_08bf645b6b.png)]({{ site.baseurl }}/assets/images/025/img_08bf645b6b.png)

  

-   Select persist to Entity as a profile storage option and click on the OK.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_af4062f817.png)]({{ site.baseurl }}/assets/images/025/img_af4062f817.png)

-   Once the plugin got profiled, you will see the text profiled near your plugin step.
-   Then perform the actual scenario to capture the profile. In my context, I have created a new contact record.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_535e4cc1eb.png)]({{ site.baseurl }}/assets/images/025/img_535e4cc1eb.png)

-   Click on debug in Plugin Registration Tool and click on the down arrow symbol to add the captured Profile

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_a31b1de0f4.png)]({{ site.baseurl }}/assets/images/025/img_a31b1de0f4.png)

-   Add the assembly and click on start execution button 

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_4b07a7ccda.png)]({{ site.baseurl }}/assets/images/025/img_4b07a7ccda.png)

-   Once you click Start Execution, it will navigate to the Visual Studio and stops at the break point. Then you can move forward by clicking **F10** key. To check the values for the variables, you can hover over the variable and make sure the value is correct or change the code to make it right. 

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_beb872fce5.png)]({{ site.baseurl }}/assets/images/025/img_beb872fce5.png)

## Exception

    Exception is another way to debug the Dataverse plugins. It will use the exception file as the profile. In this method, we cannot proceed the whole action even it is executed in right way. Because of the system throwing an exception and stops the process. This method is used for debugging the synchronous plugins.   

### Follow the below steps to debug plugin using Exception:

    **_Note:_** I have used the same plugin which is demonstrated in Persist to entity method

-   Place the break points on the code in Visual Studio and Go to Debug 🡲 Attach to Process and Select Plugin Registration Tool.
-   In Plugin Registration tool, select the step and click on Start Profiling.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_b5f251c54a.png)]({{ site.baseurl }}/assets/images/025/img_b5f251c54a.png)

-   Select Exception for profile storage and click OK.
-   Go to the Application and perform the action to trigger the plugin.
-   In my context, I have to create a contact to trigger the plugin. I will get the business process error with the exception file in it.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_73d73c7009.png)]({{ site.baseurl }}/assets/images/025/img_73d73c7009.png)

-   Click on the download log file and you will get the .txt file.
-   Go to the Plugin Registration Tool and click on Debug and select the downloaded .txt file and add the respective assembly.

[![Debugging a Dynamics 365 CRM Plugin]({{ site.baseurl }}/assets/images/025/img_f611e99fc0.png)]({{ site.baseurl }}/assets/images/025/img_f611e99fc0.png)

-   Click on the Start Execution, it will navigate to Visual Studio and hit the break point.
-   You can move the debugger using **F10** key and hover over the variables to check the values.

## Summary

Thus, the above-mentioned ways are used for debugging the plugins. But Microsoft recommends to use persist to entity for debugging. Trace logs will be used for logging the values. As programming is not a one time activity, and it requires a lot of debugging to make a right application.

Have a great day!