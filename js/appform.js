'use strict';
var christ =['sweets','others'];
var eform = document.getElementById("p-form");
  eform.addEventListener("click", closep);


function closep(){
  var formcol =document.getElementById("divform");
  formcol.setAttribute("class","hideform");

}
var createform = document.getElementsByClassName("orderform");
createform.addEventListener("click", createforms);

function createforms(cardarray){

  var formcol =document.getElementById("divform");
  var daynamicForm = document.getElementById("daynamicForm");
  var count = cardarray;
  for(var i = 0; i < count.length;i++){
    var input = document.createElement("input");
    var label = document.createElement("label");
    input.setAttribute("type","checkbox");
    label.textContent=count[i];
    daynamicForm.appendChild(x);
    daynamicForm.appendChild(y);
  }

  formcol.removeAttribute("class")

}