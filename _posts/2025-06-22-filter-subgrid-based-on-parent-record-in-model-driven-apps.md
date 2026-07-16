---
layout: post
post_id: '045'
title: How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?
date: 2025-06-22 17:41:00 +0000
image: assets/images/045/img_7996e7f7a6.gif
description: ''
meta_keywords: ''
category: Dynamics 365 CE
read_time: ''
categories:
  - Dynamics 365 CE
  - Dynamics 365 CRM Online
  - JavaScript
  - Web resource
---

I have recently came across a use case where i have to filter the sub grid based on the field values from the parent record on the event of tab switch. I have accomplished it with the JavaScript Code. For the demonstration of the same, Assume you are in the main form of account entity. You have the contacts tab with the sub grid of contacts which are related to the account. For the ease of understanding, I have taken the fields Shipping Method and Freight Terms(as account and contact). Refer the below image for the unfiltered sub grid.

[![How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?]({{ site.baseurl }}/assets/images/045/img_1c12b9a4a1.png)]({{ site.baseurl }}/assets/images/045/img_1c12b9a4a1.png)

On the event of switching to Contacts Tab, the script should be executed. So i picked the On Tab State Change Event.

Let’s dig deeper into the use case, refer the below image for the fields which are there in both Account and Contact forms. 

Account Form:

[![How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?]({{ site.baseurl }}/assets/images/045/img_2c7b1a67f0.png)]({{ site.baseurl }}/assets/images/045/img_2c7b1a67f0.png)

Contact Form:

[![How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?]({{ site.baseurl }}/assets/images/045/img_a0d4cd65f0.png)]({{ site.baseurl }}/assets/images/045/img_a0d4cd65f0.png)

But you can use the fields in the parent and child entity(but the parent entity fields should be in the form) which suits for your requirement. 

I have used the option set fields as we all know the option set values are in the whole number format. Refer the below image for the option set values of the fields which we used.

[![]({{ site.baseurl }}/assets/images/045/img_d9e9f5832b.png)]({{ site.baseurl }}/assets/images/045/img_d9e9f5832b.png)

Create a new web JavaScript web resource. I have used the below code to accomplish the same. As the code have the condition for checking the current tab is “contacts”, if then the filter xml is injected to the sub grid control ”accountContactsGrid” and refresh it. 

<script src="https://gist.github.com/tamilarasu-arunachalam/6ffaa865aa9cdc75dc1cdc5d5b9882a3.js"></script>

In the Account Form Editor, select the Contacts Tab and in the side pane select the event tab and add the JavaScript web resource to the event. 

[![]({{ site.baseurl }}/assets/images/045/img_62e753911b.png)]({{ site.baseurl }}/assets/images/045/img_62e753911b.png)

Refer the below snapshot of the contact sub grid which is filtered based on the Shipping method and Freight terms. As the parent account have the Shipping method as **"DHL"** and Freight terms as **"FOB"**(refer to the above image for the same), the sub grid filtered the contacts with those values. 

[![]({{ site.baseurl }}/assets/images/045/img_c1752dcf08.png)]({{ site.baseurl }}/assets/images/045/img_c1752dcf08.png)

Have a great day!
