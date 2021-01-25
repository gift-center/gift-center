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










