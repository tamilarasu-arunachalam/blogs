---
post_id: "049"
layout: post
title: "How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?"
date: 2025-07-27 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dataverse", "Dynamics 365 CE", "Dynamics 365 Customer Service", "JavaScript", "Model Driven Apps", "Web resource"]
---

<div><img border="0" src="{{ site.baseurl }}/assets/images/049/img_e80e5e6282.gif" alt="How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?"></div><p>
  Working in Customer Service Workspace can feel like juggling multiple
  cases/conversations at once. Ofcourse we can open records from view which will
  open in the new workspace tab. I was thinking of opening multiple records on
  multiple tabs on a single click.</p>
<ul>
  <li><a href="#what-s-customer-service-workspace-and-why-should-you-care-about-tabs">What's Customer Service Workspace and Why Should You Care About Tabs?</a></li>
  <li><a href="#quick-clarification-session-vs-tabs">Quick Clarification: Session vs Tabs</a></li>
  <li><a href="#example-scenario">Example Scenario</a></li>
  <li><a href="#demonstration">Demonstration</a></li>
  <li><a href="#conclusion">Conclusion</a></li>
</ul>
<h2>
  What's Customer Service Workspace and Why Should You Care About Tabs?
</h2>
<p>
  As we all know customer service agents are the primary users for customer
  service workspace. They'll be working on multiple cases/conversations at
  once. If they want to cross check or refer any other similar cases they have
  to switch back to view and open every case records. But my agenda is to cut
  down the navigation time.
</p>
<h2>
  Quick Clarification: Session vs Tabs
</h2>
<p>Before we jump into the code, let's clear up some terminology:</p>
<p>
  Session tabs are like your main workspaces - think of them as different
  projects you're working on Workspace tabs are the individual records
  within each session - like the specific cases under My Cases.
</p><p><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipD_BOYeG2jytDEL-vLPWQF9mBFrHk1cOgQPTMrWJJ2fkW6lIDVuCWXWVx0xkrMcSSjk785ktpXp04hJa7VD13DzQNkqhlSR6dc0pnBVxtxUUiJnoQAGMrGyW05E2NAKuB4bU8fvYIVEAot4qGbwxTmySiAvkAyuK8UVPOIJC5iqQ5aNHN01cybc7g314/s1839/my-active-cases.png"><img border="0" src="{{ site.baseurl }}/assets/images/049/img_3e35f122c9.png" alt="my active cases"></a></p>
<h2>Example Scenario :</h2>
<p>
  Opening Multiple Case(s) at once a command button is clicked. Let's say an
  agent is looking at a support case and wants to quickly open the reference of
  the similar cases from the view to cross check.
</p>
<h3>Steps:</h3>
<ol>
  <li>Create a Web Resource
  <ul>
  <li>I have created a JavaScript web resource which have a function named
      OpenNewWorkspaceTab. It will accept only one parameter which is
      <strong>SelectedControlSelectedItemIds</strong>. Below is the code.</li>
    
    <li>Save and Publish the Web Resource</li>
  </ul>
  </li>
  <li>Create and Configure the Button:
    <ul>
      <li>
      First of all, create a command button named "<strong>Open in New Tab</strong>" in the maker portal.<br></li>
      <li>
      Refer the below link to know how to create or customize the command
      buttons
      <a href="https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer">https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/use-command-designer</a>
  </li>
        <li>
      I have configured a button which will execute the JavaScript function when
      clicked.
  <br><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcPjZoDh0udLbtXF4s6122RdzvESG6bdEvsXENdF_QDQQJiiZzsULdHahgG2PGf3aegpYo9b_HnAFWCSOv7o9oTEkGS1ojBJCpU4X4KIh1wMIef8TL_LJ_oCewbPOZKMa3G_aYN2s8DPFIZ8bZFw4h0xcSOGJkgEsNWYSNKwpWI8eFketB2a7ftDIhOvY/s1418/configure-command-button-1.png"><img border="0" src="{{ site.baseurl }}/assets/images/049/img_5799897ed4.png" alt="configure command button model driven apps"></a></li>
      <li>
      As the function requires a parameter, add the parameter "<strong>SelectedControlSelectedItemIds</strong>". The
      button's visbility is based on the record selection, If one or more
      records will be selected, the button is visible otherwise it is hidden.<br><div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj7xvJxQsR7fgxnE7vai6apCojuBmu0fNakdfOLecFT8OM5Ich6ITktEzLXG-s2zA52qOiWpJqItWtQBzTMhLHkxMTCq4n0ec2lPRgScEOBHVV4r3HKPGvS5RbukvooKYhZyTSSxlN9QnM8N5_4Wz_db-EXUfcVzEFuoXET4vjHvSPtljo5Gtgx4i6EU8/s1409/configure-command-button-2.png"><img border="0" src="{{ site.baseurl }}/assets/images/049/img_0e9b9167d5.png" alt="configure command button model driven apps"></a></div><br></li>
      <li>
    I have did that using the Show on condition from formula option in
    Visibility field. And add the below formula to make the button visible based
    on condition.(Refer the formula bar in the above image for the same)</li>
      <pre><code>CountRows(Self.Selected.AllItems)&gt;0
