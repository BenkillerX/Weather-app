//always use const unless you know you want to reasign the unless you want to reasign the value
//to check tje type of a variable we use (typeof)
//template Litetals
const age = 30;
const name = 'Ben';
console.log(`my name is ${name} is and i am ${age} years old`);
//String methods to Uppercase, to lowercse, .lenght
const s = 'technology, computers, it, code';
// this a string to an array, invividual string
console.log(s.split(', '));

//Arrays are variables that hold multiple of values
//Array Methods
const fruits = ['apples' ,'oranges', 'pears']
//.push(the element to add) adds an element to the end of the array
fruits.push('Banana');
//to add to the biginning array.unshift(the item)
fruits.unshift('PawPaw');
//arrat,pop to remove the last element
fruits.pop();
fruits.indexOf('oranges')
console.log(fruits);

const person = {
    firsNname:'john',
    lastName:'doe',
    age:30,
    hobbies:['music', 'movies','sports'],
    adress:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    } 
}
console.log(person.adress.city);

const todos = [
    {
        id:1,
        text: 'Take Out trash',
        isCompleated:true,
    },
    {
        id:2,
        text: 'Meeting with Boss',
        isCompleated:true,
    },
    {
        id:3,
        text: 'Dentist appiontment',
        isCompleated:false,
    },
    {
        id:4,
        text: 'learning to code',
        isCompleated:true,
    },
    {
        id:5,
        text: 'understanding javascript',
        isCompleated:true,
    },
]

//json to send an array to a backend we use "" no ''

const tosoJSON = JSON.stringify(todos)
console.log(tosoJSON);
        //initaition  contition       increement

        //loops are to continue a cretain line of code as far as a certain condition is true
for (let i = 0; i < todos.length; i++) {
    const element = todos[i].text
    console.log(element);

}
// for of loop // a more cleaner way to wright the fpr loop
for(let todo of todos){
    console.log(todo.text);
}


console.log("psace");

// High order array methods
//forEach this would loop  through it normallly
todos.forEach((todo)=>{
    console.log(todo.text);
    
})
console.log("space");

//map // returns an array of the new loop
const todoText = todos.map((todo)=>{
    return todo.text;
    
})
console.log(todoText);
//.filter method
const todoTextTwo = todos.filter((todo)=>{
    return todo.isCompleated === true;
    
})
console.log(todoTextTwo);
// conditionals
let x = 4

const color = x >10 ? 'red' : 'blue'


console.log(color);

function addNums(num1, num2) {
   return(num1 + num2);
    
}
console.log(addNums(4, 4));
const sumNums = (sum1 , sum2) => sum1 + sum2
console.log(sumNums(5,6));

//OOP Constructor function
 function Person(firstname, Lastname,Dob) {
    this.firsNname = firstname;
    this.Lastname = Lastname;
    this,Dob = new Date(Dob)
 }
// Imstantiate object
const person1 = new Person('John','Deo', '4-3-1980')
console.log(person1);
//DOM Seclection

//Single element
// document.getElementById();
// document.getElementsByClassName();
document.querySelector('.container')
console.log(document.querySelector('.container'));

//Multiple element
console.log(document.querySelectorAll('item'));
