---
post_id: "018"
layout: post
title: "Deactivate Duplicate Records using Plugin and Custom Action in Dynamics CRM"
date: 2023-05-09 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/018/img_ccac86014f.png
categories: ["Model Driven Apps", "Custom Action", "Dynamics 365 CRM Online", "Web resource", "Plugins"]
---
Recently I have come across a [question](https://community.dynamics.com/crm/f/microsoft-dynamics-crm-forum/484378/fetch-duplicate-records) in Dynamics 365 CRM Community in which someone is asking to fetch duplicates from contact entity.  I had suggested Power Automate to do so. But my instinct insisted me to try the same using plugin or custom script. So I had reproduced the same scenario as in the community question. I used custom action, JavaScript, and Plugin for that. And guess what? It worked!

[![Deactivate Duplicate Records using Plugin and Custom Action in Dynamics CRM]({{ site.baseurl }}/assets/images/018/img_677ba70a4b.png)]({{ site.baseurl }}/assets/images/018/img_677ba70a4b.png)

I have followed the below steps for fetching and deactivating duplicates

- [Create a Custom Action](#create-a-custom-action)
- [Create and Register the Plugin](#create-and-register-the-plugin)
- [Call Custom Action using JavaScript](#call-custom-action-using-javascript)
- [Execution](#execution)
- [Summary](#summary)

## Create a Custom Action

    Create a custom action inside the solution. To do so, click on + New inside the solution → Automation → Process → Action.

[![Deactivate Duplicate Records using Plugin and Custom Action in Dynamics CRM]({{ site.baseurl }}/assets/images/018/img_fbb5090bd6.png)]({{ site.baseurl }}/assets/images/018/img_fbb5090bd6.png)

A prompt for creating new action slides from right, give proper Display name, select None for Add to, select blank for Start from and hit the create button in the bottom

[![]({{ site.baseurl }}/assets/images/018/img_13f915917f.png)]({{ site.baseurl }}/assets/images/018/img_13f915917f.png)

It navigates to the classic page for configuring action, create two process arguments, one for input and another one for output. I have created InputRequest as a boolean type for Input direction (Required) and OutputResponse as a string for Output direction. Activate the Custom Action.

[![Deactivate Duplicate Records using Plugin and Custom Action in Dynamics CRM]({{ site.baseurl }}/assets/images/018/img_31e7277965.png)]({{ site.baseurl }}/assets/images/018/img_31e7277965.png)

## Create and Register the Plugin

I have created a plugin for fetching duplicate records using fetch XML and deactivate them. The plugin gets executed once the input direction(InputRequest) turns true. After the execution, the output direction returned to action. The below is my plugin code.

<script src="https://gist.github.com/tamilarasu-arunachalam/37f2dc4ab884075c7e1ca36874a1121c.js?file=CRM.DeactivateDuplicates.cs"></script>

[![]({{ site.baseurl }}/assets/images/018/img_3478cab14d.png)]({{ site.baseurl }}/assets/images/018/img_3478cab14d.png)

    Create a new plugin assembly if you haven't done yet. While registering the plugin step, select your custom action as a Message as like the below image (I have added my custom action named _cr1d9\_DeactivateDuplicates_). Select Event Pipeline Stage of Execution as _Post Operation_. Click on Register New Step.

[![]({{ site.baseurl }}/assets/images/018/img_245f73bdb6.png)]({{ site.baseurl }}/assets/images/018/img_245f73bdb6.png)

## Call Custom Action using JavaScript

Create a JavaScript web resource for making an HTTP request to the custom action. The action can be called by using the below URL structure.

`https://{org_name}.crm8.dynamics.com/api/data/v9.2/{action_name}`

We should pass the Input direction to the action with the HTTP POST request to the custom action. After completion of the action execution, we can get the output direction. The below is the JavaScript function for calling the custom action.

<script src="https://gist.github.com/tamilarasu-arunachalam/37f2dc4ab884075c7e1ca36874a1121c.js?file=deactivateDuplicates.js"></script>

To trigger the JavaScript function, we need to call it in any of the event. As I want the event inside the view, so I have created a command button in the view. To do so, go to pages(in app maker) → click on the ellipse (three dots) near the view → select Edit Command bar → Select the view type. You'll get see the command editor page, create button by clicking on the +New button on left navigation menu. 

[![]({{ site.baseurl }}/assets/images/018/img_e8eb36a1d3.png)]({{ site.baseurl }}/assets/images/018/img_e8eb36a1d3.png)

After the button was added to the command bar, change Label, Icon, and Action as you need. I have JavaScript Web resource, so I chose JavaScript action. For JavaScript action, you have to add library and function name. Add parameter if any.

[![]({{ site.baseurl }}/assets/images/018/img_14f8dd5951.png)]({{ site.baseurl }}/assets/images/018/img_14f8dd5951.png)

Once all the command bar configurations are done, save and publish the changes. Please make sure, you are able to see the button you created in the view.

## Execution

The below GIF shows the execution of fetching and deactivating duplicates. 

![Deactivate Duplicate Records using Plugin and Custom Action in Dynamics CRM]({{ site.baseurl }}/assets/images/018/img_7420661c6c.gif)

## Summary

I will always suggest using the Duplicate Detection Rule for avoiding duplications. But in some cases of data inserting via API, we cannot detect the duplicates priorly. For such kind of scenarios, we require this plugin in place. It is useful for deactivating the duplicates which are already inserted to the table. The plugin will be useful if the data count is less, because the execution time of the plugin should not exceed two minutes. Have a Good day!