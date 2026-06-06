---
post_id: "054"
layout: post
title: "How to Set Up Google Authentication in Power Pages (Beginner Guide)?"
date: 2025-12-07 17:41:00 +0000
category: Power Pages
categories: ["Power Pages", "Power Portal", "Dataverse"]
---

<img alt="" border="0" src="{{ site.baseurl }}/assets/images/054/img_f190a8922a.gif">
<p>
  Power Pages, being a Microsoft-hosted low-code portal platform, gives us
  multiple authentication options out of the box - including Azure AD and
  External Authentication. But what many makers don’t realize is that Power
  Pages also supports popular OAuth 2.0 identity providers like
  <strong>Google, GitHub, Facebook, and LinkedIn</strong>.
</p>

<p>
  In this blog, we’ll walk through a simple and beginner-friendly guide on how
  to set up
  <strong>Google Authentication in Power Pages</strong> using OAuth 2.0. Even if
  you aren’t familiar with authentication concepts, don’t worry - I’ll break it
  down step-by-step.
</p>

<p><strong>Follow these steps to configure Google Sign-In:</strong></p>

<ul>
  <li>
    <a href="#configureGoogleProvider1">Configure Google Identity Provider – Part 1</a>
  </li>
  <li>
    <a href="#createAppInGoogleCloud">Create an OAuth App in Google Cloud Console</a>
  </li>
  <li>
    <a href="#configureGoogleProvider2">Configure Google Identity Provider – Part 2</a>
  </li>
  <li>
    <a href="#reference">References</a>
  </li>
</ul>

<section>
  <h3>Configure Google Identity Provider – Part 1</h3>

  <p>
    First, go to
    <a href="https://make.powerpages.com" target="_blank">make.powerpages.com</a>
    and open the Power Pages site for which you want to enable Google login.
    From the left navigation, open the <strong>Security</strong> section and
    select <strong>Identity Providers</strong>. You will see a list of available
    providers as shown below.
  </p>

  <img alt="Identity Providers List" src="{{ site.baseurl }}/assets/images/054/img_28139bff25.png">

  <ul>
    <li>Click on <strong>Configure</strong> next to Google.</li>

    <img alt="Provider Selection Pane" src="{{ site.baseurl }}/assets/images/054/img_396da18b11.png">

    <li>
      A right-side configuration pane opens. Provide a name (for example:
      <em>Google Login</em>) and click <strong>Next</strong>.
    </li>

    <img alt="Redirect URI" src="{{ site.baseurl }}/assets/images/054/img_661389591a.png">

    <li>
      Power Pages will generate a <strong>Redirect URI</strong>. Copy this URI -
      we will need it while creating the OAuth Client in Google Cloud.
    </li>
  </ul>
</section>

