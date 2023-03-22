
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
}