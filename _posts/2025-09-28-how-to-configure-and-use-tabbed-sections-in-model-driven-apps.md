---
post_id: "050"
layout: post
title: "How to Configure and Use Tabbed Sections in Model-Driven Apps?"
date: 2025-09-28 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/050/img_62d6897223.gif
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "Model Driven Apps", "Power Apps", "Web resource", "JavaScript", "HTML"]
---
When working with Dynamics 365 model-driven apps, we often think of forms in a traditional way - tabs holding sections, and sections holding fields. Recently, I stumbled upon a hidden gem that many of us might have overlooked: Tabbed Sections. At first, I didn’t even know this feature existed. After digging into it (thanks to Kailash Ramachandran for his detailed [blog](https://mytrial365.com/2024/05/16/exploring-the-underutilized-power-of-tabbed-sections-in-dynamics/)), I realized how powerful and underutilized this feature really is.

In this article, let's explore:

-   What are Tabbed Sections?
-   How to configure Tabbed Sections?
-   Why to use Tabbed Sections?

## What is Tabbed Sections?

Here’s how a model-driven app form is structured:

-   **Form →** Contains one or multiple tabs
-   **Tab →** Contains one or multiple sections
-   **Section →** Contains one or multiple components

A Tabbed Section allows you to host multiple tabs inside a section, and each tab can display a different component. This keeps your form compact, organized, and easy to navigate—no more endlessly scrolling through sections.

## How to configure Tabbed Sections?

You can add up to five different types of components in a tabbed section:

-   External Website
-   HTML Web Resource
-   Knowledge Search
-   Quick View
-   Subgrid

### Steps to configure the form:

1.  Open the entity and edit the form where you want to add a tabbed section.
2.  In the Form Editor, switch to the Components tab on the left pane.
3.  Under Layouts, select Tabbed Section and drag it to your form.
[![]({{ site.baseurl }}/assets/images/050/img_3f1a31069f.png)]({{ site.baseurl }}/assets/images/050/img_3f1a31069f.png)  
6.  Click and add it to the form wherever you want to
7.  Once added, configure its label and formatting from the right-side pane.
8.  Under Section Tabs, click + Add Another Tab.
9.  Choose the component type you want for each tab and configure its properties.
10.  Save and publish the form.

> [![]({{ site.baseurl }}/assets/images/050/img_e257137901.png)]({{ site.baseurl }}/assets/images/050/img_e257137901.png)

  

### External Website :

[![]({{ site.baseurl }}/assets/images/050/img_28e28717b7.png)]({{ site.baseurl }}/assets/images/050/img_28e28717b7.png)  

-   \+ Add a tab → choose External Website.
-   Provide the Site URL.
-   Configure iframe properties, including parameters under Advanced Settings.

#### Example:

I have added the External website tab to my section and gave the url as [https://www.microsoft.com/en-in/](https://www.microsoft.com/en-in/), and you can refer the result of the tab from the below image

[![]({{ site.baseurl }}/assets/images/050/img_6d6c663eb8.png)]({{ site.baseurl }}/assets/images/050/img_6d6c663eb8.png)  

### HTML Web Resource :

-   \+ Add another tab → choose HTML Web Resource.
[![]({{ site.baseurl }}/assets/images/050/img_83bcebd825.png)]({{ site.baseurl }}/assets/images/050/img_83bcebd825.png)  
-   It will open a dialog with list of HTML web resources, select the one which you want to add.

-   Configure the formatting and scrolling for the tab in the side pane. You can also pass parameters to the web resource under advanced section.

#### Example:

I have added the existing HTML web resource as a tab to my section and you can refer the result of the tab from the below image. Refer the HTML code below for the Web Resource used in this blog.

<script src="https://gist.github.com/tamilarasu-arunachalam/05967e199715d06028565c60294ebf9e.js"></script>

In this example, i have a html page which will show the related contacts with different User Interface using HTML and JavaScript.

[![]({{ site.baseurl }}/assets/images/050/img_ffd9aace6b.png)]({{ site.baseurl }}/assets/images/050/img_ffd9aace6b.png)  

### Subgrid :

-   Click on **\+ Add another tab** below the other tabs.
-   It will open a **Tab Content** prompt dialog which asks table and view for showing the subgrid in the tab and click on Done.  
      
    
    [![]({{ site.baseurl }}/assets/images/050/img_efc4c4991b.png)]({{ site.baseurl }}/assets/images/050/img_efc4c4991b.png)
     
-   It will open a right side pane where you can customize the subgrid tab further like Adding label, Hiding Search box and setting maximum number of rows.   
      
    [![]({{ site.baseurl }}/assets/images/050/img_6cc54d6c1d.png)]({{ site.baseurl }}/assets/images/050/img_6cc54d6c1d.png)
        
-   Once all the changes were done we can Save and Publish the form.

#### Example:

I have added the existing subgrid with the view(My Active Contacts) as another tab to my section and you can refer the result of the tab from the below image.

[![]({{ site.baseurl }}/assets/images/050/img_9511e315ea.png)]({{ site.baseurl }}/assets/images/050/img_9511e315ea.png)  

### Quick view:

-   Click on **\+ Add another tab** below the other tabs.  
    [![]({{ site.baseurl }}/assets/images/050/img_85a02b9602.png)]({{ site.baseurl }}/assets/images/050/img_85a02b9602.png)
-   It will open a **Tab Content** prompt dialog which asks table and quick view form for showing the quick view in the tab and click on Done.
  
-   Check all the other customizable options once done save and publish the form.

[![]({{ site.baseurl }}/assets/images/050/img_eb71a3fb2b.png)]({{ site.baseurl }}/assets/images/050/img_eb71a3fb2b.png)

#### Example:

I have added the table as contact and one of its Quick view form as another tab to my section and you can refer the result of the tab from the below image

[![]({{ site.baseurl }}/assets/images/050/img_4cf222ec56.png)]({{ site.baseurl }}/assets/images/050/img_4cf222ec56.png)  

### Knowledge search:

-   Click on **\+ Add another tab** below the other tabs.
[![]({{ site.baseurl }}/assets/images/050/img_e6c2a172cb.png)]({{ site.baseurl }}/assets/images/050/img_e6c2a172cb.png)  
-   Select the Tab icon and click on Done
[![]({{ site.baseurl }}/assets/images/050/img_bbda2671a7.png)]({{ site.baseurl }}/assets/images/050/img_bbda2671a7.png)  
-   Check all the other customizable options once done save and publish the form.
-   Save and publish the form.

#### Example:

[![]({{ site.baseurl }}/assets/images/050/img_01e0cb36cd.png)]({{ site.baseurl }}/assets/images/050/img_01e0cb36cd.png)

_**Note:**_ As my app is a custom power app and doesn't have knowledge base. If you have access to Knowledge Articles in Dynamics 365 please give it a try.

### Bonus:

[![]({{ site.baseurl }}/assets/images/050/img_ba5dc78212.png)]({{ site.baseurl }}/assets/images/050/img_ba5dc78212.png)  

You can modify the order of the tabs by navigating to the section, under the **Section Tabs** section you will see the list of created tabs. Click on the ellipse icon of the tab which you want to change the order and you can move up and move down as you want.

_Have a great day!_