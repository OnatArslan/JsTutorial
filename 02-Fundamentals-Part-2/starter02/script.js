// 'use strict';
// let message = `HOME`
// console.log(`hello mama I'm back ${message}`);

// let hasDriversLicanse = false;
// const passTest = true;

// if(passTest){
//     hasDriversLicanse = true;
// }

// if (hasDriversLicanse) {
//     console.log(`I can drive a car`);    
// }

// Functions ---------------------------------------------------------------------------------------
function sayHi(name){
    console.log(`My name is ${name}`);
}
// Running or invoking function or simply using
sayHi('Onat')
sayHi('Rugi')
sayHi('Coni')

// function fruitProcessor(apples, oranges){
//     console.log(`Juice with ${apples} apples and ${oranges} oranges.`);
//     const juice = `Juice with ${apples} apples and ${oranges === 0 ? `zero` : oranges} oranges.`; // this is a ternary operator
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // Functions 2 ---------------------------------------------------------------------------------------
function calculateAge1(birthYear){
    const currentYear = 2024;
    const personsAge = currentYear - birthYear;
    return `Your birth year is ${birthYear} and you are ${personsAge} years old...`
}
const myAge = calculateAge1(2001);
console.log(myAge);

// Anonymous function
const calculateAge2 = function(birthYear){
    const currentYear = 2024;
    const personsAge = currentYear - birthYear;
    return `Your birth year is ${birthYear} and you are ${personsAge} years old...`
}

const yourAge = calculateAge2(2004);
console.log(yourAge);

// Arrow functions
const calculateArrow = birthYear => `Your birth year is ${birthYear} and you are ${2024 - birthYear} years old...`;
console.log(calculateArrow(2000));


const yearsUntilRetirement = (firstName, surname, birthYear, currentYear) => {
    const fullName = `${firstName} ${surname}`
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return `${fullName} you are retire ${retirement} years later`
}
const retirementAge = yearsUntilRetirement(`Onat`, `Arslan`, 2002, 2024);
console.log(retirementAge);


// Function call another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(oranges, apples) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${oranges === 0 ? `zero` : orangePieces} oranges and ${apples === 0 ? `zero` : applePieces} apples`;
    return juice;
}

const juice2 = fruitProcessor(3, 2);
console.log(juice2);

// Challange 5 --------------------------------------------

// This function will calculate average score for matchs
const calcAverage = (firstScore, secondScore, thirdScore) =>{ 
    return (firstScore + secondScore + thirdScore) / 3;
}
// This function check the score and returns the winner team,if there isn't any winner it will return string
const checkWinner = (scoreDolphins, scoreKoalas) =>{
    if(scoreDolphins >= 2*scoreKoalas){
        return `Winner is Dolphins______Dolph = ${scoreDolphins} and Coalas = ${scoreKoalas}`;
    }else if(scoreKoalas >= 2*scoreDolphins){
        return `Winner is Koalas______Dolph = ${scoreDolphins} and Coalas = ${scoreKoalas}`;
    }else{
        return `There is not any winner Dolph = ${scoreDolphins} and Coalas = ${scoreKoalas}`;
    }
}
// calculate scors and assign as a variables
const scoreDolphins1 = calcAverage(44, 23, 71);
const scoreKoalas1 = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(200, 34, 200);
// Check winner and log to console
console.log(checkWinner(scoreDolphins1, scoreKoalas1));
console.log(checkWinner(scoreDolphins2, scoreKoalas2));

// Arrays ------------------------------------------------------------------------------------

// For loop with 2dimensional array
const cars = [[`volvo`, `fiat`, `mercedes`],[`bmw`, `toyota`]];
for(let i = 0; i < cars.length; i++){
    for(let j = 0; j < cars[i].length; j++){
        console.log(cars[i][j]);
    }
}

// const friends = ['Steve', 'Onat', 'Rugi', 'Mahmut'];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// console.log(friends.length); // This will write number of elements in friends array
// console.log(friends[friends.length - 1]); // This will return last element of array

