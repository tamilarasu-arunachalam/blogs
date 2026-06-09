---
post_id: "033"
layout: post
title: "Field Mapping between Entities in Dynamics 365 CE"
date: 2024-01-10 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/033/img_ea59cf2330.png
categories: ["Model Driven Apps", "Dynamics 365 CRM Online", "Dynamics 365 CE"]
---
You know what!. We can map fields with the related entity without using any client-side script. It can be done by the Out-of-Box feature, which is Entity Field Mapping. But that entities must be related with 1:N relationship. But there are some limitations such as we can map the fields that must be of same type and format. For example, We can map a field from account entity with the contact entity.

As this kind of field mappings works on the scenarios where we create the child records from parent record. In case of creating a child record independently by the main form or any other way, the entity field mapping doesn't work. I have created the entity field mapping by following the below steps.

-   Create a new custom field in Account and Contact entity. And I have created a text field and named it Test Mapping Field.

[![]({{ site.baseurl }}/assets/images/033/img_230affdea4.png)]({{ site.baseurl }}/assets/images/033/img_230affdea4.png)

-   As the account has 1:N relationship with contact. We don't need to do anything with the relationship here. If you are using a custom entity, you need to create a 1:N relationship between them.

-   Switch to the classic mode, Navigate to Account Entity 🡲 Click on the 1:N relationship(contact\_customer\_accounts)

[![]({{ site.baseurl }}/assets/images/033/img_a8909e94fe.png)]({{ site.baseurl }}/assets/images/033/img_a8909e94fe.png)

-   After opening the relationship, click on the mapping on the left side pane.

[![]({{ site.baseurl }}/assets/images/033/img_33530fd744.png)]({{ site.baseurl }}/assets/images/033/img_33530fd744.png)

-   In the Mapping page, Create a new mapping by clicking on the new button

[![]({{ site.baseurl }}/assets/images/033/img_d54d644a31.png)]({{ site.baseurl }}/assets/images/033/img_d54d644a31.png)

-   A pop-up for creating a field mapping opens up, and select fields to map. I will map my custom field from account to contact.

[![]({{ site.baseurl }}/assets/images/033/img_dde6eb762d.png)]({{ site.baseurl }}/assets/images/033/img_dde6eb762d.png)

-   Navigate to the form editor for Accounts Entity 🡲 Edit the Main form 🡲 Add the field to the form, then save and publish.

[![]({{ site.baseurl }}/assets/images/033/img_1083ed8ede.png)]({{ site.baseurl }}/assets/images/033/img_1083ed8ede.png)

-   Navigate to the form editor for Contacts Entity 🡲 Edit the Quick Create form 🡲 Add the field to the form, then save and publish.

[![]({{ site.baseurl }}/assets/images/033/img_e9c8a2cf40.png)]({{ site.baseurl }}/assets/images/033/img_e9c8a2cf40.png)

-   Add any value to the custom field which we added in accounts form. Then save the record.

[![]({{ site.baseurl }}/assets/images/033/img_43f0081e64.png)]({{ site.baseurl }}/assets/images/033/img_43f0081e64.png)

-   Create a new Contact from the contact subgrid form Account main form.

[![]({{ site.baseurl }}/assets/images/033/img_fd672d84f4.png)]({{ site.baseurl }}/assets/images/033/img_fd672d84f4.png)

-   You will find the value which we gave in the Account Main form will come over to the Contact create form.

[![]({{ site.baseurl }}/assets/images/033/img_b94521c97b.png)]({{ site.baseurl }}/assets/images/033/img_b94521c97b.png)

By this way, we can achieve the mapping of fields with the related entity using Out-of-the-Box feature (without coding). You can refer the Microsoft Documentation on Entity field mapping [here](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/map-entity-fields?view=op-9-1)

Have a good day!