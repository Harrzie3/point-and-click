
document.getElementById("mainTitle").innerText = "point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharater =16;

const mainCharater = document.getElementById("mainCharacter")
const gameWindow = document.getElementById("gameWindow")


gameWindow.onclick = function(e) {
   var Rect = gameWindow. getBoundingClientRect();
   var x = e.clientx - Rect.left;
   var y = e.clienty - Rect.top;
   mainCharater.Style.left = x + "px";
   mainCharater.Style.top = y + "px";
   // console.log(x)
}