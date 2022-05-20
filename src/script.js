// ⏰ Current date and time

function dateTime() {
  let now = new Date();
  let formatDate = document.querySelector("p#date");
  let formatTime = document.querySelector("p#time");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let wkDay = days[now.getDay()];

  let day = now.getDay();
  let year = now.getFullYear();

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
  let month = months[now.getMonth()];

  formatDate.innerHTML = `${wkDay} ${month} ${day} ${year}`;

  let hrs = now.getHours();
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  formatTime.innerHTML = `${hrs}:${mins}`;
}

dateTime();

// 🕵️‍♀️ Search engine
// function displayWeatherCondition(response) {
//   document.querySelector("#cityTitle").innerHTML = response.data.name;
// }

// function search(city) {
//   let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//   let city = document.querySelector("#searchTextInput").value;
//   let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&units=metric&appid=${apiKey}`;
//   axios.get(apiURL).then(displayWeatherCondition);
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   let city = document.querySelector("#searchTextInput").value;
//   searchCity(city);
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);

function displayWeatherCondition(response) {
  document.querySelector("#cityTitle").innerHTML = response.data.name;
  document.querySelector("#tempValue").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchTextInput").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("New York");

// 🙀 F/C Toggle

// function convertC(event) {
//   event.preventDefault();
//   let cValue = document.querySelector("#tempValue");
//   cValue.innerHTML = 17;
// }

// let c = document.querySelector("#degC");
// c.addEventListener("click", convertC);

// function convertF(event) {
//   event.preventDefault();
//   let fValue = document.querySelector("#tempValue");
//   fValue.innerHTML = 60.8;
// }

// let f = document.querySelector("#degF");
// f.addEventListener("click", convertF);
