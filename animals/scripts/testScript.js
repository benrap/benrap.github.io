var validNames = ["anner", "ben", "gal", "itay", "omri", "yakir"]

window.onload = choosePic;

function checkIfAnimal() {
     var path = window.location.pathname;
     var page = path.split("/").pop();
     var animalName;
     
     if(path.substring(0,path.lastIndexOf("/")) == "benrap.github.io/animals") {
           if(page.lastIndexOf(".html")==page.length-5 && page.length != 4){
                animalName = page.substring(0, page.length - 5);
           } else {
                animalName = page;
           }

           if(validNames.includes(animalName)) {
              RunAnimal();
           } else {
              RunNormal();
           }
     } else {
          RunNormal();
     }
}

function RunNormal() {
    var elem = document.getElementById('animalImage');
    elem.parentNode.removeChild(elem);
}

function RunAnimal() {
    document.getElementById('actual404').style.visibility="none";

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
