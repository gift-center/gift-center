'use strict'

var eform = document.getElementById("p-form");
  eform.addEventListener("click", closep);


function closep(){
  var formcol =document.getElementById("body-form");
  formcol.setAttribute("class","hideform");

}
var createform = document.getElementsByClassName("orderform");
createform.addEventListener('click', createforms);

function createforms(){
  var formcol =document.getElementById("body-form");
  formcol.removeAttribute("class");



}


// var mainFormDiv = document.createElement('div');
// mainFormDiv.setAttribute('id', 'body-form');
// var formDiv = document.createElement('div');
// formDiv.setAttribute('id', 'divform');
// formDiv.setAttribute('class', 'hideform');

// mainFormDiv.appendChild(formDiv);

// var formBody= document.createElement('form');
// formDiv.appendChild(formBody);

// var formField = document.createElement('fieldset');
// formBody.appendChild(formField);

// var formTitle = document.createElement('p');
// formField.appendChild(formTitle);
// formTitle.textContent = 'Order';

// var label1 = document.createElement('label');
// var input1 = document.createElement('input');

// label1.textContent='Budget';
// label1.style.fontSize= 'large';
// label1.style.marginLeft= '10px';

// input1.setAttribute('type', 'number');
// input1.setAttribute('placeholder', 'Your Budget');
// input1.validity(required);




