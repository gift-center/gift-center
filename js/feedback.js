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

  var fullname= name;
  var fulldate ="at: " + d.getFullYear()+"/"+months[d.getMonth()]+"/"+d.getDate()
  var fullcom = namef ;

  var existing1 = localStorage.getItem('name');
  existing1 = existing1 ? existing1.split(',') : [];
  existing1.push(fullname);
  localStorage.setItem('name', existing1.toString());

  var existing2 = localStorage.getItem('date');
  existing2 = existing2 ? existing2.split(',') : [];
  existing2.push(fulldate);
  localStorage.setItem('date', existing2.toString());

  var existing = localStorage.getItem('lastcomment');
  existing = existing ? existing.split(',') : [];
  existing.push(fullcom);
  localStorage.setItem('lastcomment', existing.toString());
  render();
  
});


if(localStorage.getItem("lastcomment")){
  render();
  
}

function render(){
  var existing = localStorage.getItem('lastcomment');
  var existing2 = localStorage.getItem('name');
  var existing3 = localStorage.getItem('date');

  existing = existing ? existing.split(',') : [];
  existing2 = existing2 ? existing2.split(',') : [];
  existing3 = existing3 ? existing3.split(',') : [];


  console.log(existing);
  console.log(existing2);
  console.log(existing3);

  var writeRow = document.getElementById("comfeld");

  writeRow.innerHTML="";

  for (var i =0; i < existing.length ; i++){
    var interestLast = document.createElement('li');
    var icreat = document.createElement('i');
    icreat.textContent= existing2[i];
    interestLast.appendChild(icreat);
    var pcreate = document.createElement('p');
    pcreate.textContent= existing[i];
    interestLast.appendChild(pcreate);
    var spmcreate = document.createElement('samp');
    spmcreate.textContent= existing3[i];
    interestLast.appendChild(spmcreate);


    
    writeRow.appendChild(interestLast);
    var interestLast2 = document.createElement('br');
    writeRow.appendChild(interestLast2);

  }
}