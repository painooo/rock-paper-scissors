// Rock-Paper-Scissor game
// A. Get user input rock, paper, or scissor
// A1. Check user input to see 
// B. Convert user option to number for easier managemnet
// C. Get computer options from 0-2
// D. rock = 0, paper = 1, scissor = 2
// E. Subtract num by each other
// E1. If -1 or 2 USER wins, if 1 or -2 COMPUTER wins
// E2. If == 0 then tie
/* 
Comp: left, User: right
rock v paper; 0 v 1 : -1 User Win
rock v scissor; 0 v 2 : -2 Computer Win
paper v scissor; 1 v 2: -1 User Win
Comp: left, User, right
paper v rock; 1 v 0: 1 Computer Win
scissor v rock; 2 v 0: 2 User Win
scissor v paper; 2 v 1: 1 Computer Win
*/
function userPlay(userPrompt) {
    let options = ["rock","paper","scissor"];
    if (options.includes(userPrompt.toLowerCase())) {
        return options.indexOf(userPrompt);
    }
}
function computerPlay(){
    return Math.floor(Math.random()*4)
}

let userPrompt = prompt("Rock, Paper, or Scissor?");
let user = userPlay(userPrompt);
let computer = computerPlay;
console.log(computer);
let result = computer - user;
console.log(result)
if (result < 0) {
    console.log("Computer wins")
} else if (result > 0) {
    console.log("User wins")
} else {
    console.log("Tie")
}