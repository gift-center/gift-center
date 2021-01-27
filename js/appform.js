'use strict';
var sweets;
var others;
var toy; 
var skincare;
var fruit;
var accessory; 
var boxes; 
var makeup;
var clothes;
var rose;
var carriage;
var ramadanVibes;
var perfume ; 
var christ =['sweets','others'];
var eid = ['sweets' , 'others'];
var gitwell = ['sweets','fruit','toy','skincare','others'];
var birthday = ['accessory','boxes','makeup','sweets','others'];
var birthday = ['accessory','boxes','makeup','sweets','others'];
var motherday = ['accessory','boxes','clothes','rose','others'];
var newborn = ['carriage','boxes','clothes'];
var graduation = ['sweets','boxes','others'];
var newhome =['others'];
var newyear = ['sweets','rose' ,'boxes','others'];
var ramadan = ['Vibes','others']; 
var valentine = ['rose','boxes','sweets']; 
var wedding = ['perfume','boxes','others'];
var eform = document.getElementById("p-form");
  eform.addEventListener("click", closep);


function closep(){
  var formcol =document.getElementById("divform");
  formcol.setAttribute("class","hideform");
  window.location.replace("../gift-center/index.html");

}
var createform = document.getElementsByClassName("orderform");



function createforms(cardarray , x ){
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
  var button = document.createElement("button");
  button.setAttribute("id","sub-form");
  button.setAttribute("type","submit");
  button.setAttribute("onclick",x+'()')
  button.textContent="Search";
  daynamicForm.appendChild(button);


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
new christmas('sweets','../gift-center/assests/christmasproducts/img (1).jpeg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (1).jpg');
new christmas('others','../gift-center/assests/christmasproducts/img (1).png');
new christmas('others','../gift-center/assests/christmasproducts/img (2).jpeg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (2).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (3).jpg');
new christmas('others','../gift-center/assests/christmasproducts/img (4).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (5).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (6).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (7).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (8).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (9).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (10).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (11).jpg');
new christmas('others','../gift-center/assests/christmasproducts/img (12).jpg');
new christmas('others','../gift-center/assests/christmasproducts/img (13).jpg');
new christmas('sweets','../gift-center/assests/christmasproducts/img (14).jpg');



function result (){


   
    
  
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
if(christmasproducts == 0){
  window.location.replace("../gift-center/index.html");
}else{
localStorage.setItem("Gifts",JSON.stringify(christmasproducts));
window.location.replace("../gift-center/result.html");
}

}




function Eid  ( giftBranch, giftSourse) {
  this.gifBranch = giftBranch;
  this.giftSourse = giftSourse;
  Eid.prototype.allEidGifts.push(this);
}

Eid.prototype.allEidGifts = [];


new Eid('others', '../gift-center/assests/eidproducts/img (1).jpeg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (1).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (1).png');
new Eid('sweets', '../gift-center/assests/eidproducts/img (2).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (2).png');
new Eid('sweets', '../gift-center/assests/eidproducts/img (3).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (4).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (5).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (1).jpg');
new Eid('others', '../gift-center/assests/eidproducts/img (7).jpg');
new Eid('others', '../gift-center/assests/eidproducts/img (8).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (9).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (10).jpg');
new Eid('others', '../gift-center/assests/eidproducts/img (11).jpg');
new Eid('others', '../gift-center/assests/eidproducts/img (12).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (13).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (14).jpg');
new Eid('sweets', '../gift-center/assests/eidproducts/img (15).jpg');
new Eid('others', '../gift-center/assests/eidproducts/img (16).jpg');


function result1 (){


  
  

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
if(eidproducts == 0){
  window.location.replace("../gift-center/index.html");
}else{
localStorage.setItem("Gifts",JSON.stringify( eidproducts));
window.location.replace("../gift-center/result.html");

}
}


function GetWell  ( giftBranch, giftSourse) {
  this.gifBranch = giftBranch;
  this.giftSourse = giftSourse;
  GetWell.prototype.allGetWellGifts.push(this);
}
// console.log(typeof(GetWell));
GetWell.prototype.allGetWellGifts = [];



new GetWell('sweets', '../gift-center/assests/GetWellImg/img1.jpg');
new GetWell('toy', '../gift-center/assests/GetWellImg/img2.jpg');
new GetWell('toy', '../gift-center/assests/GetWellImg/img3.jpg');
new GetWell('toy', '../gift-center/assests/GetWellImg/img4.jpg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img5.jpg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img6.jpeg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img7.jpg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img8.jpg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img10.jpg');
new GetWell('others', '../gift-center/assests/GetWellImg/img11.jpg');
new GetWell('fruit', '../gift-center/assests/GetWellImg/img12.jpg');
new GetWell('toy', '../gift-center/assests/GetWellImg/img13.jpg');
new GetWell('skincare', '../gift-center/assests/GetWellImg/img14.jpg');
new GetWell('others', '../gift-center/assests/GetWellImg/img15.jpg');
new GetWell('others', '../gift-center/assests/GetWellImg/img16.jpg');
new GetWell('others', '../gift-center/assests/GetWellImg/img17.jpg');
new GetWell('skincare', '../gift-center/assests/GetWellImg/img18.jpg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img19.jpeg');
new GetWell('sweets', '../gift-center/assests/GetWellImg/img20.jpg');
new GetWell('others', '../gift-center/assests/GetWellImg/img21.jpg');


function result2 (){


  
  

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
if(getwellproducts == 0){
  window.location.replace("../gift-center/index.html");
}else{
localStorage.setItem("Gifts",JSON.stringify( getwellproducts));
window.location.replace("../gift-center/result.html");
}

}

function Birthday (giftBranch,giftSourse) {
  this.gifBranch = giftBranch;
  this.giftSourse = giftSourse;
  Birthday.prototype.allBirthdayGifts.push(this);
 
}

// console.log(typeof(Birthday)); 

Birthday.prototype.allBirthdayGifts = [];

   

new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(1).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(1).png');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(2).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(2).png');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(3).jpg');
new Birthday ('makeup',' ../gift-center/assests/birthdayproducts/img(3).png');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(4).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(5).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(6).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(7).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(8).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(9).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(10).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(11).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(12).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(13).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(14).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(15).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(16).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(17).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(18).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(19).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(20).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(21).jpg');
new Birthday ('others',' ../gift-center/assests/birthdayproducts/img(22).jpg');
new Birthday ('accessory',' ../gift-center/assests/birthdayproducts/img(23).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(24).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(25).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(26).jpg');
new Birthday ('boxes',' ../gift-center/assests/birthdayproducts/img(27).jpg');
new Birthday ('others',' ../gift-center/assests/birthdayproducts/img(28).jpg');
new Birthday ('others',' ../gift-center/assests/birthdayproducts/img(29).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(30).jpg');
new Birthday ('sweets',' ../gift-center/assests/birthdayproducts/img(31).jpg');


