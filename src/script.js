// FORMAT DATE
function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  // Format Day of Week
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let wkDay = days[date.getDay()];
  // Format Months
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  // Format Day of Month
  let dayOfMonth = date.getDate();
  // Display Result
  return `${wkDay} ${month} ${dayOfMonth}`;
}

// FORMAT TIME
function formatTime(timestamp) {
  let time = new Date(timestamp);
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

// DISPLAY FORECAST MODULE
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
    <div class="col text-center">
        <p class="forecast-date">${formatDay(forecastDay.dt)}</p>
        <img src="http://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png" alt="" width="50"></img>
        <div class="forecast-temeratures">
            <p>
                <span id="min-temp">${Math.round(forecastDay.temp.min)}°</span>/
                <span id="max-temp"><strong>${Math.round(
                  forecastDay.temp.max
                )}°</strong></span>
            </p>
        </div>
     </div>
    `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "abc5d83b930b4cfc5fadea2d9d454df8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

// DISPLAY REAL DATA
function displayData(response) {
  // Reference Data
  console.log(response.data);

  // Temperature
  let temperatureElement = document.querySelector("#tempValue");
  cTemp = response.data.main.temp;
  temperatureElement.innerHTML = Math.round(cTemp);

  // City
  let cityElement = document.querySelector("#cityTitle");
  cityElement.innerHTML = response.data.name;

  // Description
  let descriptionElement = document.querySelector("#weatherDesc");
  descriptionElement.innerHTML = response.data.weather[0].description;

  // Date
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt);

  // Time
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatTime(response.data.dt * 1000);

  // Wind
  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = response.data.wind.speed;

  // Icon
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

// Search Logic

function searchCity(city) {
  let apiKey = "abc5d83b930b4cfc5fadea2d9d454df8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayData);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchInput").value;
  searchCity(city);
}

// TOGGLE F/C
function displayF(event) {
  event.preventDefault();
  let tfTemp = (cTemp * 9) / 5 + 32;
  cLink.classList.remove("active");
  fLink.classList.add("active");
  let temperatureElement = document.querySelector("#tempValue");
  temperatureElement.innerHTML = Math.round(tfTemp);
}

function displayC(event) {
  event.preventDefault();
  let tcTemp = cTemp;
  fLink.classList.remove("active");
  cLink.classList.add("active");
  let temperatureElement = document.querySelector("#tempValue");
  temperatureElement.innerHTML = Math.round(tcTemp);
}

// GLOBAL VARIABLES

let cTemp = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let fLink = document.querySelector("#degF");
fLink.addEventListener("click", displayF);

let cLink = document.querySelector("#degC");
cLink.addEventListener("click", displayC);

searchCity("Toronto");
