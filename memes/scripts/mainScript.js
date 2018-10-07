var validNames = ["anner", "ben", "gal", "itay", "omri", "yakir"]

window.onload = checkIfMeme;

function checkIfMeme() {
     var path = window.location.pathname;
     var page = path.split("/").pop();
     var animalName;
     
     console.log(path);
     console.log(page);
     
     if(path.substring(0,path.lastIndexOf("/")) == "/memes") {
          console.log("look, an animal!")
          
           if(page.lastIndexOf(".html")==page.length-5 && page.length != 4){
                memeName = page.substring(0, page.length - 5);
           } else {
                memeName = page;
           }

           if(validNames.includes(memeName)) {
                console.log("the meme name is " + memeName);
              RunAnimal();
           } else {
                console.log("wait thats not an animal");
              RunNormal();
           }
     } else {
          RunNormal();
     }
}

function RunNormal() {
}

function RunAnimal() {
    choosePic();
}

function choosePic() {
     var fileList;
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
               numFiles = 2;
               break;
          case "anner":
               numFiles = 1;
               break;
          case "omri":
               numFiles = 1;
               break;
          case "itay":
               numFiles = 2;
               break;
          case "ben":
               numFiles = 1;
               break;
          case "yakir":
               numFiles = 1;
               break;
          case "ofek":
               numFiles = 1;
               break;
     }
     
     var randomNum = Math.floor(Math.random() * numFiles);
     document.getElementById("pic").src = "pictures/" + name + "/" + randomNum;
}
