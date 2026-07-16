---
layout: post
post_id: '036'
title: Retrieve 100K+ records from Dataverse in XRM Web API using JavaScript
date: 2024-06-09 17:41:00 +0000
image: assets/images/036/img_8e7a92550f.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Pagination
  - Model Driven Apps
  - Dataverse API
  - Dynamics 365 CRM Online
  - JavaScript
  - Web resource
  - Dynamics 365 Web API
---

Struggling to fetch large data sets via the XRM Web API? No sweat! I've authored an article demonstrating how to efficiently fetch large datasets from the Dataverse XRM Web API using JavaScript. In the article, I cover both querying techniques, including FetchXML and OData Query, providing comprehensive guidance on handling substantial amounts of data.

To demonstrate, I imported a sample dataset with over 100,000 records into the contact table. This allows us to experiment and interact with a large dataset.

[![]({{ site.baseurl }}/assets/images/036/img_624e9cf503.png)]({{ site.baseurl }}/assets/images/036/img_624e9cf503.png)

I've added a button to the contact view using the command editor. After adding your web resource library, simply add the function name below the button configuration in the command editor.

[![Retrieve 100K+ records from Dataverse in XRM Web API using JavaScript]({{ site.baseurl }}/assets/images/036/img_4444a9bdb1.png)]({{ site.baseurl }}/assets/images/036/img_4444a9bdb1.png)

As mentioned earlier, we have two methods available. We can demonstrate both techniques within the same web resource by overwriting it as needed. This approach allows for a streamlined and cohesive demonstration of fetching large datasets using FetchXML and OData Query within a single resource.

## Using Next Link(OData Query)

OData query is one of the easiest methods to fetch records from the XRM Web API, particularly for simple queries. However, it's important to note that the Dataverse API retrieves a maximum of 5000 records per request. If the number of records exceeds this limit(of 5000), the API will provide a 'next link' field in the response. Utilizing this 'next link' value, subsequent requests can be made to fetch the next set of 5000 records. This process continues until all records are fetched. The provided code exemplifies how to leverage OData queries in the XRM Web API to efficiently retrieve large datasets, exceeding 100,000 records.

<script src="https://gist.github.com/tamilarasu-arunachalam/98523563bd0ef302044b6a114ac6dae6.js?file=crf4c_queryPagination.js"></script>

## Using Paging Cookie(Fetch XML)

Of course! We can indeed use FetchXML to fetch records with pagination. To achieve this, we need to update the paging cookie for each fetch operation until we reach the end of the records. The JavaScript code provided facilitates this process by managing the pagination seamlessly.

<script src="https://gist.github.com/tamilarasu-arunachalam/98523563bd0ef302044b6a114ac6dae6.js?file=crf4c_fetchXmlPagination.js"></script>

In the above code, I have four functions and here's a simplified breakdown:

1.  **CreateXml** Function: Constructs a FetchXML query with optional pagination parameters.
2.  **retrievePage** Function: Retrieves a single page of records using the FetchXML query.
3.  **retrieveAllRecords** Function: Recursively retrieves all records by fetching pages until no more are available.
4.  **paginationScript** Function: An example demonstrating how to use the pagination feature to retrieve all records from contacts table.

You can see the result of the above demonstration in the below GIF

[![Retrieve 100K+ records from Dataverse in XRM Web API using JavaScript]({{ site.baseurl }}/assets/images/036/img_b8fbc1acd2.gif)]({{ site.baseurl }}/assets/images/036/img_b8fbc1acd2.gif)  

**_Reference:_** You can refer the Microsoft learn document by clicking [here](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/retrievemultiplerecords)

Have a great day!
