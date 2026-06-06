---
post_id: "039"
layout: post
title: "Making XRM Web API Calls Synchronous with JavaScript in Dynamics 365 CRM"
date: 2024-12-08 17:41:00 +0000
category: Dynamics 365 CE
categories: ["Model Driven Apps", "JavaScript", "Web resource", "Dynamics 365 CE", "Dynamics 365 Web API"]
---

<img border="0" data-original-height="400" data-original-width="700" height="183" src="{{ site.baseurl }}/assets/images/039/img_fb79362642.png" width="320" style="display:none" /><p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>When working with Dynamics 365 CRM and Model Driven Apps, developers often need to interact with the XRM Web API to perform CRUD (Create, Read, Update, Delete) operations. By default, the XRM Web API works asynchronously. This means that the results are returned later, allowing other code to run in the meantime. However, there are times when synchronous calls are needed, especially when operations must happen in a specific order. In this post, we'll explore how to make XRM Web API calls appear synchronous in Dynamics 365.</p>
<h3><strong>Understanding Asynchronous vs. Synchronous in JavaScript</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>JavaScript, the language used for Dynamics 365 scripts, is single-threaded. This means it doesn't naturally wait for processes to complete before moving on to the next task. Asynchronous operations, like XRM Web API calls, are useful for keeping the user interface responsive. However, there are times when you need the results right away. Let's explore some ways to handle this.</p>
<h3><strong>Approach 1: Using async/await</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>One way to make asynchronous code behave like it's synchronous is by using JavaScript’s async and await keywords. These keywords allow you to write code that looks sequential but still works asynchronously.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-jsx">async function getEntityRecord(entityName, recordId) {
    const result = await Xrm.WebApi.retrieveRecord(entityName, recordId);
    console.log(result);
    return result;
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001")
</code></pre>
<p style="text-align: justify;">In this example, the <code>retrieveRecord</code> call waits until it gets the result before moving to the next line of code. The <code>await</code> keyword pauses the function execution until the promise resolves.</p>
<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Readable</strong>: The code looks sequential and is easy to understand.</li>
<li><strong>Control</strong>: It works well for dependent API calls.</li>
</ul>
<p><strong>Drawbacks:</strong></p>
<ul>
<li><strong>Compatibility</strong>: Requires modern browsers that support ES6+.</li>
<li><strong>Not Fully Synchronous</strong>: JavaScript remains asynchronous at its core.</li>
</ul>
<h3><strong>Approach 2: Using JavaScript Promises with .then()</strong></h3>
<p style="text-align: justify;">If <code>async/await</code> is not an option, you can use promises and <code>.then()</code> to achieve a similar effect. This still doesn't make the code fully synchronous but allows sequential execution.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-jsx">function getEntityRecord(entityName, recordId) {
    Xrm.WebApi.retrieveRecord(entityName, recordId)
        .then(result =&gt; {
            console.log(result);
            return result;
        })
        .catch(error =&gt; {
            console.error(error);
        });
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001");
</code></pre>
<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Browser Support</strong>: Works with older JavaScript versions.</li>
<li><strong>Chainable</strong>: You can chain multiple <code>.then()</code> blocks.</li>
</ul>
<p><strong>Drawbacks:</strong></p>
<ul>
<li><strong>Callback Hell</strong>: Chaining many promises can make the code hard to read.</li>
<li><strong>Still Asynchronous</strong>: JavaScript remains asynchronous, so it doesn't truly block the thread.</li>
</ul>
<h3><strong>Approach 3: Using XMLHttpRequest (Old Method)</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>Before the XRM Web API, developers used <code>XMLHttpRequest</code> for synchronous requests. Although this method can make requests synchronous, it is not recommended for modern web development because it can freeze the browser and affect performance.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-jsx">function getEntityRecordSync(entityName, recordId) {
    const xhr = new XMLHttpRequest();
    const url = `${Xrm.Utility.getGlobalContext().getClientUrl()}/api/data/v9.0/${entityName}(${recordId})`;
    xhr.open("GET", url, false); // false makes the request synchronous
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();

    if (xhr.status === 200) {
        const result = JSON.parse(xhr.responseText);
        console.log(result);
        return result;
    } else {
        console.error(xhr.statusText);
    }
}

