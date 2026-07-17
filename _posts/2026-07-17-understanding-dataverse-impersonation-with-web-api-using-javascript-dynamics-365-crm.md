---
layout: post
post_id: '079'
title: Understanding Dataverse Impersonation with Web API using JavaScript - Dynamics 365 CRM
date: 2026-07-26T23:11
image: /assets/images/079/1000122786.png
description: Learn how to implement user impersonation in Microsoft Dynamics 365 CRM and Dataverse using Web API and JavaScript.
meta_keywords: Dynamics 365 CRM impersonation, Dataverse impersonation, Dynamics 365 Web API impersonation, prvActOnBehalfOfAnotherUser, Delegate security role, Dynamics 365 security roles, createdonbehalfby, modifiedonbehalfby
category: Dynamics 365 CE
read_time: 10 mins
published: true
---

If your user account executing the code has the necessary privileges, it can perform certain operations on behalf of another user. Impersonation involves two users, where **User A** executes the code to perform an operation on behalf of **User B**.

![Delegate Security Role](/assets/images/079/delegate-security-role-impersonation.png)

In this scenario, **User A** should have the `prvActOnBehalfOfAnotherUser` privilege, which is included in the **Delegate** role. The set of privileges required to modify data is the intersection of the privileges possessed by the user who has the Delegate role and the user being impersonated. For example, Tom is allowed to create an Account on behalf of John only if John has the **Create** privilege on the **Account** table.

To impersonate a user using the Web API, we have to pass a header with the `azureactivedirectoryobjectid` of the user on whose behalf we are executing the operation. Below is the syntax for the request.

```plain
Method: POST 
URL: [Organization URI]/api/data/v9.2/accounts

Headers:{
  "Accept": "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "OData-MaxVersion": "4.0",
  "OData-Version": "4.0",
  "CallerObjectId": "aaaaaaaa-0000–1111–2222-bbbbbbbbbbbb"
}

Body:
{"name":"Sample Account"}
```

In such scenarios, if you want to find out who actually created the record and who was impersonated, you can use the URL below.

```plain
[Organization URI]/api/data/v9.2/[Entity Logical Name](00000000-0000-0000-000000000003)?$select=name&$expand=createdby($select=fullname),createdonbehalfby($select=fullname),owninguser($select=fullname)
```

In `createdby`, you can see the impersonated user, but if you check the `createdonbehalfby` field, you can identify the user who actually created the record. The same applies to the `modifiedby` and `modifiedonbehalfby` fields.

Refer to the code below for a demonstration of Web API impersonation using JavaScript.
<script src="https://gist.github.com/tamilarasu-arunachalam/9dfede0da16a7edf1e16cd3db441e4d0.js"></script>
Refer to the below GIF for a demonstration of Web API impersonation.
![Dataverse Impersonation Web API JavaScript](/assets/images/079/recording.gif)
