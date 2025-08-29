**Answer to question no : 01**

### 1. `getElementById()`

Used to find a single element using a specific ID.
It returns only the element whose ID matches.

**Example:**

```html
<div id="box"></div>
```
```javascript
document.getElementById("box");
```

### 2. `getElementsByClassName()`

Used to find multiple elements using a specific class name.
It returns an **HTMLCollection** of all matching elements.

**Example:**

```html
<div class="item"></div>
<div class="item"></div>
```
```javascript
document.getElementsByClassName("item");
```

### 3. `querySelector()`

Used to find the first element that matches a given selector.
It returns the **first matching element**.

**Example:**

```html
<div class="card"></div>
<div class="card"></div>
```
```javascript
document.querySelector(".card");
```

### 4. `querySelectorAll()`

It returns a NodeList of **all elements** that match the given selector.

**Example:**

```html
<div class="card"></div>
<div class="card"></div>
```
```javascript
document.querySelectorAll(".card");
```



**Answer to question no : 02**

*To create a new element and insert it into the DOM, you need to follow these steps:*

1. **Create a new element.**

**Example:**

```javascript
let newElement = document.createElement("p");
```

2. **Add some text inside that element.**

**Example:**

```javascript
newElement.textContent = "I have been newly added to the DOM!";
```

3. **Optionally, add some attributes.**

**Example:**

```javascript
newElement.setAttribute("class", "highlight");
```

4. **Now insert the element into any part of the DOM.**

**Example:**

```javascript
document.body.appendChild(newElement);
```

### The complete code together looks like this:

```javascript
let newElement = document.createElement("p");
newElement.textContent = "I have been newly added to the DOM!";
newElement.setAttribute("class", "highlight");
document.body.appendChild(newElement);
```



**Answer to question no : 03**

When an event occurs on an element on a website, the event does not stay confined to that element alone. It moves from the innermost element → to the outer element → then to the outer parent elements, traveling upward step by step. This process of the event traveling upwards through the parent elements is called **Event Bubbling**.

When an event occurs on an element, first that element receives the event. Then the event moves to the parent element of that element. After that, it goes to the parent’s parent, and continues this way all the way up to the document.
**For example,** suppose there is a `<button>` inside a `<div>`, and the `<div>` is inside the `<body>`. When you click the button, first the button’s event handler will run, then the event handler of the div will run, and then the event handler of the body will run.
In other words, it works like a tree.



**Answer to question no : 04**

**Event delegation** means attaching an event listener to the parent element to handle the events of its child elements. In other words, instead of attaching separate event listeners to each child element, we attach a single event listener to the parent element to control the events of all child elements together.

**Why is Event Delegation useful?**
**1. Less code is needed.**
Let’s say I have 100 buttons. If I add a separate `addEventListener` for each button, the code becomes large and time-consuming. But if I use event delegation, I can just add one listener to the parent.

**2. Saves memory and improves performance.**
If there are many event listeners in the DOM, more memory is used and the browser has to do more work. But if I add just one listener to the parent, the browser uses less memory, reducing the load and improving performance.

**3. Works with dynamically added elements.**
Let’s say I create a new button later using JavaScript. If I use direct event listeners, I have to manually add a new listener for that button. But with event delegation, since the listener is already attached to the parent, any new button added as a child will automatically be handled.

**4. Code becomes simple and clean, and easier to maintain.**
If the number of buttons increases or decreases later, I don’t need to go into each element and modify the event listeners. With just one listener on the parent, everything can be controlled.



**Answer to question no : 05**

**`preventDefault()`**

This method is used to stop an element’s default behavior.

**Example:**
Suppose I have an `<a>` tag that opens a link. If I use `preventDefault()`, the link will no longer open.
```javascript
document.querySelector("a").addEventListener("click", function(event) {
  event.preventDefault();
});
```

**`stopPropagation()`**

This method keeps the event confined only to the element where it occurred and does not allow it to propagate upwards to its parent elements.
In other words, it stops Event Bubbling.

**Example:**
```javascript
const child = document.getElementById('child');
child.addEventListener("click", function(event) {
  event.stopPropagation();
});
```
