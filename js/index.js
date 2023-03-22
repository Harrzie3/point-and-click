
document.getElementById("mainTitle").innerText = "point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";


const offsetCharacter =16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");


gameWindow.onclick = function(e) {

   var Rect = gameWindow.getBoundingClientRect();
   var x = e.clientX - Rect.left;
   var y = e.clientY - Rect.top;
   mainCharacter.style.left = x - offsetCharacter +"px";
   mainCharacter.style.top = y - offsetCharacter + "px";
    console.log(x);


    console.log(e.target.id);

    switch(e.target.id){
        case "door1":
            characterAudio.play(); 
            console.log("this is not your house bozo");
            break;
        case "door2":
            //sonething insert here
            console.log("this is not your house bozo");
            break;
        default:
            // do something when it doesn't have a case
            console.log("bozo nothing is here");
            break;

    }
}