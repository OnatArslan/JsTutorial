'use strict';

// console.log(document.querySelector(`.message`).textContent);

// // .message for class  #message for id selector and .textContent = xyz for changing the value
// document.querySelector(`.message`).textContent = `Correct Number!!!`;

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// console.log(document.querySelector(`.guess`).value);

// // .value for input fields
// document.querySelector(`.guess`).value = 22;

// variables are declared
let secretNumber = Math.floor(Math.random() * 21);
let score = 20;
let highScore = 0;

// Getters and setters for reusable code
const setMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener('click', function () {
  // We take the input and store as a Number type value
  const guess = Number(document.querySelector(`.guess`).value);

  // If guess not exist
  if (!guess) {
    setMessage(`You didn't enter a number!!!`);
    //If guess exist
  } else {
    // If guess diffrent than secret number
    if (guess !== secretNumber) {
      if (score > 1) {
        // Decriese the score
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(`.message`).textContent =
          guess > secretNumber ? `Too high` : `Too low`;
      } else {
        setMessage(`You lost the game`);
        document.querySelector(`.score`).textContent = 0;
        const body = document.getElementsByTagName(`body`)[0];
        body.style.backgroundColor = `red`;
      }

      //  if secret number = guess
    } else {
      setMessage(`You win...`);
      // Changing the css elements x.style.styleName
      const body = document.getElementsByTagName(`body`)[0];
      document.querySelector(`.number`).textContent = secretNumber;

      body.style.backgroundColor = `green`;
      document.querySelector(`.number`).style.width = `30rem`;
      if (score > highScore) {
        highScore = score;
        document.querySelector(`.highscore`).textContent = highScore;
      }
    }
  }
});

// Game reset functionality

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 21);
  document.querySelector(`.number`).textContent;
  setMessage(`StartGuessing`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.getElementsByTagName(`body`)[0].style.backgroundColor = `black`;
  document.querySelector(`.number`).style.width = `15rem`;
});
