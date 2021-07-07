//Detecting Mouse click//
var numberOfDeumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDeumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked");
    // var audio=new Audio("sound/tom-1.mp3");
    // audio.play();
    var butinerhtml = this.innerHTML;
    makesound(butinerhtml);
    buttonAnimation(butinerhtml);
    
  });
  
  // Detecting keyboard press//
  document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
  });


  function makesound(key){

    switch (key) {
      //alert("hi1");
      case "w":
        var tom1 = new Audio("sounds/tom-3.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-4.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-1.mp3");
        tom3.play();

      case "d":
        var tom4 = new Audio("sounds/tom-2.mp3");
        tom4.play();
        break;

      case "j":
        var tom5 = new Audio("sounds/crash.mp3");

        tom5.play();
        break;

      case "k":
        var tom6 = new Audio("sounds/kick-bass.mp3");
        tom6.play();
        break;

      case "l":
        var tom7 = new Audio("sounds/snare.mp3");
        tom7.play();
        break;
      default:
        console.log(butinerhtml);
    }
  }


  function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
  }
}
