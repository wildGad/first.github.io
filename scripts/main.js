'use strict'

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    (mySrc === '/images/mark-x-weight-balans.jpg') ?
        myImage.setAttribute('src', '/images/mark-x-result.jpg') :
        myImage.setAttribute('src', '/images/mark-x-weight-balans.jpg');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Google is cool ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Google is cool ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
let clearButton = document.getElementById('clear')
clearButton.onclick = function () {
    localStorage.clear();
    myHeading.textContent = 'Программа для расчета баланса автомобиля'
}

