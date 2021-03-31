// Function for mousover event
function mouseOverEvent() {
  // console.log(eventDetails);
  h1Hover.style.background = "red";
  h1Hover.style.color = "purple";
  h1Hover.innerText = "ARE YOU TRIGGERED BY MY COLOR CHOICES?!";
}
// function for click event
function mouseClickEvent() {
  // console.log(eventDetails);
  h2Click.innerText = "Something cool will happen when you press spacebar.";
}
// function for spacebar press, plays music, one of them with a timeout.
// does it make sense to have these variables inside?
function spacePress(keyPress) {
  // console.log(eventDetails);
  let music = new Audio("/images/lol.mp3");
  let music2 = new Audio("/images/lol2.mp3");
  let imageSpace = document.getElementById("image");
  if (keyPress.code === "Space") {
    imageSpace.style.display = "block";
    music.play();
    setTimeout(function () {
      music2.play();
    }, 2000);
  }
}

// variables for hover and click events
let h1Hover = document.getElementById("mouse_hover");
let h2Click = document.getElementById("mouse_click");

// event listeners that trigger the functions
h1Hover.addEventListener("mouseover", mouseOverEvent);

h2Click.addEventListener("click", mouseClickEvent);

document.body.addEventListener("keydown", spacePress);
