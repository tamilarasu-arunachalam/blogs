---
post_id: "053"
layout: post
title: "Show/Hide Ribbon Buttons for Subgrids of the Same Table in Model Driven Apps"
date: 2025-11-30 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "Dynamics 365 Web API", "JavaScript", "Model Driven Apps", "PowerFX", "Power Apps"]
---

<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCcbDQc5V7XSlymdcR3h9ql6yjNe0u60XNbjVvQWjnzqUMe0TJmPjA70PYApvdTaErc8c3AM3yVkaQJHNnJ0VmLeB8V3IXwEUH1WRdPR11d8kCpkIERef0_f79MJI5hKng2snhLj1fcAPll7v5i0ugGLeDqjzimukK_6vZzinspYtZEpcAypaEWe_q0GQ/s220/spider-man-your-friendly-neighborhood.gif" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="125" data-original-width="220" height="364" src="{{ site.baseurl }}/assets/images/053/img_72426d992d.gif" width="640" /></a></div><div><br /></div><ul>
  <li><a href="#scenarioBrief">Scenario Brief</a></li>
  <li><a href="#mainFormConfiguration">Main Form Configuration</a></li>
  <li>
    <a href="#commandActionConfiguration">Setup Command Button Visibility</a>
  </li>
  <li><a href="#commandActionConfiguration">Setup Command Button Action</a></li>
  <li><a href="#scenarioDemonstration">Deomonstration</a></li>
</ul>
<p style="text-align: justify;">
  While working on one of my weekend Power Apps Model-Driven Apps projects, I
  ran into an interesting requirement. I had
  <strong>three subgrids of the same child entity</strong> placed inside the
  parent entity’s main form. Each subgrid needed to show a drop-down command
  with buttons — but the tricky part was:
</p>

<ul>
  <li>Each subgrid should show different buttons based on its context.</li>
  <li>
    All buttons should call the same JavaScript function but with different
    parameters.
  </li>
  <li>
    The visibility must change dynamically depending on which subgrid the user
    is working in.
  </li>
</ul>

<p style="text-align: justify;">
  After trying multiple approaches, I found that the best way was to configure
  everything directly inside the
  <strong>Power Apps Command Bar Editor</strong>. Below is a simple breakdown of
  how I achieved it.
</p>

<h3 id="scenarioBrief">Scenario Overview</h3>
<p>I had two tables:</p>
<ul>
  <li><strong>Doctor</strong> – Parent entity</li>
  <li><strong>Appointments</strong> – Child entity</li>
</ul>

<p>Inside the Doctor main form, I added three Appointments subgrids:</p>

<ul>
  <li>In-Progress Appointments</li>
  <li>Upcoming Appointments</li>
  <li>Completed Appointments</li>
</ul>

<p style="text-align: justify;">
  Each subgrid displays appointments based on the appointment status. The key
  functionality was simple - allow the user to
  <strong>move a record from one subgrid to another</strong>
  by updating the appointment status.
</p>

<h3 id="mainFormConfiguration">Main Form Setup</h3>
<p>
  Below is a quick view of how the main form was arranged, with all three
  subgrids placed inside the Doctor record:<br /><br />
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC5Q4BBu_RCsmFgR0YBz3W_M4zkEsxr06Z7oRMDfdpK0Pg3-vBpj0lXzzAwM4c5dxABCwRzDZ8XEf8HHDKf16I42lz93fOyN_8rGztBJFxYD7P3GcjUFoZNZ7TzLoSSrbBXQO5xmjdVRTZJikXEhQK5mOeZ5L9OKumwH7AmKpUCmmXvmbZJGpyD4SYVCE/s1160/main-form-configuration.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="828" data-original-width="1160" src="{{ site.baseurl }}/assets/images/053/img_5f05052ebf.png" /></a>
</div>
<br />

<h3 id="commandActionConfiguration">Setting Up Command Button Visibility</h3>
<p>
  Since all three buttons perform similar actions, I grouped them inside a
  single drop-down called
  <strong>“Move To”</strong>.
</p>

<p>
  The drop-down should appear only when a record is selected. I used the
  following Power FX formula:
</p>

<pre><code>!IsEmpty(Self.Selected.AllItems)</code></pre>
<br />
<p>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoFgFnP_8Ihk7I6iq00imArtEueg6OR2zI7INQrKp2NpgFjZDUHN0VUCOWigwDQoVV3WHe1gA6UUTnApzJSzyHvQhMJMQJ9_PdsJ1wxkjomPogXPAJW2WK5ww3YYRwSOPknoquLhzBkjpx3LtK-6WAi1nKbHlZOurvtRK6p42Y7qDjBOII8qjAtu7bH50/s1923/dropdown-button-setup.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="1022" data-original-width="1923" src="{{ site.baseurl }}/assets/images/053/img_1b6387d2c6.png" /></a>
</p>
<p>
  Next, each button under the drop-down should only appear based on the selected
  record’s current status. For example:
