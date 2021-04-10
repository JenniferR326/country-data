"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const getCountryData = function (country) {
  const request = new XMLHttpRequest(); //Object
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    const html = `
<article class ="country">
<img class="country_img" src="${data.flag}" />
<div class ="country_data">
<h3 class="country_name">${data.name}</h3>
<p>Current Population: ${data.population.toLocaleString()}</p>
<p>🗣Language: ${data.languages[0].name}</p>
<p>💰Currency: ${data.currencies[0].name}</p>

</div>
</article>
`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData("usa");
