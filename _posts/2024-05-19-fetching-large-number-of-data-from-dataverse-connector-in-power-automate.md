---
post_id: "035"
layout: post
title: "Fetching large number of data from Dataverse Connector in Power Automate"
date: 2024-05-19 17:41:00 +0000
category: Power Automate
image: assets/images/035/img_25d9f54c30.png
categories: ["Pagination", "Dataverse API", "Data Management", "Power Automate", "Dataverse Connector", "Dataverse", "Dynamics 365 Web API"]
---
Handling a large amount of data remains a challenge for many Power Automate enthusiasts. Here's an article detailing how to retrieve a large number of records from Dataverse using Power Automate. There are three methods for fetching large number of data from Dataverse via Power Automate.

- [Threshold Way](#threshold-way)
- [Paging Cookie way](#paging-cookie-way)
- [Next Link Way](#next-link-way)

## Threshold Way

To demonstrate this, I've set up a cloud instant flow. In the flow editor page, beneath the trigger, you need to add an action called "List Rows from Dataverse" (you can rename it if you prefer).

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_6dfb2bd66e.png)]({{ site.baseurl }}/assets/images/035/img_6dfb2bd66e.png)

In the "List Rows" action, select the table name and add any necessary queries. For my purpose, I've chosen the Contacts table and selected only the fullname column from that table. Alternatively, Fetch XML can also be used for querying the same data.

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_c6cefaaba7.png)]({{ site.baseurl }}/assets/images/035/img_c6cefaaba7.png)

The "List Rows" action of the Dataverse connector for Power Automate defaults to fetching 5000 records. However, by enabling Pagination in ellispse → Settings → Threshold (accepting values less than or equal to 100000), you can configure it to fetch records up to a count of 100000.

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_5638ae2be7.png)]({{ site.baseurl }}/assets/images/035/img_5638ae2be7.png)

Add another compose action to view the records count. For that, write an expression to find the length of the outputs from the "List Contacts" action. Here's the expression provided:

```js
length(outputs('List_Contacts')?['body/value'])
```

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_bfaf6c3cf8.png)]({{ site.baseurl }}/assets/images/035/img_bfaf6c3cf8.png)

Save the flow and run it. Wait until the flow runs successfully. Open the run and expand the compose action; there you will see the record count. In my case, I have more than 100k records. However, since we set the threshold limit to 100,000 in the standard configuration, it will fetch records up to that limit.

## Paging Cookie way

The Dataverse connector for Power Automate has a threshold limit of 100K records. To fetch more than 100K records, you need to use the Paging Cookie method in Power Automate. This method can also be used for fetching records below the 100K limit. It retrieves only 5000 records per request, so you need to add requests in a loop and set the Paging Cookie for each iteration. The paging cookie, in XML format, contains the record IDs for the starting and ending records for each iteration, and it changes accordingly for every iteration.

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_fe35f1855a.png)]({{ site.baseurl }}/assets/images/035/img_fe35f1855a.png)

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_9c384a0967.png)]({{ site.baseurl }}/assets/images/035/img_9c384a0967.png)

We need to initialize several variables, including RecordsCount, PagingCookie, ClearPagingCookie, and EncodingJSON. Within the EncodingJSON object, we create a field named "t" to store the Paging Cookie.

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_1940cead64.png)]({{ site.baseurl }}/assets/images/035/img_1940cead64.png)

Initiate a "Do Until" action with the condition to check whether the variable PagingCookie is not empty. Use the following expression to evaluate the variable:

```js
empty(variables('PagingCookie'))
```

Then inside the "Do Until" loop, add a "List Rows" action for the contact entity with the FetchXML query. In the FetchXML query, include the "page" attribute, which defines the page number. Since the request returns only 5000 records in the first iteration, set the initial page number to 1, and it increments for each subsequent iteration. You can use the below expression to dynamically increment the page number by 1:

```js
add(iterationIndexes('Do_until'),1)
```

To set the Paging Cookie, we need to check the iteration index of the "Do Until" loop and then assign the Paging Cookie value stored in the EncodingJSON variable. Use the following expression to set the Paging Cookie:

```js
if(equals(iterationIndexes('Do_until'),0),'',concat('paging-cookie=''', substring(first(skip(split(string(xml(setProperty(variables('EncodingJSON'),'t',variables('ClearPagingCookie')))),'<'),1)),2),''''))
```

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_3682909986.png)]({{ site.baseurl }}/assets/images/035/img_3682909986.png)

