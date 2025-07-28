// Variables

// let keyword

let name = "john";
let surname = "Doe";

console.log(name);
console.log(surname);

// Can re-assign variables

let age = 11;
console.log(age);  // outputs 11 to the console

age = 54;
console.log(age);


// const
// const pi = 3.14;
// pi = 10;
// console.log(pi);

// Number
let num = (3 + 2) - 76 * (1 + 1);
console.log(num);

let f = 3.14;    // A number with decimals
let g = 3;       // A number without decimals


// If you add two numbers, the result will be a number:
let x = 10;
let y = 20;
let z = x + y;
console.log(z);


// If you add two strings, the result will be a string concatenation:
let h = "10";
let i = "20";
let j = h + i;
console.log(j);



// NaN - Not a Number
let t = 100 / "Apple";
console.log(t);


// However, if the string is numeric, the result will be a number:

let o = 100 / "10";
console.log(o);


// NaN is a number: typeof NaN returns number:
console.log(typeof NaN);


// JavaScript Numbers as Objects

let k = new Number(500);
let l = new Number(500);

// Comparing two JavaScript objects always returns false.


// Useful number methods

// toFixed()
const lotsOfDecimal = 1.766584958;
const twoDecimalPLaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPLaces);

let myNumber = "74";
console.log(myNumber += 3);
console.log(typeof myNumber);


// To fix the calculation, you can do this:
let myNumberSolved = "74";
myNumberSolved = Number(myNumberSolved) + 3;
console.log(myNumberSolved);


// Increment and Decrement
let num1 = 4;
num1++;
console.log(num1);

let num2 = 6;
num2--;
console.log(num2);


// "unary", "binary", "operand"
let unary = 1;
unary = -unary;
console.log(unary);

let binaryLeft = 1;
let binaryRight = 3;
console.log(binaryRight - binaryLeft);

// Math
// Remainder %
console.log(5 % 2);  // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 divided by 4

// Exponentiation
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16
console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// String concatenation with binary +
let s = "my" + "string";
console.log(s);

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers


// Numeric conversion, unary +
// No effect on numbers
let u = 1;
console.log( +u ); // 1

let n = -2;
console.log( +n ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
console.log(+"10") // 10
console.log(typeof +"10");

// If we want to treat them as numbers, we need to convert and then sum them:
let apple = "2";
let orange = "3";

// both values converted to numbers before the binary plus
console.log(+apple + +orange); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

// Modify-in-place
let e = 2;
e += 5; // now n = 7 (same as n = n + 5)
e *= 2 // now n = 14 (same as n = n * 2)
console.log(e); // 14




// Assignment

// number
console.log(23 + 97);
console.log(10 + 30 + 50 + 10);
console.log((4 + 6 + 9) / 77);

// variable
let a  = 10;
console.log(a);

a = 20;
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

let one = +prompt("First number?", 1);
let two = +prompt("Second number?", 2);

console.log(one + two); // 3