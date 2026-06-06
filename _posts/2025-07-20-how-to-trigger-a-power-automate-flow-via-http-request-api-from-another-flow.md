---
post_id: "048"
layout: post
title: "How to Trigger a Power Automate Flow via HTTP Request (API) From Another Flow?"
date: 2025-07-20 17:41:00 +0000
category: Power Automate
categories: ["Power Automate", "Dataverse", "Microsoft Flows"]
---

<div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1h94a9vZVre49xLSendVJcedsFMHfffJmMJ-AL9vlC3b1Q7x1IZ8CC72uiyJ8sAciFD5aTgGTCMH3ojJa5UBkC_czZKauVg2TGPg6hoPCRjCb1Wh9JdamGUyn9poXrvnoGteOXfxcRTYBXlBsASl1vHumtv6n7YpU447vfVt89k5Fthm8_C1rOJ76W84/s736/0e8b7d2c53195177a326670609fcb7ea.jpg"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_453fc33dd7.jpg"></a></div><p>
  Have you ever wanted to call one Power Automate flow from another using a
  custom API endpoint? Yes, it’s possible! In this article, I'll explain how to
  build and invoke a Power Automate flow using HTTP triggers.
</p>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#step1">Step 1: Creating the Core Flow (API Endpoint)</a></li>
  <li><a href="#step2">Step 2: Creating the Invoker Flow</a></li>
  <li><a href="#exec_and_scenarios">Execution &amp; Scenarios</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
</ul>
<h2>Overview</h2>
<p>To achieve this, we'll set up two flows:</p>
<ol>
  <li>Core Flow - Contains the main logic to create a Dataverse account.</li>
  <li>Invoker Flow - Triggers the core flow using an HTTP POST request</li>
</ol>
<p>We'll walk through how to:</p>
<ul>
  <li>Set up the HTTP-triggered core flow.</li>
  <li>Use an HTTP action to call the core flow.</li>
  <li>Handle success and failure responses.</li>
