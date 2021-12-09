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
const timeZoneEl = document.querySelector(".timeZone");
const overall = document.querySelector(".overall");
const footerEl = document.querySelector(".footer");
const hrEl = document.querySelector(".hr");

overall.classList.remove("bglight");
locationEl.classList.remove("bglight");
hrEl.classList.remove("hrVisible");

const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

const imageApi = "https://api.unsplash.com/search/photos?query=";

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

      overall.innerText = `" ${partial} "`;
      overall.classList.add("bglight");
      locationEl.innerText = `🌎 ${city}, ${region}, ${country}`;
      locationEl.classList.add("bglight");
      latitudeLongitudeEl.innerText = `Latitude: ${lat} \nLongitude: ${long}`;
      temperatureEL.innerText = `🌡 Current Temp: ${temp}˚C \nFeels like: ${feelsLike}˚C`;
      windEl.innerText = `Wind: ${wind_dir}, ${wind} km/h 🍃 `;
      humidityEl.innerText = `Humidity: ${humid}%`;
      dateTimeEl.innerText = `⏱ Date & Time: ${cDate}`;
      timeZoneEl.innerText = `Time zone: ${tz}`;
      footerEl.innerText = "with ❤️ by Saurabh Chirde";

      const onlyTime = cDate.slice(-5);
      const season = partial.replace(" ", "-");

      if (onlyTime > "18:00" || onlyTime < "04:00") {
        var fullImgApi =
          imageApi +
          season +
          "-night" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
      } else {
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
    });
}

function findWeather() {
  const txt = inputCity.value;
  const fullApiUrl = apiUrl + txt + "&aqi=yes";

  if (txt !== "") {
    hrEl.classList.add("hrVisible");
    fetchApi(fullApiUrl);
  } else {
    output.innerText = "Enter a city name! ";
  }
}

btnCheck.addEventListener("click", findWeather);
