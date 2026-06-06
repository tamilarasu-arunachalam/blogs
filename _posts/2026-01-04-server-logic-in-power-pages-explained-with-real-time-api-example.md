---
post_id: "057"
layout: post
title: "Server Logic in Power Pages Explained with Real Time API Example"
date: 2026-01-04 17:41:00 +0000
category: Power Pages
categories: ["Power Pages", "HTML", "JavaScript", "Power Portal"]
---

<div class="separator" style="clear: both;">
  <a
    href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA5wGfzUqspq_Q6HiNxK11WkMlfzbukX-q-JpzIqUUnSFgNhQqlGJ13Z4_WGYr58JmpbTdF364wCfOOZm0nw99NeXv19bf2GlWUS86fH2dwLxq2P2pr5fMBmQ5JC-Ul01h1EtGgNJBO6hia9xxzJZ9-gJE5UuV53fnMNR9QWrEfwOp8GjYmP3-UNCeHzw/s1600/spiderman-salute.gif"
    style="display: block; padding: 1em 0px; text-align: center;"
    ><img
      alt=""
      border="0"
      data-original-height="228"
      data-original-width="498"
      src="{{ site.baseurl }}/assets/images/057/img_7f5da6a23f.gif"
  /></a>
</div>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#whyServerLogic">Why server logic?</a></li>
  <li><a href="#configureServerLogic">Configure Server Logic</a></li>
  <li><a href="#setupServerLogic">Set up Server Logic</a></li>
  <li><a href="#myThoughts">My Thoughts</a></li>
  <li><a href="#references">References</a></li>
</ul>
<section id="overview">
  <h3>Overview:</h3>
  <p>
    Power Pages is commonly used to build external websites on top of Dataverse.
    While it works well for forms, lists, and UI customization, handling
    sensitive logic and third-party APIs has always been a challenge.
  </p>
  <p>
    Most implementations rely on client-side JavaScript, which means API URLs,
    keys, and request details can be exposed in the browser. This becomes risky,
    especially for public-facing sites.
  </p>
  <p>
    Server Logic in Power Pages helps solve this problem by allowing developers
    to run business logic on the server. Instead of calling external APIs
    directly from the browser, the site communicates with secure server-side
    logic that controls the request and response. This makes integrations safer,
    cleaner, and easier to manage.
  </p>
</section>
<section id="whyServerLogic">
  <h3>Why server logic?</h3>
  <p>
    Server Logic is designed for scenarios where client side JavaScript is not
    sufficient or safe. Imagine an online store built on Power Pages that
    handles discount calculation, inventory validation, or payment verification.
    If these operations are implemented on the client side, users can inspect
    network calls and manipulate requests. Server Logic allows these operations
    to run securely on the server with proper permissions. The client only
    receives the required response, not the implementation details.
  </p>
  <p>This makes Server Logic ideal for</p>
  <ul>
    <li>Calling paid or sensitive external APIs</li>
    <li>Handling authentication tokens and secrets</li>
    <li>Implementing business validations</li>
    <li>Orchestrating complex workflows</li>
    <li>Integrating ERP or CRM systems securely</li>
  </ul>
</section>
<section id="configureServerLogic">
  <h3>Configure Server Logic</h3>
  <p>
    Before using Server Logic, it must be enabled in Power Pages. The
    configuration is done from Power Pages Management app. To-do so, follow the
    below steps
  </p>
  <ul>
    <li>Open Power Pages Management</li>
    <li>Navigate to Site Settings</li>
    <li>Enable Server Logic feature</li>
  </ul>
  <p>The site setting to be configured is in the below image.</p>
  <div class="separator" style="clear: both;">
    <a
      href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKVgSIeSfWtKrviRh5HQwbZm-uyVjBhNitEuKjdjm2nVe9p7snoO0BxmVhZ1iocqg7ggDNM3w8jxaR1OU-Mf7YEwaTO0kWA2vhxlnGfeFHn1dNMJLoW5-aExnye1O8jsrrK79ZIob5g5ttgun4TViROtvoKQDNeaT2qWZ7bOhe5b4Ds8bKgWa7vjmC-Fw/s1600/portal-mgt-configurations.png"
      style="display: block; padding: 1em 0px; text-align: center;"
      ><img
        alt=""
        border="0"
        data-original-height="444"
        data-original-width="873"
        src="{{ site.baseurl }}/assets/images/057/img_64648c7b2a.png"
    /></a>
  </div>
  <p></p>
  <p>
    Server Logic uses server side JavaScript that follows the ECMAScript 2023
    standard. However, it does not support browser specific objects such as
    window, document, fetch, or XMLHttpRequest. Instead, Power Pages provides
    server specific objects such as Server.Connector.HttpClient, Server.Context,
    and Server.Logger.
  </p>
