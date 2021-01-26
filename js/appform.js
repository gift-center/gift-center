'use strict';
var sweets;
var others;
var toy; 
var skincare;
var fruit;
var accessories; 
var boxes; 
var makeup;
var christ =['sweets','others'];
var eid = ['sweets' , 'others'];
var gitwell = ['sweets','others','toy','skincare','fruit'];
var birthday = ['accessories','boxes','makeup','sweets','others'];

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
     



var christmasproducts =[];
for (var i=0 ; i<christmas.prototype.allChristamsGifts.length;i++){
  if (others.checked && christmas.prototype.allChristamsGifts[i].gifBranch== 'others'){
    

    christmasproducts.push(christmas.prototype.allChristamsGifts[i].giftSourse);

  }else if (sweets.checked && christmas.prototype.allChristamsGifts[i].gifBranch == 'sweets' ){
    
    
    christmasproducts.push(christmas.prototype.allChristamsGifts[i].giftSourse); 
  }
}
localStorage.setItem("ChristamsGifts",JSON.stringify(christmasproducts));
window.location.replace("../result.html");


}




function Eid  ( giftBranch, giftSourse) {
  this.gifBranch = giftBranch;
  this.giftSourse = giftSourse;
  Eid.prototype.allEidGifts.push(this);
}

Eid.prototype.allEidGifts = [];


new Eid('others', '../assests/eidproducts/img (1).jpeg');
new Eid('sweets', '../assests/eidproducts/img (1).jpg');
new Eid('sweets', '../assests/eidproducts/img (1).png');
new Eid('sweets', '../assests/eidproducts/img (2).jpg');
new Eid('sweets', '../assests/eidproducts/img (2).png');
new Eid('sweets', '../assests/eidproducts/img (3).jpg');
new Eid('sweets', '../assests/eidproducts/img (4).jpg');
new Eid('sweets', '../assests/eidproducts/img (5).jpg');
new Eid('sweets', '../assests/eidproducts/img (1).jpg');
new Eid('others', '../assests/eidproducts/img (7).jpg');
new Eid('others', '../assests/eidproducts/img (8).jpg');
new Eid('sweets', '../assests/eidproducts/img (9).jpg');
new Eid('sweets', '../assests/eidproducts/img (10).jpg');
new Eid('others', '../assests/eidproducts/img (11).jpg');
new Eid('others', '../assests/eidproducts/img (12).jpg');
new Eid('sweets', '../assests/eidproducts/img (13).jpg');
new Eid('sweets', '../assests/eidproducts/img (14).jpg');
new Eid('sweets', '../assests/eidproducts/img (15).jpg');
new Eid('others', '../assests/eidproducts/img (16).jpg');


function result (event){


  event.preventDefault();
  

sweets = document.getElementById('sweets');
others = document.getElementById('others');

//  console.log(sweets.checked  ,   others.checked); 
// console.log(christmas.prototype.allChristamsGifts.length);
   



var eidproducts =[];
for (var i=0 ; i<Eid.prototype.allEidGifts.length;i++){
if (others.checked && Eid.prototype.allEidGifts[i].gifBranch== 'others'){
  

  eidproducts.push(Eid.prototype.allEidGifts[i].giftSourse);

}else if (sweets.checked && Eid.prototype.allEidGifts[i].gifBranch == 'sweets' ){
  
  
  eidproducts.push(Eid.prototype.allEidGifts[i].giftSourse); 
}
}
localStorage.setItem("EidGifts",JSON.stringify( eidproducts));
window.location.replace("../result.html");


}


function GetWell  ( giftBranch, giftSourse) {
  this.gifBranch = giftBranch;
  this.giftSourse = giftSourse;
  GetWell.prototype.allGetWellGifts.push(this);
}
// console.log(typeof(GetWell));
GetWell.prototype.allGetWellGifts = [];



new GetWell('sweets', '../assests/GetWellImg/img1.jpg');
new GetWell('toy', '../assests/GetWellImg/img2.jpg');
new GetWell('toy', '../assests/GetWellImg/img3.jpg');
new GetWell('toy', '../assests/GetWellImg/img4.jpg');
new GetWell('sweets', '../assests/GetWellImg/img5.jpg');
new GetWell('sweets', '../assests/GetWellImg/img6.jpeg');
new GetWell('sweets', '../assests/GetWellImg/img7.jpg');
new GetWell('sweets', '../assests/GetWellImg/img8.jpg');
new GetWell('sweets', '../assests/GetWellImg/img10.jpg');
new GetWell('others', '../assests/GetWellImg/img11.jpg');
new GetWell('fruit', '../assests/GetWellImg/img12.jpg');
new GetWell('toy', '../assests/GetWellImg/img13.jpg');
new GetWell('skincare', '../assests/GetWellImg/img14.jpg');
new GetWell('others', '../assests/GetWellImg/img15.jpg');
new GetWell('others', '../assests/GetWellImg/img16.jpg');
new GetWell('others', '../assests/GetWellImg/img17.jpg');
new GetWell('skincare', '../assests/GetWellImg/img18.jpg');
new GetWell('sweets', '../assests/GetWellImg/img19.jpeg');
new GetWell('sweets', '../assests/GetWellImg/img20.jpg');
new GetWell('others', '../assests/GetWellImg/img21.jpg');


