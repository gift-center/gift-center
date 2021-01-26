
var try1 = document.getElementById("SearchResult");

if(localStorage.getItem("ChristamsGifts")){
  
 
  var giftSourse = document.getElementById('SearchResult');
  
  var forget = localStorage.getItem('ChristamsGifts');
  var yy = JSON.parse(forget);

  console.log(yy);
  for(var i = 0 ; i < yy.length;i++){
    var xx  =document.createElement('img');
    xx.src=yy[i];
    try1.appendChild(xx); 
  } 
  localStorage.clear();
}

if(localStorage.getItem("EidGifts")){
  
 
  var giftSourse = document.getElementById('SearchResult');
  
  var forget = localStorage.getItem('EidGifts');
  var yy = JSON.parse(forget);

  console.log(yy);
  for(var i = 0 ; i < yy.length;i++){
    var xx  =document.createElement('img');
    xx.src=yy[i];
    try1.appendChild(xx); 
  } 
  localStorage.clear();
}


if(localStorage.getItem("GetWellGifts")){
  
 
  var giftSourse = document.getElementById('SearchResult');
  
  var forget = localStorage.getItem('GetWellGifts');
  var yy = JSON.parse(forget);

  console.log(yy);
  for(var i = 0 ; i < yy.length;i++){
    var xx  =document.createElement('img');
    xx.src=yy[i];
    try1.appendChild(xx); 
  } 
  localStorage.clear();
}


if(localStorage.getItem("BirthdayGifts")){
  
 
  var giftSourse = document.getElementById('SearchResult');
  
  var forget = localStorage.getItem('BirthdayGifts');
  var yy = JSON.parse(forget);

  console.log(yy);
  for(var i = 0 ; i < yy.length;i++){
    var xx  =document.createElement('img');
    xx.src=yy[i];
    try1.appendChild(xx); 
  } 
  localStorage.clear();
}