'use strict';
var sweets;
var others;
var toy; 
var skincare;
var fruit;
var accessories; 
var boxes; 
var makeup;
var clothes;
var rose;
var carriage;
var christ =['sweets','others'];
var eid = ['sweets' , 'others'];
var gitwell = ['sweets','others','toy','skincare','fruit'];
var birthday = ['accessories','boxes','makeup','sweets','others'];
var birthday = ['accessories','boxes','makeup','sweets','others'];
var motherday = ['accessories','boxes','others','rose','clothes'];
var newborn = ['carriage','boxes','clothes'];
var graduation = ['others','boxes','sweets'];
var newhome =['others'];
var newyear = ['sweets', 'others','boxes','rose']; 
var eform = document.getElementById("p-form");
  eform.addEventListener("click", closep);


function closep(){
  var formcol =document.getElementById("divform");
  formcol.setAttribute("class","hideform");

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
localStorage.setItem("Gifts",JSON.stringify(christmasproducts));
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
localStorage.setItem("Gifts",JSON.stringify( eidproducts));
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
localStorage.setItem("Gifts",JSON.stringify( getwellproducts));
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


function result3 (){


  

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
localStorage.setItem("Gifts",JSON.stringify( birthdayproducts));
window.location.replace("../result.html");


}



function MotherDay (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  MotherDay.prototype.allMotherDayGifts.push(this); 
}

MotherDay.prototype.allMotherDayGifts = []; 

new MotherDay ('others','../assests/MothersDayImg/img1.jpg');
new MotherDay ('boxes','../assests/MothersDayImg/img2.jpg');
new MotherDay ('boxes','../assests/MothersDayImg/img3.jpg');
new MotherDay ('others','../assests/MothersDayImg/img4.jpg');
new MotherDay ('others','../assests/MothersDayImg/img5.jpg');
new MotherDay ('boxes','../assests/MothersDayImg/img6.jpg');
new MotherDay ('others','../assests/MothersDayImg/img8.jpg');
new MotherDay ('accessories','../assests/MothersDayImg/img9.jpg');
new MotherDay ('boxes','../assests/MothersDayImg/img10.jpg');
new MotherDay ('clothes','../assests/MothersDayImg/img11.jpg');
new MotherDay ('others','../assests/MothersDayImg/img12.jpg');
new MotherDay ('boxes','../assests/MothersDayImg/img13.jpg');
new MotherDay ('rose','../assests/MothersDayImg/img14.jpg');
new MotherDay ('others','../assests/MothersDayImg/img15.jpg');
new MotherDay ('others','../assests/MothersDayImg/img16.jpg');



function result4 (){


  

  clothes = document.getElementById('clothes');
  others = document.getElementById('others');
  
  accessories = document.getElementById('accessories');
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
  }else if (accessories.checked && MotherDay.prototype.allMotherDayGifts[i].giftBranch == 'accessories'){
    
    
    motherdayproducts.push(MotherDay.prototype.allMotherDayGifts[i].giftSourse); 
  }
  }
  localStorage.setItem("Gifts",JSON.stringify(motherdayproducts));
  window.location.replace("../result.html");
  console.log('test')
  
  }
  
  
function NewPorn (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  NewPorn.prototype.allNewPornGifts.push(this); 
}

NewPorn.prototype.allNewPornGifts = []; 

new NewPorn ('carriage','../assests/NewBornImg/img1.webp');
new NewPorn ('clothes','../assests/NewBornImg/img2.jpg');
new NewPorn ('boxes','../assests/NewBornImg/img3.jpg');
new NewPorn ('boxes','../assests/NewBornImg/img4.jpg');
new NewPorn ('boxes','../assests/NewBornImg/img5.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img6.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img7.jpg');
new NewPorn ('boxes','../assests/NewBornImg/img8.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img9.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img10.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img11.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img12.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img13.webp');
new NewPorn ('clothes','../assests/NewBornImg/img14.jpg');
new NewPorn ('boxes','../assests/NewBornImg/img2.jpeg');
new NewPorn ('clothes','../assests/NewBornImg/img16.jpg');
new NewPorn ('clothes','../assests/NewBornImg/img17.jpg');



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
  localStorage.setItem("Gifts",JSON.stringify(newpornproducts));
  window.location.replace("../result.html");
  console.log('test')
  
  }
  