function result (event){


  event.preventDefault();
  

sweets = document.getElementById('sweets');
others = document.getElementById('others');

toy = document.getElementById('toy');
skincare = document.getElementById('skincare');
fruit = document.getElementById('fruit');


//  console.log(sweets.checked  ,   others.checked); 
// console.log(christmas.prototype.allChristamsGifts.length);
   



var getwellproducts =[];
for (var i=0 ; i<GetWell.prototype.allGetWellGifts.length;i++){
if (others.checked && GetWell.prototype.allGetWellGifts[i].gifBranch== 'others'){
  

  getwellproducts.push(GetWell.prototype.allGetWellGifts[i].giftSourse);

}else if (sweets.checked && GetWell.prototype.allGetWellGifts[i].gifBranch == 'sweets'){
  
  
  getwellproducts.push(GetWell.prototype.allGetWellGifts[i].giftSourse); 
}else if (toy.checked && GetWell.prototype.allGetWellGifts[i].gifBranch == 'toy'){
  
  
  getwellproducts.push(GetWell.prototype.allGetWellGifts[i].giftSourse); 
}else if (skincare.checked && GetWell.prototype.allGetWellGifts[i].gifBranch == 'skincare'){
  
  
  getwellproducts.push(GetWell.prototype.allGetWellGifts[i].giftSourse); 
}else if (fruit.checked && GetWell.prototype.allGetWellGifts[i].gifBranch == 'fruit'){
  
  
  getwellproducts.push(GetWell.prototype.allGetWellGifts[i].giftSourse); 
}
}
localStorage.setItem("GetWellGifts",JSON.stringify( getwellproducts));
window.location.replace("../result.html");


}

function Birthday (giftBranch,giftSourse) {
  this.gifBranch = giftBranch;
  this.giftSourse = giftSourse;
  Birthday.prototype.allBirthdayGifts.push(this);
 
}

// console.log(typeof(Birthday)); 

Birthday.prototype.allBirthdayGifts = [];

   

new Birthday ('accessories',' ../assests/birthdayproducts/img(1).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(1).png');
new Birthday ('sweets',' ../assests/birthdayproducts/img(2).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(2).png');
new Birthday ('accessories',' ../assests/birthdayproducts/img(3).jpg');
new Birthday ('makeup',' ../assests/birthdayproducts/img(3).png');
new Birthday ('boxes',' ../assests/birthdayproducts/img(4).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(5).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(6).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(7).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(8).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(9).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(10).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(11).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(12).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(13).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(14).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(15).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(16).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(17).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(18).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(19).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(20).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(21).jpg');
new Birthday ('others',' ../assests/birthdayproducts/img(22).jpg');
new Birthday ('accessories',' ../assests/birthdayproducts/img(23).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(24).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(25).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(26).jpg');
new Birthday ('boxes',' ../assests/birthdayproducts/img(27).jpg');
new Birthday ('others',' ../assests/birthdayproducts/img(28).jpg');
new Birthday ('others',' ../assests/birthdayproducts/img(29).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(30).jpg');
new Birthday ('sweets',' ../assests/birthdayproducts/img(31).jpg');


function result (event){


  event.preventDefault();

sweets = document.getElementById('sweets');
others = document.getElementById('others');

accessories = document.getElementById('accessories');
boxes = document.getElementById('boxes');
makeup = document.getElementById('makeup');


//  console.log(sweets.checked  ,   others.checked); 
// console.log(christmas.prototype.allChristamsGifts.length);
   



var birthdayproducts =[];
for (var i=0 ; i<Birthday.prototype.allBirthdayGifts.length;i++){
if (others.checked && Birthday.prototype.allBirthdayGifts[i].gifBranch== 'others'){
  
  
  birthdayproducts.push(Birthday.prototype.allBirthdayGifts[i].giftSourse);

}else if (sweets.checked && Birthday.prototype.allBirthdayGifts[i].gifBranch == 'sweets'){
  
  
  birthdayproducts.push(Birthday.prototype.allBirthdayGifts[i].giftSourse); 
}else if (makeup.checked && Birthday.prototype.allBirthdayGifts[i].gifBranch == 'makeup'){
  
  
  birthdayproducts.push(Birthday.prototype.allBirthdayGifts[i].giftSourse); 
}else if (boxes.checked && Birthday.prototype.allBirthdayGifts[i].gifBranch == 'boxes'){
  
  
  birthdayproducts.push(Birthday.prototype.allBirthdayGifts[i].giftSourse); 
}else if (accessories.checked && Birthday.prototype.allBirthdayGifts[i].gifBranch == 'accessories'){
  
  
  birthdayproducts.push(Birthday.prototype.allBirthdayGifts[i].giftSourse); 
}
}
localStorage.setItem("BirthdayGifts",JSON.stringify( birthdayproducts));
window.location.replace("../result.html");


}