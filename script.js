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

overall.classList.remove("bglight");
locationEl.classList.remove("bglight");

const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

const imageApi = "https://api.unsplash.com/search/photos?query=";

function findWeather() {
  const txt = inputCity.value;
  const fullApiUrl = apiUrl + txt + "&aqi=yes";

  if (txt !== "") {
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
        footerEl.innerText = " ©️ Saurabh Chirde";

        var onlyTime = cDate.slice(-5);

        var season = partial.replace(" ", "-");
        if (onlyTime > "18:00" || onlyTime < "04:00") {
          var fullImgApi =
            imageApi +
            season +
            "-night" +
            "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        } else {
          var fullImgApi =
            imageApi +
            season +
            "-day" +
            "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        }

        let randomImage = Math.trunc(Math.random() * 10);
        fetch(fullImgApi)
          .then((response) => response.json())
          .then((json) => {
            bgImg.src = json.results[randomImage].urls.regular;
          });
      });
  } else {
    output.innerText = "Enter a city name! ";
  }
}

btnCheck.addEventListener("click", findWeather);
