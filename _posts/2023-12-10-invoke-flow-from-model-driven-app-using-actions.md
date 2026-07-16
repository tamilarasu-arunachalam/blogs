---
layout: post
post_id: '031'
title: Invoke a Power Automate flow synchronously from a Model Driven App using Actions
date: 2023-12-10 17:41:00 +0000
image: assets/images/031/img_ccd88a128b.png
description: ''
meta_keywords: ''
category: Power Automate
read_time: ''
categories:
  - Model Driven Apps
  - Custom Action
  - Power Automate
  - Web resource
  - Dynamics 365 CE
  - Dataverse
---

In this article, I am going to demonstrate on how to use these dataverse custom action to trigger the automated flow in Power automate. Dataverse already has a trigger in place for the event of the action trigger. With this method, we can call a power automate flow synchronously from the model driven app's command button.    

**Custom actions** are used for creating custom business logics, but they are not invoked automatically. Instead, we can call them inside Workflows, client side scripting, Plugins or Power automate. This custom action may or may not require parameters. There are two types of parameters in action, they are input parameters and output parameters. We can initialize actions either entity specific or global. 

-   Create a custom action in a solution by navigating to Settings 🡲 Process 🡲 +New.

[![]({{ site.baseurl }}/assets/images/031/img_0ba1bebfdd.png)]({{ site.baseurl }}/assets/images/031/img_0ba1bebfdd.png)

-   Add a Process name, category as action, entity as None (global), and Type as New blank process. And click on OK.
-   It will navigate to the classic process creation page. If all the configurations are completed, click on save and activate.

[![]({{ site.baseurl }}/assets/images/031/img_fc015dedcc.png)]({{ site.baseurl }}/assets/images/031/img_fc015dedcc.png)

-   Create a new web resource to call the action from the ribbon button. For that, go to the solution 🡲 Web resources.

[![]({{ site.baseurl }}/assets/images/031/img_ef299d6493.png)]({{ site.baseurl }}/assets/images/031/img_ef299d6493.png)

-   Add name, Display Name, Type as Script(JScript). Click on the Text Editor Button. Add the script below to the editor.
-   For adding the button to a form, we need to go to the make.powerapps.com 🡲 click on the ellipsis (…) near the page that you want to add a button 🡲 Select Main Form and the command editor page opens up.

<script src="https://gist.github.com/tamilarasu-arunachalam/507e0c760e6e32fcc3ec58f9f68e1144.js"></script>

[![]({{ site.baseurl }}/assets/images/031/img_d1d729d5ee.png)]({{ site.baseurl }}/assets/images/031/img_d1d729d5ee.png)

-   Add a button by dragging it to where ever you want. Add label, icon, action as JavaScript, add library and function to trigger the button and click OK. Then click Save and Publish.
-   The button got added in the main form as expected. 

[![]({{ site.baseurl }}/assets/images/031/img_4783ce1e98.png)]({{ site.baseurl }}/assets/images/031/img_4783ce1e98.png)

-   Navigate to the solution page in make.powerapps.com, then click on +New 🡲 Automation 🡲 Cloud Flow 🡲 Automated.

[![]({{ site.baseurl }}/assets/images/031/img_b78334ac88.png)]({{ site.baseurl }}/assets/images/031/img_b78334ac88.png)

-   A flow creation page pops up, give a meaningful name for the flow and as it is an automated flow we need to choose the trigger. In our case, we need to select When an action is performed trigger from dataverse. Then click in Create. 
-   The flow is getting created with the trigger and configure it as like the below image. Give catalog and category as ALL, as it is a global action give Table name as none, select the appropriate action for action name.

[![]({{ site.baseurl }}/assets/images/031/img_4b79497e82.png)]({{ site.baseurl }}/assets/images/031/img_4b79497e82.png)

-   Add a compose action below the trigger, to get the running user from the trigger. For that, we have to use the expression triggerOutputs()?['body/RunAsSystemUserId']. And Save the flow.

[![]({{ site.baseurl }}/assets/images/031/img_3909e29c8b.png)]({{ site.baseurl }}/assets/images/031/img_3909e29c8b.png)

-   To call the action, we need to click on the command button on the main form. If the action gets called, the flow will run automatically by when an action is performed trigger. 
-   I clicked the button, the action gets called, and the flow also ran successfully.

[![]({{ site.baseurl }}/assets/images/031/img_5de5b8892f.png)]({{ site.baseurl }}/assets/images/031/img_5de5b8892f.png)

Have a good day!
