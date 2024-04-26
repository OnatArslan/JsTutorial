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
