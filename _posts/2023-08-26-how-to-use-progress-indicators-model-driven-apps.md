---
layout: post
post_id: '029'
title: How to use Progress Indicators in Model Driven Apps?
date: 2023-08-26 17:41:00 +0000
image: assets/images/029/img_fd36029ce2.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Model Driven Apps
  - Power Apps
  - JavaScript
  - Dynamics 365 CE
---

In Model Driven Apps, we can place a progress indicator at any event using JavaScript. Some people call it loader. In Power Apps it is termed as progress Indicator. The progress indicator will block the screen until it is closed. We can show the progress indicator using the below piece of code.

```javascript
Xrm.Utility.showProgressIndicator("your message");
```

We can close the progress indicator using the below code.

```javascript
Xrm.Utility.closeProgressIndicator();
```

In this article, I have a web resource containing script for showing and closing the progress indicator for a real-time scenario. The code is placed on the on-load event of accounts main form, and it will the set the value for the fax field behind the progress indicator.

[![]({{ site.baseurl }}/assets/images/029/img_ee2fac2a5c.png)]({{ site.baseurl }}/assets/images/029/img_ee2fac2a5c.png)

And below is the code snippet used in the JavaScript web resource used to demonstrate the same.

<script src="https://gist.github.com/tamilarasu-arunachalam/cd9e1ad6ae81d6a20cea34ea108d9501.js"></script>

The progress indicator will show for 3 seconds, and it gets closed after every on-load.

[![]({{ site.baseurl }}/assets/images/029/img_8d49882339.png)]({{ site.baseurl }}/assets/images/029/img_8d49882339.png)

#### References:

[showProgressIndicator](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/showprogressindicator)

[closeProgressIndicator](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/xrm-utility/closeprogressindicator)

Have a great day!
