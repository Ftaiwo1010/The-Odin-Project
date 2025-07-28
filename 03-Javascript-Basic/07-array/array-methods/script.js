// Array methods

// splice
let spliceArr = ['I', 'study', 'Javascript'];
spliceArr.splice(1, 1);   // from index 1 remove 1 element
console.log(spliceArr);   // ["I", "JavaScript"]

// In the next example, we remove 3 elements and replace them with the other two:
let slicedArr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
slicedArr.splice(0, 3, "let's", "dance");
console.log(slicedArr);  // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:
// remove 2 first elements

let removed = slicedArr.splice(0, 2);
console.log(removed);  // "Let's", "dance" <-- array of removed elements


// The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0:

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, 'complex', 'language');
console.log(arr);  // "I", "study", "complex", "language", "JavaScript"


// Negative indexes allowed
let arrNum = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arrNum.splice(-1, 0, 3, 4);
console.log(arrNum);  // 1,2,3,4,5



// slice
let sliceArr = ['t', 'e', 's', 't'];
console.log(sliceArr.slice(1, 3));   // e,s (copy from 1 to 3)
console.log(sliceArr.slice(-2));  // s,t (copy from -2 till the end)
console.log(sliceArr.slice())  // creates a copy of 



// concat
let concatArr = [1, 2];
// create an array from: arr and [3,4]
console.log(concatArr.concat([3, 4]));  // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(concatArr.concat([3,4], [5, 6]));  // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( concatArr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arrayLike = {
  0: "something",
  length: 1
};
console.log(concatArr.concat(arrayLike));   // 1,2,[object Object]



// Iterate: forEach
let stateArr = ["Bilbo", "Gandalf", "Nazgul"];
stateArr.forEach(item => console.log(item));

// And this code is more elaborate about their positions in the target array:
stateArr.forEach((item, index, array) => {
   console.log(`${item} is at index ${index} in ${array}`); 
});



// searching in array
// Now let’s cover methods that search in an array.

// indexOf/lastIndexOf and includes

let searchArr = [1, 0, false];

console.log(searchArr.indexOf(0));  // 1
console.log(searchArr.indexOf(false));  // 2
console.log(searchArr.indexOf(null)); // -1

console.log(searchArr.includes(1));  // true

let searchFruits = ['Apple', 'Orange', 'Apple'];

console.log(searchFruits.indexOf('Apple'));  // 0 (first Apple)
console.log(searchFruits.lastIndexOf('Apple'));  // 2 (last Apple)



// find and findIndex/findLast/findLastIndex
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

let user = users.find(item => item.id == 1);
console.log(user.name);  // John


// Find the index of the first John
let findUserIndex = users.findIndex(user => user.name == 'John');
console.log(findUserIndex);


// Array findLast() Method
let temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);

// Find the index of the last John
let findUserLastIndex = users.findLastIndex(user => user.name == 'John');
console.log(findUserLastIndex);  // 3


// filter
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length);  // 2

let filterJohns = users.filter(user => user.name.startsWith('J'));
console.log(filterJohns);



// Transform an array

// map
let lengths = ["Bilbo", "Gandalf", "Nazgul"];
let mapLengths = lengths.map(item => item.length);
console.log(mapLengths);  // 5,7,6


// example 2
let mapCase = lengths.map(item => item.toUpperCase());
console.log(mapCase);


// example 3
let num = [1, 2, 3, 4, 5];
let multiplyNum = num.map(item => item * 2);
console.log(multiplyNum);


// flatMap
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 2]);
console.log(newArr);


// every
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(value => value > 18);
console.log(allOver18);


const everyNum = [5, 6, 7, 8, 9];
let allOver3 = everyNum.every(num => num > 3);
console.log(allOver3);


// some
let someOver18 = numbers.some(value => value > 18);
console.log(someOver18);


// Array.from()
let text = 'ABCDEFGH';
console.log(Array.from(text));


const myNumbers = [1, 2, 3, 4];
const myArray = Array.from(myNumbers, (x) => x * 2);
console.log(myArray);


let fillArray = Array.from({length: 5});
console.log(fillArray);



// JavaScript Array with() Method
const months = ['Januar', 'Februar', 'Mar', 'April'];
const myMonths = months.with(2, 'March');
console.log(myMonths);


// JavaScript Array Spread (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


// JavaScript Array Rest (...)
const myArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, ...rest] = myArr1;
console.log(a);
console.log(rest);


// example 2
function sumArr(...rest) {
   let sum = 0;
   for (const num of rest) {
       sum += num;
   }

   return sum;
}

console.log(sumArr(1, 2, 3, 4, 5));


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];
const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);


// The spread operator (...) can be used to copy an array:
const copyArr = [...arr1];
console.log(copyArr);


// The spread operator (...) can be used to pass arguments to a function:
const bigNumbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...bigNumbers);
let maxValue = Math.max(...bigNumbers);
console.log('Min value:', minValue);
console.log('Max value:', maxValue);



// sort(fn)
let sortNum = [1, 2, 7, 3, 8, 23, 10, 15];
// the method reorders the content of arr
sortNum.sort();
console.log(sortNum);  // 1, 15, 2


// For instance, to sort as numbers:

function compareNumeric(a, b) {
   if (a > b) return 1;
   if (a == b) return 0;
   if(a < b) return -1; 
}

sortNum.sort(compareNumeric);
console.log(sortNum);  // 1, 2, 15


// A comparison function may return any number
sortNum.sort(function(a, b) {return a - b; });
console.log(sortNum);  // 1, 2, 15


// Arrow functions for the best
sortNum.sort((a, b) => a - b);
console.log(sortNum);


// Use localeCompare for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1));   // Andorra, Vietnam, Österreich (wrong)
console.log(countries.sort((a, b) => a.localeCompare(b)));  // Andorra,Österreich,Vietnam (correct!)


// reverse

let reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse();
console.log(reverseArr);


// split and join

let names = 'Bilbo, Gandalf, Nazgul';
let splitArr = names.split(', ');
console.log(splitArr);

for (const name of splitArr) {
    console.log(`A message to ${name}.`);   // A message to Bilbo  (and other names)
}


// Split into letters
let str = "test";
console.log( str.split('') ); // t,e,s,t


let joinArr = countries.join(';');   // glue the array into a string using ;
console.log(joinArr);  // Bilbo;Gandalf;Nazgul



// reduce/reduceRight

let numArr =  [1, 2, 3, 4, 5];
let result = numArr.reduce((sum, current) => sum + current, 0);
console.log(result);  // 15


// We also can omit the initial value:
// removed initial value from reduce (no 0)
let result2 = numArr.reduce((sum, current) => sum + current);
console.log(result2);


// reduceRight
let sumNum = numArr.reduceRight((sum, current) => sum + current, 0);
console.log(sumNum);


// Array,isArray
// returns true if the value is an array, and false otherwise.

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true




// Some examples of array magic

// let visit the map method again
const arrOfNUm = [1, 2, 3, 4, 5, 6];
const mappedArr = arrOfNUm.map((num) => num + 1);
console.log(mappedArr);


// let visit the filter method again
const filteredArr = arrOfNUm.filter((num) => num % 2 !== 0);
console.log(filteredArr);


// let visit the reduce method again
const productOfAllNums = arrOfNUm.reduce((total, currentItem) => total * currentItem, 1);
console.log(productOfAllNums);
console.log(arrOfNUm); // Outputs [1, 2, 3, 4, 5]


// little exercise
function sumOfTripledEvens(arr) {
  return arr.filter((num) => num % 2 === 0)
   .map((even) => even * 3)
   .reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(sumOfTripledEvens(arrOfNUm));





















