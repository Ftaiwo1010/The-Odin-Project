// Declaring strings
const string = "The revolution will not be televised";
console.log(string);

// single quotes, double quotes, and backticks
const single = 'Single quotes';
const double = "Double quote";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// Template literals

// Embedding javascript
const name = 'Chris';
const greeting = `Hello ${name}`;
console.log(greeting);

// You can use the same technique to join together two variables:

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);


// Concatenation using "+"
const greet = 'Hello';
console.log(greet + ', ' + name);  // "Hello, Chris"

console.log(`${greet}, ${name}`);

// Including expressions in string
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}, I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);


// Multiline strings
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);


// NUmbers vs strings
const text = 'Front ';
const number = 242;
console.log(text + number);


// The Number() function converts anything passed to it into a number if it can. Try the following:
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum, myNum);


// Conversely, the String() function converts its argument to a string. Try this:
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2, myString2);