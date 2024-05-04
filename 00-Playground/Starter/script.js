// --------------------------------           ------------------------------------------------------------------
// --------------------------------  STARTING ------------------------------------------------------------------
// --------------------------------           ------------------------------------------------------------------

// use strict must be top of the file and it gives us good error doc. we should use it
"use strict";

// -------------------------- variablebles
// Multi variable declaration
const name = `Onat`,
  name2 = `rugi`,
  name3 = `Coni`;
// but to me use the normal version like below
const name4 = `Oni`;
const name5 = `Rugi`;
const name6 = `Coni`;

// If we want store important or difficult-to-remember values write it UPPER_CASE
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// So let use that
let blueColor = COLOR_BLUE;

// --------------------------------            ------------------------------------------------------------------
// -------------------------------- DATA TYPES ------------------------------------------------------------------
// --------------------------------            ------------------------------------------------------------------

// NaN means not a number error
console.log("not a number" / 2); // NaN, such division is erroneous

// There are 8 primitive data type
// null means nothing
// undefined means just like that
let and;
console.log(typeof a); // undefined

// ------------------------------ TYPE CONVERSIONS ---------------------------------------------------------------
// Strings
let isTrue = true;
isTrue = String(isTrue);
console.log(typeof isTrue); // string and isTrue = `true`

// Numeric
let str = `12345`;
str = Number(str);
console.log(typeof str); // number and value of str is now 12345 as number
// Here its proof
console.log(str + 1000); // result of this equal to 13345
// + prefix convertions
let numstr = `13`;
console.log(typeof +numstr); // type is number because prefix + operator will convert str to number

let numPostPre = 5;

// ------------------------------ OPERATORS ---------------------------------------------------------------
console.log(++numPostPre); // This increment num +1 and return new value (6)
console.log(numPostPre++); // This also increment num +1 but return old value (6) but value is 7 now
console.log(numPostPre); // Here value is 7

// ------------------------------ COMPERISONS ---------------------------------------------------------------
// All comperison operators return a boolean values

// the (===) operator not convert types if both type and value is equal this will return true
// but (==) operator convert types like, let a = (1 == true) this will return true because 1 is truthy value and this mean to this op. true = true

let isA = 1 === true;
console.log(isA); // This will log false
// BUT
let isB = 1 == true;
console.log(isB); // This is true because of type conversion

// --------------------------------                                ------------------------------------------------------------------
// -------------------------------- CONDITIONAL BRANCHING IF AND ? ------------------------------------------------------------------
// --------------------------------                                ------------------------------------------------------------------
/*
Falsy values in javascript are (false, 0, ``, null, undefined) 
*/

// Lets look at the (?) operator and usage

let yourAge = 20;
let legitAge = 18;

// This is a (?) ternary in java -- operator
let isDriveLegit =
  yourAge < legitAge
    ? `You can't drive a car, sorry!!`
    : `You can drive as well :)`;
console.log(isDriveLegit);

let usersAge = 17;
let usersCender = `male`;
// This is a ternary operator (?) with many ??
let sayHi =
  usersAge < 18
    ? `Hiii how are you kiddo`
    : usersAge < 100
    ? `Hello ${usersCender === `male` ? `sir` : `madam`}`
    : `What a unusal age ${usersCender === `male` ? `sir` : `madam`}`;
console.log(sayHi);
// (?) operator not same as if block, use (?) operator just for easy value initialization

// --------------------------------                                      ------------------------------------------------------------------
// -------------------------------- LOGICAL OPERATORS (OR, AND, NOT, ??) ------------------------------------------------------------------
// --------------------------------                                      ------------------------------------------------------------------

// OR(||) OPERATOR
// when use with if just like python if one operant is true then it will return true

// BUTTT

const result = 1 > 12 || 13 < 9 || 100;
console.log(result); // ==> This will log 20 but why
// When assign a value with || operator if non of the conditions are true then last operand will assignt to variable which is 20
// Summary: OR operator return first truth value if there is but there is not any truth value it will return last one

let firstName = ``;
let lastName = ``;
let nickName = `CrazyOnat`;

const userName = firstName || lastName || nickName;
console.log(userName); // ==> It will log nickName because firsName and lastName are a falsy values

// Another example
// All of them are falsy values but we want always a legit userName
let firsName1 = "";
let lastName1 = ``;
let nickName1 = ``;

const userName1 = firsName1 || lastName1 || nickName1 || `Anonymous`;
console.log(userName1); // ==> This will log Anonymous because all are falsy and last one is this

// AND(&&) OPERATOR
// It will return true when both operands are true

// AND finds the first falsy value
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

console.log(1 && 2 && null && 19); // log to console null because null is first falsy value

console.log(1 && 3 && 100); // log to console 100 because there are not any falsy values and 100 is last value

// NULLISH COALESCING OPERATOR (??)
// It is same like OR op, how it return first truthy value

// (??) Op, is return first defined value (not null or undefined) if all undefined or null return last one

const car = undefined ?? null ?? false ?? 18;
console.log(car); // It will log to console false because first defined variable is false

// As you see (??) operator is diff from OR with (0 and `` empty string)

const car1 = undefined ?? null ?? undefined ?? null;
console.log(car1); // This will log to console null because the are not any defined variable and (??) operator return last one

// The common use case for ?? is to provide a default value.
// When we take a input from an user and assignt it to variable

// Explanation code below ==> when user give you a null or undefined variable ?? operator look at the variable and pass to 18
// ==> default value is now 18 but user give 48 48 will assign to variable
const usersAgee = null ?? 18;
console.log(usersAgee);

// I explain OR and ?? operator diff in 3 lines of code
let height = 0;
console.log(height || 130); // This line of code log 130 because (0, ``, false, undefined, null) are falsy and height is now 0

console.log(height ?? 130); // This line of code log 0 because height is not undefined or null

// --------------------------------                       ------------------------------------------------------------------
// -------------------------------- LOOPS (WHILE AND FOR) ------------------------------------------------------------------
// --------------------------------                       ------------------------------------------------------------------

// lets create our range function with loop
// start to end with jump value, end not included
const range = function (start, end, jump = 1) {
  const arr = [];
  for (let i = start; i < end; i += jump) {
    arr.push(i);
  }
  return arr;
};

const arr = range(1, 13, 5);
console.log(arr);
