---
layout: post
post_id: '003'
title: Here's How I built my own user app access checker for Dynamics 365 CRM?
seo_title: ''
date: 2026-11-29 23:11:00 +0530
image: /assets/images/2026-11-29-dynamics-365-user-app-access-checker.html/dynamics-365-user-app-access-checker.png
description: Explore a powerful Dynamics 365 App Access Checker that helps identify security role issues and app visibility problems.
meta_keywords: Dynamics 365 App Access Checker, Dynamics 365 app access, Dynamics 365 app not showing, Dynamics 365 security roles, Model-driven app access, Dynamics 365 troubleshooting, Dynamics 365 CE, App visibility issue, Dynamics 365 Web API, Dynamics 365 web resource, User app permissions Dynamics 365
category: Dynamics 365 CE
read_time: 10 mins
published: true
redirect_from: []
---

Some days back, a user reported a Dynamics 365 app access issue where they could no longer see a model-driven app in the app drawer. I checked and confirmed that, somehow, they had lost access. After granting access again, the issue was resolved.

Even though it was a simple issue, it still took around 10–15 minutes to check the user’s roles and the app roles.

Since this is a common Dynamics 365 app visibility issues administrators encounter, I checked whether there was any out-of-the-box tool available to make this easier. Luckily, there is a web resource of name **Dynamics 365 App Access Checker** from Microsoft within Dynamics 365 CE where you can check a user’s app access using their email address. I wasn’t aware that this existed. Below is the link for it; just replace the org name with yours.

`https://<org-name>.crm.dynamics.com/WebResources/msdyn_AppAccessChecker.html`

![Microsoft Dynamics 365 CE built-in App Access Checker used to verify user access to model-driven apps.](/assets/images/2026-11-29-dynamics-365-user-app-access-checker.html/built-in-dynamics-365-app-access-checker.png)

Though the web resource looks a bit old, it is very useful when switching between apps and users to troubleshoot access issues.

![Network request to the Dynamics 365 App Access Checker Web API using a user's email address.](/assets/images/2026-11-29-dynamics-365-user-app-access-checker.html/dynamics-365-user-app-access-api.png)

After digging deeper, Dynamics 365 App Access Checker relies on an internal Dynamics 365 Web API that accepts a user’s email address as a parameter. Without wasting any time, I tested it in the browser and was able to get a response.

![Custom Dynamics 365 App Access Checker with modern user interface and enhanced troubleshooting insights.](/assets/images/2026-11-29-dynamics-365-user-app-access-checker.html/custom-dynamics-365-app-access-checker.png)

I then built a custom Dynamics 365 App Access Checker web resource with a better design and as many insights as possible. It’s an HTML web resource with a clean UI and insights such as the roles assigned to the user in each app.

![Mapping of Dynamics 365 security roles and app access permissions for troubleshooting visibility issues.](/assets/images/2026-11-29-dynamics-365-user-app-access-checker.html/dynamics-365-app-security-roles-view.png)

Even though it is a web resource, it looks like a model-driven app. If it were built as an app, users would need access to that app as well.

Below is the full source code for user app access checker web resource.

\<script src="https://gist.github.com/tamilarasu-arunachalam/c799c818b5b43670dfd9d35351d6e1fc.js">\</script>

#### References:

- [Model App Access Checker for Dataverse — Richard A. Wilson](https://www.richardawilson.com/blog/model-app-access-checker-for-dataverse/)
- [Dataverse Impersonation with JavaScript Web API](https://tamilarasu.blog/dataverse-impersonation-with-web-api-d365-crm.html)
- [How to Translate Metadata and Web Resources in Dynamics 365 CE](https://tamilarasu.blog/translate-metadata-and-web-resources-d365-crm.html)
