
let scoreOne = document.querySelector('.score_one');
let wrapper = document.querySelector('.wrapper')
let scoreTwo = document.querySelector('.score_two');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let playerScore = document.querySelector('.score__player');
let computerScore = document.querySelector('.score__computer');
let winner = ''
let playerSelection = '';
let computerSelection = getComputerChoice ();
let gameOver = `
<div class = "gameOver">
<span class = "winner_text">Game over</span>
<button class = "btn_restart">Restart</button>
</div>
`


console.log(computerSelection)

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game(playerSelection, computerSelection)
}
) 
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game(playerSelection, computerSelection)
}
)
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game(playerSelection, computerSelection)} );


function refreshComputerSelection(){
    computerSelection = getComputerChoice()
    console.log(computerSelection)
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

function game(playerSelection, computerSelection){
    if(playerScore.innerHTML == 5){
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        winner = `You win!`
        wrapper.innerHTML = gameOver;
     }
    else if(computerScore.innerHTML == 5){
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        winner =` You lose!`
        wrapper.innerHTML = gameOver;
    }

        playRound(playerSelection, computerSelection)
}



function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        refreshComputerSelection()
       
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore.innerHTML++
        refreshComputerSelection()
       
    }  else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore.innerHTML++
        refreshComputerSelection()
    }
      else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore.innerHTML++
        refreshComputerSelection()
    }
      else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore.innerHTML++
        refreshComputerSelection()
    }
      else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore.innerHTML++
        refreshComputerSelection()
    }
      else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore.innerHTML++
        refreshComputerSelection()
    }
}
