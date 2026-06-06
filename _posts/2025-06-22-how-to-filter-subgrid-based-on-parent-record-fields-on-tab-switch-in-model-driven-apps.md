---
post_id: "045"
layout: post
title: "How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?"
date: 2025-06-22 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "JavaScript", "Web resource"]
---

<div class="separator" style="clear: both;"><img alt="" border="0" data-original-height="133" data-original-width="220" src="{{ site.baseurl }}/assets/images/045/img_7996e7f7a6.gif" style="display:none"/></div><div class="separator" style="clear: both;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7StjSd6K7Xl_nVrwM6czKaMDlmsbQnqsPQ8iq5CTivRmdprYnhh7so4_E6kaMCuDYsKzfwviTZn_n6qN3m977YNyvDj3pTSRkkO7DS4j1jwHsteRYcQ1jGhk-cbusg7K3fX1vUdTHtiJVZbkrtygdyZ8WY0FyQ7LjKRPXEm8_JiHqTGkkweEag-oOXFY/s1600/blog-220625.png"
    style="display: block; padding: 1em 0px; text-align: center;"
    ><img
      alt="How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?"
      border="0"
      data-original-height="400"
      data-original-width="700"
      src="{{ site.baseurl }}/assets/images/045/img_a09b8cd445.png"
  /></a>
</div>
<p style="text-align: justify;">
  I have recently came across a use case where i have to filter the sub grid
  based on the field values from the parent record on the event of tab switch. I
  have accomplished it with the JavaScript Code. For the demonstration of the
  same, Assume you are in the main form of account entity. You have the contacts
  tab with the sub grid of contacts which are related to the account. For the
  ease of understanding, I have taken the fields Shipping Method and Freight
  Terms(as account and contact). Refer the below image for the unfiltered sub
  grid.
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKdMdfiXYO8PIzMnLjlUGpzJSHhDv1sUbh1iOe88S-k6VSJtnJsgJ2SyJu5KbbLScZxIZVjakpT1YBqMonSzdogPaSK-yuiSjrAUI-v02EjqtPkl1dWPE5OhGnDd8uTWHAk6yfdn9HgVUSG5CHjN3FBeu5G84fI4OBtTpQhV3bnbXi2MQHFKMRpBX3qRI/s1737/filter-subgrid-contact-subgrid.png"
    style="margin-left: 1em; margin-right: 1em;"
    ><img
      alt="How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?"
      border="0"
      data-original-height="827"
      data-original-width="1737"
      src="{{ site.baseurl }}/assets/images/045/img_1c12b9a4a1.png"
  /></a>
</div>
<p style="text-align: justify;">
  On the event of switching to Contacts Tab, the script should be executed. So i
  picked the On Tab State Change Event.
</p>
<p style="text-align: justify;">
  Let’s dig deeper into the use case, refer the below image for the fields which
  are there in both Account and Contact forms.&nbsp;
</p>
<p>Account Form:</p>
<div class="separator" style="clear: both; text-align: center;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghSCR2Z0ilMc3EObr8LVCZugE42ahdRuDtRrYKRPd4B8poPzS2qu2tfCudjqw9skHUqhI1bl_pHwOQWz_HOGoUrbzhFLxNam87nMwwF8SfPWSUU4alhabkQm0XKoMyHBUBHFX-OcMXaAqKZvwt88f5rLYiwcPbvvQBL2GiLKKOlpFqWCRlybiozD923RM/s1742/filter-subgrid-account-form.png"
    style="margin-left: 1em; margin-right: 1em;"
    ><img
      alt="How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?"
      border="0"
      data-original-height="468"
      data-original-width="1742"
      src="{{ site.baseurl }}/assets/images/045/img_2c7b1a67f0.png"
  /></a>
