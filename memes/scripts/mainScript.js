var validNames = {"anner": 1, "ben": 1, "gal": 2, "itay": 2, "omri": 1, "yakir": 1, "ofek": 1}

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

           if(memeName in validNames) {
                console.log("the meme name is " + memeName);
              RunMeme(memeName);
           } else {
                console.log("wait thats not an meme");
              RunNormal();
           }
     } else {
          RunNormal();
     }
}

function RunNormal() {
}

function RunMeme(name) {
    choosePic(name);
}

function choosePic(name) {
     var numFiles = validNames[name];
     
     var randomNum = Math.floor(Math.random() * numFiles);
     document.getElementById("pic").src = "pictures/" + name + "/" + randomNum;
}
