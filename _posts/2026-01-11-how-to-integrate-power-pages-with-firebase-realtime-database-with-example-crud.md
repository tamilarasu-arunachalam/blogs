---
post_id: "058"
layout: post
title: "How to Integrate Power Pages with Firebase Realtime Database with Example CRUD"
date: 2026-01-11 17:41:00 +0000
category: Power Pages
categories: ["Power Pages", "Power Portal", "HTML", "JavaScript", "Firebase"]
---

<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1VmxagPRowTHDE9fFxG-VGfh2dEfcWRiBcDBVWYqyZzC6McwkshDGkOiBsyq050YN__QJN7BTk_uGguS1FUyQLshTdbkQUmlpywlSJ1dEjYMDr9ZJSxPKLTm_12lZ6KQSPpsUdBAW2mxxBJ-nIKhSYgE0VAV3_tsKAzZIcXGMlN33OLVLzJS-328bqvI/s1600/superman-tas.gif" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="375" data-original-width="498" src="{{ site.baseurl }}/assets/images/058/img_17c61a0d2a.gif" /></a></div>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#whatIsFirebase">What is Firebase?</a></li>
  <li><a href="#configureFirebase">Configure Firebase</a></li>
  <li><a href="#codeDemonstration">Coding Part</a></li>
  <li><a href="#references">References</a></li>
</ul>
<section id="overview">
  <h3>Overview:</h3>
  <p style="text-align: justify;">
    For a long time, I have felt that Power Pages is capable of doing much more
    than what we usually limit it to. Most of the time, it stays tightly coupled
    with Dataverse and SharePoint, even though it has the flexibility to work
    beyond that boundary.
  </p>
  <p style="text-align: justify;">
    As with my other blogs, this one is also about integration, but with a
    combination that many wouldn’t expect. Based on the title, this blog walks
    through how Power Pages can be integrated with Firebase. As an add-on, I
    have also created a working CRUD demonstration with code to show that this
    is not just theory, but something that actually works.
  </p>
</section>
<section id="whatIsFirebase">
  <h3>What is Firebase ?</h3>
  <p style="text-align: justify;">
    <strong><a href="https://firebase.google.com/firebase" target="_blank">Firebase</a></strong>
    is a Google product that helps developers build, manage, and scale
    applications easily. In simple terms, Firebase is a
    <strong>Backend as a Service (BaaS)</strong>.
  </p>
  <p style="text-align: justify;">
    Firebase provides multiple components such as authentication, NoSQL
    databases, configuration management, and file storage. Because of this,
    developers can focus more on improving the application experience instead of
    spending a lot of time building and maintaining a backend from scratch.
  </p>
  <p style="text-align: justify;">
    In this blog, Firebase Realtime Database is used, which is a NoSQL database
    that stores data in a JSON format.
  </p>
</section>
<section id="configureFirebase">
  <h3>Configure Firebase</h3>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoBm7wHPUl-4CoebhEKvOuYoHrFEY4fKnDv1_ftmyWwZQoi8TF267Ey5w2v3twSVSSEBGdQhi_hwE9UlGnHpRUQQeRFQNYink4RJ_CnLX5j6R1khraopI6snOwKoVSlP_7vqrnyx-tFK8nixv-f7I9TK1Vt5U6_Gr5PfQB9vm3o2JRQ2IHtPMgr4bX2ZI/s1600/create-firebase-project.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="978" data-original-width="1766" src="{{ site.baseurl }}/assets/images/058/img_f0985205c7.png" /></a></div>
  <ul>
    <li>
      To configure Firebase for this integration, start by navigating to the
      <a href="https://console.firebase.google.com/">Firebase Console</a> and
      create a new project if you do not already have one. For this
      demonstration, a project named <b>power-pages-crud</b> was created.
    </li>
    <li>
      Once the project is created, Firebase redirects to the Project Overview
      page. From here, the database needs to be configured to store data.
    </li>
    <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoiqrF5odHXMFFqnJZNBI735ReN4TN_jPzTHJQqSUolgmNFUV-GSW1AmAtYJnSwVit7JkgNMh2XoGFxg5LGiWiDGEleRTQNGmwNTVupoAVJkwZhfKJal9jQsYwDU1Aau8BMKxN5r3UIweFmwLgjLL0Gl1YukaBbJNGZJNta4Fwk950Si3S-86Kp9b_fHU/s1600/realtime-databse-config.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="861" data-original-width="1910" src="{{ site.baseurl }}/assets/images/058/img_10ac311fe6.png" /></a></div>
    <li>
      Navigate to the Realtime Database option under the Build section in the
      left menu and create a new database. After creation, the database will be
      visible in the console.
    </li>
    <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5xG57LuyPSuY_qRys9EXPVF3usfQ8K-jY-5lrIxt8SrrWDSJqK4tYlRMpMH9LLlJMBkeDa-2sZ68wxg7ouz8mDpomcxWcun_tXyloj_CrnnVw0VljE2d9CqZUA23pbjorfFKje0lQazY9Pd_cLyY7z7WggAibp-N-IB7BQ-CnxPHLuNR7frGHMkY6Z9s/s1600/database-config-rules.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="857" data-original-width="1781" src="{{ site.baseurl }}/assets/images/058/img_47cd6dbdc6.png" /></a></div>
    <li>
      To view, add, and edit records in the database, the database rules must be
      updated. Set both read and write permissions to true so that Power Pages
      can interact with the database.
    </li>
    <li>
      Since Firebase is a NoSQL database, it does not require predefined tables.
      If a record is added to a node that does not exist, Firebase automatically
      creates it.
    </li>
  </ul>
