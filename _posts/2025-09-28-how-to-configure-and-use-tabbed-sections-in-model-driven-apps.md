---
post_id: "050"
layout: post
title: "How to Configure and Use Tabbed Sections in Model-Driven Apps?"
date: 2025-09-28 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Dynamics 365 CE", "Dynamics 365 CRM Online", "Model Driven Apps", "Power Apps", "Web resource", "JavaScript", "HTML"]
---

<img border="0" src="{{ site.baseurl }}/assets/images/050/img_62d6897223.gif" style="display: none;" width="220" />
<p style="text-align: justify;">
  When working with Dynamics 365 model-driven apps, we often think of forms in a
  traditional way - tabs holding sections, and sections holding fields.
  Recently, I stumbled upon a hidden gem that many of us might have overlooked:
  Tabbed Sections. At first, I didn’t even know this feature existed. After
  digging into it (thanks to Kailash Ramachandran for his detailed
  <a href="https://mytrial365.com/2024/05/16/exploring-the-underutilized-power-of-tabbed-sections-in-dynamics/" target="_blank">blog</a>), I realized how powerful and underutilized this feature really is.
</p>
<p>In this article, let's explore:</p>
<ul>
  <li>What are Tabbed Sections?</li>
  <li>How to configure Tabbed Sections?</li>
  <li>Why to use Tabbed Sections?</li>
</ul>
<h2 id="#what">What is Tabbed Sections?</h2>
<p>Here’s how a model-driven app form is structured:</p>
<ul>
  <li><b>Form →</b> Contains one or multiple tabs</li>
  <li><b>Tab →</b> Contains one or multiple sections</li>
  <li><b>Section →</b> Contains one or multiple components</li>
</ul><div style="text-align: justify;">A Tabbed Section allows you to host multiple tabs inside a section, and each tab
can display a different component. This keeps your form compact, organized, and
easy to navigate—no more endlessly scrolling through sections.</div><p></p>
<h2 id="#how">How to configure Tabbed Sections?</h2>
<p>You can add up to five different types of components in a tabbed section:</p>
<ul>
  <li>External Website</li>
  <li>HTML Web Resource</li>
  <li>Knowledge Search</li>
  <li>Quick View</li>
  <li>Subgrid</li>
</ul>
<!--Steps to configure the form-->
<h3>Steps to configure the form:</h3>
<ol>
  <li>
    Open the entity and edit the form where you want to add a tabbed section.
  </li>
  <li>In the Form Editor, switch to the Components tab on the left pane.</li>
  <li>Under Layouts, select Tabbed Section and drag it to your form.</li>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgESaGE0EAQ86YQDmTtcaaE86r5vxECcy9qi_rywczNaAoL8BVSIuTqoAPDq377BG9SR3S8ikD24mK3xjmH-8J9Pq-YDy-JRUr_p0lOaOBKTCOwOv82ucngzb3rhERZi0cnY76sm6CmLRmnLkO_qza5lVQtzhB12p7NzuIgNT9jzeixKrVJNH4tgZ9U3M8/s477/tabbed-section-component.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="477" data-original-width="404" height="320" src="{{ site.baseurl }}/assets/images/050/img_3f1a31069f.png" width="271" /></a><br />
  <li>Click and add it to the form wherever you want to</li>
  <li>
    Once added, configure its label and formatting from the right-side pane.
  </li>
  <li>Under Section Tabs, click + Add Another Tab.</li>
  <li>
    Choose the component type you want for each tab and configure its
    properties.
  </li>
  <li>Save and publish the form.</li>
</ol>
<blockquote style="border: none; margin: 0px 0px 0px 40px; padding: 0px;">
  <div class="separator" style="clear: both; text-align: center;">
    <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisp81PUdJXzjjFsOimXotPnHjVkDrSuXO9Lp8mhNCpxG87BtiPba3MVrEmJfuvW7nRL2icP9LlVrrBJnMu-Dwwvs2yfGGi6w5XA7dIbFIJFLuPwNNtHMYPjOrJB8huOXv8AuTa1OqEIDFlhlj_VV62H4oPopOYVdDpnWRs_Rb52dPPLK-nVbJzwz4XO30/s993/components-list-for-tabbed-sections.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="759" data-original-width="993" src="{{ site.baseurl }}/assets/images/050/img_e257137901.png" /></a>
  </div>
