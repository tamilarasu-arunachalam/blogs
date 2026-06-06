---
post_id: "008"
layout: post
title: "Auto Populate lookup based on the other lookup field in Power Apps"
date: 2022-12-11 10:54:00 +0000
category: Dynamics 365 CE
image: "assets/images/008/img_21739b17b9.png"
categories: ["Power Apps", "Web resource", "Dataverse"]
---
Lookup fields are not like a normal field because after creation, the lookup field creates a N:1 relationship between the entity that the lookup is created for and the entity that is being looked up to. The value of the lookup is the GUID of the record in destination table we are looked up to. 

In this article we'll have a view on auto populating lookup based on the another lookup using the JavaScript web resource. I have created a form which includes three lookup fields and they are related to one another. 

### Steps:

-   Table Setup
-   Web resource Setup
-   JavaScript Code
-   Add Web resource to Event Handler
-   Result

## Table Setup :

[![]({{ site.baseurl }}/assets/images/008/img_97cf6fb770.png)]({{ site.baseurl }}/assets/images/008/img_97cf6fb770.png)

     I have four tables in Dataverse which are details, city, state and country. The details table contains three lookup fields named City, State and Country. City has N:1 relationship with State, which has N:1 relationship with Country. The below diagram represents the Table setup for the context. The scenario was if the city was selected, the state and country should be auto-populated. Below diagram represents the relationship between the table we use.

[![]({{ site.baseurl }}/assets/images/008/img_f96135fdb3.png)]({{ site.baseurl }}/assets/images/008/img_f96135fdb3.png)

## Web resource Setup:

         Auto-population can be achieved through business rules too, but the filtering is not possible in Business Rules. So, we can make it through Web resources. For that you have to add a new web resource by clicking + New → more → Web resource. A quick create form opens for creating a web resource. Upload your Web resource file(if you didn't started the coding part, upload a sample JS file from device and you can modify it any time), give a name, select type as JavaScript(JS) and Save it. 

[![]({{ site.baseurl }}/assets/images/008/img_7e55819582.png)]({{ site.baseurl }}/assets/images/008/img_7e55819582.png)

## JavaScript Code :

The Web resource contains two functions setState and setCountry, one for auto-populating state and another for country. Both are triggered from field on-change events. setState is triggered on-change of city and setCountry is triggered on-change of state. The below snippet is the function of setState

<script src="https://gist.github.com/tamilarasu-arunachalam/9c76178b30c512ef5c746af93e6ece8b.js?file=setState.js"></script>

The below snippet is for setCountry function. 

<script src="https://gist.github.com/tamilarasu-arunachalam/9c76178b30c512ef5c746af93e6ece8b.js?file=setCountry.js"></script>
```
targetState.fireOnChange();
```
The above line of code is a special function in dataverse because which triggers the function when a field is changed automatically(from another trigger). Once our coding part gets completed add the Web resource file to dataverse. 

## Add Web resource to Event Handler:

Move to form designer in Power Apps and add the Web resource to the form library.

[![]({{ site.baseurl }}/assets/images/008/img_ea3c22d7d4.png)]({{ site.baseurl }}/assets/images/008/img_ea3c22d7d4.png)

Move to the **Tree View** and select the field and navigate to Events tab in the right menu bar. Configure the event by clicking the **\+ Event handler**. Select event type, library and function name then click Done. You have to add event handler for city and state field in form.

[![]({{ site.baseurl }}/assets/images/008/img_274b8f01e0.png)]({{ site.baseurl }}/assets/images/008/img_274b8f01e0.png)

Save and Publish the solution. Move to the application to test how it works.

## Result:

[![]({{ site.baseurl }}/assets/images/008/img_cc12ec2169.gif)]({{ site.baseurl }}/assets/images/008/img_cc12ec2169.gif)

In the above clip you could see the working of auto-population of lookup based on the other.

Keep Learning..