After the "List Rows" action, we need to update the Paging Cookie with the value obtained from the response of the "List Rows" action. Use the following expression to achieve this:

```js
if(empty(outputs('List_Contacts')?['body']?['@Microsoft.Dynamics.CRM.fetchxmlpagingcookie']),'',decodeUriComponent(decodeUriComponent(outputs('List_Contacts')?['body']?['@Microsoft.Dynamics.CRM.fetchxmlpagingcookie'])))
```

To clear the existing Paging Cookie values, use the following expression:

```js
if(empty(variables('PagingCookie')),'',replace(substring(variables('PagingCookie'),add(indexOf(variables('PagingCookie'),'pagingcookie="'),14)),'" istracking="False" />',''))
```

In this process, we need to retrieve the record count fetched during each iteration. We'll save this count in a variable and increment it by the current count in every iteration.

```js
length(outputs('List_Contacts')?['body/value'])
```

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_8bd12e9f53.png)]({{ site.baseurl }}/assets/images/035/img_8bd12e9f53.png)

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_b99be7bcdc.png)]({{ site.baseurl }}/assets/images/035/img_b99be7bcdc.png)

Add a "Compose" action and assign the "RecordsCount" variable to it. This will display the final count of records. Save and publish the flow, then run it.

Once the Run is completed, scroll down and expand the "Compose" action to view the actual count of records. In your case, it should display a count potentially exceeding 100K.

[![Pagination in Dataverse using Power Automate]({{ site.baseurl }}/assets/images/035/img_c8e41d2ab6.png)]({{ site.baseurl }}/assets/images/035/img_c8e41d2ab6.png)

## Next Link Way

    If you're looking to retrieve records exceeding 100,000 without utilizing FetchXML, you can opt for the next link method. This involves leveraging OData queries and incorporating a skip token value, akin to a paging cookie, passed through the OData query parameter. For this approach, it's common practice to initialize two variables: **`RecordsCount`** and **`NextLink`**.

[![]({{ site.baseurl }}/assets/images/035/img_a836344567.png)]({{ site.baseurl }}/assets/images/035/img_a836344567.png)

After that, we create a 'Do Until' action to loop through the process until the next link value returns null. As we update the **`NextLink`** variable in every iteration, it becomes null when it reaches the last page.

[![]({{ site.baseurl }}/assets/images/035/img_d673a26d32.png)]({{ site.baseurl }}/assets/images/035/img_d673a26d32.png)

Create a "List Rows" action with the table name as "Contacts". Select the "fullname" column. In the "Skip Token" field, add the value of the **`NextLink`** variable.

[![]({{ site.baseurl }}/assets/images/035/img_2978a566bb.png)]({{ site.baseurl }}/assets/images/035/img_2978a566bb.png)

Then set the `NextLink` variable with the value returned from the response. Since we only need the Skip Token parameter, we have to extract it from the `$skiptoken=` parameter in the next link value.

[![]({{ site.baseurl }}/assets/images/035/img_e6315a602d.png)]({{ site.baseurl }}/assets/images/035/img_e6315a602d.png)

You can use the following expression to split the skip token away from the next link.

```js
if(not(contains(outputs('List_Contacts')?['body'],'@odata.nextLink')),null,decodeUriComponent(last(array(split(last(array(split(outputs('List_Contacts')?['body/@odata.nextLink'],'&'))),'$skiptoken=')))))
```

And increment the count with the current record count from the "List Rows" action to calculate the total count in the end. You can achieve this by using the following expression.

[![]({{ site.baseurl }}/assets/images/035/img_fc12d4b4ba.png)]({{ site.baseurl }}/assets/images/035/img_fc12d4b4ba.png)

```js
length(outputs('List_Contacts')?['body/value'])
```

Add a "Compose" action outside of the "Do Until" loop and assign the value of the `RecordsCount` variable to it. This will display the total record count.

[![]({{ site.baseurl }}/assets/images/035/img_a3f5ba1a0a.png)]({{ site.baseurl }}/assets/images/035/img_a3f5ba1a0a.png)

Run the flow once you've saved and published it. Then open the completed run and expand the "Compose" action that we added last. There, you will be able to see the total record count.

[![]({{ site.baseurl }}/assets/images/035/img_7ad7942453.png)]({{ site.baseurl }}/assets/images/035/img_7ad7942453.png)

Have a great day!