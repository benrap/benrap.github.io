var validPics = {"anner": 1, "ben": 1, "gal": 2, "itay": 3, "omri": 2, "yakir": 1, "ofek": 2, "ariel": 2};
var validVids = {"yoav": 1};

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
          
           var pic = false;
           var vid = false;

           if(memeName in validPics) {
              pic = true;
           }
           if (memeName in validVids) {
              vid = true;
           }
     } else {
     }
}

function RunMeme(name, pic, vid) {
     if(pic && vid && Math.random > 0.5) {
          chooseVid(name);
     } else if(pic){
          choosePic(name);
     } else {
          chooseVid(name);
     }
}

function chooseVid(name) {
     var numFiles = validVids[name];
     
     var randomNum = Math.floor(Math.random() * numFiles);
     document.getElementbyId("pic").parent.remove(document.getElementbyId("pic"));
     document.getElementById("vid").src = "src/videos/" + name + "/" + randomNum;
}

function choosePic(name) {
     var numFiles = validPics[name];
     
     var randomNum = Math.floor(Math.random() * numFiles);
     document.getElementbyId("vid").parent.remove(document.getElementbyId("vid"));
     document.getElementById("pic").src = "src/pictures/" + name + "/" + randomNum;
}
