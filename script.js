const btnCheck = document.querySelector("#btnCheck");
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

var iconTime = "day";

overall.classList.remove("bglight");
locationEl.classList.remove("bglight");
hrEl.classList.remove("hrVisible");

const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

const imageApi = "https://api.unsplash.com/search/photos?query=";

// 7 Day forcast api
// http://api.weatherapi.com/v1/forecast.json?key=dbb97da661744d27b6b80803210312&q=<cityName>&days=7"

function fetchApi(fullApiUrl) {
  fetch(fullApiUrl)
    .then((response) => response.json())
    .then((json) => {
      const partial = json.current.condition.text;
      const cDate = json.current.last_updated;
      const temp = json.current.temp_c;
      const feelsLike = json.current.feelslike_c;
      const lat = json.location.lat;
      const long = json.location.lon;
      const city = json.location.name;
      const region = json.location.region;
      const country = json.location.country;
      const tz = json.location.tz_id;
      const wind_dir = json.current.wind_dir;
      const wind = json.current.wind_kph;
      const humid = json.current.humidity;

      const oDate = cDate.slice(0, 10);
      const oTime = cDate.slice(-5);

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
      timeEl.innerText = `Time: ${oTime}, ${tz}`;
      footerEl.innerText = "with ❤️ by Saurabh Chirde";

      const season = partial.replace(" ", "-");
      const iconSrc = json.current.condition.icon.slice(-7);

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
  const txt = inputCity.value;

  if (txt !== "") {
    const fullApiUrl = apiUrl + txt + "&aqi=yes";
    fetchApi(fullApiUrl);
  } else {
    output.innerText = "Enter a city name! ";
  }
}

btnCheck.addEventListener("click", findWeather);
