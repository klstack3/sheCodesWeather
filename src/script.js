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

// DISPLAY REAL DATA
function displayData(response) {
  // Reference Data
  console.log(response.data);

  // Temperature
  let temperatureElement = document.querySelector("#tempValue");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

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
}

// Get the API KEY & API URL
let apiKey = "abc5d83b930b4cfc5fadea2d9d454df8";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Milan&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayData);
