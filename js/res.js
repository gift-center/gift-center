
var try1 = document.getElementById("SearchResult");

if(localStorage.getItem("ChristamsGifts")){
  
 
  var giftSourse = document.getElementById('SearchResult');
  
  var forget = localStorage.getItem('ChristamsGifts');
  var farhanx = JSON.parse(forget);

  console.log(farhanx);
  for(var i = 0 ; i < farhanx.length;i++){
    var fathi  =document.createElement('img');
    fathi.src=farhanx[i];
    try1.appendChild(fathi); 
  } 
  localStorage.clear();
}