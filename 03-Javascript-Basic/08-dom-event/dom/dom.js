// Targeting nodes with selectors

// You can also use relational selectors (i.e., firstElementChild or lastElementChild, etc.)

// selects the #container div
const container = document.querySelector('#container');

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector('.controls');

// selects the prior sibling => .display
const priorSibling = controls.previousElementSibling;
console.log(priorSibling);   // <div class="display"></div>


// DOM methods

// query selectors
// we've made use of it above


// element creation
const div = document.createElement('div');

// append elements
// parentNode.appendChild(childNode)

container.appendChild(div);

// adding inline style

// adds the indicated style rule to the element in the div variable
div.style.color = 'blue';

// adds several style rules
div.style.cssText = 'fontSize: 30px;color: crimson; background: yellow;';

// adds several style rules
// div.setAttribute("style", "color: blue; background: white;");

// bracket notation with kebab-case: also works
//div.style["background-color"];

// bracket notation with camelCase: also works
//div.style["backgroundColor"];


// editing attributes

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute('id', 'theDiv');

console.log(div);


// returns value of specified attribute, in this case "theDiv"
console.log(div.getAttribute('id'));


// removes specified attribute
div.removeAttribute('id');
console.log(div);


// Working with classes

// adds class "new" to your new div
div.classList.add('new');
console.log(div);

// removes "new" class from div
div.classList.remove('new');
console.log(div);

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle('active');
console.log(div);


// Adding text content

// creates a text node containing "Hello World!" and inserts it in div
div.textContent = 'Hello World!';
console.log(div);


// Adding HTML content

// renders the HTML inside div
div.innerHTML = '<span>Hello Again!</span>';







