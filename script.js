let intro = document.querySelector(".intro");
let hit = document.querySelector(".hit");
let flySound = document.querySelector(".fly");
let title = document.querySelector(".title");
let fly = document.querySelector(".flyImage");
let yeah = document.querySelector(".yeah");
let ouch = document.querySelector(".ouch");
let timesKilled = 0;
document.querySelector(".points").innerHTML = timesKilled;

intro.play();
intro.loop = true;
intro.volume = 0.25;

intro.addEventListener("play", titleIntroAnimation);

function titleIntroAnimation(){
    title.classList.toggle("titleIntro");
    console.log ('intro');
    
}

title.addEventListener('animationend', titleAnimation); 

function titleAnimation() {
    title.classList.toggle("titleshake");
    console.log ('shake');
   
}


fly.addEventListener("click", flyInterval);

let theInterval;

function flyInterval (){ 
    theInterval = setInterval(moveFly, 2000); 
     fly.removeEventListener("click", flyInterval);
    fly.addEventListener('click', flyIsDead);
}

            function moveFly(){
                let xV= Math.floor(Math.random()*2050);
                let yV= Math.floor(Math.random()*1300);
            fly.style.transform = "translate("+ xV +"px,"+ yV +"px)";
                console.log ("fly moves");
                flySound.play();
                flySound.volume = 1; 
                scale();
                 
     }
        
function scale() {
  fly.classList.toggle("scaleFly");
   console.log ('scale');
}
function flyIsDead() {
    fly.removeEventListener('click', flyIsDead);
    fly.addEventListener("click", flyAgain);
    clearInterval(theInterval); 
    this.src ="pictures/deadfly.png"
console.log ('flyIsDead');
hit.play();
ouch.play();
hit.volume = 1; 
ouch.volume=1;
killCounter ();
glow();
}
 function glow(){
   fly.classList.toggle("glow");
    console.log ('glowing');
}
function flyAgain(){
    fly.removeEventListener("click", flyAgain);
    fly.addEventListener('click', flyIsDead);
    theInterval = setInterval(moveFly, 1000);
    this.src ="pictures/fly.png"
    yeah.play();
    console.log("fly again")
}

 
    function killCounter() {
        timesKilled += 1;
        document.querySelector(".points").innerHTML = timesKilled;
    }
    

setInterval(function() {

var mover = $('.flyImage'),
posX = mover.position().left,
posY = mover.position().top;

 $(window)
   .scrollLeft(posX - $(window).width() / 2)
.scrollTop(posY - $(window).height() / 2);
}, 10);
