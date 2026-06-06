---
post_id: "055"
layout: post
title: "How to Translate Metadata and Web Resources in Dynamics 365 CE"
date: 2025-12-21 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "HTML", "JavaScript", "Model Driven Apps", "Web resource"]
---

<img alt="" border="0" data-original-height="360" data-original-width="480" src="{{ site.baseurl }}/assets/images/055/img_189a192a47.gif" style="display: none;" />
<p style="text-align: justify;">
    If you have ever worked on a Dynamics 365 CE or Power Apps model-driven app that serves users from multiple
    countries, you already know how important language support is.
    Most of us start confidently because Dynamics 365 handles translations for standard tables automatically.
    But the moment you introduce custom tables, JavaScript alerts, or HTML web resources, things start getting
    confusing.
    If you are wondering, <i>"How do I translate custom web resource content properly?"</i> - you are not alone. In this blog, I'll walk you through practical and supported ways to handle translations in Dynamics 365 CE.
</p>
<ul>
    <li><a href="#overview">Overview</a></li>
    <li><a href="#outOfTheBoxWay">Out of the box Way</a></li>
    <li><a href="#webResourceWay">JavaScript Way</a></li>
    <li><a href="#references">References</a></li>
</ul>
<section id="overview">
    <h3>Overview:</h3>
    <p>Dynamics 365 supports multilingual applications, but translations are handled differently depending on
        what you are translating.

    </p><ul>
        <li>Standard &amp; custom tables - supported out of the box</li>
        <li>Field labels, option sets, views - supported via export/import</li>
        <li>JavaScript &amp; HTML web resources - require custom handling</li>
    </ul>
    In this article, we'll cover both:
    <ul>
        <li>Out-of-the-box translation for tables</li>
        <li>Two reliable approaches for translating web resources</li>
    </ul>
    <p></p>
</section>
<section id="outOfTheBoxWay">
    <h3>Out of the box way</h3>
    <p>Dynamics 365 provides a built-in way to translate metadata such as table names, field labels, and option
        set values. This works for both standard and custom tables.</p>
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizl4o46VQAf6qgDJv52hEkBC-x4v1WWu1KA0yukTqLhrkRm0mRHWFilLEpec10i9J5F8H_y2OJqSgIi283MLwIUMVAOi10JeBJFEXhholPRJfOhrK0qx1MNN6kT-L5O6fGSbakvn7nyMGmzgE-2wid3Ob8KHUJx-Jk4dSVxXNb-ayiEpJQMTc7Hui8YoQ/s1600/translations-import-export.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="621" data-original-width="1332" src="{{ site.baseurl }}/assets/images/055/img_de06781517.png" /></a>
    <h4>Steps to Export and Import Translations</h4>
    <ol>
        <li>Open Power Apps and navigate to Solutions</li>
        <li>Open your target solution</li>
        <li>Click on Translations</li>
        <li>Select Export Translations</li>
        <li>Download and extract the ZIP file</li>
        <li>Open <i><b>CrmTranslations.xml</b></i> in Excel</li>
        <li>Add translations for the required languages</li>
        <li>Zip the files again and import them back</li>
    </ol>
    <p>Once imported, Dynamics 365 automatically displays translated labels based on the user’s selected
        language.</p>
    <p><b>Important Note:</b> This approach works only for metadata. It does not translate JavaScript alerts,
        HTML content,
        or other web resources.</p>
    <p>For the detailed information, you can check this <a href="https://carldesouza.com/translating-renaming-dynamics-365-artifacts-into-other-languages/" target="_blank">blog</a> from Carl de Souza</p>
