>

---

# 🚀 JavaScript DOM & Events – Interview Notes

> Clean, simple, user-friendly explanations of important DOM and Event concepts in JavaScript.

---

## 📌 1. Difference Between DOM Selection Methods

### 🆔 `getElementById()`

- Selects an element by **ID**
- Returns **one single element**
- Fast and straightforward

```js
const element = document.getElementById("myId");
```

💡 We use this when the element has a unique ID.

---

### 🎯 `getElementsByClassName()`

- Selects elements by **class name**
- Returns a **live HTMLCollection**
- Can return multiple elements

```js
const elements = document.getElementsByClassName("myClass");
```

⚠️ Since it's a collection, we usually need to loop through it.

---

### 🔎 `querySelector()`

- Selects the **first matching element**
- Accepts any valid **CSS selector**
- Very flexible

```js
const element = document.querySelector(".myClass");
```

---

### 🔍 `querySelectorAll()`

- Selects **all matching elements**
- Returns a **static NodeList**

```js
const elements = document.querySelectorAll(".myClass");
```

✅ Most commonly used in modern JavaScript projects.

---

---

# 🏗️ 2. How to Create and Insert a New Element into the DOM

Creating a new element usually follows **3 simple steps**:

### 1️⃣ Create the element

```js
const newDiv = document.createElement("div");
```

---

### 2️⃣ Add content or attributes

```js
newDiv.textContent = "Hello World!";
newDiv.classList.add("box");
```

---

### 3️⃣ Insert it into the DOM

```js
document.body.appendChild(newDiv);
```

### 🔥 Other useful methods:

- `append()`
- `prepend()`
- `before()`
- `after()`

---

---

# 🌊 3. What is Event Bubbling?

Event Bubbling means:

> When an event happens on an element, it first runs on that element, then moves upward to its parent, then grandparent, and so on — up to `document`.

### Example Structure

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

Here how it works:

If we click the button:

1. The button’s event runs
2. Then the parent’s event runs
3. Then it continues bubbling up

🧠 This is the default behavior of events in JavaScript.

---

---

# 🎯 4. What is Event Delegation? Why Is It Useful?

Event Delegation means:

> Instead of attaching event listeners to multiple child elements, we attach **one listener to their parent**.

It works because of **event bubbling**.

### Example:

```js
document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});
```

---

### ✅ Why It’s Powerful

- 🚀 Better performance (fewer listeners)
- 🔄 Works for dynamically added elements
- 🧹 Cleaner, maintainable code
- 📉 Less memory usage

👉 One listener can manage hundreds of child elements.

---

---

# 🛑 5. Difference Between `preventDefault()` and `stopPropagation()`

These two methods are often confused — but they solve different problems.

---

### 🚫 `preventDefault()`

Stops the browser’s default behavior.

Example:

- Prevent form submission
- Prevent link navigation

```js
event.preventDefault();
```

🧠 It stops what the browser normally does.

---

### 🧱 `stopPropagation()`

Stops the event from moving up (bubbling).

```js
event.stopPropagation();
```

🧠 It stops the event from reaching parent elements.

---

### ⚡ Simple Comparison

| Method              | Stops What?            |
| ------------------- | ---------------------- |
| `preventDefault()`  | Default browser action |
| `stopPropagation()` | Event bubbling         |

---

---
