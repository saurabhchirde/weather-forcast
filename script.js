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

<<<<<<< HEAD
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

=======
>>>>>>> parent of 16939a8 (feat: forecast button hide)
var iconTime = "day";

overall.classList.remove("bglight");
locationEl.classList.remove("bglight");
hrEl.classList.remove("hrVisible");

<<<<<<< HEAD
document.querySelector(".day1").classList.remove("bglight");
document.querySelector(".day2").classList.remove("bglight");
document.querySelector(".day3").classList.remove("bglight");
// weather api
=======
>>>>>>> parent of 16939a8 (feat: forecast button hide)
const apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=dbb97da661744d27b6b80803210312&q=";

const imageApi = "https://api.unsplash.com/search/photos?query=";

<<<<<<< HEAD
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
        "Min: " +
        data.forecast.forecastday[0].day.mintemp_c +
        "˚C<br />Max: " +
        data.forecast.forecastday[0].day.maxtemp_c +
        "˚C";

      // day2
      document.querySelector(".day2").classList.add("bglight");
      forecastDate2.innerText = data.forecast.forecastday[1].date;
      forecastIcon2.innerHTML =
        '<img src="https:' +
        data.forecast.forecastday[1].day.condition.icon +
        '"/></img>';
      forecastTemperature2.innerHTML =
        "Min: " +
        data.forecast.forecastday[1].day.mintemp_c +
        "˚C<br />Max: " +
        data.forecast.forecastday[1].day.maxtemp_c +
        "˚C";

      // day3
      document.querySelector(".day3").classList.add("bglight");
      forecastDate3.innerText = data.forecast.forecastday[2].date;
      forecastIcon3.innerHTML =
        '<img src="https:' +
        data.forecast.forecastday[2].day.condition.icon +
        '"/></img>';
      forecastTemperature3.innerHTML =
        "Min: " +
        data.forecast.forecastday[2].day.mintemp_c +
        "˚C<br />Max: " +
        data.forecast.forecastday[2].day.maxtemp_c +
        "˚C";

      document.querySelector(".forecastFooter").innerHTML =
        "<a href=https://twitter.com/SaurabhChirde>by saurabhchirde</a>";
    })
    .catch(() => {
      document.querySelector(".outputForecast").classList.add("hide");
      document.querySelector(".error").innerText = "Enter a valid city name ! ";
      output.classList.add("hide");
    });
}

function imageApiFunc(fullImgApi) {
  const randomImage = Math.trunc(Math.random() * 10);
  fetch(fullImgApi)
    .then((response) => response.json())
    .then((json) => {
      bgImg.src = json.results[randomImage].urls.regular;
    });
}