</p>

<ul>
  <li>
    If the record is in "Upcoming", show only "Move to In-Progress" and "Move to
    Completed".
  </li>
  <li>If the record is in "Completed", hide the option to move forward.</li>
</ul>

<p>Here’s the Power FX formula I used for conditional button visibility:</p>

<pre><code>If(
    Or(
        Text(First(Distinct(Self.Selected.AllItems,'Appointment Status')).Value)="Checked-In",
        Text(First(Distinct(Self.Selected.AllItems,'Appointment Status')).Value)="Completed"
    ),
    true,
    false
)</code></pre>
<br />
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiL5Wx1SxhxZ43tzbyO01emqmJkUPkaijSqgY8X-k8UxxR5zd8ZMgAcIh0wBdH9t0Uyu0INEzfZFEDLBpsKglzTY51j6RZmrwqOCytdclUH_-BaqTqDdpoW6NIlqeiKXEIZ113ZYnvFEaPD_j5yELbwj862extj1O9WV0F-n4LVdXzkkowaoD7TpacrI4A/s1407/button-visibility-configuration.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="870" data-original-width="1407" src="{{ site.baseurl }}/assets/images/053/img_2782410836.png" /></a>
</div>
<h3 id="commandActionConfiguration">Setting Up Command Button Action</h3>
<p>
  For the actual update, I added a <strong>JavaScript Web Resource</strong> and
  connected it to the button action.
</p>

<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeQLWaQbkYhsIV2WgtlvPG6kMNuSIv3BKEj5yOrDXcjzsjgnhch6NzkZjf09viGYbJ6jtZfjT8mi0bT6LEPz-JHLTHpfHUAy1cQQHEXj34_2xR1wqKJ1NtMyBbUdRfDl5DLbdSsa0DZO205Yy2ItLjGyM4BduVLCNbBrSoMWJy7EPm_e-qi6Q0cl5wNH0/s1208/button-action-configuration.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="834" data-original-width="1208" src="{{ site.baseurl }}/assets/images/053/img_f8ce18e97a.png" /></a>
</div>
<p>
  The JavaScript function updates the appointment status and refreshes all the
  subgrids. It accepts three parameters:
</p>

<ul>
  <li>
    <strong>SelectedControlSelectedItemIds</strong> – list of selected records
  </li>
  <li><strong>Status value</strong> – the new appointment status</li>
  <li><strong>primaryControl</strong> – the form context</li>
</ul>

<p>Here’s the script:</p>

<script src="https://gist.github.com/tamilarasu-arunachalam/8dda3400f0d7ab65b952eece822900d7.js"></script>

<h3 id="scenarioDemonstration">Demonstration</h3>
<p>Here’s a quick look at how the feature works in the form:</p>

<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyzqVqU_pao6gQ58h1keSC0P7UEEQYvKPADSLTeZvlWAK5Gd6NZi4CFB7sn_1mMDVySK1u9HDjmoYISFQb8yIDniigK3kYOmQLlxqigoWrnEbfjBKa8hVCRkJwMsESTIdL4anmsJvhYUxbmRz1DMTM0LMMalsJ6a3asgQJj_TP1GjGCNTJkJ0au3tmpIc/s1782/demonstration-one.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="887" data-original-width="1782" src="{{ site.baseurl }}/assets/images/053/img_5c93336016.png" /></a>
</div>
<br /><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFTRILa9yCpBnkP6Wlm1Ob2cDjzVcvdvqA7v9MfjS1ux90wAnQbcnaygugU7Hx3WQ0g_MDGc3slzcGohVNsK4RywONHkvBjCi0D7Ok1mH-gQYKKA4YNw0j1FeFnJ6nUGb1Sfr7yIlpjjkD1m2r7WTJ30q-C6HerwPxJ-5Ivmfn1TOldKnjnPIo1c2bszQ/s1787/demonstration-two.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="894" data-original-width="1787" src="{{ site.baseurl }}/assets/images/053/img_fe586e5e10.png" /></a>
<div class="separator" style="clear: both; text-align: center;"><br /></div>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBKEVsgr-zbZfOox6f0ELVzKeSaKgKIn0Z7aBdI29J1638zz0jA0GXl0qXxRtccWUvynJwrjQqvEmC6ijbazNB-2OElYH3QrqIAC1oTkVIPw1Cvcfs3ZZG-0K7xpRyYbpyyfOih3nekQqqlAbYCNu_3tYlnEmjoQINNXTuxb0aw7d4b5y8sqJP9zHwj8s/s1779/demonstration-three.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="887" data-original-width="1779" src="{{ site.baseurl }}/assets/images/053/img_30564f37c5.png" /></a>
</div>
<p style="text-align: center;">Have a great day!</p>