</code></pre>
      <li>Save and Publish the editor.<br></li>
    </ul>
  </li>
</ol>
<h2>Demonstration</h2>
<p>
  I have selected three random cases from the view and you'll get to see the
  button visible.
</p><div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNsEcc2Vuf5kE2h_t_j7rrYXhvbxHfbSbL4KJkJb5YbjTH80AiZMDLakqR7WQGGV311V7hDga_o6-H0-fMj5wyP_lCFMBnIz2O0XTllzT9N4S1ADRvC6BgXHzm05RjrSiqQuYbuCMb7gDiQTOsE1M2UqfaOhZ1JB7lH-pQB7uIiZfjYDQlBqFZpc2yVII/s1829/my-active-cases-selected.png"><img border="0" src="{{ site.baseurl }}/assets/images/049/img_ade7ed1b78.png" alt="How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?"></a></div>
<p>
  Click on the button and it will popup a dialog to confirm the opening of new
  tabs.</p><div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5xa2lqFyhkiigYQWlc6AssG4BUBRnq9cK2zm7fgRe4mn74omBV3G2M5clk1NTAXhF3V1XxOh6ZrYzUg184B0f0_9deRPOaXzILe88OupPmmeK2B4x8kDhlMemlPM3pZ-dTdjvSjbTKbhQECd8FtO2e_Glz3X_3vn2kr04Jtzo7z0BBqFHniOkrlxemCI/s1826/confirm-to-open-new-tab.png"><img border="0" src="{{ site.baseurl }}/assets/images/049/img_74a869e309.png" alt="How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?"></a></div><p>If ok is clicked, it will open the new tabs.</p><div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhU07UgcC7-tdnm5a4KOwDGw5JgAYQQf2Hs2llvugLf-J5yD_PPntZvZarSshU1v9y8tiRzdrbZh90SaRcaJL4NiZnzcnb5OyXIz4i7EMX8KIqRQkWVotDBegBsVYxoPYQwcLEQVD5zb4LQC3yw18qxQf7jmoYpdesPvJzUFbCRARgzN_Cos8I4oU5P26c/s1829/final-opened-tabs.png"><img border="0" src="{{ site.baseurl }}/assets/images/049/img_e1dc1fbb33.png" alt="How to Open Multiple Workspace Tabs in Dynamics 365 Customer Service Using JavaScript?"></a></div>
<h2>Conclusion</h2>
<p>
  I hope this workaround makes navigating the Customer Service Workspace a bit easier for you. It’s a great approach when you’re dealing with just a few records. But if the number of records gets too high, it could slow things down. Also, from what I’ve heard, there might be a limit on how many tabs you can open in the workspace - so it’s a good idea to use this method thoughtfully.
</p><p><b>References:</b></p><p><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions#grid-values">https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/pass-data-page-parameter-ribbon-actions#grid-values</a></p><p><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog">https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog</a></p><p><a href="https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/createtab">https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/createtab</a></p>
<p>Have a good day!</p>
