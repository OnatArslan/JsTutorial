'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountrData = country => {
//   const request = new XMLHttpRequest();

//   request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener(`load`, () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     const dataCca3 = data.cca3.toLowerCase();
//     console.log(dataCca3);
//     const html = ` <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} ${+data.population >= 1000000 ? `M` : `T`}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.EUR.name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML(`beforeend`, html);
//     countriesContainer.style.opacity = 1;
//   });
// };

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

const getCountrAndNeighborData = country => {
  // AJAX counry call 1
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener(`load`, () => {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);
    // Get neighbor country
    const [neighbor] = data.borders;
    if (!neighbor) return;
    // AJAX CALL2
    const request2 = new XMLHttpRequest();
    request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener(`load`, () => {
      const [data2] = JSON.parse(request2.responseText);
      console.log(data2);
      renderCountry(data2, `neighbour`);
    });
  });
};

getCountrAndNeighborData(`germany`);
