'use strict';

// console.log('test'); 
var sweets;
var others;
var budjet;
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


    event.preventDefault();
    
    // console.log('test submit');

// console.log(event);
 sweets = document.getElementById('sweets');
 others = document.getElementById('others');
//  budjet = document.getElementById('budjet');

//  console.log(sweets.checked , others.checked);

if (sweets.checked===true && others.checked===true){
    for (var i=0 ; i<christmas.prototype.allChristamsGifts.length;i++){
        
// display all images in christmas img folder     

    }
}else if (sweets.checked===false && others.checked===true){
    for (var i=0 ; i < christmas.prototype.allChristamsGifts.length ; i++){
        if (christmas.prototype.allChristamsGifts.giftBranch== 'others'){

// display images which are holding others category 

        }
    }
}
else if (sweets.checked===true && others.checked===false ){
    for (var i=0 ; i < christmas.prototype.allChristamsGifts.length ; i++){
        if (christmas.prototype.allChristamsGifts.giftBranch== 'sweets'){

      // display images which are holding the sweets category 

    }
}
}
}


function Eid  ( giftBranch, giftSourse) {
    this.gifBranch = giftBranch;
    this.giftSourse = giftSourse;
    Eid.prototype.allEidGifts.push(this);
}

Eid.prototype.allEidGifts = [];


new Eid('others', '../assests/eidproducts/img(1).jpeg');
new Eid('sweets', '../assests/eidproducts/img(1).jpg');
new Eid('sweets', '../assests/eidproducts/img(1).png');
new Eid('sweets', '../assests/eidproducts/img(2).jpg');
new Eid('sweets', '../assests/eidproducts/img(2).png');
new Eid('sweets', '../assests/eidproducts/img(3).jpg');
new Eid('sweets', '../assests/eidproducts/img(4).jpg');
new Eid('sweets', '../assests/eidproducts/img(5).jpg');
new Eid('sweets', '../assests/eidproducts/img(1).jpg');
new Eid('others', '../assests/eidproducts/img(7).jpg');
new Eid('others', '../assests/eidproducts/img(8).jpg');
new Eid('sweets', '../assests/eidproducts/img(9).jpg');
new Eid('sweets', '../assests/eidproducts/img(10).jpg');
new Eid('others', '../assests/eidproducts/img(11).jpg');
new Eid('others', '../assests/eidproducts/img(12).jpg');
new Eid('sweets', '../assests/eidproducts/img(13).jpg');
new Eid('sweets', '../assests/eidproducts/img(14).jpg');
new Eid('sweets', '../assests/eidproducts/img(15).jpg');
new Eid('others', '../assests/eidproducts/img(16).jpg');


var submit = document.getElementById('sub-form'); 

submit.addEventListener('click',result);

