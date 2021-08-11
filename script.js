var inputCityNameEl = $("#typeCityName");
var searchClickEl = $("#search-btn");
var currentCityTextEl = $("#current-city");

var mainCardTextEl = $(".date-today");
var mainCardTempEl = $(".daily-weather-temp");
var mainCardWindEl = $(".daily-weather-wind");
var mainCardHumidityEl = $(".daily-weather-humidity");
var mainCardMainWeatherEl = $(".daily-weather-main-weather");

var inputCityName;
var dailyWeatherByCity;

var fiveDayForecast;

var returnedCityData;
var cityTemp;
var cityWind;
var cityHumidity;
var cityMainWeather;

function searchCityName(event) {
  event.preventDefault();
  inputCityName = inputCityNameEl.val();
  dailyWeatherByCity =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputCityName +
    "&units=imperial&appid=d2f7b3d6eee0ac3947469a9d38562aa3";
  fiveDayForecast =
    "api.openweathermap.org/data/2.5/forecast?q=" +
    inputCityName +
    "&units=imperial&appid=d2f7b3d6eee0ac3947469a9d38562aa3";

  $.ajax({
    url: dailyWeatherByCity,
    method: "GET",
  }).then(function (data) {
    localStorage.setItem(inputCityName, cityTemp);
    inputCityName = inputCityName.toUpperCase();
    currentCityTextEl.text(inputCityName);
    // mainCardTextEl.text();
    cityTemp = data.main.temp;
    mainCardTempEl.text("Temperature: " + cityTemp + " degrees Farenheit");
    cityWind = data.wind.speed;
    mainCardWindEl.text("Wind: " + cityWind + " mph");
    cityHumidity = data.main.humidity;
    mainCardHumidityEl.text("Humidity: " + cityHumidity + " %");
    cityMainWeather = data.weather[0].description;
    mainCardMainWeatherEl.text("Main Weather: " + cityMainWeather);
  });
}

searchClickEl.on("click", searchCityName);
