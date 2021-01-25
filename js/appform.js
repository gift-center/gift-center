'use strict';
var fathi ;
var christ =['sweets','others'];
var eform = document.getElementById("p-form");
  eform.addEventListener("click", closep);


function closep(){
  var formcol =document.getElementById("divform");
  formcol.setAttribute("class","hideform");

}
var createform = document.getElementsByClassName("orderform");
// createform.addEventListener("click", createforms);

function createforms(cardarray){
  var formcol =document.getElementById("body-form");
  var daynamicForm = document.getElementById("daynamicForm");
  var count = cardarray;
  for(var i = 0; i < count.length;i++){
    var input = document.createElement("input");
    var label = document.createElement("label");
    input.setAttribute("type","checkbox");
    input.setAttribute('id',count[i]);
    label.textContent=count[i];
    daynamicForm.appendChild(input);
    daynamicForm.appendChild(label);
  }
//   var submit = document.createElement('button');
// submit.setAttribute('id','sub-form');
// submit.setAttribute('type','submit'); 
// submit.textContent = 'Search'; 
// daynamicForm.appendChild(submit); 

  formcol.removeAttribute("class")

}

var sweets;
var others;
var budjet;

var chrisOccasion = document.getElementById('chris');


function checkListener(event){
    if(event.target.id === 'chris'){
        
    }
}

function christmas  ( giftBranch, giftSourse) {
    this.gifBranch = giftBranch;
    this.giftSourse = giftSourse;
    christmas.prototype.allChristamsGifts.push(this);
}

christmas.prototype.allChristamsGifts = [];
new christmas('sweets','../assests/christmasproducts/img(1).jpeg');
new christmas('sweets','../assests/christmasproducts/img(1).jpg');
new christmas('others','../assests/christmasproducts/img(1).png');
new christmas('others','../assests/christmasproducts/img(2).jpeg');
new christmas('sweets','../assests/christmasproducts/img(2).jpg');
new christmas('sweets','../assests/christmasproducts/img(3).jpg');
new christmas('others','../assests/christmasproducts/img(4).jpg');
new christmas('sweets','../assests/christmasproducts/img(5).jpg');
new christmas('sweets','../assests/christmasproducts/img(6).jpg');
new christmas('sweets','../assests/christmasproducts/img(7).jpg');
new christmas('sweets','../assests/christmasproducts/img(8).jpg');
new christmas('sweets','../assests/christmasproducts/img(9).jpg');
new christmas('sweets','../assests/christmasproducts/img(10).jpg');
new christmas('sweets','../assests/christmasproducts/img(11).jpg');
new christmas('others','../assests/christmasproducts/img(12).jpg');
new christmas('others','../assests/christmasproducts/img(13).jpg');
new christmas('sweets','../assests/christmasproducts/img(14).jpg');


var submit = document.getElementById('sub-form'); 

submit.addEventListener('click',result);

function result (event){
console.log('test');

    event.preventDefault();
    
    // console.log('test submit');

// console.log(event);
 sweets = document.getElementById('sweets');
 others = document.getElementById('others');
 
 console.log(sweets.checked  ,   others.checked); 
    console.log(christmas.prototype.allChristamsGifts.length);
     var giftSourse = document.getElementById('SearchResult');

//  budjet = document.getElementById('budjet');
// console.log(sweet.checked , others.checked); 
//  console.log(sweets.checked , others.checked);
closep(); 
if (sweets.checked===true && others.checked===true){
    for (var i=0 ; i<christmas.prototype.allChristamsGifts.length;i++){

        fathi.createElement('img');
        fathi.setAttribute('src',christmas.prototype.allChristamsGifts.giftSourse[i]);
        giftSourse.appendChild(fathi); 

// display all images in christmas img folder     

    }
}else if (sweets.checked===false && others.checked===true){
    for (var i=0 ; i <Eid.prototype.allEidGifts.length ; i++){
        if (Eid.prototype.allEidGifts.giftBranch== 'others'){

// display images which are holding others category 

        }
    }
}
else if (sweets.checked===true && others.checked===false ){
    for (var i=0 ; i < Eid.prototype.allEidGifts.length ; i++){
        if (Eid.prototype.allEidGifts.giftBranch== 'sweets'){

      // display images which are holding the sweets category 

    }
}
}

}


 
window.location.replace("../result.html");
localStorage.setItem("rendersShopsForElectronics",1);