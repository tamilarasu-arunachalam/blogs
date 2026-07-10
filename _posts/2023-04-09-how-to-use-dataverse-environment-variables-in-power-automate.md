---
layout: post
post_id: '013'
title: Environment Variables in Dataverse and How to use it in Power Automate Flow
date: 2023-04-09 07:46:00 +0000
image: assets/images/013/img_ace1b240a0.png
description: ''
meta_keywords: environment variables in dataverse, use environment variables in power automate, environment variables in power automate, environment variables in flows, dataverse environment variables, Power Automate environment variables
category: Power Automate
categories:
  - Environment Variables
  - Power Automate
  - Dataverse
meta_description: Environment variables in Dataverse allow you to store the connection reference or keys which are need to be used inside the environment. They are more like a global variable which can be accessed with in the Power Platform Environment. We can make use of this to store the values and use it for Power Platform Customizations.
---

![]({{ site.baseurl }}/assets/images/013/img_ace1b240a0.png)

-   [Environment Variables](#environment_variables)
-   [Features of Environment Variables](#features)
-   [Create a new Environment Variable](#create_a_new_env_var)
-   [Use Environment Variable in Power Automate Flow](#use_in_power_automate)
-   [ALM of Environment Variables](#alm_of_env_var)
-   [Limitations](#limitations)
-   [Make use of the most in Environment Variables](#make_use)

## Environment variables

     Environment variables in Dataverse allow you to store the connection reference or keys which are need to be used inside the environment. They are more like a global variable which can be accessed with in the Power Platform Environment. We can make use of this to store the values and use it for Power Platform Customizations. We can use the environment variables in Canvas Apps, Model Driven Apps, and Power Automate. It allow you to modify the values while moving the solution to the another environment. These environment variables are really useful for avoiding the hardcode values for configuration data which needs to be changed during the ALM operations.  

    In Dataverse perspective the Environment Variable has two tables, Environment Variable Definition and Environment Variable Values. Environment Variable Definition table holds the definition, data type, name and some times default values(if it has). Environment variable value table has the current values that are used inside the current environment. Environment Variable Definition has **1:N** relationship with the Environment Variable Value table.

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_8488326eea.png)](https://blogger.googleusercontent.com/img/a/AVvXsEjsSL2_7rRESSy6pq18m3w3lv9e-0YHG6HesVKTBUa7uiwZ_XLDZDXQfS6626RJ3rifUh7nDc3UkPKzLT3Ty7sgd8Pa6gi0LByN-1HELp0zD1dpizb9Px7Kwn6YsfKfeZeEkCZbli7sp8Nn2nsNz4NyuIiXwDXrmirwnXCJxs6-Fh7QfC4nfmqCDyOk)

## Features of Environment Variables

-   One Environment Variable can be used across multiple solution components. 
-   Six data types are supported by Environment Variable which are Decimal Number, Text, JSON, Yes/No, Secret and Data source
-   There are two types of values which are
-   Default Value
-   Current Value

#### Default value:

-   It is part of the environment variable definition table. It is not a required if it has current values.
-   If the value should be the same for all the environments, we may use default values. Because we can't able to modify it in the target environment.

#### Current Value :

-   It is part of environment variable value table. It will override the default value. It is used as a value even the default value contains a value.
-   Remove the current value from the solution, if you don't want to use the value in the target environment.

## Create a new Environment Variable

-   Go to the solution, where you want to create a new environment variable.

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_e3c5517b52.png)](https://blogger.googleusercontent.com/img/a/AVvXsEho2mjSiNpfL8Ldk-qnMFna1u4ZFD0Nwxn0Dyd12B2anPpDSik_4X7Lowi_AkO5Q1efQaPixF-SKltkzm7FwuIeD9m0NCIvzskYoGT1OJF5KQlHvhZY0uk0yP-WQD6LMB8ZU_-Vx7SuoXIAYA7R8vGCeOUiP5Qjfb17JJ7nlzX9JGQ3I5SK-yRjlIDr)

-   Click on + New → More → Environment Variable. A quick create form pops from the right.
-   Add Display Name, Name, Data Type and Value

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_e93eb13f3f.png)](https://blogger.googleusercontent.com/img/a/AVvXsEimOgsHhGCWc7JcmaCP5-Nzju9Rpcz3obTTf2mjB8zJlaFJ7Xzus3vU4dgJdjEiG-VmHpWfm3NM5MpgD02O6TuPJeQ-4mHDit6yYC4ZZt5YtwIhlNCwD4qn2lCa8jyzXXTaS7Z4yCjWp4f2EaQGKjjwM6gioep39t_jJfWSDhuAp7UoTVitEdMiJ0pM)

-   Click on save and publish
-   I have created four environment variables which are tenant id, client id, client secret and scope. All are text data types.

| Variable Name | Variable Value |
| --- | --- |
| tenant_id | tenant id of your org |
| client_id | Client Id of your app |
| client_secret | Client Secret of your app |
| scope | https://graph.microsoft.com/.default |

-   I have get the values from my Azure AD App and stored it in the Environment Variables for using it inside Power Platform.
-   **_Note:_** You may use secret data type for client secret, for that you have to configure Azure Key Vault. As it is a learning purpose i have used text data type

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_f7f69f928b.png)]({{ site.baseurl }}/assets/images/013/img_f7f69f928b.png)

## Use Environment Variable in Power Automate Flow

-   Create a new Power Automate Instant flow in a solution by navigating to +New → Automation → Cloud flow → Automated.

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_ab2639a42a.png)]({{ site.baseurl }}/assets/images/013/img_ab2639a42a.png)

