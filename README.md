1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

        getElementById returns a single element that matched with the given id.
        getElementsByClassName returns html collection of all elements with the given class name.
        querySelector returns first element that matches with the CSS selector.
        querySelectorAll returns a nodelist of all matching elements.

2. How do you create and insert a new element into the DOM?
        
        create element - 
        let element = document.createElement(tag name)
        element.innerText = "something"

        insert element - 
        document.getElementById(id name).appendChild(element)

3. What is Event Bubbling and how does it work?

        Event Bubbling means when an event triggered on a specific element first runs its own handler and then event 'bubbles up' to its parent, 
        then to grandparent and continues this journey through all ancestors in the DOM tree.

        for example -
        <div>
          <button>Click Me</button>
        </div>
        if 'Click me' is clicked and there's an event handler for that click event, first that event will happen for the button then for the div and
        will continue to bubble upwards.

        button -> div -> Body -> Document -> Window

4. What is Event Delegation in JavaScript? Why is it useful?

        Event Delegation is a technique where instead of adding event listener to multiple child, you attach a single event listener to a common parent.
        
        Why is it useful: 
        1. Fewer event listener
        2. Works for element that added later

5. What is the difference between preventDefault() and stopPropagation() methods?

        preventDefault() -> prevent default browser action for an event
        stopPropagation() -> stops the event from bubbling any further
