window.onload = choosePic;

var myPix = new Array("pictures/gal/0.jpeg","pictures/gal/1.jpeg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("pic").src = myPix[randomNum];
