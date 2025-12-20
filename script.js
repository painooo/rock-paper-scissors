// Rock-Paper-Scissor game

let userScore = 0;
let compScore = 0;
const options = document.querySelector("#options");
const userScoreInput = document.querySelector("#userScore");
const compScoreInput = document.querySelector("#compScore");
const victor = document.querySelector("#victor");
const userThrow = document.querySelector("#userThrow");
const compThrow = document.querySelector("#compThrow");
options.addEventListener("click", (e) => {
    let content = '*Click one of the buttons please*';
    switch((e.target)['id']){
        case('rock'):
            playGame(1);
            content='rock'
            break;
        case('paper'):
            playGame(2);
            content='paper'
            break;
        case('scissor'):
            playGame(3);
            content='scissor';
            break;
    }
    userThrow.textContent=`You: ${content}`; 
});
function computerPlay(){
    let computerPlay = Math.floor(Math.random()*3)
    compThrow.textContent=`Computer: ${["rock","paper","scissor"][computerPlay]}`;
    return computerPlay
}
function playGame(user) {
    let computer = computerPlay();
    let result = computer - user;

    if (result == -2 || result == 1) {
        console.log("Computer wins")
        victor.textContent = "Computer Wins"
        updScore(3, "computer")
    } else if (result == 2 || result == -1) {
        console.log("User wins")
        victor.textContent = "User Wins"
        updScore(3, "user")
    } else {
        console.log("Tie")
        victor.textContent = "Tie"
    }
    console.log("User score: "+userScore);
    console.log("Computer score: "+compScore);
    userScoreInput.textContent = `User Score: ${userScore}`;
    compScoreInput.textContent = `Computer Score: ${compScore}`
    
}
function updScore(score, player) {
    if (player === "user") {
        userScore += score;
    } else {
        compScore += score;
    }
}