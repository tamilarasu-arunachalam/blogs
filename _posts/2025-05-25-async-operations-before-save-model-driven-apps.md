---
layout: post
post_id: '044'
title: Safely Handle Async Operations Before Save in Model-Driven Power Apps
date: 2025-05-25 17:41:00 +0000
image: assets/images/044/img_815ddc2024.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Model Driven Apps
  - Dynamics 365 CE
  - Dynamics 365 Web API
  - JavaScript
  - Web resource
  - Power Apps
---

Hello folks. I recently tackled one of these scenarios, and what seemed like a simple validation turned into a bit of a deep dive.

In this post, I’ll share how I handled preventing of form save during async operations involving subgrid data, using a real-world example from a JavaScript customization I worked on.

### Example Scenario

Let’s say you have two tables:

-   **Order** (the parent)

[![]({{ site.baseurl }}/assets/images/044/img_0f910db1b4.png)]({{ site.baseurl }}/assets/images/044/img_0f910db1b4.png)  

-   **Order Items** (child records shown in a subgrid on the Order form)

[![]({{ site.baseurl }}/assets/images/044/img_bdfd56a891.png)]({{ site.baseurl }}/assets/images/044/img_bdfd56a891.png)  

#### **Functionality:**

-   The Order table includes a `Order Status` field (an option set with values like Open, Closed, and Cancelled).

[![]({{ site.baseurl }}/assets/images/044/img_399df75560.png)]({{ site.baseurl }}/assets/images/044/img_399df75560.png)

-   Each Order Item has a boolean field called `Ready to Dispatch?`.

[![]({{ site.baseurl }}/assets/images/044/img_a2e11feda9.png)]({{ site.baseurl }}/assets/images/044/img_a2e11feda9.png)  

#### **Here’s the condition:**

If even one Order Item isn’t marked as “Ready to Dispatch,” the Order shouldn’t be allowed to close (i.e., you can’t set its Status to “Closed”). If a user tries to close the Order while there are pending items, we need to stop the form from saving and let them know.

### The First Approach: Using `preventDefault()` in OnSave

Initially, I thought this would be easy. I planned to use:

-   `Xrm.WebApi.retrieveMultipleRecords()` to check the subgrid data (Order Items)
-   Call `eventArgs.preventDefault()` if any record didn’t meet the criteria

But there was a catch: the retrieve multiple is asynchronous. So even though the logic was correct, the form would sometimes save before the validation was done - letting invalid data slip through.

### Finding the Fix: Async OnSave Handlers

Turns out, Power Apps has a way to help with this: async OnSave handlers. These let you run asynchronous logic before the form actually saves, which was exactly what I needed.

Here’s the functionality I implemented:

1.  Create a web resource and add it in the OnSave event handler on the Order form.
2.  When the `Status` changes to "Closed" and the Save button is clicked, I trigger a validation check.
3.  The check:

    -   Uses `Xrm.WebApi.retrieveMultipleRecords()` to fetch Order Items.
    -   Loops through them to see if all are `Ready to Dispatch`.
    -   If not, calls `preventDefault()` to block the save.

4.  To add the asynchronous function in the OnSave event handler we need to enable the Async OnSave Handler in App settings

    -   To do that we need to navigate to the setting in the app maker window

    [![]({{ site.baseurl }}/assets/images/044/img_3981c5ac10.png)]({{ site.baseurl }}/assets/images/044/img_3981c5ac10.png)

    -   Inside that select the features menu, and toggle yes to the Async save handler as like the below image.

    [![]({{ site.baseurl }}/assets/images/044/img_f588e438b7.png)]({{ site.baseurl }}/assets/images/044/img_f588e438b7.png)

It was working great… until I hit the next hiccup.

### The Unexpected Issue: Auto-Save

[![]({{ site.baseurl }}/assets/images/044/img_216805d67d.png)]({{ site.baseurl }}/assets/images/044/img_216805d67d.png)

If you’ve worked with Model-Driven Apps or Dynamics 365 CRM for a while, you’ll know they come with auto-save enabled by default. This means the form tries to save itself every 15–30 seconds or so.

With my validation in place, the form would now block the save and show an error message—even when the user wasn’t doing anything. That wasn’t ideal. It interrupted the user experience and created unnecessary confusion. so i have used the `getSaveMode()` to check the save mode.

### Smarter Handling: Using `getSaveMode()` to Detect Auto-Save

To solve this, I turned to `eventArgs.getSaveMode()`, which tells you how the form is being saved. You can find the values of the getSaveMode() function from the table below.

[![]({{ site.baseurl }}/assets/images/044/img_e82ed7c414.png)]({{ site.baseurl }}/assets/images/044/img_e82ed7c414.png)

Using this, I adjusted the logic:

-   **For auto-save (`getSaveMode() === 70`):** I only blocked the save quietly using `preventDefault() -` no error message.
-   **For manual save (getSaveMode() === 1 || getSaveMode() === 2):** I blocked the save and showed a proper validation message using `Xrm.Navigation.openAlertDialog()`.

After all these changes, I attempted again to test the functionality:

-   I have left one product as not ready to dispatch? (Kept as it is)

[![]({{ site.baseurl }}/assets/images/044/img_b4779a0fd5.png)]({{ site.baseurl }}/assets/images/044/img_b4779a0fd5.png)  

-   I have changes the Order Status to "Closed" and clicked Save button.

[![]({{ site.baseurl }}/assets/images/044/img_e58e44ee62.png)]({{ site.baseurl }}/assets/images/044/img_e58e44ee62.png)  

-   Even I have tested during the autosave also, the alert doesn't thrown again.
-   And finally my form also doesn't got saved until the products under the same order are not in the state of ready to dispatch as true.

You can find the code for the above example use case below.

<script src="https://gist.github.com/tamilarasu-arunachalam/c7dac42f58dea23413aec8864fc95055.js"></script>

This small change made a big difference in how the app behaved and how users experienced the form.

#### My Learnings:

-   Always use async OnSave handlers for async validations in the on save event.
-   Don’t forget about auto-save, it can throw a wrench into your logic if not handled properly.
-   Use `getSaveMode()` to fine-tune your user experience and avoid unnecessary alerts.

#### Resources Referred:

-   [preventDefault method for JavaScript in model-driven apps](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefault)
-   [Disable AutoSave in a model-driven app](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/manage-auto-save)
-   [Async onSave preventDefault with external call](https://benediktbergmann.eu/2023/03/20/async-onsave-preventdefault-with-external-call/)

Have a great day!
