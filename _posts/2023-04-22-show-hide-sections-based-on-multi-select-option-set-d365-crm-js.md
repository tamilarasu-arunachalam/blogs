---
layout: post
post_id: '015'
title: Show and Hide sections based on Multi-Select Option Set using JavaScript
date: 2023-04-22 19:35:00 +0000
image: assets/images/015/img_1fe707bb24.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
read_time: 5 min read
categories:
  - Model Driven Apps
  - Dynamics 365 CE
  - Web resource
---

Multi-Select Option Set in Dataverse allows you to select multiple options for a single field. The selected values of the options are stored in the form of integer array like [1,2,3]. Here in this blog, you will learn how to toggle the visibility of sections based on the options in Multi-Select Option Set using JavaScript. Every model driven app form has a hierarchy of Tabs → Sections → Fields.

[![]({{ site.baseurl }}/assets/images/015/img_c7d21c4b0d.png)]({{ site.baseurl }}/assets/images/015/img_c7d21c4b0d.png)

I have created a new Multi-Select Option Set field _Sections to show_ in Accounts Entity. With this field values we can show and hide the sections in the form. I have added the sections as choices and added the choice to the Multi-Select Option Set.

[![]({{ site.baseurl }}/assets/images/015/img_260919b817.png)]({{ site.baseurl }}/assets/images/015/img_260919b817.png)

Add the field to the form on the tab and section of your choice. Here in this i have added this field to the Contact Preferences Section of Details Tab. Save and Publish the form

**Note:** Do not place the field to the section which you are planning to hide. Because this field also get hidden with the section. 

[![]({{ site.baseurl }}/assets/images/015/img_b5d51b7641.png)]({{ site.baseurl }}/assets/images/015/img_b5d51b7641.png)

Hide the sections you want to toggle the visibility by default as like the above image. Unless it will appear untill the Section To Show field gets selection when creating new record.

[![]({{ site.baseurl }}/assets/images/015/img_a5e6a29ca2.png)]({{ site.baseurl }}/assets/images/015/img_a5e6a29ca2.png)

Create a new JavaScript Web Resource to handle the visibility of the sections. Add the function to the Web resource. The below snippet contains the function to show and hide the sections

<script src="https://gist.github.com/tamilarasu-arunachalam/259bd90cc77f2f87fde89a8d4458b6f0.js"></script>

[![]({{ site.baseurl }}/assets/images/015/img_7bc98c2770.png)]({{ site.baseurl }}/assets/images/015/img_7bc98c2770.png)

**Note:** Add this function to the both onload and onchange event handlers. It works fine with onchange but while refreshing it do not check the field values and it got mess up. So we added onload event too. Save and publish the form again

We can the section after getting the Tab control. Create an Array of Objects with id and sections fields. **_id_** is the Option Set values of the Multi-Select Option Set field and **_section_** is the logical name of the sections. Initiate a foreach to iterate through the object array and check the field value. If the value from field includes any of the id in the array, then set visibility to the section equivalent to that id.
