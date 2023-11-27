// CREO UN ARRAY CON LA LISTA DELLA SPESA 
let grocery = ['mela', 'finocchio', 'pan di stelle', 'nutella', 'pane', 'uova', 'formaggio', 'latte'];

let grocery_list = document.getElementById('list');

// CREO UN CICLO WHILE 
let i = 0;
while(i < grocery.length){

    let li = document.createElement('li');
    li.innerText = grocery[i];

    grocery_list.appendChild(li)   
    i++
} 