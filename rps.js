/*
Rock Paper Scissors Game:

1.  Begin with a function called computerPlay that will randomly return either 'Rock' 'Paper' or 'Scissors'.
    We'll use this function in the game to make the computer's play. 
    TIP: use the console to make sure this is returning the expected output before moving to the next step.



*/

/* 
PSEDUOCODE STEPS:

-Create a function called computerPlay that will randomly return either 'Rock' 'Paper' or 'Scissors'

1. Createa a functions called computerPlay
*/

function computerPlay(){
    // This stores the options that the computer can choose from (So they can choose either rock paper or scissors)
    const choices = ['Rock','Paper','Scissors'];
    
    // Using the Math.Random() function we can make it so that the computer can choose from those three options in the array like so:
    let computerChoice = Math.floor(Math.random()*choices.length);
    // Returns the computers choice for either rock, paper, or scissors.
    return choices[computerChoice].toUpperCase();

}

/*
Write a function that plays a single round of rock paper scissors. The function should take two parameters - the playerSelection and 
computerSelection and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".
*/

// Write a function that takes two parameters - The playerSelection and computerSelection and then return a string that declares the winner 
// of the wround.

let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('button');

function disable(){
    buttons.forEach(button => {
        button.disabled = true;
    })
}
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

function playRound (playerChoice){

    // This holds the players choice and makes it uppercase so that it doesn't matter what case the person puts their answer in.


    let computerChoice = computerPlay();
    let result = "";
    document.getElementById("results").innerHTML = result;
    
    console.log(playerChoice);
    console.log(computerChoice);

    if(playerChoice === computerChoice){
        result = "it's a tie, play again";
        
    }
    else if((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'PAPER' && computerChoice === 'ROCK') || 
    (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')){
        playerScore +=1;
        result = 'player wins';
        if(playerScore == 5){
            result = "player wins the game!, please reload the page to play again :)";
        }
    }
    else{
        computerScore+=1;
        result = 'computer wins';
        if(computerScore == 5){
            disable();
            result = "computer wins the game!, please reload the page to play again :)";
        }
    }
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;

    document.getElementById("results").innerHTML = result;
    


    
}