</section>
<section id="setupServerLogic">
  <h3>Set up Server Logic</h3>
  <p>Follow these steps to create a new Server Logic in Power Pages.</p>
  <ul>
    <li>
      Navigate to
      <a href="https://make.powerpages.com" target="_blank"
        >make.powerpages.com</a
      >
    </li>
    <li>Select your Power Pages site.</li>
    <li>Open Set up from the left navigation</li>
    <div class="separator" style="clear: both;">
      <a
        href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtXzIL8P004S9AGKkDhKHsFQI3E-uqfKmm6EjHvCy-AzurGDN9V7eK2cGwDpZit12jEeWZkyYnAb8_o4KDqJtqAypeTjtY79tkrGriBr_gCcZGX0UeL1fQdcGAAxJLSI7TUWRy3RkmtQVYkH47IsmGrDnxpSY3EF4zeOgGjwQb0xOKoEBGWQ87uuYzavY/s1600/set-up-server-logic.png"
        style="display: block; padding: 1em 0px; text-align: center;"
        ><img
          alt=""
          border="0"
          data-original-height="651"
          data-original-width="1882"
          src="{{ site.baseurl }}/assets/images/057/img_3cb508b442.png"
      /></a>
    </div>
    <li>Under Integrations, select Server Logic</li>
    <li>Click <strong>+ New Server Logic</strong>.</li>
    <div class="separator" style="clear: both;">
      <a
        href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNxLUS4gfpA8rlrrHlpHSf0SME6YohJQo9W-NcmOsVWH5zNpAQgPnr-feDo26oL771e60un0-qscBVaq88u9BaPxNIl-LPSs-vG2NgZKEKBj26Rznxoqoh-EJit0ZRVY77fclDnGWCt583GtLYrGuLJXF98cM1ofh2xx8UXLXru17bwf0v-kNfjnwQfgE/s1600/new-server-logic-1.png"
        style="display: block; padding: 1em 0px; text-align: center;"
        ><img
          alt=""
          border="0"
          data-original-height="1007"
          data-original-width="879"
          src="{{ site.baseurl }}/assets/images/057/img_0939feb576.png"
      /></a>
    </div>
    <li>Provide the name, description, and permissions.</li>
    <li>Click Add</li>
    <div class="separator" style="clear: both;">
      <a
        href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgf9kiHIr9drc9jXNNIalRZK4ytFr2GUoaa_uziXjSZbGDdSYB2iUpa6vRccmwdpP6leI8bEigD7wwCAJS9n_7FvzEOJa9gk1cZyFVf1utu8dlLAKQ2dHej7aeW7XUPhu8nhwddTkjqV1nKiwCiW1yzGJvKBbOwtHlOzCZt6T-JLYWqeFWvBgK5GWHjI5g/s1600/edit-with-vs-code.png"
        style="display: block; padding: 1em 0px; text-align: center;"
        ><img
          alt=""
          border="0"
          data-original-height="384"
          data-original-width="1334"
          src="{{ site.baseurl }}/assets/images/057/img_8a9e07ee3c.png"
      /></a>
    </div>
    <li>
      Once created, select the Server Logic and click Edit Code. This opens an
      in browser VS Code editor.
    </li>
  </ul>
  <p>Inside the editor</p>
  <ul>
    <li>Navigate to the serverlogics folder</li>
    <li>Open the created server logic file</li>
    <li>Modify or overwrite the default code</li>
  </ul>
