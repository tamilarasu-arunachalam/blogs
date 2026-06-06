---
post_id: "052"
layout: post
title: "How to Edit Child and Parent Records Directly Within Forms in Dynamics 365 CRM?"
date: 2025-11-23 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "Model Driven Apps", "Power Apps", "Dataverse"]
---

<p style="text-align: center;"><img alt="" border="0" data-original-height="164" data-original-width="220" src="{{ site.baseurl }}/assets/images/052/img_14eb6fb8f7.gif" /></p><p style="text-align: justify;">
        Recently, while working on a customization, a simple question hit me —
        <strong>“Can we edit related entity records directly inside the parent form in
            Dynamics 365 CRM?”</strong>
        After checking, the answer was a clear yes. Here is how you can do it for both
        1:N and N:1 relationships.
    </p>

    <h4>Topics Covered</h4>
    <ul>
        <li><a href="#editableSubGrid">Editable Subgrid (1:N Relationship)</a></li>
        <li>
            <a href="#formComponentControl">Form Component Control (N:1 Relationship)</a>
        </li>
        <li><a href="#reference">Reference</a></li>
    </ul>

    <!--1:N-->
    <section id="editableSubGrid">
        <h2>Editable Subgrid (1:N Relationship)</h2>

        <p>
            If your entity has a 1:N relationship (for example, Account → Contacts), you
            can edit child records directly from the subgrid using the
            <strong>Editable Grid</strong> control.
        </p>

        <ul>
            <li>Open the Account Main Form in the Form Editor.</li>
            <li>Select the Contacts subgrid.</li>
            <li>
                In the right panel, click <strong>+ Component</strong>.<br /><img alt="" border="0" data-original-height="879" data-original-width="402" src="{{ site.baseurl }}/assets/images/052/img_4d86709d71.png" />
            </li>
            <li>
                Select <strong>Editable Grid</strong> from the list.<br /><img alt="" border="0" data-original-height="693" data-original-width="843" src="{{ site.baseurl }}/assets/images/052/img_b9ff5de772.png" />
            </li>
            <li>Click <strong>Done</strong>, then save and publish.</li>
        </ul>

        <h3>Before Applying Editable Grid</h3>
        <p><img alt="" border="0" data-original-height="461" data-original-width="588" src="{{ site.baseurl }}/assets/images/052/img_f7ee698e39.png" /></p>

        <h3>After Applying Editable Grid</h3>
        <p><img alt="" border="0" data-original-height="651" data-original-width="533" src="{{ site.baseurl }}/assets/images/052/img_f5e2763916.png" />
        </p>
    </section>

    <!--N:1-->
    <section id="formComponentControl">
        <h2>Form Component Control (N:1 Relationship)</h2>

        <p>
            This method works well when the child record has a lookup to a parent record
            (N:1). Example: In Contact, the Company Name field looks up to Account.
            Using <strong>Form Component Control</strong>, you can show an editable
            version of the parent form inside the child form.
        </p>

        <ul>
            <li>Open the Contact Main Form in the Form Editor.</li>
            <li>
                Select the Company Name (Account lookup) field. <br /><img alt="" border="0" data-original-height="683" data-original-width="843" src="{{ site.baseurl }}/assets/images/052/img_afa6ffb471.png" />
            </li>
            <li>Click <strong>+ Component</strong>.</li>
            <li>
                Choose <strong>Form Control</strong>. <br /><img alt="" border="0" data-original-height="990" data-original-width="1367" src="{{ site.baseurl }}/assets/images/052/img_5e5a1d7274.png" />
            </li>
            <li>
                In the popup, select <strong>+ Related Form</strong>. <br /><img alt="" border="0" data-original-height="738" data-original-width="441" src="{{ site.baseurl }}/assets/images/052/img_e59a5bac7b.png" />
            </li>
            <li>Select the Account form you want to display.</li>
            <li>Save and publish the form.</li>
        </ul>

        <h3>Before Applying Form Component</h3>
        <p>
            <img alt="" border="0" data-original-height="692" data-original-width="1086" src="{{ site.baseurl }}/assets/images/052/img_34fb3cd267.png" />
        </p>

        <h3>After Applying Form Component</h3>
        <p><img alt="" border="0" data-original-height="855" data-original-width="1755" src="{{ site.baseurl }}/assets/images/052/img_2a979d33b6.png" />
        </p>

        <p>
            <strong>Tip:</strong> Choose a cleaner, minimal form for better usability.
        </p>
    </section>

    <!--Reference-->
    <section id="reference">
        <h3>Reference</h3>
        <ul>
            <li>
                <a href="https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/make-grids-lists-editable-custom-control" target="_blank">Make model-driven app views editable using the editable grid control</a>
            </li>
            <li>
                <a href="https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/form-component-control" target="_blank">Edit related table records directly from another table's main form</a>
            </li>
        </ul>
    </section>

    <p style="text-align: center;">Have a great day!</p>