<section>
  <h3>Create an OAuth App in Google Cloud Console</h3>

  <p>
    To enable Google Authentication, we must create an OAuth 2.0 Client inside
    the
    <strong>Google Cloud Developer Console</strong>. If you already have a
    client ID and secret, feel free to skip this part.
  </p>

  <ul>
    <li>
      Navigate
      <a href="https://cloud.google.com/apigee/docs/api-platform/publish/creating-apps-surface-your-api" target="_blank">here</a>
      to open Google Cloud Console and create a new project.
    </li>

    <img alt="Create App in Google Cloud" src="{{ site.baseurl }}/assets/images/054/img_9b03378a79.png">

    <li>After creation, you will land on the project overview page.</li>

    <img alt="Project Overview" src="{{ site.baseurl }}/assets/images/054/img_d51696793d.png">

    <li>Click on <strong>Get Started</strong>.</li>
    <li>
      You’ll see a 4-step configuration wizard.<br><b>
      Step 1</b>: Provide <strong>App Name</strong> and
      <strong>User Support Email</strong>.
    </li>
    <img alt="App Information" src="{{ site.baseurl }}/assets/images/054/img_63653c269e.png">
    <li><b>
      Step 2</b>: Select your app audience type. For Power Pages, select
      <strong>External</strong> because your users will authenticate using their
      Google account.
    </li>
    <img alt="External Audience Selection" src="{{ site.baseurl }}/assets/images/054/img_de76574aa2.png">
    <li><b>Step 3</b>: Add your contact details.</li>
    <img alt="Contact Information" src="{{ site.baseurl }}/assets/images/054/img_90fa30d98b.png">
    <li><b>
      Step 4</b>: Accept the Google API Terms and click <strong>Create</strong>.
    </li>
    <img alt="Google API Policy" src="{{ site.baseurl }}/assets/images/054/img_cced25f86f.png">
  </ul>
  <p>
    After the consent screen setup, we can now create the actual OAuth Client.
  </p>
  <ul>
    <img alt="OAuth Client Creation" src="{{ site.baseurl }}/assets/images/054/img_fd852fffbd.png">
    <li>
      Open the <strong>Credentials</strong> tab and click
      <strong>Create Credentials → OAuth Client ID</strong>.
    </li>
    <img alt="Select OAuth Client" src="{{ site.baseurl }}/assets/images/054/img_b776e6d49e.png">
    <li>
      Select <strong>Web Application</strong> as the application type since
      Power Pages is web-based.
    </li>
    <img alt="App Type Selection" src="{{ site.baseurl }}/assets/images/054/img_ad4b1474e4.png">
    <li>
      Scroll down and add the following:
      <ul>
        <li>
          <strong>Authorized JavaScript Origin:</strong> Your Power Pages site
          URL
        </li>
        <li>
          <strong>Authorized Redirect URI:</strong> Paste the redirect URI
          copied from Power Pages
        </li>
      </ul>
    </li>
    <li>Click <strong>Create</strong>.</li>
    <img alt="Client ID and Secret" src="{{ site.baseurl }}/assets/images/054/img_1661f85ffb.png">
    <li>
      Google will now generate your <strong>Client ID</strong> and
      <strong>Client Secret</strong>. These are required for configuring the
      Google Identity Provider in Power Pages. Copy them or download the JSON.
    </li>
    <img alt="OAuth Clients List" src="{{ site.baseurl }}/assets/images/054/img_644424fe7b.png">
  </ul>
</section>
<section>
  <h3>Configure Google Identity Provider – Part 2</h3>
  <p>Now return to Power Pages to complete the configuration.</p>
  <ul>
    <img alt="Set Client ID and Secret" src="{{ site.baseurl }}/assets/images/054/img_90e7837206.png">
    <li>
      Paste the Client ID and Client Secret from Google Cloud and click
      <strong>Confirm</strong>.
    </li>
    <img alt="Google Provider Enabled" src="{{ site.baseurl }}/assets/images/054/img_9d5797f609.png">
    <li>The Google provider should now show as <strong>Enabled</strong>.</li>
    <img alt="Restart Site" src="{{ site.baseurl }}/assets/images/054/img_6d9efea19e.png">
    <li>
      Navigate to
      <a href="https://admin.powerplatform.com" target="_blank">admin.powerplatform.com</a>, go to Power Pages → Site Settings and click
      <strong>Restart Site</strong>.
    </li>
    <img alt="Test Login" src="{{ site.baseurl }}/assets/images/054/img_92ca0319d0.png">
    <li>
      Once the site restarts, navigate to the sign-in page and click the
      <strong>Sign in with Google</strong> button.
    </li>
    <img alt="After Sign-In" src="{{ site.baseurl }}/assets/images/054/img_b04b1f7501.png">
  </ul>
</section>
<section>
  <h3>References</h3>
  <ul>
    <li>
      <a href="https://learn.microsoft.com/en-us/power-pages/security/authentication/oauth2-google" target="_blank">Set up Google Provider – Microsoft Learn</a>
    </li>
    <li>
      <a href="https://docs.cloud.google.com/apigee/docs/api-platform/publish/creating-apps-surface-your-api" target="_blank">Google Cloud – Registering Apps</a>
    </li>
  </ul>
</section>
<p><br></p><p>Have a great day!</p>