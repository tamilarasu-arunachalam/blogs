---
post_id: "037"
layout: post
title: "Exploring Pagination Techniques in Dynamics 365 CRM using C# Plugins"
date: 2024-06-30 17:41:00 +0000
categories: ["Pagination", "Model Driven Apps", "Dynamics 365 CRM Online", "Plugins"]
---

<div style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>As we all know, fetching records from a plugin is straightforward. However, it becomes more challenging when dealing with large volumes of data. In real-world scenarios, the number of records within an entity can be unpredictable. Every application will eventually encounter this threshold. Similar to JavaScript and Power Automate, where a single request can fetch a limit of 5000 records, pagination becomes necessary when dealing with more than this limit.</div><img alt="Exploring Pagination Techniques in Dynamics 365 CRM using C# Plugins" border="0" src="{{ site.baseurl }}/assets/images/037/img_beba359730.png" style="display: none;" /><p></p><p style="text-align: justify;">There are two primary methods to fetch records, each of which supports pagination:</p><ul><li style="text-align: justify;">Query Expression</li><li style="text-align: justify;">Fetch XML</li></ul><p style="text-align: justify;">To demonstrate the same, I have created a console application to experiment pagination in C# with the above retrieving methods.</p><h2>Query Expression</h2><p style="text-align: left;">Query Expression is an object-oriented approach to fetching records. Pagination can be implemented using the following method:</p><pre><code class="language-csharp">static void queryExpPagination(IOrganizationService service)
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
}</code></pre><p style="text-align: justify;">In the above code, we initiate the Query Expression as usual. To enable pagination, we set values for certain properties of Query Expression by initializing paging info. By default, the page number starts at 1. After the first request, the response includes a paging cookie. Subsequent requests require passing this paging cookie from the previous response and incrementing the page number by 1. This process continues in a loop until the <code>more records</code> property becomes false.</p><p></p><p style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEje3HUMtfXWJblfto0ERAdHPNdbf2O7X5-5PjDsTWeM1pbRjBea0qu0Wp4DJ1wj31MiTQvxVeckYEk1olqIqvqgKAXlrR2DBcYlyGxubLnl6-T4agu2pRcVjrLuIktMS2MYcdACyXNjQajSk1sd1jIT7CqgVWVJPg5zYM78crUSYmSo9cKQjEKltSc-yIE" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="702" data-original-width="1377" src="{{ site.baseurl }}/assets/images/037/img_425d30595b.png" /></a></p><p></p><h2>Fetch XML</h2><h3>Pagination by converting Fetch XML to Query Expression</h3><p style="text-align: justify;">In this method, we convert Fetch XML to Query Expression using the <code>FetchXmlToQueryExpressionRequest</code> object. After converting the Fetch XML, we retrieve the conversion response and utilize it as the query expression for fetching records.</p><pre><code class="language-csharp">static void fetchXmlPagination(IOrganizationService service)
{
    EntityCollection contactsCollection;
    int totalContactsCount = 0;
    // initiate the fetch xml
    string fetchXml = "&lt;fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'&gt;" +
                     "  &lt;entity name='contact'&gt;" +
                     "    &lt;attribute name='fullname' /&gt;" +
                     "  &lt;/entity&gt;" +
                     "&lt;/fetch&gt;";

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
}</code></pre><h3>Pagination with Paging Cookie in Fetch XML</h3><p style="text-align: justify;">In this method, we parse the Fetch XML and concatenate the paging cookie into it for every request after the initial one. Initially, we parse the Fetch XML and include the page (defaulting to 1) and the paging cookie. This process continues until the <code>more records</code> property returns false.</p><pre><code class="language-csharp">static void paginationByXmlParsingFetchXml(IOrganizationService service)
{
    EntityCollection contactsCollection;
    int page = 1;
    int totalContactsCount = 0;

    // initiate the fetch xml
    string fetchXml = "&lt;fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'&gt;" +
                 "  &lt;entity name='contact'&gt;" +
                 "    &lt;attribute name='fullname' /&gt;" +
                 "  &lt;/entity&gt;" +
                 "&lt;/fetch&gt;";

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
}</code></pre><p>Here is the complete code for a console application demonstrating the pagination process by using all the methods.</p><p><script src="https://gist.github.com/tamilarasu-arunachalam/3bdac20a0cde47f9eacda45110df3de3.js"></script></p><p style="text-align: center;">Have a great day!</p>