function Graduation (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  Graduation.prototype.allGraduationGifts.push(this); 
}

Graduation.prototype.allGraduationGifts = []; 

new Graduation ('others','../assests/graduationsproducts/img-1.jpg');
new Graduation ('others','../assests/graduationsproducts/img-2.jpg');
new Graduation ('others','../assests/graduationsproducts/img-3.png');
new Graduation ('others','../assests/graduationsproducts/img-4.jpg');
new Graduation ('others','../assests/graduationsproducts/img-5.png');
new Graduation ('others','../assests/graduationsproducts/img-6.jpg');
new Graduation ('others','../assests/graduationsproducts/img-7.jpg');
new Graduation ('boxes','../assests/graduationsproducts/img-8.jpg');
new Graduation ('others','../assests/graduationsproducts/img-9.jpg');
new Graduation ('others','../assests/graduationsproducts/img-10.jpg');
new Graduation ('others','../assests/graduationsproducts/img-11.jpg');
new Graduation ('others','../assests/graduationsproducts/img-12.jpg');
new Graduation ('others','../assests/graduationsproducts/img-13.jpg');
new Graduation ('sweets','../assests/graduationsproducts/img-14.jpg');
new Graduation ('sweetes','../assests/graduationsproducts/img-15.jpg');
new Graduation ('others','../assests/graduationsproducts/img-16.jpg');
new Graduation ('sweetes','../assests/graduationsproducts/img-17.jpg');
new Graduation ('boxes','../assests/graduationsproducts/img-18.jpg');
new Graduation ('others','../assests/graduationsproducts/img-19.jpg');
new Graduation ('others','../assests/graduationsproducts/img-20.jpg');



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
  localStorage.setItem("Gifts",JSON.stringify(graduationproducts));
  window.location.replace("../result.html");
  console.log('test')
  
  }

  
function NewHome (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  NewHome.prototype.allNewHomeGifts.push(this); 
}

NewHome.prototype.allNewHomeGifts = []; 

new NewHome ('others','../assests/homeImage/img1.jpg');
new NewHome ('others','../assests/homeImage/img2.jpg');
new NewHome ('others','../assests/homeImage/img3.jpg');
new NewHome ('others','../assests/homeImage/img4.jpg');
new NewHome ('others','../assests/homeImage/img5.jpg');
new NewHome ('others','../assests/homeImage/img6.jpg');
new NewHome ('others','../assests/homeImage/img7.jpg');
new NewHome ('others','../assests/homeImage/img8.jpg');
new NewHome ('others','../assests/homeImage/img9.jpg');
new NewHome ('others','../assests/homeImage/img10.jpg');
new NewHome ('others','../assests/homeImage/img11.jpg');
new NewHome ('others','../assests/homeImage/img12.jpg');
new NewHome ('others','../assests/homeImage/img13.jpg');
new NewHome ('others','../assests/homeImage/img14.jpg');
new NewHome ('others','../assests/homeImage/img15.jpg');
new NewHome ('others','../assests/homeImage/img16.jpg');
new NewHome ('others','../assests/homeImage/img17.jpg');



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
  localStorage.setItem("Gifts",JSON.stringify(newhomeproducts));
  window.location.replace("../result.html");
  console.log('test')
  
  }

  

function NewYear (giftBranch,giftSourse){
  this.giftBranch = giftBranch; 
  this.giftSourse = giftSourse;
  NewYear.prototype.allNewYearGifts.push(this); 
}

NewYear.prototype.allNewYearGifts = []; 

new NewYear ('sweets','../assets/NewYearIMG/img1.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img2.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img3.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img4.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img5.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img6.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img7.jpg');
new NewYear ('others','../assets/NewYearIMG/img8.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img9.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img10.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img11.jpg');
new NewYear ('rose','../assets/NewYearIMG/img12.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img13.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img14.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img15.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img16.jpg');
new NewYear ('sweets','../assets/NewYearIMG/img17.jpg');
new NewYear ('boxes','../assets/NewYearIMG/img18.jpg');

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
  localStorage.setItem("Gifts",JSON.stringify(newyearproducts));
  window.location.replace("../result.html");
  console.log('test')
  
  }