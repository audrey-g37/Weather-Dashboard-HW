//Accessing search elements.
var inputCityNameEl = $("#type-city-name");
var searchClickEl = $("#search-btn");
var currentCityTextEl = $("#current-city");
var recentSearches = $("#recent-searches");

//Accessing main 'card' info.
var today = moment().format("YYYY-MM-DD");
var mainCardTextEl = $(".date-today");
var mainCardTempEl = $(".daily-weather-temp");
var mainCardWindEl = $(".daily-weather-wind");
var mainCardHumidityEl = $(".daily-weather-humidity");
var mainCardMainWeatherEl = $(".daily-weather-main-weather");

//Accessing forecast cards to load date.
var forecastDay1DateEl = $(".forecast-date-day1");
var forecastDay2DateEl = $(".forecast-date-day2");
var forecastDay3DateEl = $(".forecast-date-day3");
var forecastDay4DateEl = $(".forecast-date-day4");
var forecastDay5DateEl = $(".forecast-date-day5");

//Accessing forecast cards to load weather data.
var forecastDay1El = $(".forecast-day1");
var forecastDay2El = $(".forecast-day2");
var forecastDay3El = $(".forecast-day3");
var forecastDay4El = $(".forecast-day4");
var forecastDay5El = $(".forecast-day5");

//Appending list elements to each card for the three weather details (temp, wind, humidity) to be portrayed to user.
var forecastDay1Temp = $("<li>");
forecastDay1El.append(forecastDay1Temp);
var forecastDay1Wind = $("<li>");
forecastDay1El.append(forecastDay1Wind);
var forecastDay1Humidity = $("<li>");
forecastDay1El.append(forecastDay1Humidity);
var forecastDay2Temp = $("<li>");
forecastDay2El.append(forecastDay2Temp);
var forecastDay2Wind = $("<li>");
forecastDay2El.append(forecastDay2Wind);
var forecastDay2Humidity = $("<li>");
forecastDay2El.append(forecastDay2Humidity);
var forecastDay3Temp = $("<li>");
forecastDay3El.append(forecastDay3Temp);
var forecastDay3Wind = $("<li>");
forecastDay3El.append(forecastDay3Wind);
var forecastDay3Humidity = $("<li>");
forecastDay3El.append(forecastDay3Humidity);
var forecastDay4Temp = $("<li>");
forecastDay4El.append(forecastDay4Temp);
var forecastDay4Wind = $("<li>");
forecastDay4El.append(forecastDay4Wind);
var forecastDay4Humidity = $("<li>");
forecastDay4El.append(forecastDay4Humidity);
var forecastDay5Temp = $("<li>");
forecastDay5El.append(forecastDay5Temp);
var forecastDay5Wind = $("<li>");
forecastDay5El.append(forecastDay5Wind);
var forecastDay5Humidity = $("<li>");
forecastDay5El.append(forecastDay5Humidity);

//Declaring global variables which will be assigned values in the function.
// city user looks up
var inputCityName;

//Storing API url.
var dailyWeatherByCity;
var fiveDayForecast;

//Where the data returned will be stored.
var returnedCityData;
var forecastDate;
var cityTemp;
var cityWind;
var cityHumidity;
var cityMainWeather;

//Accessing the API information for daily and five-day-forecast.
function searchCityName(inputCityName) {
  dailyWeatherByCity =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputCityName +
    "&units=imperial&appid=d2f7b3d6eee0ac3947469a9d38562aa3";

  fiveDayForecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    inputCityName +
    "&units=imperial&appid=d2f7b3d6eee0ac3947469a9d38562aa3";

  //Current Weather.
  $.ajax({
    url: dailyWeatherByCity,
    method: "GET",
  }).then(function (data) {
    //Today's date from 'moment.'
    mainCardTextEl.text(today);
    inputCityName = inputCityName.toUpperCase();

    //Adding text to reflect user's search.
    currentCityTextEl.text(inputCityName);
    cityTemp = data.main.temp;
    mainCardTempEl.text("Temperature: " + cityTemp + " °F");
    cityWind = data.wind.speed;
    mainCardWindEl.text("Wind: " + cityWind + " mph");
    cityHumidity = data.main.humidity;
    mainCardHumidityEl.text("Humidity: " + cityHumidity + "%");
    cityMainWeather = data.weather[0].description;
    mainCardMainWeatherEl.text("Main Weather: " + cityMainWeather);
  });

  //Five-day Forecast.
  $.ajax({
    url: fiveDayForecast,
    method: "GET",
  })
    //Five-day forecast text change.
    .then(function (data) {
      console.log(data);
      forecastDate = data.list[7].dt_txt.split(" ", 1)[0];
      forecastDay1DateEl.text(forecastDate);
      cityTemp = data.list[7].main.temp;
      forecastDay1Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[7].wind.speed;
      forecastDay1Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[7].main.humidity;
      forecastDay1Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[15].dt_txt.split(" ", 1)[0];
      forecastDay2DateEl.text(forecastDate);
      cityTemp = data.list[15].main.temp;
      forecastDay2Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[15].wind.speed;
      forecastDay2Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[15].main.humidity;
      forecastDay2Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[23].dt_txt.split(" ", 1)[0];
      forecastDay3DateEl.text(forecastDate);
      cityTemp = data.list[23].main.temp;
      forecastDay3Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[23].wind.speed;
      forecastDay3Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[23].main.humidity;
      forecastDay3Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[31].dt_txt.split(" ", 1)[0];
      forecastDay4DateEl.text(forecastDate);
      cityTemp = data.list[31].main.temp;
      forecastDay4Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[31].wind.speed;
      forecastDay4Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[31].main.humidity;
      forecastDay4Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[39].dt_txt.split(" ", 1)[0];
      forecastDay5DateEl.text(forecastDate);
      cityTemp = data.list[39].main.temp;
      forecastDay5Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[39].wind.speed;
      forecastDay5Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[39].main.humidity;
      forecastDay5Humidity.text("Humidity: " + cityHumidity + "%");
    });
}

function addRecent(inputCityName) {
  recentSearches.append($(`<li><a href="#"> ${inputCityName}</a></li>`));
}

function handleSearch(event) {
  event.preventDefault();
  inputCityName = inputCityNameEl.val();
  searchCityName(inputCityName);
  addRecent(inputCityName);
  inputCityNameEl.text(" ");
}

function handleRecent(event) {
  event.preventDefault();
  var citySearch = event.target.text;
  searchCityName(citySearch);
}

//After the user clicks 'search,' the function runs.
searchClickEl.on("click", handleSearch);

recentSearches.on("click", handleRecent);
