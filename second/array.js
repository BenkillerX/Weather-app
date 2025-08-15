// const groceries = ['banana', 'apple','pear', 'orange'];

// // ArrayM ethiods-- alice,push,indexof,length
// //The PuSH()adds an item to the end of an array
// groceries.push('cookie')

// groceries.push('Test')
// // console.log(groceries);
// //the slice() methid returns the portin of the array you want in a new array it wont incluse the last index
// // const newArray = groceries.slice(1,4)
// // console.log(newArray);
// // its used to get the index of a patticular leement
// // const newArray = groceries.indexOf('apple');
// // console.log(newArray);
// //.Length methods-- is an array property that returns the number if elements in a given array
// // const newArray = groceries.length;
// // console.log(newArray);

// ///OBJECTS is a type of variable that hold key-values pairs,

// const items = [
//     {name: 'Bike', price:100},
//     {name: 'TV', price:200},
//     {name: 'Album', price:10},
//     {name: 'Book', price:5},
//     {name: 'Phone', price:500},
//     {name: 'Computer', price:1000},
//     {name: 'Keyboard', price:25},
// ]
// //.filter()(<=method)  it returns value according to a condition i.e it would return an item wether it meets a certian condition

// //when using arrays always return them to know what you are doing
// const filteredItems = items.filter((item)=>{
//     return item.price < 100;
// })
// console.log(items);

// console.log(filteredItems);
// //.map()(<= method)
// // we can use it over the for loop those are part of the benefits
// const mappedItems = items.map((item)=>{
//     return item.price
// })
// console.log(mappedItems);
// //.find()(same as top)
// const findItem = items.find((item)=>{
//     return item.name === 'Book'
// })
// console.log(findItem);
// //forEach () used to loop over arrays it runs the code you write for each item in an array 
// items.forEach((item)=>{
//     console.log(item.price);
    
// })
// // some()returns true or false depending on the code you put in its brakets
// const hasInexpensiveItems = items.some((item)=>{
//    return item.price < 100
// }) 
// console.log(hasInexpensiveItems);
// // every()
// //reduce() ots to find the total price of everything inn a list the currentTotal is the returning item so far and item is the current item
// const total = items.reduce((currentTotal,item)=>{
//     return item.price + currentTotal
// }, 0)
// console.log(total);

// //the includes method is used to check if a particular array  has a value or not


// // understanding arrays for the last time
// const favFood = ['Bens', 'Garri', 'Rice', 'Plantain'];
// console.log(favFood[0], favFood[3]);
// favFood[1]= 'bread';
// console.log(favFood);

// console.log(favFood.length);
// // the real world challenge you gave me
// let products = ["Laptop", "Headphones", "Keyboard", "Mouse", "Monitor"];
// console.log(products[0]);
// console.log(products[products.length-1]);
// products[3]= 'wireless Mouse';
// console.log(products);

// //To add an item array .push()-- pushes it to the end
// //to remove an item array.pop()-- removesthe last item
// //to addd to start Array.unshift()
// //to remove first item array.shift()
// const friends = ['ben','mike', 'ara'];
// friends.push('Gbemiro');
// friends.pop()
// friends.unshift('Famous');
// friends.shift();
// console.log(friends);

// //real world challenge
// let cart = ["Shoes", "T-shirt", "Socks"];
// cart.push('Hat');
// cart.pop()
// cart.unshift('water bottle');
// console.log(cart);

// const color = ['red', 'green','blue','purple','white'];
// for (let index = 0; index < color.length; index++) {
//     const element = color[index];
//     console.log(element);
    
// }

// console.log('Next method');
// for (const element of color) {
//     console.log(element);
// }
// console.log('Next-methods');

// color.forEach(element => {
//     console.log(element);
    
// });

