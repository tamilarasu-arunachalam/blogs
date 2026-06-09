---
post_id: "055"
layout: post
title: "How to Translate Metadata and Web Resources in Dynamics 365 CE"
date: 2025-12-21 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/055/img_189a192a47.gif
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "HTML", "JavaScript", "Model Driven Apps", "Web resource"]
---
If you have ever worked on a Dynamics 365 CE or Power Apps model-driven app that serves users from multiple countries, you already know how important language support is. Most of us start confidently because Dynamics 365 handles translations for standard tables automatically. But the moment you introduce custom tables, JavaScript alerts, or HTML web resources, things start getting confusing. If you are wondering, _"How do I translate custom web resource content properly?"_ - you are not alone. In this blog, I'll walk you through practical and supported ways to handle translations in Dynamics 365 CE.

-   [Overview](#overview)
-   [Out of the box Way](#outOfTheBoxWay)
-   [JavaScript Way](#webResourceWay)
-   [References](#references)

### Overview:

Dynamics 365 supports multilingual applications, but translations are handled differently depending on what you are translating.

-   Standard & custom tables - supported out of the box
-   Field labels, option sets, views - supported via export/import
-   JavaScript & HTML web resources - require custom handling

In this article, we'll cover both:

-   Out-of-the-box translation for tables
-   Two reliable approaches for translating web resources

### Out of the box way

Dynamics 365 provides a built-in way to translate metadata such as table names, field labels, and option set values. This works for both standard and custom tables.

[![]({{ site.baseurl }}/assets/images/055/img_de06781517.png)]({{ site.baseurl }}/assets/images/055/img_de06781517.png)

#### Steps to Export and Import Translations

1.  Open Power Apps and navigate to Solutions
2.  Open your target solution
3.  Click on Translations
4.  Select Export Translations
5.  Download and extract the ZIP file
6.  Open _**CrmTranslations.xml**_ in Excel
7.  Add translations for the required languages
8.  Zip the files again and import them back

Once imported, Dynamics 365 automatically displays translated labels based on the user’s selected language.

**Important Note:** This approach works only for metadata. It does not translate JavaScript alerts, HTML content, or other web resources.

For the detailed information, you can check this [blog](https://carldesouza.com/translating-renaming-dynamics-365-artifacts-into-other-languages/) from Carl de Souza

### Web Resource Way:

Web resources such as:

-   JavaScript alert messages
-   Form notifications
-   Custom HTML pages

are not covered by the translation XML file. To localize these, we need to use one of the following approaches.

-   Custom JavaScript Helper Method
-   RESX Web Resource Method _(Recommended)_

#### Custom Function Way

This approach is useful when you want quick control over translations using JavaScript. The idea is simple:

-   Create a helper JavaScript file
-   Store translations per language (LCID)
-   Detect the user’s language at runtime

Below is the code for _translation-helper.js_

<script src="https://gist.github.com/tamilarasu-arunachalam/ba726f1411108c761c0de7e4a1622da5.js?file=translation-helper.js"></script>

Below is the code for _showAlerts.js_ with custom helper method

<script src="https://gist.github.com/tamilarasu-arunachalam/ba726f1411108c761c0de7e4a1622da5.js?file=showAlerts.js"></script>

Make sure the helper script is added as a dependency to your main JavaScript web resource.

[![]({{ site.baseurl }}/assets/images/055/img_5227f06c4b.png)]({{ site.baseurl }}/assets/images/055/img_5227f06c4b.png)

After saving and publishing, I've added the function to the on-save event of the appointment table. For the demonstration, i have opened a record and saved it again it is showing the below alert.

[![]({{ site.baseurl }}/assets/images/055/img_19be20a98b.png)]({{ site.baseurl }}/assets/images/055/img_19be20a98b.png)

Then I will change the language by following the below steps.

-   navigating to the Settings Icon(Gear Icon on Top navigation bar)

[![]({{ site.baseurl }}/assets/images/055/img_7faaae9da2.png)]({{ site.baseurl }}/assets/images/055/img_7faaae9da2.png)

-   Select Personalization Settings from the pane

[![]({{ site.baseurl }}/assets/images/055/img_41646a51c6.png)]({{ site.baseurl }}/assets/images/055/img_41646a51c6.png)

-   Open the Languages tab and change the language

Then you'll notice the application language is changed. Just navigate to appointments, open and save any record you'll see the alert in the selected language with the text we have added in the helper script. Please refer the below image for that

[![]({{ site.baseurl }}/assets/images/055/img_ecf5f44b4f.png)]({{ site.baseurl }}/assets/images/055/img_ecf5f44b4f.png)

#### 2\. RESX Way

This is the cleanest and most scalable approach and is recommended by Microsoft for translating web resources.

**Why RESX Files?**

-   Native support in Dynamics 365
-   Automatic language resolution
-   Cleaner JavaScript code
-   Easier maintenance for large applications

Note: I have followed the naming convention like **_messages.\[LCID\].resx_**. The LCID in the file name allows Dynamics 365 to automatically load the correct language based on the user's settings.

I have created resx three files.These resx files can be edited with the resx editor extension for vs code, I have opened these files and added the values. Refer to the below images

#### English

[![]({{ site.baseurl }}/assets/images/055/img_6034f9fbc3.png)]({{ site.baseurl }}/assets/images/055/img_6034f9fbc3.png)

#### Arabic

[![]({{ site.baseurl }}/assets/images/055/img_056f0ee44c.png)]({{ site.baseurl }}/assets/images/055/img_056f0ee44c.png)

#### Japanese

[![]({{ site.baseurl }}/assets/images/055/img_19ff35a140.png)]({{ site.baseurl }}/assets/images/055/img_19ff35a140.png)

After that I have added the below script to the on-save of the appointment main form

Below is the code for _showAlertsUsingRESX.js_ to be added on the on-save of appointment main form

<script src="https://gist.github.com/tamilarasu-arunachalam/ba726f1411108c761c0de7e4a1622da5.js?file=showAlertsUsingRESX.js"></script>

Add all RESX files as dependencies to your JavaScript web resource and publish the changes.

[![]({{ site.baseurl }}/assets/images/055/img_a908a06919.png)]({{ site.baseurl }}/assets/images/055/img_a908a06919.png)

Note: We can add dependencies to the web resources by clicking on the View dependencies link and add the dependencies. Refer to the below images

[![]({{ site.baseurl }}/assets/images/055/img_b22c803678.png)]({{ site.baseurl }}/assets/images/055/img_b22c803678.png)

[![]({{ site.baseurl }}/assets/images/055/img_2f6afcff40.png)]({{ site.baseurl }}/assets/images/055/img_2f6afcff40.png)

Save and Publish and check the form and change the language to Japanese and you'll get the alert like below image as we have added the value in the **_messages.1041.resx_**

[![]({{ site.baseurl }}/assets/images/055/img_7f52a4d10a.png)]({{ site.baseurl }}/assets/images/055/img_7f52a4d10a.png)

Now, when the user switches their application language, Dynamics 365 automatically picks the correct translation.

### References:

-   [getGlobalContext.userSettings (Client API reference) in model-driven apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings)
-   [LCID (Locale ID) | Microsoft Learn](https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a)
-   [getFormType (Client API reference) in model-driven apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype)
-   [openAlertDialog (Client API reference) in model-driven apps - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog)
-   [String (RESX) web resources (model-driven apps) - Power Apps | Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/resx-web-resources)

Have a great day!