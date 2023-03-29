
document.getElementById("mainTitle").innerText = "point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";


const offsetCharacter =16;

const sec= 1000;

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
    
   console.log(e.target.id);

    switch(e.target.id){
        case "house1":
           // characterAudio.play(); 
            showSpeech(mainCharacterSpeech,characterAudio,"this is not your house bozo");
            break;
        case "house2":
            //sonething insert here
            showSpeech(mainCharacterSpeech,characterAudio,"this is not your house bozo");
            break;
        case "tree1":
            //sonething insert here
            showSpeech(mainCharacterSpeech,characterAudio,"yes this tree is green");
            break;
        default:
            // do something when it doesn't have a case
            hideSpeech();
            break;

    }
    // console.log(x);
}

function showSpeech(targetBubble, targetAudio, dialog){
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialog;
    targetAudio.currentTime = 0;
    targetAudio.play(); 
    //stop after 4 seconds the dialog bubble and audio
    setTimeout(hideSpeech, 4 * sec);
}

function hideSpeech(){
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerHTML = "...";
  //  characterAudio.pause();
}