</blockquote>
<br />
<!--External Website-->
<h3>External Website :</h3>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrDqIjf0MShVFAmF8VMIrEPnalQeXZZvoy3L4jy7x2TB_AWYU4a4EH7qYRoG8YIv0IWHsbF7PRhJZsnI-oyjlHoJkwoeYd8DlM3Ja6_VwpjkoswmX61vq7Leu869W5WO9XB9GoHNXgPjUiDavSfvPhYsyQKdS6YiUsmjNItEcFybSk4gA-eISlPkOqFc/s1116/bef-external-website-tab.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="849" data-original-width="1116" src="{{ site.baseurl }}/assets/images/050/img_28e28717b7.png" /></a><br />
<ul>
  <li>+ Add a tab → choose External Website.</li>
  <li>Provide the Site URL.</li>
  <li>
    Configure iframe properties, including parameters under Advanced Settings.
  </li>
</ul>
<h4>Example:</h4>
<p style="text-align: justify;">
  I have added the External website tab to my section and gave the url as
  <a href="https://www.microsoft.com/en-in/">https://www.microsoft.com/en-in/</a>, and you can refer the result of the tab from the below image
</p>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc2P1Tht71JznbVwoejUdIjBADKUYWZ506RYN7cfEYdRt6F_msv16fmYuGaLOWZp2AsDfUJl3ufVGX6C-p_wBkWV_8TOIyA5L7dFtr-ceWsloIzbgei_kiLbWbv1SezKBs4R7a40RrhPjSNeGITUXqOE6l6dAB-hFjn-nuXUn5VqtURddkBLsYGDdB_Qk/s1757/result-external-website.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="660" data-original-width="1757" src="{{ site.baseurl }}/assets/images/050/img_6d6c663eb8.png" /></a><br />
<h3>HTML Web Resource :</h3>
<ul>
  <li>+ Add another tab → choose HTML Web Resource.</li>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjx4J5DbrypSuLWuMPNrx2MCbs9qTLhXjSphYYOblQsSVgG3EsC7gewTiHPKxianQLe1lvEieX0z221ZOWlZvFPikivTcjtGFv1kMAYBOwFOEOysNndR9tS8ftFDUEsygqrnXz8aMMxta311bhBkHhxJ2fkP-0t-7VL9J1cvAk3r_NnxiK6Uy7AxqeWcj4/s1053/web-resources-list-dialog.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="924" data-original-width="1053" src="{{ site.baseurl }}/assets/images/050/img_83bcebd825.png" /></a><br />
  <li>
    It will open a dialog with list of HTML web resources, select the one which
    you want to add.
  </li>
  <pre><code></code></pre>
  <li>
    Configure the formatting and scrolling for the tab in the side pane. You can
    also pass parameters to the web resource under advanced section.
  </li>
</ul>
<h4>Example:</h4>
<p style="text-align: justify;">
  I have added the existing HTML web resource as a tab to my section and you can
  refer the result of the tab from the below image. Refer the HTML code below for the Web Resource used in this blog.</p>
<script src="https://gist.github.com/tamilarasu-arunachalam/05967e199715d06028565c60294ebf9e.js"></script>
<p style="text-align: justify;">In this example, i have a
  html page which will show the related contacts with different User Interface
  using HTML and JavaScript.</p>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD0WmNem3146mglzaWqhZNVRTkolYo0HmW8iv-ZjcWlsEU1J6doB83LgFKE8DkL9RsOiiYB-nzigkunf1keQUOh0uSMgMmBRNRCPdtCUbsEoOeUAZUMIFkkg9eB8cOwILK3-hgzQMbDDuqjJZM94wW7yZm5Lwz01h-rJgN1z14TcDb2h6QMbM22faHbcg/s1748/result-web-resources.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="656" data-original-width="1748" src="{{ site.baseurl }}/assets/images/050/img_ffd9aace6b.png" /></a><br />
