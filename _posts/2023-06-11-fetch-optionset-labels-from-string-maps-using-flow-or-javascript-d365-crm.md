---
layout: post
post_id: '021'
title: Fetch Optionset Labels from String Maps Table using Flow or JavaScript
date: 2023-06-11 18:30:00 +0000
image: assets/images/021/img_9d960ad019.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Model Driven Apps
  - Dynamics 365 CRM Online
  - Power Automate
  - Web resource
  - Dataverse
---

-   [String Maps Table in Dataverse](string-maps-table-in-dataverse)
-   [List Option set Labels using Power Automate](#list-option-set-labels-using-power-automate)
-   [List Option set Labels using JavaScript](#list-option-set-labels-using-javascript)
-   [Summary](#summary)

### String Maps Table in Dataverse

    String Maps table in Dataverse contains the details of Option set fields which are present in that organization. It contains details like Object Type code, Attribute Name, Attribute Value, Value, Display Order, and Organization ID. The response of the string maps API looks like the below image.

[![]({{ site.baseurl }}/assets/images/021/img_ebb602d862.png)]({{ site.baseurl }}/assets/images/021/img_ebb602d862.png)

### List Option set Labels using Power Automate

-   I have used the Shipping method field from accounts table
-   Go to [https://make.powerautomate.com](https://make.powerautomate.com/) → + Create → Instant Flow.

[![]({{ site.baseurl }}/assets/images/021/img_d233ca34ee.png)]({{ site.baseurl }}/assets/images/021/img_d233ca34ee.png)

-   After the Manual trigger gets added to the flow, add a new step and select the **List Rows** action from Dataverse connector.

[![]({{ site.baseurl }}/assets/images/021/img_f11a73dd6e.png)]({{ site.baseurl }}/assets/images/021/img_f11a73dd6e.png)

-   Select Table name as String Maps and add a filter as _objecttypecode eq 'account' and attributename eq 'address1_shippingmethodcode'._
-   Then add Create HTML Table connector to list those options we got from the previous action.

[![]({{ site.baseurl }}/assets/images/021/img_d83179ca8c.png)]({{ site.baseurl }}/assets/images/021/img_d83179ca8c.png)

-   Save the flow and click Run. After running, get into any of the successful run, and you have got to see the options from the option set are listed in the HTML table.

[![]({{ site.baseurl }}/assets/images/021/img_ae546c5491.png)]({{ site.baseurl }}/assets/images/021/img_ae546c5491.png)

### List Option set Labels using JavaScript

-   Go to your favourite IDE and create a JavaScript file.
-   Add the below code to fetch the Option set labels of the particular field.

<script src="https://gist.github.com/tamilarasu-arunachalam/4df50e97e762cc6c6933bc9ceb500f83.js"></script>

-   Create a JavaScript Web resource and upload the .js file to it. Then hit save and publish.

[![]({{ site.baseurl }}/assets/images/021/img_0f3ff8780f.png)]({{ site.baseurl }}/assets/images/021/img_0f3ff8780f.png)

-   Navigate to the main form in the maker and add the function name to the on load event of the form. Pass the parameters which are necessary for the function. In this, I have passed the object type code (entity name) and attribute name (field – logical name) as the parameter.

[![]({{ site.baseurl }}/assets/images/021/img_e563a0b351.png)]({{ site.baseurl }}/assets/images/021/img_e563a0b351.png)

-   For this article, I have used the account entity and shipment method option set as attribute.
-   Save and Publish the form. Then move to the app and load the form.
-   The options are listed in the alert box like below.

[![]({{ site.baseurl }}/assets/images/021/img_0750ecafa6.png)]({{ site.baseurl }}/assets/images/021/img_0750ecafa6.png)

### Summary

     You can use this string maps table to fetch option set labels and values from any table in Dataverse. This blog describes the fetching of option set labels from string maps table using Power Automate and JavaScript. You can use this in Canvas App or in plugins to fetch option set data.  

Have a Good day!
