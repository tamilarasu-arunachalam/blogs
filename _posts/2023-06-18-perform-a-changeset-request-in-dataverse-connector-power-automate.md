---
post_id: "023"
layout: post
title: "Perform a changeset request in Dataverse Connector | Power Automate"
date: 2023-06-18 15:39:00 +0000
category: Power Automate
image: assets/images/023/img_0437cd6c48.png
categories: ["Power Automate", "Dataverse"]
---
As you all know, Power Automate's action depends on the previous action or trigger. We can even configure the action to run even on the failure of the previous action by using configure run after in settings. But what if we have a scenario of performing multiple actions bundled inside a change set. If any of the action in the set failed, rollback all the completed actions.

**_For Example:_** Creating an Account and Contact in the same set inside a flow. If the creation of contact failed, rollback the creation of account also (actually it got succeeded).

    For this kinda scenario, Dataverse connector had a special action which is **'Perform a changeset request'**. The changeset request really means of sending multiple requests in a single transaction. We can add other Dataverse actions instead of fields inside this action, it supports three actions such as add, update and delete. The operations inside the changeset request are called atomic, because the whole transaction gets rollbacked if any of the action inside the request is failed.

    In this article, I have demonstrated how to use perform changeset request action inside a Power Automate Flow.

[![]({{ site.baseurl }}/assets/images/023/img_514b42837f.png)]({{ site.baseurl }}/assets/images/023/img_514b42837f.png)

-    To create a flow, go to make.powerapps.com 🡲 Solutions 🡲 +New 🡲 Automation 🡲 Cloud Flow 🡲 Instant.

[![]({{ site.baseurl }}/assets/images/023/img_3340ec6d7e.png)]({{ site.baseurl }}/assets/images/023/img_3340ec6d7e.png)

-   A prompt opens for selecting the name of the flow and trigger. Give a name and choose manually trigger a flow, then click Create.

-   As it is an Instant flow, it came up with the respective trigger which we selected in earlier steps. Click on Add an action and select Dataverse. It will show many actions which belongs to Dataverse.

[![]({{ site.baseurl }}/assets/images/023/img_9b7fcfea7b.png)]({{ site.baseurl }}/assets/images/023/img_9b7fcfea7b.png)

-   In the listed actions, select Perform a changeset request, and it will transform into a scope like action as in the below image.

[![]({{ site.baseurl }}/assets/images/023/img_fd0f147a9b.png)]({{ site.baseurl }}/assets/images/023/img_fd0f147a9b.png)

-   Click on the Add an action inside the action and select add a new row. Select table name as accounts and add the necessary fields.

[![]({{ site.baseurl }}/assets/images/023/img_c984496e33.png)]({{ site.baseurl }}/assets/images/023/img_c984496e33.png)

-   Add the another add a new row action inside the changeset and set the table name as contacts and fill those necessary fields.

_**Note:**_ The fields from the previous actions as dynamic contents are not available inside the changeset request.

[![]({{ site.baseurl }}/assets/images/023/img_4bffb4ed3f.png)]({{ site.baseurl }}/assets/images/023/img_4bffb4ed3f.png)

-   Save the flow and Click on Run
-   The flow ran successfully, and the result is in the below image.

[![]({{ site.baseurl }}/assets/images/023/img_44ea1043f1.png)]({{ site.baseurl }}/assets/images/023/img_44ea1043f1.png)

-   For the demonstration purpose, I did a small mistake in the creation of contact to make the flow fail.

[![]({{ site.baseurl }}/assets/images/023/img_fce8d4a35c.png)]({{ site.baseurl }}/assets/images/023/img_fce8d4a35c.png)

-   Have you noticed that in the above image, the creation of contact failed as expected. But it also rollbacks the creation of account too. Because they are inside the changeset request.
-   As they are in a single transaction, it rollbacks the whole transaction.

Have a good day!