---
post_id: "020"
layout: post
title: "Import Price List Items to Dynamics 365 CE using Data Imports"
date: 2023-05-28 05:41:00 +0000
category: Dynamics 365 CE
image: assets/images/020/img_d4c2b82a69.png
categories: ["Data Management", "Dynamics 365 CE", "Dataverse", "Data Import"]
---
Importing data to Price list items table is not easy as product table. Because the price list items include lookup fields from different tables. Sometimes the import may lead to “_The lookup reference could not be resolved”_ error. For that, we have to follow some simple steps to accomplish this import. 

### **Solution:**

[![]({{ site.baseurl }}/assets/images/020/img_1a81324a3b.png)]({{ site.baseurl }}/assets/images/020/img_1a81324a3b.png)

-   Create an Excel table with the following columns, which are Price List, Product, Unit, Quantity Selling Option, Pricing Method, and Amount. Save the file as CSV format.

        _**Note:** Sometimes Excel file will throw errors while importing through data import. So, we go for CSV._

[![]({{ site.baseurl }}/assets/images/020/img_d20fc803e6.png)]({{ site.baseurl }}/assets/images/020/img_d20fc803e6.png)

-   Go to the Environment ➔ Settings ➔ Data Management ➔ Data Import Wizard. Click on the Import Data button in the wizard, a dialog box opens up for importing files. 

[![]({{ site.baseurl }}/assets/images/020/img_a62110b320.png)]({{ site.baseurl }}/assets/images/020/img_a62110b320.png)

-   Choose the file which we created and hit the next button. In the Review page, unless you have any change in delimiter, click on next. Select Default in Data Map and click on next. 

[![]({{ site.baseurl }}/assets/images/020/img_dc4c4ad867.png)]({{ site.baseurl }}/assets/images/020/img_dc4c4ad867.png)

-   Select Price List Item in Record type and click next.

[![]({{ site.baseurl }}/assets/images/020/img_41e9aea92d.png)]({{ site.baseurl }}/assets/images/020/img_41e9aea92d.png)

-   In the map fields page, make sure all the fields are mapped correctly and replace the Product ID with the Name in the Product Lookup. Then click next.

[![]({{ site.baseurl }}/assets/images/020/img_08fb6e0983.png)]({{ site.baseurl }}/assets/images/020/img_08fb6e0983.png)

-   Review the mapping and navigate to next page and submit the mapping.

[![]({{ site.baseurl }}/assets/images/020/img_0e05d01a8d.png)]({{ site.baseurl }}/assets/images/020/img_0e05d01a8d.png)

-   In the imports page, we can see the status of our import, and it is imported successfully without any error. I have accomplished the import of Price List Items with this simple way.

Have a Good Day!