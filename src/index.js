function updateTemp(responce) {
  console.log(responce.data.temperature.current);
  let liveTemperature = document.querySelector("#current-temp");
  let temperature = responce.data.temperature.current;
  let cityName = document.querySelector("#cityName");

  cityName.innerHTML = responce.data.city;
  liveTemperature.innerHTML = Math.round(temperature);
}

function retrieveInfo(city) {
  let apiKey = "19884f8731abea4oebtff3a019e58351";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateTemp);
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search");

  retrieveInfo(cityInput.value);
}

let search = document.querySelector("#current-city-forms");
search.addEventListener("submit", searchCity);

retrieveInfo("Brighton");
