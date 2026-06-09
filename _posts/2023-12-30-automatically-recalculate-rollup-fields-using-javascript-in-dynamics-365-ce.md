---
post_id: "032"
layout: post
title: "Automatically Recalculate Rollup fields using JavaScript in Dynamics 365 CE"
date: 2023-12-30 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/032/img_6323eb129c.png
categories: ["Model Driven Apps", "Dynamics 365 CRM Online", "JavaScript", "Dynamics 365 CE", "Web resource", "Dynamics 365 Web API"]
---
Roll-up fields in Dynamics 365 CE typically take around an hour to recalculate values, unless done manually. To manually trigger the recalculation, simply click on the calculator icon adjacent to the label, which will activate the “Recalculate” button.

[![]({{ site.baseurl }}/assets/images/032/img_d00acac10d.png)]({{ site.baseurl }}/assets/images/032/img_d00acac10d.png)

    The automatic recalculation is contingent upon a system job running in the background of the CRM. In this article, we will explore the process of triggering a recalculation of roll-up fields using sub-grid events.

-   I have created a custom whole number field in accounts entity named No of Contacts and set the behaviour as rollup. 

[![]({{ site.baseurl }}/assets/images/032/img_9acfb92e2a.png)]({{ site.baseurl }}/assets/images/032/img_9acfb92e2a.png)

-   Click on “Edit” below the behaviour field, and it will open the new window to set the rollup field. I have set the Related Entity as Contact and Aggregation as Count of Contact. Then Save and publish the field.

[![]({{ site.baseurl }}/assets/images/032/img_f61638fda7.png)]({{ site.baseurl }}/assets/images/032/img_f61638fda7.png)

-   Add the field to the Accounts main form, then save and publish the form.

[![]({{ site.baseurl }}/assets/images/032/img_0345332956.png)]({{ site.baseurl }}/assets/images/032/img_0345332956.png)

-   Add a web resource named autoCalculateRollup.js and add the below functions in it.

<script src="https://gist.github.com/tamilarasu-arunachalam/e380c3d700a692ac727cb37d2086bdbf.js"></script>

-   This web resource will add a function on the on load of contacts sub-grid. So that we can easily catch the count of contacts associated with the account and the field will calculate the count automatically using the call to the API.

-   Please refer to the Microsoft Docs on **CalculateRollupField** Function link [here](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/calculaterollupfield?view=dataverse-latest).

-   Add the function to the on load event of Accounts Main Form where the Rollup field is there.

![]({{ site.baseurl }}/assets/images/032/img_b38ef68c16.png)

-   The below GIF will demonstrate the automatic recalculation on the load of sub-grid.

[![]({{ site.baseurl }}/assets/images/032/img_afcf89f0c7.gif)]({{ site.baseurl }}/assets/images/032/img_afcf89f0c7.gif)

Have a great day!