function result (event){


    event.preventDefault();
    
    // console.log('test submit');

// console.log(event);
 sweets = document.getElementById('sweets');
 others = document.getElementById('others');
//  budjet = document.getElementById('budjet');

//  console.log(sweets.checked , others.checked);

if (sweets.checked===true && others.checked===true){
    for (var i=0 ; i<Eid.prototype.allEidGifts.length;i++){
        
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



function GetWell  ( giftBranch, giftSourse) {
    this.gifBranch = giftBranch;
    this.giftSourse = giftSourse;
    GetWell.prototype.allGetWellGifts.push(this);
}

GetWell.prototype.allGetWellGifts = [];

// all GetWell images need to be rebranched 

new GetWell('hotcoca', '../assests/GetWellImg/img1.jpg');
new GetWell('teddybear', '../assests/GetWellImg/img2.jpg');
new GetWell('entertatment', '../assests/GetWellImg/img3.jpg');
new GetWell('entertatment2', '../assests/GetWellImg/img4.jpg');
new GetWell('cookies', '../assests/GetWellImg/img5.jpg');
new GetWell('sweets', '../assests/GetWellImg/img6.jpg');
new GetWell('cookies2', '../assests/GetWellImg/img7.jpg');
new GetWell('chocolate', '../assests/GetWellImg/img8.jpg');
new GetWell('chocolate2', '../assests/GetWellImg/img10.jpg');
new GetWell('fullKit', '../assests/GetWellImg/img11.jpg');
new GetWell('frutes', '../assests/GetWellImg/img12.jpg');
new GetWell('toy', '../assests/GetWellImg/img13.jpg');
new GetWell('skincare', '../assests/GetWellImg/img14.jpg');
new GetWell('book', '../assests/GetWellImg/img15.jpg');
new GetWell('showerKit', '../assests/GetWellImg/img16.jpg');
new GetWell('fullKit2', '../assests/GetWellImg/img17.jpg');
new GetWell('skincare2', '../assests/GetWellImg/img18.jpg');
new GetWell('icecream', '../assests/GetWellImg/img19.jpg');
new GetWell('chocolate3', '../assests/GetWellImg/img20.jpg');
new GetWell('box', '../assests/GetWellImg/img21.jpg');


var submit = document.getElementById('sub-form'); 

submit.addEventListener('click',result);

function result (event){


    event.preventDefault();
    
    // console.log('test submit');

// console.log(event);
 sweets = document.getElementById('sweets'); // need to be changed 
 others = document.getElementById('others');// need to be changed 

// all statments need to be changed OR refactored 
if (sweets.checked===true && others.checked===true){
    for (var i=0 ; i<GetWell.prototype.allGetWellGifts.length;i++){
        
// display all images in christmas img folder     

    }
}else if (sweets.checked===false && others.checked===true){
    for (var i=0 ; i <GetWell.prototype.allGetWellGifts.length ; i++){
        if (GetWell.prototype.allGetWellGifts.giftBranch== 'others'){

// display images which are holding others category 

        }
    }
}
else if (sweets.checked===true && others.checked===false ){
    for (var i=0 ; i < Eid.prototype.allEidGifts.length ; i++){
        if (GetWell.prototype.allGetWellGifts.giftBranch== 'sweets'){

      // display images which are holding the sweets category 

    }
}
}
}


function Birthday  ( giftBranch, giftSourse) {
    this.gifBranch = giftBranch;
    this.giftSourse = giftSourse;
    Birthday.prototype.allEidGifts.push(this);
}

Birthday.prototype.allBirthdayGifts = [];

new Birthday ('accessories', '../assests/birthdayproducts/img(1).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(1).png');
new Birthday ('sweets', '../assests/birthdayproducts/img(2).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(2).png');
new Birthday ('accessories', '../assests/birthdayproducts/img(3).jpg');
new Birthday ('makeup', '../assests/birthdayproducts/img(3).png');
new Birthday ('boxes', '../assests/birthdayproducts/img(4).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(5).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(6).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(7).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(8).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(9).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(10).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(11).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(12).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(13).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(14).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(15).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(16).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(17).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(18).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(19).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(20).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(21).jpg');
new Birthday ('others', '../assests/birthdayproducts/img(22).jpg');
new Birthday ('accessories', '../assests/birthdayproducts/img(23).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(24).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(25).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(26).jpg');
new Birthday ('boxes', '../assests/birthdayproducts/img(27).jpg');
new Birthday ('others', '../assests/birthdayproducts/img(28).jpg');
new Birthday ('others', '../assests/birthdayproducts/img(29).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(30).jpg');
new Birthday ('sweets', '../assests/birthdayproducts/img(31).jpg');



var submit = document.getElementById('sub-form'); 

submit.addEventListener('click',result);

function result (event){


    event.preventDefault();
    
    // console.log('test submit');

// console.log(event);
 sweets = document.getElementById('sweets'); // need to be changed 
 others = document.getElementById('others');// need to be changed 

// all statments need to be changed OR refactored 
if (sweets.checked===true && others.checked===true){
    for (var i=0 ; i<GetWell.prototype.allGetWellGifts.length;i++){
        
// display all images in christmas img folder     

    }
}else if (sweets.checked===false && others.checked===true){
    for (var i=0 ; i <GetWell.prototype.allGetWellGifts.length ; i++){
        if (GetWell.prototype.allGetWellGifts.giftBranch== 'others'){

// display images which are holding others category 

        }
    }
}
else if (sweets.checked===true && others.checked===false ){
    for (var i=0 ; i < Eid.prototype.allEidGifts.length ; i++){
        if (GetWell.prototype.allGetWellGifts.giftBranch== 'sweets'){

      // display images which are holding the sweets category 

    }
}
}
}


function MotherDay (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    MotherDay.prototype.allMotherDayGifts.push(this); 
}

MotherDay.prototype.allMotherDayGifts = []; 

new MotherDay ('figure','../assets/MothersDayImg/img1.jpg');
new MotherDay ('box','../assets/MothersDayImg/img2.jpg');
new MotherDay ('box','../assets/MothersDayImg/img3.jpg');
new MotherDay ('decore','../assets/MothersDayImg/img4.jpg');
new MotherDay ('decore','../assets/MothersDayImg/img5.jpg');
new MotherDay ('box','../assets/MothersDayImg/img6.jpg');
new MotherDay ('decore','../assets/MothersDayImg/img8.jpg');
new MotherDay ('accessory','../assets/MothersDayImg/img9.jpg');
new MotherDay ('box','../assets/MothersDayImg/img10.jpg');
new MotherDay ('clothes','../assets/MothersDayImg/img11.jpg');
new MotherDay ('citchen','../assets/MothersDayImg/img12.jpg');
new MotherDay ('box','../assets/MothersDayImg/img13.jpg');
new MotherDay ('rose','../assets/MothersDayImg/img14.jpg');
new MotherDay ('citchen','../assets/MothersDayImg/img15.jpg');
new MotherDay ('decore','../assets/MothersDayImg/img16.jpg');

function NewPorn (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    NewPorn.prototype.allNewPornGifts.push(this); 
}

NewPorn.prototype.allNewPornGifts = []; 

new NewPorn ('carriage','../assets/NewBornImg/img1.webp');
new NewPorn ('clothes','../assets/NewBornImg/img2.jpg');
new NewPorn ('box','../assets/NewBornImg/img3.jpg');
new NewPorn ('box','../assets/NewBornImg/img4.jpg');
new NewPorn ('box','../assets/NewBornImg/img5.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img6.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img7.jpg');
new NewPorn ('box','../assets/NewBornImg/img8.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img9.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img10.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img11.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img12.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img13.webp');
new NewPorn ('clothes','../assets/NewBornImg/img14.jpg');
new NewPorn ('box','../assets/NewBornImg/img2.jpeg');
new NewPorn ('clothes','../assets/NewBornImg/img16.jpg');
new NewPorn ('clothes','../assets/NewBornImg/img17.jpg');

function Graduation (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    Graduation.prototype.allGraduationGifts.push(this); 
}

Graduation.prototype.allGraduationGifts = []; 

new Graduation ('hangings','../assets/graduations products/img-1.jpg');
new Graduation ('cups','../assets/graduations products/img-2.jpg');
new Graduation ('cups','../assets/graduations products/img-3.png');
new Graduation ('hangings','../assets/graduations products/img-4.jpg');
new Graduation ('cups','../assets/graduations products/img-5.png');
new Graduation ('decore','../assets/graduations products/img-6.jpg');
new Graduation ('hangings','../assets/graduations products/img-7.jpg');
new Graduation ('box','../assets/graduations products/img-8.jpg');
new Graduation ('figure','../assets/graduations products/img-9.jpg');
new Graduation ('figure','../assets/graduations products/img-10.jpg');
new Graduation ('hangings','../assets/graduations products/img-11.jpg');
new Graduation ('hangings','../assets/graduations products/img-12.jpg');
new Graduation ('hangings','../assets/graduations products/img-13.jpg');
new Graduation ('sweet','../assets/graduations products/img-14.jpg');
new Graduation ('sweet','../assets/graduations products/img-15.jpg');
new Graduation ('cups','../assets/graduations products/img-16.jpg');
new Graduation ('sweet','../assets/graduations products/img-17.jpg');
new Graduation ('box','../assets/graduations products/img-18.jpg');
new Graduation ('decore','../assets/graduations products/img-19.jpg');
new Graduation ('decore','../assets/graduations products/img-20.jpg');


function NewHome (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    NewHome.prototype.allNewHomeGifts.push(this); 
}

NewHome.prototype.allNewHomeGifts = []; 

new NewHome ('hangings','../assets/homeImage/img-1.jpg');
new NewHome ('hangings','../assets/homeImage/img-2.jpg');
new NewHome ('hangings','../assets/homeImage/img-3.jpg');
new NewHome ('hangings','../assets/homeImage/img-4.jpg');
new NewHome ('hangings','../assets/homeImage/img-5.jpg');
new NewHome ('hangings','../assets/homeImage/img-6.jpg');
new NewHome ('hangings','../assets/homeImage/img-7.jpg');
new NewHome ('hangings','../assets/homeImage/img-8.jpg');
new NewHome ('hangings','../assets/homeImage/img-9.jpg');
new NewHome ('hangings','../assets/homeImage/img-10.jpg');
new NewHome ('hangings','../assets/homeImage/img-11.jpg');
new NewHome ('hangings','../assets/homeImage/img-12.jpg');
new NewHome ('hangings','../assets/homeImage/img-13.jpg');
new NewHome ('hangings','../assets/homeImage/img-14.jpg');
new NewHome ('hangings','../assets/homeImage/img-15.jpg');
new NewHome ('hangings','../assets/homeImage/img-16.jpg');
new NewHome ('hangings','../assets/homeImage/img-17.jpg');


function NewYear (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    NewYear.prototype.allNewYearGifts.push(this); 
}

NewYear.prototype.allNewYearGifts = []; 

new NewYear ('sweetBox','../assets/NewYearIMG/img 1.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 2');
new NewYear ('sweetBox','../assets/NewYearIMG/img 3.jpg');
new NewYear ('sweetBox','../assets/NewYearIMG/img 4.jpg');
new NewYear ('sweetBox','../assets/NewYearIMG/img 5.jpg');
new NewYear ('sweetBox','../assets/NewYearIMG/img 6.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 7.jpg');
new NewYear ('card','../assets/NewYearIMG/img 8.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 9.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 10.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 11.jpg');
new NewYear ('rose','../assets/NewYearIMG/img 12.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 13.jpg');
new NewYear ('sweetBox','../assets/NewYearIMG/img 14.jpg');
new NewYear ('giftBox','../assets/NewYearIMG/img 15.jpg');
new NewYear ('sweetBox','../assets/NewYearIMG/img 16.jpg');
new NewYear ('sweetBox','../assets/NewYearIMG/img 17.jpg');


function Ramadan (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    Ramadan.prototype.allRamadanGifts.push(this); 
}

Ramadan.prototype.allRamadanGifts = []; 

new Ramadan ('hangings','../assets/RamadanImage/img-1.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-2.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-3.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-4.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-5.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-6.jpg');
new Ramadan ('dalleh&tammer','../assets/RamadanImage/img-7.jpg');
new Ramadan ('dalleh&tammer','../assets/RamadanImage/img-8.jpg');
new Ramadan ('dalleh&tammer','../assets/RamadanImage/img-9.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-10.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-11.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-12.png');
new Ramadan ('hangings','../assets/RamadanImage/img-13.jpg');
new Ramadan ('dalleh&tammer','../assets/RamadanImage/img-14.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-15.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-16.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-17.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-18.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-19.jpg');
new Ramadan ('hangings','../assets/RamadanImage/img-20.jpg');


function Valentine (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    Valentine.prototype.allValentineGifts.push(this); 
}

Valentine.prototype.allValentineGifts = []; 

new Valentine ('box','../assets/valentineIMG/img 1.jpg');
new Valentine ('box','../assets/valentineIMG/img 2.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 3.jpg');
new Valentine ('figure','../assets/valentineIMG/img 4.jpg');
new Valentine ('figure','../assets/valentineIMG/img 5.jpg');
new Valentine ('gift','../assets/valentineIMG/img 6.jpg');
new Valentine ('rose','../assets/valentineIMG/img 7.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 8.jpg');
new Valentine ('box','../assets/valentineIMG/img 9.jpg');
new Valentine ('box','../assets/valentineIMG/img 10.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 11.jpg');
new Valentine ('gift','../assets/valentineIMG/img 12.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 13.jpg');
new Valentine ('gift','../assets/valentineIMG/img 14.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 15.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 16.jpg');
new Valentine ('sweet','../assets/valentineIMG/img 17.jpg');
new Valentine ('gift','../assets/valentineIMG/img 18.jpg');
new Valentine ('gift','../assets/valentineIMG/img 19.jpg');
new Valentine ('gift','../assets/valentineIMG/img 20.jpg');
new Valentine ('box','../assets/valentineIMG/img 21.jpg');


function Wedding (giftBranch,giftSourse){
    this.giftBranch = giftBranch; 
    this.giftSourse = giftSourse;
    Wedding.prototype.allWeddingGifts.push(this); 
}

Wedding.prototype.allWeddingGifts = []; 

new Wedding ('box','../assets/weddingIMG/img 1.jpg');
new Wedding ('box','../assets/weddingIMG/img 2.jpg');
new Wedding ('box','../assets/weddingIMG/img 3.jpg');
new Wedding ('wood','../assets/weddingIMG/img 4.jpg');
new Wedding ('box','../assets/weddingIMG/img 5.jpg');
new Wedding ('wood','../assets/weddingIMG/img 6.jpg');
new Wedding ('box','../assets/weddingIMG/img 7.jpg');
new Wedding ('box','../assets/weddingIMG/img 8.png');
new Wedding ('wood','../assets/weddingIMG/img 9.jpg');
new Wedding ('box','../assets/weddingIMG/img 10.jpg');
new Wedding ('wood','../assets/weddingIMG/img 11.jpg');
new Wedding ('perfume','../assets/weddingIMG/img 12.jpg');
new Wedding ('box','../assets/weddingIMG/img 13.jpg');
new Wedding ('wood','../assets/weddingIMG/img 14.jpg');
new Wedding ('plates','../assets/weddingIMG/img 15.jpg');
new Wedding ('box','../assets/weddingIMG/img 16.jpg');
new Wedding ('box','../assets/weddingIMG/img 17.jpg');
new Wedding ('box','../assets/weddingIMG/img 18.jpeg');









