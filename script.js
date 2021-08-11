var inputCityNameEl = $("#type-city-name");
var searchClickEl = $("#search-btn");
var currentCityTextEl = $("#current-city");

var today = moment().format("YYYY-MM-DD");
var mainCardTextEl = $(".date-today");
var mainCardTempEl = $(".daily-weather-temp");
var mainCardWindEl = $(".daily-weather-wind");
var mainCardHumidityEl = $(".daily-weather-humidity");
var mainCardMainWeatherEl = $(".daily-weather-main-weather");

var forecastDay1DateEl = $(".forecast-date-day1");
var forecastDay2DateEl = $(".forecast-date-day2");
var forecastDay3DateEl = $(".forecast-date-day3");
var forecastDay4DateEl = $(".forecast-date-day4");
var forecastDay5DateEl = $(".forecast-date-day5");

var forecastDay1El = $(".forecast-day1");
var forecastDay2El = $(".forecast-day2");
var forecastDay3El = $(".forecast-day3");
var forecastDay4El = $(".forecast-day4");
var forecastDay5El = $(".forecast-day5");

var forecastDay1Temp = $("<li>");
forecastDay1El.append(forecastDay1Temp);
var forecastDay1Wind = $("<li>");
forecastDay1El.append(forecastDay1Wind);
var forecastDay1Humidity = $("<li>");
forecastDay1El.append(forecastDay1Humidity);
var forecastDay2El = $(".forecast-day2");
var forecastDay2Temp = $("<li>");
forecastDay2El.append(forecastDay2Temp);
var forecastDay2Wind = $("<li>");
forecastDay2El.append(forecastDay2Wind);
var forecastDay2Humidity = $("<li>");
forecastDay2El.append(forecastDay2Humidity);
var forecastDay3El = $(".forecast-day3");
var forecastDay3Temp = $("<li>");
forecastDay3El.append(forecastDay3Temp);
var forecastDay3Wind = $("<li>");
forecastDay3El.append(forecastDay3Wind);
var forecastDay3Humidity = $("<li>");
forecastDay3El.append(forecastDay3Humidity);
var forecastDay4El = $(".forecast-day4");
var forecastDay4Temp = $("<li>");
forecastDay4El.append(forecastDay4Temp);
var forecastDay4Wind = $("<li>");
forecastDay4El.append(forecastDay4Wind);
var forecastDay4Humidity = $("<li>");
forecastDay4El.append(forecastDay4Humidity);
var forecastDay5El = $(".forecast-day5");
var forecastDay5Temp = $("<li>");
forecastDay5El.append(forecastDay5Temp);
var forecastDay5Wind = $("<li>");
forecastDay5El.append(forecastDay5Wind);
var forecastDay5Humidity = $("<li>");
forecastDay5El.append(forecastDay5Humidity);

var recentSearch1El = $(".recent-search1");
var recentSearch2El = $(".recent-search2");
var recentSearch3El = $(".recent-search3");
var recentSearch4El = $(".recent-search4");
var recentSearch5El = $(".recent-search5");
recentSearch1El.text("");
recentSearch2El.text("");
recentSearch3El.text("");
recentSearch4El.text("");
recentSearch5El.text("");

var inputCityName;
var dailyWeatherByCity;

var fiveDayForecast;

var returnedCityData;
var forecastDate;
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
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    inputCityName +
    "&units=imperial&appid=d2f7b3d6eee0ac3947469a9d38562aa3";

  inputCityNameEl.text("");
  $.ajax({
    url: dailyWeatherByCity,
    method: "GET",
  }).then(function (data) {
    localStorage.setItem(inputCityName, "weather");
    mainCardTextEl.text(today);
    inputCityName = inputCityName.toUpperCase();
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
  $.ajax({
    url: fiveDayForecast,
    method: "GET",
  })
    .then(function (data) {
      console.log(data);
      forecastDate = data.list[0].dt_txt.split(" ", 1)[0];
      forecastDay1DateEl.text(forecastDate);
      cityTemp = data.list[0].main.temp;
      forecastDay1Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[0].wind.speed;
      forecastDay1Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[0].main.humidity;
      forecastDay1Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[6].dt_txt.split(" ", 1)[0];
      forecastDay2DateEl.text(forecastDate);
      cityTemp = data.list[6].main.temp;
      forecastDay2Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[6].wind.speed;
      forecastDay2Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[6].main.humidity;
      forecastDay2Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[14].dt_txt.split(" ", 1)[0];
      forecastDay3DateEl.text(forecastDate);
      cityTemp = data.list[14].main.temp;
      forecastDay3Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[14].wind.speed;
      forecastDay3Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[14].main.humidity;
      forecastDay3Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[22].dt_txt.split(" ", 1)[0];
      forecastDay4DateEl.text(forecastDate);
      cityTemp = data.list[22].main.temp;
      forecastDay4Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[22].wind.speed;
      forecastDay4Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[22].main.humidity;
      forecastDay4Humidity.text("Humidity: " + cityHumidity + "%");
      forecastDate = data.list[30].dt_txt.split(" ", 1)[0];
      forecastDay5DateEl.text(forecastDate);
      cityTemp = data.list[30].main.temp;
      forecastDay5Temp.text("Temperature: " + cityTemp + " °F");
      cityWind = data.list[30].wind.speed;
      forecastDay5Wind.text("Wind: " + cityWind + " mph");
      cityHumidity = data.list[30].main.humidity;
      forecastDay5Humidity.text("Humidity: " + cityHumidity + "%");
    })
    .then(function () {
      if (recentSearch5El.val() === "") {
        recentSearch5El.text(inputCityName);
      } else if (recentSearch5El.val() !== "") {
        recentSearch4El.text(inputCityName);
      } else if (recentSearch4El.val() === "") {
        recentSearch4El.text(inputCityName);
      } else if (recentSearch4El.val() !== "") {
        recentSearch3El.text(inputCityName);
      } else if (recentSearch3El.val() === "") {
        recentSearch3El.text(inputCityName);
      } else if (recentSearch3El.val() !== "") {
        recentSearch2El.text(inputCityName);
      } else if (recentSearch2El.val() === "") {
        recentSearch2El.text(inputCityName);
      } else if (recentSearch2El.val() !== "") {
        recentSearch1El.text(inputCityName);
      } else if (recentSearch1El.val() === "") {
        recentSearch1El.text(inputCityName);
      } else if (recentSearch1El.val() !== "") {
        recentSearch5El.text(recentSearch4El.val());
        recentSearch4El.text(recentSearch3El.val());
        recentSearch3El.text(recentSearch2El.val());
        recentSearch2El.text(recentSearch1El.val());
        recentSearch1El.text(inputCityName);
      }
    });
}

searchClickEl.on("click", searchCityName);
