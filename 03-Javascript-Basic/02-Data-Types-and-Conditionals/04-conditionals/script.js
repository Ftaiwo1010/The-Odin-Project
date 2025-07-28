// The if Statement
let hour = 9;
let greeting;
if (hour < 10) {
   greeting = "Good Morning"; 
   console.log(greeting);
   
} else if (hour < 20) {
   greeting = "Good Day";
   console.log(greeting);
   
} else {  // The else Statement
   greeting = "Good Evening";
   console.log(greeting);
}


// another example
let shoppingDone = false;
let childAllowance;

if(shoppingDone === true) {
   childAllowance = 10;
   console.log("Allowance Increased"); 
} else {
   childAllowance = 5;
   console.log("Allowance decreased") ;
}


// Example 3
let cheese = "Cheddar";

if (cheese) {
    console.log("Yay! Cheese available for making cheese on toast.");
} else {
    console.log("No cheese on toast for you today.");
}


// Nesting if else
let choice = "sunny";
let temperature = 76;

// if (cheese === "sunny") {
//     if (temperature < 86) {
//        console.log(`It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`);
//     } else if (temperature >= 86) {
//         console.log(`It is ${temperature} degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`);
//     }
// }


// Logical operators: AND, OR and NOT

if (choice === "sunny" && temperature < 86) {
    console.log(`It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`);
} else if (choice === "sunny" && temperature >= 86) {
   console.log(`It is ${temperature} degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`);
}


// Example
let iceCreamVanOutside = false;
let houseStatus = "not on fire";

if (iceCreamVanOutside || houseStatus === "on fire") {
    console.log("You should leave the house quickly.");
} else {
    console.log("Probably should just stay in then.");
}


//
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
    console.log("You should leave the house quickly.");
} else {
    console.log("Probably should just stay in then.");
}


// 
let year = +prompt("In which year was the ECMAScript-2015 specification published?", "");

if (year < 2015) {
   console.log("Too early"); 
} else if (year > 2015) {
    console.log("Too late");
} else {
    console.log("Exactly");
}



// Ternary operator

let isBirthday = true;
const wishing = isBirthday
? console.log("Happy birthday Mrs. Smith - we hope you have a great day!")
: console.log("Good morning Mrs. Smith");