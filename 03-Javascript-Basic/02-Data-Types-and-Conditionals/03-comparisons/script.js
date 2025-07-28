// comparisons

console.log(2 > 1);  // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)


// A comparison result can be assigned to a variable, just like any value:
let result = 5 > 4; // assign the result of the comparison
console.log(result);


// string comparison
console.log('Z' > 'A');  // true
console.log('Glow' > 'Glee');  // true
console.log('Bee' > 'Be');  // true


// comparison of different types
console.log('2' > 1);  // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1


// For boolean values, true becomes 1 and false becomes 0.
console.log(true == 1); // true
console.log(false == 0); // true


// strict equality
console.log( 0 === false ); // false, because the types are different


// comparison with null and undefined
console.log(null === undefined);  // false

// For a non-strict check ==
console.log(null == undefined);  // true



// strange result: null vs 0
console.log(null > 0);  // (1) false
console.log(null == 0);  // (2) false
console.log(null >= 0);  // (3) true


// The value undefined shouldn’t be compared to other values:

console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)



