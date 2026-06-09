---
post_id: "049"
layout: post
title: "How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?"
date: 2025-07-27 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/049/img_e80e5e6282.gif
categories: ["Dataverse", "Dynamics 365 CE", "Dynamics 365 Customer Service", "JavaScript", "Model Driven Apps", "Web resource"]
---
Working in Customer Service Workspace can feel like juggling multiple cases/conversations at once. Ofcourse we can open records from view which will open in the new workspace tab. I was thinking of opening multiple records on multiple tabs on a single click.

- [What's Customer Service Workspace and Why Should You Care About Tabs?](#whats-customer-service-workspace-and-why-should-you-care-about-tabs)
- [Quick Clarification: Session vs Tabs](#quick-clarification-session-vs-tabs)
- [Example Scenario :](#example-scenario-)
  - [Steps:](#steps)
- [Demonstration](#demonstration)
- [Conclusion](#conclusion)

## What's Customer Service Workspace and Why Should You Care About Tabs?

As we all know customer service agents are the primary users for customer service workspace. They'll be working on multiple cases/conversations at once. If they want to cross check or refer any other similar cases they have to switch back to view and open every case records. But my agenda is to cut down the navigation time.

## Quick Clarification: Session vs Tabs

Before we jump into the code, let's clear up some terminology:

Session tabs are like your main workspaces - think of them as different projects you're working on Workspace tabs are the individual records within each session - like the specific cases under My Cases.

[![my active cases]({{ site.baseurl }}/assets/images/049/img_3e35f122c9.png)]({{ site.baseurl }}/assets/images/049/img_3e35f122c9.png)

## Example Scenario :

Opening Multiple Case(s) at once a command button is clicked. Let's say an agent is looking at a support case and wants to quickly open the reference of the similar cases from the view to cross check.

### Steps:

1.  Create a Web Resource
    -   I have created a JavaScript web resource which have a function named OpenNewWorkspaceTab. It will accept only one parameter which is **SelectedControlSelectedItemIds**. Below is the code.
    -   Save and Publish the Web Resource
2.  Create and Configure the Button:
    -   First of all, create a command button named "**Open in New Tab**" in the maker portal.  
        
    -   Refer the below link to know how to create or customize the command buttons [https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer)
    -   I have configured a button which will execute the JavaScript function when clicked.  
        [![configure command button model driven apps]({{ site.baseurl }}/assets/images/049/img_5799897ed4.png)]({{ site.baseurl }}/assets/images/049/img_5799897ed4.png)
    -   As the function requires a parameter, add the parameter "**SelectedControlSelectedItemIds**". The button's visbility is based on the record selection, If one or more records will be selected, the button is visible otherwise it is hidden.  
        
[![configure command button model driven apps]({{ site.baseurl }}/assets/images/049/img_0e9b9167d5.png)]({{ site.baseurl }}/assets/images/049/img_0e9b9167d5.png)
             
    -   I have did that using the Show on condition from formula option in Visibility field. And add the below formula to make the button visible based on condition.(Refer the formula bar in the above image for the same)
    
    ```jsx
    CountRows(Self.Selected.AllItems)>0
    ```
    
    -   Save and Publish the editor.  
        

## Demonstration

I have selected three random cases from the view and you'll get to see the button visible.

[![How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?]({{ site.baseurl }}/assets/images/049/img_ade7ed1b78.png)]({{ site.baseurl }}/assets/images/049/img_ade7ed1b78.png)

Click on the button and it will popup a dialog to confirm the opening of new tabs.

[![How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?]({{ site.baseurl }}/assets/images/049/img_74a869e309.png)]({{ site.baseurl }}/assets/images/049/img_74a869e309.png)

If ok is clicked, it will open the new tabs.

[![How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?]({{ site.baseurl }}/assets/images/049/img_e1dc1fbb33.png)]({{ site.baseurl }}/assets/images/049/img_e1dc1fbb33.png)

## Conclusion

I hope this workaround makes navigating the Customer Service Workspace a bit easier for you. It’s a great approach when you’re dealing with just a few records. But if the number of records gets too high, it could slow things down. Also, from what I’ve heard, there might be a limit on how many tabs you can open in the workspace - so it’s a good idea to use this method thoughtfully.

**References:**

[https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions#grid-values](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions#grid-values)

[https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog)

[https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/createtab](https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/createtab)

Have a good day!