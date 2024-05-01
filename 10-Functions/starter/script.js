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
console.log(
  `----------------------------------------------------------------------------`
);

// Call and apply methods
const thy = {
  airline: `Turk hava yollari`,
  iataCode: `THY`,
  bookings: [],
  book(flightNumber, passName) {
    console.log(
      `${passName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`,
      passName
    );
    this.bookings.push(
      {
        flight: `${this.iataCode}${flightNumber}`,
      },
      passName
    );
  },
};
thy.book(239, `Onat Arslan`);
thy.book(635, `John Doe`);
console.log(thy.bookings);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

// SUMMARY if we want function and this function includes this keyword, we use call method and
// SUMMARY give any object as a first parameter and function understand usege of this keyword based on our first parameter.
const book = thy.book;
// book(23, `Sarah Smith`); Does not work

// call(object,parameter1,parameter2,parameterN)
// object parameter says use this function based on this object
book.call(eurowings, 23, `Sarah Smith`); // If we want a method call based on object and (this) keyword use call method
console.log(eurowings.bookings);

book.call(thy, 249, `Adnan Senses`);
console.log(thy.bookings);

// This does not have book method but we use it
const swiss = {
  airline: `Swiss Airline`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 313, `Aslan Osman`);
console.log(swiss.bookings);

// apply() method is same as call() method but apply() method accepts array data of parameters like apply(objectName, arrayData)

const flightData = [583, `George Cooper`];
book.apply(swiss, flightData);
console.log(swiss.bookings);

const newData = [199, `Ruya Cataroglu`];
// Nice and new way
book.call(swiss, ...newData);
console.log(swiss.bookings);

console.log(
  `----------------------------------------------------------------------------`
);

// BIND is more important than others
// bind() method  ---------------------------------------------------------------------------------
// bind() method will return new method based on parameterized object and we can use this function
const euroBook = book.bind(eurowings);
euroBook(999, `Ahmet Kaya`);
console.log(eurowings.bookings);

console.log(`-----------------------------------------`);

const thyBook = book.bind(thy);
thyBook(111, `Samet Kurt`);
console.log(thy.bookings);

console.log(`-----------------------------------------`);

// Here below we give default parameter
const swissBook = book.bind(swiss, 222); // 222 is defoult that because below we only need give name parameter
swissBook(`Guray Corum`);
console.log(swiss.bookings);

// With Event Listeners
thy.planes = 2; // 2 planes
eurowings.planes = 1;
const buyPlane = function () {
  this.planes += 1;
  console.log(this);
};

const buyButtonEl = document.querySelector(`.buy`);
buyButtonEl.addEventListener(`click`, buyPlane.bind(thy)); // If we use without bind this keywod meand document because of the EventListener function based on buyButtonEL

// Partial application

const addTax = (rate, value) => {
  return value + value * rate;
};
console.log(addTax(0.2, 100));

const portugalAddTax = addTax.bind(null, 0.23); // If there is no object and this keyword we can use bind method like bind(null, defPar1, defParN)
const myTaxInPortugal = portugalAddTax(2300);
console.log(myTaxInPortugal); // 2929

// Challange
const chalFunctionReturnOther = function (rate) {
  return function (value) {
    console.log((value += value * rate));
    return (value += value * rate);
  };
};

const portugalTaxFunction = chalFunctionReturnOther(0.23);
portugalTaxFunction(2000);
