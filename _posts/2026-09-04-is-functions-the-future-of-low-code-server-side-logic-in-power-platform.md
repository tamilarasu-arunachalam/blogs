---
layout: post
post_id: '083'
title: Is Functions the Future of Low-Code Server-Side Logic in Power Platform?
date: 2026-09-06T23:11:00
image: ''
description: Explore Dataverse Functions, a low-code way to build server-side logic using Power Fx and integrate seamlessly with Power Apps and Power Automate.
meta_keywords: Dataverse Functions, Dataverse Plugins, Low Code Plugins, Server Side Logic, Dataverse Automation, Power Platform Functions, Custom Business Logic, Dataverse Development, Microsoft Power Platform, Dataverse Web API
category: Power Platform
read_time: 10 mins
published: true
---

As the traditional plugin process for executing server-side business logic is quite complex and time-consuming, developers need to create a Plugin as a custom class, compile it into a .NET Framework assembly, and then register the assembly using the Plugin Registration Tool in Dataverse.

Although plugins provide powerful customization capabilities, the overall development and deployment process requires coding expertise and additional effort. We also have Dataverse Actions, where custom business logic can be implemented and invoked using Client Scripts, Power Automate Flows, or Plugins. However, this approach still involves development effort and technical knowledge.

Until recently, plugins were the primary supported approach for implementing server-side business logic. This is where **Dataverse Functions** come into the picture, offering a simpler approach with minimal code and easier execution.

Functions in Dataverse are executable commands and reusable solution objects in which business logic can be written using **Power Fx**. Power Fx is a general-purpose, strongly typed, declarative, and functional programming language.

> **Note:** Dataverse Functions were formerly known as **Instant Plugins** or **Low-Code Plugins**. As Low-Code Plugins have been marked as deprioritized, Functions are the newer version of that capability and are currently available in preview.

Functions are stored within the Dataverse database, making them easy to integrate with Power Apps and Power Automate. Since they are built using the Power Fx expression language, makers can create complex business logic with minimal coding knowledge. Functions can also connect directly to Dataverse and external data sources through supported connectors.

Functions support input and output parameters, can be invoked manually, and support both **Global** and **Table** scopes.

Server-side logic provides several benefits, including:

- **Security:** Logic is executed on the server, helping prevent unauthorized access and manipulation.
- **Performance:** Processing occurs closer to the data source, reducing data transfer between the client and server.
- **Reliability:** Ensures that business logic is consistently applied across all clients, minimizing errors and inconsistencies.
- **Maintenance:** Since the logic is centralized and stored on the server, it is easier to maintain and update.

## Properties of Functions

![Dataverse Function Properties](assets/images/f27b848bfeed/function-properties.png)

As Functions are manually invokable and custom coded, they support parameters with the following data types:

- String
- Integer
- Float
- DateTime
- Decimal
- Boolean

Below are the unique properties of these parameters.

![Dataverse Function parameter Properties](assets/images/608488e54643/function-parameter-properties.png)

## Access Permissions for Functions

Below are the access permissions available for Functions.

![Dataverse Functions permissions](assets/images/25cf7bcba644/function-permissions.png)

## Creating a Function

Now that we understand what a Function is, let's look at how to create and use it in apps and flows.

To create a Function in Power Platform, the user must have the **System Customizer** security role in the Power Platform environment.

Follow the steps below:

![Create Dataverse Functions](/assets/images/65cef04e27f7/function-create-new-1.png)

1. Navigate to the preferred Solution → **Objects → Automation → Function**.
2. A side pane will open, prompting you to enter the **Display Name** and **Description** for the Function.
![Create Dataverse Functions](/assets/images/17b258113789/function-create-new-2.png)
3. Add the required **Input** and **Output Parameters** along with their names and data types.
![Create Dataverse Functions](/assets/images/314f6c54e31b/function-create-new-3.png)
4. Optionally, select table references from the supported list of Dataverse tables. These references can be used to access data through functions such as **Filter()** and **LookUp()**.
5. Enter the Power Fx expression in the **Formula** field.
6. Save and publish the Function.

## Debugging Using the `Trace()` Function

To debug a Function using the `Trace()` function, ensure that plug-in and custom workflow activity tracking is enabled.

1. Go to Power Apps (`make.powerapps.com`).
2. Select the **Settings** gear icon in the upper-right corner and choose **Advanced Settings**.
3. Navigate to **Settings → Auditing → Global Audit Settings**.
4. On the **Customization** tab, ensure that **Enable logging to plug-in trace log** is set to **All**.

## Invoking Functions Across Different Platforms

### **Canvas App:**

You can call your function with parameter like below

```plain
Environment.new_GetRevenueandCreditLimit(
{
    AccountId: a1837caf-84a4-4627-a0c6-8b8dc2fc7dc8
}
);
```

### Power Automate Cloud Flow

- In a cloud flow, add a new action from the Microsoft Dataverse connector.
- Select the action called Perform an unbound action.
- Select your Function. The Function will appear with its unique schema name and prefix.
- Provide values for all required input parameters.

### Dataverse Web API

Functions can also be invoked from the Dataverse Web API, making them accessible from external applications and integrations.

```
POST [Organization URI]/api/data/v9.1/myapi_CustomUnboundAPI
OData-MaxVersion: 4.0
OData-Version: 4.0
Content-Type: application/json; charset=utf-8

{
  "AccountId": "a1837caf-84a4-4627-a0c6-8b8dc2fc7dc8"
}
```

## Limitations of Dataverse Functions

Dataverse Functions currently support only the list of Power Fx functions documented in Microsoft Learn. Before implementing Functions in production scenarios, it is recommended to review the latest supported functions and limitations in the official Microsoft documentation.

### References:

- [Functions in Microsoft Dataverse - Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/low-code-plug-ins?tabs=instant)
- [Create and use functions in Microsoft Dataverse - Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/functions-create)
- [Invoke a function using Power Platform - Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/functions-invoke)
- [Example functions in Microsoft Dataverse - Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/functions-examples)
- [Supported functions in Microsoft Dataverse - Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/functions-supported-power-fx)
- [Streamline app development with low-code plug-ins in Microsoft Dataverse - Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/low-code-plug-ins?tabs=instant)
