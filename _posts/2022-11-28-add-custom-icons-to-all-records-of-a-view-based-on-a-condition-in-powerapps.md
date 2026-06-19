---
post_id: "002"
layout: post
title: "Add custom icons to all records of a view based on a condition in PowerApps"
date: 2022-11-28 17:39:00 +0000
image: "assets/images/002/img_bff5487888.webp"
category: Dynamics 365 CE
categories: ["Power Apps", "Dynamics 365 CE", "Web resource", "Dataverse"]
redirect_from: 
     - https://tamilarasu-arunachalam.blogspot.com/2022/11/add-custom-icons-to-all-records-of-view.html
---
Have you ever thought of inserting an icon to all records in a view based on a condition. Here I have a table with some fields like name and gender of types single line of text and optionset respectively. The icons will be displayed based on the gender option.

![]({{ site.baseurl }}/assets/images/002/img_28d435f3e5.png)

To achieve this we have to accomplish the following steps.

-   Setting up Entity and Fields
-   Set up Icons
-   Set up a Web resource
-   Result

## Setting up Entity and Fields :

I have an entity named Personal Details. I have used the default name field and created a new optionset field gender with two options male and female. Save and publish.

![]({{ site.baseurl }}/assets/images/002/img_d514ca70ca.png)

## Set up Icons:

For setting up icons I have created two web resources named male and female and the type is png. And uploaded the icon I wish to use for the view. I have used an icon from the internet which is of size 16x16(recommended).

![]({{ site.baseurl }}/assets/images/002/img_2650e979e0.png)

## Set up a Web resource:

Create another web resource of name custom icon in view and gave type as JScript. Add a function with two parameters rowData and userLCID. rowData retrieves the metadata for each row. userLCID gets the Language Code for current user. First parse the data which we got from the rowData and assign it to a variable. The field values are inside the data object. we can get the field value by data.c99\_gender\_Value(data.fieldname\_Value).

<script src="https://gist.github.com/tamilarasu-arunachalam/17136d44197416774aaa12ca5ba99bc3.js"></script>

As the value is from the optionset field we have put a condition using the optionset value. I have created a switch case with the optionset values. Inserting an icon needs two values image tooltip and web resource name. Have to use logical name for web resource name. Both tooltip and web resource name are returned as an array. You must use the value for the optionset instead of the text values.

![]({{ site.baseurl }}/assets/images/002/img_f5227ed9e7.png)

To add Web resource to the view, select a view from the list and click on more options. The view manager page opens up. Select the column you want to add icons → click Change Properties.

![]({{ site.baseurl }}/assets/images/002/img_ed3f3ecffe.png)

Change Properties opens up → select the Web resource and enter the Function name → Click Ok. Then publish all the customizations.

![]({{ site.baseurl }}/assets/images/002/img_618f6a0277.png)

## Result

Navigate to the view and hit refresh button, the icon appears in the gender column in the view.

![]({{ site.baseurl }}/assets/images/002/img_c141608e08.png)

As of now adding the Web resource to the view option is in classic mode only. This feature may be updated in the upcoming Power Apps releases

Hope this helps you. I have attached the Microsoft documentation for your reference [here](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/display-custom-icons-instead?view=op-9-1)
