"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
// Welcome
// Store random number between 1-9 in a variable
// Ask user input once, if correct, print: You won and then END
// Ask user input twice, if correct, print: You won and then END
// Ask user input thrice, if correct, print: You won and then END
// Else print You lost
// Welcoming:
console.log('Welcome to "Guess the Number" game!');
var userInput = prompt('Do you want to start ("y" for yes, "n" for no) : ');
if (userInput === "y") {
    console.log('-> Guess a number between 1 - 9.');
    console.log('-> You have three turns.');
    startGame();
}
else if (userInput === "n") {
    console.log("Thank you for not playing my game!");
}
else {
    console.log("Invalid input, I hate you!");
}
// The actual game:
function startGame() {
    // Generating random number:
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    console.log(randomNumber);
    var count = 0;
    var winState = false;
    while (count < 3 && winState === false) {
        var guess = Number(prompt("Enter guess : "));
        count = count + 1;
        if (guess === randomNumber) {
            console.log("You won! Well played...");
            winState = true;
        }
        else {
            console.log("Wrong guess, try again...");
        }
    }
}
