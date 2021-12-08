const btnCheck = document.querySelector("#btnCheck");
const output = document.querySelector(".output");
const inputCity = document.querySelector(".inputCity");
const bgImg = document.querySelector("#bgImg");

const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

const imageApi = "https://api.unsplash.com/search/photos?query=";

function findWeather() {
  const txt = inputCity.value;
  const fullApiUrl = apiUrl + txt + "&aqi=yes";

  if (txt === "" || txt === " ") {
    output.innerText = "Enter a city name! ";
  } else {
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

        output.innerText = `Location: ${city}, ${region}, ${country}\nLatitude: ${lat} , Longitude: ${long}\n${partial}\nCurrent Temp: ${temp}˚C, Feels like: ${feelsLike}˚C\nWind: ${wind_dir}, ${wind} km/h, Humidity: ${humid}%\nDate & Time: ${cDate}\nTime zone: ${tz}`;

        var onlyTime = cDate.slice(-5);

        var season = partial.replace(" ", "-");
        if (onlyTime > "18:00") {
          console.log("greater than 18");
          var fullImgApi =
            imageApi +
            season +
            "-night" +
            "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        } else {
          console.log("less than 18");
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
            console.log(json.results[randomImage].urls.regular);
          });
      });
  }
}

btnCheck.addEventListener("click", findWeather);
