// document.querySelector("button").addEventListener("click",function handleClick(){
//     alert("I got clicked!")
// });

// Detectar cuando la imagen se presione
for(let i=0;i<7;i++){
    document.getElementsByTagName("button")[i].addEventListener("click",function handleClick(){
        let buttonInnerHtml = this.innerHTML
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

// Detectar cuando la tecla se presione
let keyHandler = document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            let kick = new Audio('/sounds/kick-bass.mp3');
            kick.play();
            break;
        case "a":
            let tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "s":
            let tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
            break;
        case "d":
            let tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
            break;
        case "j":
            let tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let snare = new Audio('/sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            let crash = new Audio('/sounds/crash.mp3');
            crash.play();
            break;
    
        default: console.log(buttonInnerHtml);
            
    }
}

function buttonAnimation(key){
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },150)
}

