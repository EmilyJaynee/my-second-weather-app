function updateTemp(responce) {
  let cityName = document.querySelector("#cityName");
  let countryName = document.querySelector("#country");
  let liveTemperature = document.querySelector("#current-temp");
  let temperature = responce.data.temperature.current;
  let weatherCondions = document.querySelector("#condiontons");
  let time = document.querySelector("#currentTime");

  let date = new Date(responce.data.time * 1000);

  cityName.innerHTML = responce.data.city;
  countryName.innerHTML = responce.data.country;
  liveTemperature.innerHTML = Math.round(temperature);
  weatherCondions.innerHTML = responce.data.condition.description;
  time.innerHTML = formatTime(date);
}
function formatTime(date) {
  let amPm = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", amPm);
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
