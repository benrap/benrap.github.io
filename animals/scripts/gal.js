window.onload = choosePic;

var path = window.location.pathname;
var page = path.split("/").pop();
var name = page.substring(0, page.length - 5);

var myPix = new Array("pictures/" + name + "/0.jpeg","pictures/" + name + "/1.jpeg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     console.log(randomNum);
     console.log(name);
     document.getElementById("pic").src = myPix[randomNum];
}
