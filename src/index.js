function updateTemp(responce) {
  let cityName = document.querySelector("#cityName");
  let countryName = document.querySelector("#country");
  let weatherIcon = document.querySelector("#icon");
  let liveTemperature = document.querySelector("#current-temp");
  let temperature = responce.data.temperature.current;
  let weatherCondions = document.querySelector("#condiontons");
  let time = document.querySelector("#currentTime");
  let liveDate = document.querySelector("#currentDate");
  let date = new Date(responce.data.time * 1000);

  cityName.innerHTML = responce.data.city;
  countryName.innerHTML = responce.data.country;
  weatherIcon.innerHTML = `<img src="${responce.data.condition.icon_url}" />`;
  liveTemperature.innerHTML = Math.round(temperature);
  weatherCondions.innerHTML = responce.data.condition.description;
  time.innerHTML = formatTime(date);
  liveDate.innerHTML = formateDate(date);
}
function formatTime(date) {
  let amPm = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleTimeString("en-US", amPm);
}
function formateDate(date) {
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  return `${day} ${month} ${year}`;
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
function weatherPredictions() {
  let day = ["Tue", "Wed", "Thurs", "Fri", "Sat"];
  let forcastInnerHtml = "";

  day.forEach(function (day) {
    forcastInnerHtml =
      forcastInnerHtml +
      `
        <div class="forcast-day">
          <div class="forcast-date">${day}</div>
          <div class="forcast-icon">🌞</div>
          <div class="forcast-temp">
            <span class="forcast-low-temp">20°C</span>
            <span class="forcast-high-temp">25°C</span>
            </div>
          </div>
`;
  });
  let forcast = document.querySelector("#forcast");
  forcast.innerHTML = forcastInnerHtml;
}
let search = document.querySelector("#current-city-forms");
search.addEventListener("submit", searchCity);

retrieveInfo("Brighton");

weatherPredictions();
