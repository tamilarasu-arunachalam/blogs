---
layout: post
post_id: '077'
title: How to execute a batch process using JavaScript Web API in Dynamics 365 CE?
date: 2026-07-12T23:11
image: assets/images/077/dataverse-batch-process-flow.png
description: Discover how to use Dataverse Web API Batch Requests to create multiple records in a single API call, improve performance, and manage transactions using change sets.
meta_keywords: Dataverse Batch Requests, Dynamics 365 Batch Requests, Dataverse Web API, Bulk Create Records Dataverse, Create Multiple Records Dataverse, Dataverse Performance Optimization, Web API Batch Processing, Dataverse Change Sets, Dynamics 365 Web API Batch, ExecuteMultipleRequest Dataverse, Dataverse Bulk Operations, Power Platform Batch Requests, Dataverse Transaction Processing, Dataverse Create Records from JSON, Dataverse change set transaction example, Bulk insert records in Dynamics 365, Dataverse batch request example with JavaScript
category: Dynamics 365 CE
read_time: 5 mins
published: true
---

When you need to create thousands of records from a JSON payload, executing individual API calls for every record can negatively impact system performance and increase network overhead. This is where Batch Processing becomes extremely useful.

Using Web API Batch Requests, you can combine multiple operations into a single HTTP request, reducing the number of round trips between the client and the server and improving overall performance.

A single batch request can contain up to **1,000** individual operations. However, batch requests cannot be nested within another batch request.

Similarly, if you’re working with server-side code or plugins, you can achieve batch processing using the `ExecuteMultipleRequest` message. This allows multiple operations to be processed efficiently within a single execution context.

Additionally, batch requests support Change Sets, which group multiple create, update, or delete operations into a single transaction. A change set follows an all-or-nothing approach - either all operations succeed or the entire transaction fails. This ensures data consistency when processing related records.

### Understanding Web API Batch Requests

Constructing a Web API batch request can be a little challenging, especially if you’re new to the Dataverse Web API.

To execute a batch operation:

- Use an HTTP **POST** request against the `$batch` endpoint.
- The request must include the `Content-Type` header with the value `multipart/mixed`.
- A unique boundary identifier must be specified to separate individual requests within the batch.
- The boundary can be any unique value, such as a GUID, timestamp, or datetime string.

For simplicity, I have used a datetime value as the boundary identifier in this example.

The following syntax demonstrates the structure of a batch request.

```plain
--batch_<identifier>
Content-Type: multipart/mixed; boundary=changeset_<identifier>

--changeset_<identifier>
Content-Type: application/http
Content-Transfer-Encoding: binary
Content-ID: 1

POST [Organization Uri]/api/data/v9.2/accounts HTTP/1.1
Content-Type: application/json;type=entry

{"name":"Contoso Pvt Ltd","telephone1":"1234567890"}

--changeset_<identifier>--
--batch_<identifier>--
```

For testing purposes, I created a Custom Command Button in a model-driven app and associated a JavaScript method with the button action.

The script constructs a batch request and creates multiple Account records through a single Web API call. This approach significantly reduces the number of requests sent to the Dataverse server and improves performance when processing bulk records.

Refer to the image below for the demonstration.

![Dataverse batch request example with JavaScript](/assets/images/077/batch-demonstration.png)

#### References:

- [Execute Batch Operations Using the Web API -  Power Apps - Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/execute-batch-operations-using-web-api)
- [Batch Request to Create, Update and Delete records in Dynamics 365 CE — Nebulaa IT Solutions](https://nebulaaitsolutions.com/blog/batch-request-to-create-update-and-delete-records-in-dynamics-365-ce)
