'use strict';

// Selecting elements
// score
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
// current score
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// Starting conditions
score0El.innerHTML = 0;
score1El.innerHTML = 0;
diceEl.classList.add('hidden');


// switch player


// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice != 1) {
        currentScore += dice;
        currentScore0El.textContent = currentScore;

    } else {

    }
    // Add dice to current score

    // Switch to next player

})











// 1. Add current score to active player's score

// scores[1] = scores[1] + currentScore



// 2. Check if player's score is >= 100

// Finish the game


// Switch to the next player