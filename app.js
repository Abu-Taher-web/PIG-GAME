/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,roundScores,activePlayer, gamePlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function ( ) {
if (gamePlaying) {

        // 1. we have to generate random number between 1 to 6
        var dice = Math.floor(Math.random()*6 + 1);

        //2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; 
        diceDOM.src = 'dice-' + dice + '.png';
    
        //3.updating score
        if (dice !== 1) {
            //add value to ther current value when dice value is grater than 1
            roundScores += dice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScores;
        } else {
            //when one roll 1 then it is next players turn
            nextPlayer();
        }
}
})




document.querySelector('.btn-hold').addEventListener('click', function(){

    if (gamePlaying){
         //add round score with main score
scores[activePlayer] += roundScores;

//update UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//check anyone wins
if(scores[activePlayer] >= 100){

    //replace player name by winner
    document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';

    //add winner class
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

    //remove active class
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    // dice off
    document.querySelector('.dice').style.display = 'none';

    gamePlaying = false;

}
else{
    //change to next player
    nextPlayer();
}

}

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScores = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init )


function init(){
scores =[0,0];
roundScores = 0;
activePlayer = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');



}




















