'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
const getCountryData = country => {
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);
  request.send();
};

request.addEventListener(`load`, e => {
  const [data] = JSON.parse(request.responseText);
  console.log(data);
  const articleHtml = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.fra}</p>
            <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML(`beforeend`, articleHtml);
  countriesContainer.style.opacity = 1;
});

getCountryData(`portugal`);
getCountryData(`france`);
