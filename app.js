
let scoreOne = document.querySelector('.score_one');
let scoreTwo = document.querySelector('.score_two');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let playerScore = document.querySelector('.score__player');
let computerScore = document.querySelector('.score__computer');
let playerSelection = '';
let restart = document.querySelector('.restart')
let computerSelection = getComputerChoice ();
console.log(computerSelection)

game()
function restartGame(){

}
function restartGame() {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerSelection = '';
    computerSelection = getComputerChoice();
  }
  
function game() {
    rock.addEventListener('click', () => {
      playerSelection = 'rock';
      playRound(playerSelection, computerSelection);
  
      if (playerScore.innerHTML == 5 || computerScore.innerHTML == 5) {
       setTimeout(()=>{restartGame()},1300) ;
      }
    });
  
    paper.addEventListener('click', () => {
      playerSelection = 'paper';
      playRound(playerSelection, computerSelection);
  
      if (playerScore.innerHTML == 5 || computerScore.innerHTML == 5) {
        setTimeout(()=>{restartGame()},2000)
      }
    });
  
    scissors.addEventListener('click', () => {
      playerSelection = 'scissors';
      playRound(playerSelection, computerSelection);
  
      if (playerScore.innerHTML == 5 || computerScore.innerHTML == 5) {
        setTimeout(()=>{restartGame()},2000)
      }
    });
  }
  

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



function playRound(playerSelection, computerSelection) {

     if(playerScore.innerHTML == 5){
        if(playerScore.innerHTML == 5){
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            wrapper.innerHTML = gameOver;
            console.log('player win');
            
         }
        else if(computerScore.innerHTML == 5){
            playerScore.textContent = 0;
            computerScore.textContent = 0;
            wrapper.innerHTML = gameOver;
            console.log('computer win');
            
        }
    }
    else if(playerSelection === computerSelection){
        refreshComputerSelection()
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        ++playerScore.innerHTML
        refreshComputerSelection()
       
    }  else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        ++playerScore.innerHTML
        refreshComputerSelection()
    }
      else if(playerSelection === 'paper' && computerSelection === 'rock'){
        ++playerScore.innerHTML
        refreshComputerSelection()
    }
      else if(playerSelection === 'rock' && computerSelection === 'paper'){
        ++computerScore.innerHTML
        refreshComputerSelection()
    }
      else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        ++computerScore.innerHTML
        refreshComputerSelection()
    }
      else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        ++computerScore.innerHTML
        refreshComputerSelection()
    }
}