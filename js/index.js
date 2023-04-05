
document.getElementById("mainTitle").innerText = "point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";


const offsetCharacter =16;

const sec= 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech")

const counterSpeech =document.getElementById("counterSpeech");
const counterAudio =document.getElementById("counterAudio");
const counterCharacter =document.getElementById("counterCharacter");
let tilemapIMG = document.getElementById("tilemapIMG");

let inventory = [];
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function(e) {
  if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
   var rect = gameWindow.getBoundingClientRect();
   var x = e.clientX - rect.left;
   var y = e.clientY - rect.top;
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
        case "boat":
            if (checkItem("branch")){
                showSpeech(mainCharacterSpeech,characterAudio,"LETSSS GOOO IT'S FIXED :)");
                removeItem("branch", "branch")
            }else{
                showSpeech(mainCharacterSpeech,characterAudio,"hmmm this boat is broken");
            }
        
            break;

            case "tree1":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "dammm its just a tree");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "peepeepoopoo");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "AYO YOU TALK BITCH O.O");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, " have one of my branches maybe you need it, good luck!");
                getItem("branch", "branch");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 16* sec);
            break;

        default:
            // do something when it doesn't have a case
            
            //hideSpeech();
            break;
    }

    }
    // console.log(x);
}

function showSpeech(targetBubble, targetAudio, dialog){
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialog;
    targetAudio.currentTime = 0;
    targetAudio.play(); 
    //stop after 4 seconds the dialog bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio){
    targetBubble.style.opacity = 0 
    targetBubble.innerHTML = "...";
    targetAudio.pause(); 
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    let listItem = document.createElement("li");
    listItem.id = itemId;
    listItem.appendChild(document.createTextNode(itemName));
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();
}

function inOrOut(){

}