</section>
<section id="webResourceWay">
    <h3>Web Resource Way:</h3>
    <p>Web resources such as:</p>
    <ul>
        <li>JavaScript alert messages</li>
        <li>Form notifications</li>
        <li>Custom HTML pages</li>
    </ul>
    <p>are not covered by the translation XML file. To localize these, we need to use one of the following
        approaches.</p>
    <ul>
        <li>Custom JavaScript Helper Method</li>
        <li>RESX Web Resource Method <i>(Recommended)</i></li>
    </ul>
    <h4>Custom Function Way</h4>
    <p>This approach is useful when you want quick control over translations using JavaScript. The idea is
        simple:</p>
    <ul>
        <li>Create a helper JavaScript file</li>
        <li>Store translations per language (LCID)</li>
        <li>Detect the user’s language at runtime</li>
    </ul>
    <p>Below is the code for <i>translation-helper.js</i></p>
    <script src="https://gist.github.com/tamilarasu-arunachalam/ba726f1411108c761c0de7e4a1622da5.js?file=translation-helper.js"></script>
    <p>Below is the code for <i>showAlerts.js</i> with custom helper method</p>
    <script src="https://gist.github.com/tamilarasu-arunachalam/ba726f1411108c761c0de7e4a1622da5.js?file=showAlerts.js"></script>
    <p>Make sure the helper script is added as a dependency to your main JavaScript web resource.</p>
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6SDkBTfk743SFvDqLirkBbiflDZktAjbifTS3-51xNf-5s91cHkHLZVP29l8XhRy9jrdD5bCtpA9wCOanIAAhSBwjTPWDVIGoK_iZtEHDptj4PWzHGfsuWTq5Gxhasn0dCGpCXTzrbjteGpZHUFLjWzAun92yvrSPQDSdswgKIDoOT4Ff5CkkjCKG0nk/s1600/added-dependency.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="378" data-original-width="858" src="{{ site.baseurl }}/assets/images/055/img_5227f06c4b.png" /></a>
    <p>After saving and publishing, I've added the function to the on-save event of the appointment table. For
        the demonstration, i have opened a record and saved it again it is showing the below alert.</p>
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyF_4YK7b3j46YsElpZWFMLVI3XBWxiKrvINGZYnu8Iwf9eheUSP4psV1_MU58VxgQI2Dvjxq9ogG_uFNVOJov4OIg2VTZLSxiNi6ayp06WWthwinUPr1IyR1Yc751lBh1ZPCELbUTrw_1tYS5Bio4OeJYQECUtZceNEaGz3QhebYGrCkvLafAq6_FW2M/s1600/simple-alert-english.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="462" data-original-width="1500" src="{{ site.baseurl }}/assets/images/055/img_19be20a98b.png" /></a>
    <p>Then I will change the language by following the below steps.</p>
    <ul>
        <li>navigating to the Settings Icon(Gear Icon on Top navigation bar)</li>
      <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin0cb4ERCtdgqszURQlO6jwsRVISLnM2GpkunJeDeTNlQcPsY7wExflfKmWBrgFiG8Ako24q5GJ8CnzK2CwE_LKEWCrQrOXHxUSFivb8CkAeFxLkG6o4r2qou0kdrB_cySsgzK1sSg6VM9kyPOjiFI3XbNR4jYAQUmPC1qzsJRJPH5BEnaFlMY1xEXsfw/s1600/personalization-settings.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="1014" data-original-width="483" src="{{ site.baseurl }}/assets/images/055/img_7faaae9da2.png" /></a></div>
        <li>Select Personalization Settings from the pane</li>
      <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSAnJivnlP1AVhw-AVI47_zzo-K1Pbqwk6Y28WUq0gOUDfuSSjmaBl2izuWTfmiSbsEzOYUKFNpVXUgWRJci-lYqDAKu4VBmzkUJLB0bHBoYfEX8rcWfDPR6RoHzXqj_qEf0cob9W7Ns1-64FcHzjXqj3knaqyyIoS8mIVlGubLgvDJ9VF70qTvbnVjIA/s1600/change-lang-to-arabic.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="323" data-original-width="1074" src="{{ site.baseurl }}/assets/images/055/img_41646a51c6.png" /></a></div>
        <li>Open the Languages tab and change the language</li>
    </ul>
    <p>Then you'll notice the application language is changed. Just navigate to appointments, open and save any
        record you'll see the alert in the selected language with the text we have added in the helper script.
        Please refer the below image for that
    </p>
    <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGrpD0VigbzmRq1MWTCNQFOCzlwhqqKMzn_fB_Sn3J8YpNMHlAT9dEgpCCq7tIBqzExycORpTC1GxnDFVJmYLI6HM5Vk1eIxY3-gBG9qitSL9DF8UBDz9lBloq5OPsfPvG9D4XXDyMJAjherwmKCzNgNXjCvvkQ-yY4vuVgQcojv0HN3bIqlNy0xv5Jks/s1600/alert-changed-to-arabic.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="651" data-original-width="1754" src="{{ site.baseurl }}/assets/images/055/img_ecf5f44b4f.png" /></a></div>
    <h4>2. RESX Way</h4>
    <p>This is the cleanest and most scalable approach and is recommended by Microsoft for translating web
        resources.</p>
    <b>Why RESX Files?</b>
    <ul>
        <li>Native support in Dynamics 365</li>
        <li>Automatic language resolution</li>
        <li>Cleaner JavaScript code</li>
        <li>Easier maintenance for large applications</li>
    </ul>
    <p>
        Note: I have followed the naming convention like <b><i>messages.[LCID].resx</i></b>. The LCID in the
        file name allows Dynamics 365 to automatically load the correct language based on the user's settings.
    </p>
    <p>I have created resx
        three files.These resx files can be edited with the resx editor extension for vs code, I have opened
        these files and added the values. Refer to the below images</p>
    <h4>English</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqrJ9MzDofauITvy9ulFl4JN69Ep5hReSRBBd1WOpYkXfuIuUZbH9aEfN3bDR8Q9wuln83OlcMoa6J3iWlo6fm5hB4ysfk-WC8BHkXDhrhZ3v1e8-oPQCUxeQ11K4XftrZNk_e6I8af7ZEAFfyo1wdIQLqi9MyfnrPl0KtTKS__wgnwkevG0-KoykK5So/s1600/resx-english.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="317" data-original-width="1596" src="{{ site.baseurl }}/assets/images/055/img_6034f9fbc3.png" /></a></div>
    <h4>Arabic</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWcCVH5_E4FxW6Z2_t4E7sULeTGQJdwOKLCapCjKkl9EJVtdkEUyMVizMUaA8T0hn_BCSchSIYxP90gdt46i_YAMebw_iSlbqoQhvHSGe2-CFuHWVgFzhG25TRnWfCUGz0kDOU3PAbPYM-Hi0JcSx2f_QUwHBPPMaPQ-1X3G26ezya1k3NcxCk78l3cyI/s1600/resx-arabic.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="312" data-original-width="1596" src="{{ site.baseurl }}/assets/images/055/img_056f0ee44c.png" /></a></div>
    <h4>Japanese</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAk-3OmIDgOirms058s-gr1oWLbErzpmQRNZyh-ZzaUuph4UaHR9d5Z85Z81ZTnL0IuxWTZXoRTKRotPqPJwnjECiuA4Ur4cwj9PE4URcIdqs_ivd0VIDHb99JFa9OzSlIeWRbJ7-NBE-wvQ1bh9o1ck1b6sX-qCVzSl9gtm7DOBq_nHw4tby41UJmFoI/s1600/resx-japanese.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="321" data-original-width="1596" src="{{ site.baseurl }}/assets/images/055/img_19ff35a140.png" /></a></div>
    <p>After that I have added the below script to the on-save of the appointment main form</p>
    <p>Below is the code for <i>showAlertsUsingRESX.js</i> to be added on the on-save of appointment main form</p>
    <script src="https://gist.github.com/tamilarasu-arunachalam/ba726f1411108c761c0de7e4a1622da5.js?file=showAlertsUsingRESX.js"></script>
    <p>Add all RESX files as dependencies to your JavaScript web resource and publish the changes.</p>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMxtMoe82L3FU5NFkM3gCHPnaOKsvx5k7VLhjrUZpDWC01qtsVHGYbbBYn1q0pWntyzqflPHj6j1P7YfYiW4td5QUKIc521kXrDPmLi3-4bpiGNOS1PIVWzDU7eBzpNreyRgUNo-vH-SRSJByBcZmUQc2_QYJybca5wixM9sTAKBqO-UVYyQxlEspq-xA/s1600/add-resx-dependencies.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="842" data-original-width="966" src="{{ site.baseurl }}/assets/images/055/img_a908a06919.png" /></a></div>
    <p>Note: We can add dependencies to the web resources by clicking on the View dependencies link and add the
        dependencies. Refer to the below images</p>
    <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkV6tLkMckqqXSPybCKDkK-AkCXuD3jj3k8R_R3p_YYy2sRwWKAEtHVvcCAUu_PzIXPSRc9e0DBeL6IqBVY2FNZNHOTi2BNe3eTYi04rKPbUp1U-PJhXKAyl0ut4OeIwrt4-j3vKlE4DgFnRA1vG42CQbcwnjpKENP5QNHnLk5EkA5DACllyL24HFf2ts/s1600/view-dependencies.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="1008" data-original-width="851" src="{{ site.baseurl }}/assets/images/055/img_b22c803678.png" /></a></div>
    <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuwZGEEUhrjznYSPak6V23Hypz767mkuNx4nU38NMQYn2EZvRFp8KGPrDE1Zd408gpTm_zuImu9jdrZJucM7_DzzzRRl6DYrymaIR2LhOTe1_bFM7gCDjaLxq-bQBpKZzEFyw9ytSsTYUb_dsydrmAbtnFGhHRhJSUEFwcp_YGhNyjzV42lOzOdO62xCM/s1600/add-dependency-pane.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="1010" data-original-width="863" src="{{ site.baseurl }}/assets/images/055/img_2f6afcff40.png" /></a></div>
    <p>Save and Publish and check the form and change the language to Japanese and you'll get the alert like
        below image as we have added the value in the <b><i>messages.1041.resx</i></b></p>
    <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoKVy4lkaGtU0xJPDVEC8F4CQxu7TbZWD3dDt5D85M_i32njdS6xbxpJuKUsUBV-baiWt18eV0zOQMzB6zXyVyiUoGf1yWjrmPMapVPISaE6MsY4bgDwOUU0t4H4Q7lJsQCLSh9ltKXFxpTqXJdWnffB07jOg1ZLtod9P5SnwSFBCgadTTohwiP_jzMfg/s1600/alert-changed-to-japanese.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="558" data-original-width="1743" src="{{ site.baseurl }}/assets/images/055/img_7f52a4d10a.png" /></a></div>
    <p>Now, when the user switches their application language, Dynamics 365 automatically picks the correct translation.
    </p>
</section>
<section id="references">
    <h3>References:</h3>
    <ul>
        <li><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/getglobalcontext/usersettings" target="_blank">getGlobalContext.userSettings (Client API reference) in model-driven apps -
                Power Apps | Microsoft Learn</a></li>
        <li><a href="https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a" target="_blank">LCID (Locale ID) | Microsoft Learn</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype" target="_blank">getFormType (Client API reference) in model-driven apps - Power Apps | Microsoft
                Learn</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openalertdialog" target="_blank">openAlertDialog (Client API reference) in model-driven apps - Power Apps |
                Microsoft Learn</a></li>
        <li><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/resx-web-resources" target="_blank">String (RESX) web resources (model-driven apps) - Power Apps | Microsoft
                Learn</a></li>
    </ul><div style="text-align: center;">Have a great day!</div>
</section>
