window.onload = choosePic;

function choosePic() {
     var path = window.location.pathname;
     var page = path.split("/").pop();
     var name;
     if(page.lastIndexOf(".html")==page.length-5){
          name = page.substring(0, page.length - 5);
     } else {
          name = page;
     }
     var myPix = new Array("pictures/" + name + "/0.jpeg","pictures/" + name + "/1.jpeg");
     
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("pic").src = myPix[randomNum];
}
