var validPics = {"anner": ["0.png"], "ben": ["0.png"], "gal": ["0.jpg", "1.jpg"], "itay": ["0.png", "1.png"], "omri": ["0.png", "1.jpg"], "yakir": ["0.png"], "ofek": ["0.jpg", "1.jpg"], "ariel": ["0.png", "1.jpg"]};
var validVids = {"yoav": ["0.mp4"], "yoni": ["0.mp4"], "gal": ["0.mp4"]};

window.onload = checkIfMeme;

function checkIfMeme() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var animalName;
     
	console.log(path);
    console.log(page);
     
	if(path.substring(0,path.lastIndexOf("/")) == "/memes") {
	  
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
        if(vid || pic) {
            RunMeme(memeName, pic, vid);
        }
     }
}

function RunMeme(name, pic, vid) {
    if(pic && vid && Math.random() > 0.5) {
        chooseVid(name);
    } else if(pic){
        choosePic(name);
    } else {
        chooseVid(name);
    }
}

function chooseVid(name) {
    var numFiles = validVids[name].length;
     
    var randomNum = Math.floor(Math.random() * numFiles);
    document.getElementById("pic").parentNode.removeChild(document.getElementById("pic"));
    document.getElementById("vid").src = "src/videos/" + name + "/" + validVids[name][randomNum];
}

function choosePic(name) {
    var numFiles = validPics[name].length;
     
    var randomNum = Math.floor(Math.random() * numFiles);
    document.getElementById("vid").parentNode.removeChild(document.getElementById("vid"));
    document.getElementById("pic").src = "src/pictures/" + name + "/" + validPics[name][randomNum];
}
