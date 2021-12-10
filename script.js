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

// forecast el
const forecastDate = document.querySelector(".forecastDate");
const forecastLocation = document.querySelector(".forecastLocation");
const forecastTemperature = document.querySelector(".forecastTemperature");
const forecastWind = document.querySelector(".forecastWind");
const forecastHumidity = document.querySelector(".forecastHumidity");
const forecastOnlyTime = document.querySelector(".forecastOnlyTime");
const forecastIcon = document.querySelector(".forecastIcon");

var iconTime = "day";

overall.classList.remove("bglight");
locationEl.classList.remove("bglight");
hrEl.classList.remove("hrVisible");

// weather api
const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

//bgImage api
const imageApi = "https://api.unsplash.com/search/photos?query=";

//7 Day forcast api
// const forecastApi =
//   "http://api.weatherapi.com/v1/forecast.json?key=dbb97da661744d27b6b80803210312&q=";

// function fetchForecastApi(fullForecastApi) {
//   fetch(fullForecastApi)
//     .then((res) => res.json())
//     .then((data) => {
//       overall.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
//       forecastDate.innerText = data.forecast.forecastday[0].date;
//       forecastIcon.innerHTML =
//         'Current <img src="https:' + data.current.condition.icon + '"/></img>';
//       forecastTemperature.innerHTML =
//         "Max: " +
//         data.forecast.forecastday[0].day.maxtemp_c +
//         "˚C, Min :" +
//         data.forecast.forecastday[0].day.mintemp_c +
//         '˚C, <img src="https:' +
//         data.forecast.forecastday[0].day.icon +
//         '"/></img>';

//       // forecastOnlyTime

//       // timeEl.innerText =

//       // // hrEl.classList.add("hrVisible");
//       // overall.innerText = `" ${partial} "`;
//       // // overall.classList.add("bglight");
//       // locationEl.innerText = `🌎 ${city}, ${region}, ${country}`;
//       // locationEl.classList.add("bglight");

//       // latitudeLongitudeEl.innerText = `Latitude: ${lat} \nLongitude: ${long}`;
//       // temperatureEL.innerText = `🌡 Current Temp: ${temp}˚C \nFeels like: ${feelsLike}˚C`;
//       // windEl.innerText = `Wind: ${wind_dir}, ${wind} km/h 🍃 `;
//       // humidityEl.innerText = `Humidity: ${humid}%`;
//       // dateEl.innerText = `Date : ${oDate}`;
//       // timeEl.innerText = `Time: ${oTime}\nZone: ${tz}`;
//       // footerEl.innerText = "with ❤️ by Saurabh Chirde";
//     })
//     .catch(() => (output.innerText = "Enter a valid city name ! "));
// }

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

      if (oTime > "18:00" || oTime < "04:00") {
        iconTime = "night";
        iconEl.innerHTML =
          '<img src="icons/' + iconTime + "/" + iconSrc + '"/></img>';
        var fullImgApi =
          imageApi +
          season +
          "-night" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
      } else {
        iconTime = "day";
        iconEl.innerHTML =
          '<img src="icons/' + iconTime + "/" + iconSrc + '"/></img>';
        var fullImgApi =
          imageApi +
          season +
          "-day" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
      }
      const randomImage = Math.trunc(Math.random() * 10);
      fetch(fullImgApi)
        .then((response) => response.json())
        .then((json) => {
          bgImg.src = json.results[randomImage].urls.regular;
        });
    })
    .catch(() => {
      output.innerText = "Enter a valid city name ! ";
    });
}

function findWeather() {
  let txt = inputCity.value;
  if (txt !== "") {
    const fullApiUrl = apiUrl + txt + "&aqi=yes";

    fetchApi(fullApiUrl);
  } else {
    output.innerText = "Enter a city name! ";
  }
}
btnCheck.addEventListener("click", findWeather);

// function weatherForecastSevenDays() {
//   let txt = inputCity.value;

//   // erasing output div
//   hrEl.classList.remove("hrVisible");
//   overall.innerText = "";
//   overall.classList.remove("bglight");
//   locationEl.innerText = "";
//   locationEl.classList.remove("bglight");
//   iconEl.innerHTML = "";
//   latitudeLongitudeEl.innerText = "";
//   temperatureEL.innerText = "";
//   windEl.innerText = "";
//   humidityEl.innerText = "";
//   dateEl.innerText = "";
//   timeEl.innerText = "";

//   if (txt !== "") {
//     const fullForecastApi = forecastApi + txt + "&days=7";

//     fetchForecastApi(fullForecastApi);
//   } else {
//     output.innerText = "Enter a city name! ";
//   }
// }
// btnForcast.addEventListener("click", weatherForecastSevenDays);
