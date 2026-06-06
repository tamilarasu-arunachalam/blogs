---
post_id: "041"
layout: post
title: "Clone a record in Dynamics 365 CE using JavaScript"
date: 2025-02-09 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Model Driven Apps", "Dynamics 365 CRM Online", "JavaScript", "Web resource", "Dynamics 365 CE", "Dynamics 365 Web API"]
---

<img border="0" data-original-height="400" data-original-width="700" height="183" src="{{ site.baseurl }}/assets/images/041/img_8bc1cd0eba.png" style="display: none;" width="320" />
<p style="text-align: justify;">Fellas! Have you ever been in a situation where you needed to create multiple similar records with some fields carrying the same data? I found myself in this exact scenario and thought—why not build a simple templating functionality?</p>
<p style="text-align: justify;">Imagine opening a new record with all the existing data prefilled, making only the necessary tweaks, and saving it — without the hassle of manually copying everything. While searching for existing solutions, I came across workflows and plugins, but they automatically save the record, which wasn’t what I needed.</p>
<p style="text-align: justify;">I wanted something minimalistic, user-friendly, and efficient, so I explored a JavaScript-based approach.</p>
<p>To bring this functionality to life, I outlined the key steps required:</p>
<ul>
<li>Develop the Web Resource</li>
<li>Create a Command Button</li>
<li>Demonstrate the Functionality</li>
</ul>
<h3>Develop the Web Resource</h3>
<p style="text-align: justify;">Since we are implementing this functionality on the client-side, we need to write JavaScript to handle the cloning process. The script should cover the following key actions:</p>
<ol>
<li><strong>Retrieve the Current Record</strong> – Fetch the data of the record to be cloned.</li>
<li><strong>Show a Confirmation Popup</strong> – Ask the user whether they want to proceed with cloning.</li>
<li><strong>Open a New Form with Prefilled Values</strong> – Load a new record form with the copied data, allowing the user to make necessary changes before saving.</li>
</ol>
<p>Below is the JavaScript code I used to achieve this functionality.</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/994cdcd0007ff32acd0b7ed16a4cae65.js"></script>
<h3>Create a Command Button</h3><p style="text-align: justify;">To enable the cloning functionality, we need an event trigger. The best way to do this is by adding a button on the Main Form of the respective entity. In my case, I used the Account entity and added a command button on the Main Form. This allows users to quickly create similar accounts without manually entering every field.</p><p><strong>Steps to Add the Command Button:</strong></p><ol>
<li>Navigate to the required App in the Maker Portal.</li>
<li>Click on the three-dot menu (...) next to Accounts View.</li>
<li>Select Edit Command Bar.</li>
<li>Choose Main Form.</li>
<li>In the Command Editor, click + New → Command and place it anywhere in the ribbon.</li>
<li>Configure the command by adding:
<ul>
<li>Action (Run JavaScript)</li>
<li>Library (add Web Resource)</li>
<li>Function (to trigger cloning)</li>
<li>Parameter (set as Primary Control)</li>
</ul>
</li>
<li>Click Save and Publish to apply the changes.</li>
</ol><p>




<!--notionvc: 129cf61f-d6fa-433a-af76-ff31b47c6169--></p><p>Below is a snapshot of the configured button for reference.</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSNssNmw6HoXvTdLvjGJXbegaK-_H_M1dHLXdAeI1l0KUw3mxnbZzLlQivjRJKPLCNdB5CFFSMkXZSSfV76BFoleUDXzRMsIeJifClAwPHXkDNzq6_8FCHcMYXNn7KobLWl3bo10v0zZw6XbMgCsvW8OaXAAbwWHhTv5mRtWGBPcouXchSKw7F_8ruws4/s1053/image.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="732" data-original-width="1053" height="445" src="{{ site.baseurl }}/assets/images/041/img_494475934f.png" width="640" /></a></div><h3>Demonstrate the Functionality</h3><p>

<!--notionvc: f57f8b25-fdb7-42e1-8ac8-d99a3c40812c--></p><p>After publishing, ensure that the button appears as expected. Below is a clip demonstrating the record cloning functionality in action.</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc0LDJDvTYU_WldPdGq81gnGoIufm8MzXx9HlVHjssi381ZnERgZ9zx4h2yYAT7og4CKBrW1NPtOWq3bN0Su95A-fzgbR6lIGm-ta8MEJB0FwppYIhPK9V5RE5EclUil3U0W3Cb4KN8kgR-ufx03dI-P8mJigCpLZLaTOb0i8tf1weQ-_QCOpqz_iy0xk/s400/2025-02-07.gif" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="225" data-original-width="400" height="360" src="{{ site.baseurl }}/assets/images/041/img_a1623cb35b.gif" width="640" /></a></div><h3>Reference<!--notionvc: 1a5f2c1c-79ba-4b69-af8f-e95cb1b06ee7--></h3><div><ul style="text-align: left;"><li>A shoutout to <span class="notion-enable-hover" data-token-index="1" style="font-weight: 600;">Kailash Ramachandran’s</span> blog on “<a class="notion-link-token notion-focusable-token notion-enable-hover" data-token-index="3" href="https://mytrial365.com/0001/04/11/launch-a-new-entity-form-within-a-modal-popup-with-data-prepopulated/" rel="noopener noreferrer" style="cursor: pointer; overflow-wrap: break-word; text-decoration: inherit;" tabindex="0"><span class="link-annotation-unknown-block-id-669189010" style="border-bottom: 0.05em solid rgba(55, 53, 47, 0.4); border-color: rgba(55,53,47,.4); border-left-color: rgba(55, 53, 47, 0.4); border-right-color: rgba(55, 53, 47, 0.4); border-top-color: rgba(55, 53, 47, 0.4); opacity: 0.7;">Launch a New Entity Form within a Modal Popup with Data&nbsp;Prepopulated</span></a>”<!--notionvc: ba754592-8571-4e1c-87ee-e95dc5c2e99c--></li><li><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/openconfirmdialog">openConfirmDialog (Client API reference) in model-driven apps - Power Apps | Microsoft Learn</a></li><li><a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto">navigateTo (Client API reference) in model-driven apps - Power Apps | Microsoft Learn</a></li></ul></div><h3><strong>Conclusion</strong></h3><p>

<!--notionvc: 6c538473-2e76-461d-b623-af847d3ccf83--></p><p style="text-align: justify;">Cloning records in Dynamics 365 CRM using JavaScript is a powerful way to improve efficiency while maintaining data integrity. With minor modifications, this approach can be customized for different entities and business requirements.</p><p style="text-align: center;">Have a great day!</p>
<!--notionvc: b522b0a1-bdd4-4b8c-88fa-774717f88fb3-->