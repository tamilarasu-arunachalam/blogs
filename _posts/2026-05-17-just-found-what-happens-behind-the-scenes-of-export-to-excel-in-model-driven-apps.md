---
post_id: "067"
layout: post
title: "Just Found What Happens Behind the Scenes of Export to Excel in Model‑Driven Apps!"
date: 2026-05-17 17:41:00 +0000
category: Dynamics 365 CE
---

<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNXc2V8ao6n6KFHhyphenhyphen1l0mwpGsn1Km03uTzV904GjkgoICu3W618I-LhgO218ZBCk3OHuL4NdkLQNbwGt0Ebylqysruo7r_FpV6BFm5dXC9DCeqZuKj_Ggt20FcxSg3pGAp9BDMMJ2Z5K_m52NBV2eAXRjqFwk0p9_wAZvYic2FDuWyNpbwkki7TfCWdaQ/s480/1000115107.gif" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="270" data-original-width="480" src="{{ site.baseurl }}/assets/images/067/img_81152b8845.gif" /></a></div><p class="graf graf--p" name="f526" style="text-align: justify;">
  I recently worked on something where I had to use
  <strong class="markup--strong markup--p-strong">Advanced Find</strong> or
  filter views every time while exporting weekly or monthly reports. Although we
  can create
  <strong class="markup--strong markup--p-strong">personal views</strong> to
  make the data sorted, I was curious to know how the filtered data actually
  gets exported.
</p>
<p class="graf graf--p" name="c079">
  So, I checked the
  <strong class="markup--strong markup--p-strong">DevTools</strong> and
  identified the API endpoint and payload used during the export process.
  Interestingly, I discovered that we can even tweak the
  <strong class="markup--strong markup--p-strong">FetchXML</strong>.
</p>
<p class="graf graf--p" name="c079"></p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEip-EueoO7JNWBauLWe4tzio7hSM_sKeDdJvHfXIomSktXToUYSaqnBbDwQlO_Ufw9OlepQIlnbe-4sMOY3Viq0w49lNedhex8pN3cuj0mtR26RrJf4Qq4zjbDMBfZrBR0jxNnsLXnBUsemhrJvHMLzgCgnDkbke9ELa2UFLpXO4ZuUTf4FGcVIEZCjfx4" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="559" data-original-width="1000" src="{{ site.baseurl }}/assets/images/067/img_72963cac3a.png" /></a>
</div>
<br />
<p></p>
<p class="graf graf--p" name="f1a5" style="text-align: justify;">
  For an easy implementation, I tried this using a simple
  <strong class="markup--strong markup--p-strong">instant flow in Power Automate</strong>. I added an
  <strong class="markup--strong markup--p-strong">Invoke an HTTP request</strong>
  action and configured a POST call to the
  endpoint:&nbsp;</p><pre><code>https://yourorg.crm8.dynamics.com/api/data/v9.0/ExportToExcel</code></pre>
<p></p>
<p class="graf graf--p" name="f1a5"></p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEi8zVM-mRXInNL_Kb9GSNlbbLntlVLZKIznibItoSmJJIAzCciYWQF_wkfDWTeSMIKyF6AFiYIQSbKXVQXQpURQ10ugCRH3-II3lkTrz5D9LaS07Xd3MmN4SExEfLkbSiUGyrpcG3mV_0xOgVi3ybiKjzaN1FN_birSrGu2KMUnhy6gfSb7ad5AxL5HcMQ" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="878" data-original-width="1000" src="{{ site.baseurl }}/assets/images/067/img_2d4666b67e.png" /></a>
</div>
<p></p>
<p class="graf graf--p" name="2581" style="text-align: justify;">
  Using the same headers and payload found in DevTools, I ran the flow and it
  worked as expected. The response contained a
  <strong class="markup--strong markup--p-strong">Base64 value</strong> of the
  exported Excel file. You can refer to the screenshot below.
