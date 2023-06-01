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
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width="15rem";

});

//Rule Box Animation---

$('.fadeoutbox').click(function(){
    $('#box').fadeOut('normal');

});
$('.fadeinbox').click(function(){
    $('#box').fadeIn('2000','swing');
});

$('.acRuleBox').hide();

$('.ruleBoxIcon').click(function(){
    $('.ruleBoxIcon').hide('normal');
    $('.acRuleBox').show('swing');
    $('.crossBtn').click(function(){
        $('.acRuleBox').hide('swing');
        $('.ruleBoxIcon').show('normal');
    })
})
})();



