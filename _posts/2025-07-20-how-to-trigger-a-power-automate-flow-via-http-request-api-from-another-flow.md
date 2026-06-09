---
post_id: "048"
layout: post
title: "How to Trigger a Power Automate Flow via HTTP Request (API) From Another Flow?"
date: 2025-07-20 17:41:00 +0000
category: Power Automate
image: assets/images/048/img_453fc33dd7.jpg
categories: ["Power Automate", "Dataverse", "Microsoft Flows"]
---
Have you ever wanted to call one Power Automate flow from another using a custom API endpoint? Yes, it’s possible! In this article, I'll explain how to build and invoke a Power Automate flow using HTTP triggers.

- [Overview](#overview)
- [Step 1: Creating the Core Flow (API Endpoint)](#step-1-creating-the-core-flow-api-endpoint)
- [Step 2: Creating the Invoker Flow](#step-2-creating-the-invoker-flow)
- [Execution \& Scenarios](#execution--scenarios)
  - [Positive Scenario](#positive-scenario)
  - [Negative Scenario 1: Missing Required Field](#negative-scenario-1-missing-required-field)
  - [Negative Scenario 2: Invalid Lookup Value](#negative-scenario-2-invalid-lookup-value)
- [Conclusion](#conclusion)

## Overview

To achieve this, we'll set up two flows:

1.  Core Flow - Contains the main logic to create a Dataverse account.
2.  Invoker Flow - Triggers the core flow using an HTTP POST request

We'll walk through how to:

-   Set up the HTTP-triggered core flow.
-   Use an HTTP action to call the core flow.
-   Handle success and failure responses.

## Step 1: Creating the Core Flow (API Endpoint)

1.  Navigate to Add New → Automation → Instant Flow in Power Automate.  
[![]({{ site.baseurl }}/assets/images/048/img_adf6be7d5c.png)]({{ site.baseurl }}/assets/images/048/img_adf6be7d5c.png)
1.  Name the flow appropriately.  
[![]({{ site.baseurl }}/assets/images/048/img_a06cc0e4d5.png)]({{ site.baseurl }}/assets/images/048/img_a06cc0e4d5.png)
1.  Select "When an HTTP request is received" as the trigger and click Create.
2.  Configure the HTTP trigger:  
[![]({{ site.baseurl }}/assets/images/048/img_fa409b72e3.png)]({{ site.baseurl }}/assets/images/048/img_fa409b72e3.png)  
    -   Set "Who can trigger the flow?" to Anyone.
    -   Add a sample JSON payload to auto-generate the Request Body JSON Schema.
    -   Set Method as **POST**.
1.  Account Creation Logic:
    
    -   Since "Account Name" is mandatory in Dataverse, add a Condition to check if it's present. add-condition-action.  
[![]({{ site.baseurl }}/assets/images/048/img_cfc4cdf781.png)]({{ site.baseurl }}/assets/images/048/img_cfc4cdf781.png)
    -   If yes, use "Add a new row" (Dataverse connector) to create the account with fields like name, phone, email, fax, and address info.  
[![]({{ site.baseurl }}/assets/images/048/img_e30965c7d6.png)]({{ site.baseurl }}/assets/images/048/img_e30965c7d6.png)
    
1.  Add Response Actions
    
    To ensure the invoker flow receives proper feedback, add two Response actions:
    
    1.  **Success Response:  
        [![]({{ site.baseurl }}/assets/images/048/img_b7459620d5.png)](h{{ site.baseurl }}/assets/images/048/img_b7459620d5.png)  
        **
        -   **Action Name:** SuccessResponse
        -   **Status Code:** 200
        -   **Body:**
        
        ```json
        {
           "createdAccountId": "00000000-0000-0000-0000-000000000000"
        }
        ```
        
        -   Replace the dummy GUID(00000000-0000-0000-0000-000000000000) with the Account ID from the creation step.
        -   Set Run After to trigger only if "Add a new row" is successful.  
            [![]({{ site.baseurl }}/assets/images/048/img_de24780865.png)]({{ site.baseurl }}/assets/images/048/img_de24780865.png)
    2.  **Failure Response:  
        [![]({{ site.baseurl }}/assets/images/048/img_725128fcba.png)]({{ site.baseurl }}/assets/images/048/img_725128fcba.png)  
        **
        -   **Action Name:** FailureResponse
        -   **Status Code:** 500
        -   **Body:**
        
        ```json
        {
          "error": 500,
          "errorDescription": "Account Creation Failed"
        }
        ```
        
        -   Set Run After to trigger if "Add a new row" has failed or timed out.  
[![]({{ site.baseurl }}/assets/images/048/img_40db248152.png)]({{ site.baseurl }}/assets/images/048/img_40db248152.png)
1.  After saving, copy the HTTP URL from the trigger for use in the next flow.  
[![]({{ site.baseurl }}/assets/images/048/img_bb88b10fdf.png)]({{ site.baseurl }}/assets/images/048/img_bb88b10fdf.png)
[![]({{ site.baseurl }}/assets/images/048/img_00fc56d40b.png)]({{ site.baseurl }}/assets/images/048/img_00fc56d40b.png)

## Step 2: Creating the Invoker Flow

1.  Create a new flow: Add New → Automation → Instant Flow
2.  Choose "Manually trigger a flow".
3.  Add an Initialize Variable action:  
    [![]({{ site.baseurl }}/assets/images/048/img_b0e75d0261.png)]({{ site.baseurl }}/assets/images/048/img_b0e75d0261.png)  
    -   **Name:** createAccountPayload
    -   **Type:** String
    -   **Value:**
        
        ```json
        {
          "name": "OzMetals Manufacturing",
          "phone": "+61 3 9010 1234",
          "website": "https://www.ozmetals.com.au",
          "fax": "+61 3 9010 1200",
          "address1_street1": "10 Industrial Drive",
          "address1_street2": "Sector B",
          "address1_street3": "Manufacturing Hub",
          "address1_city": "Melbourne",
          "address1_state": "Victoria",
          "address1_postalcode": "3000",
          "address1_country": "Australia"
        }
        ```
        
4.  Add an HTTP action:  
    [![]({{ site.baseurl }}/assets/images/048/img_e66feba3c2.png)]({{ site.baseurl }}/assets/images/048/img_e66feba3c2.png)  
    -   **Method:** POST
    -   **URI:** Paste the copied URL from the core flow.
    -   **Headers:** Content-Type: application/json
    -   **Body:**
        
        ```js
        json(variables('createAccountPayload'))
        ```
        
    -   **Authentication Type:** None  
[![]({{ site.baseurl }}/assets/images/048/img_e5fe5cc130.png)]({{ site.baseurl }}/assets/images/048/img_e5fe5cc130.png)
    -   Save and run the flow.

## Execution & Scenarios

### Positive Scenario

1.  Trigger the Invoker Flow manually.
2.  Check that the flow succeeds.
3.  In the Core Flow, confirm that:

-   The payload was received.
-   The condition passed.
-   The account record was created.
-   The response includes the createdAccountId.

[![]({{ site.baseurl }}/assets/images/048/img_c19bf53b41.png)]({{ site.baseurl }}/assets/images/048/img_c19bf53b41.png)  

### Negative Scenario 1: Missing Required Field

Update the createAccountPayload by removing the name field. Since it's mandatory, the core flow will skip account creation. If there's no action in the "No" branch, the flow will end silently.

### Negative Scenario 2: Invalid Lookup Value

In the Core Flow, try assigning an invalid string to a lookup field (e.g., "Primary Contact"). The action will fail, triggering the FailureResponse with the defined error message.

[![]({{ site.baseurl }}/assets/images/048/img_6f82179d86.png)]({{ site.baseurl }}/assets/images/048/img_6f82179d86.png)

## Conclusion

This method is powerful and flexible - similar to using Dataverse actions - but with the benefit of calling from any external system like Postman, JavaScript, or .NET. However, keep in mind: HTTP endpoint URLs are environment-specific, so it's best to use environment variables to store them.

Have a great day!