Question no-1:--> What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer no-1: Main difference between-
 getElementById() --> it's just give a single element by ID

getElementsByClassName() --> this is multiple elements by class (live collection)

querySelector() --> it's only give a first matching element using CSS selector

querySelectorAll() --> it's all matching elements using CSS selector (static collection).



Question no-2: -->  How do you create and insert a new element into the DOM?

Answer no-2: Create element-->  createElement() is a JavaScript method used to create a new HTML element dynamically.
such as--> const newDiv = document.createElement("div");

Insert into DOM --> its use appendChild();



Question no-3: What is Event Bubbling? And how does it work?

Answers no-3: 1.Event bubbling means the event moves from child to  parent.
2.It allows parent elements to respond to child events.
3.It can be stopped using stopPropagation().



Question no-4: What is Event Delegation in JavaScript? Why is it useful?


Answers no-4:--> event delegation in javascript: 
Event delegation means handling child events using a parent listener.
this is useful because it improves performance and supports dynamic elements.


Question no-5: What is the difference between preventDefault() and stopPropagation() methods?


Answers no-5:--> preventDefault() --> Stops what the browser normally does.

stopPropagation() --> Stops the event from moving to parent elements.
