---
post_id: "044"
layout: post
title: "Safely Handle Async Operations Before Save in Model-Driven Power Apps"
date: 2025-05-25 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Model Driven Apps", "Dynamics 365 CE", "Dynamics 365 Web API", "JavaScript", "Web resource", "Power Apps"]
---

<div>
<img border="0" src="{{ site.baseurl }}/assets/images/044/img_815ddc2024.png" /></div><p>
  Hello folks. I recently tackled one of these scenarios, and what seemed like a
  simple validation turned into a bit of a deep dive.
</p>
<p>
  In this post, I’ll share how I handled
  <span>preventing of form save during async operations involving subgrid
    data</span>, using a real-world example from a JavaScript customization I worked on.
</p>
<h3>Example Scenario</h3>
<p>Let’s say you have two tables:</p>

<p></p>
<ul>
  <li>
    <strong>Order</strong> (the parent)</li></ul><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilWesYTOLuxvxrb3C26j9UDgGnCYgMh1s1-Fdzpaaf2_dHyi2xoWWHsffDX9PMvco05WG579c8h2ifcPNRv1WhCYpaoxUnNJO97GZc6R0O99pDcA0ZMGPf5JqHlJUY1nfhbdkkFcXzo6UXuEq8AHFfKTZAA_aevmAYdF41ePKvwBSDWEv3kr74dfayJxg/s1751/order-form.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_0f910db1b4.png" /></a><br /><ul><li>
    <strong>Order Items</strong> (child
    records shown in a subgrid on the Order form)
  </li>
</ul>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE94jCHvYw30mFiEoShF24j0ytIWKohkgS25zee6JfxrNAEsBsRDyrYJvoxMtI8FE7F_0SsKdWwmhW3cx88lZZnerQumJeb9fQtG_WcT9eTt4IYa2a3CFi4tT4J-SHvDLnuqkgVeku5U4KGqvBbHnrz5Hg11pvBKpAsBsSCM_R_ak_k0JY7JsuOodMVKI/s16000/order-products-subgrid.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_bdfd56a891.png" /></a><br />
<p></p>
<ul></ul>
<h4><b>Functionality:</b></h4>
<p></p>
<ul>
  <li>
    The Order table includes a
    <code>Order Status</code> field (an option
    set with values like Open, Closed, and Cancelled).
  </li>
</ul>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizXUMlq2Icv5XLb2U2Rww1w0XGGFUhRpGmnAdc5o7UB8RmuIaV2rUoxsadmM564jCL8qbYaSepa5vZzokjjVzmzy67m-H-uZ3jcMpIxJ5a8ols_9OD3Uqf5o5SpyoS9o_TuhdciEX-6-qE3DnZ_ibqsxZEsy-TrALHiW6qwjkew-xFXcUzuevAo3ecLVc/s16000/image.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_399df75560.png" /></a>
<p></p>
<p></p>
<ul>
  <li>
    Each Order Item has a boolean field called
    <code>Ready to Dispatch?</code>.
  </li>
</ul><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiN6N8vMcigQzkMqAhGZsan448b8iZzZdzMuOJLwYXCvrEoXSY_WlZWW_vkhOWs5zVTAt1OXZ_95MaP1yUR6LAVLZQLVjyJB4rMQWUN6bq0ZthiBjYxT-mkNNj-X7S_sRnndNy7u1K6zTyc5QUqDK70A28W8_EZHnwKltnZq7itnDtRbgAcG5UpUjcTTNw/s16000/order-product-form.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_a2e11feda9.png" /></a><br />
<p></p>

<p></p>
<h4><b> Here’s the condition:</b></h4>
<p>
  If even one Order Item isn’t marked as “Ready to Dispatch,” the Order
  shouldn’t be allowed to close (i.e., you can’t set its Status to “Closed”). If
  a user tries to close the Order while there are pending items, we need to stop
  the form from saving and let them know.
</p>
<h3>
  The First Approach: Using
  <code>preventDefault()</code> in OnSave
</h3>
<p>
  Initially, I thought this would be easy. I planned to use:
</p>

<p></p>
<ul>
  <li>
    <code>Xrm.WebApi.retrieveMultipleRecords()</code>
    to check the subgrid data (Order Items)
  </li>
  <li>
    Call
    <code>eventArgs.preventDefault()</code>
    if any record didn’t meet the criteria
  </li>