-   Select **Manually trigger a flow** as a trigger and give a meaningful name to the flow.
-   Click on Create and it will move the flow editor

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_c119bba742.png)]({{ site.baseurl }}/assets/images/013/img_c119bba742.png)

-   Add a step below the trigger and search for http and select the HTTP(premium) Connector.

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_756d82cb36.png)]({{ site.baseurl }}/assets/images/013/img_756d82cb36.png)

-   In the **HTTP** Action, Set the http method as **POST** and enter the uri as https://login.microsoftonline.com/_{tenant_id}_/oauth2/v2.0/token, replace **{tenant_id}** in the uri with the environment variable(Tenant ID).
-   In Headers, set **Content-Type** as key and **application/x-www-form-urlencoded** as value
-   In Body, enter grant_type=client_credentials&client_id=_{client_id}_&client_secret=_{client_secret}_&scope=_{scope}_, replace client_id, client_secret and scope with the environment variables.
-   The HTTP step should appear like the below screenshot

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_b286c98e64.png)]({{ site.baseurl }}/assets/images/013/img_b286c98e64.png)

-   Save and Run the flow.

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_05c68964dd.png)]({{ site.baseurl }}/assets/images/013/img_05c68964dd.png)

-   It ran successfully with no errors

## ALM of Environment Variables

    The environment variables from the solution can be exported and imported across environments. It is still editable if we export and import as unmanaged solution. But in real time scenarios unmanaged solutions are not much preferred to get imported to the environment in terms of ALM. 

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_b79ec91069.png)]({{ site.baseurl }}/assets/images/013/img_b79ec91069.png)

    To tackle this, we have to remove(not delete) the current value for all the environment variables and export the solution it as managed. While importing the solution to the target environment, a prompt open up and asking for the values for that environment variables.

[![Environment Variables in Dataverse and Using it in Power Automate]({{ site.baseurl }}/assets/images/013/img_85d09b07f0.png)]({{ site.baseurl }}/assets/images/013/img_85d09b07f0.png)

Enter the values to the fields in the prompt and click on import to import the solution. After importing, the flows will work on the new values entered in the prompt. 

## Limitations

    If the flows are using the environment variable values, but the value gets changed from the solution. But the flow still uses the previous value. The flow need to be turned on and off to catch up the modified value.

## Make use of the most in Environment Variables

-   Prefer to use current values than default values. As of now we can modify the values of the environment variables from the table or in Advanced find, even if it is a managed solution.
-   We can use the environment variables in Model Driven App using JavaScript or Plugin.
-   Better avoid hardcoding of some configuration values and connection keys in the code or in flows. Rather use Environment variables for those values.
