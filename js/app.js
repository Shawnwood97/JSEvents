function mouseOverEvent(eventDetails) {
  // console.log(eventDetails);
  h1Hover.style.background = "red";
  h1Hover.style.color = "purple";
  h1Hover.innerText = "ARE YOU TRIGGERED BY MY COLOR CHOICES?!";
}

function mouseClickEvent(eventDetails) {
  // console.log(eventDetails);
  h2Click.innerText = "Be Careful..... :)";
}

function spacePress(keyPress) {
  // console.log(eventDetails);
  let music = new Audio("/images/lol.mp3");
  let imageSpace = document.getElementById("image");
  if (keyPress.code === "Space") {
    imageSpace.style.display = "block";
    music.play();
  }
}

let h1Hover = document.getElementById("mouse_hover");
let h2Click = document.getElementById("mouse_click");

h1Hover.addEventListener("mouseover", mouseOverEvent);

h2Click.addEventListener("click", mouseClickEvent);

document.body.addEventListener("keydown", spacePress);
