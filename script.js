
var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var letter = this.innerHTML;
    Sound(letter);
  });
}

// DETECTING KEYBOARD KEY THAT IS PRESSED
document.addEventListener("keydown", function(event) {
  Sound(event.key);
});

function Sound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      buttonAnimation('w');
      break;
    case "W":
      var audio= new Audio('sounds/tom-1.mp3');
      audio.play();
      buttonAnimation('w');
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      buttonAnimation('a');
      break;
    case "A":
      var audio= new Audio('sounds/tom-2.mp3');
      audio.play();
      buttonAnimation('a');
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      buttonAnimation('s');
      break;
    case "S":
    var audio= new Audio('sounds/tom-3.mp3');
      audio.play();
      buttonAnimation('s');
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      buttonAnimation('d');
      break;
    case "D":
      var audio= new Audio('sounds/tom-4.mp3');
      audio.play();
      buttonAnimation('d');
      break;

    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      buttonAnimation('j');
      break;
    case "J":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      buttonAnimation('j');
      break;

    case "k":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      buttonAnimation('k');
      break;
    case "K":
        var audio= new Audio('sounds/snare.mp3');
        audio.play();
        buttonAnimation('k');
        break;

    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      buttonAnimation('l');
      break;
    case "L":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        buttonAnimation("l");
        break;
    default:
      console.log(letter);

  }
}


function buttonAnimation(currentKey) 
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);

}
