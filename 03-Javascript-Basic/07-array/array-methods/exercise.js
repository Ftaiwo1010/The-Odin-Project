// Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str.split('-')
      .map((word, index) =>  index === 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
}

console.log(camelize('list-style-image'));
console.log(camelize("-webkit-transition"));
console.log(camelize("background-color"));





// filter range
function filterRange(arr, a, b) {
    return arr.filter(num => (num >= a && num <= b));
}

let arrayNum = [5, 3, 8, 1];
console.log(filterRange(arrayNum, 1, 4));



// filter range in place
function filterRangeInPlace(arr, a, b) {
   for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      
      // remove if outside of the interval
      if (val < a || val > b) {
         arr.splice(i, 1);
         i--;
      }
    
   }
}

filterRangeInPlace(arrayNum, 1, 4);
console.log(arrayNum);



// sort in decreasing order
let unSortArr = [5, 2, 1, -10, 8];
unSortArr.sort((a, b) => b - a);
console.log(unSortArr);



// copy and sort array
function copySorted(arr) {
   return arr.slice().sort(); 
}
let proArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(proArr);
console.log(sorted);
console.log(proArr);


// shuffle an array

function shuffle(arr) {
   return arr.sort(() => Math.random() - 0.5); 
}
let unShuffleArr = [1, 2, 3];
console.log(shuffle(unShuffleArr));



// Filter unique array members

function unique(arr) {
   let newArr = [];
   for (const str of arr) {
      if (!newArr.includes(str)) {
        newArr.push(str);
      }
   }
   return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O




// Array Method Practice Exercises

// Easy Level

// 1. Sum All Numbers
const numbersArr = [1, 2, 3, 4, 5];
// Goal: Use .reduce() to get the total sum: 15

function sumAllNumbers(arr) {
   return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumAllNumbers(numbersArr));


// 2. Get All Names from Objects
const people = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" }
];

function getNames(arr) {
   return arr.map(person => person.name);
}

console.log(getNames(people));

// Goal: Use .map() to return ["Alice", "Bob", "Charlie"]


// 3. Filter Adults
const peopleObj = [
  { name: "Tom", age: 16 },
  { name: "Jerry", age: 22 },
  { name: "Spike", age: 18 }
];

function filterAdults(arr) {
   return arr.filter(adult => adult.age >= 18);
}

console.log(filterAdults(peopleObj));

// Goal: Use .filter() to get only people age 18 and above


// Intermediate Level

// 4. Count Occurrences
const fruitsArray = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Goal: Use .reduce() to count how many of each fruit you have
// Expected result: { apple: 3, banana: 2, orange: 1 }

function countFruits(arr) {
   return arr.reduce((obj, item) => {
      if(!obj[item]) {
        obj[item] = 0; 
      }

      obj[item]++;

      return obj;
   }, {});
}

console.log(countFruits(fruitsArray));


// 5. Flatten a Nested Array
const nested = [[1, 2], [3, 4], [5]];
// Goal: Use .reduce() to flatten the array: [1, 2, 3, 4, 5]

function flattenArray(arr) {
   return arr.reduce((num, item) => {
       return num.concat(item);
   }, []);
}


console.log(flattenArray(nested));



// 6. Get Total Price

const cart = [
  { item: "book", price: 10 },
  { item: "pen", price: 2 },
  { item: "notebook", price: 5 }
];
// Goal: Use .reduce() to get total cost: 17

function getTotalPrice(arr) {
   return arr.reduce((acc, cur) => acc + cur.price, 0);
}

console.log(getTotalPrice(cart));



// Advanced Level

// 7. Group People by Age Group

const peoplesArr = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 35 },
  { name: "Daisy", age: 15 },
  { name: "Edward", age: 22 }
];
// Goal: Use .reduce() to group people by age:
// {
//   22: [{...}, {...}],
//   17: [{...}],
//   35: [{...}],
//   15: [{...}]
// }

