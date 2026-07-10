---
layout: post
post_id: '007'
title: Get all the options from the Option set using Power Automate
date: 2022-12-03 18:02:00 +0000
image: assets/images/007/img_7d953ce272.webp
description: ''
meta_keywords: ''
category: Power Automate
read_time: ''
categories:
  - Power Automate
  - Dynamics 365 CE
  - Dataverse
---

![]({{ site.baseurl }}/assets/images/007/img_7d953ce272.webp)

In Power Automate, getting all the option set values from Dataverse is not quite easy as getting the selected value from the option set field(Dataverse Choices). Here in this article we will have a look on how to take all the options from the option set and list it using the Power Automate(Formerly Flow).

### Steps:

-   Get Option set metadata from Web API
-   Creating a flow
-   Invoking HTTP request
-   List all options

## Get Option set metadata from Web API :

Generally, we retrieve all the option sets from the Dataverse using the API in the Browser or Postman.

```plain
https://<org_name>.crm.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='<entity_name>')/Attributes(LogicalName='<field_name>')/Microsoft.Dynamics.CRM.PicklistAttributeMetadata?$select=LogicalName&$expand=OptionSet($select=Options)
```

HTTP

Copy

In the above HTTP REST API url replace the text that are enclosed within the angle braces. The entity name and field name should be the logical name. The response for the API endpoint looks like the below picture.

![]({{ site.baseurl }}/assets/images/007/img_5324f16d7e.png)

We should replicate the above operation in Power Automate using the HTTP connector

## Creating a flow :

For creating a Power Automate flow, open your Dataverse solution ? click on + New on the command bar ? Automation ? Cloud flow ? Click Instant.

![]({{ site.baseurl }}/assets/images/007/img_2b4ba4a3be.png)

A modal window named Build an instant cloud flow opens up, choose a name for your flow and choose the trigger you wish. I have chosen Manual trigger because i didn’t want it execute from another trigger. Click on Create button on the below. Then the flow edit page opens with the trigger step.

## Invoking HTTP Request :

We can retrieve the Option set metadata in Power Automate by invoking a HTTP GET Request. Click or the + icon and search for the connector name Invoke an HTTP request. Connect it with the base-url and click Signin.

![]({{ site.baseurl }}/assets/images/007/img_174f6be9c2.png)

After the connection gets established, select the method as _GET_ and use the Web API URL in the Url of the request.

![]({{ site.baseurl }}/assets/images/007/img_8ef8a6f8c3.png)

```plain
body('Invoke_an_HTTP_request')?['OptionSet']?['Options']
```

In the Parse JSON connector, use the above expression in the Content field and for Schema field copy the below JSON snippet and click generate from sample button and paste it and click Ok.

```plain
{
  "Value": 1,
  "Color": null,
  "IsManaged": true,
  "ExternalValue": null,
  "ParentValues": [],
  "Tag": null,
  "MetadataId": null,
  "HasChanged": null,
  "Label": {
  "LocalizedLabels": [
    {
      "Label": "Accounting",
      "LanguageCode": 1033,
      "IsManaged": true,
      "MetadataId": "6798ba00-2341-db11-898a-0007e9e17ebd",
      "HasChanged": null
    }
  ],
  "UserLocalizedLabel": {
    "Label": "Accounting",
    "LanguageCode": 1033,
    "IsManaged": true,
    "MetadataId": "6798ba00-2341-db11-898a-0007e9e17ebd",
    "HasChanged": null
  }
}
```

Click Generate from sample and paste then submit it. Then the flow step looks like the below picture.

![]({{ site.baseurl }}/assets/images/007/img_ef4768dd7c.png)   

## List all Options:

After parsing the response from the HTTP Request, add a Create HTML Table connector to list the Value and Label in the form of table. In the From field, select response body from the Parse JSON connector.

-   item()?[‘value’] is the expression for getting _Value_
-   item()?[‘Label’]?[‘UserLocalizedLabel’]?[‘Label’] is for getting _Label Text_.

![]({{ site.baseurl }}/assets/images/007/img_bf3c458efa.png)

Save the flow and solve if the flow checker is showing any warnings or errors. Run the flow by clicking the Run button on the command bar.

![]({{ site.baseurl }}/assets/images/007/img_75ce29d6af.png)

After running, check the run history for the status and open it to see the working of the flow. If the run results in error, check where it got failed and re-run again until the flow get succeeded. After the success of the flow open the run and move down to the Create HTML Table flow and expand it . You will see the list of options in the Outputs section as like in the below picture.

![]({{ site.baseurl }}/assets/images/007/img_18bcc25c14.png)

Keep Learning!
