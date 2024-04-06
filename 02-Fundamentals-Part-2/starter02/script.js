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

const friends = ['Steve', 'Onat', 'Rugi', 'Mahmut'];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

console.log(friends.length); // This will write number of elements in friends array
console.log(friends[friends.length - 1]); // This will return last element of array

friends[0] = 'OnderKolpa';
for (let index = 1; index <= friends.length; index++) {
    const element = friends[friends.length - index]; // This code will be reverse the array elements and log them to console
    console.log(element);
}

console.log(friends.slice(1, 3));  // This will slice array but important thing is that, 3. index is not log to console, [1, 3) this work like this 3 not included

// friends = [`bob`, `alice`] we can not do this only change with functions or indexing


const onat = [`Onat`, `Arslan`, 2001, 2024 - 2001 >= 18 ? `adult` : `child`] // This ternary operator will give adult result becase of the age
console.log(onat);

