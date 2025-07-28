// Looping through a collection
// The for..of loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
   console.log(cat); 
}


// map() and filter() loop
const upperCat = cats.map((cat) => cat.toUpperCase());
console.log(upperCat);

const filtered = cats.filter((cat) => cat.startsWith('L'));
console.log(filtered);


// The standard for loop
for (let i = 1; i < 10; i++) {
   console.log(`${i} x ${i} = ${i * i}`); 
}


// looping through collects with a for loop
for (let i  = 0; i < cats.length; i++) {
    console.log(cats[i]);
}


// example
const petCats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < petCats.length; i++) {
    if (i === petCats.length - 1) {
        // We are at the end of the array
        myFavoriteCats += `and ${petCats[i]}.`;
    } else {
        myFavoriteCats += `${petCats[i]}, `;
    }
}


console.log(myFavoriteCats);


// Exiting loops with break
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];


let searchName = prompt('Enter a name', 'Mary');
searchName = searchName.toLowerCase(); 


for (const contact of contacts) {
   const splitContact = contact.split(':');
   if (splitContact[0].toLowerCase() === searchName) {
      console.log(`${splitContact[0]}'s number is ${splitContact[1]}`);
      break;
   }
}

if (searchName === '') {
      console.log('Contact not found.')
}


// Skipping iterations with continue
let num = +prompt('Enter a number', 10);

for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
       continue; 
    }
    console.log(i);
}



// while and do...while loop

// while loop

let favoriteCats = "My cats are called ";

let i = 0;

while (i < petCats.length) {
    if (i === petCats.length - 1) {
        favoriteCats += `and ${petCats[i]}.`;
    } else {
        favoriteCats += `${petCats[i]}, `;
    }

    i++;
}

console.log(favoriteCats);


// do...while loop

let myCats = "My cats are called ";

let c = 0;

do {
  if (c === petCats.length - 1) {
    myCats += `and ${petCats[c]}.`;
  } else {
    myCats += `${petCats[c]}, `;
  }

  c++;
    
} while (c < petCats.length);

console.log(myCats);


// Breaking the loop

let sum = 0;

while (true) {
   let value = +prompt('Enter a number', '');

   if (!value) break;

   sum += value;
}
console.log('Sum: ' + sum);


// Continue to the next iteration
for (let i = 0; i < 10; i++) {
   // if true, skip the remaining part of the body
   if (i % 2 === 0) continue;  // odd number
   console.log(i);
}


// Labels for break/continue
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

console.log('Done!');



// Launch countdown

let b = 10;

while (b >= 0) {
   if (b === 10) {
     console.log('Countdown 10');
   } else if (b === 0) {
     console.log('Blast off!'); 
   } else {
     console.log(b); 
   }

   b--;
}


// Filling in a guest list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let refused = 'Refused: ';
let admitted = 'Admitted: ';

for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
       refused += `${people[i]},`;
    } else {
       admitted += `${people[i]},`;
    }
}


console.log(refused.slice(0, refused.length - 1) + '.');
console.log(admitted.slice(0, admitted.length - 1) + '.');