function result3 (){


  

sweets = document.getElementById('sweets');
others = document.getElementById('others');

accessory = document.getElementById('accessory');
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
}else if (accessory.checked && Birthday.prototype.allBirthdayGifts[i].gifBranch == 'accessory'){
  
  
  birthdayproducts.push(Birthday.prototype.allBirthdayGifts[i].giftSourse); 
}
}
if(birthdayproducts == 0){
  window.location.replace("../gift-center/index.html");
}else{
localStorage.setItem("Gifts",JSON.stringify( birthdayproducts));
window.location.replace("../gift-center/result.html");
}

}



function MotherDay (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  MotherDay.prototype.allMotherDayGifts.push(this); 
}

MotherDay.prototype.allMotherDayGifts = []; 

new MotherDay ('others','../gift-center/assests/MothersDayImg/img1.jpg');
new MotherDay ('boxes','../gift-center/assests/MothersDayImg/img2.jpg');
new MotherDay ('boxes','../gift-center/assests/MothersDayImg/img3.jpg');
new MotherDay ('others','../gift-center/assests/MothersDayImg/img4.jpg');
new MotherDay ('others','../gift-center/assests/MothersDayImg/img5.jpg');
new MotherDay ('boxes','../gift-center/assests/MothersDayImg/img6.jpg');
new MotherDay ('others','../gift-center/assests/MothersDayImg/img8.jpg');
new MotherDay ('accessory','../gift-center/assests/MothersDayImg/img9.jpg');
new MotherDay ('boxes','../gift-center/assests/MothersDayImg/img10.jpg');
new MotherDay ('clothes','../gift-center/assests/MothersDayImg/img11.jpg');
new MotherDay ('others','../gift-center/assests/MothersDayImg/img12.jpg');
new MotherDay ('boxes','../gift-center/assests/MothersDayImg/img13.jpg');
new MotherDay ('rose','../gift-center/assests/MothersDayImg/img14.jpg');
new MotherDay ('others','../gift-center/assests/MothersDayImg/img15.jpg');
new MotherDay ('others','../gift-center/assests/MothersDayImg/img16.jpg');



