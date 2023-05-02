/*jshint esversion: 6 */

// game variables
var choices = ["rock", "scissors", "paper"];

var userScore = 0;
var compScore = 0;

//Below will take care of the computer and my updateScore and update it.
function updateScore(){
    document.querySelector(".result-user").innerHTML = userScore;
    document.querySelector(".result-comp").innerHTML = compScore;
}

// function to get the element icon for a given choice
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

// function to get the computer's choice
function getComputerChoice(){
    // here we get random number between 0-2
    const randNum = Math.round(Math.random()*2);
    return choices[randNum];
}

// function to play the game with the user's choice
function game(choiceMe){
    var choiceComp = getComputerChoice();
    document.querySelector("#choice-me").innerHTML = elementIcon(choiceMe);
    document.querySelector("#choice-comp").innerHTML = elementIcon(choiceComp);

    if((choiceMe === 'paper' && choiceComp === 'rock') || (choiceMe === 'rock' && choiceComp === 'scissors') || (choiceMe === 'scissors' && choiceComp === 'paper')) {
        userScore++;
        updateScore();
        document.querySelector(".text-start").innerHTML = "You Win!";
    } else if(choiceMe === choiceComp) {
        updateScore();
        document.querySelector(".text-start").innerHTML = "It's a tie.";
    } else {
        compScore++;
        updateScore();
        document.querySelector(".text-start").innerHTML = "Computer Wins!";
    }
}

// function to restart the game
function restart(){
    userScore = 0;
    compScore = 0;
    updateScore();
    document.querySelector("#choice-me").innerHTML = "-";
    document.querySelector("#choice-comp").innerHTML = "-";
    document.querySelector(".text-start").innerHTML = "Battle Will Start Now";
    
}

// call the game() function when the user clicks on a choice button
document.querySelectorAll(".choice").forEach(function(button) {
    button.addEventListener("click", function() {
      game(button.getAttribute("data-choice"));
    });
  });
  
// call the restart() function when the user clicks on the "restart" button
document.querySelector(".btn-restart").addEventListener("click", restart);
  