// friends[0] = 'OnderKolpa';
// for (let index = 1; index <= friends.length; index++) {
//     const element = friends[friends.length - index]; // This code will be reverse the array elements and log them to console
//     console.log(element);
// }

// console.log(friends.slice(1, 3));  // This will slice array but important thing is that, 3. index is not log to console, [1, 3) this work like this 3 not included

// // friends = [`bob`, `alice`] we can not do this only change with functions or indexing


// const onat = [`Onat`, `Arslan`, 2001, 2024 - 2001 >= 18 ? `adult` : `child`, friends] // This ternary operator will give adult result becase of the age
// console.log(onat);


const calcAge = birthYearr => {
    console.log(2024 - birthYearr);
    return 2024 - birthYearr
}

const years = [1990, 1967, 2002, 2010, 2018];

// map function like python
years.map(element =>{
    calcAge(element);
})

// element will be array elements end for each element this block of code will be executed
years.forEach(element =>{
    calcAge(element);
})

// Array methods


const friends = ['Steve', 'Onat', 'Rugi', 'Mahmut'];

// push() method will add element end of the array
friends.push('Ahmet')// ['Steve', 'Onat', 'Rugi', 'Mahmut', 'Ahmet']

// unshift() method will ad element beginning of the array
friends.unshift(`Caner`) // ['Caner', 'Steve', 'Onat', 'Rugi', 'Mahmut', 'Ahmet']

// pop() method remove last element of array
friends.pop() // ['Caner', 'Steve', 'Onat', 'Rugi', 'Mahmut']

// shift() method will remove first element of the array
friends.shift()

// indexOf() method will return index of the given element
console.log(friends.indexOf(`Onat`)); // Onat is 1. index of array
console.log(friends.indexOf(`memo`)); // Because of memo is not element of friends array it will return -1

// includes() method will control element in array if element in array it will return true else false
console.log(friends.includes('Onat')); // true
console.log(friends.includes('Selim')); // false

console.log(friends); 


// Challenge 6 ------------------------------------------------------------

const calculateTip = totalBill =>{
    let tip = 0;
    if (totalBill <= 0) {
        console.log(`Total bill can not be smaller than 0 $`);
    } return totalBill >= 50 && totalBill <= 300 ? totalBill * 0.15 : totalBill * 0.2;  // Ternary operator
}

const bills = [125, 555, 44];
const tips = [];
bills.forEach(ele =>{
    tips.push(calculateTip(ele))
})

const total = [];
for(let i = 0; i < bills.length ; i++){
    total.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(total);


// Objects ------------------------------------------------------------------------------------------------------------------------

const onat = {
    name : `Onat`,
    surname : `Arslan`,
    birthYear : 2002,
    age : 2024 - 2002,
    city : `Mugla`,
    job : `Backend Developer`,
    fullName: function() {
         return `${this.name} ${this.surname}`
    },
    friends: [`Rugi`, `Onder`, `Mahmut`]
};

// // This is another way
// console.log(onat[`name`]);
// console.log(onat[`surname`]);
// console.log(onat[`age`]);
// console.log(onat[`job`]);


// // This is good way for reach properties because of the function properties like fullName()
// console.log(onat.name);
// console.log(onat.surname);
// console.log(onat.age);
// console.log(onat.job);
// console.log(onat.fullName());  fullname is not property this is a function just like python properties

// const question = prompt(`What do you want the know about Onat? Chose between name, surname, age, job, city?`)
// console.log(onat.question); This line of code won't work

// console.log(onat[question]);  This will work fine


onat.country = `Turkey`;
onat[`twitter`] = `@onatArs`;

console.log(onat);


// . notation and [] notation usage you must use . notation if [] not neccesary
console.log(`${onat.name} has ${onat[`friends`].length} friends, and his best friend is ${onat.friends[0]}`)

for (const key in onat) {
    console.log(onat[key]);
}