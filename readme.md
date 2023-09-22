let gameOver = `
<div class = "gameOver">
<span class = "winner_text">Game over</span>
<button class = "btn_restart">Restart</button>
</div>
`




if(playerScore.innerHTML == 5){
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    wrapper.innerHTML = gameOver;
 }
else if(computerScore.innerHTML == 5){
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    wrapper.innerHTML = gameOver;
}
else{
    game()
}
