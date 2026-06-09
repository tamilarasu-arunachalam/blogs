---
post_id: "038"
layout: post
title: "Unlocking the Power of Side Panes in Model-Driven Apps"
date: 2024-09-15 17:41:00 +0000
category: Dynamics 365 CE
image: assets/images/038/img_9dc1697832.png
categories: ["Model Driven Apps", "Power Apps", "Dynamics 365 CRM Online", "JavaScript", "Web resource", "HTML"]
---
Side panes in Model Driven Apps are designed to facilitate access to multiple pages within a single view. They appear from the right side of the page and offer various features, including customizable headers, adjustable width, and options to hide or show the pane, as well as a close (x) icon. However, these side panes are not configured by out of the box (OOTB) and require custom client-side scripting to fully utilize their functionality on your page. For more information on configuring side panes, see the relevant Microsoft documentation [here](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-app-sidepanes).

## **Side Pane Development:**

To develop and extend a side pane, you can use the following methods:

#### **`createPane`:**

This method is used to create a side pane. Below are the properties of the object used for configuring the pane during its creation:

| `title` | The title of the pane, displayed in the pane header and tooltip. |
| --- | --- |
| `paneId` | The unique identifier for the pane. If not provided, an ID will be automatically generated. |
| `canClose` | Determines if the pane header will include a close button. Defaults to `false`. |
| `imageSrc` | The file path for the icon shown in the panel switcher control. |
| `hideHeader` | Controls the visibility of the pane header, including the title and close button. Defaults to `false`. |
| `isSelected` | If set to `false`, the pane will not be selected, leaving the currently selected pane active. The pane will also remain collapsed if it was previously collapsed. |
| `width` | The width of the pane in pixels. |
| `hidden` | Specifies whether the pane and its tab should be hidden. |
| `alwaysRender` | Ensures the pane remains rendered even when hidden, preventing it from unmounting. |
| `keepBadgeOnSelect` | Prevents the badge from being cleared when the pane is selected. |

#### `getAllPanes`

Returns a collection containing all active panes.

```html
Xrm.App.sidePanes.getAllPanes();
```

#### `getSelectedPane`

Returns the current selected pane.

```html
Xrm.App.sidePanes.getSelectedPane();
```

#### `getPane`

Returns the pane corresponding to the specified ID. If the pane does not exist, `undefined` is returned.

```html
Xrm.App.sidePanes.getPane(panelId);
```

You can add any of the following three `pageType` to the `pane.navigate` method of side pane creation:

1.  **`entityrecord`**
2.  `entitylist`
3.  `webresource`

To demonstrate these types of pages, I’ve added a dropdown command button to the account form. When the dropdown is expanded, it displays three buttons. Each button triggers a different function from my JScript library when clicked.

#### **`entityrecord`**

Using this method, you can open another record in the side pane. Since it uses the record ID (GUID) to open the record, you can access records of any entity. For example, if you want to open the primary contact record in the side pane from the account form, you can use the entity record page in the side pane. Below is the code to implement this example.

```jsx
function sidePaneForm(primaryControl) {
    var formContext = primaryControl;
    var primaryContactId = formContext.getAttribute("primarycontactid") === (null || undefined) ? null : formContext.getAttribute("primarycontactid").getValue()[0].id.replace("{", "").replace("}", "");
    Xrm.App.sidePanes.createPane({
        title: "Primary Contact",
        imageSrc: "WebResources/sample_reservation_icon",
        paneId: "PrimaryContactPane",
        canClose: true
    }).then((pane) => {
        pane.navigate({
            pageType: "entityrecord",
            entityName: "contact",
            entityId: primaryContactId
        })
    });
}
```

Below is a snapshot of the demonstration.

[![]({{ site.baseurl }}/assets/images/038/img_8573554c79.png)]({{ site.baseurl }}/assets/images/038/img_8573554c79.png)


### `entitylist`

This type of page will display views for the specific entity mentioned in the code. For example, if you want to open a list of contacts in the side pane, you can use the entity list page to achieve this. Below is the code for implementing this example

