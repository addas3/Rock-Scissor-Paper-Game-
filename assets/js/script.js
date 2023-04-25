// game variables
var choices = ["rock", "scissors", "paper"];
// here we get random number between 0-2
var randNum = Math.round(Math.random()*2);


var pointsMe = 0;
var pointsComp = 0;

var choiceComp = choices[randNum];

//Below will take care of the computer and my score and update it.
function score(){
    document.querySelector(".result-user").innerHTML = pointsMe;
    document.querySelector(".result-comp").innerHTML = pointsComp;
}

function elementIcon(object){
    if(object === 'rock'){
        return '✊';
    }
    else if(object === 'paper'){
        return '✋';
    }
    else{
        return '✌️';
    }

}

function restartComp(){
    randNum = Math.round(Math.random()*2);
    choiceComp = choices[randNum];
}

function game(choiceMe){
    document.querySelector("#choice-me").innerHTML = elementIcon(choiceMe);
    document.querySelector("#choice-comp").innerHTML = elementIcon(choiceComp);

    if(choiceMe === 'paper' && choiceComp === 'rock' || choiceMe === 'rock' && choiceComp === 'scissor' || choiceMe === 'scissor' && choiceComp === 'paper'){
        pointsMe++;
        score();
        document.querySelector(".text-start").innerHTML = "You Win!";
    }
    
    else if(choiceMe === choiceComp){
        score();
        document.querySelector(".text-start").innerHTML = "It's a tie.";
    }

    else{
        pointsComp++;
        score();
        document.querySelector(".text-start").innerHTML = "Computer Wins!";
    }

    // restart
    restartComp();

}

// below restart function
function restart(){
    pointsMe = 0;
    pointsComp = 0;
    score();
}