getEntityRecordSync("account", "00000000-0000-0000-0000-000000000001");
</code></pre>
<p><strong>Drawbacks:</strong></p>
<ul>
<li><strong>Poor Performance</strong>: It blocks the main thread and affects performance.</li>
<li><strong>Deprecated</strong>: Synchronous XMLHttpRequest is discouraged and might not be supported in the future.</li>
</ul>
<h3><strong>Approach 4: Using the Fetch API</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>A cleaner and modern approach is using the <code>fetch</code> API, which works well for both asynchronous and synchronous-like flows.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-jsx">async function getEntityRecord(entityName, recordId) {
    const url = `${Xrm.Utility.getGlobalContext().getClientUrl()}/api/data/v9.0/${entityName}(${recordId})`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Record fetched successfully:", result);
        return result;
    } catch (error) {
        console.error("Error fetching record:", error);
    }
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001");
</code></pre>
<p><strong>Benefits:</strong></p>
<ul>
<li><strong>True Synchronous-like Behavior</strong>: Blocks execution until the data is available.</li>
</ul>
<p><strong>Drawbacks:</strong></p>
<ul>
<li><strong>Performance Impact</strong>: It can freeze the UI, especially on the client side.</li>
<li><strong>Deprecation Risk</strong>: Some methods like synchronous XHR are being phased out.</li>
</ul>
<h3><strong>Approach 5: Using jQuery</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>If you're using jQuery in your project, you can use its <code>$.ajax</code> method for both asynchronous and synchronous-like calls.</p>
<p><strong>Example 1: Using async/await with jQuery:</strong></p>
<pre><code class="language-jsx">async function getEntityRecord(entityName, recordId) {
    const url = `${Xrm.Utility.getGlobalContext().getClientUrl()}/api/data/v9.0/${entityName}(${recordId})`;
    try {
        const result = await $.ajax({
            url: url,
            type: "GET",
            contentType: "application/json",
            headers: { "Accept": "application/json" }
        });
        console.log("Record fetched successfully:", result);
        return result;
    } catch (error) {
        console.error("Error fetching record:", error);
    }
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001");
</code></pre>
<p><strong>Example 2: Synchronous Request with jQuery:</strong></p>
<pre><code class="language-jsx">function getEntityRecordSync(entityName, recordId) {
    const url = `${Xrm.Utility.getGlobalContext().getClientUrl()}/api/data/v9.0/${entityName}(${recordId})`;
    let result = null;
    $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json",
        headers: { "Accept": "application/json" },
        async: false,  // Makes the call synchronous
        success: function(response) {
            result = response;
            console.log("Record fetched successfully:", response);
        },
        error: function(error) {
            console.error("Error fetching record:", error);
        }
    });

    return result;
}

getEntityRecordSync("account", "00000000-0000-0000-0000-000000000001");
</code></pre>
<p><strong>Drawbacks of Synchronous Ajax:</strong></p>
<ul>
<li><strong>Freezes UI</strong>: The UI will freeze until the call is complete, creating a bad user experience.</li>
<li><strong>Avoid</strong>: Synchronous calls are generally not recommended in modern web development.</li>
</ul>
<h3><strong>Approach 6: Using Callbacks</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>A more traditional approach to handle asynchronous code in a sequential manner is using callbacks. In this approach, you pass a function to handle the result once the API call finishes.</p>
<p><strong>Example:</strong></p>
<pre><code class="language-jsx">function getEntityRecord(entityName, recordId, callback) {
    Xrm.WebApi.retrieveRecord(entityName, recordId).then(function success(result) {
        callback(null, result);
    }, function error(error) {
        callback(error, null);
    });
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001", function(error, result) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Record fetched:", result);
    }
});
</code></pre>
<h3><strong>Which Approach Should You Use?</strong></h3>
<ol>
<li><strong>Use async/await:</strong>
<ul>
<li style="text-align: justify;"><strong>Best for:</strong> Modern projects with ES6+ support.</li>
<li style="text-align: justify;"><strong>Why:</strong> It makes your code easy to read and follow, and allows you to handle asynchronous operations in sequence without freezing the user interface.</li>
<li style="text-align: justify;"><strong>When to use:</strong> If your project supports async/await.</li>
</ul>
</li>
<li><strong>Use Promise Chaining (<code>.then()</code>):</strong>
<ul>
<li style="text-align: justify;"><strong>Best for:</strong> Older projects or environments that don’t support async/await.</li>
<li style="text-align: justify;"><strong>Why:</strong> It allows you to handle asynchronous operations in sequence, but can get complicated with too many <code>.then()</code> blocks.</li>
<li style="text-align: justify;"><strong>When to use:</strong> If you're working with older JavaScript versions or browsers that don’t support async/await.</li>
</ul>
</li>
<li><strong>Avoid Synchronous XMLHttpRequest:</strong>
<ul>
<li style="text-align: justify;"><strong>Best for:</strong> Very rare situations where you have no other choice.</li>
<li style="text-align: justify;"><strong>Why:</strong> It blocks the code, slowing down performance and causing a poor user experience. It’s best avoided.</li>
<li style="text-align: justify;"><strong>When to use:</strong> Never, unless absolutely necessary.</li>
</ul>
</li>
<li><strong>Use jQuery (if already using it):</strong>
<ul>
<li style="text-align: justify;"><strong>Best for:</strong> Projects that already use jQuery.</li>
<li style="text-align: justify;"><strong>Why:</strong> jQuery makes it easier to manage asynchronous code, but synchronous calls are discouraged for the same reasons as XMLHttpRequest.</li>
<li style="text-align: justify;"><strong>When to use:</strong> If you’re already using jQuery and want to manage asynchronous operations more easily.</li>
</ul>
</li>
</ol>
<h3><strong>Conclusion</strong></h3>
<p style="text-align: justify;"><span>&nbsp;&nbsp; &nbsp;</span>In Dynamics 365 CRM, making synchronous-like API calls can be useful when the results are required in a specific order. While JavaScript is naturally asynchronous, methods like <code>async/await</code>, <code>$.ajax</code>, or callbacks can help you structure your code sequentially.</p>