```jsx

function sidePaneList() {
    Xrm.App.sidePanes.createPane({
        title: "Accounts",
        imageSrc: "WebResources/sample_reservation_icon",
        paneId: "AccountsListPane",
        canClose: true
    }).then((pane) => {
        pane.navigate({
            pageType: "entitylist",
            entityName: "account",
        })
    });
}
```

Below is a snapshot of the demonstration.

[![]({{ site.baseurl }}/assets/images/038/img_104a24c419.png)]({{ site.baseurl }}/assets/images/038/img_104a24c419.png)

### `webresource`

With this type of side pane, you can display an HTML web resource. The page type should be set to `webresource`. For example, you can open an HTML page with custom scripting. Below are code snippets to demonstrate this.

**HTML Code**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom List Page</title>
    <link rel="stylesheet"
        href="<https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.min.css>" />
    <link rel="stylesheet"
        href="<https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/css/fabric.components.min.css>" />
    <script src="<https://static2.sharepointonline.com/files/fabric/office-ui-fabric-js/1.4.0/js/fabric.min.js>"></script>
    <script src="ClientGlobalContext.js.aspx" type="text/javascript"></script>
    <script>
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
    </script>
</head>

<body>
    <h1 class="ms-Label">Primary Contact</h1>
    <div class="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <div class="ms-Persona ms-Persona--lg">
            <div class="ms-Persona-imageArea">
                <div class="ms-Persona-initials ms-Persona-initials--blue" id="nameInitial"></div>
            </div>
            <div class="ms-Persona-details">
                <div class="ms-Persona-primaryText" id="fullName"></div>
                <div class="ms-Persona-secondaryText" id="emailAddress"></div>
                <div class="ms-Persona-secondaryText" id="mobileNumber"></div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        var PersonaElements = document.querySelectorAll(".ms-Persona");
        for (var i = 0; i < PersonaElements.length; i++) {
            new fabric['Persona'](PersonaElements[i]);
        }
    </script>
</body>

</html>
```

**JScript Code:**

```jsx
function sidePaneCustom(primaryControl) {
    var formContext = primaryControl;
    var primaryContactId = formContext.getAttribute("primarycontactid") === (null || undefined) ? null : formContext.getAttribute("primarycontactid").getValue()[0].id.replace("{", "").replace("}", "");
    sweepPanes();
    Xrm.App.sidePanes.createPane({
        title: "Contacts List",
        imageSrc: "WebResources/sample_reservation_icon",
        paneId: "CustomListPagePane",
        canClose: true
    }).then((pane) => {
        pane.navigate({
            pageType: "webresource",
            webresourceName: "crf4c_customListPage",
            data: primaryContactId
        })
    });
}
```

We can use a data field to pass values through URL parameters, which can then be retrieved in the HTML web resource.

Below is a snapshot of the demonstration.

[![]({{ site.baseurl }}/assets/images/038/img_1c8df20391.png)]({{ site.baseurl }}/assets/images/038/img_1c8df20391.png)

## And More…

You can close the pane programmatically using the code below.

`Xrm.App.sidePanes.getPane(panelId).close();`

Also, you call collapse or expand the side pane programmatically by using the code below. Where `0` is to collapse and `1` is to expand.

`Xrm.App.sidePanes.state = 0;`

### **Closing the Opened Panes:**

In a scenario where you have multiple side pane on a single page, improper closure of panes can result in a cluttered side navigation. To avoid this, it’s better to use a function to close any open panes before opening a new one and call this method before every side pane creation. You can achieve this by using the `getAllPanes().getAll()` method to retrieve all currently open panes on the page. Below is the code to close all open panes.

```jsx
function sweepPanes() {
    var ourPaneArray = ["PrimaryContactPane", "AccountsListPane", "AccountsListPane"];
    var paneArray = Xrm.App.sidePanes.getAllPanes().getAll();

    paneArray.forEach(function (pane) {
        if (ourPaneArray.includes(pane._paneId)) {
            Xrm.App.sidePanes.getPane(pane._paneId).close();
        }
    });
}
```

Have a great day!