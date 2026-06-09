---
post_id: "016"
layout: post
title: "Get Selected Records from the Grid using Command Button in JavaScript"
date: 2023-04-25 00:30:00 +0000
category: Dynamics 365 CE
image: assets/images/016/img_a471a25ee1.png
categories: ["Model Driven Apps", "Dynamics 365 CE", "Web resource", "Dataverse"]
---
As of now, Model Driven Apps command bar doesn’t have an option to get the selected record's references on the button click. Getting the references of the selected records in the Main Grid should be accomplished by the following steps.

- [Add button to the command bar](#add-button-to-the-command-bar)
- [Add Rules and Commands to Button](#add-rules-and-commands-to-button)
- [Getting Selected Records](#getting-selected-records)

## Add button to the command bar

If your environment doesn’t have Ribbon Workbench, [download](https://www.develop1.net/public/rwb/ribbonworkbench.aspx) the ribbon workbench solution to your environment and create a solution specifically for Ribbon Workbench. Add the existing entity without any metadata to that solution for creating custom buttons.

Navigate to the solutions page(in classic mode) you got to see a button on the above named Ribbon Workbench as like below image

[![]({{ site.baseurl }}/assets/images/016/img_5e31800461.png)]({{ site.baseurl }}/assets/images/016/img_5e31800461.png)

Hit the Ribbon Workbench button, and it will navigate to the command editor page with a pop opened. Select the solution which is specific for buttons.

_**Note:**_ Ribbon Workbench is too sensitive and it did not handle much entity data. It has a limit of only five entities for a solution.

[![]({{ site.baseurl }}/assets/images/016/img_ce0b50ded6.png)]({{ site.baseurl }}/assets/images/016/img_ce0b50ded6.png)

Select the entity under the solution elements to add buttons. For the current context, we have to add buttons in Home, which refers to Main View. Drag and Drop the button on the desired location and add label and icon to it.

[![]({{ site.baseurl }}/assets/images/016/img_d03539ae37.png)]({{ site.baseurl }}/assets/images/016/img_d03539ae37.png)

## Add Rules and Commands to Button

Add a new JavaScript Web Resource to the solution (Not in button specific solution) with the following script, then save and publish the solution.

<script src="https://gist.github.com/tamilarasu-arunachalam/500abd96bfa23acad7e386b8ca9d2c66.js"></script>

Navigate to the Command Editor, then add a new command by clicking the + icon, add a JavaScript action by selecting the library and adding the function name. Add the CRM Parameter and **SelectedControlSelectedItemReferences**.

[![]({{ site.baseurl }}/assets/images/016/img_3e8feffddc.png)]({{ site.baseurl }}/assets/images/016/img_3e8feffddc.png)

Add an Enable rule to show the button only a record is selected. Click on + icon near Enable rules. Click on + Add Step and select SelectionCountRule and set the minimum field to 1. So that, the button appears on the command at least a record gets selected unless it is hidden.

[![]({{ site.baseurl }}/assets/images/016/img_59b0dc36d8.png)]({{ site.baseurl }}/assets/images/016/img_59b0dc36d8.png)

Add the Enable Rule to the Command and Add the Command to the button as like the below image, then publish the Command Editor.

[![]({{ site.baseurl }}/assets/images/016/img_a516faec8e.png)]({{ site.baseurl }}/assets/images/016/img_a516faec8e.png)

## Getting Selected Records

In this blog, I have placed the button in Products Home grid. I got to see the button which appears after selecting a record.

[![]({{ site.baseurl }}/assets/images/016/img_5e370a7e4a.png)]({{ site.baseurl }}/assets/images/016/img_5e370a7e4a.png)

Hit the button to see the selected record names in an alert

[![]({{ site.baseurl }}/assets/images/016/img_7c758397bf.png)]({{ site.baseurl }}/assets/images/016/img_7c758397bf.png)

The below GIF will demonstrate the working of this script.

[![]({{ site.baseurl }}/assets/images/016/img_afd13fcd26.gif)]({{ site.baseurl }}/assets/images/016/img_afd13fcd26.gif) 