</section>
<section id="demonstration">
  <h3>Demonstration</h3>
  <p>
    For the demonstration purpose, I will create a web page which will show the
    current day weather for each hour by fetching the user latitude and
    longitude. For that, I have used the
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition"
      >Geolocation API</a
    >
    for getting the latitude and longitude of the user and
    <a href="https://open-meteo.com/en/docs" target="_blank">Open-Meteo API</a>
    to get the weather data of the retrieved location. I have made the API call
    inside the Server Logic and call the server logic in the web page. You can
    find the code for the server logic below.
    <script src="https://gist.github.com/tamilarasu-arunachalam/017ccd819f70b24ac0f96176b3d641cc.js?file=getWeather-serverLogic.js"></script>
  </p>
  <p>
    For me i have a separate page for the demonstration of this use-case which
    is under <strong>Weather</strong> folder in VS Code. You can refer the below
    code for calling the server logic inside a web page.
  </p>
  <script src="https://gist.github.com/tamilarasu-arunachalam/017ccd819f70b24ac0f96176b3d641cc.js?file=weather-app.html"></script>
  <p>As I am based out of Chennai, the co-ordinates are in the below image</p>
  <div class="separator" style="clear: both;">
    <a
      href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ7w4VIFea5nJxjmrhdY4xmDyZxfHhlybJrIabimRiuobPqIqVoE55-wIFxxdvCUcqLGpN5KOBxFN0bZluhRlf_KOyjbOjaehFz0qdZX9dE6Rj5fTVKlLoXggNG4ehDFN735T7PfVf_uDvFKVA920ZcLpF0f_UI63R6rbpqs-8ZpOzw5AIOi2Bn9cvCZY/s1600/chennai-coordinates.png"
      style="display: block; padding: 1em 0px; text-align: center;"
      ><img
        alt=""
        border="0"
        data-original-height="435"
        data-original-width="1017"
        src="{{ site.baseurl }}/assets/images/057/img_dc904356b0.png"
    /></a>
  </div>
  <p>And the resultant page is like the below screenshot</p>
  <div class="separator" style="clear: both;">
    <a
      href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC3cs0sYbdSwE4DrafpWXAdeJiqeksOtdM4tGsB7Leo2clemvrudx5uk6nzvvGNfb6h5pTJFAApwAmB_yoqc5kCPpQ6_0KlCoBjlRvRFgVbcAGFtUlv-VkHj0YYakCoXURYEDc_fv4tvSbXo_TnxmvMJznBQcKftS9qk-gsNFrwHAfzE6Jg6Q2LFdY8lc/s1600/final-web-page.png"
      style="display: block; padding: 1em 0px; text-align: center;"
      ><img
        alt=""
        border="0"
        data-original-height="897"
        data-original-width="1875"
        src="{{ site.baseurl }}/assets/images/057/img_4fea17944e.png"
    /></a>
  </div>
</section>
<section id="myThoughts">
  <h3>My Thoughts</h3>
  <p>
    After working with Server Logic, it clearly feels like a much-needed
    improvement for Power Pages. It removes the fear of exposing sensitive data
    such as client secrets, tokens, or transaction details.
  </p>
  <p>
    This is especially useful for scenarios like payment integrations, ERP
    connections, or secure CRM data access. Even though the feature is still in
    preview, it already adds strong value. With future updates like better
    debugging tools, Liquid support, and easier testing, Server Logic has the
    potential to become a core building block for secure Power Pages solutions.
  </p>
</section>
<section id="references">
  <h3>References:</h3>
  <ul>
    <li>
      <a
        href="https://learn.microsoft.com/en-us/power-pages/configure/server-logic-overview"
        target="_blank"
        >Power Pages server logic overview | Microsoft Learn</a
      >
    </li>
    <li>
      <a
        href="https://learn.microsoft.com/en-us/power-pages/configure/author-server-logic"
        target="_blank"
        >Create and manage server logic in Power Pages | Microsoft Learn</a
      >
    </li>
    <li>
      <a
        href="https://learn.microsoft.com/en-us/power-pages/configure/server-logic-external-services"
        target="_blank"
        >Interact with external services using server logic | Microsoft Learn</a
      >
    </li>
    <li>
      <a
        href="https://learn.microsoft.com/en-us/power-pages/configure/server-objects"
        target="_blank"
        >Access user and website details with server objects | Microsoft
        Learn</a
      >
    </li>
    <li>
      <a href="https://open-meteo.com/en/docs" target="_blank"
        >Docs | Open-Meteo.com</a
      >
    </li>
    <li>
      <a
        href="https://api.open-meteo.com/v1/forecast?latitude=13.08&amp;longitude=80.27&amp;hourly=temperature_2m&amp;forecast_days=1"
        target="_blank"
        >Open-Meteo API</a
      >
    </li>
    <li>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition"
        target="_blank"
        >Geolocation: getCurrentPosition() method - Web APIs | MDN Learn</a
      >
    </li>
  </ul>
</section>
