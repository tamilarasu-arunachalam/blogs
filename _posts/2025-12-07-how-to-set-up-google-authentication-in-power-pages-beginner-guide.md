---
post_id: "054"
layout: post
title: "How to Set Up Google Authentication in Power Pages (Beginner Guide)?"
date: 2025-12-07 17:41:00 +0000
category: Power Pages
image: assets/images/054/img_f190a8922a.gif
categories: ["Power Pages", "Power Portal", "Dataverse"]
---
Power Pages, being a Microsoft-hosted low-code portal platform, gives us multiple authentication options out of the box - including Azure AD and External Authentication. But what many makers don’t realize is that Power Pages also supports popular OAuth 2.0 identity providers like **Google, GitHub, Facebook, and LinkedIn**.

In this blog, we’ll walk through a simple and beginner-friendly guide on how to set up **Google Authentication in Power Pages** using OAuth 2.0. Even if you aren’t familiar with authentication concepts, don’t worry - I’ll break it down step-by-step.

**Follow these steps to configure Google Sign-In:**

- [Configure Google Identity Provider – Part 1](#configure-google-identity-provider--part-1)
- [Create an OAuth App in Google Cloud Console](#create-an-oauth-app-in-google-cloud-console)
- [Configure Google Identity Provider – Part 2](#configure-google-identity-provider--part-2)
- [References](#references)

### Configure Google Identity Provider – Part 1

First, go to [make.powerpages.com](https://make.powerpages.com) and open the Power Pages site for which you want to enable Google login. From the left navigation, open the **Security** section and select **Identity Providers**. You will see a list of available providers as shown below.

![Identity Providers List]({{ site.baseurl }}/assets/images/054/img_28139bff25.png)

-   Click on **Configure** next to Google.
![Provider Selection Pane]({{ site.baseurl }}/assets/images/054/img_396da18b11.png)-   A right-side configuration pane opens. Provide a name (for example: _Google Login_) and click **Next**.
![Redirect URI]({{ site.baseurl }}/assets/images/054/img_661389591a.png)-   Power Pages will generate a **Redirect URI**. Copy this URI - we will need it while creating the OAuth Client in Google Cloud.

### Create an OAuth App in Google Cloud Console

To enable Google Authentication, we must create an OAuth 2.0 Client inside the **Google Cloud Developer Console**. If you already have a client ID and secret, feel free to skip this part.

-   Navigate [here](https://cloud.google.com/apigee/docs/api-platform/publish/creating-apps-surface-your-api) to open Google Cloud Console and create a new project.
![Create App in Google Cloud]({{ site.baseurl }}/assets/images/054/img_9b03378a79.png)-   After creation, you will land on the project overview page.
![Project Overview]({{ site.baseurl }}/assets/images/054/img_d51696793d.png)-   Click on **Get Started**.
-   You’ll see a 4-step configuration wizard.  
    **Step 1**: Provide **App Name** and **User Support Email**.
![App Information]({{ site.baseurl }}/assets/images/054/img_63653c269e.png)-   **Step 2**: Select your app audience type. For Power Pages, select **External** because your users will authenticate using their Google account.
![External Audience Selection]({{ site.baseurl }}/assets/images/054/img_de76574aa2.png)-   **Step 3**: Add your contact details.
![Contact Information]({{ site.baseurl }}/assets/images/054/img_90fa30d98b.png)-   **Step 4**: Accept the Google API Terms and click **Create**.
![Google API Policy]({{ site.baseurl }}/assets/images/054/img_cced25f86f.png)

After the consent screen setup, we can now create the actual OAuth Client.

![OAuth Client Creation]({{ site.baseurl }}/assets/images/054/img_fd852fffbd.png)-   Open the **Credentials** tab and click **Create Credentials → OAuth Client ID**.
![Select OAuth Client]({{ site.baseurl }}/assets/images/054/img_b776e6d49e.png)-   Select **Web Application** as the application type since Power Pages is web-based.
![App Type Selection]({{ site.baseurl }}/assets/images/054/img_ad4b1474e4.png)-   Scroll down and add the following:
    -   **Authorized JavaScript Origin:** Your Power Pages site URL
    -   **Authorized Redirect URI:** Paste the redirect URI copied from Power Pages
-   Click **Create**.
![Client ID and Secret]({{ site.baseurl }}/assets/images/054/img_1661f85ffb.png)-   Google will now generate your **Client ID** and **Client Secret**. These are required for configuring the Google Identity Provider in Power Pages. Copy them or download the JSON.
![OAuth Clients List]({{ site.baseurl }}/assets/images/054/img_644424fe7b.png)

### Configure Google Identity Provider – Part 2

Now return to Power Pages to complete the configuration.

![Set Client ID and Secret]({{ site.baseurl }}/assets/images/054/img_90e7837206.png)-   Paste the Client ID and Client Secret from Google Cloud and click **Confirm**.
![Google Provider Enabled]({{ site.baseurl }}/assets/images/054/img_9d5797f609.png)-   The Google provider should now show as **Enabled**.
![Restart Site]({{ site.baseurl }}/assets/images/054/img_6d9efea19e.png)-   Navigate to [admin.powerplatform.com](https://admin.powerplatform.com), go to Power Pages → Site Settings and click **Restart Site**.
![Test Login]({{ site.baseurl }}/assets/images/054/img_92ca0319d0.png)-   Once the site restarts, navigate to the sign-in page and click the **Sign in with Google** button.
![After Sign-In]({{ site.baseurl }}/assets/images/054/img_b04b1f7501.png)

### References

-   [Set up Google Provider – Microsoft Learn](https://learn.microsoft.com/en-us/power-pages/security/authentication/oauth2-google)
-   [Google Cloud – Registering Apps](https://docs.cloud.google.com/apigee/docs/api-platform/publish/creating-apps-surface-your-api)

  

Have a great day!