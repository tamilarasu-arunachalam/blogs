---
layout: post
post_id: '012'
title: Third-party map integration with geocoding in Model Driven App - Power Apps
date: 2023-02-16 17:04:00 +0000
image: assets/images/012/img_bff71861f8.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Power Apps
  - Dataverse
---

Microsoft Dynamics 365 CRM supports addition of Bing Maps to its forms by default. But it should be enable/disable under Settings → Administration → System Settings. Bing Maps in Dynamics 365 CE works on the geocoding concept. It retrieves address from the form field and with the geocoding it pin the location on the map. To replicate the same concept with the open source maps, i go with the leaflet. Leaflet is one of the popular opensource map. Let’s dive in to the article and get to know how to use another map instead of Bing maps.

<script src="https://gist.github.com/tamilarasu-arunachalam/e910bf9e80cc3e695c8e2f685cb60862.js?file=c99_pinLocation.html"></script>

[![]({{ site.baseurl }}/assets/images/012/img_75bd52723c.png)]({{ site.baseurl }}/assets/images/012/img_75bd52723c.png)

A form contains three lookup fields which are city, state and country. If the city field is selected it should trigger the function which marks the selected city in map. Create a HTML Web Resource to use it as a canvas to show the map on the form by adding it as a section in the form. To add a web resource as a section, Go to Form editor(modern editor) → Components → Display → HTML web resource.

[![]({{ site.baseurl }}/assets/images/012/img_1c03618d0c.png)]({{ site.baseurl }}/assets/images/012/img_1c03618d0c.png)

After adding the HTML web resource to the section, there is an other web resource which should trigger the functions inside the html web resource therefore marking and showing the map dynamically. This JavaScript web resource send the form data to the canvas on change of the field by getting the context of that web resource control.

<script src="https://gist.github.com/tamilarasu-arunachalam/e910bf9e80cc3e695c8e2f685cb60862.js?file=c99_mapContext.js"></script>

Add the web resource on the onload of the page and on change of the field. To do so Go to the form editor and select the field to add event → click on Events → select the table column → Add new handler by clicking + Event Handler. save and publish the form.

[![]({{ site.baseurl }}/assets/images/012/img_c1c0d9f7c7.png)]({{ site.baseurl }}/assets/images/012/img_c1c0d9f7c7.png)

The form is now equipped with the third-party map with geocoding. This locates the selected city in the form.

[![]({{ site.baseurl }}/assets/images/012/img_9f83a3fc70.png)]({{ site.baseurl }}/assets/images/012/img_9f83a3fc70.png)

More Power\~Apps\~ to you!
