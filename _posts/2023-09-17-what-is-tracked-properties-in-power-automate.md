---
post_id: "030"
layout: post
title: "What is Tracked Properties in Power Automate?"
date: 2023-09-17 17:41:00 +0000
image: assets/images/030/img_54761d610b.png
category: Power Automate
categories: ["Microsoft Flows", "Power Automate"]
---
Tracked Properties are the properties which are not directly displayed from the input or output of the action. Tracked Properties are added as a key value pairs. We can retrieve that in the next actions using the action using the expressions. 

We can use the tracked propertied to get the execution time of the flow step or to pass any data inside the flow without affecting the input and output.

For that, I have created an Instant flow in Power Automate. In this flow, I tried to get the user who is running the flow.

[![]({{ site.baseurl }}/assets/images/030/img_a50ea328f9.png)]({{ site.baseurl }}/assets/images/030/img_a50ea328f9.png)

To get the user who is currently running the flow, you have to use the below expression

```js
triggerOutputs()['headers']['x-ms-user-name']
```

[![]({{ site.baseurl }}/assets/images/030/img_c59b72f75f.png)]({{ site.baseurl }}/assets/images/030/img_c59b72f75f.png)

For adding the tracked properties, you have to click on the ellipsis(on the top right of the flow step) → settings.

[![]({{ site.baseurl }}/assets/images/030/img_fda5ce8c09.png)]({{ site.baseurl }}/assets/images/030/img_fda5ce8c09.png)

In this, I have added two properties, flag and currentDateTime. Flag returns a random GUID, and currentDateTime returns a date-time while the flow step is executed.

[![]({{ site.baseurl }}/assets/images/030/img_272076e460.png)]({{ site.baseurl }}/assets/images/030/img_272076e460.png)

We can retrieve the tracked properties from the flow step using the below expression.

```js
actions('Get_Current_User')?['TrackedProperties']
```

The below is the syntax for the expression for getting the tracked properties

And the result would be the JSON as below

```js
actions({Step Name})?['TrackedProperties']
```

[![]({{ site.baseurl }}/assets/images/030/img_96d98e444f.png)]({{ site.baseurl }}/assets/images/030/img_96d98e444f.png)

We can get the particular tracked property using the below expression

```js
actions('Get_Current_User')?['TrackedProperties/flag']
```

```js
actions('Get_Current_User')?['TrackedProperties/currentDateTime']
```

The result of the run is in the below picture.

[![]({{ site.baseurl }}/assets/images/030/img_51770a6758.png)]({{ site.baseurl }}/assets/images/030/img_51770a6758.png)

Have a Good day!