</ul>
<p></p>
<ul></ul>
<p>
  But there was a catch: the retrieve multiple is
  <span>asynchronous</span>. So even though
  the logic was correct, the form would sometimes save
  <span>before</span> the validation was done
  - letting invalid data slip through.
</p>
<h3>
  Finding the Fix: Async OnSave Handlers
</h3>
<p>
  Turns out, Power Apps has a way to help with this:
  <span>async OnSave handlers</span>. These
  let you run asynchronous logic
  <span>before</span> the form actually saves,
  which was exactly what I needed.
</p>
<p>Here’s the functionality I implemented:</p>
<ol>
  <li>
    Create a web resource and add it in the&nbsp;OnSave event handler on the
    Order form.
  </li>
  <li>
    When the <code>Status</code> changes to
    "Closed" and the Save button is clicked, I trigger a validation check.
  </li>
  <li>
    The check:
    <ul>
      <li>
        Uses
        <code>Xrm.WebApi.retrieveMultipleRecords()</code>
        to fetch Order Items.
      </li>
      <li>
        <span>Loops through them to see if all are </span><code>Ready to Dispatch</code><span>.</span>
      </li>
      <li>
        If not, calls
        <code>preventDefault()</code> to block
        the save.
      </li>
    </ul>
  </li>
  <li>
    To add the asynchronous function in the OnSave event handler we need to
    enable the Async OnSave Handler in App settings
    <ul>
      <li>
        To do that we need to navigate to the setting in the app maker window
      </li>
      <p>
          <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-HbTPh3oh5qapabMx9aGklM_66mt_EA5l4OQ_cLqOHLdUSpFXTMq9PCPGaJHGyN-NbxYtjMG701jcY8cG-kzt-z-YMASA_C7cofrAz9AUyHVLTry066o-C06R1fKbBVCUJ5VZHDjdyoMiozJeWzAfvikJFVCH8g9fYS7jD38bWpHV5i57XHaEKAvrTjQ/s612/app-settings.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_3981c5ac10.png" /></a>
        </p>
      <li>
        Inside that select the features menu, and toggle yes to the Async save
        handler as like the below image.
      </li>
      <p>
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhptltDrzBRVMac0JDJkRa8rHZNeW1SZpCE1exnD_fFZ9B55iJq-_pRAVeNfkCxI23fFlCUQ74y174Ykh8OC6DX_QZtmbOOk6hQLiPvgUFKoLCwKhhUnUIxDbtObmtwJRE2ZG3073340wA6352l-0rME9w8n5nWSCuuWNhNHjQntPx8bR22xPIrPJMFEzc/s1458/async-save-handler.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_f588e438b7.png" /></a>
      </p>
    </ul>
  </li>
</ol>
<p>
  It was working great… until I hit the next hiccup.
</p>
<h3>The Unexpected Issue: Auto-Save</h3>
<div>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuWOiFZc3FhCXUPfeT7odsnoOnQm2ECxX8nC7VJ0bKk4ESP1b-LMa44SxEDbWiaHbfuslK2yhGtvW6rOpsAoJ0FCLx2wbWgHZwzMGpIe4NXA7cG_6YnU9v_DpkGlyri9_ClQLjgTR35AI87szLf9sOoyiNcWUW4o-RD_eVQZdIyfXkMzkWFos6muAgv5U/s1500/enable-disable-autosave.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_216805d67d.png" /></a>
</div>
<p>
  If you’ve worked with
  <span>Model-Driven Apps or Dynamics 365 CRM</span>&nbsp;for a while, you’ll know they come with
  <span>auto-save enabled by default</span>.
  This means the form tries to save itself every 15–30 seconds or so.
</p>
<p>
  With my validation in place, the form would now block the save and show an
  error message—even when the user wasn’t doing anything. That wasn’t ideal. It
  interrupted the user experience and created unnecessary confusion. so i have
  used the<code>
    getSaveMode()</code>
  to check the save mode.
</p>
<h3>
  Smarter Handling: Using
  <code>getSaveMode()</code> to Detect
  Auto-Save
</h3>
<p>
  To solve this, I turned to
  <code>eventArgs.getSaveMode()</code>, which
  tells you how the form is being saved. You can find the values of the
  getSaveMode() function from the table below.
