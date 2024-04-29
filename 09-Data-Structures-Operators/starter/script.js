'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructiring an Array
const arr = [2, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];

const [x, y, z, v] = arr; // Original array not effected
console.log(x, y, z, v);

const [first, second, third] = restaurant.categories; // Array lenght can be 3 but it will take only first two elements
console.log(first, second, third);
// If we want only take 1 and 3 we use
let [one, , three] = restaurant.categories;
[one, three] = [three, one]; // change two variables each other
console.log(one, three);

const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);

const nested = [2, 3, [5, 7]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values

const [p, q, r] = [8, 9];
console.log(p, q, r); // Third element wil be undefined ant this will work fine , we can use it for learn array lenght

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Destructuring Objects
const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
restaurant2.orderDelivery({
  time: `22:30`,
  adress: `Via del Sole 21`,
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting a default data
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating values
let an = 111;
let bn = 900;

const obj = { an: 23, bn: 14 };
({ an, bn } = obj);
console.log(an, bn);

const {
  fri: { open: friOpen, close: friClose },
} = openingHours;

console.log(friOpen, friClose);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Spread operator (...)

const arrayy = [7, 8, 9];
// Bad typing
const badArray = [1, 2, arrayy[0], arrayy[1], arrayy[2]];
// Good typing
const goodArray = [1, 2, ...arrayy];

console.log(...goodArray); // (...) operator will expand the iterable(array, string)

const newMenu = [...restaurant2.mainMenu, `Gnocci`];
console.log(...newMenu);

// Coppy array with (...)
const copyMainMenu = [...restaurant.mainMenu];
console.log(...copyMainMenu);

// Join two arrays
const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...allMenu);

// Iterables are arrays, string, maps, sets. NOT object
const myName = `Onat Arslan`;
const newArray = [...myName]; // (...) operators work on iterables

// const ingredients = [
//   prompt(`Lets make pasta!
// Ingredient 1?`),
//   prompt(`Lets make pasta!
// Ingredient 2?`),
//   prompt(`Lets make pasta!
// Ingredient 3?`),
// ];
// console.log(...ingredients);

// restaurant2.orderPasta(...ingredients); // This function take 3 args but we can spread the array and give one arg

// Objects
const newRestourant = {
  ...restaurant2,
  founder: `Gustavo Fring`,
  city: `Paris`,
};

// Spread operator (...)
const spreadArr = [1, 2, 3, 4, 5];

const [l, f, ...others] = spreadArr;
console.log(others);

// Rest pattern, just like python *args
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(el => {
    sum += el;
  });
  return sum;
};

const total = add(1, 2, 3, 4, 143);
console.log(total);

// we can use add() function like that
const arrayMine = [1, 1222, 6767, 999];
const totalSum = add(...arrayMine); // We use (...) operator and unpack all elements in arrayMine and give to rest pattern of sum() function
console.log(totalSum);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Short circuit && or ||

// They can use ANY data type, can return any datatype

console.log(3 || `Jonas`); // It will return 3 which truthy number

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// nullish coalescing operator (??)

// It will return false only null and undefined variables
// restaurant.guessCount = 0;
const manyGuest = restaurant.guessCount ?? 10;
console.log(manyGuest);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
const rest1 = {
  name: `Capri`,
  numGuest: 20,
};
const rest2 = {
  name: `La pizza`,
  owner: `Giovoni Rosso`,
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

rest1.numGuest ??= 10; // If null or undefined assign 10 to that variable
rest2.numGuest ??= 10;

console.log(rest1);
console.log(rest2);

// -------------------------------------------------------------
// for of loop

const rugiArray = [1, 2, 3, 4, 5, 6, 3, 3, 2, 1, 1, 2, 3, 4, 1];

// This is defoult for of loop
for (let element of rugiArray) {
  console.log(element);
}
console.log(`-----------------------------------`);
// But what if we want index like for(let i = 0) loop
// rugiArray.entries will give us [index, element] and if we give element[0] we get index, else if we give element[1] we get element
// Array destructring
for (let [index, element] of rugiArray.entries()) {
  console.log(index, element);
}

// optional chaning (.?)
const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant3.openingHours.fri.open); // It will give an error because of openingHours.mon do not exist
// We need two if blocks to avoid this error but there is a smarter move

console.log(restaurant3.openingHours.mon?.open); // If openingHours.mon exist give but not exist do not give error just give undefined

// for of loop with Objects

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`In ${day} we are open at ${open} and close at ${close}`);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Maps

const rest = new Map();
rest.set(`name`, `Classico Itelliano`);
rest.set(1, `Firenze, Italy`);
rest.set(2, `Lisbon, Portugal`);
rest.set(`countries`, [`Turkey`, `England`, `Portugal`, `Itali`, `Paraguay`]);
console.log(rest.get(`name`)); // It is same as python dict opject

// Convert objects to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration of map
for (const [key, value] of rest) {
  console.log(key, value);
}
