// Rock-Paper-Scissor game

let userScore = 0;
let compScore = 0;
const options = document.querySelector("#options");
options.addEventListener("click", (e) => {
    console.log((e.target)['id']);
    // add switch case here for user play
});

function userPlay(userPrompt) {
    let options = ["rock","paper","scissor"];
    if (options.includes(userPrompt.toLowerCase())) {
        return options.indexOf(userPrompt);
    }
}
function computerPlay(){
    return Math.floor(Math.random()*3)
}
function playGame(rounds) {
while (rounds != 0) {
    let userPrompt = prompt("Rock, Paper, or Scissor?");
    let user = userPlay(userPrompt);
    let computer = computerPlay();
    let result = computer - user;

    if (result == -2 || result == 1) {
        console.log("Computer wins")
        updScore(3, "computer")
    } else if (result == 2 || result == -1) {
        console.log("User wins")
        updScore(3, "user")
    } else {
        console.log("Tie")
    }
    console.log("User score: "+userScore);
    console.log("Computer score: "+compScore);
    console.log("Rounds left: "+rounds)
    rounds--;
}
}
function updScore(score, player) {
    if (player === "user") {
        userScore += score;
    } else {
        compScore += score;
    }
}
let rounds = parseInt(prompt("How many rounds do you want to play?"));
playGame(rounds);