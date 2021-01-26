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


    event.preventDefault();
    
  
 sweets = document.getElementById('sweets');
 others = document.getElementById('others');
 
//  console.log(sweets.checked  ,   others.checked); 
// console.log(christmas.prototype.allChristamsGifts.length);
     



var x =[];
for (var i=0 ; i<christmas.prototype.allChristamsGifts.length;i++){
  if (others.checked && christmas.prototype.allChristamsGifts[i].gifBranch== 'others'){
    

    x.push(christmas.prototype.allChristamsGifts[i].giftSourse);

  }else if (sweets.checked && christmas.prototype.allChristamsGifts[i].gifBranch == 'sweets' ){
    
    
    x.push(christmas.prototype.allChristamsGifts[i].giftSourse); 
  }
}
localStorage.setItem("ChristamsGifts",JSON.stringify(x));
window.location.replace("../result.html");


}




