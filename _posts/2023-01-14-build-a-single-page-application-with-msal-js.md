---
post_id: "011"
layout: post
title: "Build a Single Page Application with MSAL.js"
date: 2023-01-14 19:04:00 +0000
category: Azure Active Directory
image: "assets/images/011/img_d349a72e26.png"
categories: ["Azure Active Directory", "Dataverse", "Dynamics 365 Web API"]
---
Hi fellow tech peeps out there. Have you ever thought of using the dataverse table data in the normal HTML page with some CSS styles in it. This article is about how to access the dataverse data using the MSAL.js(_Microsoft Authentication Library_). 

### Pre-requisites:

-   Access to Dataverse or Dynamics 365 CE applications
-   Azure license with permission to manage applications
-   Visual Studio Code, [click here to download 🔗](https://code.visualstudio.com/download)
-   Install Live Server Extension, [click here to download 🔗](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server)

### Steps:

-   Configure the Azure Active Directory app
-   Develop Single Page Application
-   Access Dataverse Data

### Configure the Azure Active Directory app:

[![]({{ site.baseurl }}/assets/images/011/img_04299dc2e3.png)]({{ site.baseurl }}/assets/images/011/img_04299dc2e3.png)

For accessing the dataverse data, **register an application in azure active directory**. In the registered app, navigate to the Authentication → **\+ Add a platform**. Select the Single-page application under Configure Platforms. Use **http://localhost:5500/index.html** for Redirect URIs and click on configure and save.

[![]({{ site.baseurl }}/assets/images/011/img_10133e1fb4.png)]({{ site.baseurl }}/assets/images/011/img_10133e1fb4.png)

#### Develop Single Page Application :

    This Single Page Application is used for sign-in, view dataverse table data and sign-out. Open the visual studio code(recommended) or any other IDE, create a folder and create a html file named index.html inside the folder. The code for the page is below. In the code, the configuration stuffs like tenant id, client id and client secret should be changed according to their environment.

<script src="https://gist.github.com/tamilarasu-arunachalam/bd01699841640d47025a8ef602d09573.js"></script>

Click on the ![]({{ site.baseurl }}/assets/images/011/img_b04d387812.png) button in the bottom of the visual studio code. It navigate to the default browser and open the index.html page over there.

[![]({{ site.baseurl }}/assets/images/011/img_ffab8cda00.png)]({{ site.baseurl }}/assets/images/011/img_ffab8cda00.png)

### Access Dataverse Data :

    Click on the Login button in the opened web page. The authentication window for microsoft login pops out. login with the credentials which has access to dataverse or dynamics 365 CE environments. After logged in the page appears with the name of the user and sign-out button on the top-right corner. And the Get Accounts button is in the middle of the page. 

[![]({{ site.baseurl }}/assets/images/011/img_39f0007575.png)]({{ site.baseurl }}/assets/images/011/img_39f0007575.png)

Click the Get Accounts button, then in the fraction of seconds the table with the accounts data is displayed. For Logging out of the web-page, the logout button is the top-right corner below the name. click on logout → select the account to logout.

[![]({{ site.baseurl }}/assets/images/011/img_67da25cbd0.png)]({{ site.baseurl }}/assets/images/011/img_67da25cbd0.png)

Keep Learning!

### Reference:

[Register an App in Azure Active Directory](https://www.tamilarasu.me/2022/12/steps-to-register-app-in-azure-active-directory.html)

[Register and configure a SPA application for Dataverse using msal.js](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/quick-start-register-configure-simplespa-application-msal-js)