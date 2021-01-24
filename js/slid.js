var slideIndex = 0;
carousel();

var divImage= document.getElementById('side-img');
var welcomeText= document.createElement('span');
divImage.appendChild(welcomeText);
//welcomeText.textContent = 'Gifts are the most beautiful things that any one can recieve, especially when you know what your recipient loves, likes and interested in. So, give them a gift that will really speak to them.'

welcomeText.style.fontFamily= 'Caveat, cursive';
welcomeText.style.fontSize= 'xx-large';
welcomeText.style.fontStyle= 'bolder';
//welcomeText.style.color= 'white';

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = 'block';
  setTimeout(carousel, 4000); // Change image every 2 seconds
}
