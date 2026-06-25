---
layout: post
post_id: '075'
title: How to Build and Host a Contact Form Using Power Automate and Dataverse
date: 2026-06-28T23:11
image: assets/images/075/host-survey-page-power-automate.png
description: Step-by-step tutorial to host a survey form in Power Automate and store user responses directly into Dataverse using HTTP requests.
meta_keywords: host website Power Automate, Power Automate HTTP trigger, Power Automate Dataverse integration, Host web form in Power Automate, Power Automate website hosting, HTML website Power Automate hosting
category: Power Automate
read_time: 10 mins
published: true
---

Ever wondered if you could host a survey form in Power Automate and have the submitted data directly inserted into Dataverse? I recently read a blog by [**Matthew Devaney**](https://www.matthewdevaney.com/power-automate-flow-to-host-a-web-page-web-application/) that explains how to host a page in Power Automate and add data to a SharePoint list. Inspired by that, I wanted to demonstrate the same concept using Dataverse  -  so here it is.

For this demonstration, we need two flows. One is for hosting the contact form, and the other is for inserting the values into the Dataverse Contacts table. Both are interdependent  -  one displays the form, while the other handles the data processing.

So, I straight move into the [https://make.powerautomate.com](https://make.powerautomate.com) and create an instant flow with trigger “\*\*_When a HTTP request is received_\*\*”, select **_Anyone_** in Who can trigger the flow? and method as **GET.** 

![Trigger config for Host a webpage flow](assets/images/075/host-webpage-flow-trigger.png)

Next, add an **Initialize Variable** action. Initialize it with a dummy value for now — we will replace it later with the POST URL.

Then, add a **Compose** action and set its input to the HTML code for your form. You can find the form I have used below.

<script src="https://gist.github.com/tamilarasu-arunachalam/f472d208e09c5e1f70a743516cf36652.js"></script>

After that, add a Response action at the end and configure it as needed to return the HTML content.

![Host a webpage flow response](assets/images/075/host-a-webpage-flow-response.png)

Finally, your complete flow for hosting the web page should look like this.

![Host webpage flow overview](assets/images/075/host-webpage-flow-overview.png)

Since we have hosted a survey form, we need another flow to save the submitted data. Create a new instant cloud flow with the trigger "When an HTTP request is received." This time, set Who can trigger the flow to Anyone and the method to POST. Configure the trigger accordingly.

![Data processing flow trigger](assets/images/075/data-processing-flow-trigger.png)

Copy the HTTP POST URL from this form-processing flow. Then, go back to the Host a web page flow and replace the dummy value in the Initialize Variable action with this URL.

Next, add an action to store the form data. Since we want to save the data in Dataverse, use the Add a new row action and map the form fields to the respective columns in the Survey table. Save both flows.

Now, copy the URL from the Host a web page flow and paste it into your browser. You'll see the HTML survey form you created.

![Design for the hosted web page](assets/images/075/hosted-webpage-design.png)

### References:

- [Power Automate Flow to Host a Web Page/Web Application](https://www.matthewdevaney.com/power-automate-flow-to-host-a-web-page-web-application/)
- [Build a custom website using Power Automate (part 1)](https://beyondm365.com/p/build-a-custom-website-using-power-automate-part-1)