function ageGroup(arr) {
   return arr.reduce((obj, person) => {
     let age = person.age;
     if (!obj[age]) {
       obj[age] = [];
     }

     obj[age].push(person);

     return obj;
   }, {});
}

console.log(ageGroup(peoplesArr));



// 8. Get the Longest Word

const words = ["short", "medium", "extralongword", "tiny"];
// Goal: Use .reduce() to return the longest word


function longestWord(arr) {
   return arr.reduce((longest, currentWord) => {
      if (currentWord.length > longest.length) {
         return currentWord;
      } else {
         return longest;
      }
   },'');
}

console.log(longestWord(words));




// Practice Set: Only .reduce()

// 1. Sum of squares

const nums = [1, 2, 3, 4];
// Expected: 1² + 2² + 3² + 4² = 30

function sumOfSquares(arr) {
   return arr.reduce((acc, cur) => {
      const square = cur * cur;

      return acc + square;
   }, 0);
}

console.log(sumOfSquares(nums));



// 2. Convert array of words to a sentence
const arrayOfWords = ["I", "love", "JavaScript"];
// Expected: "I love JavaScript"

const sentence = arrayOfWords.reduce((acc, currentWord) => {
  return acc === '' ? currentWord : acc + ' ' + currentWord 
}, '');

console.log(sentence);



// 3. Count how many times each letter appears

const letters = ['a', 'b', 'a', 'c', 'b', 'a'];
// Expected: { a: 3, b: 2, c: 1 }

const countLetters = letters.reduce((obj, item) => {
     if (!obj[item]) {
        obj[item] = 0;
     }
      obj[item]++;

      return obj;
}, {});

console.log(countLetters);


// count letters
const testLetters = ['x', 'y', 'x', 'x', 'z'];
// Expected output: { x: 3, y: 1, z: 1 }

const countTestLetters = testLetters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] ?? 0) + 1;
    return acc;
}, {});

console.log(countTestLetters);



// 4. Find the maximum number

const arrayOfNumbers = [5, 10, 3, 8];
// Expected: 10

const maxNumber = arrayOfNumbers.reduce((initialNumber, currentNumber) => { 
   return initialNumber > currentNumber ? initialNumber : currentNumber;
});

console.log(maxNumber);



// 5. Group names by first letter
const namesArray = ["Alice", "Bob", "Amanda", "Brian"];
/* Expected:
{
  A: ["Alice", "Amanda"],
  B: ["Bob", "Brian"]
}
*/

const groupNames = namesArray.reduce((acc, item) => {
     const firstLetter = item.slice(0, 1);
    
     if (!acc[firstLetter]) {
       acc[firstLetter] = [];
     } 

     acc[firstLetter].push(item);
     
     return acc;
}, {});

console.log(groupNames);



// Challenge: Group Numbers by Even and Odd
const numbersArray = [1, 2, 3, 4, 5, 6];

const groupEvenOdd = numbersArray.reduce((acc, num) => {
    if ( num % 2 === 0) {
       acc.even.push(num);
    } else {
       acc.odd.push(num)
    }
     
     return acc;
}, {
  even: [],
  odd: []
});

console.log(groupEvenOdd);



// Challenge: Tally Votes
// You are given an array of strings representing votes for different candidates:

const votes = ['Alice', 'Bob', 'Alice', 'Bob', 'Alice', 'Charlie'];

const countVotes = votes.reduce((acc, person) => {
    acc[person] = ( acc[person] ?? 0 ) + 1;
    return acc;
}, {});

console.log(countVotes);



//  Challenge: Count Words in a Sentence
const sentenceString = "hello world hello reduce world hello";
const splitToArray = sentenceString.split(' ');
const countsWord = splitToArray.reduce((acc, word) => {
   acc[word] = (acc[word] ?? 0) + 1;
   return acc; 
},{});
console.log(countsWord);































