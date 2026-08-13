---
layout: post
post_id: '082'
title: How to Clone Dataverse Records with Power Fx in Model-Driven Apps
date: 2026-08-23T23:11
image: ''
description: Learn how to clone records in a Model-Driven App using PowerFx and command buttons. Reduce manual data entry, save time, and even clone related child records without using JavaScript.
meta_keywords: Power Fx clone record, Model Driven App clone record, Dataverse clone record, Clone Account Power Fx, Clone Child Records Dataverse, Clone Records PowerFx Dynamics 365 CRM, Clone Account PowerFx Command bar
category: Dataverse
read_time: 10 mins
published: true
---

If you or someone in your role has to create the same kind of records manually multiple times, you may have already hated doing it. So, I came up with something to solve this problem.

For example, if you are a salesperson who has to create orders with almost the same data every time, with only minimal changes, you still need to create a new record from scratch. You may have wished there was a **Clone** option available. So, I developed a cloning functionality using a command button and Power Fx.

I have already posted a blog on cloning a record in a Model-Driven App using a command button and JavaScript. However, there is another way to achieve this. Yes, we can use **Power Fx** instead of JavaScript to clone a record. Without much complexity, this can be done easily using Power Fx.

As a demonstration, I created a command button named **Clone Account** on the Account form. In the action, select **Run Formula** and click **Open Formula Bar**. Once the formula bar opens, use the Power Fx code below, then save and publish it.

If you want to clone a record along with its child records, you can do that as well. For example, if you want to clone an order along with the same set of products, you can use the Power Fx code below to achieve that.

Refer to the GIF below for a demonstration.

![](/assets/images/fcafc3a119a3/Screen_Recording.webp)

If you want to clone a record using JavaScript, you can refer to my blog on [Clone a record in Dynamics 365 CE using JavaScript](https://tamilarasu.blog/clone-record-dynamics-365-ce-using-javascript.html)

#### References:

- [Clone records with Power Fx & custom command bar button — Jukka Niiranen blog](https://jukkaniiranen.com/2021/10/clone-records-with-power-fx-custom-command-bar-button/)
- [Customize The Command Bar In A Power Apps Model-Driven App](https://www.matthewdevaney.com/customize-the-command-bar-in-a-power-apps-model-driven-app/)
