'use strict'

var eform = document.getElementById("p-form");
  eform.addEventListener("click", closep);


function closep(){
  var formcol =document.getElementById("divform");
  formcol.setAttribute("class","hideform");

}
var createform = document.getElementsByClassName("orderform");
createform.addEventListener("click", createforms);

function createforms(){
  var formcol =document.getElementById("divform");
  formcol.removeAttribute("class")

}