var fileList;

window.onload = choosePic;

function choosePic() {
     var path = window.location.pathname;
     var page = path.split("/").pop();
     var name;
     if(page.lastIndexOf(".html")==page.length-5 && page.length != 4){
          name = page.substring(0, page.length - 5);
     } else {
          name = page;
     }
     
     switch(name) {
          case "gal":
               fileList = ["0.jpeg", "1.jpeg"];
               break;
          case "anner":
               fileList = ["0.png"];
               break;
          case "omri":
               fileList = ["0.png"];
               break;
          case "itay":
               fileList = ["0.png"];
               break;
          case "ben":
               fileList = ["0.png"];
               break;
          case "yakir":
               fileList = ["0.png"];
               break;
     }
     
     var randomNum = Math.floor(Math.random() * fileList.length);
     document.getElementById("pic").src = "pictures/" + name + "/" + fileList[randomNum];
}
