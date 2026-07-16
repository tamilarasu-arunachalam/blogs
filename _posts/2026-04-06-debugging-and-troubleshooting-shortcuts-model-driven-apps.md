---
layout: post
post_id: '063'
title: Best Way to Troubleshoot Model-Driven Apps with Debugging Shortcuts
date: 2026-04-06 17:41:00 +0000
image: assets/images/063/img_e3160e0be0.gif
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Model Driven Apps
  - Dynamics 365 CE
  - Dynamics 365 CRM Online
  - Debugging
  - Troubleshooting
---

There is a quote about debugging from Brian Kernighan (Author and Co-contributor for Unix):

```plain
Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.    – *Brian Kernighan*
```

As a developer working in this platform for about five years, I thought about some tips and shortcuts I wish I had known earlier. After learning these shortcuts, I haven’t been stuck without knowing where and what to debug. If you are a developer, tester, or business analyst, these shortcuts and tips will increase your productivity. In this blog, I will provide the shortcut, its uses, and how you can create your shortcut.

## Debugging:

As a first step, we will go with the ribbon debugger. If you're a developer, you may need to work more on the buttons. With this, you can easily check the details of command details with action, enable rule details, and display rule details. Moreover, you can see the buttons even when they are hidden. To enable this, you just have to append `&ribbondebug=true` to the URL.

[![]({{ site.baseurl }}/assets/images/063/img_143f6a47d4.png)]({{ site.baseurl }}/assets/images/063/img_143f6a47d4.png)

With this, you can debug all kinds of ribbons including Application, View, Form, and Sub-grid. Yes, adding the query parameter every time to the URL is sometimes annoying, so I came up with something that will add the query to the URL by clicking on a bookmark. Yes, that is a bookmarklet, which is a browser bookmark that executes JavaScript instead of opening a webpage.

### Adding Bookmarklet

[![]({{ site.baseurl }}/assets/images/063/img_b5da2ef098.png)]({{ site.baseurl }}/assets/images/063/img_b5da2ef098.png)

To add the bookmarklet, go to the bookmarks page and click on “Add a bookmark.” Give a proper name and add the below code in the place of URL. If you are using Edge, you can't create a new favourite directly, so you have to add any site to favourite and update it with the script.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]ribbondebug=true/.test(n)?alert("ribbondebug already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"ribbondebug=true"}catch(t){alert("Error: "+t.message)}})();
```

These bookmarklets will only work on Dynamics 365 and Model-driven App pages, as we have the condition to check whether the current page has the context or not. You can do the same for the following bookmarklets as well.

[![]({{ site.baseurl }}/assets/images/063/img_19430cee06.png)]({{ site.baseurl }}/assets/images/063/img_19430cee06.png)

Similarly, you can use `&navbar=off` to hide the navigation pane on the left. You can use the below bookmarklet to use this frequently.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]navbar=off/.test(n)?alert("Navbar already disabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"navbar=off"}catch(t){alert("Error: "+t.message)}})();
```

## Flags:

