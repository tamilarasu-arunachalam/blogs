---
post_id: "047"
layout: post
title: "Quick View Forms in Model Driven Apps: What, Why, and How to Use Them?"
date: 2025-07-06 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "JavaScript", "Model Driven Apps", "Power Apps", "Web resource"]
---

<div class="separator" style="clear: both; text-align: center;">
  <img border="1" data-original-height="352" data-original-width="480" src="{{ site.baseurl }}/assets/images/047/img_004273db2e.gif" style="display: none;" />
</div>
<img alt="" border="0" data-original-height="438" data-original-width="780" src="{{ site.baseurl }}/assets/images/047/img_3542905ab9.jpg" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them"/>
<p data-end="596" data-start="229" style="text-align: justify;">
  When working with Microsoft Dynamics 365 CRM, efficiency and user experience
  matter. One feature that often goes unnoticed - but can make a significant
  difference - is the Quick View Form. If you’ve ever wanted to display related
  record information directly within the current form without forcing users to
  open another window, Quick View Forms are exactly what you need.
</p>
<p data-end="771" data-start="598" style="text-align: justify;">
  In this blog, I’ll walk you through what Quick View Forms are, why and when
  you should use them, how to set them up, and how to enhance them using
  JavaScript where possible.
</p>
<h2 data-end="811" data-start="778">
  <strong data-end="811" data-start="781">What Is a Quick View Form?</strong>
</h2>
<p data-end="1105" data-start="813" style="text-align: justify;">
  A Quick View Form in Dynamics 365 CRM allows you to show fields from a related
  entity on the main form of another entity. The data shown is read-only and is
  retrieved through a lookup relationship. These forms are embedded into other
  forms and act as lightweight summaries of related records.
</p>
<p data-end="1463" data-start="1107" style="text-align: justify;">
  For example, if you’re looking at a
  <strong data-end="1154" data-start="1143">Contact</strong> record and want to
  display details from the associated
  <strong data-end="1221" data-start="1210">Account</strong>, a Quick View Form
  lets you pull in that information - such as Account Name, Phone Number, and
  Industry - directly onto the Contact form. This saves time and improves
  visibility, especially for users who frequently work across multiple entities.
</p>
<h2 data-end="1513" data-start="1470">
  <strong data-end="1513" data-start="1473">Why and When to Use Quick View Forms</strong>
</h2>
<p data-end="1739" data-start="1515" style="text-align: justify;">
  Quick View Forms are most useful when you want to improve the user experience
  without overcomplicating the form. They allow you to bring important related
  data into view so that users don’t have to navigate to other records.
</p>
<p data-end="1782" data-start="1741">
  Here are some common reasons to use them:
</p>
<p data-end="1836" data-start="1786" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>To reduce unnecessary navigation between records</li>
  <li>To provide more context when viewing or editing a record</li>
  <li>To enhance data visibility without cluttering the form</li>
  <li>To summarize related information within dashboards or forms</li>
</ul>
<div style="text-align: justify;">
  Typical use cases include showing Account details on an Opportunity form,
  Primary Contact info on an Account form, or Parent Case details inside a child
  Case record. The key is to use Quick View Forms in a way that adds clarity
  without overwhelming the user.
</div>
<p></p>
<h2 data-end="2332" data-start="2287">
  <strong data-end="2332" data-start="2290">How to Create and Use Quick View Forms</strong>
</h2>
<p data-end="2465" data-start="2334" style="text-align: justify;">
  Creating and using Quick View Forms in Dynamics 365 CRM is straightforward.
  Here’s a step-by-step example based on a real use case.
</p>
<h3 data-end="2493" data-start="2467">
  <strong data-end="2493" data-start="2471">Workaround Example</strong>