function result4 (){


  

  clothes = document.getElementById('clothes');
  others = document.getElementById('others');
  
  accessory = document.getElementById('accessory');
  boxes = document.getElementById('boxes');
  rose = document.getElementById('rose');
  
  
  
  var motherdayproducts =[];
  for (var i=0 ; i<MotherDay.prototype.allMotherDayGifts.length;i++){
  if (others.checked && MotherDay.prototype.allMotherDayGifts[i].giftBranch== 'others'){
    
    
    motherdayproducts.push(MotherDay.prototype.allMotherDayGifts[i].giftSourse);
  
  }else if (rose.checked && MotherDay.prototype.allMotherDayGifts[i].giftBranch == 'rose'){
    
    
    motherdayproducts.push(MotherDay.prototype.allMotherDayGifts[i].giftSourse); 
  }else if (clothes.checked && MotherDay.prototype.allMotherDayGifts[i].giftBranch == 'clothes'){
    
    
    motherdayproducts.push(MotherDay.prototype.allMotherDayGifts[i].giftSourse); 
  }else if (boxes.checked && MotherDay.prototype.allMotherDayGifts[i].giftBranch == 'boxes'){
    
    
    motherdayproducts.push(MotherDay.prototype.allMotherDayGifts[i].giftSourse); 
  }else if (accessory.checked && MotherDay.prototype.allMotherDayGifts[i].giftBranch == 'accessory'){
    
    
    motherdayproducts.push(MotherDay.prototype.allMotherDayGifts[i].giftSourse); 
  }
  }
  if(motherdayproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(motherdayproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }
  
  
function NewPorn (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  NewPorn.prototype.allNewPornGifts.push(this); 
}

NewPorn.prototype.allNewPornGifts = []; 

new NewPorn ('carriage','../gift-center/assests/NewBornImg/img1.webp');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img2.jpg');
new NewPorn ('boxes','../gift-center/assests/NewBornImg/img3.jpg');
new NewPorn ('boxes','../gift-center/assests/NewBornImg/img4.jpg');
new NewPorn ('boxes','../gift-center/assests/NewBornImg/img5.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img6.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img7.png');
new NewPorn ('boxes','../gift-center/assests/NewBornImg/img8.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img9.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img10.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img11.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img12.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img13.webp');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img14.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img16.jpg');
new NewPorn ('clothes','../gift-center/assests/NewBornImg/img17.jpg');



function result5 (){


  

  clothes = document.getElementById('clothes');
  carriage = document.getElementById('carriage');
  boxes = document.getElementById('boxes');
  var newpornproducts =[];
  for (var i=0 ; i<NewPorn.prototype.allNewPornGifts.length;i++){
  if (boxes.checked && NewPorn.prototype.allNewPornGifts[i].giftBranch== 'boxes'){
    
    
    newpornproducts.push(NewPorn.prototype.allNewPornGifts[i].giftSourse);
  
  }else if (carriage.checked && NewPorn.prototype.allNewPornGifts[i].giftBranch == 'carriage'){
    
    
    newpornproducts.push(NewPorn.prototype.allNewPornGifts[i].giftSourse); 
  }else if (clothes.checked && NewPorn.prototype.allNewPornGifts[i].giftBranch == 'clothes'){
    
    
    newpornproducts.push(NewPorn.prototype.allNewPornGifts[i].giftSourse); 
  }
  }
  if(newpornproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(newpornproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }
  
function Graduation (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  Graduation.prototype.allGraduationGifts.push(this); 
}

Graduation.prototype.allGraduationGifts = []; 

new Graduation ('others','../gift-center/assests/graduationsproducts/img-1.jpeg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-2.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-3.png');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-4.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-5.png');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-6.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-7.jpg');
new Graduation ('boxes','../gift-center/assests/graduationsproducts/img-8.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-9.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-10.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-11.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-12.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-13.jpg');
new Graduation ('sweets','../gift-center/assests/graduationsproducts/img-14.jpg');
new Graduation ('sweetes','../gift-center/assests/graduationsproducts/img-15.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-16.jpg');
new Graduation ('sweetes','../gift-center/assests/graduationsproducts/img-17.jpg');
new Graduation ('boxes','../gift-center/assests/graduationsproducts/img-18.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-19.jpg');
new Graduation ('others','../gift-center/assests/graduationsproducts/img-20.jpg');



function result6 (){


  

  others = document.getElementById('others');
  sweets = document.getElementById('sweets');
  boxes = document.getElementById('boxes');
  var graduationproducts =[];
  for (var i=0 ; i<Graduation.prototype.allGraduationGifts.length;i++){
  if (boxes.checked && Graduation.prototype.allGraduationGifts[i].giftBranch== 'boxes'){
    
    
    graduationproducts.push(Graduation.prototype.allGraduationGifts[i].giftSourse);
  
  }else if (sweets.checked && Graduation.prototype.allGraduationGifts[i].giftBranch == 'sweets'){
    
    
    graduationproducts.push(Graduation.prototype.allGraduationGifts[i].giftSourse); 
  }else if (others.checked && Graduation.prototype.allGraduationGifts[i].giftBranch == 'others'){
    
    
    graduationproducts.push(Graduation.prototype.allGraduationGifts[i].giftSourse); 
  }
  }
  if(graduationproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(graduationproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }

  
function NewHome (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  NewHome.prototype.allNewHomeGifts.push(this); 
}

NewHome.prototype.allNewHomeGifts = []; 

new NewHome ('others','../gift-center/assests/homeImage/img1.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img2.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img3.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img4.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img5.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img6.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img7.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img8.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img9.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img10.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img11.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img12.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img13.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img14.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img15.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img16.jpg');
new NewHome ('others','../gift-center/assests/homeImage/img17.png');



function result7 (){


  
console.log('test1');
  others = document.getElementById('others');
  
  var newhomeproducts =[];
  for (var i=0 ; i<NewHome.prototype.allNewHomeGifts.length;i++){
console.log( 'test', NewHome.prototype.allNewHomeGifts[i].giftBranch == 'others')
// need to be fixed
if (others.checked || NewHome.prototype.allNewHomeGifts[i].giftBranch == 'others'){
    // console.log('im alive 2')
    
  newhomeproducts.push(NewHome.prototype.allNewHomeGifts[i].giftSourse); 
}
  }
  if(newhomeproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(newhomeproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }

  

function NewYear (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  NewYear.prototype.allNewYearGifts.push(this); 
}

NewYear.prototype.allNewYearGifts = []; 

new NewYear ('sweets','../gift-center/assests/NewYearIMG/img1.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img2.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img3.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img4.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img5.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img6.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img7.jpg');
new NewYear ('others','../gift-center/assests/NewYearIMG/img8.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img9.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img10.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img11.jpg');
new NewYear ('rose','../gift-center/assests/NewYearIMG/img12.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img13.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img14.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img15.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img16.jpg');
new NewYear ('sweets','../gift-center/assests/NewYearIMG/img17.jpg');
new NewYear ('boxes','../gift-center/assests/NewYearIMG/img18.jpg');

function result8 (){


  

  rose = document.getElementById('rose');
  sweets = document.getElementById('sweets');
  boxes = document.getElementById('boxes');
  others = document.getElementById('others');
  var newyearproducts =[];
  for (var i=0 ; i<NewYear.prototype.allNewYearGifts.length;i++){
  if (boxes.checked && NewYear.prototype.allNewYearGifts[i].giftBranch== 'boxes'){
    
    
    newyearproducts.push(NewYear.prototype.allNewYearGifts[i].giftSourse);
  
  }else if (rose.checked && NewYear.prototype.allNewYearGifts[i].giftBranch == 'rose'){
    
    
    newyearproducts.push(NewYear.prototype.allNewYearGifts[i].giftSourse); 
  }else if (sweets.checked && NewYear.prototype.allNewYearGifts[i].giftBranch == 'sweets'){
    
    
    newyearproducts.push(NewYear.prototype.allNewYearGifts[i].giftSourse); 
  }else if (others.checked && NewYear.prototype.allNewYearGifts[i].giftBranch == 'others'){
    
    
    newyearproducts.push(NewYear.prototype.allNewYearGifts[i].giftSourse); 
  }
  }
  if(newyearproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(newyearproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }

  
function Ramadan (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  Ramadan.prototype.allRamadanGifts.push(this); 
}

Ramadan.prototype.allRamadanGifts = []; 

new Ramadan ('others','../gift-center/assests/RamadanImage/img-1.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-2.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-3.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-4.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-5.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-6.jpg');
new Ramadan ('Vibes','../gift-center/assests/RamadanImage/img-7.jpg');
new Ramadan ('Vibes','../gift-center/assests/RamadanImage/img-8.jpg');
new Ramadan ('Vibes','../gift-center/assests/RamadanImage/img-9.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-10.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-11.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-12.png');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-13.jpg');
new Ramadan ('Vibes','../gift-center/assests/RamadanImage/img-14.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-15.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-16.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-17.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-18.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-19.jpg');
new Ramadan ('others','../gift-center/assests/RamadanImage/img-20.jpg');



function result9 (){


  

  others = document.getElementById('others');
  ramadanVibes= document.getElementById('Vibes');
  
  var ramadanproducts =[];
  for (var i=0 ; i<Ramadan.prototype.allRamadanGifts.length;i++){
  if (ramadanVibes.checked && Ramadan.prototype.allRamadanGifts[i].giftBranch== 'Vibes'){
    
    
    ramadanproducts.push(Ramadan.prototype.allRamadanGifts[i].giftSourse);
  
  }
  else if (others.checked && Ramadan.prototype.allRamadanGifts[i].giftBranch == 'others'){
    
    
    ramadanproducts.push(Ramadan.prototype.allRamadanGifts[i].giftSourse); 
  }
  }
  if(ramadanproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(ramadanproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }

  
function Valentine (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  Valentine.prototype.allValentineGifts.push(this); 
}

Valentine.prototype.allValentineGifts = []; 

new Valentine ('boxes','../gift-center/assests/valentineIMG/img 1.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 2.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 3.jpg');
new Valentine ('others','../gift-center/assests/valentineIMG/img 4.jpg');
new Valentine ('others','../gift-center/assests/valentineIMG/img 5.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 6.jpg');
new Valentine ('rose','../gift-center/assests/valentineIMG/img 7.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 8.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 9.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 10.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 11.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 12.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 13.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 14.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 15.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 16.jpg');
new Valentine ('sweets','../gift-center/assests/valentineIMG/img 17.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 18.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 19.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 20.jpg');
new Valentine ('boxes','../gift-center/assests/valentineIMG/img 21.jpg');


function result10 (){


  

  rose= document.getElementById('rose');
  boxes= document.getElementById('boxes');
  sweets= document.getElementById('sweets');
  
  var valentineproducts =[];
  for (var i=0 ; i<Valentine.prototype.allValentineGifts.length;i++){
  if (rose.checked && Valentine.prototype.allValentineGifts[i].giftBranch== 'rose'){
    
    
    valentineproducts.push(Valentine.prototype.allValentineGifts[i].giftSourse);
  
  }
  else if (boxes.checked && Valentine.prototype.allValentineGifts[i].giftBranch == 'boxes'){
    
    
    valentineproducts.push(Valentine.prototype.allValentineGifts[i].giftSourse); 
  }else if (sweets.checked && Valentine.prototype.allValentineGifts[i].giftBranch == 'sweets'){
    
    
    valentineproducts.push(Valentine.prototype.allValentineGifts[i].giftSourse); 
  }
  }
  if(valentineproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(valentineproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }

  
function Wedding (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  Wedding.prototype.allWeddingGifts.push(this); 
}

Wedding.prototype.allWeddingGifts = []; 

new Wedding ('boxes','../gift-center/assests/weddingIMG/img 1.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 2.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 3.jpg');
new Wedding ('others','../gift-center/assests/weddingIMG/img 4.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 5.jpg');
new Wedding ('others','../gift-center/assests/weddingIMG/img 6.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 7.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 8.png');
new Wedding ('others','../gift-center/assests/weddingIMG/img 9.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 10.jpg');
new Wedding ('others','../gift-center/assests/weddingIMG/img 11.jpg');
new Wedding ('perfume','../gift-center/assests/weddingIMG/img 12.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 13.jpg');
new Wedding ('others','../gift-center/assests/weddingIMG/img 14.jpg');
new Wedding ('others','../gift-center/assests/weddingIMG/img 15.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 16.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 17.jpg');
new Wedding ('boxes','../gift-center/assests/weddingIMG/img 18.jpeg');


function result11 (){


  

  others= document.getElementById('others');
  boxes= document.getElementById('boxes');
  perfume= document.getElementById('perfume');
  
  var weddingproducts =[];
  for (var i=0 ; i<Wedding.prototype.allWeddingGifts.length;i++){
  if (others.checked && Wedding.prototype.allWeddingGifts[i].giftBranch== 'others'){
    
    
    weddingproducts.push(Wedding.prototype.allWeddingGifts[i].giftSourse);
  
  }
  else if (boxes.checked && Wedding.prototype.allWeddingGifts[i].giftBranch == 'boxes'){
    
    
    weddingproducts.push(Wedding.prototype.allWeddingGifts[i].giftSourse); 
  }else if (perfume.checked && Wedding.prototype.allWeddingGifts[i].giftBranch == 'perfume'){
    
    
    weddingproducts.push(Wedding.prototype.allWeddingGifts[i].giftSourse); 
  }
  }
  if(weddingproducts == 0){
    window.location.replace("../gift-center/index.html");
  }else{
  localStorage.setItem("Gifts",JSON.stringify(weddingproducts));
  window.location.replace("../gift-center/result.html");
  console.log('test')
  }
  }
