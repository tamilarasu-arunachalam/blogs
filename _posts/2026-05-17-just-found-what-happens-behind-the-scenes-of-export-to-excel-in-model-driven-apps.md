---
post_id: "067"
layout: post
title: "Just Found What Happens Behind the Scenes of Export to Excel in Model‑Driven Apps!"
image: assets/images/067/img_81152b8845.gif
date: 2026-05-17 17:41:00 +0000
category: Dynamics 365 CE
---
I recently worked on something where I had to use **Advanced Find** or filter views every time while exporting weekly or monthly reports. Although we can create **personal views** to make the data sorted, I was curious to know how the filtered data actually gets exported.

So, I checked the **DevTools** and identified the API endpoint and payload used during the export process. Interestingly, I discovered that we can even tweak the **FetchXML**.

[![]({{ site.baseurl }}/assets/images/067/img_72963cac3a.png)]({{ site.baseurl }}/assets/images/067/img_72963cac3a.png)

For an easy implementation, I tried this using a simple **instant flow in Power Automate**. I added an **Invoke an HTTP request** action and configured a POST call to the endpoint: 

```
https://yourorg.crm8.dynamics.com/api/data/v9.0/ExportToExcel
```

[![]({{ site.baseurl }}/assets/images/067/img_2d4666b67e.png)]({{ site.baseurl }}/assets/images/067/img_2d4666b67e.png)

Using the same headers and payload found in DevTools, I ran the flow and it worked as expected. The response contained a **Base64 value** of the exported Excel file. You can refer to the screenshot below.

[![]({{ site.baseurl }}/assets/images/067/img_283ed78e5f.png)]({{ site.baseurl }}/assets/images/067/img_283ed78e5f.png)

After this successful test, I moved on to the actual requirement. The goal was to generate **weekly and monthly reports on a button click**. To achieve this, I created two buttons - **Weekly** and **Monthly -** inside a dropdown command menu.

Next, I created a **JavaScript web resource** named `_generateExcelReport.js_`. I added a function to both buttons and passed a string parameter to identify the report type. I invoked a bound action called **ExportToExcel** (but you can’t find it in Power Automate - I tried). We need to pass the Fetch XML and Layout XML as parameters for the action. I tweaked the Fetch XML based on the button that was clicked. In the response, you receive the Excel file encoded as base64, which I decoded to binary and downloaded using the script. I tested it, and it worked as expected. You can find the script for this implementation below.

> **_Note:_** This approach is not recommended by Microsoft, as it is not mentioned in their documentation.

<script src="https://gist.github.com/tamilarasu-arunachalam/9bfacef867090e6ba141082aa1559750.js"></script>

Refer to the GIF below for a demonstration of the custom button and how the script works.

[![]({{ site.baseurl }}/assets/images/067/img_b4e61bca01.gif)]({{ site.baseurl }}/assets/images/067/img_b4e61bca01.gif)

#### References:

-   [Code to Excel: Export Like a Pro! — Andrew Butenko’s Blog](https://butenko.pro/2024/11/23/code-to-excel-export-like-a-pro/)
-   [Export to Excel Dataverse Table with Power Automate — Ludovic Perrichon](https://ludovicperrichon.com/export-to-excel-dataverse-table-with-power-automate/)
-   [Export to Excel using Dynamics 365 SDK — Dreaming in CRM & Power Platform](https://dreamingincrm.com/2016/11/10/export-to-excel-using-dynamics-365-sdk/)

Have a great day!