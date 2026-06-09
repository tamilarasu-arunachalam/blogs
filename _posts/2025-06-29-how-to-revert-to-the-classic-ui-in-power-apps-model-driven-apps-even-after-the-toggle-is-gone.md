---
post_id: "046"
layout: post
title: "How to Revert to the Classic UI in Power Apps Model-Driven Apps (Even After the Toggle Is Gone)?"
date: 2025-06-29 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/046/img_b9249e56d8.png
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "Model Driven Apps", "Power Apps"]
---
Microsoft introduced the new Fluent UI for Model-Driven Power Apps in October 1. Initially, users could easily switch between the new and classic experiences using the **"****Try the new look"** toggle available in the command bar.

**Before toggling:** You’d see the traditional UI.

[![]({{ site.baseurl }}/assets/images/046/img_1527df1c79.png)]({{ site.baseurl }}/assets/images/046/img_1527df1c79.png)  

  
**After toggling:** You’d get the sleek, modern Fluent UI.

[![]({{ site.baseurl }}/assets/images/046/img_26eaefe3ac.png)]({{ site.baseurl }}/assets/images/046/img_26eaefe3ac.png)  

However, starting **October 2024**, Microsoft removed the **Try the new look** toggle for **monthly channel** users. And with the 2025 Release Wave 1, reverting to the old (classic) look is no longer an option by default.

If you're a Power Platform admin or app maker and still need access to the classic UI for testing or feature validation, here’s a useful workaround to disable or re-enable the new Fluent UI experience at the environment or app level.

## For Makers and Admins :

### Disable the New Fluent UI (Revert to Classic UI)

Admins can **turn off** the new Fluent UI across all model-driven apps in an environment by changing the "New look for model driven apps" setting using **Solution Explorer**.

#### **Steps:**

1.  Go to [https://make.powerapps.com/](https://make.powerapps.com/)
2.  Under Solutions, open an existing solution that includes one or more model-driven apps.
3.  Select **Add Existing → More →** **Settings**  
[![]({{ site.baseurl }}/assets/images/046/img_8f32897f07.png)]({{ site.baseurl }}/assets/images/046/img_8f32897f07.png)
4.  Search for New look.
5.  Select **New look for model driven apps** and click Add to include it in your solution.  
    [![]({{ site.baseurl }}/assets/images/046/img_0511d9b0d9.png)]({{ site.baseurl }}/assets/images/046/img_0511d9b0d9.png)
6.  In the Solution Explorer, click **New look for model driven apps**.  
    
    [![]({{ site.baseurl }}/assets/images/046/img_f668e6dc67.png)]({{ site.baseurl }}/assets/images/046/img_f668e6dc67.png)
    
      
    
7.  Set **Setting Environment Value** to **No**.
8.  Add the specific model-driven apps you want to revert to the classic UI.
9.  For each app, set the value to **No**.
10.  Click **Save**, then **Publish All Customizations**.

This disables the modern UI and prevents users from toggling to the new experience.

[![]({{ site.baseurl }}/assets/images/046/img_575076fe02.png)]({{ site.baseurl }}/assets/images/046/img_575076fe02.png)

If you want to enable the Classic UI for just one specific app within your solution, simply set the environment variable to Yes, and also set the Preferred App value to Yes for that app.

### Force Enable the New Fluent UI for All Users

Alternatively, if you want to enforce the new experience permanently, you can **enable** the "New look always on" setting.

#### **Steps:**

1.  Go to [https://make.powerapps.com/](https://make.powerapps.com/)
2.  Open your solution under **Solutions**.
3.  Select **Add Existing** **→** **More** **→** **Setting**
4.  Search for **New look always on**.  
[![]({{ site.baseurl }}/assets/images/046/img_739c75fa6c.png)]({{ site.baseurl }}/assets/images/046/img_739c75fa6c.png)
5.  Select it and click **Add**.
6.  In the Solution Explorer, open **New look always on**.  
      
    
[![]({{ site.baseurl }}/assets/images/046/img_03b19e634f.png)]({{ site.baseurl }}/assets/images/046/img_03b19e634f.png)
    
      
    
1.  Set the **Setting Environment Value** to **Yes**.
2.  Click **Save**, then **Publish All Customizations**.

This removes the toggle and enforces the new Fluent UI for everyone.

## For Users :

### New look for Model-Driven Apps Toggle:

[![]({{ site.baseurl }}/assets/images/046/img_e052b924aa.png)]({{ site.baseurl }}/assets/images/046/img_e052b924aa.png)

1.  In the app designer select Settings on the command bar.
2.  To manage features in a model-driven app, simply click on **Settings**, and then select **Features**. From there, you can enable or disable various capabilities for your app.
3.  One of the key options you'll see is: **New look for Model-Driven Apps**  
    
This feature is enabled by default and provides end users with a toggle labeled "**Try the new look**". It allows them to experience the modern Fluent UI for model-driven apps. The best part? Users can switch back to the classic experience anytime - at least while the toggle is still available.
    

#### Reference

-   [https://learn.microsoft.com/en-us/power-apps/user/modern-fluent-design](https://learn.microsoft.com/en-us/power-apps/user/modern-fluent-design)
-   [https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/app-properties](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/app-properties)

Have a great day!