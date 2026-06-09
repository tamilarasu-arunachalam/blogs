---
post_id: "027"
layout: post
title: "Dependent option sets using JavaScript in Model Driven Apps"
date: 2023-07-25 16:58:00 +0000
category: Dynamics 365 CE
image: assets/images/027/img_daf545a6e1.png
categories: ["Model Driven Apps", "Power Apps", "Dynamics 365 CE", "Web resource", "Dataverse"]
---
## Dependent Option sets

    Option sets which depend on the another option set, and the options vary on the change of the value in parent option set.

    We can add options to option sets dynamically using client side scripting. Here I have a scenario of two option set fields, Qualification and Degree. Here, Degree is the dependent on the Qualification. 

[![]({{ site.baseurl }}/assets/images/027/img_8b50679186.png)]({{ site.baseurl }}/assets/images/027/img_8b50679186.png)

    The Qualification field contains two options, UG and PG. The Degree field contains the below options with values as listed in the below table.

| Option Text | Option Value |
| --- | --- |
| BA | 0 |
| BSC | 1 |
| BCA | 2 |
| BBA | 3 |
| BCOM | 4 |
| MA | 5 |
| MSC | 6 |
| MCA | 7 |
| MBA | 8 |
| MCOM | 9 |


Here we need to make the options of degree field dependent on the selected value from qualification field. I need to create a JavaScript code to demonstrate the same. I have used an object which contains options respective to the qualification. The object is in the below snippet.

_**Note:** It is better you can add the same handler to on-load event to prevent inconsistency issues._

```json
{
  "UG": [
      { value: 0, text: "BA" },
      { value: 1, text: "BSC" },
      { value: 2, text: "BCA" },
      { value: 3, text: "BBA" },
      { value: 4, text: "BCOM" }
  ],
  "PG": [
      { value: 5, text: "MA" },
      { value: 6, text: "MSC" },
      { value: 7, text: "MCA" },
      { value: 8, text: "MBA" },
      { value: 9, text: "MCOM" }
  ]
}
```

I have used the below JavaScript code for making the dependent option sets

<script src="https://gist.github.com/tamilarasu-arunachalam/3348a020486162a594512dd4f4d9e5cd.js"></script>

For that, I have to set the on-change event on the qualification field and add the JavaScript to the event handler.

[![]({{ site.baseurl }}/assets/images/027/img_40b7e3d381.png)]({{ site.baseurl }}/assets/images/027/img_40b7e3d381.png)

Save and Publish the form. Navigate to the form to check the script. The GIF is attached below.

![]({{ site.baseurl }}/assets/images/027/img_a997ffa5b2.gif)

Have a good day!