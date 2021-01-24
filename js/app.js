'use strict';

var imageArray=[];

var divCards= document.getElementById('main-img');
var cardDiv = document.getElementsById('card');
var cardContainer = document.getElementsById('container');

//divCards.appendChild(cardDiv);

function ImageCard(nameOfOccasion, sourceOfImage){
    this.nameOfOccasion= nameOfOccasion;
    this.sourceOfImage = sourceOfImage;
    this.clicked = 0;

    imageArray.push(this);
}

var aniversaryCard = new ImageCard('Aniversary Gifts', 'assests/occassions/aniversary.jpeg');
var birthdayCard = new ImageCard('Birthday Gifts', 'assests/occassions/birthday.jpeg');
var christmasCard = new ImageCard('Christmas Gifts', 'assests/occassions/christmas.jpeg');
var congratulationsCard = new ImageCard('Congratulations Gifts', 'assests/occassions/congratulations.jpeg');
var eidCard = new ImageCard('Eid Gifts', 'assests/occassions/eid.jpeg');
var getwellCard = new ImageCard('Get Well Gifts', 'assests/occassions/getwell.jpeg');
var graduationCard = new ImageCard('Graduation Gifts', 'assests/occassions/graduation.jpeg');
var mothersdayCard = new ImageCard('Mothers Day Gifts', 'assests/occassions/mothersday.jpeg');
var newbornCard = new ImageCard('New Born Gifts', 'assests/occassions/newborn.jpeg');
var newhouseCard = new ImageCard('New House Gifts', 'assests/occassions/newhouse.jpeg');
var newyearCard = new ImageCard('New Year Gifts', 'assests/occassions/newyear.jpeg');
var ramadanCard = new ImageCard('Ramadan Gifts', 'assests/occassions/ramadan.jpeg');
var thankyouCard = new ImageCard('Thank You Gifts', 'assests/occassions/thankyou.jpeg');
var valentinesdayCard = new ImageCard('Valentine\'s Day Gifts', 'assests/occassions/valentinesday.jpeg');
var weddingCard = new ImageCard('Wedding Gifts', 'assests/occassions/wedding.jpeg');

renderCards();

function renderCards(){

    for(var i=0; i<imageArray.length; i++){
        // Card Div
        var cardImage = document.createElement('img');
        cardDiv.appendChild(cardImage);
        cardImage.src= imageArray[i].sourceOfImage;

        var cardTitle = document.createElement('h4');
        var cardLink = document.createElement('a');

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardLink);

        cardTitle.textContent = imageArray[i].nameOfOccasion;
        cardLink.textContent = 'Order';

    }


}
