'use strict';
// ------------------------------------- NOT WITH PROJECT ONLY ARRAYS AND METHODS
const arr = [`a`, `b`, `c`, `d`, `e`];
// slice() method (first argument is the starting index and the second argument is the ending index (not included))
console.log(arr.slice(1, 3)); // [ 'b', 'c' ]

console.log(...arr); // a b c d e (spread operator) - used to pass multiple values into a function

// splice() method (first argument is the starting index, the second argument is the number of elements to delete)
arr.splice(-1); // deletes the last element
arr.splice(1, 4); // deletes elements from index 1 to 4
console.log(arr); // [ 'a' ]

const arrr = [`j`, `i`, `h`, `g`, `f`];

console.log(arrr.reverse()); // reverse() method will reverse the array
console.log(arrr); // original array reversed

// forEach() method (iterates over each element in the array)
arr.forEach(function (element) {
  console.log(element);
});

// map() method (creates a new array with the results of calling a provided function on every element in the array)
const arr2 = arr.map(function (element) {
  return element.toUpperCase();
});
console.log(arr2); // [ 'A', 'B', 'C', 'D', 'E' ]

// filter() method (creates a new array with all elements that pass the test implemented by the provided function)
const arr3 = arr.filter(function (element) {
  return element !== 'c';
});
console.log(arr3); // [ 'a', 'b', 'd', 'e' ]

// reduce() method (applies a function against an accumulator and each element in the array to reduce it to a single value)
const sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// find() method (returns the first element in the array that satisfies the provided testing function)
const foundElement = arr.find(function (element) {
  return element === 'b';
});
console.log(foundElement); // b

// some() method (tests whether at least one element in the array passes the test implemented by the provided function)
const hasPositiveNumber = arr.some(function (element) {
  return element > 0;
});
console.log(hasPositiveNumber); // true

// every() method (tests whether all elements in the array pass the test implemented by the provided function)
const allPositiveNumbers = arr.every(function (element) {
  return element > 0;
});
console.log(allPositiveNumbers); // false

// includes() method (determines whether an array includes a certain element)
const includesElement = arr.includes('c');
console.log(includesElement); // true

// flat() method (creates a new array with all sub-array elements concatenated into it recursively up to the specified depth)
// default depth is 1
const arr4 = [1, 2, [3, 4, [5, 6]]];
console.log(arr4.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

// sort() method (sorts the elements of an array in place and returns the sorted array)
const arr5 = [4, 2, 5, 1, 3];
arr5.sort();
console.log(arr5); // [ 1, 2, 3, 4, 5 ]

// join method join to array element into a string with given parameter
const arr6 = [`Onat`, `Rugi`, `Coni`];
const strArr6 = arr6.join(` - `);
console.log(strArr6); // Onat - Rugi - Coni => this is string

// at() methot
const newArr = [23, 11, 12];
console.log(newArr[0]); // This is old way

console.log(newArr.at(0)); // this is nicer version :)

console.log(newArr[newArr.length - 1]); // This is so ugly

console.log(newArr.slice(-1)[0]); // This is also traditional way

console.log(newArr.at(-1)); // This one give last element with more elegant way ALSO WORK ON STRINGS

const myName = `Onat`;
console.log(myName.at(-1)); // This give us last el t
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements -----------------------------------------------------------------------------
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

///////////////////////////////////////////////// -------------------------------------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// This is loop array with for of loop, index,element syntax
for (const [index, element] of movements.entries()) {
  if (element > 0) {
    console.log(`You deposited ${element}--- index = ${index}`);
  } else {
    console.log(`You withdrew ${element}--- index = ${index}`);
  }
}
console.log(`----------------------FOREACH---------------------`);
// This is loop array with forEach method
// first parameter is element
// second element is index
// third element is array itself
// el i arr pattern is best
// THERE IS NOT BREAK OR CONTINUE STATEMENT IN FOREACH BECAUSE OF FOREACH IS NOT LOOP BUT FUNCTION
movements.forEach((element, index, array) => {
  if (element > 0) {
    console.log(`You deposited ${element}--- index = ${index}`);
    // console.log(array); This will write to consol  [200, 450, -400, 3000, -650, -130, 70, 1300]
  } else {
    console.log(`You withdrew ${element}--- index = ${index}`);
  }
});

// ------------------------------------------- FOREACH WITH MAP AND SETS -------------------------------------------
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`key is = ${key} and value is = ${value}`);
  // console.log(map); This will write the console whole map
});

// Set
const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} and ${value}`);
  // console.log(set); This is write whole set
});
