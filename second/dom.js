// textContent and innerHtml differences
//textContent does not payAttention to the css
//  but innerHtml does

//Basics/Dom/Async js and ES6+ Projects, then Framework
// document.getElementById('item1').style.background= 'red';
// document.getElementById('item2').style.background= 'yellow';
// document.getElementById('item3').style.background= 'green';
// document.getElementById('item4').style.background= 'blue';
// apply the same javascript to multiple elemente we loop through them

//Creating Elements in javascript
const ul = document.querySelector('ul')
const li = document.createElement('li')
//Adding Elements
ul.append(li)
///Modifying the text  Use innnerText most times

li.innerText = 'XMEN';
//MODIFYING THE ATTRIBUTES (CSS STUFFF)
// li.setAttribute('class', 'list-group-item')
// li.removeAttribute('class')

li.classList.remove('list-group-item');
li.remove();

//i can create an element, add also apppend an element, modify an element, remove or delete an elment.

//Event Listners
//Syntax = element.addeventlistner('click'.function);
// let buttonTwo = document.querySelector('.enters');
// buttonTwo.addEventListener('click', ()=>{
//     alert('i also love javascri[t')
// })

// function changeColor() {
//     newBackgroungColor.style.Color = 'red'
// }
// let buttonThree = document.querySelector('.entres3')
// buttonThree.addEventListener('mousehover',
//     changeColor)

    const revealBtn = document.querySelector('.reveal-btn');
    const hidedenContent = document.querySelector('.hidden-context');

    function revealContent(){
        if (hidedenContent.classList.contains('reveal-btn')) {
            hidedenContent.classList.remove('reveal-btn')
        }else{
            hidedenContent.classList.add('reveal-btn')
        }
    }
    revealBtn.addEventListener('click',revealContent);
    //EVENTS DELIGATION
    document.querySelector('#items').addEventListener('click', function(e) {
    if (e.target.classList.contains('list-group-item')) {
        console.log(e.target.id + ' is clicked');
    }
});
const textArea = document.getElementById('text-area');
const addTask = document.getElementById('add-task');
const listItem = document.querySelector('#list-items')
addTask.addEventListener('click', ()=>{
    const newItem = textArea.value.trim();
    if(!newItem) return;
    let li = document.createElement('li');
    li.textContent=newItem;



    let delBtn = document.createElement('button')
    delBtn.textContent = 'X'
    delBtn.addEventListener('click',()=>{
        console.log('button clicked');
        
        li.remove();
    })
    li.append(delBtn)
    listItem.append(li);
    textArea.value = "";
})


//Arrays
let numbers = [1,2,3,4,5,6]
for (let index = 0; index < numbers.length; index++) {
    console.log( numbers * 2[index])
}