// //Real world challenge
// let students = ["Ben", "Mike", "Ara", "Famous"];
// for (const element of students) {
//     console.log(element);
// }
// //.map()transform every item in an array
// //it loops through every item in an array and  creates a result with the transformed result, Basically the map funtion loops through an array and applies a function to it
// // .filter loops through each item and keeps only the ones that match a condition
// // some checks if one item matches returns true if any item matches otherwise false

// // const hasEven = number.some(num=>num % 2 === 0)
// //     console.log(hasEven);
//     //every has the same logic has some but it all has to align

// const number = [8,20,3,40,55]
// const trippledNumbers = number.map(function (num) {
//     return num * 3
// })
// console.log(trippledNumbers);
// const filtredNumbers = number.filter(function (num) {
// return num > 10
// })

// console.log(filtredNumbers);
// const trippledNumberSome = number.some(function (num) {
//     return num === 50
// })
// console.log(trippledNumberSome);
// const trippledNumberEvery = number.every(function (num) {
//     return num >= 0
// })
// console.log(trippledNumberEvery);
// const trippledNumberFind = number.find(function (num) {
//     return num % 5 === 0;
// })
// console.log(trippledNumberFind);
// //real world 
// const student = [
//   { name: "John", score: 85 },
//   { name: "Jane", score: 42 },
//   { name: "David", score: 65 },
//   { name: "Emily", score: 90 }
// ];
// const filteredStudents = student.filter(function (student) {
//     return student.score >= 50
// })
// console.log(filteredStudents);

// const mappedStudents = student.map(function (num) {
//     return num.name
// })
// console.log('im here');
// for (const element of mappedStudents) {
//     console.log(element);
    
// }
// console.log(mappedStudents);
// const someStudentss = student.some(function (num) {
//     return num.score >= 95
// })
// console.log(someStudentss);
// const everyStudentss = student.every(function (num) {
//     return num.score === 40
// })
// console.log(everyStudentss);
// const findStudentss = student.find(function (num) {
//     return num.score === 65
// })
// console.log(findStudentss);
// // Array.conncat creats a new array bt joining two or more arrays
// // e.g
// const fruit = ['apple', 'banana']
// const veggies = ['Carrot', 'Spinach']

// const food = fruit.concat(veggies)
// console.log(food);
// // spread syntax (...)
// const arr1 = [1,2]
// const arr2 = [3,4]
// const combined = [...arr1, ...arr2]
// console.log(combined);
// //.join() joins array elemente into one string
// //you can choose the seperator
// const words = ['I', 'LOVE', 'JAVASCRIPT']
// const sentence = words.join(' ')
// console.log(sentence);
// //split()
// //opposite of join e.g
// const text = 'apple,banana,grape';
// const fruitList = text.split(',')
// console.log(fruitList);

// const arrayOne = ['randomOne','randomeTwo','randommeThree']
// const arrayTwo = ['randomFour','randomeFive','randommeSix'
// ]
// const concatStyle = arrayOne.concat(arrayTwo)
// console.log(concatStyle);
// const spreadStyle = [...arrayOne, ...arrayTwo]
// console.log(spreadStyle);
// const fiveWords = ['i','am','understanding','javascript','well']
// const joinedWords = fiveWords.join(' ')
// console.log(joinedWords);
// const commaWords = 'just,testinng,if,i,understand,this,aspect';
// const seperatedWords = commaWords.split(',')
// console.log(seperatedWords);


// const groceries1 = ["Milk", "Eggs", "Bread"];
// const groceries2 = ["Butter", "Cheese"];
// const csvList = "Tomatoes,Potatoes,Onions";
// //i would use 1 method because i already understant the logic here
// const combinedGressries = [...groceries1, ...groceries2]
// // const combinedGressries = groceries1.concat(groceries2)
// console.log(combinedGressries);
// const joinedGrocreies = groceries1.join(groceries2);
// console.log(joinedGrocreies);
// const csvListSplited = csvList.split(',')
// console.log(csvListSplited);
// // const splitedGressries = combinedGressries.split(',')
// // console.log(splitedGressries);
// //.slice() copies the part of an array into a new array without changing the origina/
// const fruits = ["apple", "banana", "mango", "orange", "grape"];
// const someFruits = fruits.slice(1, 4); // ["banana", "mango", "orange"]
// console.log(fruits); // original stays: ["apple", "banana", "mango", "orange", "grape"]
// // Copy the last 3 elements from this array
// const numbers = [10, 20, 30, 40, 50, 60];

