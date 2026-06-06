---
post_id: "038"
layout: post
title: "Unlocking the Power of Side Panes in Model-Driven Apps"
date: 2024-09-15 17:41:00 +0000
categories: ["Model Driven Apps", "Power Apps", "Dynamics 365 CRM Online", "JavaScript", "Web resource", "HTML"]
---

<div style="text-align: justify;">&nbsp; &nbsp; Side panes in Model Driven Apps are designed to facilitate access to multiple pages within a single view. They appear from the right side of the page and offer various features, including customizable headers, adjustable width, and options to hide or show the pane, as well as a close (x) icon. However, these side panes are not configured by out of the box (OOTB) and require custom client-side scripting to fully utilize their functionality on your page. For more information on configuring side panes, see the relevant Microsoft documentation <a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes">here</a>.</div><img border="0" data-original-height="400" data-original-width="700" height="183" src="{{ site.baseurl }}/assets/images/038/img_9dc1697832.png" style="display: none;" width="320" /><p></p>
<h2><strong>Side Pane Development:</strong></h2>
<p>To develop and extend a side pane, you can use the following methods:</p>
<h4 style="text-align: left;"><strong><code>createPane</code>:</strong></h4>
<p>This method is used to create a side pane. Below are the properties of the object used for configuring the pane during its creation:</p>
<table>
<thead>
<tr>
<th><code>title</code></th>
<th>The title of the pane, displayed in the pane header and tooltip.</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>paneId</code></td>
<td>The unique identifier for the pane. If not provided, an ID will be automatically generated.</td>
</tr>
<tr>
<td><code>canClose</code></td>
<td>Determines if the pane header will include a close button. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>imageSrc</code></td>
<td>The file path for the icon shown in the panel switcher control.</td>
</tr>
<tr>
<td><code>hideHeader</code></td>
<td>Controls the visibility of the pane header, including the title and close button. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>isSelected</code></td>
<td>If set to <code>false</code>, the pane will not be selected, leaving the currently selected pane active. The pane will also remain collapsed if it was previously collapsed.</td>
</tr>
<tr>
<td><code>width</code></td>
<td>The width of the pane in pixels.</td>
</tr>
<tr>
<td><code>hidden</code></td>
<td>Specifies whether the pane and its tab should be hidden.</td>
</tr>
<tr>
<td><code>alwaysRender</code></td>
<td>Ensures the pane remains rendered even when hidden, preventing it from unmounting.</td>
</tr>
<tr>
<td><code>keepBadgeOnSelect</code></td>
<td>Prevents the badge from being cleared when the pane is selected.</td>
</tr>
</tbody>
</table>
<h4 style="text-align: left;"><code>getAllPanes</code></h4>
<p>Returns a collection containing all active panes.</p>
<pre style="text-align: left;"><code class="language-html">Xrm.App.sidePanes.getAllPanes();
</code></pre>
<h4 style="text-align: left;"><code>getSelectedPane</code></h4>
<p>Returns the current selected pane.</p>
<pre style="text-align: left;"><code class="language-html">Xrm.App.sidePanes.getSelectedPane();
</code></pre>
<h4 style="text-align: left;"><code>getPane</code></h4>
<p>Returns the pane corresponding to the specified ID. If the pane does not exist, <code>undefined</code> is returned.</p>
<pre><code class="language-html">Xrm.App.sidePanes.getPane(panelId);
</code></pre>
<p>You can add any of the following three <code>pageType</code> to the <code>pane.navigate</code> method of side pane creation:</p>
<ol>
<li><strong><code>entityrecord</code></strong></li>
<li><code>entitylist</code></li>
<li style="text-align: justify;"><code>webresource</code></li>
</ol>
<p style="text-align: justify;">To demonstrate these types of pages, I’ve added a dropdown command button to the account form. When the dropdown is expanded, it displays three buttons. Each button triggers a different function from my JScript library when clicked.</p>
<h4 style="text-align: left;"><strong><code>entityrecord</code></strong></h4>
<p>Using this method, you can open another record in the side pane. Since it uses the record ID (GUID) to open the record, you can access records of any entity. For example, if you want to open the primary contact record in the side pane from the account form, you can use the entity record page in the side pane. Below is the code to implement this example.</p>
<pre><code class="language-jsx">function sidePaneForm(primaryControl) {
    var formContext = primaryControl;
    var primaryContactId = formContext.getAttribute("primarycontactid") === (null || undefined) ? null : formContext.getAttribute("primarycontactid").getValue()[0].id.replace("{", "").replace("}", "");
    Xrm.App.sidePanes.createPane({
        title: "Primary Contact",
        imageSrc: "WebResources/sample_reservation_icon",
        paneId: "PrimaryContactPane",
        canClose: true
    }).then((pane) =&gt; {
        pane.navigate({
            pageType: "entityrecord",
            entityName: "contact",
            entityId: primaryContactId
        })
    });
}
</code></pre>
<p>Below is a snapshot of the demonstration.</p>
<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-D2MHyOhtMcifhdaRFr2opB79rL6StUky2nVL_a_1-ozNZkzKxK-k6Glnm6W1XXAzRKYQXBHLAPdp9blQpNgvOp7y2OOb9XlWsr_bikwQApng40Ay1JRVFJbDSs2YPSJY_JXy_PC3Ix5rYuv2yxb6VoQCdoQb2CNDceOItzq0UrN2IH5YEBRwhMCDCwA/s898/side-pane-form.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="898" data-original-width="853" src="{{ site.baseurl }}/assets/images/038/img_8573554c79.png" /></a></div><br /><p><br /></p>
<h3><code>entitylist</code></h3>
<p style="text-align: justify;">This type of page will display views for the specific entity mentioned in the code. For example, if you want to open a list of contacts in the side pane, you can use the entity list page to achieve this. Below is the code for implementing this example</p>
<pre><code class="language-jsx">
function sidePaneList() {
    Xrm.App.sidePanes.createPane({
        title: "Accounts",
        imageSrc: "WebResources/sample_reservation_icon",
        paneId: "AccountsListPane",
        canClose: true
    }).then((pane) =&gt; {
        pane.navigate({
            pageType: "entitylist",
            entityName: "account",
        })
    });
}
</code></pre>
<p>Below is a snapshot of the demonstration.</p>
<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhki5VtjpuG01I-5XYKj_P0M4odFVPML5k6edcYeMVVWm5GfkPQo4UZ-L0dUNhcRc5eBYuRtSsoZ-6L663kLiGyFv6YSoruJeIWgbmnk3s06eYU6zGY7aOb2Rmd8I0N5fAfVopN-5Q3KJc_bb9eMkyYmeqgEDGtvUiQ3sisBp-X3F_2_-9ysWDbjXrQE8g/s895/side-pane-view.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="895" data-original-width="675" src="{{ site.baseurl }}/assets/images/038/img_104a24c419.png" /></a></div>
<h3><code>webresource</code></h3>
<p style="text-align: justify;">With this type of side pane, you can display an HTML web resource. The page type should be set to <code>webresource</code>. For example, you can open an HTML page with custom scripting. Below are code snippets to demonstrate this.</p>
<p><strong>HTML Code</strong></p>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;

