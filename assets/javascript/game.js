window.onload = function(){
var wins = 0;
var losses = 0;
var left = 10;
var guessed = [];
var playerG = "";
var keyboard = "abcdefghijklmnopqrstuvwxyz";


var compG = keyboard[Math.floor(Math.random()*keyboard.length)];

document.onkeypress = function (event){
    playerG = event.key;
    guessed.push(playerG);

if(compG==playerG){
    wins++;
    guessed = [];
    left = 10;
    alert("You Win!");
    update();
} else {
    left--;
    update();
    if(left==0){
        losses++;
        guessed = [];
        alert("You lost!");
        update();
    }
}
};

function update(){
document.getElementById("wins").textContent = "Wins: " + wins;
document.getElementById("losses").textContent = "Losses: " + losses;
document.getElementById("left").textContent = "Guesses left: " + left;
document.getElementById("guessed").textContent = guessed;
}

};