</h3>
<p data-end="2746" data-start="2495" style="text-align: justify;">
  Let’s say you have a
  <strong data-end="2524" data-start="2516">City</strong> entity with three
  fields: <strong data-end="2564" data-start="2551">City Name</strong>,
  <strong data-end="2580" data-start="2566">State Name</strong>, and
  <strong data-end="2602" data-start="2586">Country Name</strong>. In the
  <strong data-end="2622" data-start="2611">Account</strong> form, I’ll create a
  lookup field for the City table. I’ve added a new tab named
  <strong data-end="2716" data-start="2703">“QV Test”</strong> to demonstrate
  this use case.
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGVsvRG00BFGV78K1-ZSQbA880_ge7rzcgW-s8MlarjTheP4MyZ8-oJbD8-V4I6QCErnuLT28JZ_cQCGexLqvBJli2DRV7zmaoUp666_04f7Ja3_ZIRdbgO5nZK0ZeuDESUHjBP6YcLQcXZg7_H8oCz58LSPBNnwH56B0b5i6nIlgFgc7dq95nrkL8fhs/s990/create_lookup_for_city_in_account.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="990" data-original-width="924" src="{{ site.baseurl }}/assets/images/047/img_e7059e3785.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a><br /><br />
</div>
<p data-end="2898" data-start="2748" style="text-align: justify;">
  When a city is&nbsp; selected, the corresponding
  <strong data-end="2800" data-start="2791">State</strong> and
  <strong data-end="2816" data-start="2805">Country</strong> names should
  automatically appear. This is exactly where a Quick View Form helps.
</p>
<h3 data-end="2942" data-start="2900">
  <strong data-end="2942" data-start="2904">Step 1: Create the Quick View Form</strong>
</h3>
<p data-end="3020" data-start="2947" style="text-align: left;"></p>
<ol style="text-align: left;">
  <li>
    Navigate to
    <strong data-end="3018" data-start="2959">Advanced Settings → Solutions → Your preferred solution</strong>
  </li>
  <li>
    Select the entity from which you want to display information (e.g., City)
  </li>
  <li>
    Go to the <strong data-end="3122" data-start="3113">Forms</strong> section
    and click
    <strong data-end="3164" data-start="3141">New Quick View Form<br /></strong>
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjF8IJ4dOeLIxoE8b5PA2IjsIqvARRqsarGRplY_8jKKpVOdIQJ8vspcC_QBlDwh2AzDiXbd2_m_dbUQHYZHvAZ56krWBnlOmlTq8Srg1cd42_mjSyzLtmyN-jCigsX7KKIXyErywFgJOhjJtozyyBIgo65_3joHI5WR_WcLO1Q1UvGHmRL6C3e7tFwWqc/s1542/create-quick-view-form.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="801" data-original-width="1542" src="{{ site.baseurl }}/assets/images/047/img_7cff1f85cd.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a></div>
  </li>
  <li>
    Name the form something like
    <strong data-end="3220" data-start="3199">“City Quick View”</strong>
  </li>
  <li>
    Design your form by adding only the necessary fields - keep it simple and
    focused (in this case, State and Country)<br />
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgp11e2J4CHij354_RxDwsAR_BG4vvdT8lwwRjg20YrsTCPqTyi24j8Q8pNJSs8LQMADBxuAxrzFB2VjziMgIbmJCL12FXKMH3FCzhs2l09-E930OCBvGQ6CqNdYtedk06NQews5O6FWsI4Stbho__rRf4YDu5NQlUo0Uf8AUQS2_iTqzcVeRmtr2_jEYI/s1923/edit-quick-view-form.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="828" data-original-width="1923" src="{{ site.baseurl }}/assets/images/047/img_c57ec3cedc.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a>
    </div>
  </li>
  <li>
    Save and <strong data-end="3365" data-start="3354">Publish</strong> the form
  </li>
</ol>
<p></p>
<ol data-end="3376" data-start="2944"></ol>
<h3 data-end="3438" data-start="3378">
  <strong data-end="3438" data-start="3382">Step 2: Add the Quick View Form to the Target Entity</strong>
