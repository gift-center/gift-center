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
new christmas('sweets','assests/christmasproducts/img (1).jpeg');
new christmas('sweets','assests/christmasproducts/img (1).jpg');
new christmas('others','assests/christmasproducts/img (1).png');
new christmas('others','assests/christmasproducts/img (2).jpeg');
new christmas('sweets','assests/christmasproducts/img (2).jpg');
new christmas('sweets','assests/christmasproducts/img (3).jpg');
new christmas('others','assests/christmasproducts/img (4).jpg');
new christmas('sweets','assests/christmasproducts/img (5).jpg');
new christmas('sweets','assests/christmasproducts/img (6).jpg');
new christmas('sweets','assests/christmasproducts/img (7).jpg');
new christmas('sweets','assests/christmasproducts/img (8).jpg');
new christmas('sweets','assests/christmasproducts/img (9).jpg');
new christmas('sweets','assests/christmasproducts/img (10).jpg');
new christmas('sweets','assests/christmasproducts/img (11).jpg');
new christmas('others','assests/christmasproducts/img (12).jpg');
new christmas('others','assests/christmasproducts/img (13).jpg');
new christmas('sweets','assests/christmasproducts/img (14).jpg');



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
     

//  budjet = document.getElementById('budjet');
// console.log(sweet.checked , others.checked); 
//  console.log(sweets.checked , others.checked);

if (sweets.checked===true && others.checked===true){
  var x =[];
    for (var i=0 ; i<christmas.prototype.allChristamsGifts.length;i++){
      console.log(christmas.prototype.allChristamsGifts[i].giftSourse);
      x.push(christmas.prototype.allChristamsGifts[i].giftSourse);
    }
  localStorage.setItem("ChristamsGifts",JSON.stringify(x));
  window.location.replace("../result.html");
 
}else if (sweets.checked===false && others.checked===true){
  
  var x =[];
    for (var i=0 ; i <christmas.prototype.allChristamsGifts.length; i++){
      
        if (christmas.prototype.allChristamsGifts[i].gifBranch== 'others'){

        console.log(christmas.prototype.allChristamsGifts[i].giftSourse);
        x.push(christmas.prototype.allChristamsGifts[i].giftSourse);
        }

    }
    localStorage.setItem("ChristamsGifts",JSON.stringify(x));
    window.location.replace("../result.html");
}
else if (sweets.checked===true && others.checked===false ){
  var x =[];
    for (var i=0 ; i < christmas.prototype.allChristamsGifts.length ; i++){
        if (christmas.prototype.allChristamsGifts[i].gifBranch == 'sweets'){

          console.log(christmas.prototype.allChristamsGifts[i].giftSourse);
          x.push(christmas.prototype.allChristamsGifts[i].giftSourse); 

    }
}
    localStorage.setItem("ChristamsGifts",JSON.stringify(x));
    window.location.replace("../result.html");
}
} 



 
// window.location.replace("../result.html");
// localStorage.setItem("rendersShopsForElectronics",1);