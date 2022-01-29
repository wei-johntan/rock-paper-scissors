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
    return choices[computerChoice];

}

/*
Write a function that plays a single round of rock paper scissors. The function should take two parameters - the playerSelection and 
computerSelection and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".
*/

// Write a function that takes two parameters - The playerSelection and computerSelection and then return a string that declares the winner 
// of the wround.
function playRound (playerSelection, computerSelection){

    // This holds the players choice and makes it uppercase so that it doesn't matter what case the person puts their answer in.
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();

    if(playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        return "You Win! Rock beats Scissors";
    }
    else if(playerChoice === 'ROCK' && computerChoice === 'PAPER'){
        return "You Lose! Paper beats Rock";
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        return "You Win! Paper beats Rock";
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        return "You Lose! Paper beats Rock";
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        return "You Win! Scissors beats Paper";
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'ROCK'){
        return "You Lose! Rock beats Scissors";
    }
    else{
        return "It's a draw!";
    }
}


/*
Write a new function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and 
reports a winner or loser at the end.
*/

function game(){
    // score for the player
    let playerScore = 0;
    // score for the computer
    let computerScore = 0;
    // the amount of rounds played (counter)
    let rounds = 1;

    while(rounds <= 5){
        if()
    }
}