</h3>
<p data-end="3500" data-start="3443" style="text-align: left;"></p>
<ol style="text-align: left;">
  <li>Open the main form of the target entity (e.g., Account)</li>
  <li>
    Add the <strong data-end="3520" data-start="3512">City</strong> lookup field
    to the <strong data-end="3552" data-start="3541">QV Test</strong> tab<br />
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZTuiy6N5rVDEPvfxzXvDUvzxSv_dNZg-Lil5tF2kVPERkjOYkQce2pk9z4EPHG5vQLzHPvaGUbSzb-yFDcI9xw8dsFodcoTY9lNRfzarbvPqOCk5fVjyThK3rea1EyQtY7uLhgbpXogCvxQFma2BungtTUOytZypbs9s4VX1zrjMQ9DdKlzWle_6ciGY/s1866/add_city_column_to_form.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="894" data-original-width="1866" src="{{ site.baseurl }}/assets/images/047/img_dbe2e51c16.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a>
    </div>
  </li>
  <li>
    In the form designer, insert a
    <strong data-end="3612" data-start="3593">Quick View Form</strong> control
  </li>
  <li>
    Select the lookup field that links to the related City record<br />
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpTmXPTfXtm7LDLANfLN3qK22fSk0mxiUszAfza0HskH_7FcvKh0lWovpm12czn_V8SFkFDvmTCt7ZBuE1ReMDV07hXHiXW_n7BwIiRvZEtkTb-ADT5uv8T8M2jnDP53y_UbfwTHS75ic5IgtLb5kiu5L6o-hOlrnhWaxYRr09xcH3y_Iu6_pvUkrgkL0/s1794/adding_qv_to_form.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="597" data-original-width="1794" src="{{ site.baseurl }}/assets/images/047/img_5f37d4ff4b.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a>
    </div>
  </li>
  <li>
    Choose the
    <strong data-end="3722" data-start="3704">related entity</strong> and the
    Quick View Form you created<br />
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2vcn4r13O9zy2I0MpEllnPhLg_TkFQK-yMm0hg9ND_P0WEPpws7x4jPY2VZIl4m4TxA_Pc60RIoaJtZ91mblGvLzpW9VjTqMuWghjNE56u8HlJEs-p-1LrVILpNCnq9OR65Ww2x4DtkK6eU8BcqQ9ceJuGS2-mJAqSFlbnSzx4vLKJxJYxdSKZtIXRA0/s1794/adding_qv_to_form.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="597" data-original-width="1794" src="{{ site.baseurl }}/assets/images/047/img_75bd8f1a39.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a>
    </div>
  </li>
  <li>
    Position the form in the layout where it makes the most sense for users
  </li>
  <li>
    Save and <strong data-end="3861" data-start="3850">Publish</strong> the form
  </li>
</ol>
<p></p>
<ol data-end="3872" data-start="3440"></ol>
<p data-end="4009" data-start="3874" style="text-align: justify;">
  Once published, users will see the Quick View Form populated with data from
  the related record—as long as the lookup field has a value.
</p>
<h3 data-end="4032" data-start="4011">
  <strong data-end="4032" data-start="4015">Demonstration</strong>
</h3>
<p data-end="4101" data-start="4034"></p>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqvupS8uBUKYwsLe0E_-SLGmVf20xi7XzOd6r9syPGiswo-hn2METNIKs9wK8wYRVuS4QnbJPi1CcjuzhjylU3LL_2xlLZ2lcOWLuJv3ho08TtWelOHXawpwlw5nLT9EP6TInRx_e6FgiIdJ59G9kcFa1tyUMpbCU77UnUg1bvCeQlcZmiCMVJ1KYhhyE/s933/account_form_preview.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="387" data-original-width="933" src="{{ site.baseurl }}/assets/images/047/img_701f2156ab.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a><br />
<ul style="text-align: left;">
  <li>
    Navigate to the
    <strong data-end="4061" data-start="4050">Account</strong> form and switch
    to the <strong data-end="4096" data-start="4085">QV Test</strong> tab.<br />
  </li>
</ul>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0mLZYN7ANbizyh7Xp3WJ2s75Nb-c1u6cjVwNJYXTtkQD8p07910Ca7_aU4h1iWe-7Glxp2EG52ZL_A8K3gPWXCalePeeyuKVIwY46tit0hIEUNTQ7bsgrxo5K_6BLFIoo1s6pNP44w81m2LTUKyAABGDU9rucY7U1E2kqMrhVbuD6rfUWO6FwDmDguSg/s1761/city_form_data.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="498" data-original-width="1761" src="{{ site.baseurl }}/assets/images/047/img_844b32e1aa.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a><br />
<ul style="text-align: left;">
  <li>
    Once a city is selected from the lookup field, the Quick View Form will
    automatically display the corresponding
    <strong data-end="4224" data-start="4215">State</strong> and
    <strong data-end="4240" data-start="4229">Country</strong> fields.<br />
  </li>
</ul>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgramKLuBo_nhS1Xq6KwR619LLLxgYXLqYRg3EsSZiI1k-tIxZVft2fhoYejZCuSmWoxj82MR1AxbBWAN49UwL5fXLr2UanTagNNgOQwTwfWKbkEc4fmsEdtxpq7OT0LLWfx1NmrRRa_m7KfWJOdbzf3PAgaf7y0rTNGMkx0hA0q0qyk3u42cDVEiDlgwM/s906/account_form_postview.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="537" data-original-width="906" src="{{ site.baseurl }}/assets/images/047/img_398a585229.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a><br />
<p></p>
<h2 data-end="4309" data-start="4255">
  <strong data-end="4309" data-start="4258">Customizing the Quick View Form with JavaScript</strong>
