
document.getElementById("mainTitle").innerText = "point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";


const offsetCharacter =16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech")


gameWindow.onclick = function(e) {

   var Rect = gameWindow.getBoundingClientRect();
   var x = e.clientX - Rect.left;
   var y = e.clientY - Rect.top;
   mainCharacter.style.left = x - offsetCharacter +"px";
   mainCharacter.style.top = y - offsetCharacter + "px";
    


   showSpeech("yes i do")

    switch(e.target.id){
        case "door1":
            characterAudio.play(); 
            showSpeech("this is not your house bozo");
            break;
        case "door2":
            //sonething insert here
            showSpeech("this is not your house bozo");
            break;
        default:
            // do something when it doesn't have a case
            showSpeech("bozo nothing is here");
            break;

    }
    // console.log(x);
}

function showSpeech(dialog){
    mainCharacterSpeech.innerText = dialog;
}
