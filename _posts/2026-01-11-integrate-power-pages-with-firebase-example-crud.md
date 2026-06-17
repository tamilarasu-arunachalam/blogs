---
layout: post
post_id: '058'
title: How to Integrate Power Pages with Firebase Realtime Database with Example CRUD
date: 2026-01-11 17:41:00 +0000
image: assets/images/058/img_17c61a0d2a.gif
description: ''
meta_keywords: ''
category: Power Pages
categories:
  - Power Pages
  - Power Portal
  - HTML
  - JavaScript
  - Firebase
---

For a long time, I have felt that Power Pages is capable of doing much more than what we usually limit it to. Most of the time, it stays tightly coupled with Dataverse and SharePoint, even though it has the flexibility to work beyond that boundary.

As with my other blogs, this one is also about integration, but with a combination that many wouldn’t expect. Based on the title, this blog walks through how Power Pages can be integrated with Firebase. As an add-on, I have also created a working CRUD demonstration with code to show that this is not just theory, but something that actually works.

- [What is Firebase ?](#what-is-firebase-)
- [Configure Firebase](#configure-firebase)
- [Coding Part](#coding-part)
    - [HTML Code](#html-code)
    - [JavScript Code](#javscript-code)
    - [Create Record](#create-record)
    - [Read Records](#read-records)
    - [Edit Record](#edit-record)
    - [Delete Record](#delete-record)
- [References:](#references)

### What is Firebase ?

  [**Firebase**](https://firebase.google.com/firebase) is a Google product that helps developers build, manage, and scale applications easily. In simple terms, Firebase is a **Backend as a Service (BaaS)**.

Firebase provides multiple components such as authentication, NoSQL databases, configuration management, and file storage. Because of this, developers can focus more on improving the application experience instead of spending a lot of time building and maintaining a backend from scratch.

In this blog, Firebase Realtime Database is used, which is a NoSQL database that stores data in a JSON format.

### Configure Firebase

[![]({{ site.baseurl }}/assets/images/058/img_f0985205c7.png)]({{ site.baseurl }}/assets/images/058/img_f0985205c7.png)

-   To configure Firebase for this integration, start by navigating to the [Firebase Console](https://console.firebase.google.com/) and create a new project if you do not already have one. For this demonstration, a project named **power-pages-crud** was created.
-   Once the project is created, Firebase redirects to the Project Overview page. From here, the database needs to be configured to store data.

[![]({{ site.baseurl }}/assets/images/058/img_10ac311fe6.png)]({{ site.baseurl }}/assets/images/058/img_10ac311fe6.png)

-   Navigate to the Realtime Database option under the Build section in the left menu and create a new database. After creation, the database will be visible in the console.

[![]({{ site.baseurl }}/assets/images/058/img_47cd6dbdc6.png)]({{ site.baseurl }}/assets/images/058/img_47cd6dbdc6.png)

-   To view, add, and edit records in the database, the database rules must be updated. Set both read and write permissions to true so that Power Pages can interact with the database.
-   Since Firebase is a NoSQL database, it does not require predefined tables. If a record is added to a node that does not exist, Firebase automatically creates it.

### Coding Part

-   To use Firebase from a Power Pages site, Firebase Realtime Database REST APIs are used. These APIs allow reading, creating, updating, and deleting records by passing the correct parameters. Create a new page in Power Pages and open Edit code.
-   Add the required HTML and JavaScript logic to the page. The JavaScript will call Firebase REST endpoints to perform CRUD operations. Below is the code which I've used for this demonstration.

#### HTML Code

<script src="https://gist.github.com/tamilarasu-arunachalam/d3233db310735a14867ea1d793bd1bf2.js?file=powerpages-x-firebase.html"></script>

#### JavScript Code

<script src="https://gist.github.com/tamilarasu-arunachalam/d3233db310735a14867ea1d793bd1bf2.js?file=powerpages-x-firebase.js"></script>

-   After adding the code, sync the Power Pages site and preview the page. Once loaded, the CRUD operations will work successfully.

Below are the images of the CRUD demonstration

#### Create Record

[![]({{ site.baseurl }}/assets/images/058/img_6171816d0b.png)]({{ site.baseurl }}/assets/images/058/img_6171816d0b.png)

#### Read Records

[![]({{ site.baseurl }}/assets/images/058/img_18498d6995.png)]({{ site.baseurl }}/assets/images/058/img_18498d6995.png)

#### Edit Record

[![]({{ site.baseurl }}/assets/images/058/img_1d20f2f4d8.png)]({{ site.baseurl }}/assets/images/058/img_1d20f2f4d8.png)

#### Delete Record

[![]({{ site.baseurl }}/assets/images/058/img_035e3e0f2b.png)]({{ site.baseurl }}/assets/images/058/img_035e3e0f2b.png)

### References:

-   [Implement portals Web API code components sample | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/configure/implement-webapi-component)
-   [Firebase | Google's Mobile and Web App Development Platform](https://firebase.google.com/firebase)
-   [Firebase Console](https://console.firebase.google.com/project/)

Have a great day!
