window.onload = choosePic;

var myPix = new Array("../images/gal_0.jpeg","../images/gal_1.jpeg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
