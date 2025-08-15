const name = 'Ben';
const age = 17;
const favFood = 'rice';

let a = 3;
let b = 6 ;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

let test2 = 5
let test3 = '5'
if (test2 == test3) {
    console.log(`${test2} and ${test3} are same datatypes and values`);
}
else{
    console.log(`either the ${test2} or ${test3} is not the same`);   
}


// Done with varables and datatypes

//control flow and loops
for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log("fuzz");
    }
    else if (i % 3 === 0){
        console.log("Buzz");
        
    }
    else{
        console.log(i);
        
    }
}





let count = 0;
const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increse');
const decreaseBtn = document.getElementById('Decrease');
const resetBtn = document.getElementById('Reset');


increaseBtn.addEventListener('click', ()=>{
    count++;
    console.log('Button Clicked');
    
    updateDisplay()
})
decreaseBtn.addEventListener('click', ()=>{
    count--;
    console.log('Button Clicked');
    
    updateDisplay()
})
resetBtn.addEventListener('click', ()=>{
    count = 0;
    console.log('Button Clicked');
    
    updateDisplay()
})

function updateDisplay() {
    countDisplay.textContent = count;
}







//Dom Done and functions compleated
const names = ['Ben', 'Korex', 'Famos', 'John', 'Doe', 'Gbemiro', 'Magdalene']
const longWords =  names.filter(names => names.length <=4)
console.log(longWords);
//  Done with the Array and array methods

let car = {
    brand: 'BMW',
    model: 'g82m4',
    year: 2024,
}
const carDisplay = document.getElementById('car-display');
const carbtn = document.getElementById('car');
const mainDisplay = 
carbtn.addEventListener('click', ()=>{
    console.log('clicked');
    
    carDisplay.textContent = ` car Brand ${car.brand} model${car.model} year${car.year}`;
}) 

const textArea = document.getElementById('text-area');
const addItem = document.getElementById('add-item')
const todoList = document.getElementById('todo-items');

addItem.addEventListener('click', () => {
    let newText = textArea.value.trim();
    if (!newText) return;

    // Create new list item
    let newList = document.createElement('li');
    newList.textContent = newText;

    // Create delete button
    let delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.style.marginLeft = '10px';
    delBtn.style.cursor = 'pointer';

    // Add click event to delete the item
    delBtn.addEventListener('click', () => {
        todoList.removeChild(newList);
    });

    // Attach button to list item
    newList.appendChild(delBtn);

    // Add list item to the list
    todoList.appendChild(newList);

    // Clear input
    textArea.value = "";
});
const userName = "Ben";
const welcomeMsg = document.getElementById('Welcome-msg');

welcomeMsg.textContent += userName === ""? 'Guest' : userName;