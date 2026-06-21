---
post_id: "010"
layout: post
title: "Connect the Azure AD App for Business Central with Postman using OAuth 2.0 Authentication"
date: 2022-12-31 16:34:00 +0000
category: Azure Active Directory
image: "assets/images/010/img_3e414448ba.png"
categories: ["Business Central API", "Azure Active Directory"]
---
Postman is the tool which is used to develop and test API's. Let's see how you can connect the registered app for the Dynamics 365 Business Central application with the external system which is Postman to test Web API using the OAuth 2.0 Authentication.

## Pre-requisites:

-   Postman app - [download here](https://www.postman.com/downloads/) or use online version
-   Registered Azure AD app for Business Central - [Click here](https://www.tamilarasu.me/2022/12/register%20an%20app%20in%20azure%20active%20directory%20for%20business%20central.html) to see how to register an app in Azure AD.

[![]({{ site.baseurl }}/assets/images/010/img_b984c782b0.png)]({{ site.baseurl }}/assets/images/010/img_b984c782b0.png)

  

### Create a Postman Collection:

[![]({{ site.baseurl }}/assets/images/010/img_6de50fa10d.png)]({{ site.baseurl }}/assets/images/010/img_6de50fa10d.png)

Create a collection by clicking the + icon in the top left corner of the menu. This collection holds some values which is often used for authentication and HTTP requests. Those values are declared as variables and it is reusable. The variables are simply used by placing double curly braces on both beginning and end like {% raw %}{{<variable name>}}{% endraw %}. These variables are used inside another variable also.

| **Variable Name** | **Value** |
| --- | --- |
| base | https://api.businesscentral.dynamics.com/ |
| tenant | tenant-id |
| authurl | https://login.microsoftonline.com/{{tenant}}/oauth2/authorize?resource={{base}} |
| authtoken | https://login.microsoftonline.com/{{tenant}}/oauth2/token?resource={{base}} |
| clientid | client id |
| clientsecret | client secret |
| companyId | Record id of the company |
| env | environment name |

The above variables are declared in Postman collection under the variables tab and these variables are used for the upcoming OAuth 2.0 token generation. The below image shows the variables inside the collection.

[![]({{ site.baseurl }}/assets/images/010/img_010ebbe31c.png)]({{ site.baseurl }}/assets/images/010/img_010ebbe31c.png)

Move on to the Authorization tab in the collection. select the type as OAuth 2.0. In the Configure new Token section, fill the Token Name, Grant type as implicit, use the declared variables for callback URL, Auth URL, Client ID and set Client Authentication as Send client credentials in body.

[![]({{ site.baseurl }}/assets/images/010/img_5608bf32c2.png)]({{ site.baseurl }}/assets/images/010/img_5608bf32c2.png)

### Token Generation:
[![]({{ site.baseurl }}/assets/images/010/img_9d69decbe8.png)]({{ site.baseurl }}/assets/images/010/img_9d69decbe8.png)

Click on the Get New Access Token at the bottom of the section. Microsoft login for the authentication is required, if it is the first time otherwise the token is generated within the fraction of seconds. Click on Use Token to access the token for the requests from Postman.
Note: The token has a expiration. It should be re-generated once it is expired.

[![]({{ site.baseurl }}/assets/images/010/img_4425d63dc7.png)]({{ site.baseurl }}/assets/images/010/img_4425d63dc7.png)

## Postman Request:
Click on the ellipsis(three dots) ⟶ Add request. Add a new Web API request and click send. If the response is not received, check the request and try again. 

Get the environment name(name of the production or sandbox) from admin center or from the url. The company data are retrieved from the company table using the api request as follows.
```
https://api.businesscentral.dynamics.com/v2.0/{tenant-id}/{environment-name}/api/v2.0/companies
```
[![]({{ site.baseurl }}/assets/images/010/img_d55240c8de.png)]({{ site.baseurl }}/assets/images/010/img_d55240c8de.png)

Get the desired company id and add it in the variable to use it for the further requests. The request for business central api will be as follows.
```
https://api.businesscentral.dynamics.com/v2.0/{tenantid}/{env}/api/v2.0/companies({companyId})/customers
```

[![]({{ site.baseurl }}/assets/images/010/img_4bef815b98.png)]({{ site.baseurl }}/assets/images/010/img_4bef815b98.png)

## Reference:
- [How to register an app in azure active directory for dynamics 365](https://www.tamilarasu.me/2022/12/register%20an%20app%20in%20azure%20active%20directory%20for%20business%20central.html)

Keep Learning!