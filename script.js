// current weather el
const btnCheck = document.querySelector("#btnCheck");
const btnForcast = document.querySelector("#btnForcast");
const output = document.querySelector(".output");
const inputCity = document.querySelector(".inputCity");
const bgImg = document.querySelector("#bgImg");
const locationEl = document.querySelector(".location");
const latitudeLongitudeEl = document.querySelector(".latitudeLongitude");
const temperatureEL = document.querySelector(".temperature");
const windEl = document.querySelector(".wind");
const humidityEl = document.querySelector(".humidity");
const dateTimeEl = document.querySelector(".dateTime");
const dateEl = document.querySelector(".onlyDate");
const timeEl = document.querySelector(".onlyTime");
const overall = document.querySelector(".overall");
const footerEl = document.querySelector(".footer");
const hrEl = document.querySelector(".hr");
const iconEl = document.querySelector(".icon");

// forecast el day1
const forecastDate1 = document.querySelector(".forecastDate1");
const forecastLocation1 = document.querySelector(".forecastLocation1");
const forecastTemperature1 = document.querySelector(".forecastTemperature1");
const forecastOnlyTime1 = document.querySelector(".forecastOnlyTime1");
const forecastIcon1 = document.querySelector(".forecastIcon1");
// forecast el day2
const forecastDate2 = document.querySelector(".forecastDate2");
const forecastLocation2 = document.querySelector(".forecastLocation2");
const forecastTemperature2 = document.querySelector(".forecastTemperature2");
const forecastOnlyTime2 = document.querySelector(".forecastOnlyTime2");
const forecastIcon2 = document.querySelector(".forecastIcon2");
// forecast el day3
const forecastDate3 = document.querySelector(".forecastDate3");
const forecastLocation3 = document.querySelector(".forecastLocation3");
const forecastTemperature3 = document.querySelector(".forecastTemperature3");
const forecastOnlyTime3 = document.querySelector(".forecastOnlyTime3");
const forecastIcon3 = document.querySelector(".forecastIcon3");

var iconTime = "day";

overall.classList.remove("bglight");
locationEl.classList.remove("bglight");
hrEl.classList.remove("hrVisible");

document.querySelector(".day1").classList.remove("bglight");
document.querySelector(".day2").classList.remove("bglight");
document.querySelector(".day3").classList.remove("bglight");
// weather api
const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

//bgImage api
const imageApi = "https://api.unsplash.com/search/photos?query=";

//7 Day forcast api
const forecastApi =
  "https://api.weatherapi.com/v1/forecast.json?key=dbb97da661744d27b6b80803210312&q=";

function fetchForecastApi(fullForecastApi) {
  fetch(fullForecastApi)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".forecastLocation"
      ).innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
      // day1
      document.querySelector(".day1").classList.add("bglight");
      forecastDate1.innerText = data.forecast.forecastday[0].date;
      forecastIcon1.innerHTML =
        '<img src="https:' +
        data.forecast.forecastday[0].day.condition.icon +
        '"/></img>';
      forecastTemperature1.innerHTML =
        "Max: " +
        data.forecast.forecastday[0].day.maxtemp_c +
        "˚C\nMin: " +
        data.forecast.forecastday[0].day.mintemp_c +
        "˚C";

      // day2
      document.querySelector(".day2").classList.add("bglight");
      forecastDate2.innerText = data.forecast.forecastday[1].date;
      forecastIcon2.innerHTML =
        '<img src="https:' +
        data.forecast.forecastday[1].day.condition.icon +
        '"/></img>';
      forecastTemperature2.innerHTML =
        "Max: " +
        data.forecast.forecastday[1].day.maxtemp_c +
        "˚C\nMin: " +
        data.forecast.forecastday[1].day.mintemp_c +
        "˚C";

      // day3
      document.querySelector(".day3").classList.add("bglight");
      forecastDate3.innerText = data.forecast.forecastday[2].date;
      forecastIcon3.innerHTML =
        '<img src="https:' +
        data.forecast.forecastday[2].day.condition.icon +
        '"/></img>';
      forecastTemperature3.innerHTML =
        "Max: " +
        data.forecast.forecastday[2].day.maxtemp_c +
        "˚C\nMin: " +
        data.forecast.forecastday[2].day.mintemp_c +
        "˚C";

      footerEl.innerText = "with ❤️ by Saurabh Chirde";
    })
    .catch(() => {
      // check else leave it output.innertext
      document.querySelector(".error").innerText = "Enter a valid city name ! ";
    });
}