</ul>
<h2>Step 1: Creating the Core Flow (API Endpoint)</h2>
<ol>
  <li>Navigate to Add New → Automation → Instant Flow in Power Automate.<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfk_EUf7s5rp2b4AEhJMgw3BxfDbOKUcw6Hi6ndZY-0NdEPA_gAI9h-tP6W5u1LKxK3yUadGvDn5ZgYMcX5OU5tuS_8WH4wuXoRoqrmN8LXItEF9vJY4NTmIVbzAPztdxuF3Uu1Mz_z4TKS6n3KS7hYCV80YUTg5JMPD3tFoSgXTS4qgcPUVOcqljhbqs/s1352/build-an-instant-flow-1.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_adf6be7d5c.png"></a></li>
  <li>Name the flow appropriately.<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqYmSRcC81nYfe7lD9JsILK9cUYSxGZvYvY1HhF39F4KZdUX596eZyyf5HBESkhyB3-8ICWJcOClonSWP3DInW13EEXQ2Rx-QcuHxzciuuWD6ZFedD327fO8VMPJJTvZzFwoGxpbxvTm-VlUEPUno9-1iBjWBe-xsi12_2jBT8B8DKLQ5t3iAY8oRHfts/s1346/build-an-instant-flow-2.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_a06cc0e4d5.png"></a></li>
  <li>
    Select "When an HTTP request is received" as the trigger and click Create.
  </li>
  <li>
    Configure the HTTP trigger:
    <br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXqr1w9d9OhgQD3hwiVTm3VWIx1b4IW5RXMJej6PhLqIrihNvft9-LmVIt3v-SQCaKFF87smH4VbyC2-p0S3auj2qrUPTo3w20mDXntEm1QogQ5Aki6eBvmMmz0x3sZm31TNJg_m4x82Gl1QVBeNX1cXLaFfl-b3i3HbgaxsuOy4dgNEeBR_Kzaj5trVk/s909/when-a-http-request-is-received-1.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_fa409b72e3.png"></a><br><ul>
      <li>Set "Who can trigger the flow?" to Anyone.</li>
      <li>
        Add a sample JSON payload to auto-generate the Request Body JSON Schema.
      </li>
      <li>Set Method as <strong>POST</strong>.</li>
    </ul>
  </li>
  <li>
    Account Creation Logic:
    <ul>
      <li>
        Since "Account Name" is mandatory in Dataverse, add a Condition to check
        if it's present. add-condition-action.<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTIHGdJnPYSSX81Ex44igfVuhCvK9cbEb3iYFTtIwlUOk8ktP7mwhPtVKJGcif-MR0BAXjSV0arg9lYTYLayarEZDjGEmZNjrKhnLk3n8mIjK1ZRe9s_EURsKoLDekQf_FCEwq2UZI5pGHeSVOZ7NL7VMuy2cgio7UvB2VRErZnhNY7nyzAOeInXwxkq8/s1562/add-condition-action.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_cfc4cdf781.png"></a></li>
      <li>
        If yes, use "Add a new row" (Dataverse connector) to create the account
        with fields like name, phone, email, fax, and address info.<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhti1OeGoDPQ-LBdUFHYhSk28tt1D_zmAqQkASwTgEY4Nv_B2knmPxJpvHf5iqFQmez8F6cwDk3-WttZTgcHZKppftqHiYRudD09QfOeQz65jTrxdp4gswbgSCqLfGoOmZMht49QoJzeQQ1CT-EPo8fXnQvbPamzoYpqQmdRZnk9bS7yHHg6V-hIqfKdLs/s843/add-new-row-dataverse-action.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_e30965c7d6.png"></a></li>
    </ul>
    <p></p>
  </li>
  <li>
    Add Response Actions
    <p>
      To ensure the invoker flow receives proper feedback, add two Response
      actions:
    </p>
    <ol>
      <li>
        <strong>Success Response:<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1ZOL5FFh6I0vFzFgy8zeMN7wDIr4XOxzo8WAH3iyQUMvXpngrMhyphenhyphenPsNpFJf87aulCe6PLzF5E_R9KfL0l1y08ZF5dzsYR1SMHLeB1ryxONa1FJFtBLbNxOQ-Cx8TxXTpSSxM_nRaM-8NeXr2hUTJ81MXMufZRHdNqy2CpFJnc_woWNkita-1LBKOb0tQ/s1041/success-response.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_b7459620d5.png"></a><br></strong>
        <ul>
          <li><strong>Action Name:</strong> SuccessResponse</li>
          <li><strong>Status Code:</strong> 200</li>
          <li><strong>Body:</strong></li>
          <pre><code>{
   "createdAccountId": "00000000-0000-0000-0000-000000000000"
}</code></pre>
          <li>
            Replace the dummy GUID(00000000-0000-0000-0000-000000000000) with
            the Account ID from the creation step.
          </li>
          <li>
            Set Run After to trigger only if "Add a new row" is successful.
          <br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjULnYIBThbRM5-w6IN5YnrZFhqWWih2l74EQJuz8Hv6FB2TmagVWJWC-wIcyTspNVGb-MyjP6iGWfdT2JRlVtAf1rS3J8L9PROBeND2LXpP3R6d2exq3mU0BQvmNT68nyH-LF4FrkSCIxADtH853d-pXhUUkR0prEAXAeO1TFLqQfnyNwx3wE76bLlpmE/s849/run-after-for-success-response.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_de24780865.png"></a></li>
        </ul>
      </li>
      <li>
        <strong>Failure Response:<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3U-R_GWFfgTOLZXDVhxKHkLofKiBDvUUNSTCIE5ZlveXtg8DxkThIGMr0zptIWfABBP2mzDoIeT8P3DiSefgQ1UWH1TNPDOxyehyphenhyphenc4QBU6TCGwjrgki78rHnIHK-DLravdvw5D-QQ5XjLVIxiBuM4sLmxCBzMPt5tzUWxSB9LRqGJQLAs4pK14bnxFGI/s819/failure-response.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_725128fcba.png"></a><br></strong>
        <ul>
          <li><strong>Action Name:</strong> FailureResponse</li>
          <li><strong>Status Code:</strong> 500</li>
          <li><strong>Body:</strong></li>
          <pre><code>{
  "error": 500,
  "errorDescription": "Account Creation Failed"
}</code></pre>
          <li>
            Set Run After to trigger if "Add a new row" has failed or timed out.<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXLHuGpt9-ZYNdr0hFYiGvsnnvKfdJ6hvH5Pt_iadrkZEHA773z86ZzGRk40mINkhV-ruPwmwcKqVW4HhD2gXySwE2jomHvLhxafPjA5_4V9I52Rq-emr1DKNiiOQmxB7jiy5a6jS1ZOxbLJ0pFhcoHASzIIj0OkjVSVSG5_EYqLk8IW3_AeF92Ku4Jwg/s849/run-after-for-failure-response.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_40db248152.png"></a></li>
        </ul>
      </li>
    </ol>
  </li>
  <li>
    After saving, copy the HTTP URL from the trigger for use in the next flow.
  <br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijhWzxbUhgrgpaULLrul7fygnj7r6gOpN0KNuHOXH5La1V7jAOEFsj-aBsbOXExlxlGWtf9Kwi7VD4FcHnfT0WkElrhkqZ0o3o_yrBjaSmH5MFRPfEif6KhTXe23bds1N6WxgC2QwCdDS59yox0-mmXnNTynE23irdRrUEuJzH8WgatJvwxS280Ow-OQo/s921/api-url-generatedafter-saved-the-flow.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_bb88b10fdf.png"></a><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV1fm6ZqSFLnOcgL0mK8JGJhBHMeqcoRm8tXyq-30J76IUl0D4TxRVejgE8GkXYPg-uWjDjdNTVywSIOjmu5nP3-ZeR7sy8aJ_bMmEABJQdAuVu5vLkLYqLdosSXJmAUNdZWzUXrfBbCmD2DViDh-Z-d9NpcC1_aR7tS-0_p7-z3o7OhJgkL3orwH6wks/s1173/final-flow-structure-main-flow.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_00fc56d40b.png"></a></li>
