---
post_id: "057"
layout: post
title: "Server Logic in Power Pages Explained with Real Time API Example"
date: 2026-01-04 17:41:00 +0000
category: Power Pages
image: assets/images/057/img_7f5da6a23f.gif
categories: ["Power Pages", "HTML", "JavaScript", "Power Portal"]
---
Power Pages is commonly used to build external websites on top of Dataverse. While it works well for forms, lists, and UI customization, handling sensitive logic and third-party APIs has always been a challenge.

Most implementations rely on client-side JavaScript, which means API URLs, keys, and request details can be exposed in the browser. This becomes risky, especially for public-facing sites.

Server Logic in Power Pages helps solve this problem by allowing developers to run business logic on the server. Instead of calling external APIs directly from the browser, the site communicates with secure server-side logic that controls the request and response. This makes integrations safer, cleaner, and easier to manage.

- [Why server logic?](#why-server-logic)
- [Configure Server Logic](#configure-server-logic)
- [Set up Server Logic](#set-up-server-logic)
- [Demonstration](#demonstration)
- [My Thoughts](#my-thoughts)
- [References:](#references)

### Why server logic?

Server Logic is designed for scenarios where client side JavaScript is not sufficient or safe. Imagine an online store built on Power Pages that handles discount calculation, inventory validation, or payment verification. If these operations are implemented on the client side, users can inspect network calls and manipulate requests. Server Logic allows these operations to run securely on the server with proper permissions. The client only receives the required response, not the implementation details.

This makes Server Logic ideal for

-   Calling paid or sensitive external APIs
-   Handling authentication tokens and secrets
-   Implementing business validations
-   Orchestrating complex workflows
-   Integrating ERP or CRM systems securely

### Configure Server Logic

Before using Server Logic, it must be enabled in Power Pages. The configuration is done from Power Pages Management app. To-do so, follow the below steps

-   Open Power Pages Management
-   Navigate to Site Settings
-   Enable Server Logic feature

The site setting to be configured is in the below image.

[![]({{ site.baseurl }}/assets/images/057/img_64648c7b2a.png)]({{ site.baseurl }}/assets/images/057/img_64648c7b2a.png)

Server Logic uses server side JavaScript that follows the ECMAScript 2023 standard. However, it does not support browser specific objects such as window, document, fetch, or XMLHttpRequest. Instead, Power Pages provides server specific objects such as Server.Connector.HttpClient, Server.Context, and Server.Logger.

### Set up Server Logic

Follow these steps to create a new Server Logic in Power Pages.

-   Navigate to [make.powerpages.com](https://make.powerpages.com)
-   Select your Power Pages site.
-   Open Set up from the left navigation

[![]({{ site.baseurl }}/assets/images/057/img_3cb508b442.png)]({{ site.baseurl }}/assets/images/057/img_3cb508b442.png)

-   Under Integrations, select Server Logic
-   Click **\+ New Server Logic**.

[![]({{ site.baseurl }}/assets/images/057/img_0939feb576.png)]({{ site.baseurl }}/assets/images/057/img_0939feb576.png)

-   Provide the name, description, and permissions.
-   Click Add

[![]({{ site.baseurl }}/assets/images/057/img_8a9e07ee3c.png)]({{ site.baseurl }}/assets/images/057/img_8a9e07ee3c.png)

-   Once created, select the Server Logic and click Edit Code. This opens an in browser VS Code editor.

Inside the editor

-   Navigate to the serverlogics folder
-   Open the created server logic file
-   Modify or overwrite the default code

### Demonstration

For the demonstration purpose, I will create a web page which will show the current day weather for each hour by fetching the user latitude and longitude. For that, I have used the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) for getting the latitude and longitude of the user and [Open-Meteo API](https://open-meteo.com/en/docs) to get the weather data of the retrieved location. I have made the API call inside the Server Logic and call the server logic in the web page. You can find the code for the server logic below.

<script src="https://gist.github.com/tamilarasu-arunachalam/017ccd819f70b24ac0f96176b3d641cc.js?file=getWeather-serverLogic.js"></script>

For me i have a separate page for the demonstration of this use-case which is under **Weather** folder in VS Code. You can refer the below code for calling the server logic inside a web page.

<script src="https://gist.github.com/tamilarasu-arunachalam/017ccd819f70b24ac0f96176b3d641cc.js?file=weather-app.html"></script>

As I am based out of Chennai, the co-ordinates are in the below image

[![]({{ site.baseurl }}/assets/images/057/img_dc904356b0.png)]({{ site.baseurl }}/assets/images/057/img_dc904356b0.png)

And the resultant page is like the below screenshot

[![]({{ site.baseurl }}/assets/images/057/img_4fea17944e.png)]({{ site.baseurl }}/assets/images/057/img_4fea17944e.png)

### My Thoughts

After working with Server Logic, it clearly feels like a much-needed improvement for Power Pages. It removes the fear of exposing sensitive data such as client secrets, tokens, or transaction details.

This is especially useful for scenarios like payment integrations, ERP connections, or secure CRM data access. Even though the feature is still in preview, it already adds strong value. With future updates like better debugging tools, Liquid support, and easier testing, Server Logic has the potential to become a core building block for secure Power Pages solutions.

### References:

-   [Power Pages server logic overview | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/server-logic-overview)
-   [Create and manage server logic in Power Pages | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/author-server-logic)
-   [Interact with external services using server logic | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/server-logic-external-services)
-   [Access user and website details with server objects | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/server-objects)
-   [Docs | Open-Meteo.com](https://open-meteo.com/en/docs)
-   [Open-Meteo API](https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&hourly=temperature_2m&forecast_days=1)
-   [Geolocation: getCurrentPosition() method - Web APIs | MDN Learn](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)