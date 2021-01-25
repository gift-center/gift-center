'use strict';

// console.log('test'); 
var sweets;
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

console.log(event);
 sweets = document.getElementById('sweets');
 others = document.getElementById('others');
 budjet = document.getElementById('')

}































// new gift('eid', 'coffee', '../assests/eidproducts/img(1).jpeg');
// new gift('eid', 'sweet', '../assests/eidproducts/img(1).jpg');
// new gift('eid', 'sweet2', '../assests/eidproducts/img(1).png');
// new gift('eid', 'chocolate', '../assests/eidproducts/img(2).jpg');
// new gift('eid', 'sweet3', '../assests/eidproducts/img(2).png');
// new gift('eid', 'sweet4', '../assests/eidproducts/img(3).jpg');
// new gift('eid', 'sweet5', '../assests/eidproducts/img(4).jpg');
// new gift('eid', 'sweet6', '../assests/eidproducts/img(5).jpg');
// new gift('eid', 'sweet7', '../assests/eidproducts/img(1).jpg');
// new gift('eid', 'coffee-contaner', '../assests/eidproducts/img(7).jpg');
// new gift('eid', 'coffee-contaner2', '../assests/eidproducts/img(8).jpg');
// new gift('eid', 'sweet8', '../assests/eidproducts/img(9).jpg');
// new gift('eid', 'sweet9', '../assests/eidproducts/img(10).jpg');
// new gift('eid', 'box', '../assests/eidproducts/img(11).jpg');
// new gift('eid', 'box2', '../assests/eidproducts/img(12).jpg');
// new gift('eid', 'sweet10', '../assests/eidproducts/img(13).jpg');
// new gift('eid', 'sweet11', '../assests/eidproducts/img(14).jpg');
// new gift('eid', 'sweet12', '../assests/eidproducts/img(15).jpg');
// new gift('eid', 'coffee-contaner3', '../assests/eidproducts/img(16).jpg');

// new gift('getwell', 'hotcoca', '../assests/GetWellImg/img1.jpg');
// new gift('getwell', 'teddybear', '../assests/GetWellImg/img2.jpg');
// new gift('getwell', 'entertatment', '../assests/GetWellImg/img3.jpg');
// new gift('getwell', 'entertatment2', '../assests/GetWellImg/img4.jpg');
// new gift('getwell', 'cookies', '../assests/GetWellImg/img5.jpg');
// new gift('getwell', 'sweets', '../assests/GetWellImg/img6.jpg');
// new gift('getwell', 'cookies2', '../assests/GetWellImg/img7.jpg');
// new gift('getwell', 'chocolate', '../assests/GetWellImg/img8.jpg');
// new gift('getwell', 'chocolate2', '../assests/GetWellImg/img10.jpg');
// new gift('getwell', 'fullKit', '../assests/GetWellImg/img11.jpg');
// new gift('getwell', 'frutes', '../assests/GetWellImg/img12.jpg');
// new gift('getwell', 'toy', '../assests/GetWellImg/img13.jpg');
// new gift('getwell', 'skincare', '../assests/GetWellImg/img14.jpg');
// new gift('getwell', 'book', '../assests/GetWellImg/img15.jpg');
// new gift('getwell', 'showerKit', '../assests/GetWellImg/img16.jpg');
// new gift('getwell', 'fullKit2', '../assests/GetWellImg/img17.jpg');
// new gift('getwell', 'skincare2', '../assests/GetWellImg/img18.jpg');
// new gift('getwell', 'icecream', '../assests/GetWellImg/img19.jpg');
// new gift('getwell', 'chocolate3', '../assests/GetWellImg/img20.jpg');
// new gift('getwell', 'box', '../assests/GetWellImg/img21.jpg');




console.log(christmas.prototype.allChristamsGifts);












