---
post_id: "040"
layout: post
title: "Inline Documents Preview in Power Pages using JavaScript"
date: 2025-01-26 17:41:00 +0000
category: Power Pages
image: assets/images/040/img_9fa686f603.png
categories: ["Power Portal", "Power Pages", "JavaScript", "HTML", "Dataverse"]
---
In this blog post, I’ll Walk you through the steps to preview documents directly inside Power Pages without relying on any third-party libraries. For this demonstration, I’ve created a Power Pages site named **ClaimBuddy**, and we’ll utilize the Dataverse to store and manage our data.

Let’s dive in!

### 1\. Creating the Claim Table in Dataverse

I started by creating a Dataverse table named Claim. This table contains the following fields:

-   First Name
-   Last Name
-   Email Address
-   Amount to Claim
-   Comment

### 2\. Adding Table Permissions

To ensure secure access to the data, I added appropriate table permissions to the Claim table.

**Building the Power Pages Site**

**Step 1:** Displaying Active Claims

-   I created a new page to display the Active Claims View using a list component.
-   The list shows all active claims from the Claim table.

**Step 2:** Adding a Claim Submission Form

-   I created another page and added a form component linked to the Claim table.
-   This form allows users to submit new claims by filling in the required fields.

**Step 3:** Enable Attachments

-   Ensure the Claim table is configured to allow file attachments.

[![enable attachments in power pages]({{ site.baseurl }}/assets/images/040/img_1f0ff99c8a.png)]({{ site.baseurl }}/assets/images/040/img_1f0ff99c8a.png)


**Pro Tip:** If you're new to Power Pages development, the following tutorials can help you get started:

-   [Tutorial: Display data securely on your site | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/getting-started/tutorial-display-data-securely)
-   [Tutorial: Add a list to your page | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/getting-started/tutorial-add-list-to-page)
-   [Tutorial: Add a form to your page | Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/getting-started/tutorial-add-form-to-page)

### **3.Creating a Custom Details Page**

The next step is to create a custom Details Page that displays record information and previews documents without any third-party libraries.

**Step 1:** **Create a New Blank Page**

-   Navigate to Power Pages Studio and create a new blank page.
-   Name the page appropriately (e.g., Claim Details) and save it.

**Step 2:** **Configure the List for Details View**

-   Open the Power Pages Management App.
-   Go to the Lists menu and select the list displaying the Active Claims View.
-   Under the General tab, locate the Web Page for Details View option.
-   Select the newly created custom page.
-   Set the ID Query String Parameter Name to id to ensure the correct record is displayed.

[![]({{ site.baseurl }}/assets/images/040/img_4e43acb552.png)]({{ site.baseurl }}/assets/images/040/img_4e43acb552.png)

**Step 3:** **Add and Customize a Form**

-   **Navigate to the Power Pages Editor**
Open the desired page in Power Pages Studio.

-   **Edit Code**
Click on the Edit Code button located above the page editor. This will open the page in Visual Studio Code.

[![Edit code in vscode power pages]({{ site.baseurl }}/assets/images/040/img_51a5f34dad.png)]({{ site.baseurl }}/assets/images/040/img_51a5f34dad.png)

-   **Customize the Page**
In Visual Studio Code, you can add custom HTML, CSS, and JavaScript to tailor the page to your requirements.


-   **Add Custom Code for Attachment Preview**
I added the following code to implement a custom page with attachment preview functionality

<script src="https://gist.github.com/tamilarasu-arunachalam/d2329289d4e049bce3be50c8c4529485.js"></script>

-   **Save and Sync**

After adding the custom code, save your changes in Visual Studio Code. Then, return to the Power Pages Studio and click on Sync to publish your updates to the site

-   **Preview and Download Attachments**

Clicking on the file name or attachment icon opens a document preview directly within the web page. The preview window also includes a download option, enabling users to view and save files seamlessly without navigating away from the page.

[![custom form in power pages]({{ site.baseurl }}/assets/images/040/img_51adea4f8d.png)]({{ site.baseurl }}/assets/images/040/img_51adea4f8d.png)

And the preview will be like the below snapshot which i have tried with a test pdf file.

[![preview pdf inside power pages]({{ site.baseurl }}/assets/images/040/img_048daec4de.png)]({{ site.baseurl }}/assets/images/040/img_048daec4de.png)

### **Key Features of the Solution**

**Attachment Preview:** Users can preview attached documents directly on the page with a single click.

**No Third-Party Dependencies:** The solution leverages native Power Pages and Dataverse capabilities, ensuring simplicity and security.

### Bonus Tip:

**Using Linked Entities in FetchXML**
FetchXML lets you retrieve values from linked entities to access related data. In the custom code, you will get to know how to use JavaScript to get the data from the related entity and display it inside HTML. 

Have a good day!