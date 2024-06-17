'use strict';

const onat = {
  id: 2207080990,
  name: `Onat`,
  surname: `Arslan`,
  friends: [`Rugi`, `Coni`, `Cano`, `Ado`],
};

console.log(onat.id);
console.log(onat.name);
console.log(onat.surname);

onat.friends.forEach((el, i, arr) => {
  console.log(`Friend name is : ${el} and index of ${el} is ${i}`);
});

console.log(
  onat.friends.reduce((acc, el, i, arr) => {
    return acc + el;
  }, `This function will concat all names`)
);
