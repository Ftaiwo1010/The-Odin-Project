// DOM Exercise

// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

const container = document.querySelector('#container');

// a <p> with red text that says “Hey I’m red!”

const firstP = document.createElement('p');
firstP.textContent = 'Hey i\'m red!';
firstP.style.color = 'red';

container.appendChild(firstP);


// an <h3> with blue text that says “I’m a blue h3!”

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3';
h3.style.color = 'blue';

container.appendChild(h3);


// a <div> with a black border and pink background color with the following elements inside of it:

const div = document.createElement('div');
div.classList.add('inner-container');
div.style.cssText = 'border: 1px solid black; backgroundColor: pink;';

// another <h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

// a <p> that says “ME TOO!”
const innerP = document.createElement('p');
innerP.textContent = 'ME TOO!';

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

div.appendChild(h1);
div.appendChild(innerP);

container.appendChild(div);

console.log(container);

