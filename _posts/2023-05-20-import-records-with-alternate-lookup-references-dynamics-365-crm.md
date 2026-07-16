---
layout: post
post_id: '019'
title: Import records with alternate lookup references in Dynamics 365 CE
date: 2023-05-20 18:29:00 +0000
image: assets/images/019/img_868419228a.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Model Driven Apps
  - Data Management
  - Dynamics 365 CE
  - Data Import
---

If you are in a place of importing bulk data into the Dynamics 365 CE, you have many choices like importing as excel, CSV or XML. But if you are having records for two tables which are related to each other as like accounts and contacts. You have to be careful while importing those records because this import may cause the following error “\*\*_The lookup reference could not be resolved_\*\*”. The error is due to the lookup values which are not present in the table we are looking for. This blog will guide to import the related records at a single stretch.

[![]({{ site.baseurl }}/assets/images/019/img_8a34e78eb5.png)]({{ site.baseurl }}/assets/images/019/img_8a34e78eb5.png)

    For importing records with alternate lookup references, we have to get the data for both the tables. In our case, we have taken accounts and contacts table. Go to the [Environment](https://admin.powerplatform.microsoft.com/environments/) ➔ Settings ➔ Data Management ➔ Data Import Wizard. The wizard will open in the new tab. Click on the Import Data button in the wizard, a dialog box opens up for importing files.

[![]({{ site.baseurl }}/assets/images/019/img_0329e8609f.png)]({{ site.baseurl }}/assets/images/019/img_0329e8609f.png)

For importing, I have two CSV files, one contains data for accounts and another one has for contacts. I have zipped these two files, so that I can upload it as a single file. Click on choose file and select the zip file which we zipped before and click on next.

[![]({{ site.baseurl }}/assets/images/019/img_51498994a2.png)]({{ site.baseurl }}/assets/images/019/img_51498994a2.png)

You will get to a Review File Upload Summary, in which you can make sure your CSV files are uploaded and set the delimiter. As I uploaded a CSV file, so the delimiter was comma(,). Then click on Next.

[![]({{ site.baseurl }}/assets/images/019/img_d9e3d946c3.png)]({{ site.baseurl }}/assets/images/019/img_d9e3d946c3.png)

Map the source files with the dataverse table which you want to import. Ignore if it is correctly mapped already. It will take you to the Data map page where you can see two types of mappings, Default and SampleDataMap. Select Default Mapping and click Next.

[![]({{ site.baseurl }}/assets/images/019/img_105983cc22.png)]({{ site.baseurl }}/assets/images/019/img_105983cc22.png)

In the mapping page, make sure all the fields are mapped correctly. For accounts table, the primary contact (lookup) field should be mapped with the full name field of the contact table.

[![]({{ site.baseurl }}/assets/images/019/img_30417ec007.png)]({{ site.baseurl }}/assets/images/019/img_30417ec007.png)

For the contact table, the Company name (lookup) field should be mapped with the account name field in accounts table.

[![]({{ site.baseurl }}/assets/images/019/img_5cc47399fe.png)]({{ site.baseurl }}/assets/images/019/img_5cc47399fe.png)

Click on Submit to finish the import. After submitting, click on Finish and move to the imports page to track the imports.

[![]({{ site.baseurl }}/assets/images/019/img_5b16ce48bc.png)]({{ site.baseurl }}/assets/images/019/img_5b16ce48bc.png)

In the above image you could see all the imports are successfully completed and in this view you will know how many records are imported or failed while importing.

Have a Great Day!
