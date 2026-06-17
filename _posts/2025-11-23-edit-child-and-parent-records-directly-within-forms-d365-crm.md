---
layout: post
post_id: '052'
title: How to Edit Child and Parent Records Directly Within Forms in Dynamics 365 CRM?
date: 2025-11-23 17:41:00 +0000
image: assets/images/052/img_14eb6fb8f7.gif
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Dynamics 365 CE
  - Dynamics 365 CRM Online
  - Model Driven Apps
  - Power Apps
  - Dataverse
---

Recently, while working on a customization, a simple question hit me — **“Can we edit related entity records directly inside the parent form in Dynamics 365 CRM?”** After checking, the answer was a clear yes. Here is how you can do it for both 1:N and N:1 relationships.

#### Topics Covered

-   [Editable Subgrid (1:N Relationship)](#editableSubGrid)
-   [Form Component Control (N:1 Relationship)](#formComponentControl)
-   [Reference](#reference)

## Editable Subgrid (1:N Relationship)

If your entity has a 1:N relationship (for example, Account → Contacts), you can edit child records directly from the subgrid using the **Editable Grid** control.

-   Open the Account Main Form in the Form Editor.
-   Select the Contacts subgrid.
-   In the right panel, click **+ Component**.  
    ![]({{ site.baseurl }}/assets/images/052/img_4d86709d71.png)
-   Select **Editable Grid** from the list.  
    ![]({{ site.baseurl }}/assets/images/052/img_b9ff5de772.png)
-   Click **Done**, then save and publish.

### Before Applying Editable Grid

![]({{ site.baseurl }}/assets/images/052/img_f7ee698e39.png)

### After Applying Editable Grid

![]({{ site.baseurl }}/assets/images/052/img_f5e2763916.png)

## Form Component Control (N:1 Relationship)

This method works well when the child record has a lookup to a parent record (N:1). Example: In Contact, the Company Name field looks up to Account. Using **Form Component Control**, you can show an editable version of the parent form inside the child form.

-   Open the Contact Main Form in the Form Editor.
-   Select the Company Name (Account lookup) field.  
    ![]({{ site.baseurl }}/assets/images/052/img_afa6ffb471.png)
-   Click **+ Component**.
-   Choose **Form Control**.  
    ![]({{ site.baseurl }}/assets/images/052/img_5e5a1d7274.png)
-   In the popup, select **+ Related Form**.  
    ![]({{ site.baseurl }}/assets/images/052/img_e59a5bac7b.png)
-   Select the Account form you want to display.
-   Save and publish the form.

### Before Applying Form Component

![]({{ site.baseurl }}/assets/images/052/img_34fb3cd267.png)

### After Applying Form Component

![]({{ site.baseurl }}/assets/images/052/img_2a979d33b6.png)

**Tip:** Choose a cleaner, minimal form for better usability.

### Reference

-   [Make model-driven app views editable using the editable grid control](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/make-grids-lists-editable-custom-control)
-   [Edit related table records directly from another table's main form](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/form-component-control)

Have a great day!
