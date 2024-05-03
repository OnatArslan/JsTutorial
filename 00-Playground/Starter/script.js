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
