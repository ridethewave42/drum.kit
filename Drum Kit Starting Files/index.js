

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       
        var buttonInnterHTML  = this.innerHTML;

        makeSound(buttonInnterHTML);

        buttonAnimation(buttonInnterHTML);

    });
}

document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) {
    switch (buttonInnterHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var audio =new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var audio =new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var audio =new Audio("sounds/kick-bass.mp3");
            kick-bass.play();
            break;

            default console.log(buttonInnterHTML); 

}
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio ('/sounds/tom-1.mp3');
   //     audio.play();