</p>
<p class="graf graf--p" name="2581"></p>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/a/AVvXsEgH2ktlfiBPA9JgmvAo9_Tgo-eYw_co1NRnR0jwHJy60qf3ZYN3JBHOSpC3Wd6P4fIadNFTKp9eDvdUsTZbiHkvcoYH5psWUY_CGZpHJ0ERv6m0vW5UZZ7p3eLYwYyocSk8kzhMJ9pm4GRAfrLMJexS1LeZA5QZacf5cgQZXt6At8RQdTeuany4Z4U1b0o" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="881" data-original-width="839" src="{{ site.baseurl }}/assets/images/067/img_283ed78e5f.png" /></a>
</div>
<p></p>
<p class="graf graf--p" name="9219" style="text-align: justify;">
  After this successful test, I moved on to the actual requirement. The goal was
  to generate
  <strong class="markup--strong markup--p-strong">weekly and monthly reports on a button click</strong>. To achieve this, I created two buttons -
  <strong class="markup--strong markup--p-strong">Weekly</strong> and
  <strong class="markup--strong markup--p-strong">Monthly - </strong>inside a
  dropdown command menu.
</p>
<p class="graf graf--p" name="1a3b" style="text-align: justify;">
  Next, I created a
  <strong class="markup--strong markup--p-strong">JavaScript web resource</strong>
  named
  <code><em>generateExcelReport.js</em></code>.<span style="text-align: left;"> I added a function to both buttons and passed a string parameter to identify the report type. I invoked a bound action called </span><strong class="markup--strong markup--p-strong" style="text-align: left;">ExportToExcel</strong><span style="text-align: left;"> (but you can’t find it in Power Automate - I tried). We need to pass the Fetch XML and Layout XML as parameters for the action. I tweaked the Fetch XML based on the button that was clicked. In the response, you receive the Excel file encoded as base64, which I decoded to binary and downloaded using the script. I tested it, and it worked as expected. You can find the script for this implementation below.</span></p>
<blockquote class="graf graf--blockquote" name="3b5c"><strong><em>Note:</em></strong> This approach is not recommended by Microsoft, as it is not mentioned in their documentation.</blockquote><p></p>
<script src="https://gist.github.com/tamilarasu-arunachalam/9bfacef867090e6ba141082aa1559750.js"></script>
<p class="graf graf--p" name="0ac9" style="text-align: justify;">
  Refer to the GIF below for a demonstration of the custom button and how the
  script works.
</p>
<div class="separator" style="clear: both; text-align: center;">
 <p><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbyhLbZCU1rB1u6C9Rint9xFiF3IEiYSB7OEmNqLMxwDsZEqd_YcF0UZG5vVVNhQwGoizeNYuBB3YpV4V6_CKujoz8ENA6pE8WiI10YA8W14yfDY0pzyvZKvQn8OFUm9YLDgCQ7OpSvVQGINE4Er0X3nmSofW0lEQkHsIhAfHe8Y66xmvVgBc45R57XmM/s1920/1_C5zmYIXuEeonVcfrhaaY-Q.gif" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1080" data-original-width="1920" src="{{ site.baseurl }}/assets/images/067/img_b4e61bca01.gif" /></a></p>
</div>
<h4 class="graf graf--h4" name="44ce">References:</h4>
<ul class="postList">
  <li class="graf graf--li" name="910a">
    <a class="markup--anchor markup--li-anchor" data-href="https://butenko.pro/2024/11/23/code-to-excel-export-like-a-pro/" href="https://butenko.pro/2024/11/23/code-to-excel-export-like-a-pro/" rel="noopener" target="_blank">Code to Excel: Export Like a Pro! — Andrew Butenko’s Blog</a>
  </li>
  <li class="graf graf--li" name="be11">
    <a class="markup--anchor markup--li-anchor" data-href="https://ludovicperrichon.com/export-to-excel-dataverse-table-with-power-automate/" href="https://ludovicperrichon.com/export-to-excel-dataverse-table-with-power-automate/" rel="noopener" target="_blank">Export to Excel Dataverse Table with Power Automate — Ludovic
      Perrichon</a>
  </li>
  <li class="graf graf--li" name="f43c">
    <a class="markup--anchor markup--li-anchor" data-href="https://dreamingincrm.com/2016/11/10/export-to-excel-using-dynamics-365-sdk/" href="https://dreamingincrm.com/2016/11/10/export-to-excel-using-dynamics-365-sdk/" rel="noopener" target="_blank">Export to Excel using Dynamics 365 SDK — Dreaming in CRM &amp; Power
      Platform</a>
  </li>
</ul>
<p class="graf graf--p" name="aa7d" style="text-align: center;">
  Have a great day!
</p>