</section>
<section id="codeDemonstration">
  <h3>Coding Part</h3>
  <ul>
    <li>
      To use Firebase from a Power Pages site, Firebase Realtime Database REST
      APIs are used. These APIs allow reading, creating, updating, and deleting
      records by passing the correct parameters. Create a new page in Power
      Pages and open Edit code.
    </li>
    <li>
      Add the required HTML and JavaScript logic to the page. The JavaScript
      will call Firebase REST endpoints to perform CRUD operations. Below is the
      code which I've used for this demonstration.
    </li>
    <h4>HTML Code</h4>
    <script src="https://gist.github.com/tamilarasu-arunachalam/d3233db310735a14867ea1d793bd1bf2.js?file=powerpages-x-firebase.html"></script>
    <h4>JavScript Code</h4>
    <script src="https://gist.github.com/tamilarasu-arunachalam/d3233db310735a14867ea1d793bd1bf2.js?file=powerpages-x-firebase.js"></script>
    <li>
      After adding the code, sync the Power Pages site and preview the page.
      Once loaded, the CRUD operations will work successfully.
    </li>
  </ul>
  <p>Below are the images of the CRUD demonstration</p>
  <h4>Create Record</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju7slbPOHZOETtW0P7fEQk7a_mSt-rO9cRyZvuVPC_Q5HpP71awxXdgPV190xrkecVE3noqJd2YI-uGB24SkhMH_zbGeYBW2seMDcC7hWCbpuQrsdhj1pgK7owWCo-fcv4N-eMbiuFKUAMddTxpsQ8h73l4XPE4HKNbDbHythHSBnXvvzMKbJwS27ruUk/s1600/power-pages-add-data.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="609" data-original-width="1874" src="{{ site.baseurl }}/assets/images/058/img_6171816d0b.png" /></a></div>
  <h4>Read Records</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuyBqH6bG4mSTtAkJ8kdesKEpGRqlEkuowscsBu23KNlRnFEA5WCQZd3TGEGKs0srI9tSvwWfUEcqRL2sE89TGZeURZmwpFRU9zdpm1_wZP0lVp_ni65E_hH7TOxkQh7-M6pr-fI7xWsOgXK8D8PmKs61pB79M52EaARZlndMvefNqimQTXjwBvbNtmN8/s1600/power-pages-view-data.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="605" data-original-width="1884" src="{{ site.baseurl }}/assets/images/058/img_18498d6995.png" /></a></div>
  <h4>Edit Record</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIr80mVZ_qHzLFBFQJplBGz-PuxERN8_yW8IWCXvwUG30f6kvKK24E9iMLBrpaD1KGUbljiCU6Jrwsb8beah48WglvZAmMag556e3m2qx1_U6gGMQkghvgqUuqPkvelLx5Uhsr8LtM2pRXAMHMijQHGY0sHJE2rGDwPuMp2fXvX5BZ7bkDpVWP_Dg_p4Q/s1600/power-pages-edit-data.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="554" data-original-width="1869" src="{{ site.baseurl }}/assets/images/058/img_1d20f2f4d8.png" /></a></div>
  <h4>Delete Record</h4>
  <div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdrLsGQFJ4HMf_At7KIcFKcIGIgbcAbGNZg5G2pL8elhVo654yz6_-ouQDO79nlZdeSJNfp5VZzU8MnlefCss7uu0zPosnSylWyJZmxtKpvb1tXFRzhkTP3a2PSgmZX6LMF8-Ry98zwA9vwbxaEnx0RPVlAogA7mQW8xU9hYBd-SSrALcq5rd1F8wph5w/s1600/power-pages-delete-data.png" style="display: block; padding: 1em 0px; text-align: center;"><img alt="" border="0" data-original-height="564" data-original-width="1878" src="{{ site.baseurl }}/assets/images/058/img_035e3e0f2b.png" /></a></div>
</section>
<section id="references">
  <h3>References:</h3>
  <ul>
    <li>
      <a href="https://learn.microsoft.com/en-us/power-pages/configure/implement-webapi-component" target="_blank">Implement portals Web API code components sample | Microsoft Learn</a>
    </li>
    <li>
      <a href="https://firebase.google.com/firebase" target="_blank">Firebase | Google's Mobile and Web App Development Platform</a>
    </li>
    <li>
      <a href="https://console.firebase.google.com/project/" target="_blank">Firebase Console</a>
    </li>
  </ul><div style="text-align: center;">Have a great day!</div>
</section>