'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Checks if 23 is strictly equal to 23.0 - both are numbers and equal, so it returns true
console.log(23 === 23.0);

// Adds 0.1 and 0.2 in floating point arithmetic, resulting in a precision issue common in many programming languages
console.log(0.1 + 0.2); // Outputs: 0.30000000000000004

// Converts a string '23' to a number using the Number constructor - not recommended due to less clarity
console.log(Number(`23`));

// Converts a string '23' to a number using the unary plus operator - preferred for its brevity and clarity
console.log(+`23`);

// Parses an integer from the string '23px' ignoring non-numeric characters after the number
console.log(Number.parseInt(`23px`, 10));

// Parses an integer from the string '432e' based on the decimal system, ignoring the trailing non-numeric character
console.log(Number.parseInt(`432e`, 10));

// Checks if the string '22313' is NaN (Not-a-Number) - returns false because '22313' is a valid number in string form
console.log(Number.isNaN(`22313`));

// Checks if converting the string 'adnan' to a number results in NaN - returns true because 'adnan' cannot be converted to a number
console.log(Number.isNaN(+`adnan`));

// Checks if 20 is a finite number - returns true because 20 is a finite number
console.log(Number.isFinite(20));

// Checks if the string '20' is a finite number - returns false because '20' is a string, not a number
console.log(Number.isFinite(`20`));

// More mathematical operations

console.log(Math.sqrt(25));

console.log(Math.max(6, 19, 23));

console.log(Math.min(6, 19, 3));

console.log(Math.PI);

const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};

console.log(randomInt(10, 14));

// Rounding integers
console.log(Math.trunc(23.3)); // Remove float part

console.log(Math.round(23.8)); // Round to nearest integer

console.log(Math.ceil(23.1)); //

console.log(Math.floor(23.9)); // Remove decimal part

// Reminder operator

console.log(5 % 2);

const isEven = num => {
  return num % 2 === 0;
};

console.log(isEven(13));

// start and end both included
const pythonRangeFunction = (start, end, jump = 1) => {
  const returnThisArray = [];
  for (let i = start; i <= end; i += jump) {
    returnThisArray.push(i);
  }
  return returnThisArray;
};

console.log(pythonRangeFunction(12, 91, 10));

// CREATING DATES -------------------------------------------------------------

// Four ways of creating dates
const now = new Date();
console.log(now);

console.log(new Date(`Mon Jun 17 2024`));

console.log(new Date(account1.movementsDates[1]));

console.log(new Date(2024, 10, 21));
console.log(`-------------------------------------------------`);
console.log(`-------------------------------------------------`);
console.log(`-------------------------------------------------`);
// Working with dates
const future = new Date(2024, 10, 21, 12, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());

console.log(future.toISOString());
console.log(future.toDateString());

console.log(future.getTime());

const currentTime = new Date(Date.now());
console.log(currentTime);

// TIMERS --------------------------

// This is a async function
const ingredents = [`olives`, `pepperoni`, `garlic`, `tomato`, `souce`];
const pizzaTimer = setTimeout(
  (...ings) => {
    console.log(`Here is your pizza with ${ings}`);
  },
  3000,
  ingredents
);
console.log(`Waiting for pizza....`);

if (ingredents.includes(`garlic`)) {
  clearTimeout(pizzaTimer);
}
