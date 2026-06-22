---
layout: post
post_id: '074'
title: How to Play Sound Effects on Validation Errors in Dynamics 365 CE Using JavaScript
date: 2026-06-21T11:11
image: assets/images/074/play-sound-on-validation-errors-d365-crm.png
description: Learn how to play sound effects for validation errors in Dynamics 365 CE using JavaScript and web resources. A creative workaround to enhance user experience.
meta_keywords: Dynamics 365 CE sound effects, Dataverse audio workaround, Dynamics 365 JavaScript validation, Play sound on error Dynamics 365, CRM UX enhancements, Web resource tricks Dynamics 365, Dynamics 365 form scripting
category: Dynamics 365 CE
read_time: 5 mins
published: true
---

A few days ago, I came across a trending tweet where someone asked for a VS Code extension that plays a loud “Faaaaaaaaah” sound whenever an error occurs while coding.

![tweet for asking someone to make a vs code extension which plays FAAAAH sound whenever a test fails](/assets/images/074/tweet.jpg)

A few days later, when I checked the VS Code extensions marketplace, I noticed several extensions built for exactly that purpose.

![VS Code extension playing FAAAAH sound on test fails or coding errors](/assets/images/074/extensions.png)

That sparked a thought:
 **“What if we could play a sound effect for validation errors in Dynamics 365 CE?”**

Since audio files like `.mp3` are not supported directly in Dataverse web resources, we can work around this limitation by **renaming the file extension to `.png` or `.jpg`** and uploading it as a web resource.

After uploading the file, we can create a **JavaScript web resource** to handle the playback of the audio whenever a validation error occurs.

I downloaded two sound effects:

- One for a **positive outcome**
- One for a **negative outcome (error)**

Using the below JavaScript function, we can trigger these sounds based on validation results.

<script src="https://gist.github.com/tamilarasu-arunachalam/ed15b32dae1396c6a7576e45b2c74faf.js"></script>

Since the same validation logic is applied to multiple fields, we can use the below **reusable function** for the **OnChange event**.

To identify which field triggered the event, we use `executionContext.getEventSource().getName()`. This helps us dynamically fetch the field’s logical name and apply the appropriate **error notification**.

For demonstration purposes, I used the **Appointment form** and attached the function to the **OnChange event** of:

- First Name
- Last Name

Whenever a validation error occurs, a sound effect is played, enhancing the user experience.

While this approach may not be suitable for all production scenarios, it’s a creative and fun way to explore the extensibility of Dynamics 365 CE.

If you found this interesting, you may want to check out my other blogs as well!

See the demonstration video below
<video src="/assets/images/074/sound-effects-in-d365-crm.mp4" width="720" height="280" controls></video>

#### References:

- [Playing sounds in CRM — Power Platform & Dynamics CRM Tip Of The Day](https://crmtipoftheday.com/892/tip-892-playing-sounds-in-crm/)
- [Play Custom CRM Sounds with JavaScript Workaround \| Aladdin Farajat posted on the topic \| LinkedIn](https://www.linkedin.com/posts/aladdin-farajat-2055b1236_dynamics365-powerplatform-javascript-activity-7409664330243190784-VIT1)
