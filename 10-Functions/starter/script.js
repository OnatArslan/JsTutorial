'use strict';

const bookingArray = [];
// Defoult parameters
const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = numPassangers > 100 ? 350 : 500
) {
  // This is defoult parameter

  //   numPassangers = numPassangers || 1; // If numPassangers is a falsy value (0 or "" or false or undefined or null) numPassanger = 1
  //   price = price || 199;
  const booking = {
    flightNum: flightNum,
    numPassangers: numPassangers,
    price: price,
  };
  console.log(booking);
  bookingArray.push(booking);
};

createBooking(`LH123`, 18, 1000);
createBooking(`LL23`, 120);

// Call by value || call by reference ---------------------------------------------------------------------------------

const flight = `LH234`;
const onat = {
  name: `Onat Arslan`,
  passport: 22456390,
};

const checkIn = function (flightNumber, passanger) {
  flightNumber = `LH999`; // This is just a referance original flight not effected
  passanger.name = `Mr. ${passanger.name}`; // Whatever we do it to copy we actulaly do it to the ral object

  if (passanger.passport === 22456390) {
    // alert(`Check In`);
  } else {
    alert(`Wrong passport number`);
  }
};

checkIn(flight, onat);
console.log(flight);
console.log(onat);

// Function call function ---------------------------------------------------------------------------------

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const first = str.split(' ')[0];
  return str.replace(first, first.toUpperCase());
};

const transformer = function (str, func) {
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by ${func.name}`);
};

transformer(`Javascript is the best`, upperFirstWord);
transformer(`Javascript is the best`, oneWord);

// Function return function ---------------------------------------------------------------------------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey(`Onat`);

greet('Hello')(`Onat`); // greet() is a function which return other function

const arrowGreet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

arrowGreet(`Helloooo`)(`Rugi`);
