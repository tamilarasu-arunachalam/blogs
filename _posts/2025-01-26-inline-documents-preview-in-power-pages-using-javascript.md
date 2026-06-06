---
post_id: "040"
layout: post
title: "Inline Documents Preview in Power Pages using JavaScript"
date: 2025-01-26 17:41:00 +0000
category: Power Pages
categories: ["Power Portal", "Power Pages", "JavaScript", "HTML", "Dataverse"]
---

<img border="0" data-original-height="400" data-original-width="700" height="183" src="{{ site.baseurl }}/assets/images/040/img_9fa686f603.png" style="display: none;" width="320" />
<p>In this blog post, I’ll Walk you through the steps to preview documents directly inside Power Pages without relying on any third-party libraries. For this demonstration, I’ve created a Power Pages site named <b>ClaimBuddy</b>, and we’ll utilize the Dataverse to store and manage our data.</p>
<p>Let’s dive in!</p>
<h3>1. Creating the Claim Table in Dataverse</h3>
<p>I started by creating a Dataverse table named Claim. This table contains the following fields:</p>
<p></p><ul style="text-align: left;"><li>First Name</li><li>Last Name</li><li>Email Address</li><li>Amount to Claim</li><li>Comment</li></ul>
<h3>2. Adding Table Permissions</h3>
<p>To ensure secure access to the data, I added appropriate table permissions to the Claim table.</p>
<p><strong>Building the Power Pages Site</strong></p>
<p><strong>Step 1:</strong> Displaying Active Claims</p>
<p></p><ul style="text-align: left;"><li>I created a new page to display the Active Claims View using a list component.</li><li>The list shows all active claims from&nbsp;the Claim table.</li></ul>
<p><strong>Step 2:</strong> Adding a Claim Submission Form</p>
<p></p><ul style="text-align: left;"><li>I created another page and added a form component linked to the Claim table.</li><li>This form allows users to submit new claims by filling in the required fields.</li></ul>
<p><strong>Step 3:</strong> Enable Attachments</p><p></p><ul style="text-align: left;"><li>Ensure the Claim table is configured to allow file attachments.</li></ul><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9Pqo6fMkLZjv3LHtBTvdSY4Q-UJgxL1orXrapuGaMWe-X1_PegxuiMQSg0e6ZjdtB95FzrfXfvIx4h0d3F0eCQa2bkafKE2J7YVXfZ0c0dFWnjFotgMf2-8FNeNWRxxn5WhcMgYpWqTjC2_1FqH9my3H4DbsisVzRfmH_O1O7fEeVs3jKNUkud_mR1QI/s822/enable-attachments.png" style="margin-left: 1em; margin-right: 1em;"><img alt="enable attachments in power pages" border="0" data-original-height="558" data-original-width="822" height="271" src="{{ site.baseurl }}/assets/images/040/img_1f0ff99c8a.png" width="400" /></a></div><br /><div><br /></div><p></p><p><strong>Pro Tip:</strong> If you're new to Power Pages development, the following tutorials can help you get started:</p>
<ul>
<li><a href="https://learn.microsoft.com/en-us/power-pages/getting-started/tutorial-display-data-securely">Tutorial: Display data securely on your site | Microsoft Learn</a></li>
<li><a href="https://learn.microsoft.com/en-us/power-pages/getting-started/tutorial-add-list-to-page">Tutorial: Add a list to your page | Microsoft Learn</a></li>
<li><a href="https://learn.microsoft.com/en-us/power-pages/getting-started/tutorial-add-form-to-page">Tutorial: Add a form to your page | Microsoft Learn</a></li>
</ul>
<h3><strong>3.Creating a Custom Details Page</strong></h3>
<p style="text-align: justify;">The next step is to create a custom Details Page that displays record information and previews documents without any third-party libraries.</p>
<p><strong>Step 1:</strong> <strong>Create a New Blank Page</strong></p>
<ul>
<li>Navigate to Power Pages Studio and create a new blank page.</li>
<li>Name the page appropriately (e.g., Claim Details) and save it.</li>
</ul>
<p><strong>Step 2:</strong> <strong>Configure the List for Details View</strong></p>
<ul>
<li>Open the Power Pages Management App.</li>
<li>Go to the Lists menu and select the list displaying the Active Claims View.</li>
<li>Under the General tab, locate the Web Page for Details View option.</li>
<li>Select the newly created custom page.</li>
<li>Set the ID Query String Parameter Name to id to ensure the correct record is displayed.</li>
</ul>
<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy5LCaG9_0kcVnYJ0lzh481S4fwbJ31UFQLYiE1cgbozghH56YLiOKRMpXMH88QpbpJrbr92_s3iXBh8-1hrteRGvm5wvQ9dNGvPKoXskp9V9KNehjCAOXJy5U4cbWaoZI5abmi3md6VJjlU60KzZyM3yKQA-1csrpMBJIg7TY3ONowvPoqx6sth38QD4/s1724/add-query-param.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="486" data-original-width="1724" height="181" src="{{ site.baseurl }}/assets/images/040/img_4e43acb552.png" width="640" /></a></div>
<p><strong>Step 3:</strong> <strong>Add and Customize a Form</strong></p><p></p><ul style="text-align: left;"><li><strong>Navigate to the Power Pages Editor</strong></li></ul><p></p><ol>
</ol>
<p style="text-align: left;"><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>Open the desired page in Power Pages Studio.</p>
<strong><ul style="text-align: left;"><li><strong>Edit Code</strong></li></ul></strong><ol>
</ol>
<p><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>Click on the Edit Code button located above the page editor. This will open the page in Visual Studio Code.</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3-ARvtA3SRdWHY28AiZghCY0skIM7xqb3VDAp4sEYDBh44IPjzGMkggtQGGjabctBXbDs65aA05NktS9IB7L7_DO7wQlSOC9TkAjFrJuFYxCEbAZclVI4qP_ikN4vehWIrToKByEYDAEZbrBTxX_8kVBZGnTC1wR3yUIiekkbDI54cvCqeJnVaxnu7L0/s1494/edit-code-in-vscode.png" style="margin-left: 1em; margin-right: 1em;"><img alt="Edit code in vscode power pages" border="0" data-original-height="321" data-original-width="1494" height="138" src="{{ site.baseurl }}/assets/images/040/img_51a5f34dad.png" width="640" /></a></div>
<strong><ul style="text-align: left;"><li><strong>Customize the Page</strong></li></ul></strong><ol>
</ol>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>In Visual Studio Code, you can add custom HTML, CSS, and JavaScript to tailor the page to your requirements.</p>
<strong><ul style="text-align: left;"><li><strong>Add Custom Code for Attachment Preview</strong></li></ul></strong><ol>
</ol>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>I added the following code to implement a custom page with attachment preview functionality</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/d2329289d4e049bce3be50c8c4529485.js"></script>
<strong><ul style="text-align: left;"><li><strong>Save and Sync</strong></li></ul></strong><ol>
</ol>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>After adding the custom code, save your changes in Visual Studio Code. Then, return to the Power Pages Studio and click on Sync to publish your updates to the site</p>
<strong><ul style="text-align: left;"><li><strong>Preview and Download Attachments</strong></li></ul></strong><ol>
</ol>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span><span>&nbsp;&nbsp; &nbsp;</span>Clicking on the file name or attachment icon opens a document preview directly within the web page. The preview window also includes a download option, enabling users to view and save files seamlessly without navigating away from the page.</p>
<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwBZOPOgLWEO4P-BYtQhS5_-xee6GQd3tkscuPypYamle0lDhm9N5yW_ucZ50_A7JENLKq4ai1ahyphenhyphen0mwmGIOU-mJLsNhNzPaR4zr_mF4EN9Dg4DfDE0PstppRE88veORvMV-w9P8jYPnzyyTcgOLakxxxaU1VWScocmxbNfEs95IpwpiorbMYehtr2rCY/s1917/custom-form.png" style="margin-left: 1em; margin-right: 1em;"><img alt="custom form in power pages" border="0" data-original-height="570" data-original-width="1917" height="190" src="{{ site.baseurl }}/assets/images/040/img_51adea4f8d.png" width="640" /></a></div>
<p>And the preview will be like the below snapshot which i have tried with a test pdf file.</p>
<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHSeF0_vaDheBa15y6xBP2IeS1U7Jbdn84Pr2lqhLAC_8CVo9f9Du2ZQf9lElOLCcPTilFtC4PRcWl1z68eBNXwwvWj8nZEVbwzYjSFgOu78SEK0_cJsUQeCmKSipyZbsF2irOVChsSp8-LnVIdYNXg1TqZZAqWip8sBCkGns1eXdoFYuI3X6H88iv9QM/s1707/preview-pdf.png" style="margin-left: 1em; margin-right: 1em;"><img alt="preview pdf inside power pages" border="0" data-original-height="885" data-original-width="1707" height="331" src="{{ site.baseurl }}/assets/images/040/img_048daec4de.png" width="640" /></a></div>
<h3><strong>Key Features of the Solution</strong></h3>
<p style="text-align: justify;"><strong>Attachment Preview:</strong> Users can preview attached documents directly on the page with a single click.</p>
<p style="text-align: justify;"><strong>No Third-Party Dependencies:</strong> The solution leverages native Power Pages and Dataverse capabilities, ensuring simplicity and security.</p>
<h3>Bonus Tip:</h3>
<p><strong>Using Linked Entities in FetchXML</strong></p>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>FetchXML lets you retrieve values from linked entities to access related data. In the custom code, you will get to know how to use JavaScript to get the data from the related entity and display it inside HTML.&nbsp;</p><p style="text-align: center;">Have a good day!</p>