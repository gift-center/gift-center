'use strict';

var infoArray=[];

var divCard = document.getElementById('main-div');
// var divContainer = document.getElementsByClassName('card');

// divCard.appendChild(divContainer);



function Information(name, paragraph, source){
    this.name= name;
    this.paragraph= paragraph;
    this.source= source;

    infoArray.push(this);
}

new Information('Aseel Albanna', 'A computer engineer that likes coding and learning new programming languages.',
 'assests/people/aseel.jpg');

new Information('Farhan Ayyash', 'I am a Civil engineer, 23 years old. I am a hard worker and I can work under pressure. I have good experience as a software developer.',
'assests/people/farhan.jpg');

new Information('Izz Eldeen Alqawasmeh', 'paragraph', 'assests/people/izzeldeen.jpg');
new Information('Raghad Mustafa', 'paragraph', 'assests/people/raghad.jpg');
new Information('Sameh Almasri', 'paragraph', 'assests/people/sameh.jpg');

renderLeftCards();

function renderLeftCards(){
    for (var i=0; i<infoArray.length; i++){
        var divContainer = document.createElement('div');
        var personalImage = document.createElement('img');
        divCard.appendChild(divContainer);
        divContainer.appendChild(personalImage);
        personalImage.src = infoArray[i].source;

        var textDiv = document.createElement('div');
        var textName = document.createElement('h3');
        var introduction = document.createElement('p');

        divContainer.appendChild(textDiv);

        textDiv.appendChild(textName);
        textDiv.appendChild(introduction);

        textName.textContent = infoArray[i].name;
        introduction.textContent = infoArray[i].paragraph;

        divContainer.style.marginTop= '5%';
        divContainer.style.textAlign= 'center';
        divContainer.style.padding= '2px 16px';

        textName.style.color= 'white';
        textName.style.fontFamily= 'Caveat';
        textName.style.fontStretch= 'condensed';
        textName.style.letterSpacing= '0.3em';
        textName.style.fontSize= 'xx-large';
        textName.style.fontWeight= 'bolder';

        introduction.style.fontFamily= 'Balsamiq Sans';
        introduction.style.lineHeight= '1.5em';
        introduction.style.color= 'rgb(219, 183, 139)';
        introduction.style.fontSize= 'large';
          }
          console.log('Hiiiiiiiiiiii');
          console.log(infoArray);
      
    }
    