<h3>Subgrid :</h3>
<ul>
  <li>Click on <b>+ Add another tab</b> below the other tabs.</li>
  <li>
    It will open a <b>Tab Content</b> prompt dialog which asks table and view
    for showing the subgrid in the tab and click on Done.<br /><br />
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjswk_ddGLeQc3nsAmLLR8waXcpZivAvdR-FzYya-qh5W23pE1iQNvH0WCrdYJ7GjV29d0ojMD9qDoEVCK2Z5HXs_0cMZE8IV-3gErgR2zjwr4oOm7LBdry-NgtWgjz3I5w2nr9LiOYF2xVvQC6_GomDqaDtp3lIeNJ1yFpQp9dfr5OCS19KT3To3xZzpA/s705/subgrid-tab-1.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="705" data-original-width="462" src="{{ site.baseurl }}/assets/images/050/img_efc4c4991b.png" /></a>
    </div>
    <br />
  </li>
  <li>
    It will open a right side pane where you can customize the subgrid tab
    further like Adding label, Hiding Search box and setting maximum number of
    rows.&nbsp;<br /><br />
    <div class="separator" style="clear: both; text-align: center;">
      <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXixj26-y5Kvz8dP0CKFHtWnFsDsQkK3owuxKvrHFPV1y7AzR7uQaQ_rt8fdoOQaY7uzfEimJTFCThOXj_GcnzOza-xrxHq4AsjiThb-ejzIbk6rvt13ba_77xDN3W-TUkbmC87Mxjr-O6tpjPTjDtZKGZ2VH-S2sUP30AJGXKuZk6R9eWLVPqbRaORJU/s884/subgrid-tab.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="884" data-original-width="519" src="{{ site.baseurl }}/assets/images/050/img_6cc54d6c1d.png" /></a>
    </div>
    <br />
  </li>
  <li>Once all the changes were done we can Save and Publish the form.</li>
</ul>
<h4>Example:</h4>
<p style="text-align: justify;">
  I have added the existing subgrid with the view(My Active Contacts) as another
  tab to my section and you can refer the result of the tab from the below image.</p>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqQY096vPMF5QCAemA35WcQpRAAYxNm5wOiY885-cL0d4hCwh2MiBUnc6AZNdOuhC2wnN0s1ynUKN_kMNzapsf7HeOpOpez9hkhmo3T2Z2ULVSuJpsDxAkWphMcWODykwVRR1lyJmVKNehBRjasK4lwhJgFbwT3wSkAvMCFlVgd8gbm1AS-U3SVj4XzeE/s1758/result-subgrid.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="606" data-original-width="1758" src="{{ site.baseurl }}/assets/images/050/img_9511e315ea.png" /></a><br />
<h3>Quick view:</h3>
<ul>
  <li>
    Click on <b>+ Add another tab</b> below the other tabs.<br /><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-s7DaY4M_-A30L8Fd8EP8EIHV35nqQZNoSTw9tRTp-HoELxqaifD7GGGyE7kpIA3aLA6C4uuk9BZp-rPOcR_9ot0md5_RmyoppIPAArwILCarulWw2uC6-pEycBCVsTntB_qjNa9EpQirtqE2zAtnYoPpOBD1Jw260Twb0Bvq21YdtQe9DwZi5vYSCEM/s465/quick-view-tab-1.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="465" data-original-width="354" src="{{ site.baseurl }}/assets/images/050/img_85a02b9602.png" /></a>
  </li>
  <li>
    It will open a <b>Tab Content</b> prompt dialog which asks table and quick
    view form for showing the quick view in the tab and click on Done.
  </li>
  <br />
  <li>
    Check all the other customizable options once done save and publish the
    form.
  </li>
</ul>
<div class="separator" style="clear: both; text-align: center;">
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijnvirCPSz26aE1KwI9RKLpwbrTCzlVchR9IdCJjGKovgbvaxuBzZ2mKSUUd_x9nKNmm6YTEBvE7-2bCnguI7Ev2WIhcFSAOMTNxOgoReQyLxhHgvHyhZlIUEXoVlcBmHgbnEFP2DhX_hqiPig1cFNVJhxHP0Xf9pwWpm8sJ6Fflz0AcOFIINLzoqhBak/s815/quick-view-tab-2.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="815" data-original-width="648" src="{{ site.baseurl }}/assets/images/050/img_eb71a3fb2b.png" /></a>
</div>
<h4>Example:</h4>
<p style="text-align: justify;">
  I have added the table as contact and one of its Quick view form as another
  tab to my section and you can refer the result of the tab from the below image
