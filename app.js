
let scoreOne = document.querySelector('.score_one');
let scoreTwo = document.querySelector('.score_two');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let playerSelection = '';
let computerSelection = getComputerChoice ();
console.log(computerSelection)

rock.addEventListener('click', () => {playerSelection = 'rock'; playRound(playerSelection, computerSelection)}) 
paper.addEventListener('click', () => {playerSelection = 'paper'; playRound(playerSelection, computerSelection)})
scissors.addEventListener('click', () => {playerSelection = 'scissors'; playRound(playerSelection, computerSelection)} );

function refreshComputerSelection(){
    computerSelection = getComputerChoice()
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice () {
    if(getRndInteger(1, 3) === 1 ){
        return 'rock'
    } else if(getRndInteger(1, 3) === 2 ){
        return  'scissors'
    } else{
        return 'paper'
    }
}



function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log('player win');
        refreshComputerSelection()
       
    } else { return }
  }