`**&flags=DisableFormCommandbar=true**`: This will remove the command/ribbon from the form. For that, we have to append `&flags=DisableFormCommandbar=true` to the URL. To make it easier, you can use the below script in the bookmarklet to make it work on clicking the bookmark.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]flags=DisableFormCommandbar=true/.test(n)?alert("DisableFormCommandbar already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"flags=DisableFormCommandbar=true"}catch(t){alert("Error: "+t.message)}})();
```

`**&flags=DisableFormHandlers=true**`: This will disable all the form handlers in the form that are added in the events including onLoad, onSave, onChange, Business Rules, and Tab State Change. For that, we have to append `&flags=DisableFormHandlers=true` to the URL.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]flags=DisableFormHandlers=true/.test(n)?alert("DisableFormHandlers already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"flags=DisableFormHandlers=true"}catch(t){alert("Error: "+t.message)}})();
```

-   `**&flags=DisableFormHandlers=<eventName>**`: disables the event handler on the specified event. For example: `&flags=DisableFormHandlers=onload`.
-   `**&flags=DisableFormHandlers=<eventName>_<index>**`: disables the event handler on the specified event at the mentioned index. For example: `&flags=DisableFormHandlers=onsave_0`.
-   `**&flags=DisableFormHandlers=<eventName><startIndex><endIndex>**`: disables the event handlers in the specified range. For example: `&flags=DisableFormHandlers=onload_3_5`.

`**&flags=DisableFormLibraries=true**`: disables all the form libraries from getting loaded on the event which is added.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]flags=DisableFormLibraries=true/.test(n)?alert("DisableFormLibraries already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"flags=DisableFormLibraries=true"}catch(t){alert("Error: "+t.message)}})();
```

-   `**&flags=DisableFormLibraries=<index>**`: disables libraries at the specified index. For example: `&flags=DisableFormLibraries=0`.
-   `**&flags=DisableFormLibraries=<startIndex>_<endIndex>**`: disables the libraries in the specified range. For example: `&flags=DisableFormLibraries=1_3`.

> **_Note:_** DisableFormHandlers only disables the handler; it doesn't stop the library from loading. As recommended by Microsoft, DisableFormHandlers should be used first to check whether the issue goes away. If not, try DisableFormLibraries.

`**&flags=DisableWebResourceControls=true**`: disables the web resource controls added to the form.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]flags=DisableWebResourceControls=true/.test(n)?alert("DisableWebResourceControls already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"flags=DisableWebResourceControls=true"}catch(t){alert("Error: "+t.message)}})();
```

`**&flags=DisableFormControl=<controlName>**`: disables the control on the form.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]flags=DisableFormControl=crf4c_myWebReSrc/.test(n)?alert("DisableFormControl already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"flags=DisableFormControl=crf4c_myWebReSrc"}catch(t){alert("Error: "+t.message)}})();
```

`**&flags=DisableBusinessProcessFlow=true**`: disables all the business process flows in the form.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]flags=DisableBusinessProcessFlow=true/.test(n)?alert("DisableFormControl already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"flags=DisableBusinessProcessFlow=true"}catch(t){alert("Error: "+t.message)}})();
```

You can even combine all the flags into a single query parameter like the one below:

```jsx
&flags=DisableFormHandlers=true,DisableWebResourceControls=true,DisableFormCommandbar=true,DisableBusinessProcessFlow=true
```

## Troubleshooting

At times while debugging, we lack data and information about the application and the system. For that, we have to navigate to the URL: `https://myorg.crm.dynamics.crm/home/home_debug.aspx`.

You can either bookmark it or use the below bookmarklet. But it will only work on CRM Online. You can find more insights about the application like Data Source, Component versions, Browser Version, User details, and Tenant ID.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e)return void alert("Please navigate to CRM page.");window.open(e.getClientUrl()+"/home/home_debug.aspx","_blank")}catch(t){alert("Error: "+t.message)}})();
```

The below image refers to the snapshot of my application's Debug Information.

[![]({{ site.baseurl }}/assets/images/063/img_10463fca4b.png)]({{ site.baseurl }}/assets/images/063/img_10463fca4b.png)

## Diagnostics

To diagnose the system and its performance, we can use the diagnostics page. You can get to know the specifications of the system. For that, we can use the URL: `https://myorg.crm.dynamics.crm/tools/diagnostics/diag.aspx`.

And you can find the bookmarklet for that below:

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e)return void alert("Please navigate to CRM page.");window.open(e.getClientUrl()+"/tools/diagnostics/diag.aspx","_blank")}catch(t){alert("Error: "+t.message)}})();
```

After clicking run, we can see the Status and Result of the run. Please refer to the below image.

[![]({{ site.baseurl }}/assets/images/063/img_3234ecaea7.png)]({{ site.baseurl }}/assets/images/063/img_3234ecaea7.pn)

## Client Performance Center:

If you want to understand the performance of the form, you have to use the query parameter `&perf=true` in the URL. I have created a bookmarklet for this too. You can get it from the below code.

```js
javascript:(function(){try{var e=window.top.Xrm&&window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&]perf=true/.test(n)?alert("DisableFormControl already enabled!"):location.href=n+(/\?/.test(n)?"&":"?")+"perf=true"}catch(t){alert("Error: "+t.message)}})();
```

It will be like the below image and you can find some interesting insights from this shortcut.

[![]({{ site.baseurl }}/assets/images/063/img_5f14647988.png)]({{ site.baseurl }}/assets/images/063/img_5f14647988.png)

## References:

-   [Troubleshoot form issues in model-driven apps (Power Apps | Microsoft Learn)](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/troubleshoot-forms)
-   [CRM Debug Info from your Browser – The ReadyXRM Blog by Nick Doelman](https://readyxrm.blog/2016/10/19/crm-debug-info-from-your-browser/)
-   [Tip #1160: Bring up client performance center – Power Platform & Dynamics CRM Tip Of The Day](https://crmtipoftheday.com/1160/bring-up-client-performance-center/)
-   [Unlock Hidden Superpowers in Dynamics 365 CRM with Simple URL Tweaks](https://www.tamilarasu.blog/2025/04/unlock-hidden-superpowers-in-dynamics-crm-url-tweaks.html)

Have a great day!
