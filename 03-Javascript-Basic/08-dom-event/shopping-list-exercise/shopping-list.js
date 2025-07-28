const button = document.querySelector('button');


function createElements() {
    const input = document.querySelector('input');
    const ul = document.querySelector('ul');

    let inputValue = input.value;
    input.value = '';
    

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button2 = document.createElement('button');

    span.textContent = inputValue;
    button2.textContent = 'Delete';

    button2.addEventListener('click', () => {
       ul.removeChild(li); 
    });

    li.appendChild(span);
    li.appendChild(button2);
    ul.appendChild(li);

    input.focus();
}
button.addEventListener('click', createElements);