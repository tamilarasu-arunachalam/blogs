---
layout: post
post_id: '053'
title: Show/Hide Ribbon Buttons for Subgrids of the Same Table in Model Driven Apps
date: 2025-11-30 17:41:00 +0000
image: assets/images/053/img_72426d992d.gif
description: ''
meta_keywords: ''
category: Dynamics 365 CE
read_time: ''
categories:
  - Dynamics 365 CE
  - Dynamics 365 CRM Online
  - Dynamics 365 Web API
  - JavaScript
  - Model Driven Apps
  - PowerFX
  - Power Apps
---

While working on one of my weekend Power Apps Model-Driven Apps projects, I ran into an interesting requirement. I had **three subgrids of the same child entity** placed inside the parent entity’s main form. Each subgrid needed to show a drop-down command with buttons — but the tricky part was:

-   Each subgrid should show different buttons based on its context.
-   All buttons should call the same JavaScript function but with different parameters.
-   The visibility must change dynamically depending on which subgrid the user is working in.

After trying multiple approaches, I found that the best way was to configure everything directly inside the **Power Apps Command Bar Editor**. Below is a simple breakdown of how I achieved it.

- [Scenario Overview](#scenario-overview)
- [Main Form Setup](#main-form-setup)
- [Setting Up Command Button Visibility](#setting-up-command-button-visibility)
- [Setting Up Command Button Action](#setting-up-command-button-action)
- [Demonstration](#demonstration)

### Scenario Overview

I had two tables:

-   **Doctor** – Parent entity
-   **Appointments** – Child entity

Inside the Doctor main form, I added three Appointments subgrids:

-   In-Progress Appointments
-   Upcoming Appointments
-   Completed Appointments

Each subgrid displays appointments based on the appointment status. The key functionality was simple - allow the user to **move a record from one subgrid to another** by updating the appointment status.

### Main Form Setup

Below is a quick view of how the main form was arranged, with all three subgrids placed inside the Doctor record:  

[![]({{ site.baseurl }}/assets/images/053/img_5f05052ebf.png)]({{ site.baseurl }}/assets/images/053/img_5f05052ebf.png)

### Setting Up Command Button Visibility

Since all three buttons perform similar actions, I grouped them inside a single drop-down called **“Move To”**.

The drop-down should appear only when a record is selected. I used the following Power FX formula:

```jsx
!IsEmpty(Self.Selected.AllItems)
```

[![]({{ site.baseurl }}/assets/images/053/img_1b6387d2c6.png)]({{ site.baseurl }}/assets/images/053/img_1b6387d2c6.png)

Next, each button under the drop-down should only appear based on the selected record’s current status. For example:

-   If the record is in "Upcoming", show only "Move to In-Progress" and "Move to Completed".
-   If the record is in "Completed", hide the option to move forward.

Here’s the Power FX formula I used for conditional button visibility:

```jsx
If(
    Or(
        Text(First(Distinct(Self.Selected.AllItems,'Appointment Status')).Value)="Checked-In",
        Text(First(Distinct(Self.Selected.AllItems,'Appointment Status')).Value)="Completed"
    ),
    true,
    false
)
```

[![]({{ site.baseurl }}/assets/images/053/img_2782410836.png)]({{ site.baseurl }}/assets/images/053/img_2782410836.png)

### Setting Up Command Button Action

For the actual update, I added a **JavaScript Web Resource** and connected it to the button action.

[![]({{ site.baseurl }}/assets/images/053/img_f8ce18e97a.png)]({{ site.baseurl }}/assets/images/053/img_f8ce18e97a.png)

The JavaScript function updates the appointment status and refreshes all the subgrids. It accepts three parameters:

-   **SelectedControlSelectedItemIds** – list of selected records
-   **Status value** – the new appointment status
-   **primaryControl** – the form context

Here’s the script:

<script src="https://gist.github.com/tamilarasu-arunachalam/8dda3400f0d7ab65b952eece822900d7.js"></script>

### Demonstration

Here’s a quick look at how the feature works in the form:

[![]({{ site.baseurl }}/assets/images/053/img_5c93336016.png)]({{ site.baseurl }}/assets/images/053/img_5c93336016.png)

[![]({{ site.baseurl }}/assets/images/053/img_fe586e5e10.png)]({{ site.baseurl }}/assets/images/053/img_fe586e5e10.png)

[![]({{ site.baseurl }}/assets/images/053/img_30564f37c5.png)]({{ site.baseurl }}/assets/images/053/img_30564f37c5.png)

Have a great day!
