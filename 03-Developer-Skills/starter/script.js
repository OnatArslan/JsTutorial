// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calCage = (birthYear) => 2037 - birthYear;

console.log(`helllo world`);

const measureKelvin = function () {
  const measurment = {
    type: `temp`,
    unit: `celcius`,
    value: Number(prompt(`Degrees celsius`)),
  };
  console.log(measurment.value);
  const kelvin = measurment.value + 273;
  return kelvin;
};

// A) Identify bug
console.log(measureKelvin());
