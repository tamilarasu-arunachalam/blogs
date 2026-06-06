---
post_id: "068"
layout: post
title: "How I Built a Stunning Admin Dashboard in Power Pages?"
date: 2026-05-24 17:41:00 +0000
category: Power Pages
image: "assets/images/068/img_ceb5e7a952.gif"
description: ""
read_time: "5 min read"
---
When I started building a hospital management app as a weekend project, I never imagined the frontend would become the most exciting part. I set up Power Pages as an external-facing portal - patients could book appointments, staff could track them, and everyone had what they needed in one place. But then I looked at the default design and thought: _this has to change._

Here's the story of how I transformed a generic Power Pages site into a dashboard I'm actually proud of.

The Design Problem Nobody Talks About
-------------------------------------

Power Pages is powerful, but out of the box, it looks like every other portal on the internet. Default headers, default footers, default login screens. For a hospital app, that just didn't feel trustworthy or professional. So I rolled up my sleeves and started customizing — piece by piece.

Bootstrap Icons
---------------

Power Pages already supports Bootstrap for styling, which is a great starting point. To layer in Bootstrap Icons, I created a **content snippet** with the CDN link tag. Power Pages automatically injects it across the site - clean, simple, no hacks needed.

Custom Web Templates
--------------------

This was the game-changer. I found the default header and footer web templates and replaced them entirely. I built three custom templates - **admin-sidebar**, **admin-header**, and **admin-footer** \- tailored specifically for logged-in hospital staff. The result was a cohesive dashboard feel with full control over every pixel.

[![]({{ site.baseurl }}/assets/images/068/img_0cec82bcf4.jpg)](https://blogger.googleusercontent.com/img/a/AVvXsEh_Yd-p_gw7KNf3vhDei--zBfxlB6ooWObRQOpwpVNBHgYTE6-FzVWP4_yR9vN_cMHsJdxPapy1Jkt_pKGatkBQY1f83kNXvP91s2Dqcve74iB2qw4Y-CLaEdStW_O_AlAlbKSoRldkpUh2NJqwbhgrGxHFkFX6ipBmIEY0rapV1m1IWB2IjNZMUwdccxY)

Custom Login Page
-----------------

The default Power Pages login page honestly frustrated me every time I saw it. So I built a custom one - complete with **Microsoft Entra and Google authentication**. It immediately made the app feel more polished and enterprise-ready. Check out my blog about [_How to Customize the Sign in page in Power Pages Easily_](https://www.tamilarasu.blog/2026/03/customize-signin-page-in-power-pages.html) to know how I did that.

[![]({{ site.baseurl }}/assets/images/068/img_571ffe5e22.jpg)](https://blogger.googleusercontent.com/img/a/AVvXsEiiJpSgBMUSM43Fimxg_1B4lqc6D0XUB_JBgKu8dZU82Cjk9dyfSxgeqb0cfJVVNVYMNQ7TaZMtKgfBwYVCfFUCdcbTaHIlh9ht3j4X8zEf1YM0W7l5LgbfXvja3AzVMJTgCGbctX3efaMtQTN7g3Q8QxIH6t1z3U6vpVXAPD0y0ynOUU8WyG-sZabNJqI)

admin-sidebar.html
<script src="https://gist.github.com/tamilarasu-arunachalam/e5c7ef982af2e4ff7a98a8e4e4dc62d3.js?file=side-bar.html"></script>
admin-header.html
<script src="https://gist.github.com/tamilarasu-arunachalam/e5c7ef982af2e4ff7a98a8e4e4dc62d3.js?file=header.html"></script>
admin-footer.html
<script src="https://gist.github.com/tamilarasu-arunachalam/e5c7ef982af2e4ff7a98a8e4e4dc62d3.js?file=footer.html"></script>


The Small Details That Made a Big Difference
--------------------------------------------

A **favicon** might seem trivial, but it signals credibility. I added one, and suddenly the browser tab looked like it belonged to a real product. Here is my blog about [_How to Add a Favicon in Power Pages?_](https://www.tamilarasu.blog/2026/04/how-to-add-favicon-in-power-pages.html) and do check out to know if you want to.

[![]({{ site.baseurl }}/assets/images/068/img_a18cb480e9.jpg)](https://blogger.googleusercontent.com/img/a/AVvXsEgossKQFBwQri4xyyRstZWtdgYdqn6GAZAymFrTFb0X9u2ZFBYvKTIebryzwb4FErAC0ZaXTKv3OBEy4kUVl9vbHpbScopm_s4TjWnFP6Lvb00Yddvys2Zxkuyvi68uvkDASLO_ebxi7bPDpeaQ4gY1tf0ujNJ-1ai_a9E_wTBxR44DwIHXK1tUAPWxYJo)

For **charts and graphs**, I skipped the built-in Power Apps charts - they felt too rigid for a custom dashboard. Instead, I used **Chart.js**, an open-source library that gave me colorful, interactive visuals with full creative control.

[![]({{ site.baseurl }}/assets/images/068/img_862798299f.jpg)](https://blogger.googleusercontent.com/img/a/AVvXsEj-2V0UWBK7pICAw4WbIUbXqDvkTgsOOcrZSs1EmEmPpYv54Q3Wgi8oY3FE-G29CE2HvUub8jEUcEmFYP-2u1MdwZWTRcCUpo8Y0yEgQxDX49khO8bSHqCdgiTiTnaCqvMy08i3flUaqtJNkXc7Wvr_8kCSoGJV_Si7QY2fVNSQOBMypzVCcNh7OulDbcA)

And for **profile avatars**, I used the **UI Avatars API** to generate initials-based profile images dynamically. One image tag. Zero effort. Looks great.

[![]({{ site.baseurl }}/assets/images/068/img_973ca01c0e.jpg)](https://blogger.googleusercontent.com/img/a/AVvXsEiMaZhK5h6ZWiyVS-hxXlf2yyi8JXGGkPWv_vv_9claSenkIjhJPuGkBFqQvGzIXq-c_if4ty_5e1NmHpG2vTHiUvPU3SIlo84aobT1D8Ed496k_22dFkSNq5bFFMSD3VFyDGOxwSp1DHKWiHqqwCr8KDJeCQ1OqfTOug10offChKpnvzkRmtlrxita9fw)

Finally
-------

Building a custom admin dashboard in Power Pages is absolutely doable - you just need to know which defaults to override and which tools to bring in from outside. Bootstrap Icons, Chart.js, UI Avatars, and custom web templates each solved a specific problem without overcomplicating things.

### References:

*   [Get started with Bootstrap · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
*   [Bootstrap Icons · Official open source SVG icon library for Bootstrap](https://icons.getbootstrap.com/)
*   [Chart.js - Open source HTML5 Charts for your website](https://www.chartjs.org/)
*   [Generate avatars with initials — User Initial avatars](https://ui-avatars.com/)
*   [Font Awesome icons in Power Pages — Ulrikke Akerbæk](https://ulrikkeakerback.com/)

Have a great day!