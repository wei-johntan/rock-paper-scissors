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

    // These if statements are all the possible outcomes that can happen with rock paper scissors

    if(playerChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        return 'win';
    }
    else if(playerChoice === 'ROCK' && computerChoice === 'PAPER'){
        return 'lose';
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'ROCK'){
        return 'win';
    }
    else if(playerChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        return 'lose';
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        return 'win';
    }
    else if(playerChoice === 'SCISSORS' && computerChoice === 'ROCK'){
        return 'lose';
    }
    else{
        return 'tie';
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
    // rounds played counter;
    let rounds = 0;
    // results of the round in an array
    let resultsArr = [];

    // This loop essentially plays the 5 rounds
    for(let i =0; i<5; i++){
        // Player prompt to choose either rock paper or scissors
        let playerChoice = prompt('Please enter for rock paper scissors');
        // Computer randomly generators a choice of either rock paper or scissors
        let compChoice = computerPlay();
        // This variable stores the outcome of that play
        let roundResult = playRound(playerChoice, compChoice);
        // Print out the result of the play
        console.log(roundResult);
        // Appends the result into an array that stores the results of all 5 rounds
        resultsArr.push(roundResult);
    }

    // This loop essentially goes through the results array and tallies up the score for the player and the computer
    // If any of the rounds were a tie then there would be no score added to either the player or the computer
    for(let i =0; i<resultsArr.length; i++){
        if(resultsArr[i] == 'win'){
            playerScore++;
        }
        else if(resultsArr[i] == 'lose'){
            computerScore++;
        }
        else{
            computerScore+=0;
            playerScore+=0;
        }
    }
    // This essentially prints out the player and computers final score after playing 5 rounds of rock paper scissors
    console.log('Final Score: Player: ' + playerScore + " " + "Computer Score: " + computerScore);
    // This if statement prints out who won the 5 rounds of rock paper scissors by comparing the scores that we calculated earlier
    if(playerScore > computerScore){
        console.log('Congratulations, you won!');
    }
    else if(playerScore < computerScore){
        console.log('Sorry that you lost to a computer');
    }
    else{
        console.log('Its a tie');
    }
}
