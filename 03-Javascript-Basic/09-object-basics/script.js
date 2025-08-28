// An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object();  "object constructor" syntax
// let user = {};   "object literal" syntax


// Literals and properties
let user = {   // an object
   name: 'JOhn', // by key "name" store value "John"
   age: 30  // by key "age" store value 30
};


// Property values are accessible using the dot notation:

// get property values of the object:
console.log(user.name);  // John
console.log(user.age);  // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;
console.log(user.isAdmin);
console.log(user);


// To remove a property, we can use the delete operator:
delete user.age;
console.log(user);

// We can also use multiword property names, but then they must be quoted:

user["likes birds"] =  true  // multiword property name must be quoted
console.log(user);

// For multiword properties, the dot access doesn’t work:
// There’s an alternative “square bracket notation” that works with any string:

console.log(user["likes birds"]);

delete user["likes birds"];

console.log(user);


// property value shorthand
// In real code, we often use existing variables as values for property names.

function makeUser(name, age) {
   return {
      name, // same as name: name
      age,  // same as age: age
   };
}

let funcUser = makeUser('Femi', 24);
console.log(funcUser.name);  // Femi



// propert existence test, "in" operator

console.log(user.noSuchProperty === undefined);   // true means "no such property"


// There’s also a special operator "in" for that.
// "key" in object

console.log('name'in user);  // true, user.name exists
console.log('age' in user)   // false, user.age doesn't exist

// Reinstall age
user.age = 30;

// The for in loop

for (let key in user) {
   // keys
    console.log(key);  // name, age, isAdmin
   //  values for the keys
   console.log(user[key]);   // John, 30 , true
}


// Ordered like an object

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  console.log(code); // 49, 41, 44, 1
  console.log(codes[code]);
}




// MDN Object Basics

const person = {
   // name: ['Bob', 'Smith'],
   name: {
     first: 'Bob',
     last: 'Smith', 
   },
   age: 32,
   bio() {
   //   console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`); 
     console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`); 
   },
   introduceSelf() {
      console.log(`Hi! I\'m ${this.name.first}.`);
   },
};

console.log(person.name);
// console.log(person.name[o]);
console.log(person.name.first);
console.log(person.name.last);
console.log(person.age);
person.bio();
person.introduceSelf();


// Setting object members
person.age = 45;
person['name']['last'] = 'Cratchit';

console.log(person.age);
console.log(person['name']['last']);


// create completely new members
person['eyes'] = 'hazel';
person.farewell = function () {
   console.log('Bye everybody!');
};
console.log(person);

console.log(person.eyes);
console.log(person['eyes']);
person.farewell();

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

console.log(person.height);



// Introducing constructor

function createPerson(name) {
   const obj = {};
   obj.name = name;
   obj.introduceSelf = function () {
     console.log(`Hi! !'m ${this.name}.`); 
   };

   return obj;
}

const salva = createPerson('Salva');
salva.introduceSelf();

const frankie = createPerson('Frankie');
frankie.introduceSelf();


// constructor function
function Person(name) {
   this.name = name;
   this.introduceSelf = function () {
     console.log(`Hi! !'m ${this.name}.`);
   };
}

// To call Person() as a constructor, we use new:

const femi = new Person('Femi');
console.log(femi);
femi.introduceSelf();

const deji = new Person('Deji');
deji.introduceSelf();




// Differences between objects and primitives

let data = 42;

// dataCopy will store a copy of what data contains, so a copy of 42
let dataCopy = data;

// which means that making changes to dataCopy won't affect data
dataCopy = 43;

console.log(dataCopy);
console.log(data);


// another example
// On the other hand, when you define an object variable, it will contain a reference to the object provided to it:

// obj contains a reference to the object we defined on the right side
const obj = { data: 50 };

// objCopy will contain a reference to the object referenced by obj
const objCopy = obj;

// making changes to objCopy will make changes to the object that it refers to
objCopy.data = 47;

console.log(obj);
console.log(objCopy);


// Let’s take the following functions for example:
function increaseCounterObject(objectCounter) {
   objectCounter.counter += 1;
}


function increaseCounterPrimitive(primitiveCounter) {
  primitiveCounter += 1;
}

const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);
increaseCounterPrimitive(primitive);

console.log(object);
console.log(primitive);



// Cloning and mergin, Object.assign

let newUser = {
   name: "John",
   age: 30
};


let clone = {};  // the new empty object

// let's copy all user properties into it
for (let key in newUser) {
   clone[key] = newUser[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

console.log(newUser.name);
console.log(clone);


// We can also use the method Object.assign.
let permission1 = { canView: true };
let permission2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into newUser
Object.assign(newUser, permission1, permission2);

// now newUser = { name: "John", canView: true, canEdit: true }
console.log(newUser.name);
console.log(newUser.canView);
console.log(newUser.canEdit);



// We can use OBject.assign to perform a simple object cloning
let userLuke = {
   name: 'Luke',
   age: 20
};


let newClone = Object.assign({}, userLuke);

newClone.lunch = 'Burger';
console.log(newClone);



let spreadLuke = {...userLuke};
spreadLuke.surname = 'Smith';
console.log(spreadLuke);


// structuredClone

// The call structuredClone(object) clones the object with all nested properties.
// Here’s how we can use it in our example:

let nestedUser = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};


let nestedClone = structuredClone(nestedUser);
console.log( user.sizes === clone.sizes ); // false, different objects

// nestedUser and nestedClone are totally unrelated now
nestedUser.sizes.width = 60;    // change a property from one place
console.log(nestedUser.sizes.width);
console.log(nestedClone.sizes.width); // 50, not related




















// Exercises

// Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(name => name.name);

console.log( names ); // John, Pete, Mary



// Map to objects
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let johnObj = { name: "John", surname: "Smith", id: 1 };
let peteObj = { name: "Pete", surname: "Hunt", id: 2 };
let maryObj = { name: "Mary", surname: "Key", id: 3 };

let usersArray = [ johnObj, peteObj, maryObj ];

let usersMapped = usersArray.map(obj => {
    return {
       fullName: `${obj.name} ${obj.surname}`,
       id: obj.id,
    };
});

console.log(usersMapped);
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);


// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(arr) {
   arr.sort((a, b) => a.age - b.age);
};

let arr = [ john, pete, mary ];


sortByAge(arr);

console.log(arr[0].name);


// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

function getAverageAge(arr) {
   return Math.round(arr.reduce((acc, user) => acc + user.age, 0) / arr.length);
}

console.log(getAverageAge(arr))




// Create keyed object from array
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.


let usersObj = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersObj);

function groupById(arr) {
   return arr.reduce((obj, value) => {
      obj[value.id] = value;
      return obj; 
   }, {});
}

console.log(usersById);



function oldestPerson(people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    
     const oldestYearDeath = oldest.yearOfDeath ?? currentYear;
     const oldestAge = oldestYearDeath - oldest.yearOfBirth;

     const personYearDeath = person.yearOfDeath ?? currentYear;
     const currentPersonAge = personYearDeath - person.yearOfBirth;

     return oldestAge > currentPersonAge ? oldest : person;

  });

};


 const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]


const oldestAge = oldestPerson(people);    

console.log(oldestAge);




