</h2>
<p data-end="4504" data-start="4311" style="text-align: justify;">
  While Quick View Forms are read-only and somewhat limited in customization,
  JavaScript can help you enhance them - particularly when you want to control
  visibility or implement conditional logic.
</p><p data-end="4504" data-start="4311" style="text-align: justify;">I have used the below code to hide the Quick View Form and its fields conditionally.</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/20b646b04314e39dcc52b69211fb75fb.js"></script>
<h3 data-end="4554" data-start="4506">
  <strong data-end="4554" data-start="4510">Example: Hide or Show Fields Dynamically</strong>
</h3>
<p data-end="4646" data-start="4556" style="text-align: justify;">
  You can access the Quick View Form control and control its visibility based on
  conditions:
</p>
<h3 data-end="5522" data-start="5500">
  <strong data-end="5522" data-start="5504">Code Breakdown</strong>
</h3>
<ul style="text-align: left;">
  <li>
    Get the City lookup field value using:
    <span style="font-family: courier; font-size: x-small;">formContext.getAttribute("tamil_city").getValue()[0].id.slice(1,
      -1);</span>
  </li>
  <li>
    Retrieve related record details using Web API:
    <span style="font-family: courier; font-size: x-small;">Xrm.WebApi.retrieveRecord("tamil_city", cityValue,
      "?$select=tamil_name,tamil_state,tamil_country");</span>
  </li>
  <li>
    Get the Quick View Form control:
    <span style="font-family: courier; font-size: x-small;">formContext.ui.quickForms.get("tamil_cityQVF");</span>
  </li>
  <li>
    Use visibility logic based on field values:&nbsp;<span style="font-family: courier; font-size: x-small;">cityQvfControl.getControl("tamil_state").setVisible(false);</span>
  </li>
  <li>
    Hide individual fields or the entire Quick View Form if necessary:
    <span style="font-family: courier; font-size: x-small;">cityQvfControl.setVisible(false);</span><!--notionvc: 5f9af688-7011-481e-96f4-095ef4a099a0-->
  </li>
</ul>
<h3 data-end="6026" data-start="6007">
  <strong data-end="6026" data-start="6011">Final Steps</strong>
</h3>
<p data-end="6085" data-start="6030" style="text-align: justify;"></p>
<ul style="text-align: left;">
  <li>
    Go to the
    <strong data-end="6056" data-start="6040">Account form</strong>&nbsp;→<!--notionvc: f10adf96-48f8-4971-a011-97eadc9905c9-->&nbsp;<strong data-end="6069" data-start="6059">Events</strong>&nbsp;→<!--notionvc: f10adf96-48f8-4971-a011-97eadc9905c9-->&nbsp;<strong data-end="6083" data-start="6072">On Load</strong>
  </li>
</ul>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi90OKjwHzBOOlhSThaOSRnuhFFc-ICx3tShuOjxj_2IaOk4qlRCNBojPQhCpIKe-JJ5vHgIpYThOqj9xtd4rro12eNVmy75ao5mO-YcstzH_G90KzyCoUqfXzgc2F1KEoLFrzWmV7sEQ3mxcNfyRd76Hmx2osxdfo7zF_OdTHPCxVozsqrNNM-4j-KE3c/s1850/qvform_onload_event.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="798" data-original-width="1850" src="{{ site.baseurl }}/assets/images/047/img_493e9c6ce3.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a><br />
<ul style="text-align: left;">
  <li>
    <span style="text-align: justify;">Add the JavaScript web resource to the </span><strong data-end="6144" data-start="6127" style="text-align: justify;">Event Handler</strong>
  </li>
  <li>
    <span style="text-align: justify;">Save and </span><strong data-end="6169" data-start="6158" style="text-align: justify;">Publish</strong><span style="text-align: justify;"> the form</span>
  </li>
</ul>
<p></p>
<ul data-end="6180" data-start="6028"></ul>
<h3 data-end="6203" data-start="6182">
  <strong data-end="6203" data-start="6186">Demonstration</strong>
