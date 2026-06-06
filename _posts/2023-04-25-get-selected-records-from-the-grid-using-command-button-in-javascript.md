---
post_id: "016"
layout: post
title: "Get Selected Records from the Grid using Command Button in JavaScript"
date: 2023-04-25 00:30:00 +0000
categories: ["Model Driven Apps", "Dynamics 365 CE", "Web resource", "Dataverse"]
---
As of now, Model Driven Apps command bar doesn’t have an option to get the selected record's references on the button click. Getting the references of the selected records in the Main Grid should be accomplished by the following steps.

![Get Selected Records from the Grid using Command Button in JavaScript]({{ site.baseurl }}/assets/images/016/img_a471a25ee1.png)

-   [Add button to the command bar](#one)
-   [Add Rules and Commands to Button](#two)
-   [Getting Selected Records](#three)

## Add button to the command bar

If your environment doesn’t have Ribbon Workbench, [download](https://www.develop1.net/public/rwb/ribbonworkbench.aspx) the ribbon workbench solution to your environment and create a solution specifically for Ribbon Workbench. Add the existing entity without any metadata to that solution for creating custom buttons.

Navigate to the solutions page(in classic mode) you got to see a button on the above named Ribbon Workbench as like below image

[![]({{ site.baseurl }}/assets/images/016/img_5e31800461.png)](https://blogger.googleusercontent.com/img/a/AVvXsEgnHnUbo3Cg_6zIoJYn7bZQahlkM6xXJ_Kh4-wOOC8oJmAHMfU9olEmiV3eckGSK5f22TPug8paKL77hjuqzcb5EWGOWUB5nTVeOxAjm2BzgwSrME844zZBsqaWDkSBj0QQySjJ_4crReEaNI4JjScKg-TXuW8cHEyr5agxdl6DsR5Kmuec7a_FTcB2)

Hit the Ribbon Workbench button, and it will navigate to the command editor page with a pop opened. Select the solution which is specific for buttons.

_**Note:**_ Ribbon Workbench is too sensitive and it did not handle much entity data. It has a limit of only five entities for a solution.

[![]({{ site.baseurl }}/assets/images/016/img_ce0b50ded6.png)](https://blogger.googleusercontent.com/img/a/AVvXsEjF3puvR8QeKJAYBx3M-HzEPp3xYAC8CRyyA-xggEA6eeqnexn9r2p1e5DbZ2KV0rxZQzT47s_ObLRMN4H79iXS2s9QMDO5BWZfIGZaT6zwxkSWuMDgkdQFRFs4daZR2gFBnPdIMqws4czWyo-y-25PzmLjSVKhsNpt7Huqkxo9RI9B4HlhCeMX20YP)

Select the entity under the solution elements to add buttons. For the current context, we have to add buttons in Home, which refers to Main View. Drag and Drop the button on the desired location and add label and icon to it.

[![]({{ site.baseurl }}/assets/images/016/img_d03539ae37.png)](https://blogger.googleusercontent.com/img/a/AVvXsEgx-I8d5j7gSiushe81dI8CaCXtvAMXQWBKgl75NnKq7bQPec8SHOHuVYj2bm4kJaOHmqcggRs_q7gF9YqXqJuLhS4LRSMvsQuTo757BaIPykW_YDXKLf7Moh0aauI5EZvEH2PDC_b3O3TwSMkDS7lVKwM8ZADysB2IRBBTDATjJQF93V-5iQyosqZz)

## Add Rules and Commands to Button

Add a new JavaScript Web Resource to the solution (Not in button specific solution) with the following script, then save and publish the solution.

<script src="https://gist.github.com/tamilarasu-arunachalam/500abd96bfa23acad7e386b8ca9d2c66.js"></script>

Navigate to the Command Editor, then add a new command by clicking the + icon, add a JavaScript action by selecting the library and adding the function name. Add the CRM Parameter and **SelectedControlSelectedItemReferences**.

[![]({{ site.baseurl }}/assets/images/016/img_3e8feffddc.png)](https://blogger.googleusercontent.com/img/a/AVvXsEiWAsqOQANmvruiuKsMN2BsEYTEs2D2l70YkmnCSRZdBojNAzjdsGeDDFdvUsyVIyldteoQHTfKPnHu42eIj8ZENRvoU3ZRizgR6rSl7XZn2UV8XDvk2HWPkzMQmxZLzEKXIdyrWxo970_uEqKdGWkrG3DcYkTtkP0qanWtzJBonWbqHlvM1sjHJ13K)

Add an Enable rule to show the button only a record is selected. Click on + icon near Enable rules. Click on + Add Step and select SelectionCountRule and set the minimum field to 1. So that, the button appears on the command at least a record gets selected unless it is hidden.

[![]({{ site.baseurl }}/assets/images/016/img_59b0dc36d8.png)](https://blogger.googleusercontent.com/img/a/AVvXsEhCJUY6TvMl3e9TECe7852CycibHzC6vMN3UrMGZdW_nKpbGsIlZVGUxXRx4_R1-XO6rBNFSm8fH77jNB9NSAI1pjKx9w9WI72UOWpmerAxQBsdVTmobpOEyCsZFg2eDMf2A6-u4BEAe4oaM96d3H8RaIKJ_z15n610aWW6nK4HdUldWSHO3Mfd5bXj)

Add the Enable Rule to the Command and Add the Command to the button as like the below image, then publish the Command Editor.

[![]({{ site.baseurl }}/assets/images/016/img_a516faec8e.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcalvz-Gvlg81eyHdergtf0aQFhE7fv8N1aDMzINzk7w7ugYfKwnSN5YwwYYaDOivJ0VThr1cY68LKY8bMVC6YcBFREHiXs562zEfHrB5IIjdeunDXovYqmC6IMfDN1a9px-k6hcL8kGy1FDRQaKcUlsr1EMpkrNlHjRk5DNx5_CyZO463bN6nZHn2/s916/ribbonselecrec.png)

## Getting Selected Records

In this blog, I have placed the button in Products Home grid. I got to see the button which appears after selecting a record.

[![]({{ site.baseurl }}/assets/images/016/img_5e370a7e4a.png)](https://blogger.googleusercontent.com/img/a/AVvXsEgw94hv8hOudSYvO1Cn5CQ2ar7T3Ioqw0G-4WFf1Unhj08LDEQqDuz_R-ibqYTTYfRWHAXYhHn3Vf88vVifZ6mhdokXVjhwy2tqKXOwXeEUpTosfEAre6q8yXvY1peywPGeDv8OWczNI3Mwe3FCHPyNpBx8IDWCOIpS_RDTQHGBuiSyTp-0dzs8LSjV)

Hit the button to see the selected record names in an alert

[![]({{ site.baseurl }}/assets/images/016/img_7c758397bf.png)](https://blogger.googleusercontent.com/img/a/AVvXsEg_ubljsvL1F0G5ZsrX0TTDYaNOxYbUIDQyWw0nZDqbjrABhH3PztI0ZnVUsdIJKdynZXuv06zb19r9HX0T4ZgwyPU1lpNgreUSv0ul6tu6-qpdO2R-BAHlhI4CFD38Z93MPeNAIDZIvNfsMRV8DBRXtN3QZ6saHWCMHHVg6GMTsBRvwUg6-8wOigv_)

[![]({{ site.baseurl }}/assets/images/016/img_e606fc11ea.png)](https://blogger.googleusercontent.com/img/a/AVvXsEg5RdpQMw6i4-3E8o7OaGbABQDYaF6TRo6veFWiOcn2ckUbw2pj3e7HktPvCKQUE2k6xtePELJgzEYp-Ofipen7N_LpQHUm_tVKo2XRs2AYFCHGMFMIVpyjdecoURAFHRWxFVGm1EllpTQPWusyHIYDsKEou2ncgHrEw94qB4cieC_JQcQJCeIYB6O-)

The below GIF will demonstrate the working of this script.

[![]({{ site.baseurl }}/assets/images/016/img_afd13fcd26.gif)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKsk4DDzRzPk96bKWJK5idW-YtcuBkxkN1KiFXmL7hlLYMvYVLEs_j0TTrFrRHKRF52zde6zYMYUUOxlj6PTJTtEzqx4UO50E5HlO1rrXeEfsogEV0dK4b2BvxPD-xSd2KRoNkbLgJs7G8aYrbrbcejC97O6AXiVy6l6srUt9vEX9jHgMf5TwNUZ6c/s1000/selected%20records.gif) 