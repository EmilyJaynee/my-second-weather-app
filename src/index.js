function searchCity() {
  event.preventDefault();
  let cityInput = document.querySelector("#search");
  let cityName = document.querySelector("#city");
  cityName.innerHTML = `${cityInput.value}`;
}

let search = document.querySelector("#current-city-forms");
search.addEventListener("submit", searchCity);
