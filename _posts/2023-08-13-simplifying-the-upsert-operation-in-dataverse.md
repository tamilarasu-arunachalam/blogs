---
post_id: "028"
layout: post
title: "Simplifying the Upsert Operation in Dataverse"
date: 2023-08-13 17:41:00 +0000
category: Dataverse
image: assets/images/028/img_1298e796a2.png
categories: ["Dynamics 365 CRM Online", "JavaScript", "Power Automate", "Web resource", "Dataverse", "Plugins"]
---
- [Upsert using Power Automate](#upsert-using-power-automate)
- [Upsert using JavaScript](#upsert-using-javascript)
  - [Best Practices:](#best-practices)
- [Upsert using Plugins](#upsert-using-plugins)
- [Conclusion](#conclusion)

According to database nomenclature, Upsert is what really means to update or insert a record. During this operation, the resultant record gets created if it doesn't exist or gets updated if it already exist. By default, Dataverse will do the upset operation while using the Web API PATCH. But we must be aware of when do we need upsert and when it is not needed. Upsert can be used in complex data integration processes where we won't know the record already exists or not. At this kind of scenario's upsert would be a great pick. For more details. Please refer [Microsoft's Official Documentation](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/use-upsert-insert-update-record?tabs=webapi) 

#### Fact: 

We can even create records with the custom GUID (not the auto-generated one) while performing Upsert Operation. I have tested with the 11111111-1111-1111-1111-111111111111, and guess what? It worked.

### Upsert using Power Automate

We can use Power Automate to do the upsert operation with the Dataverse connector. As the 'update a row' step actually creates the PATCH request to the Dataverse API. Create an instant flow and add the next step with 'Update a row' in Dataverse connector. Use any new GUID and a name. Save and Run the flow. The flow will get executed, and the record is created with that particular GUID we used in the flow. 

[![]({{ site.baseurl }}/assets/images/028/img_c02ddce7d2.png)]({{ site.baseurl }}/assets/images/028/img_c02ddce7d2.png)

### Upsert using JavaScript

    We can do the upsert operation through JavaScript(JScript) for Power Apps. But unfortunately, it is not supported by the Xrm Web API (Client API). But we can use JavaScript's fetch request to accomplish the same. We need to do the below steps to perform upsert operation using JavaScript.

-   Create a JavaScript Web Resource under any of your solution.
-   Add the below function to the Web resource, then save and publish it.

<script src="https://gist.github.com/tamilarasu-arunachalam/b1210e177ef84d0cf6c50db6558cc073.js"></script>

-   Add the function to any of the form event. I have added it in on-load of account form.

#### Best Practices:

-   If you are not sure about the existence of the record (thought of doing upsert), you can use PATCH request without any header.
-   If you only want to update a record in Dataverse, you must use the PATCH request with the header If\-Match: \*.
-   If you want to create a record using PATCH request, you must use the header If-None-Match : \*.

### Upsert using Plugins

We can perform upsert via plugins using UpsertRequest object. In this article, I have created a plugin to perform upsert request on accounts table. The below is the code.

<script src="https://gist.github.com/tamilarasu-arunachalam/3538fe2d5862cd5700e6090e9baa14a2.js"></script>

### Conclusion

While using Upsert we must make sure that the updation of the existing record will not affect any other record though associations with any kind of relationship(1:N or N:N). Priorly analyse the situation whether to use upsert or not.

Have a great day!