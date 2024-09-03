function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search");
  let cityName = document.querySelector("#cityName");
  cityName.innerHTML = `${cityInput.value}`;
}

let search = document.querySelector("#current-city-forms");
search.addEventListener("submit", searchCity);
