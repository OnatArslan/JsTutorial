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

// ---------------------------------------- FOREACHHHH -----------------------
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
console.log(`-----------------------`);
// MAP METHOD map()
const euroToUsd = 1.1;
const movementsUSD = movements.map((mov, index) => {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

movements.forEach((element, index, arr) => {
  console.log(`${element} is located at index ${index}`);
});

// filter() METHOD
const deposits = movements.filter((el) => {
  return el > 0;
});
console.log(deposits);

// reduce() method SNOWBALL
// accumulator -> SNOWBALL
// reduce(function(acc, cur, i, arr){}, firstValueOfAccumulator)
console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`accumulator is ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

// Get the maximum value with reduce()
// reduce((accumulator, current, index, arr), defoultAccValue)
const maxMovement = movements.reduce((accumulator, current, index, arr) => {
  if (accumulator > current) {
    return accumulator;
  } else {
    return current;
  }
}, movements[0]); // defoultAcc value is first element of array
console.log(maxMovement);

// Dog challange -----------------------------------------------------------------------------------------------------
const dogData1 = [5, 2, 4, 1, 15, 8, 3];
const dogData2 = [16, 6, 10, 5, 6, 1, 4];
// Calculate Human age function
const calculateHumanAge = function name(dogData) {
  const humanData = dogData.map((data) => {
    if (data <= 2) {
      return data * 2;
    } else {
      return data * 4 + 16;
    }
  });
  return humanData;
};
// Variables of humanData arrays
const humanData1 = calculateHumanAge(dogData1);
const humanData2 = calculateHumanAge(dogData2);
// Extract Smaller than 18 years function
const extractSmaller18 = function (dogData) {
  const newData = dogData.filter(function (element) {
    return element >= 18;
  });
  return newData;
};

// Variables of extracted datas
const extractedData1 = extractSmaller18(humanData1);
const extractedData2 = extractSmaller18(humanData2);

// Calculate avarage age of dogs
const calculateAvarageAgeOfAdultDogs = (extractedData) => {
  const avarage =
    extractedData.reduce((acc, cur, index, arr) => {
      return acc + cur;
    }, 0) / extractedData.length;
  return avarage;
};
// Avarage age of adult dogs
const avarageAge1 = calculateAvarageAgeOfAdultDogs(extractedData1);
const avarageAge2 = calculateAvarageAgeOfAdultDogs(extractedData2);

// Last test
console.log(avarageAge1);
console.log(avarageAge2);
// ----------------------------------------- DOG CHALANGE END HERE ----------------------------------------------

// ------------------------------METHOD CHANING ---------------------------------------------------

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.2)
  .reduce((accumulator, current) => accumulator + current, 0);
console.log(movements);
console.log(totalDepositsUSD);

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

// find() METHOD --------------------------------------------
// find() method returns first element of given condition

const elementLess = movements.find((value, index, arr) => {
  return value < 0;
});
console.log(movements);
console.log(elementLess);
// find() method can search objects based on the objects properties
const account = accounts.find((acc) => {
  return acc.owner === `Jessica Davis`;
});
// we can do same thing with for of loop
let account5 = null;
for (let acc of accounts) {
  if (acc.owner === `Sarah Smith`) {
    account5 = acc;
  }
}
console.log(account5);
console.log(account);

// findIndex() method
const indexOfJonas = accounts.findIndex((acc) => {
  return acc.owner === `Jonas Schmedtmann`;
});
const jonas = accounts[indexOfJonas];
console.log(jonas);

// Some()method return true if any value pass the test
// Check is there any deposit bigger than 300 if yes returns true
const anyDeposits = movements.some((mov) => {
  return mov > 300;
});
console.log(anyDeposits);

// every() method return true if all the elements pass the test
// if every element of movements array bigger than -10000 returns true
const isEveryMovementBiggerThan = movements.every((mov) => {
  return mov > -10000;
});
console.log(isEveryMovementBiggerThan);

// if every element's type is Number then return true
const isEveryMovementIsNumber = movements.every((mov) => {
  return typeof mov === 'number';
});
console.log(typeof 12); // number
console.log(isEveryMovementIsNumber);

// flat() and flatMap() method
// flat() method remove nested array
// if there are 3 deep nested we must use flat(2)
const arrrr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrrr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

// flat function
const accountsMovements = accounts.map((acc) => {
  return acc.movements; //   [Array(8), Array(8), Array(8), Array(5)] this won't help us but
});
console.log(accountsMovements);
const accountMovementsSingleArray = accountsMovements.flat();
console.log(accountMovementsSingleArray);

const overalBalance = accountMovementsSingleArray.reduce(
  (accu, el, index, arr) => {
    return accu + el;
  },
  0
);
console.log(overalBalance);

// flatMap() function is map method but return flatted value
const overalBalance2 = accounts
  .flatMap((acc) => {
    return acc.movements;
  })
  .reduce((accumulator, current, index, array) => {
    return accumulator + current;
  }, 0);
console.log(overalBalance);

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

// Display Movements function ---------------------------------------------------------
const displayMovements = function (movements) {
  containerMovements.innerHTML = ``; // First we get rid of html content
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      // we set the old html to our design
      index + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html); // Then add html object to container with insertAdjacentHTML function
  });
};

// Create username function --------------------------------------------------------------
const createUsernames = function (accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map((word) => {
        return word[0];
      })
      .join(``);
  });
};
createUsernames(accounts); // username should be stw

// Balance Calculator Function --------------------------------------------------------------
// const calculateBalance = function (accounts) {
//   accounts.forEach((acc) => {
//     acc.balance = acc.movements.reduce((accumulator, current, i, arr) => {
//       return accumulator + current;
//     });
//   });
// };
const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

const calcDisplayBalance = (account) => {
  account.balance = account.movements.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
  labelBalance.textContent = `${account.balance} EUR`;
};

// Calculate and Display Summary method
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((accumulator, current) => accumulator + current);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = account.movements
    .filter((mov) => mov < 0)
    .reduce((accumulator, current) => accumulator + current);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((accumulator, current) => accumulator + current);
  labelSumInterest.textContent = `${interest}€`;
};

// LOGIN FUNCTIONALITY
let currentAccount;
// Event Handlers
btnLogin.addEventListener(`click`, function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginPin.blur();
    // Clear input fields
    inputLoginUsername.value = ``;
    inputLoginPin.value = ``;

    updateUI(currentAccount);
    console.log(`LOGIN`);
  }
});

// Transfer event handler
btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const targetUser = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // Add negative mov to currentUser and add positive mov to targetUser
  if (
    amount > 0 &&
    targetUser &&
    currentAccount.balance >= amount &&
    targetUser?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    targetUser.movements.push(amount);
    updateUI(currentAccount);
  }
});

// Close button eventHandler
btnClose.addEventListener(`click`, (e) => {
  e.preventDefault();
  // delete account
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex((acc) => {
      return acc.username === currentAccount.username;
    });
    accounts.splice(index, 1);
    // change UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
    inputCloseUsername.value = inputClosePin.value = ``;
  }
});

btnLoan.addEventListener(`click`, (e) => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => {
      return mov >= amount * 0.1;
    })
  ) {
    // Add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = ``;
  }
});

// Seperate callback
const deposit = (mov) => {
  return mov > 0;
};

const isThereAnyDeposit = movements.some(deposit);
console.log(isThereAnyDeposit);
