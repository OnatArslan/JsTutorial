'use strict';
// Declare DOM objects
// player 1 total score and current score
const score0El = document.getElementById(`score--0`); // These are  DOM elements not the real score
const current0El = document.getElementById(`current--0`);
// player 2 total score and current score
const score1El = document.getElementById(`score--1`);
const current1El = document.getElementById(`current--1`);
// dice and buttons
const diceEl = document.getElementsByClassName(`dice`)[0];
const buttonNew = document.querySelector(`.btn.btn--new`);
const buttonRoll = document.querySelector(`.btn.btn--roll`);
const buttonHold = document.querySelector(`.btn.btn--hold`);
// player elements
const player0El = document.querySelector(`.player.player--0`);
const player1El = document.querySelector(`.player.player--1`);

// First time the game upload and newgame button
// Real Data
let currentScore = 0;
let activePlayer = 0;
// Data for total score
const scores = [0, 0]; // player 1 is scores[0] and player 2 is scores[1]
let playing = true;

const init = function () {
  scores[0] = 0;
  scores[1] = 0;
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--active`);
  player0El.classList.add(`player--active`);
  diceEl.classList.add(`hidden`);
};

init();

// Starting conditions
// score settings
score0El.textContent = 0;
score1El.textContent = 0;
// hide the dice DOM image
diceEl.classList.add(`hidden`);

const switchPlayer = function () {
  // set current score to zero
  currentScore = 0;
  // set player(whics is activeplayer) currentscoreEl to currentscore
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // change active player if 1 to 0, if 0 to 1
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle() method add class if class does not exist but it will remove class if class exist
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Roll dice button function---------------------------------------------
buttonRoll.addEventListener(`click`, function () {
  if (playing) {
    // 1 generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //Real data for dice
    // 2 display the dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    // 3 check for dice rolled 1 if true switch next player
    if (dice !== 1) {
      // if dice not 1
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener(`click`, function () {
  if (playing) {
    // 1- add current score to active players score
    scores[activePlayer] += currentScore; // if player 0 scores[0] elif player 1 scores[1]
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if score >= 100, someone win the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add(`hidden`);
      console.log(`Player${activePlayer} won!!!!!`);
      // add winner theme for winner :)
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      // remove active player css
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      //   if no one win this block will executed
    } else {
      switchPlayer(); // Function at line 31...
    }
  }
});

buttonNew.addEventListener(`click`, init);