</p>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg86U0Hg6M3rGh35l849kA2fkTtyONV6LeanevSB6-XFJDEc9RrSib7Tta_Bv6wezZ1s5hMLpma31DcAZ7Ild3BGLb1yVtuvgJRqWf6MGbDyFWY0MrZjtM-SINStuwO5V4lvAKlC23aEEs3NpByiCAsmOIrrO0OGLlv8c6klvf6D4DURVXCsm1U9aJ-490/s1764/result-quick-view.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="623" data-original-width="1764" src="{{ site.baseurl }}/assets/images/050/img_4cf222ec56.png" /></a><br />
<h3>Knowledge search:</h3>
<ul>
  <li>Click on <b>+ Add another tab</b> below the other tabs.</li>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwiJr7LxkA5JZgfMR_9Z8Qdo-p1Jhuuo_KhRvWFgDPVOuHDzoxL_1hPNrOymq2t2Ols4h2LumpG__6CWI8qaYqF_Ca090EfQn2P2vULoJVvoTep4ZjN_JWot7fNr2olQ-73K1cCn37q1oY7wcXGjJo2CJhJSw3lOg7NG3ljCBNsGmgL7s1vgu-twSxZlU/s398/knowledge-search-1.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="285" data-original-width="398" src="{{ site.baseurl }}/assets/images/050/img_e6c2a172cb.png" /></a><br />
  <li>Select the Tab icon and click on Done</li>
  <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFpOXLTbXMYZ4qxejcwAfmlSZAYuMcG3SLXGtzlc67CA7GPZ2Yw51e4z0MccpdAPhQgd9cPaIWu5LK_pJEfs8TqSkfWM1ltspFK2DthNahxxso9IbrFz9egH3dCtHRlvowTRRcjhREasFE5_tkBZ69mDqmT4vpbJMhU8xZlZWB123BpZw4Fcou7JnO1xk/s896/knowledge-search-2.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="896" data-original-width="557" src="{{ site.baseurl }}/assets/images/050/img_bbda2671a7.png" /></a><br />
  <li>
    Check all the other customizable options once done save and publish the
    form.
  </li>
  <li>Save and publish the form.</li>
</ul>
<h4>Example:</h4><div><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnPxl8zZtVhRESWqGrbdTNSipmEJcYkJdHzPGIWnWBQzoFzL0-3MQ17p2zGNQRUcMIFNSPFdHJY7YitEFVw7p-c27Y8_IZe6EMuI5LgMar6ltJLshW9NMmVtlBklh5_oYrkCyQtdVdsfjaC5PvajATl7jLUJcMrGaQ6G1zYKttSLOCqc7JFGlm7nwDNvI/s1767/result-knowledge-search.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="381" data-original-width="1767" src="{{ site.baseurl }}/assets/images/050/img_01e0cb36cd.png" /></a></div>
<p style="text-align: justify;"><i><b>Note:</b></i> As my app is a custom power app and doesn't have knowledge base. If you have access to Knowledge Articles in Dynamics 365 please give it a try.</p><h3>Bonus:</h3>
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7zlztKsTWq7m07aBopUo5kszFqWT5YRftcwxKjLl23jPN8CHLKmnCHQhkNONvYfmNpn2h7yLEmU7w17RAwkFzh6hNXL2GphfoYPiV-BIiTQ7aYUJhzKEJQt-vie6aNb3wD5aXJpG8HCbNqlu3t_A2Mj5px8w7J7O9yEnthiczy0E9K1PiwYa_IMH7nXU/s332/bonus-tip-1-move-up-move-down.png" style="margin-left: 1em; margin-right: 1em; text-align: center;"><img border="0" data-original-height="258" data-original-width="332" src="{{ site.baseurl }}/assets/images/050/img_ba5dc78212.png" /></a><br />
<p style="text-align: justify;">
  You can modify the order of the tabs by navigating to the section, under the
  <b>Section Tabs</b> section you will see the list of created tabs. Click on
  the ellipse icon of the tab which you want to change the order and you can
  move up and move down as you want.
</p>
<p style="text-align: center;"><i>Have a great day!</i></p>