</ol>
<h2>Step 2: Creating the Invoker Flow</h2>
<ol>
  <li>Create a new flow: Add New → Automation → Instant Flow</li>
  <li>Choose "Manually trigger a flow".</li>
  <li>
    Add an Initialize Variable action:
    <br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYzi04MULxjJfWUELmycRG1M4XSeLuUArcTRd77IZrB5vO8-tm7k76wmJmAS07Qjt0MW2OA33xIz4y7aFHyoJoF6EiMTHnxv4dP0_qm3PuBnF0X6iG6nabPj7MPkO88x7oNamSkAVDLMzg24ySSHbnv2H0hM9d6TDhkO8yPEyzzvTXVo8Ywk-Mq8bdySM/s875/init-var-create-account-payload.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_b0e75d0261.png"></a><br><ul>
      <li><strong>Name:</strong> createAccountPayload</li>
      <li><strong>Type:</strong> String</li>
      <li>
        <strong>Value:</strong>
        <pre><code>{
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
}</code></pre>
      </li>
    </ul>
  </li>
  <li>
    Add an HTTP action:
    <br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhegvb-12n-4EA1EYZ_ZsjGP8VJzbMHXD7KPmFbJx2YJPgXa6ma0LO8uvSxyp_HlBwRW8qsfWuuEb9-xyUNd1ZBIRtmRLHQO-G5-sBL8lRyY2d5FVJ0R7B03psdkH36YcnGKDrTFSRLpREdVz-PjwyXV-5g1QcSWsTNA24Y8gRYCIGnAMxqxBy2u_2_D9U/s941/before-http-call-configuration.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_e66feba3c2.png"></a><br><ul>
      <li><strong>Method:</strong> POST</li>
      <li><strong>URI:</strong> Paste the copied URL from the core flow.</li>
      <li><strong>Headers:</strong> Content-Type: application/json</li>
      <li>
        <strong>Body:</strong>
        <pre><code>json(variables('createAccountPayload'))</code></pre>
      </li>
      <li><strong>Authentication Type:</strong> None<br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ0QpxZNx32Ki6jFAXI3b50YiHvCpGAGFiewf0uO7vgaX3aygSjUNBc_kY6WWfDmJw7wOKUKSeNzmzOATRZxNQsFX62CLAN8LGkSx0J8QWHR7DJpISZe0v0dRCOjEM8AJ8sdrcIuoiAVINIk6vjnr6sqikn5iNthM812IU-w51NbxQpLlJ6NJp_OAzNA0/s1131/add-payload-expression-to-request.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_e5fe5cc130.png"></a></li>
      <li>Save and run the flow.</li>
    </ul>
  </li>
</ol>
<h2>Execution &amp; Scenarios</h2>
<h3>Positive Scenario</h3>
<ol>
  <li>Trigger the Invoker Flow manually.</li>
  <li>Check that the flow succeeds.</li>
  <li>
    In the Core Flow, confirm that:
    </li><ul>
      <li>The payload was received.</li>
      <li>The condition passed.</li>
      <li>The account record was created.</li>
      <li>The response includes the createdAccountId.</li></ul></ol><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlNs9r3hyphenhyphen7Vrp5o0TgVLrZ7H_l9ozmMM8dPxiJ49Fp-tiEojrzJH9y6pJ29Yh2a8v9h9Dwg_QabDxFrneFpsLb_Bk4lNe2jaGcHViXq-3lQlHeOhL8tHJC8b3pPN41DGFFjmi1hpSO4tFLPwDdHKbevlW0yKfB3Ny44LDPyCfmH9P0vt8uMBDyOE6fE4g/s942/failure-run-response.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_c19bf53b41.png"></a><br><ol>
  
</ol>
<h3>Negative Scenario 1: Missing Required Field</h3>
<p>
  Update the createAccountPayload by removing the name field. Since it's
  mandatory, the core flow will skip account creation. If there's no action in
  the "No" branch, the flow will end silently.
</p>
<h3>Negative Scenario 2: Invalid Lookup Value</h3>
<p>
  In the Core Flow, try assigning an invalid string to a lookup field (e.g.,
  "Primary Contact"). The action will fail, triggering the FailureResponse with
  the defined error message.</p><p><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinKvuYt3wwP-Zt6SwaL5dOG8GU3kDGLmssxGt-eijp9at-xCWPaX1LKdUiyMSEzQg9hnsCHxgwCCJiRq4HshZzKKJqRBQ0Ojl9nVs8BEs6oQl3RM8VVxcMV1arXzbhBkCrdt_YN36DMXKKlXkSsJfSbqkD2kVVBUPlZB-PqkYZf43CWHrtQWByeakNNj4/s909/success-run-response.png"><img border="0" src="{{ site.baseurl }}/assets/images/048/img_6f82179d86.png"></a></p>
<h2>Conclusion</h2>
<p>
  This method is powerful and flexible - similar to using Dataverse actions - but
  with the benefit of calling from any external system like Postman, JavaScript,
  or .NET. However, keep in mind: HTTP endpoint URLs are environment-specific,
  so it's best to use environment variables to store them.
</p>
<p></p><center>Have a great day!</center><p></p>

