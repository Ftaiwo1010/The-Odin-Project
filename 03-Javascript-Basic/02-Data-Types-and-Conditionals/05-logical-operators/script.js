// Logical operators

// || (OR)
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);


// For instance, the number 1 is treated as true, the number 0 as false:

if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}


let hour = 9;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("The office is closed");
}


console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)


let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// && (AND)

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false


let myHour = 12;
let minute = 30;

if (myHour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
} else {
   console.log("Time not correct");
}


if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}


// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0


// We can also pass several values in a row. See how the first falsy one is returned:
console.log( 1 && 2 && null && 3 ); // null


// When all values are truthy, the last value is returned:
console.log( 1 && 2 && 3 ); // 3, the last one


// ! (NOT)

console.log( !true ); // false
console.log( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

console.log( !!"non-empty string" ); // true
console.log( !!null ); // false


// There’s a little more verbose way to do the same thing – a built-in Boolean function:
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false


// Switch
let a  = 2 + 2;

switch (a) {
   case 3:
     console.log("Too small"); 
     break;
   case 4:
     console.log("Exactly");
     break;
   case 5:
     console.log("Too big");
     break;
   default:
     console.log("I don't know such values");      
}



// Grouping of "case"
let b = 3;

switch (b) {
   case 4:
     console.log("right!");
     break;
     
   case 3:  // grouped two cases
   case 5:
     console.log("wrong!");
     console.log("Why don't you take a math class?");
     break;

   default:
     console.log("The result is strange. Really.");
}


// Type matters
let arg = prompt("ENter a value");
switch (arg) {
    case '0':
    case '1':
        console.log('One or zero');
        break;
    case '2':
        console.log('Two');
        break;
    case 3:
        console.log('Never executes!');  
        break; 
    default:
        console.log('An unknown value');
}