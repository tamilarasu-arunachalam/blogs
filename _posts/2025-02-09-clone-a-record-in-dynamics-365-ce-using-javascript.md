---
post_id: "041"
layout: post
title: "Clone a record in Dynamics 365 CE using JavaScript"
date: 2025-02-09 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/041/img_8bc1cd0eba.png
categories: ["Model Driven Apps", "Dynamics 365 CRM Online", "JavaScript", "Web resource", "Dynamics 365 CE", "Dynamics 365 Web API"]
---
Fellas! Have you ever been in a situation where you needed to create multiple similar records with some fields carrying the same data? I found myself in this exact scenario and thought—why not build a simple templating functionality?

Imagine opening a new record with all the existing data prefilled, making only the necessary tweaks, and saving it — without the hassle of manually copying everything. While searching for existing solutions, I came across workflows and plugins, but they automatically save the record, which wasn’t what I needed.

I wanted something minimalistic, user-friendly, and efficient, so I explored a JavaScript-based approach.

To bring this functionality to life, I outlined the key steps required:

-   Develop the Web Resource
-   Create a Command Button
-   Demonstrate the Functionality

### Develop the Web Resource

Since we are implementing this functionality on the client-side, we need to write JavaScript to handle the cloning process. The script should cover the following key actions:

1.  **Retrieve the Current Record** – Fetch the data of the record to be cloned.
2.  **Show a Confirmation Popup** – Ask the user whether they want to proceed with cloning.
3.  **Open a New Form with Prefilled Values** – Load a new record form with the copied data, allowing the user to make necessary changes before saving.

Below is the JavaScript code I used to achieve this functionality.

<script src="https://gist.github.com/tamilarasu-arunachalam/994cdcd0007ff32acd0b7ed16a4cae65.js"></script>

### Create a Command Button

To enable the cloning functionality, we need an event trigger. The best way to do this is by adding a button on the Main Form of the respective entity. In my case, I used the Account entity and added a command button on the Main Form. This allows users to quickly create similar accounts without manually entering every field.

**Steps to Add the Command Button:**

1.  Navigate to the required App in the Maker Portal.
2.  Click on the three-dot menu (...) next to Accounts View.
3.  Select Edit Command Bar.
4.  Choose Main Form.
5.  In the Command Editor, click + New → Command and place it anywhere in the ribbon.
6.  Configure the command by adding:
    -   Action (Run JavaScript)
    -   Library (add Web Resource)
    -   Function (to trigger cloning)
    -   Parameter (set as Primary Control)
7.  Click Save and Publish to apply the changes.

Below is a snapshot of the configured button for reference.

[![]({{ site.baseurl }}/assets/images/041/img_494475934f.png)]({{ site.baseurl }}/assets/images/041/img_494475934f.png)

### Demonstrate the Functionality

After publishing, ensure that the button appears as expected. Below is a clip demonstrating the record cloning functionality in action.

[![]({{ site.baseurl }}/assets/images/041/img_a1623cb35b.gif)]({{ site.baseurl }}/assets/images/041/img_a1623cb35b.gif)

### Reference

-   A shoutout to Kailash Ramachandran’s blog on “[Launch a New Entity Form within a Modal Popup with Data Prepopulated](https://mytrial365.com/0001/04/11/launch-a-new-entity-form-within-a-modal-popup-with-data-prepopulated/)”
-   [openConfirmDialog (Client API reference) in model-driven apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog)
-   [navigateTo (Client API reference) in model-driven apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto)

### **Conclusion**

Cloning records in Dynamics 365 CRM using JavaScript is a powerful way to improve efficiency while maintaining data integrity. With minor modifications, this approach can be customized for different entities and business requirements.

Have a great day!