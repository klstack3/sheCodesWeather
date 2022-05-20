// 1. √ Include the JavaScript file provided in your project
// 2. √ When loading your project, ask the user "Enter a city"(example: Paris)
// 3. √ Alert "It is currently 19°C (66°F) in Paris with a humidity of 80%"
// 4. √ If the city doesn't exist in the object (i.e: Sydney), alert "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney". Since this is an alert, the link shouldn't be clickable.
// 5. √ Add this behavior to your project and submit the CodeSandbox URL
// 6. √ Note: Please round the values in the Alert to the nearest whole number (no decimal points, e.g. 5.45 should be rounded to 5).

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city...");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let cTemperature = Math.round(temperature);
  let fTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${cTemperature}°C (${fTemperature}°F) in ${city} with a humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