// const psreadOperator = [...numbers]
// psreadOperator.push(70,80,90)
// console.log('here');

// const someNumbers = numbers.slice(5,9)
// console.log(someNumbers);


// let students = [
//   { name: "John", score: 85, subjects: ["Math", "English", "Biology"] },
//   { name: "Jane", score: 42, subjects: ["Math", "English", "Chemistry"] },
//   { name: "David", score: 65, subjects: ["Math", "Physics", "Chemistry"] },
//   { name: "Emily", score: 90, subjects: ["English", "Biology", "Chemistry"] },
//   { name: "Michael", score: 55, subjects: ["Math", "English", "Physics"] }
// ];
// const filteredStudents = students.filter(function (pass) {
//     return pass.score > 50;
// })
// console.log(filteredStudents);
// const mappedStudents = students.map(function(map) {
//     return map.name +':'+ map.score
// }) 
// console.log(mappedStudents);
// const sortedScores = students.sort(function ( a,b) {
//     return b.score - a.score 
// })
// console.log(sortedScores);
// // reduce is used to get the heigest value
// const topStudent = students.reduce((max,player) =>
//     player.score > max.score ? player:max
// )
// console.log(topStudent);
// const anyFailed = students.some(function (num) {
//     return num.score < 50
// })
// console.log(anyFailed);
// students.push({
//     name:'ben', score:90, subjects:['html', 'css','javascript',]
// })
// console.log(students);
// //Objects in javascript
// //looping through objects
// const user = {
//   name: "Benedict",
//   age: 17,
//   isStudent: true
// };
// // for (const key in user) {
// //      console.log(user[key]);   
// // }
// for (const key in user) {
//             console.log(key, user[key]);
            
// }
// const studentsts = [
//   { name: "John", score: 85 },
//   { name: "Jane", score: 42 }
// ];

// console.log(students[0].name); // John
// for (const element of studentsts) {
//     console.log(element.name);
       
// }
// const meSelf = {
//     name: 'Ben',
//     age: 17,
//     skills: ['frontend developer','gamer'],
//     adress:{
//         country: 'Nigeria',
//         state:'Ibadan',
//     },
//     bio: function () {
//         return `my name is ${this.name} i am ${this.age} years old`
//     }
// };
// console.log(meSelf.skills[0]);

// console.log(meSelf.bio());
// object destucturing;

// const {name, age} = meSelf;
// console.log(name, age);
// to destructure nested object 
// const {adress: {state}} = meSelf;
// console.log(state);
// const users = {
//   name: 'Ben',
//   age: 17,
//   country: 'Nigeria'
// };

// const {name,age,country} = users
// console.log(name, age, country);
// users.age = 18;
// // console.log(users)
// // proper way to update elemente of an element
// const updateMe = {...users, age:18}
// console.log(users);
// function task1(callback) {
//     setTimeout(()=>{
//     console.log('Testing 1');
//     callback()
// }, 2000)
// }
// function task2(callback) {
//     setTimeout(()=>{
//     console.log('Testing 2');
//     callback()
// }, 1500)
// }
// function task3(callback) {
//     setTimeout(()=>{
//     console.log('Testing 3');
//     callback()
// }, 3000)
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
            
//         })
//     })
// })

let p = new Promise((resolve, reject)=>{
    let a = 1+1;
    if(a == 2){
        resolve('Success')
    }else{
        reject('Failed')
    }
})
p.then((message)=>{
    console.log('this is in then '+ message);
}).catch((message)=>{
    console.log('this is in catch ' + message);
    
})