// function imageTimeCheck(oTime, iconSrc, season) {
// if (oTime.slice(0, 2) > "20" && oTime.slice(0, 2) <= "04") {
//   iconTime = "night";
//   iconEl.innerHTML = '<img src="icons/night/' + iconSrc + '"/></img>';
//   var fullImgApi =
//     imageApi +
//     season +
//     "-night" +
//     "-landscape" +
//     "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
//   console.log(fullImgApi);
// } else if (oTime.slice(0, 2) > "04" && oTime.slice(0, 2) <= "11") {
//   iconTime = "morning";
//   iconEl.innerHTML = '<img src="icons/day/' + iconSrc + '"/></img>';
//   var fullImgApi =
//     imageApi +
//     season +
//     "-morning" +
//     "-landscape" +
//     "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
//   console.log(fullImgApi);
// } else if (oTime.slice(0, 2) > "11" && oTime.slice(0, 2) <= "16") {
//   iconTime = "afternoon";
//   iconEl.innerHTML = '<img src="icons/day/' + iconSrc + '"/></img>';
//   var fullImgApi =
//     imageApi +
//     season +
//     "-afternoon" +
//     "-landscape" +
//     "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
//   console.log(fullImgApi);
// } else if (oTime.slice(0, 2) > "16" && oTime.slice(0, 2) <= "20") {
//   iconTime = "evening";
//   iconEl.innerHTML = '<img src="icons/night/' + iconSrc + '"/></img>';
//   var fullImgApi =
//     imageApi +
//     season +
//     "-evening" +
//     "-landscape" +
//     "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
//   console.log(fullImgApi);
// }
// imageApiFunc(fullImgApi);
// }
=======
// 7 Day forcast api
// http://api.weatherapi.com/v1/forecast.json?key=dbb97da661744d27b6b80803210312&q=<cityName>&days=7"
>>>>>>> parent of 16939a8 (feat: forecast button hide)

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
      timeEl.innerText = `Time: ${oTime}\nZone: ${tz}`;
      footerEl.innerHTML =
        "<a href=https://twitter.com/SaurabhChirde>by saurabhchirde</a>";

      const season = partial.replace(" ", "-");
      const iconSrc = json.current.condition.icon.slice(-7);

      // imageTimeCheck(oTime, iconSrc, season);
      if (oTime.slice(0, 2) > "20" && oTime.slice(0, 2) <= "04") {
        iconTime = "night";
        iconEl.innerHTML = '<img src="icons/night/' + iconSrc + '"/></img>';
        var fullImgApi =
          imageApi +
          season +
          "-night" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        console.log(fullImgApi);
      } else if (oTime.slice(0, 2) > "04" && oTime.slice(0, 2) <= "11") {
        iconTime = "morning";
        iconEl.innerHTML = '<img src="icons/day/' + iconSrc + '"/></img>';
        var fullImgApi =
          imageApi +
          season +
          "-morning" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        console.log(fullImgApi);
      } else if (oTime.slice(0, 2) > "11" && oTime.slice(0, 2) <= "16") {
        iconTime = "afternoon";
        iconEl.innerHTML = '<img src="icons/day/' + iconSrc + '"/></img>';
        var fullImgApi =
          imageApi +
          season +
          "-afternoon" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        console.log(fullImgApi);
      } else if (oTime.slice(0, 2) > "16" && oTime.slice(0, 2) <= "20") {
        iconTime = "evening";
        iconEl.innerHTML = '<img src="icons/night/' + iconSrc + '"/></img>';
        var fullImgApi =
          imageApi +
          season +
          "-evening" +
          "-landscape" +
          "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
        console.log(fullImgApi);
      }
      imageApiFunc(fullImgApi);
    })
    .catch(() => {
      document.querySelector(".error").innerText = "Enter a valid city name ! ";
      output.classList.add("hide");
      document.querySelector(".outputForecast").classList.add("hide");
    });
}

function findWeather() {
<<<<<<< HEAD
  let txt = inputCity.value;
  output.classList.remove("hide");
  document.querySelector(".outputForecast").classList.add("hide");
  document.querySelector(".error").innerText = "";
=======
  const txt = inputCity.value;
>>>>>>> parent of 16939a8 (feat: forecast button hide)

  if (txt !== "") {
    const fullApiUrl = apiUrl + txt + "&aqi=yes";
    fetchApi(fullApiUrl);
  } else {
    document.querySelector(".error").innerText = "Enter a city name! ";
    output.classList.add("hide");
    document.querySelector(".outputForecast").classList.add("hide");
  }
}

btnCheck.addEventListener("click", findWeather);
<<<<<<< HEAD

function weatherForecastSevenDays() {
  let txt = inputCity.value;
  document.querySelector(".outputForecast").classList.remove("hide");
  output.classList.add("hide");
  document.querySelector(".error").innerText = "";

  if (txt !== "") {
    const fullForecastApi = forecastApi + txt + "&days=3";
    fetchForecastApi(fullForecastApi);
  } else {
    document.querySelector(".error").innerText = "Enter a city name! ";
    document.querySelector(".outputForecast").classList.add("hide");
    output.classList.add("hide");
  }
}
btnForcast.addEventListener("click", weatherForecastSevenDays);
=======
>>>>>>> parent of 16939a8 (feat: forecast button hide)
