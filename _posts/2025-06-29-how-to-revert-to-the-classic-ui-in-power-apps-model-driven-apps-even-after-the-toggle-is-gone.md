---
post_id: "046"
layout: post
title: "How to Revert to the Classic UI in Power Apps Model-Driven Apps (Even After the Toggle Is Gone)?"
date: 2025-06-29 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "Model Driven Apps", "Power Apps"]
---

<div>
  <img border="1" src="{{ site.baseurl }}/assets/images/046/img_b9249e56d8.png" />
</div>
<p>
  Microsoft introduced the new Fluent UI for Model-Driven Power Apps in October
  2023. Initially, users could easily switch between the new and classic
  experiences using the <b>"</b><strong>Try the new look"</strong>&nbsp;toggle
  available in the command bar.
</p>
<strong>Before toggling:</strong> You’d see the traditional UI.
<div>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioPmHFUbgUSsGOouBtchKZfMuk-oKF9VNegX4XLM25BhldwDDjNtrlYKwcU7cSWeGWXnihepV-fUB2bKVvPosLh1DHzr2C2g6yPSoCRlJe4jz-FZH_hhNXpHfhgdxv0-AQ6veEoTlDkpu7O6IYlTIWgAu181qSzr4QgqxEhyeK8gm2Ko4KIOMz4e_yW_Q/s423/modern-try-toggle-off.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_1527df1c79.png" /></a><br />
  <div>
    <div>
      <br /><strong>After toggling:</strong> You’d get the sleek, modern Fluent
      UI.
    </div>
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnm9TH-MfbQ440EDdBVrwvoxFDV-gqGhqQqc9y-A-7AN_YCOHoaAEdtcXK1_i50z5lPuH_wPNK3B5xZjBslPAHaYd1A85ioUltuE48oUVz5L8HD2OOjpV5zsJosroOw1s6DXak0zg2JuOnhcMzbNZtvJ-3Zt7oRzqSdB5ldFIkd15o68A-Z8FmWuyfH2E/s389/modern-try-toggle-on.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_26eaefe3ac.png" /></a><br />
    <div>
      <ul></ul>
      <p>
        However, starting
        <strong>October 2024</strong>, Microsoft removed the
        <strong>Try the new look</strong> toggle for
        <strong>monthly channel</strong> users. And with the
        <span>2025 Release Wave 1</span>, reverting to the old (classic) look is
        no longer an option by default.
      </p>
      <p>
        If you're a
        <span>Power Platform admin or app maker</span>
        and still need access to the classic UI for testing or feature
        validation, here’s a useful workaround to
        <span>disable or re-enable the new Fluent UI</span>
        experience at the environment or app level.
      </p>
      <h2 style="text-align: left;">For Makers and Admins :</h2>
      <h3 style="text-align: left;">
        Disable the New Fluent UI (Revert to Classic UI)
      </h3>
      <p>
        Admins can <strong>turn off</strong> the new Fluent UI across all
        model-driven apps in an environment by changing the "New look for model
        driven apps" setting using <strong>Solution Explorer</strong>.
      </p>
      <h4 style="text-align: left;"><strong>Steps:</strong></h4>
      <p></p>
      <ol>
        <li>
          Go to
          <a href="https://make.powerapps.com/" rel="noopener">https://make.powerapps.com/</a>
        </li>
        <li>
          Under <span>Solutions</span>, open an existing solution that includes
          one or more model-driven apps.
        </li>
        <li>
          Select
          <b><span>Add Existing</span>&nbsp;<span>→</span>&nbsp;<span>More</span>&nbsp;<span>→</span>&nbsp;</b><span><b>Settings</b><br /><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgh_MP38Q3-4D0GZ8yUj5cv3HCmWLyB-SzGDCgLHhrse5L-EWku0c8FfU8zuxnb3czo3RbeJKE6jimgc4ZmNGhWLORuPHnbejblA-RdSQC4rEWsxhsUloH2IOhN82vW3NyI62sxp_lcazn4sm-n57MLC3PFJt0Bg3Yi8REwX26kViq9A7dDHFRJPn8Ib00/s920/solution_addexisting_more_settings.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_8f32897f07.png" /></a></span>
        </li>
        <li>Search for <span>New look</span>.</li>
        <li>
          Select
          <span><b>New look for model driven apps</b></span>
          and click <span>Add</span> to include it in your solution. <br /><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinvV6yQWBMhJcqVLSR-_ycP4laizu1G4Bw-qyUGfVxCMyLFIv2htwH7WjRCeRL9YIsjJ6MCWjI-XwMohAH5JybjYq5nMrbSoZnuUiMwlSiylm59w0NVaIj4BcMo4fiMRbdkkCSqFWXSCs6mFWjPYp80NDxVuum2fjLenzKV0Kq1by88dvRHNPOd3oPPPY/s1845/new_look_for_model_driven_apps.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_0511d9b0d9.png" /></a>
        </li>
        <li>
          In the Solution Explorer, click
          <span><b>New look for model driven apps</b></span>. <br />
          <div class="separator" style="clear: both; text-align: center;">
            <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgezGUfTOSE4B77GtFkj0SRtG-O1RVVMkaQbiNxhIUlPRZ_L66CI7_NDo4BX2HDqFgJ9vw9tBOf9HNDlHGEN0gYeQNx7Yus85YchFYzy-4HI0l0h5owYoANQhaE8EZ_IbtaXFk1uF6CEEl093TNYpyuCs3kggiUdJ-bKK4ZMxyWlwDyqnhXQp6DOHsolv8/s1473/new_look_for_mda_off.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="1002" data-original-width="1473" src="{{ site.baseurl }}/assets/images/046/img_f668e6dc67.png" /></a>
          </div>
          <br />
        </li>
        <li>
          Set
          <strong>Setting Environment Value</strong>
          to <strong>No</strong>.
        </li>
        <li>
          Add the specific model-driven apps you want to revert to the classic
          UI.
        </li>
        <li>
          For each app, set the value to
          <strong>No</strong>.
        </li>
        <li>
          Click <strong>Save</strong>, then
          <strong>Publish All Customizations</strong>.
        </li>
      </ol>
      <p></p>
      <ol></ol>
      <p>
        This disables the modern UI and prevents users from toggling to the new
        experience.
      </p>
      <div class="separator" style="clear: both; text-align: center;">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaZP1reMGakn820Dolkx6XPyynq2wPysqB5MMcdVRB_x7sDouFfP1NgjuvwIi338ZQ5kf3_NgnB93nz4FKddK5rEXFuGIYdvWEJULX7Ugk_IyQB3NiqOffeFWbrZzJXLbqaJxjhNA2AAcZpNEH3wJXjoH6rP3Rp5KHKjlajypLKLWaAidaS0vNhDJQ9Dg/s1464/new_look_for_mda_on_for_one_app.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="996" data-original-width="1464" src="{{ site.baseurl }}/assets/images/046/img_575076fe02.png" /></a>
      </div>
      <p>
        If you want to enable the Classic UI for just one specific app within
        your solution, simply set the
        <span class="notion-enable-hover" data-token-index="1" style="font-weight: 600;">environment variable</span>
        to
        <span class="notion-enable-hover" data-token-index="3" style="font-weight: 600;">Yes</span>, and also set the
        <span class="notion-enable-hover" data-token-index="5" style="font-weight: 600;">Preferred App value</span>
        to
        <span class="notion-enable-hover" data-token-index="7" style="font-weight: 600;">Yes</span>
        for that app.<!--notionvc: 2b88f90d-a573-4e1e-9e2b-c28565d20e78-->
      </p>
      <h3 style="text-align: left;">
        Force Enable the New Fluent UI for All Users
      </h3>
      <p>
        Alternatively, if you want to enforce the new experience permanently,
        you can <strong>enable</strong> the "New look always on" setting.
      </p>
      <h4 style="text-align: left;"><strong>Steps:</strong></h4>
      <p></p>
      <ol>
        <li>
          Go to
          <a href="https://make.powerapps.com/" rel="noopener">https://make.powerapps.com/</a>
        </li>
        <li>
          Open your solution under
          <strong>Solutions</strong>.
        </li>
        <li>
          Select
          <strong>Add Existing</strong>&nbsp;<strong>→&nbsp;</strong><strong>More</strong>&nbsp;<strong>→</strong>&nbsp;<strong>Setting</strong>
        </li>
        <li>
          Search for
          <strong>New look always on</strong>.<br /><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3pv3t7KiCOCksDq8XhXCJrS2ZkwHRnweSmYHiqnmy7MEuIgkEvd-BHAe7vEgp5qGTC4EPLy5WWmYIunD5Z9IYVz2kt2GoGxlabOpT3nYRQhys-ZJrmH5eSa-y8lwnMsu0zvBJm9hTsBlKw6Q9kaLAVXV1GSg-KmkQqAyI32S-Jnr42zueFI_a7mIdpWA/s1848/new_look_always_on.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_739c75fa6c.png" /></a>
        </li>
        <li>
          Select it and click
          <strong>Add</strong>.
        </li>
        <li>
          In the Solution Explorer, open
          <strong>New look always on</strong>. <br /><br />
          <div>
            <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfGnQpA3qDInrR0iD8_ftKS2gp5eR3tx3QYbRL2Cd7_MctN_15zZLlLqWP_4dManiLVIIvqUNWwXDzY00ooBRguU9NXlUMjdje9980MqhX100wkN10CejHQhyE3KX-F3AT0QMhBG26Ops1EDsfYUOMPWle5WWXHcv2ebnIM0X49bfJ-7cdLwBxXICSIAw/s1461/new_look_always_on_for_solution.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_03b19e634f.png" /></a>
          </div>
          <br />
        </li>
        <li>
          Set the
          <strong>Setting Environment Value</strong>
          to <strong>Yes</strong>.
        </li>
        <li>
          Click <strong>Save</strong>, then
          <strong>Publish All Customizations</strong>.
        </li>
      </ol>
      <p></p>
      <ol></ol>
      <p>
        This removes the toggle and enforces the new Fluent UI for everyone.
      </p>
      <h2 style="text-align: left;">For Users :</h2>
      <h3 style="text-align: left;">
        <span class="notion-enable-hover" data-token-index="0" style="font-weight: 600;">New look for Model-Driven Apps Toggle:</span>
      </h3>
      <div>
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipxCcYbubIHi1pvpLy9mWGrUO42ja9mqwb_0rE7rp9nZ_-8bsowSCkT0Vuy0hhc02Mzgf2t8YmxbH1wWNCeQJlCvczEunDmWcPwaoMABis-EGo6eQ54Jy078ZLPsUxpDDxP4zns-644AoK7m9ml5nLT4RjV59vULAAtm9lka7ygACUHX0eIohVbY082Ms/s1467/app_settings_features_newlook.png"><img border="0" src="{{ site.baseurl }}/assets/images/046/img_e052b924aa.png" /></a>
      </div>
      <p></p>
      <ol>
        <li>In the app designer select Settings on the command bar.</li>
        <li>
          To manage features in a model-driven app, simply&nbsp;click on
          <strong>Settings</strong>, and then select <strong>Features</strong>.
          From there, you can enable or disable various capabilities for your
          app.
        </li>
        <li>
          One of the key options you'll see is:&nbsp;<span><b>New look for Model-Driven Apps</b><br />
            <div style="text-align: justify;">
              <b>&nbsp; &nbsp; &nbsp; &nbsp; </b>This feature is enabled by
              default and provides end users with a toggle labeled "<b>Try the new look</b>". It allows them to experience the modern Fluent UI for
              model-driven apps. The best part? Users can switch back to the
              classic experience anytime - at least while the toggle is still
              available.</div></span></li></ol><div style="text-align: justify;"><h4 style="text-align: left;">Reference</h4><div style="text-align: left;"><ul style="text-align: left;"><li><a href="https://learn.microsoft.com/en-us/power-apps/user/modern-fluent-design">https://learn.microsoft.com/en-us/power-apps/user/modern-fluent-design</a></li><li><a href="https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/app-properties">https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/app-properties</a></li></ul></div></div><div><ol style="text-align: left;"></ol><ol>
        </ol>
      </div>
      <div style="text-align: center;">Have a great day!</div>
    </div>
  </div>
</div>
