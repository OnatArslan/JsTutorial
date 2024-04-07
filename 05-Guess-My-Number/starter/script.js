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

const secretNumber = Math.floor(Math.random() * 21);
let score = 20;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener('click', function () {
  // We take the input and store as a Number type value
  const guess = Number(document.querySelector(`.guess`).value);

  // If guess not exist
  if (!guess) {
    document.querySelector(
      `.message`
    ).textContent = `You didn't enter a number!!!`;
    //If guess exist
  } else {
    // If guess bigger than secNumber
    if (guess > secretNumber) {
      if (score > 1) {
        // Decriese the score
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(
          `.message`
        ).textContent = `${guess} is so big try smaller number!!!`;
      } else {
        document.querySelector(`.message`).textContent = `You lost the game`;
        document.querySelector(`.score`).textContent = 0;
      }

      // If guess smaller than secNumber
    } else if (guess < secretNumber) {
      if (score > 1) {
        // decriase the score
        score--;
        document.querySelector(`.score`).textContent = score;
        document.querySelector(
          `.message`
        ).textContent = `${guess} is so small try bigger number!!!`;
      } else {
        document.querySelector(`.message`).textContent = `You lost the game`;
        document.querySelector(`.score`).textContent = 0;
      }

      // If guess is equal to secret number
    } else {
      document.querySelector(`.message`).textContent = `You win!!!!!!!!`;
      const body = document.getElementsByTagName(`body`)[0];
      body.style.backgroundColor = `green`;
    }
  }
});
