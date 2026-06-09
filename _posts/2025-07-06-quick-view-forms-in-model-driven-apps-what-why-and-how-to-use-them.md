---
post_id: "047"
layout: post
title: "Quick View Forms in Model Driven Apps: What, Why, and How to Use Them?"
date: 2025-07-06 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/047/img_004273db2e.gif
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "JavaScript", "Model Driven Apps", "Power Apps", "Web resource"]
---
When working with Microsoft Dynamics 365 CRM, efficiency and user experience matter. One feature that often goes unnoticed - but can make a significant difference - is the Quick View Form. If you’ve ever wanted to display related record information directly within the current form without forcing users to open another window, Quick View Forms are exactly what you need.

In this blog, I’ll walk you through what Quick View Forms are, why and when you should use them, how to set them up, and how to enhance them using JavaScript where possible.

## **What Is a Quick View Form?**

A Quick View Form in Dynamics 365 CRM allows you to show fields from a related entity on the main form of another entity. The data shown is read-only and is retrieved through a lookup relationship. These forms are embedded into other forms and act as lightweight summaries of related records.

For example, if you’re looking at a **Contact** record and want to display details from the associated **Account**, a Quick View Form lets you pull in that information - such as Account Name, Phone Number, and Industry - directly onto the Contact form. This saves time and improves visibility, especially for users who frequently work across multiple entities.

## **Why and When to Use Quick View Forms**

Quick View Forms are most useful when you want to improve the user experience without overcomplicating the form. They allow you to bring important related data into view so that users don’t have to navigate to other records.

Here are some common reasons to use them:

-   To reduce unnecessary navigation between records
-   To provide more context when viewing or editing a record
-   To enhance data visibility without cluttering the form
-   To summarize related information within dashboards or forms

Typical use cases include showing Account details on an Opportunity form, Primary Contact info on an Account form, or Parent Case details inside a child Case record. The key is to use Quick View Forms in a way that adds clarity without overwhelming the user.

## **How to Create and Use Quick View Forms**

Creating and using Quick View Forms in Dynamics 365 CRM is straightforward. Here’s a step-by-step example based on a real use case.

### **Workaround Example**

Let’s say you have a **City** entity with three fields: **City Name**, **State Name**, and **Country Name**. In the **Account** form, I’ll create a lookup field for the City table. I’ve added a new tab named **“QV Test”** to demonstrate this use case.

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_e7059e3785.png)]({{ site.baseurl }}/assets/images/047/img_e7059e3785.png)  
  
When a city is  selected, the corresponding **State** and **Country** names should automatically appear. This is exactly where a Quick View Form helps.

### **Step 1: Create the Quick View Form**

1.  Navigate to **Advanced Settings → Solutions → Your preferred solution**
2.  Select the entity from which you want to display information (e.g., City)
3.  Go to the **Forms** section and click **New Quick View Form**
    
[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_7cff1f85cd.png)]({{ site.baseurl }}/assets/images/047/img_7cff1f85cd.png)
    
1.  Name the form something like **“City Quick View”**
2.  Design your form by adding only the necessary fields - keep it simple and focused (in this case, State and Country)  
    
[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_c57ec3cedc.png)]({{ site.baseurl }}/assets/images/047/img_c57ec3cedc.png)
    
1.  Save and **Publish** the form

### **Step 2: Add the Quick View Form to the Target Entity**

1.  Open the main form of the target entity (e.g., Account)
2.  Add the **City** lookup field to the **QV Test** tab  
    
[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_dbe2e51c16.png)]({{ site.baseurl }}/assets/images/047/img_dbe2e51c16.png)
    
1.  In the form designer, insert a **Quick View Form** control
2.  Select the lookup field that links to the related City record  
    
[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_5f37d4ff4b.png)]({{ site.baseurl }}/assets/images/047/img_5f37d4ff4b.png)
    
1.  Choose the **related entity** and the Quick View Form you created  
    
