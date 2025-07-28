// method 1 in the html file


// method 2
const btn2  = document.querySelector('#btn');
// btn2.onclick = () => console.log('Hello World for method 2');


// method 3
const btn3 = document.querySelector('#btn');
// btn3.addEventListener('click', () => {
//     console.log('Hello World for method 3');
// });



// the JavaScript file
// METHODS 2 & 3
// function alertFunction() {
//   console.log("YAY! YOU DID IT!");
// }
// const btn = document.querySelector("#btn");

//  METHOD 2
// btn.onclick = alertFunction;

//  METHOD 3
// btn.addEventListener("click", alertFunction);

btn2.addEventListener('click', function (e) {
   console.log(e.target);
});

btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});



// Attaching listeners to group of nodes

// buttons is a node list. It looks and acts much like an array.


const buttons = document.querySelectorAll('#container button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
       console.log(button.id); 
    });
    
});