function imageApi(fullImgApi) {
  const randomImage = Math.trunc(Math.random() * 10);
  fetch(fullImgApi)
    .then((response) => response.json())
    .then((json) => {
      bgImg.src = json.results[randomImage].urls.regular;
    })
    .catch(() => {
      document.querySelector(".error").innerText = "Image could not be found ";
    });
}

function imageTimeCheck(oTime, iconSrc, season) {
  if (oTime >= "20:00" && oTime < "04:00") {
    iconTime = "night";
    console.log(iconTime);
    iconEl.innerHTML =
      '<img src="icons/' + iconTime + "/" + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-night" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else if (oTime >= "04:00" && oTime < "11:00") {
    iconTime = "morning";
    console.log(iconTime);
    iconEl.innerHTML =
      '<img src="icons/' + iconTime + "/" + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-morning" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else if (oTime >= "11:00" && oTime < "16:00") {
    iconTime = "afternoon";
    console.log(iconTime);
    iconEl.innerHTML =
      '<img src="icons/' + iconTime + "/" + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-afternoon" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else if (oTime >= "16:00" && oTime < "20:00") {
    iconTime = "evening";
    console.log(iconTime);
    iconEl.innerHTML =
      '<img src="icons/' + iconTime + "/" + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-evening" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else {
    console.log("None time work");
  }
}

function fetchApi(fullApiUrl) {
  fetch(fullApiUrl)
    .then((response) => response.json())
    .then((json) => {
      var partial = json.current.condition.text;
      var cDate = json.current.last_updated;
      var temp = json.current.temp_c;
      var feelsLike = json.current.feelslike_c;
      var lat = json.location.lat;
      var long = json.location.lon;
      var city = json.location.name;
      var region = json.location.region;
      var country = json.location.country;
      var tz = json.location.tz_id;
      var wind_dir = json.current.wind_dir;
      var wind = json.current.wind_kph;
      var humid = json.current.humidity;

      var oDate = cDate.slice(0, 10);
      var oTime = cDate.slice(-5);

      hrEl.classList.add("hrVisible");
      overall.innerText = `" ${partial} "`;
      overall.classList.add("bglight");
      locationEl.innerText = `🌎 ${city}, ${region}, ${country}`;
      locationEl.classList.add("bglight");

      latitudeLongitudeEl.innerText = `Latitude: ${lat} \nLongitude: ${long}`;
      temperatureEL.innerText = `🌡 Current Temp: ${temp}˚C \nFeels like: ${feelsLike}˚C`;
      windEl.innerText = `Wind: ${wind_dir}, ${wind} km/h 🍃 `;
      humidityEl.innerText = `Humidity: ${humid}%`;
      dateEl.innerText = `Date : ${oDate}`;
      timeEl.innerText = `Time: ${oTime}\nZone: ${tz}`;
      footerEl.innerText = "with ❤️ by Saurabh Chirde";

      var season = partial.replace(" ", "-");
      var iconSrc = json.current.condition.icon.slice(-7);

      imageTimeCheck(oTime, iconSrc, season);
      imageApi(fullImgApi);
    })
    .catch(() => {
      // check else leave it output.innertext
      document.querySelector(".error").innerText = "Enter a valid city name ! ";
    });
}

function findWeather() {
  let txt = inputCity.value;
  output.classList.remove("hide");
  document.querySelector(".outputForecast").classList.add("hide");

  if (txt !== "") {
    document.querySelector(".error").innerText = "";
    const fullApiUrl = apiUrl + txt + "&aqi=yes";
    fetchApi(fullApiUrl);
  } else {
    document.querySelector(".error").innerText = "Enter a city name! ";
    output.classList.add("hide");
  }
}

btnCheck.addEventListener("click", findWeather);

function weatherForecastSevenDays() {
  let txt = inputCity.value;
  document.querySelector(".outputForecast").classList.remove("hide");
  output.classList.add("hide");

  if (txt !== "") {
    document.querySelector(".error").innerText = "";
    const fullForecastApi = forecastApi + txt + "&days=7";
    fetchForecastApi(fullForecastApi);
  } else {
    document.querySelector(".error").innerText = "Enter a city name! ";
    document.querySelector(".outputForecast").classList.add("hide");
  }
}
btnForcast.addEventListener("click", weatherForecastSevenDays);
