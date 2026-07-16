---
layout: post
post_id: '034'
title: Building a PDF Preview feature inside Dynamics 365 CE with JScript
date: 2024-01-27 17:41:00 +0000
image: assets/images/034/img_647b95229f.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
read_time: ''
categories:
  - Model Driven Apps
  - Dynamics 365 CRM Online
  - JavaScript
  - Dynamics 365 CE
  - HTML
  - Web resource
  - Dynamics 365 Web API
---

I recently encountered a question regarding the possibility of previewing a PDF file inside Dynamics 365 CRM or a Model Driven App without opening an additional tab or window. After conducting some research, I found that there is no out-of-the-box (OOTB) feature for previewing PDF files. However, I devised an approach to achieve this by leveraging client-side scripting, specifically using JScript.

One of the methods I explored is the Xrm.Navigation.openFile(file, openFileOptions) script. This script allows you to open a file in another tab or window. However, the goal is to have the file open inline within the Unified Client Interface (UCI) page. More details on this script can be found in the [Microsoft Docs](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openfile).

To implement this, I created a file field on the Accounts Entity named "Test File" and added it to the main form. The preview feature is intended for files uploaded to this column.

[![]({{ site.baseurl }}/assets/images/034/img_224d66c694.png)]({{ site.baseurl }}/assets/images/034/img_224d66c694.png)

To accomplish the preview functionality, I decided to create an HTML web resource and a JS web resource. The HTML web page serves as a canvas for previewing a PDF file inside it, while the JS web resource is designed to open a modal window inline, containing the web page for previewing the file.

The below is the HTML code

<script src="https://gist.github.com/tamilarasu-arunachalam/ea9bfda1a2c97418f1b325d91882da1a.js?file=crf4c_showPdf.html"></script>

And the below is the JScript code

<script src="https://gist.github.com/tamilarasu-arunachalam/ea9bfda1a2c97418f1b325d91882da1a.js?file=crf4c_previewPdf.js"></script>

To call up the preview modal, I created a command button for the main form using the command editor and added the JavaScript web resource as an action. To render PDF files, I've integrated the [PDF.js](https://mozilla.github.io/pdf.js/) library. Alternatively, users can utilize their browser's built-in PDF viewer for this purpose. Subsequently, I saved and published the changes.

[![]({{ site.baseurl }}/assets/images/034/img_6250cc4eb7.png)]({{ site.baseurl }}/assets/images/034/img_6250cc4eb7.png)

Following these steps, go to the Accounts main form, upload any PDF file to the "Test File" field, and then click on the "Preview File" button in the Ribbon. This action should display the file opened inside the page.To demonstrate the implementation, I've attached a gif for your reference.

[![]({{ site.baseurl }}/assets/images/034/img_62b9d88d79.gif)]({{ site.baseurl }}/assets/images/034/img_62b9d88d79.gif)

Have a great day!
