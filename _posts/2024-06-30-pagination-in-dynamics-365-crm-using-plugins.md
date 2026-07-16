---
layout: post
post_id: '037'
title: Exploring Pagination Techniques in Dynamics 365 CRM using C# Plugins
date: 2024-06-30 17:41:00 +0000
image: assets/images/037/img_beba359730.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Pagination
  - Model Driven Apps
  - Dynamics 365 CRM Online
  - Plugins
---

As we all know, fetching records from a plugin is straightforward. However, it becomes more challenging when dealing with large volumes of data. In real-world scenarios, the number of records within an entity can be unpredictable. Every application will eventually encounter this threshold. Similar to JavaScript and Power Automate, where a single request can fetch a limit of 5000 records, pagination becomes necessary when dealing with more than this limit.

There are two primary methods to fetch records, each of which supports pagination:

-   Query Expression
-   Fetch XML

To demonstrate the same, I have created a console application to experiment pagination in C# with the above retrieving methods.

## Query Expression

Query Expression is an object-oriented approach to fetching records. Pagination can be implemented using the following method:

```csharp
static void queryExpPagination(IOrganizationService service)
{
    EntityCollection contactsCollection;
    int totalContactsCount = 0;
    //initiate the query expression
    QueryExpression contactQuery = new QueryExpression("contact");
    contactQuery.ColumnSet = new ColumnSet(true);

    //Initiate the paging info
    contactQuery.PageInfo = new PagingInfo();

    // set the initial page number as 1
    contactQuery.PageInfo.PageNumber = 1;
    contactQuery.PageInfo.ReturnTotalRecordCount = true;

    do
    {
        // retrieve records
        contactsCollection = service.RetrieveMultiple(contactQuery);
        // Add paging cookie to the retrieve call
        contactQuery.PageInfo.PagingCookie = contactsCollection.PagingCookie;
        contactQuery.PageInfo.PageNumber++;
        totalContactsCount += contactsCollection.Entities.Count;
    } while (contactsCollection.MoreRecords);
    //throw the exception
    throw new InvalidPluginExecutionException("Total Contacts Count : " + totalContactsCount);
}
```

In the above code, we initiate the Query Expression as usual. To enable pagination, we set values for certain properties of Query Expression by initializing paging info. By default, the page number starts at 1. After the first request, the response includes a paging cookie. Subsequent requests require passing this paging cookie from the previous response and incrementing the page number by 1. This process continues in a loop until the `more records` property becomes false.

[![]({{ site.baseurl }}/assets/images/037/img_425d30595b.png)]({{ site.baseurl }}/assets/images/037/img_425d30595b.png)

## Fetch XML

### Pagination by converting Fetch XML to Query Expression

In this method, we convert Fetch XML to Query Expression using the `FetchXmlToQueryExpressionRequest` object. After converting the Fetch XML, we retrieve the conversion response and utilize it as the query expression for fetching records.

```csharp
static void fetchXmlPagination(IOrganizationService service)
{
    EntityCollection contactsCollection;
    int totalContactsCount = 0;
    // initiate the fetch xml
    string fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                     "  <entity name='contact'>" +
                     "    <attribute name='fullname' />" +
                     "  </entity>" +
                     "</fetch>";

    //Convert fetchXml into query expression
    FetchXmlToQueryExpressionRequest conversionRequest = new FetchXmlToQueryExpressionRequest
    {
        FetchXml = fetchXml
    };
    FetchXmlToQueryExpressionResponse conversionResponse = (FetchXmlToQueryExpressionResponse)service.Execute(conversionRequest);
    QueryExpression contactQuery = conversionResponse.Query;

    do
    {
        // retrieve records using the query expression
        contactsCollection = service.RetrieveMultiple(contactQuery);
        // Add paging cookie to the retrieve call
        contactQuery.PageInfo.PagingCookie = contactsCollection.PagingCookie;
        contactQuery.PageInfo.PageNumber++;
        totalContactsCount += contactsCollection.Entities.Count;
    } while (contactsCollection.MoreRecords);
    //throw the exception
    throw new InvalidPluginExecutionException("Total Contacts Count : " + totalContactsCount);
}
```

### Pagination with Paging Cookie in Fetch XML

In this method, we parse the Fetch XML and concatenate the paging cookie into it for every request after the initial one. Initially, we parse the Fetch XML and include the page (defaulting to 1) and the paging cookie. This process continues until the `more records` property returns false.

```csharp
static void paginationByXmlParsingFetchXml(IOrganizationService service)
{
    EntityCollection contactsCollection;
    int page = 1;
    int totalContactsCount = 0;

    // initiate the fetch xml
    string fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
                 "  <entity name='contact'>" +
                 "    <attribute name='fullname' />" +
                 "  </entity>" +
                 "</fetch>";

    XElement fetchNode = XElement.Parse(fetchXml);
    fetchNode.SetAttributeValue("page", page);

    do
    {
        // Get the page
        contactsCollection = service.RetrieveMultiple(new FetchExpression(fetchNode.ToString()));

        // Set the fetch paging-cookie attribute with the paging cookie from the previous query
        fetchNode.SetAttributeValue("paging-cookie", contactsCollection.PagingCookie);
        page++;
        fetchNode.SetAttributeValue("page", page);
        totalContactsCount += contactsCollection.Entities.Count;
    } while (contactsCollection.MoreRecords);
    //throw the exception
    throw new InvalidPluginExecutionException("Total Contacts Count : " +totalContactsCount);
}
```

Here is the complete code for a console application demonstrating the pagination process by using all the methods.

<script src="https://gist.github.com/tamilarasu-arunachalam/3bdac20a0cde47f9eacda45110df3de3.js"></script>

Have a great day!
