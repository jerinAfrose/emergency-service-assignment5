1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS: getElementById:( We can access the id's by this attribute, this is single element based, it returns a single element), getElementByClassName:(We can access the classes by this attribute, it returns multiple elements like array,object,array like object), querySelector/querySelectorAll:(We can use it for same class selector, querySelector returns the first element and querySelectorAll returns full array means all elements)

2. How do you create and insert a new element into the DOM?
ANS: At first we create the element by document.createElement('tag name') then we can set classList by adding design then parentNode.appendChild(childNode) by doing this we can insert the element.
3. What is Event Bubbling and how does it work?
ANS: This method is like tree. when an event applied on a node after triggered it worked on its parent node then its parent's parent node like bubbles up in water. 
4. What is Event Delegation in JavaScript? Why is it useful?
ANS: If i have to add same event in various child node then we can use only on their parent node. By adding event on the parent node the child node can be accessible by the event.
5. What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault() is used for stop default action of a browser like form submit button and stopPropagation() is used for stopping event bubbling.
