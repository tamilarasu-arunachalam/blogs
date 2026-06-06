---
post_id: "051"
layout: post
title: "Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)"
date: 2025-11-02 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dataverse", "Dynamics 365 CE", "Dynamics 365 CRM Online", "Dynamics 365 Web API", "JavaScript", "Model Driven Apps", "Power Apps", "Web resource"]
---

<img alt="Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)" src="{{ site.baseurl }}/assets/images/051/img_81b48ca268.gif" style="display: none;" />
<p style="text-align: justify;">
  Recently, I worked on a Dynamics 365 customization where I needed to associate
  selected subgrid records with a parent record - specifically, linking multiple
  contacts to an account using a custom button.
</p>
<p style="text-align: justify;">
  Initially, I thought of using Power Automate or a custom plugin with an
  action, but after exploring more, I discovered that the XRM WebAPI already
  provides built-in methods to associate and disassociate records. This approach
  turned out to be much simpler and faster.
</p>
<h2>Scenario Overview</h2>
<p>
  I had a Contact subgrid on the Account form showing "All Active Contacts."
</p>
<p>The goal was simple:</p>
<ul>
  <li>Select a few contacts from the subgrid.</li>
  <li>Click a custom button labeled "Associate."</li>
  <li>
    Automatically link those selected contacts to the current account record.
  </li>
</ul>
<p style="text-align: justify;">
  To make it more interactive, I also added another subgrid showing only the
  related contacts for that account.
</p>
<p style="text-align: justify;">
  When I clicked the "Associate" button, the selected contacts appeared
  instantly in that related subgrid.
</p>
<h2>Associate Records using XRM WebAPI</h2>
<p>
  The Associate action works perfectly for relationships such as One-to-Many and
  Many-to-Many.<br />
  Here’s the full JavaScript code I used:
</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/2f017b3dba30b252a12fbbccf3af5884.js?file=associateContactWithAccount.js"></script>
<h3>Demonstration</h3>
<ol>
  <img alt="Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)" src="{{ site.baseurl }}/assets/images/051/img_29fa5b8871.png" />
  <li>
    Added two Contact subgrids on the Account form:
    <ul>
      <li>One shows All Active Contacts.</li>
      <li>Another shows Related Contacts.</li>
    </ul>
  </li>
  <img alt="Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)" src="{{ site.baseurl }}/assets/images/051/img_1238f49940.png" />
  <li>Created a custom subgrid button labeled "Associate".</li>
  <img alt="Associate and Disassociate Records in Dynamics 365 using XRM WebAPI (JavaScript)" src="{{ site.baseurl }}/assets/images/051/img_49e580ab1a.png" />
  <li>
    On clicking it, the selected contacts from the active view got linked with
    the account — instantly reflecting in the related subgrid.
  </li>
</ol>
<h2>Disassociate Records using XRM WebAPI</h2>
<p>
  Just like the associate action, we can disassociate records easily with a
  similar approach.<br />
  Here's the sample code:
</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/2f017b3dba30b252a12fbbccf3af5884.js?file=disassociateContactWithAccount.js"></script>
<h3>Reference</h3>
<ul>
  <li>
    <a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute#associate-a-record">Associate Records using XRM WebAPI - Microsoft Docs</a>
  </li>
  <li>
    <a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-webapi/online/execute#disassociate-a-record">Disassociate Records using XRM WebAPI - Microsoft Docs</a>
  </li>
</ul>
<p style="text-align: center;"><i>Have a great day!</i></p>