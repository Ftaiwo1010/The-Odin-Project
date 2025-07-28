// Declaration
// There are two syntaxes for creating an empty array:

let emptyArr1 = new Array();
let emptyArr2 = [];

console.log(emptyArr1);
console.log(emptyArr2);


let fruits = ['Apple', 'Orange', 'Plum'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// We can replace an element:

fruits[2] = 'Pear';  // now ["Apple", "Orange", "Pear"]

// …Or add a new one to the array:

fruits[3] = 'lemon';  // now ["Apple", "Orange", "Pear", "Lemon"]

console.log(fruits);

// Length of array
console.log(fruits.length);

// An array can store elements of any type.

// mix of values
let mixValues = ['Apple', {name: 'John'}, true, function() {console.log('hello');
}, 10];

// get the object at index 1 and then show its name
console.log(mixValues[1].name);

// get the function at index 3 and run it
mixValues[3]();

console.log(mixValues);


// Get last elements with "at"

console.log(fruits[fruits.length - 1]);

// Luckily, there’s a shorter syntax: fruits.at(-1):
console.log(fruits.at(-1));


// Methods pop/push, shift/unshift

// Methods that work with the end of the array:
// pop
// Extracts the last element of the array and returns it:

console.log(fruits.pop());
console.log(fruits);


// push
// Append the element to the end of the array:

fruits.push('Watermelon');
console.log(fruits);


// Methods that work with the beginning of the array:
// shift
// Extracts the first element of the array and returns it:

console.log(fruits.shift());  // remove Apple and alert it
console.log(fruits);

// unshift
// Add the element to the beginning of the array:
fruits.unshift('Pineapple');
console.log(fruits);

// Methods push and unshift can add multiple elements at once:

fruits.push('Peach', 'Coconut');
fruits.unshift('Carrot', 'Cucumber');
console.log(fruits);


// Multidimensional arrays
let matrix = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
];

console.log(matrix);
console.log(matrix[0][1]);


// toString 
let = arrString = [1, 2, 3];
console.log(arrString);
console.log(String(arrString) === '1,2,3')









