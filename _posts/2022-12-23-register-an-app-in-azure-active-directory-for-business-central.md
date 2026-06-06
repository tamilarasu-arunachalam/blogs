---
post_id: "009"
layout: post
title: "Register an App in Azure Active Directory for Business Central"
date: 2022-12-23 16:59:00 +0000
category: Azure Active Directory
image: "assets/images/009/img_8d15ac4e46.png"
categories: ["Azure Active Directory", "Business Central"]
---
In Business Central, Web Service Access Key is used for the  authentication of business central from external applications. But unfortunately business central stopped the usage web service access key. There is another choice to authenticate Business central which is Azure Active Directory App.

[![]({{ site.baseurl }}/assets/images/009/img_131ed5ae1c.png)]({{ site.baseurl }}/assets/images/009/img_131ed5ae1c.png)

This article guides you to register an app in Azure Active Directory and make the application data accessible for external client applications with OAuth authentication. The registered app allows you to read and write data in the application data. We can also register the app for other Dynamics 365 applications like CRM, Business Central/NAV and Finance and Operations. Let's dive into the process.

### Prerequisites:

-   Microsoft account with Dynamics 365 Business Central license
-   The account should have administrator privilege

#### Steps:  [![]({{ site.baseurl }}/assets/images/009/img_4a99213bc1.png)]({{ site.baseurl }}/assets/images/009/img_4a99213bc1.png)

-   Login to [azure portal](https://portal.azure.com/) and click on Active Directory. 

[![]({{ site.baseurl }}/assets/images/009/img_43138d5844.png)]({{ site.baseurl }}/assets/images/009/img_43138d5844.png)  

-   Select App Registration under the **\+ Add** dropdown

[![]({{ site.baseurl }}/assets/images/009/img_fa73a9aebf.png)]({{ site.baseurl }}/assets/images/009/img_fa73a9aebf.png)  

-   A form opens aside, fill a meaningful name for your app, select Multi-tenant for account type, in the Redirect URI select platform as web and give url as [https://businesscentral.dynamics.com/](https://businesscentral.dynamics.com/) and click on **Register** to create an app.

[![]({{ site.baseurl }}/assets/images/009/img_8e498668c4.png)]({{ site.baseurl }}/assets/images/009/img_8e498668c4.png)  

-   In some seconds, the app got created and you have got to see the client id and tenant id.

[![]({{ site.baseurl }}/assets/images/009/img_75a8160f2d.png)]({{ site.baseurl }}/assets/images/009/img_75a8160f2d.png)  

-   In the API Permissions menu click on **\+ Add a permission**, 

[![]({{ site.baseurl }}/assets/images/009/img_8246ced4aa.png)]({{ site.baseurl }}/assets/images/009/img_8246ced4aa.png)  

-   Select the desired app for enabling client to access. I have selected Dynamics 365 Business Central. 

[![]({{ site.baseurl }}/assets/images/009/img_81d16591cf.png)]({{ site.baseurl }}/assets/images/009/img_81d16591cf.png)  

-   Select the delegated permissions, check all the permissions and select all the permission under Application permissions also. Then click on **Add permissions.**

[![]({{ site.baseurl }}/assets/images/009/img_e8483533e0.png)]({{ site.baseurl }}/assets/images/009/img_e8483533e0.png)  

-   After giving the consent, check all the permissions are getting the admin consent and finally the permissions list will looks like the below image

[![]({{ site.baseurl }}/assets/images/009/img_35365c5b0a.png)]({{ site.baseurl }}/assets/images/009/img_35365c5b0a.png)  

-   In the Certificated & Secrets menu, click on the + New client secret, In the pop-up add a name, select the expiration duration and click **Add.**

[![]({{ site.baseurl }}/assets/images/009/img_e51f34e5f9.png)]({{ site.baseurl }}/assets/images/009/img_e51f34e5f9.png)  

-   Navigate to the Business Central and search for Azure Active Directory applications and get into it.
-   Click on **+** to add a new record. Add the Client ID and Description from the registered Azure App

[![]({{ site.baseurl }}/assets/images/009/img_1b7e590031.png)]({{ site.baseurl }}/assets/images/009/img_1b7e590031.png)  

-   Change the State field value to Enabled and click on Yes in the confirmation alert.
-   In the User Groups, select the **D365 FINANCE, D365 ACCOUNTANTS** and **D365 FULL ACCESS** from the list.

[![]({{ site.baseurl }}/assets/images/009/img_8acbc7dd65.png)]({{ site.baseurl }}/assets/images/009/img_8acbc7dd65.png)  

-   Using this app you can connect Business Central to external system using these client id and secret