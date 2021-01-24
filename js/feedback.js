'use strict';




document.getElementById("submitBtn").addEventListener("click", function(event)
{

  event.preventDefault();
  
  var namef = document.querySelector("#comment").value;
  var name = document.querySelector("#name").value;
  if(namef == "" || name == ""){
    alert('Error');
    return;
  }
  var d = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var fullcom = name +":   "+ namef +"              at "+ d.getFullYear()+"/"+months[d.getMonth()]+"/"+d.getDate();
  var existing = localStorage.getItem('lastcomment');
  existing = existing ? existing.split(',') : [];
  existing.push(fullcom);
  localStorage.setItem('lastcomment', existing.toString());
  render();
  
});


if(localStorage.getItem("lastcomment")){
  var existing = localStorage.getItem('lastcomment');
  existing = existing ? existing.split(',') : [];
  var writeRow = document.getElementById("comfeld");
  for (var i =0; i < existing.length ; i++){
    var interestLast = document.createElement('li');
    interestLast.textContent = existing[i];
    interestLast.setAttribute("class","commit");
    writeRow.appendChild(interestLast);
    var interestLast2 = document.createElement('br');
    writeRow.appendChild(interestLast2);

  }
  
}

function render(){
  var existing = localStorage.getItem('lastcomment');
  existing = existing ? existing.split(',') : [];
  var writeRow = document.getElementById("comfeld");
  writeRow.innerHTML="";
  for (var i =0; i < existing.length ; i++){
    var interestLast = document.createElement('li');
    interestLast.textContent = existing[i];
    writeRow.appendChild(interestLast);
    var interestLast2 = document.createElement('br');
    writeRow.appendChild(interestLast2);

  }
}