// Rock-Paper-Scissor game

let userScore = 0;
let compScore = 0;
const options = document.querySelector("#options");
const userScoreInput = document.querySelector("#userScore");
const compScoreInput = document.querySelector("#compScore");
const victor = document.querySelector("#victor");
options.addEventListener("click", (e) => {
    switch((e.target)['id']){
        case('rock'):
            playGame(1);
            break;
        case('paper'):
            playGame(2);
            break;
        case('scissor'):
            playGame(3);
            break;
    }
});
function computerPlay(){
    return Math.floor(Math.random()*3)
}
function playGame(user) {
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
    userScoreInput.textContent = `User score: ${userScore}`;
    compScoreInput.textContent = `Computer score: ${compScore}`
    
}
function updScore(score, player) {
    if (player === "user") {
        userScore += score;
    } else {
        compScore += score;
    }
}