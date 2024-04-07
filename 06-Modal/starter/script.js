'use strict';

// select neccessary elements and assign variables

const modal = document.querySelector(`.modal.hidden`); // modal
const overlay = document.querySelector(`.overlay.hidden`); // hidden div
const btnCloseModal = document.querySelector(`.close-modal`); // close modal button
const btnsShowModal = document.querySelectorAll(`.show-modal`); // get 3 modal open button

// Open model function
const showModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

// function which close model
const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

// loop the modals and open one by one loop with showModal function
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener([`click`], showModal);
}

// hide modal window with closeModel function with EventListener
btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// Hide the div if Escape key pressed
// document.addEventListener(`keydown`, function (event) {
//   if (event.key === `Escape`) {
//     closeModal();
//   }
// });

// /// GLOBAL EVENTS KEYPRESS EVENTS

// funtion(event) eger eventi yazdirirsak event yaptigimiz tum hareketlerdir
document.addEventListener(`keydown`, function (event) {
  console.log(event);
  if (event.key === `Escape`) {
    if (!modal.classList.contains(`hidden`)) {
      closeModal();
    }
  }
});
