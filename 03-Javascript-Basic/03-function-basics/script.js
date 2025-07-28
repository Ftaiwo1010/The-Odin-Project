// Function Declaration
function favoriteAnimal(animal) {
   return animal + ' is my favorite animal'; 
}

console.log(favoriteAnimal('Goat'));


// Invoking functions
function random(number) {
    return Math.floor(Math.random() * number);
}

console.log(random(10));


function myFunction() {
    console.log('Hello Function');
}
myFunction();


// Parameters
function logMessage(from, text) {  // parameters: from, text
   console.log(from + ': ' + text); 
}
logMessage('Ann', 'Hello');
logMessage('Ann', 'Whats up?');


// Default parameters
function hello(name = 'Chris') {
    console.log(`Hello ${name}`);
}
hello('Ari');
hello();


// Local variable
function showMessage() {
   let message = 'Hello, I am Javascript!';  // local variable
   console.log(message); 
}
showMessage();  // Hello, I'm JavaScript!

showMessage();  // <-- Error! The variable is local to the function


// Outer variables
let userName = 'John';

function logMsg() {
   userName = 'Bob';   // (1) changed the outer variable

   let message = 'Hello, ' + userName;
   console.log(message);
}

console.log( userName ); // John before the function call
logMsg();
console.log(userName);   // Bob, the value was modified by the function


// Returning a value
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
console.log(result);


// example
function checkAge(age) {
   if (age >= 18) {
      return true;
   } else {
      return confirm('Do you have permission from your parents?');
   }
}

let age = +prompt('How old are you?', 18);

if (checkAge(age)) {
   console.log('Access granted');
} else {
   console.log('Access denied');
}


// example 2
function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    console.log('Showing you the movie');
}
showMovie(age);


// Anonymous functions and arrow functions
(function () {
   console.log('Hello anonymous');
})



// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
// }

// window.addEventListener('keydown', logKey);

//

window.addEventListener('keydown', function (event) {
   console.log(`You pressed "${event.key}"`) 
});


// Arrow function
window.addEventListener('keydown', (event) => {
   console.log(`You pressed "${event.key}"`) 
});


// example
let add = (a, b) => a + b;
console.log(add(1, 2));

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
console.log(double(3)); // 6


// If there are no arguments, parentheses are empty, but they must be present:
let sayHello = () => console.log('Hello arrow function');
sayHello();


//Arrow functions can be used in the same way as Function Expressions.
let welcome = (age < 18) ?
 () => console.log('Hello') :
 () => console.log('Greetings!');

welcome();


// Multiline arrow functions
let plus = (a, b) => {  // the curly brace opens a multiline function
   let result = a + b;
   return result;   // if we use curly braces, then we need an explicit "return"
};
console.log(plus(2, 2));  // 4

 


// Function expression
let sayHi = function() {
   console.log('Hello') 
}

// We can copy a function to another variable
let func = sayHi;
func();
sayHi();


// Callback functions
function ask(question, yes, no) {
   if(confirm(question)) yes()
   else no();   
}

function showOk() {
   console.log('You agreed.');
}

function showCancel() {
   console.log('You canceled the execution.');
}


// usage: functions showOk, showCancel are passed as arguments to ask
ask('Do you agree?', showOk, showCancel);
