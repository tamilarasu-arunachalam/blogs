---
post_id: "063"
layout: post
title: "Best Way to Troubleshoot Model-Driven Apps with Debugging Shortcuts"
date: 2026-04-06 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Model Driven Apps", "Dynamics 365 CE", "Dynamics 365 CRM Online", "Debugging", "Troubleshooting"]
---

<article>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-2dt7GeTFcZiXlMGu5TMzs80oMppMA6EPrX5QP9cgDLC_EdbYEyFmdIOGxoLnO6YfA6G4e75f0a0kgQl4ipcA0G2ZvdKw1uxGe_TSYUAc7tc7rKAgm7FEfvZbWSbe4eu3sXDiuXzCS2bnWgX1QgMMzReUAFrYXJffjdb_zrRRGRpcTtc3wd00PZFdCg0/s1600/debug-debugging.gif" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="124" data-original-width="220" height="361" src="{{ site.baseurl }}/assets/images/063/img_e3160e0be0.gif" width="640" /></a></div>
  <p>
    There is a quote about debugging from Brian Kernighan (Author and
    Co-contributor for Unix):
  </p>
  <blockquote>
    <i>Debugging is twice as hard as writing the code in the first place.
      Therefore, if you write the code as cleverly as possible, you are, by
      definition, not smart enough to debug it.</i><i><div style="text-align: right;"><i>– Brian Kernighan</i></div></i></blockquote>
  <p style="text-align: justify;">
    As a developer working in this platform for about five years, I thought
    about some tips and shortcuts I wish I had known earlier. After learning
    these shortcuts, I haven’t been stuck without knowing where and what to
    debug. If you are a developer, tester, or business analyst, these shortcuts
    and tips will increase your productivity. In this blog, I will provide the
    shortcut, its uses, and how you can create your shortcut.
  </p>

  <h2>Debugging:</h2>

  <p style="text-align: justify;">
    As a first step, we will go with the ribbon debugger. If you're a developer,
    you may need to work more on the buttons. With this, you can easily check
    the details of command details with action, enable rule details, and display
    rule details. Moreover, you can see the buttons even when they are hidden.
    To enable this, you just have to append
    <code>&amp;ribbondebug=true</code> to the URL.
  </p>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTI99Kdxno36q1odNGhhGbriRwP1uNQklRV8oBJxwBo-ZPIGkvgSFfWbNEgkr8tuMbECtLeJqqQkUqfZjQ1upgyk2nSfTDu_Vpzu7FsaLsH5s7Z76xlmq4594fS66AuTmoboLF6hR3uNZHWSkrHC00IJlmiT7rOYKTUP9VRLDpxxyLx-Uqlh08SXsUfNU/s1919/command-checker.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="957" data-original-width="1919" src="{{ site.baseurl }}/assets/images/063/img_143f6a47d4.png" /></a>
  </div>
  <p style="text-align: justify;">
    With this, you can debug all kinds of ribbons including Application, View,
    Form, and Sub-grid. Yes, adding the query parameter every time to the URL is
    sometimes annoying, so I came up with something that will add the query to
    the URL by clicking on a bookmark. Yes, that is a bookmarklet, which is a
    browser bookmark that executes JavaScript instead of opening a webpage.
  </p>

  <h3>Adding Bookmarklet</h3>

  <p></p>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/a/AVvXsEgMsuHI3mVDpze0ypjUev_AmIAxWzC-aidszchiBH7G2U_IJ-Arus9y2wlV7hgE_wXmky3vrvjEEh9A4ZE0L6WjA0ChnOe642Bj4gv-FdygAjSjrltv9qBqBnc4EcLO-Bqmd95XHvHQjMCPgsudFW2H2dlSsJ1_KWj1-vsDBBd7woQThCdbMt4Zabago90" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="693" data-original-width="1095" src="{{ site.baseurl }}/assets/images/063/img_b5da2ef098.png" /></a>
  </div>
  <p></p>
  <p style="text-align: justify;">
    To add the bookmarklet, go to the bookmarks page and click on “Add a
    bookmark.” Give a proper name and add the below code in the place of URL. If
    you are using Edge, you can't create a new favourite directly, so you have
    to add any site to favourite and update it with the script.
  </p>
  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]ribbondebug=true/.test(n)?alert("ribbondebug already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"ribbondebug=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>
  <p>
    These bookmarklets will only work on Dynamics 365 and Model-driven App
    pages, as we have the condition to check whether the current page has the
    context or not. You can do the same for the following bookmarklets as well.
  </p>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxjgLwpBLMDbqaF9rSl9A63qo_mZtVa8IOIOc0-CJ7IYyBm_m_XqdFoEKcqTgmrRVdNcMkfthClBOCK5es9Qf9SRvgXjH_ZwxBpGN4uOI4MKeYsD2PfwEHrfsMIaitMbZxzHN2EumPBV2RWm2azN7u6x7ZLZJMJdTmqUk9YcJZuBBbCzVWJT0LG8dFzOE/s1910/navbar-off.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="953" data-original-width="1910" src="{{ site.baseurl }}/assets/images/063/img_19430cee06.png" /></a>
  </div>

  <p>
    Similarly, you can use <code>&amp;navbar=off</code> to hide the navigation
    pane on the left. You can use the below bookmarklet to use this frequently.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]navbar=off/.test(n)?alert("Navbar already disabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"navbar=off"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>
  <h2>Flags:</h2>
  <p style="text-align: justify;">
    <code><b>&amp;flags=DisableFormCommandbar=true</b></code>: This will remove the command/ribbon from the form. For that, we have to
    append <code>&amp;flags=DisableFormCommandbar=true</code> to the URL. To
    make it easier, you can use the below script in the bookmarklet to make it
    work on clicking the bookmark.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]flags=DisableFormCommandbar=true/.test(n)?alert("DisableFormCommandbar already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"flags=DisableFormCommandbar=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p style="text-align: justify;">
    <code><b>&amp;flags=DisableFormHandlers=true</b></code>: This will disable all the form handlers in the form that are added in the
    events including onLoad, onSave, onChange, Business Rules, and Tab State
    Change. For that, we have to append
    <code>&amp;flags=DisableFormHandlers=true</code> to the URL.
  </p>

  <p></p>
  <pre style="text-align: left;"><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]flags=DisableFormHandlers=true/.test(n)?alert("DisableFormHandlers already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"flags=DisableFormHandlers=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p style="text-align: left;"></p>

  <p style="text-align: left;"></p><ul><li><code><b>&amp;flags=DisableFormHandlers=&lt;eventName&gt;</b></code>: disables the event handler on the specified event. For example:
    <code>&amp;flags=DisableFormHandlers=onload</code>.
  </li><li><code><b>&amp;flags=DisableFormHandlers=&lt;eventName&gt;_&lt;index&gt;</b></code>: disables the event handler on the specified event at the mentioned index.
    For example: <code>&amp;flags=DisableFormHandlers=onsave_0</code>.
  </li><li><code><b>&amp;flags=DisableFormHandlers=&lt;eventName&gt;&lt;startIndex&gt;&lt;endIndex&gt;</b></code>: disables the event handlers in the specified range. For example:
    <code>&amp;flags=DisableFormHandlers=onload_3_5</code>.
  </li></ul>
    <p></p>

  

  

  <p>
    <code><b>&amp;flags=DisableFormLibraries=true</b></code>: disables all the form libraries from getting loaded on the event which is
    added.
  </p>

  <p></p>
  <pre style="text-align: left;"><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]flags=DisableFormLibraries=true/.test(n)?alert("DisableFormLibraries already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"flags=DisableFormLibraries=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p style="text-align: left;"></p>

  <p style="text-align: left;"></p><ul><li><code><b>&amp;flags=DisableFormLibraries=&lt;index&gt;</b></code>: disables libraries at the specified index. For example:
    <code>&amp;flags=DisableFormLibraries=0</code>.
  </li><li><code><b>&amp;flags=DisableFormLibraries=&lt;startIndex&gt;_&lt;endIndex&gt;</b></code>: disables the libraries in the specified range. For example:
    <code>&amp;flags=DisableFormLibraries=1_3</code>.
  </li></ul>
    <p></p>

  

  <p>
    <strong></strong>
  </p>
  <blockquote>
    <strong><i><u style="background-color: #cfe2f3;">Note:</u></i></strong>
    DisableFormHandlers only disables the handler; it doesn't stop the library
    from loading. As recommended by Microsoft, DisableFormHandlers should be
    used first to check whether the issue goes away. If not, try
    DisableFormLibraries.
  </blockquote>
  <p></p>

  <p>
    <code><b>&amp;flags=DisableWebResourceControls=true</b></code>: disables the web resource controls added to the form.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]flags=DisableWebResourceControls=true/.test(n)?alert("DisableWebResourceControls already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"flags=DisableWebResourceControls=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p>
    <code><b>&amp;flags=DisableFormControl=&lt;controlName&gt;</b></code>: disables the control on the form.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]flags=DisableFormControl=crf4c_myWebReSrc/.test(n)?alert("DisableFormControl already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"flags=DisableFormControl=crf4c_myWebReSrc"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p>
    <code><b>&amp;flags=DisableBusinessProcessFlow=true</b></code>: disables all the business process flows in the form.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]flags=DisableBusinessProcessFlow=true/.test(n)?alert("DisableFormControl already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"flags=DisableBusinessProcessFlow=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p>
    You can even combine all the flags into a single query parameter like the
    one below:
  </p>

  <p></p>
  <pre><code>
&amp;flags=DisableFormHandlers=true,DisableWebResourceControls=true,DisableFormCommandbar=true,DisableBusinessProcessFlow=true
</code></pre>
  <p></p>

  <h2>Troubleshooting</h2>

  <p style="text-align: justify;">
    At times while debugging, we lack data and information about the application
    and the system. For that, we have to navigate to the URL:
    <code>https://myorg.crm.dynamics.crm/home/home_debug.aspx</code>.
  </p>

  <p style="text-align: justify;">
    You can either bookmark it or use the below bookmarklet. But it will only
    work on CRM Online. You can find more insights about the application like
    Data Source, Component versions, Browser Version, User details, and Tenant
    ID.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e)return void alert("Please navigate to CRM page.");window.open(e.getClientUrl()+"/home/home_debug.aspx","_blank")}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p>
    The below image refers to the snapshot of my application's Debug
    Information.
  </p>
  <p>
    <a href="https://blogger.googleusercontent.com/img/a/AVvXsEgRR8rdzkyg3Xtlz4cSXnJwcMfZj-bWFRFC1pJilHpvxsxD4yVHQX5LLWEus5KxE94QA_udtuabZwyZBVn-NG8OW6Br89SpKkV2pypnONvGB2l0b9rZVCrnu24HRhz71C-7PavAwd4vI7Z7eVWuILgMhNal8puFgP7dcFXW-jWoTHW6psu9U3yfyHuqtCo" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img alt="" data-original-height="594" data-original-width="1200" src="{{ site.baseurl }}/assets/images/063/img_10463fca4b.png" /></a>
  </p>

  <h2>Diagnostics</h2>

  <p>
    To diagnose the system and its performance, we can use the diagnostics page.
    You can get to know the specifications of the system. For that, we can use
    the URL:
    <code>https://myorg.crm.dynamics.crm/tools/diagnostics/diag.aspx</code>.
  </p>

  <p>And you can find the bookmarklet for that below:</p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e)return void alert("Please navigate to CRM page.");window.open(e.getClientUrl()+"/tools/diagnostics/diag.aspx","_blank")}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p>
    After clicking run, we can see the Status and Result of the run. Please
    refer to the below image.
  </p>
  <p></p>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/a/AVvXsEi4dbrmFqBLmCQV09dlyCWYARGs2s42UpEeTnDP0tD5mK8y2wizdI9IiWHmTclKc7b6PHHL6U62_Gmfq9eAfTVuIbnXCYBQQeXaABKFEtvxvDO37T9qcXJZAUS1MjbOMq8KAuwALdw7eICccH_0zeBXJy5aclHXNsL6nb_1QBosBmHmMhfhh2tJWabwvVs" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="948" data-original-width="1082" src="{{ site.baseurl }}/assets/images/063/img_3234ecaea7.png" /></a>
  </div>
  <p></p>

  <h2>Client Performance Center:</h2>

  <p style="text-align: justify;">
    If you want to understand the performance of the form, you have to use the
    query parameter <code>&amp;perf=true</code> in the URL. I have created a
    bookmarklet for this too. You can get it from the below code.
  </p>

  <p></p>
  <pre><code>
