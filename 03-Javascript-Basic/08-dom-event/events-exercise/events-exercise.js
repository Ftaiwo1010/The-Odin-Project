// Event exercise

const button = document.querySelector('.btn');
const input = document.querySelector('#input-text'); 


// click and dblclick function
function showName() {
   const myName = document.querySelector('.name'); 

   const changeName = prompt('Enter your name', 'John');
   let firstLetter = changeName.slice(0, 1).toUpperCase();
   let subLetter = changeName.slice(1).toLowerCase();
   let fullName = firstLetter + subLetter;

   myName.textContent = fullName;
}

// click
// button.addEventListener('click', showName);


// dblclick
button.addEventListener('dblclick', showName);




// keydown and keyup function
function showKeys(e) {
   const keyDemo  = document.querySelector('.key-demo');
   keyDemo.textContent = `You pressed ${e.key}`;
}

input.addEventListener('keydown', showKeys);


// input.addEventListener('keypress', (e) => {
//    console.log(e); 
// });
