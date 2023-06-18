(function(){
    'use strict';

let score=20;
let highScore=0;
let secretNumber=Math.trunc(Math.random()*20)+1;

const displayMsg=function(msg){
    document.querySelector('.message').textContent=msg;
};

// document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click',function (){
    const guess=Number(document.querySelector('.guess').value);   
   if(!guess){
        displayMsg("No Number :("); 
        document.querySelector('body').style.backgroundColor="#d63c3c";
   }


   else if(guess===secretNumber){

    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector('.number').style.width="30rem";
    document.querySelector('.number').textContent=secretNumber;
    if(score>highScore){
        highScore=score;
    document.querySelector('.highscore').textContent=highScore;
    }
    displayMsg("Correct Number! :)");
   }

   else if(guess!==secretNumber){
    if(score>1){
        let msg="";
        // displayMsg((guess>secretNumber)?"Too High!!":"Too Low!!");

        if(guess>secretNumber){
            if(guess>=secretNumber+5)
                msg="Too High!!";
            else
                msg="High!";
        }
        else if(guess<secretNumber){
            if(guess<=secretNumber-5)
                msg="Too Low!!";
            else
                msg="Low!";
        }
        displayMsg(msg);

        document.querySelector('.score')
        score-=1;
        document.querySelector('body').style.backgroundColor="#222";
        }
        else{
            displayMsg("You Lost the game :( ");
            if(score===1)
            score-=1;
            document.querySelector('body').style.backgroundColor="#d63c3c";
        }
   }
    document.querySelector('.score').textContent=score;

});

document.querySelector('.again').addEventListener('click',function(){

    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value='';
    document.querySelector('.score').textContent=score;
    displayMsg("Start guessing...");
});

//Rule Box Animation---

$('.acRuleBox').hide();

$('.ruleBoxIcon').click(function(){
    $('.ruleBoxIcon').hide('normal');
    $('.acRuleBox').show('swing');
    $('.again').hide();
    $('.crossBtn').click(function(){
        $('.again').show();
        $('.acRuleBox').hide('swing');
        $('.ruleBoxIcon').show('normal');
    })
})

//Background-animation

// DOM selectors
const stars = document.getElementById('stars');
const starsCtx = stars.getContext('2d');
const slider = document.querySelector(".slider input");
const output = document.querySelector("#speed");

// global variables
let screen, starsElements, starsParams = { speed: 2, number: 300, extinction: 4 };

// run stars
setupStars();
updateStars();

// handle slider
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
    starsParams.speed = this.value;
};

// update stars on resize to keep them centered
window.onresize = function() {
    setupStars();
};

// star constructor
function Star() {
    this.x = Math.random() * stars.width;
    this.y = Math.random() * stars.height;
    this.z = Math.random() * stars.width;

    this.move = function() {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
            this.z = stars.width;
        }
    };

    this.show = function() {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (stars.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (stars.width / this.z);
        y = y + screen.c[1];
        rad = stars.width / this.z;
        opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

        starsCtx.beginPath();
        starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
    }
}

// setup <canvas>, create all the starts
function setupStars() {
    screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
    };
    window.cancelAnimationFrame(updateStars);
    stars.width = screen.w;
    stars.height = screen.h;
    starsElements = [];
    for (let i = 0; i < starsParams.number; i++) {
        starsElements[i] = new Star();
    }
}

// redraw the frame
function updateStars() {
    starsCtx.fillStyle = "black";
    starsCtx.fillRect(0, 0, stars.width, stars.height);
    starsElements.forEach(function (s) {
        s.show();
        s.move();
    });
    window.requestAnimationFrame(updateStars);
}

})();





