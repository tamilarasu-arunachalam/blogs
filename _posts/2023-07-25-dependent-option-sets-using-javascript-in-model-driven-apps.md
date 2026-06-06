---
post_id: "027"
layout: post
title: "Dependent option sets using JavaScript in Model Driven Apps"
date: 2023-07-25 16:58:00 +0000
categories: ["Model Driven Apps", "Power Apps", "Dynamics 365 CE", "Web resource", "Dataverse"]
---

<img border="0" data-original-height="400" data-original-width="700" height="183" src="{{ site.baseurl }}/assets/images/027/img_daf545a6e1.png" width="320" style="display: none;"/><h2><span>Dependent Option sets</span></h2><div><span><span>&nbsp; &nbsp; Option sets which depend on the another option set, and the options vary on the change of the value in parent option set.</span><br /></span></div><p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>We can add options to option sets dynamically using client side scripting. Here I have a scenario of two option set fields, Qualification and Degree. Here, Degree is the dependent on the Qualification.&nbsp;</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieloZNo8gNHQtyOTrDJuH8seqX6UOWq8H0vuTyrYrI1iD4HJEUQzAmCYaMFQ4QAysQN0bNIayshzY-KSEeAqPoS1J_v1Hb97fxC_MN4xTWJDZHDwe3HSiUuGcpDhCvBp_Q39PvduTS5Fd2y37Q1CfyopjWsviUkUJBFLptWGlvg-cPV5J1lNWr8xd8USk/s556/ops-1.PNG" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="232" data-original-width="556" height="168" src="{{ site.baseurl }}/assets/images/027/img_8b50679186.png" width="400" /></a></div><p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>The Qualification field contains two options, UG and PG. The Degree field contains the below options with values as listed in the below table.</p><table><thead><tr><th>Option Text</th><th>Option Value</th></tr></thead>
  <tbody>
    <tr><td>BA</td><td>0</td></tr>
    <tr><td>BSC</td><td>1</td></tr>
    <tr><td>BCA</td><td>2</td></tr>
    <tr><td>BBA</td><td>3</td></tr>
    <tr><td>BCOM</td><td>4</td></tr>
    <tr><td>MA</td><td>5</td></tr>
    <tr><td>MSC</td><td>6</td></tr>
    <tr><td>MCA</td><td>7</td></tr>
    <tr><td>MBA</td><td>8</td></tr>
    <tr><td>MCOM</td><td>9</td></tr>
  </tbody></table><p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>&nbsp;Here we need to make the options of degree field dependent on the selected value from qualification field. I need to create a JavaScript code to demonstrate the same. I have used an object which contains options respective to the qualification. The object is in the below snippet.</p><p style="text-align: justify;"><i><b>Note:</b> It is better you can add the same handler to on-load event to prevent inconsistency issues.</i></p><pre style="text-align: left;"><code>{
  "UG": [
      { value: 0, text: "BA" },
      { value: 1, text: "BSC" },
      { value: 2, text: "BCA" },
      { value: 3, text: "BBA" },
      { value: 4, text: "BCOM" }
  ],
  "PG": [
      { value: 5, text: "MA" },
      { value: 6, text: "MSC" },
      { value: 7, text: "MCA" },
      { value: 8, text: "MBA" },
      { value: 9, text: "MCOM" }
  ]
}</code></pre><p style="text-align: justify;">I have used the below JavaScript code for making the dependent option sets</p><script src="https://gist.github.com/tamilarasu-arunachalam/3348a020486162a594512dd4f4d9e5cd.js"></script><p style="text-align: justify;">For that, I have to set the on-change event on the qualification field and add the JavaScript to the event handler.</p><p style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlNVUymA2RVeH6XReXnY4Kn-yjPTT-2ugZxtZAWuuRH_AZl2w3pY2z0fxkce1QA8NnP3C42OTDkfqrIELF0O9gR0RWR43PJ8ixsf3DEmOfSqNlJBI9VaUUPGC09eykTtVRtFNABrn8YJC5PVwEZbNCdrLfta8NPZ3RvOdL1br44UwGHc9RXDdZQ5luYi8/s313/ops-2.PNG" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="313" data-original-width="312" height="400" src="{{ site.baseurl }}/assets/images/027/img_40b7e3d381.png" width="399" /></a></p>Save and Publish the form. Navigate to the form to check the script. The GIF is attached below.<p style="clear: both; text-align: center;"><img data-original-height="382" data-original-width="552" height="276" src="{{ site.baseurl }}/assets/images/027/img_a997ffa5b2.gif" style="border: 1px solid black;" width="400" /></p><div>Have a good day!</div>