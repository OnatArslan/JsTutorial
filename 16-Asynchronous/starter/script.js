'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = ``) {
  const html = ` <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} ${+data.population >= 1000000 ? `M` : `T`}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.EUR.name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

// NEW AND MODERN VERSION WITH FETCH
const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request); // Return promise

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`Country can't founded`);
      }
      return response.json();
    })
    .then(function (data) {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(response => {
          return response.json();
        })
        .then(neighbour => {
          renderCountry(neighbour[0], `neighbour`);
        });
    });
};

btn.addEventListener(`click`, () => {
  getCountryData(`asdsd`);
});

// const getCountrAndNeighborData = country => {
//   // AJAX counry call 1
//   const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener(`load`, () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);
//     // Get neighbor country
//     const [neighbor] = data.borders;
//     if (!neighbor) return;
//     // AJAX CALL2
//     const request2 = new XMLHttpRequest();
//     request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener(`load`, () => {
//       const [data2] = JSON.parse(request2.responseText);
//       console.log(data2);
//       renderCountry(data2, `neighbour`);
//     });
//   });
// };

// getCountrAndNeighborData(`germany`);

// Building promise -----------------------------

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lotter draw is happening`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You WIN`);
    } else {
      reject(new Error(`You last your money dumbass`));
    }
  }, 1000);
});

lotteryPromise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  const [data] = await res.json();
  console.log(data);
};

whereAmI(`portugal`);
console.log(`hello madifaki`);