</p>
<div>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9AVPLAdpfbJNJpRoYIf80tRXwdhd1wqyTbrqL0_a-TDgOFdpf8AvfKLktJ-HiHp3NHnLEH_WptAdSX-Wdkpk40MPWhqWlfLn1xqW2FOeZILyLruh2dkM3Mzqka3FCB_ndCFjX5O_3J7ZSrrujw6HAqcCVVDhlgZc32ANt90sVD7VgtVAIORrdb4miDso/s885/getsavemode-values.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_e82ed7c414.png" /></a>
</div>
<p></p>
<ul></ul>
<p>Using this, I adjusted the logic:</p>

<p></p>
<ul>
  <li>
    <b>
      For <span>auto-save</span> (<code>getSaveMode() === 70</code>):</b>
    I only blocked the save quietly using
    <code>preventDefault() -&nbsp;</code>no
    error message.
  </li>
  <li>
    <b>For
      <span>manual save&nbsp;</span>(<span>getSaveMode() === 1 ||&nbsp;</span><span>getSaveMode() === 2</span>):</b>
    I blocked the save and showed a proper validation message using
    <code>Xrm.Navigation.openAlertDialog()</code>.
  </li>
</ul>
<p></p>
<ul></ul>
<div>After all these changes, I attempted again to test the functionality:</div>
<div>
  <ul>
    <li>I have left one product as not ready to dispatch? (Kept as it is)</li>
  </ul>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHYkybl_BFqkphEuFRgsqbYta8ujgpAvNLE7D4NRpUbWDm_Q53N-j9meDJ_gK0eQx_YMedluMXc62Ws2oUhm-SrE0prULzVuhiWkO8ZzobJ6RrUSgcu36RP2Ui6bCg03HMADLU2Oefplnc1ZUrNlV8aeUhnkQirLUcM60ORhKQ2Wba_OK6cSd3xf04HFg/s1761/form-before-save.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_b4779a0fd5.png" /></a><br />
  <ul>
    <li>
      I have changes the Order Status to "Closed" and clicked Save button.
    </li>
  </ul>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6FNlQCBs1yPsyTIcjxko1kxIp4hXoyAVxqt9X0PihiOVKgLGRGyhjSPyEs_nFRTGgEEjxmGN4UT3nu0OcRsV5g-qgJZ-SRvmIzivMQvGNogKutio6CTd3Mg3qMZN106n0rkiluyUWJPTSmYEmICG0w7pzaCNjA3_xIIAm0XeK9RDwo6cDkmpupwzNEds/s1758/error-message-alert.png"><img border="0" src="{{ site.baseurl }}/assets/images/044/img_e58e44ee62.png" /></a><br />
  <ul>
    <li>
      Even I have tested during the autosave also, the alert doesn't thrown
      again.
    </li>
    <li>
      And finally my form also doesn't got saved until the products under the
      same order are not in the state of ready to dispatch as true.
    </li>
  </ul>
  <p>You can find the code for the above example use case below.</p>
  <script src="https://gist.github.com/tamilarasu-arunachalam/c7dac42f58dea23413aec8864fc95055.js"></script>
</div>
<ul></ul>
<p>
  This small change made a big difference in how the app behaved and how users
  experienced the form.
</p>
<h4>My Learnings:</h4>

<p></p>
<ul>
  <li>
    Always use
    <span>async OnSave handlers</span>
    for async validations in the on save event.
  </li>
  <li>
    Don’t forget about
    <span>auto-save,&nbsp;</span>it can throw
    a wrench into your logic if not handled properly.
  </li>
  <li>
    Use <code>getSaveMode()</code> to
    fine-tune your user experience and avoid unnecessary alerts.
  </li>
</ul>
<p></p>
<ul></ul>
<h4>Resources Referred:</h4>
<div>
  <ul>
    <li>
      <a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/save-event-arguments/preventdefault" rel="nofollow" target="_blank">preventDefault method for JavaScript in model-driven apps</a>
    </li>
    <li>
      <a href="https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/manage-auto-save" rel="nofollow" target="_blank">Disable AutoSave in a model-driven app</a>
    </li><li><a href="https://benediktbergmann.eu/2023/03/20/async-onsave-preventdefault-with-external-call/" rel="nofollow" target="_blank">Async onSave preventDefault with external call</a></li>
  </ul>
  <div><br /></div><div style="text-align: center;">Have a great day!</div>
</div>
