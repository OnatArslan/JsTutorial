/*
let js = 'amazing';
console.log(40 + 20 + 54);

let firstName = 'Ruya';
let lastName = 'Cataroglu';
// Variable name conventions
console.log(firstName);
console.log(lastName);
*/


// let a = true;
// let userName = 'Onat'
// if(typeof userName === 'string'){
//     console.log('a degeri true dondurdu');
//     console.log(typeof a); // typeof will return the type of a :)
//     console.log(typeof userName);
//     console.log(typeof 13);
// }

// let cars = ['bmw', 'mercedes', 'volvo']
// cars.push('opel')
// cars.forEach(i => {
//     console.log(i);
// });

/*
let number1 = 12;
const numberConstant = 90;
let num;
number = 30;
num = 19000;
// numberConstant = 19 constant variables can not change ant this line of code will give an error!!!

console.log(number);  // 30
console.log(numberConstant);  // 90
console.log(num);


let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];   

for(i of arrays){       
    console.log(i);
}
*/

// Assigments operators
/*
let x = 10;

x += 20;
x -= 13;
x *= 2;
x++;
x--;
console.log(x);
*/
/*
const currentYear = 2024;
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;

const jonas = "I'm " + firstName +', a ' + birthYear + ' years old and my job is ' + job
console.log(jonas);

const newJonas = `I'm ${firstName}, a ${job} and I'm ${currentYear - birthYear} years old`;
console.log(newJonas);
console.log(`Just a regular strings`);
*/
/*
const age = 23;
const isLegit = age >= 18;

if(isLegit){
    console.log(`Sarah can get a driver licanse ❤️`);
}else{
    console.log(`Sarah can take driver licanse ${18 - age} years later`);
}
*/


// Logical operators

const hasDriverLicanse = true // A
const hasGoodVision = false //B

console.log(hasDriverLicanse && hasGoodVision);
console.log(hasDriverLicanse || hasGoodVision);


// Switch statement
/*
const day = `legit`
switch (day) {
    case `Monday`:
        console.log(`This day is monday`);
        break;
    case `Tuesday`:
        console.log(`This day is tuesday`);
        break
    default:
        console.log(`I don't know this day`);
        break;
}
*/

// Ternary operator
const number = 2
const message = number > 8 ? `number greater than 8` : `number less than 8 `;
console.log(message);


console.log(`I would like a cup of ${number > 10 ? `tea`:`wine`}`)