</div>
<p>Contact Form:</p>
<div class="separator" style="clear: both; text-align: center;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgg-MPJwZHB-dpGpHpTozwReAO8wcKoiGYXWOpbQ9gjabpeG7Hi-_hP2SrW0kVguJpiVtp_SkI9OjRrva1cKON6S_oxGsOFUeVEc8BkLA5GfkVd12rvGSE4430LgLAIpkseD-hxp73FzB2trlpCgu5SzqvHAL1hcFS-unBXN22ara1hcfZDaOZhvnkm3BA/s564/filter-subgrid-contact-form.png"
    style="margin-left: 1em; margin-right: 1em;"
    ><img
      alt="How to Filter Subgrid Based on Parent Record Fields on Tab Switch in Model-Driven Apps?"
      border="0"
      data-original-height="332"
      data-original-width="564"
      src="{{ site.baseurl }}/assets/images/045/img_a0d4cd65f0.png"
  /></a>
</div>
<p style="text-align: justify;">
  But you can use the fields in the parent and child entity(but the parent
  entity fields should be in the form) which suits for your requirement.&nbsp;
</p>
<p>
  I have used the option set fields as we all know the option set values are in
  the whole number format. Refer the below image for the option set values of
  the fields which we used.
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmO0bjIrda8XTUHi1RRY4HlDa0f1KHg5nkIalN64zrQmu50ddDckSdY_drJUdb27CcjiWMyi8ooOoPEMaVevuQgyK247sBiuBwvGrSOEcOtw5MmVjeEx53bIDcrVjjca-QnkyABO4x82QVJ8uYmj2a0jmgbuR_O0ovj-7qqQQxVOIf3FqpAByUBHYNcj4/s1872/filter-subgrid-optionset-values.png"
    style="margin-left: 1em; margin-right: 1em;"
    ><img
      border="0"
      data-original-height="602"
      data-original-width="1872"
      src="{{ site.baseurl }}/assets/images/045/img_d9e9f5832b.png"
  /></a>
</div>
<p style="text-align: justify;">
  Create a new web JavaScript web resource. I have used the below code to
  accomplish the same. As the code have the condition for checking the current
  tab is “contacts”, if then the filter xml is injected to the sub grid control
  ”accountContactsGrid” and refresh it.&nbsp;
</p>
<p>
  <script src="https://gist.github.com/tamilarasu-arunachalam/6ffaa865aa9cdc75dc1cdc5d5b9882a3.js"></script>
</p>
<p style="text-align: justify;">
  In the Account Form Editor, select the Contacts Tab and in the side pane
  select the event tab and add the JavaScript web resource to the event.&nbsp;
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj17awjCK7kLaiDj95l7zR3NdH96AfB3rYFXRo_q-n0bdz1rS81BOyTYnjalKe0SJDTkMvMBWrUJQBem_6qcHPzerJtuRElcFUasEn4oj4y6fTUZ_R3fdC6g6wtpn-tFNbs1kbyB91JLUtADYc-YS4IzYWCIzFIXNWiepgFmnNY8wNs-ZMfDZmPGTgbze4/s1830/filter-subgrid-contacts-tab-event.png"
    style="margin-left: 1em; margin-right: 1em;"
    ><img
      border="0"
      data-original-height="798"
      data-original-width="1830"
      src="{{ site.baseurl }}/assets/images/045/img_62e753911b.png"
  /></a>
</div>
<p style="text-align: justify;">
  Refer the below snapshot of the contact sub grid which is filtered based on
  the Shipping method and Freight terms. As the parent account have the Shipping
  method as <b>"DHL"</b> and Freight terms as <b>"FOB"</b>(refer to the above
  image for the same), the sub grid filtered the contacts with those
  values.&nbsp;
</p>
<div class="separator" style="clear: both; text-align: center;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc3DExCAndk24FM_kUE0HJSoAqaIowwiImzzS9rL5fjfrNdrllvmbjbrmsjyoAo6EA5l8V7HC2Gzmw5OejFn0DGBTtIghT2O1KOCJAAwp60JPGnKAkQbA7beekHjIhv3oCBTeaBfKmLMBoPClc5wb63tMLLlJW4Qn6Kl60D6EYGhuhhTiAufZX7yy0tNY/s1758/filter-subgrid-result.png"
    style="margin-left: 1em; margin-right: 1em;"
    ><img
      border="0"
      data-original-height="765"
      data-original-width="1758"
      src="{{ site.baseurl }}/assets/images/045/img_c1752dcf08.png"
  /></a>
</div>
<p style="text-align: center;">Have a great day!</p>