&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Custom List Page&lt;/title&gt;
    &lt;link rel="stylesheet"
        href="&lt;https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.min.css&gt;" /&gt;
    &lt;link rel="stylesheet"
        href="&lt;https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.components.min.css&gt;" /&gt;
    &lt;script src="&lt;https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/js/fabric.min.js&gt;"&gt;&lt;/script&gt;
    &lt;script src="ClientGlobalContext.js.aspx" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script&gt;
        function onCollapseOfSidePane() {
            var primaryContactId, nameSplit, nameInitial;
            if (location.search != null) {
                if (location.search.split("=")[1] != null) {
                    primaryContactId = decodeURIComponent(location.search.split("=")[1]);
                    Xrm.WebApi.retrieveRecord("contact", primaryContactId, "?$select=fullname,emailaddress1,telephone1").then(
                        function success(result) {
                            document.getElementById("fullName").innerText = result.fullname;
                            document.getElementById("emailAddress").innerText = result.emailaddress1;
                            document.getElementById("mobileNumber").innerText = result.telephone1;
                            // split the fullname to get first letters for initials
                            nameSplit = result.fullname.split(" ");
                            nameInitial=nameSplit[0][0]+nameSplit[nameSplit.length-1][0];
                            document.getElementById("nameInitial").innerText = nameInitial.toUpperCase();
                        },
                        function (error) {
                            console.log(error.message);
                        }
                    );
                }
            }
        }
        window.onload = onCollapseOfSidePane();
    &lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1 class="ms-Label"&gt;Primary Contact&lt;/h1&gt;
    &lt;div class="ms-Grid-col ms-sm12 ms-md12 ms-lg12"&gt;
        &lt;div class="ms-Persona ms-Persona--lg"&gt;
            &lt;div class="ms-Persona-imageArea"&gt;
                &lt;div class="ms-Persona-initials ms-Persona-initials--blue" id="nameInitial"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="ms-Persona-details"&gt;
                &lt;div class="ms-Persona-primaryText" id="fullName"&gt;&lt;/div&gt;
                &lt;div class="ms-Persona-secondaryText" id="emailAddress"&gt;&lt;/div&gt;
                &lt;div class="ms-Persona-secondaryText" id="mobileNumber"&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script type="text/javascript"&gt;
        var PersonaElements = document.querySelectorAll(".ms-Persona");
        for (var i = 0; i &lt; PersonaElements.length; i++) {
            new fabric['Persona'](PersonaElements[i]);
        }
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
<p><strong>JScript Code:</strong></p>
<pre><code class="language-jsx">function sidePaneCustom(primaryControl) {
    var formContext = primaryControl;
    var primaryContactId = formContext.getAttribute("primarycontactid") === (null || undefined) ? null : formContext.getAttribute("primarycontactid").getValue()[0].id.replace("{", "").replace("}", "");
    sweepPanes();
    Xrm.App.sidePanes.createPane({
        title: "Contacts List",
        imageSrc: "WebResources/sample_reservation_icon",
        paneId: "CustomListPagePane",
        canClose: true
    }).then((pane) =&gt; {
        pane.navigate({
            pageType: "webresource",
            webresourceName: "crf4c_customListPage",
            data: primaryContactId
        })
    });
<div style="text-align: justify;">}</div></code></pre>
<p style="text-align: justify;">We can use a data field to pass values through URL parameters, which can then be retrieved in the HTML web resource.</p>
<p>Below is a snapshot of the demonstration.</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvLMgprUW4bvNcC-FNZlr0tlLPaj3g7kdiaZV-t97BPW3MAPNiJMU1xXgxWbS3jcDQ3ylm9PkgZTKY-S2tjuZsIcfH2Sl_f_g1xkLRAVvEAo2XhGDc_r_nx2KalcMghAj2T4_TZW3MDEYcnI55owB5Q-TDTaKkwrtmjwXzFbcfPPOYcW1UifBUbjters0/s897/side-pane-web-resource.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="897" data-original-width="716" src="{{ site.baseurl }}/assets/images/038/img_1c8df20391.png" /></a></div>
<h2>And More…</h2>
<p>You can close the pane programmatically using the code below.</p>
<p><code>Xrm.App.sidePanes.getPane(panelId).close();</code></p><p>Also, you call collapse or expand the side pane programmatically by using the code below. Where <code>0</code> is to collapse and <code>1</code> is to expand.</p><p><code>

<!--notionvc: 298d48ea-0a75-4922-a1e9-87ecc07a029b--></code></p><p><code>Xrm.App.sidePanes.state = 0;</code></p>
<h3><strong>Closing the Opened Panes:</strong></h3>
<p style="text-align: justify;">In a scenario where you have multiple side pane on a single page, improper closure of panes can result in a cluttered side navigation. To avoid this, it’s better to use a function to close any open panes before opening a new one and call this method before every side pane creation. You can achieve this by using the <code>getAllPanes().getAll()</code> method to retrieve all currently open panes on the page. Below is the code to close all open panes.</p>
<pre><code class="language-jsx">function sweepPanes() {
    var ourPaneArray = ["PrimaryContactPane", "AccountsListPane", "AccountsListPane"];
    var paneArray = Xrm.App.sidePanes.getAllPanes().getAll();

    paneArray.forEach(function (pane) {
        if (ourPaneArray.includes(pane._paneId)) {
            Xrm.App.sidePanes.getPane(pane._paneId).close();
        }
    });
}
</code></pre>
<p style="text-align: center;">Have a great day!</p>
<!--notionvc: b45c0194-15e1-483c-ad7b-c5ba39d58b33-->