javascript:(function(){try{var e=window.top.Xrm&amp;&amp;window.top.Xrm.Utility.getGlobalContext();if(!e){alert("Please navigate to CRM page");return}var n=location.href;/[?&amp;]perf=true/.test(n)?alert("DisableFormControl already enabled!"):location.href=n+(/\?/.test(n)?"&amp;":"?")+"perf=true"}catch(t){alert("Error: "+t.message)}})();
</code></pre>
  <p></p>

  <p>
    It will be like the below image and you can find some interesting insights
    from this shortcut.
  </p>
  <p></p>
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/a/AVvXsEgSnGDaJS44_M6eAWiDHX8VF-fGADZg7jOZnvLd-nDiCM6D7IMnf1y1XNDTGQUszwApuq-fWxpvIMbZsL1vdGncFuL5kCBzOVC8HTItMkYD8Yb-HtNvKBbpCxYtHVoJVCp6bQtAXGPb0MB5iwlzWU0og2cBqdomRu59_6lvFLq2fdD2A-yxsn-gcvFyDvM" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="716" data-original-width="1200" src="{{ site.baseurl }}/assets/images/063/img_5f14647988.png" /></a>
  </div>
  <p></p>

  <h2>References:</h2>
  <ul>
    <li>
      <a href="https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/troubleshoot-forms" rel="nofollow" target="_blank">Troubleshoot form issues in model-driven apps (Power Apps | Microsoft
        Learn)</a>
    </li>
    <li>
      <a href="https://readyxrm.blog/2016/10/19/crm-debug-info-from-your-browser/" rel="nofollow" target="_blank">CRM Debug Info from your Browser – The ReadyXRM Blog by Nick Doelman</a>
    </li>
    <li>
      <a href="https://crmtipoftheday.com/1160/bring-up-client-performance-center/" rel="nofollow" target="_blank">
        Tip #1160: Bring up client performance center – Power Platform &amp;
        Dynamics CRM Tip Of The Day
      </a>
    </li>
    <li>
      <a href="https://www.tamilarasu.blog/2025/04/unlock-hidden-superpowers-in-dynamics-crm-url-tweaks.html" rel="nofollow" target="_blank">Unlock Hidden Superpowers in Dynamics 365 CRM with Simple URL Tweaks</a>
    </li>
  </ul>

  <p style="text-align: center;">Have a great day!</p>
</article>