[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_75bd8f1a39.png)]({{ site.baseurl }}/assets/images/047/img_75bd8f1a39.png)
    
1.  Position the form in the layout where it makes the most sense for users
2.  Save and **Publish** the form

Once published, users will see the Quick View Form populated with data from the related record—as long as the lookup field has a value.

### **Demonstration**

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_701f2156ab.png)]({{ site.baseurl }}/assets/images/047/img_701f2156ab.png)  

-   Navigate to the **Account** form and switch to the **QV Test** tab.  
    

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_844b32e1aa.png)]({{ site.baseurl }}/assets/images/047/img_844b32e1aa.png)  

-   Once a city is selected from the lookup field, the Quick View Form will automatically display the corresponding **State** and **Country** fields.  
    

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_398a585229.png)]({{ site.baseurl }}/assets/images/047/img_398a585229.png)  

## **Customizing the Quick View Form with JavaScript**

While Quick View Forms are read-only and somewhat limited in customization, JavaScript can help you enhance them - particularly when you want to control visibility or implement conditional logic.

I have used the below code to hide the Quick View Form and its fields conditionally.

<script src="https://gist.github.com/tamilarasu-arunachalam/20b646b04314e39dcc52b69211fb75fb.js"></script>

### **Example: Hide or Show Fields Dynamically**

You can access the Quick View Form control and control its visibility based on conditions:

### **Code Breakdown**

-   Get the City lookup field value using: formContext.getAttribute("tamil\_city").getValue()\[0\].id.slice(1, -1);
-   Retrieve related record details using Web API: Xrm.WebApi.retrieveRecord("tamil\_city", cityValue, "?$select=tamil\_name,tamil\_state,tamil\_country");
-   Get the Quick View Form control: formContext.ui.quickForms.get("tamil\_cityQVF");
-   Use visibility logic based on field values: cityQvfControl.getControl("tamil\_state").setVisible(false);
-   Hide individual fields or the entire Quick View Form if necessary: cityQvfControl.setVisible(false);

### **Final Steps**

-   Go to the **Account form** → **Events** → **On Load**

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_493e9c6ce3.png)]({{ site.baseurl }}/assets/images/047/img_493e9c6ce3.png)  

-   Add the JavaScript web resource to the **Event Handler**
-   Save and **Publish** the form

### **Demonstration**

If the **State** field is empty in the selected **City** record, the State field will be hidden from the Quick View Form.

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_fa7890d129.png)]({{ site.baseurl }}/assets/images/047/img_fa7890d129.png)

For example, I added a city named “New Delhi” which is a Union Territory and does not fall under any state. So the State field is left empty - and therefore hidden.

[![Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them]({{ site.baseurl }}/assets/images/047/img_01b02f7c74.png)]({{ site.baseurl }}/assets/images/047/img_01b02f7c74.png)

If **both** the State and Country fields are empty in the City record, the entire Quick View Form will be hidden. I created a test record named “[Bir Tawil](https://en.wikipedia.org/wiki/Bir_Tawil)” a disputed territory claimed by no state or country (fun geography fact), and the form disappears entirely in this case.

## **Conclusion**

Quick View Forms are a smart way to create clean, efficient, and user-friendly forms in Dynamics 365 CRM. They let you bring relevant related data into the context of the current record, reducing navigation time and improving usability.

While you can’t edit data inside a Quick View Form, you can still control how and when it appears using JavaScript. With thoughtful use, Quick View Forms can significantly enhance both your form design and the user experience.

### **References**

-   [Create and edit Quick View Forms – Power Apps (Microsoft Docs)](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/create-edit-quick-view-forms)
-   [Quick View Forms for On-Premise – Microsoft Docs](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/create-edit-quick-view-forms?view=op-9-1)
-   [Client API - isLoaded Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/isloaded)
-   [Client API - getControl Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol)
-   [Client API - setVisible Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setvisible)

Have a great day!