</h3>
<p data-end="6492" data-start="6205"></p>
<p style="text-align: justify;">
  If the <strong data-end="6221" data-start="6212">State</strong> field is empty
  in the selected
  <strong data-end="6261" data-start="6253">City</strong> record, the State
  field will be hidden from the Quick View Form.
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglIQ5hRTHszAm8zGq8XxM7_o2OWxzVpOHwheZwO-ItGIae9oLWGgdA5hG14Gj4LPkXw7C3q9b_xY7w7nka6Ms_1bd9lFflg4K5vYXKN3KpSVeo_juY2AFRX0saBj-km1ykblBr0PF5qRfDJwHIe-b4IEp3KfOdwUbJsAUM3amCHp4K474EGiVGTK4zNHA/s887/qvform_js_state_empty.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="455" data-original-width="887" src="{{ site.baseurl }}/assets/images/047/img_fa7890d129.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a>
</div>
<p style="text-align: justify;">
  For example, I added a city named “<u>New Delhi</u>” which is a Union Territory and
  does not fall under any state. So the State field is left empty - and
  therefore hidden.
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzSiW9I3n-Cm46RhEcKzeq0CKPnLm3L2SvcAILP1c01FWGkAsb-v6kgPjmPHk59Cc1XbF7kUmkprnNjEA5B7q3B8H4x1lSgj5zXY2LMg7WG1Dhq50pVqizLIhS2w1az5dvsZKSXzyvc6SSfVo6hIZWXsXCkc-DsRsWkuIJ-RLgV-OqZ_h0eXIk3pTgGRI/s906/qvform_js_state_country_empty.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="342" data-original-width="906" src="{{ site.baseurl }}/assets/images/047/img_01b02f7c74.png" alt="Quick View Forms in Dynamics 365 CRM: What, Why, and How to Use Them" /></a>
</div>
<p></p>
<p data-end="6771" data-start="6494" style="text-align: justify;">
  If <strong data-end="6505" data-start="6497">both</strong> the State and
  Country fields are empty in the City record, the entire Quick View Form will
  be hidden. I created a test record named “<a href="https://en.wikipedia.org/wiki/Bir_Tawil" rel="nofollow" target="_blank">Bir Tawil</a>” a disputed territory claimed by no state or country (fun geography fact),
  and the form disappears entirely in this case.
</p>
<h2 data-end="6795" data-start="6778">
  <strong data-end="6795" data-start="6781">Conclusion</strong>
</h2>
<p data-end="7033" data-start="6797" style="text-align: justify;">
  Quick View Forms are a smart way to create clean, efficient, and user-friendly
  forms in Dynamics 365 CRM. They let you bring relevant related data into the
  context of the current record, reducing navigation time and improving
  usability.
</p>
<p data-end="7261" data-start="7035" style="text-align: justify;">
  While you can’t edit data inside a Quick View Form, you can still control how
  and when it appears using JavaScript. With thoughtful use, Quick View Forms
  can significantly enhance both your form design and the user experience.
</p>
<h3 data-end="7286" data-start="7268">
  <strong data-end="7286" data-start="7272">References</strong>
</h3>
<p data-end="7455" data-start="7290" style="text-align: left;"></p>
<ul style="text-align: left;">
  <li>
    <a data-end="7453" data-start="7290" href="https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/create-edit-quick-view-forms" rel="noopener" target="_new">Create and edit Quick View Forms – Power Apps (Microsoft Docs)</a>
  </li>
  <li>
    <a data-end="7637" data-start="7458" href="https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/create-edit-quick-view-forms?view=op-9-1" rel="noopener" target="_new">Quick View Forms for On-Premise – Microsoft Docs</a>
  </li>
  <li>
    <a data-end="7801" data-start="7642" href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/isloaded" rel="noopener" target="_new">Client API - isLoaded Method</a>
  </li>
  <li>
    <a data-end="7969" data-start="7806" href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/getcontrol" rel="noopener" target="_new">Client API - getControl Method</a>
  </li>
  <li>
    <a data-end="8137" data-start="7974" href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/formcontext-ui-quickforms/setvisible" rel="noopener" target="_new">Client API - setVisible Method</a>
  </li>
</ul>
<p></p>
<ul data-end="8137" data-start="7288"></ul>
<p style="text-align: justify;"></p>
<p data-end="8156" data-start="8139" style="text-align: center;">
  Have a great day!
</p>
