// game variables
var choices = ["rock", "scissor", "paper"]
// here we get random number between 0-2
var randNum = Math.round(Math.random()*2)


var pointsMe = 0
var pointsComp = 0

var choicesComp = choices[randNum]

//Below will take care of the computer and my score and update it.
function score(){
    document.querySelector(".result-user").innerHTML = pointsMe
    document.querySelector(".result-comp").innerHTML = pointsComp
}

