---
layout: post
post_id: '039'
title: Making XRM Web API Calls Synchronous with JavaScript in Dynamics 365 CRM
date: 2024-12-08 17:41:00 +0000
image: assets/images/039/img_fb79362642.png
description: ''
meta_keywords: ''
category: Dynamics 365 CE
categories:
  - Model Driven Apps
  - JavaScript
  - Web resource
  - Dynamics 365 CE
  - Dynamics 365 Web API
---

When working with Dynamics 365 CRM and Model Driven Apps, developers often need to interact with the XRM Web API to perform CRUD (Create, Read, Update, Delete) operations. By default, the XRM Web API works asynchronously. This means that the results are returned later, allowing other code to run in the meantime. However, there are times when synchronous calls are needed, especially when operations must happen in a specific order. In this post, we'll explore how to make XRM Web API calls appear synchronous in Dynamics 365.

### **Understanding Asynchronous vs. Synchronous in JavaScript**

    JavaScript, the language used for Dynamics 365 scripts, is single-threaded. This means it doesn't naturally wait for processes to complete before moving on to the next task. Asynchronous operations, like XRM Web API calls, are useful for keeping the user interface responsive. However, there are times when you need the results right away. Let's explore some ways to handle this.

### **Approach 1: Using async/await**

    One way to make asynchronous code behave like it's synchronous is by using JavaScript’s async and await keywords. These keywords allow you to write code that looks sequential but still works asynchronously.

**Example:**

```jsx
async function getEntityRecord(entityName, recordId) {
    const result = await Xrm.WebApi.retrieveRecord(entityName, recordId);
    console.log(result);
    return result;
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001")
```

In this example, the `retrieveRecord` call waits until it gets the result before moving to the next line of code. The `await` keyword pauses the function execution until the promise resolves.

**Benefits:**

-   **Readable**: The code looks sequential and is easy to understand.
-   **Control**: It works well for dependent API calls.

**Drawbacks:**

-   **Compatibility**: Requires modern browsers that support ES6+.
-   **Not Fully Synchronous**: JavaScript remains asynchronous at its core.

### **Approach 2: Using JavaScript Promises with .then()**

If `async/await` is not an option, you can use promises and `.then()` to achieve a similar effect. This still doesn't make the code fully synchronous but allows sequential execution.

**Example:**

```jsx
function getEntityRecord(entityName, recordId) {
    Xrm.WebApi.retrieveRecord(entityName, recordId)
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(error => {
            console.error(error);
        });
}

getEntityRecord("account", "00000000-0000-0000-0000-000000000001");
```

**Benefits:**

-   **Browser Support**: Works with older JavaScript versions.
-   **Chainable**: You can chain multiple `.then()` blocks.

**Drawbacks:**

-   **Callback Hell**: Chaining many promises can make the code hard to read.
-   **Still Asynchronous**: JavaScript remains asynchronous, so it doesn't truly block the thread.

### **Approach 3: Using XMLHttpRequest (Old Method)**

    Before the XRM Web API, developers used `XMLHttpRequest` for synchronous requests. Although this method can make requests synchronous, it is not recommended for modern web development because it can freeze the browser and affect performance.

**Example:**

```jsx
function getEntityRecordSync(entityName, recordId) {
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
```

**Drawbacks:**

-   **Poor Performance**: It blocks the main thread and affects performance.
-   **Deprecated**: Synchronous XMLHttpRequest is discouraged and might not be supported in the future.

### **Approach 4: Using the Fetch API**

    A cleaner and modern approach is using the `fetch` API, which works well for both asynchronous and synchronous-like flows.

**Example:**

```jsx
async function getEntityRecord(entityName, recordId) {
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
```

**Benefits:**

-   **True Synchronous-like Behavior**: Blocks execution until the data is available.

**Drawbacks:**

-   **Performance Impact**: It can freeze the UI, especially on the client side.
-   **Deprecation Risk**: Some methods like synchronous XHR are being phased out.

### **Approach 5: Using jQuery**

    If you're using jQuery in your project, you can use its `$.ajax` method for both asynchronous and synchronous-like calls.

**Example 1: Using async/await with jQuery:**

```jsx
async function getEntityRecord(entityName, recordId) {
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
```

**Example 2: Synchronous Request with jQuery:**

```jsx
function getEntityRecordSync(entityName, recordId) {
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
```

**Drawbacks of Synchronous Ajax:**

-   **Freezes UI**: The UI will freeze until the call is complete, creating a bad user experience.
-   **Avoid**: Synchronous calls are generally not recommended in modern web development.

### **Approach 6: Using Callbacks**

    A more traditional approach to handle asynchronous code in a sequential manner is using callbacks. In this approach, you pass a function to handle the result once the API call finishes.

**Example:**

```jsx
function getEntityRecord(entityName, recordId, callback) {
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
```

### **Which Approach Should You Use?**

1.  **Use async/await:**

    -   **Best for:** Modern projects with ES6+ support.
    -   **Why:** It makes your code easy to read and follow, and allows you to handle asynchronous operations in sequence without freezing the user interface.
    -   **When to use:** If your project supports async/await.

2.  **Use Promise Chaining (`.then()`):**

    -   **Best for:** Older projects or environments that don’t support async/await.
    -   **Why:** It allows you to handle asynchronous operations in sequence, but can get complicated with too many `.then()` blocks.
    -   **When to use:** If you're working with older JavaScript versions or browsers that don’t support async/await.

3.  **Avoid Synchronous XMLHttpRequest:**

    -   **Best for:** Very rare situations where you have no other choice.
    -   **Why:** It blocks the code, slowing down performance and causing a poor user experience. It’s best avoided.
    -   **When to use:** Never, unless absolutely necessary.

4.  **Use jQuery (if already using it):**

    -   **Best for:** Projects that already use jQuery.
    -   **Why:** jQuery makes it easier to manage asynchronous code, but synchronous calls are discouraged for the same reasons as XMLHttpRequest.
    -   **When to use:** If you’re already using jQuery and want to manage asynchronous operations more easily.

### **Conclusion**

In Dynamics 365 CRM, making synchronous-like API calls can be useful when the results are required in a specific order. While JavaScript is naturally asynchronous, methods like `async/await`, `$.ajax`, or callbacks can help you structure your code sequentially.
