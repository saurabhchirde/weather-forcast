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
const forecastSunRiseSunSetTime1 = document.querySelector(
  ".forecastSunRiseSunSetTime1"
);
const forecastIcon1 = document.querySelector(".forecastIcon1");
const day1El = document.querySelector(".day1");
// forecast el day2
const forecastDate2 = document.querySelector(".forecastDate2");
const forecastLocation2 = document.querySelector(".forecastLocation2");
const forecastTemperature2 = document.querySelector(".forecastTemperature2");
const forecastSunRiseSunSetTime2 = document.querySelector(
  ".forecastSunRiseSunSetTime2"
);
const forecastIcon2 = document.querySelector(".forecastIcon2");
const day2El = document.querySelector(".day2");
// forecast el day3
const forecastDate3 = document.querySelector(".forecastDate3");
const forecastLocation3 = document.querySelector(".forecastLocation3");
const forecastTemperature3 = document.querySelector(".forecastTemperature3");
const forecastSunRiseSunSetTime3 = document.querySelector(
  ".forecastSunRiseSunSetTime3"
);
const forecastIcon3 = document.querySelector(".forecastIcon3");
const day3El = document.querySelector(".day3");

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

function day1Details() {
  output.classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");
  document.querySelector(".forecastInDetail").classList.remove("hide");

  console.log("day1 clicked");

  let txt = inputCity.value;
  var fullForecastApi = forecastApi + txt + "&days=7";

  fetch(fullForecastApi)
    .then((res) => res.json())
    .then((json) => {
      hrEl.classList.add("hrVisible");

      // main
      document.querySelector(
        ".overallInDetail"
      ).innerText = `" ${json.current.condition.text} "`;

      document.querySelector(".overallInDetail").classList.add("bglight");

      document.querySelector(
        ".locationInDetail"
      ).innerText = `🌎 ${json.location.name}, ${json.location.region}, ${json.location.country}`;

      document.querySelector(".overallInDetail").classList.add("bglight");

      document.querySelector(
        ".latitudeLongitudeInDetail"
      ).innerText = `Latitude: ${json.location.lat} \nLongitude: ${json.location.lon}`;

      document.querySelector(
        ".temperatureInDetail"
      ).innerText = `🌡 Current Temp: ${json.current.temp_c}˚C \nFeels like: ${json.current.feelslike_c}˚C`;

      document.querySelector(
        ".windInDetail"
      ).innerText = `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;

      document.querySelector(
        ".humidityInDetail"
      ).innerText = `Humidity: ${json.current.humidity}%`;

      document.querySelector(
        ".onlyDateInDetail"
      ).innerText = `Date : ${json.current.last_updated.slice(0, 10)}`;

      document.querySelector(
        ".onlyTimeInDetail"
      ).innerText = `Last Update: ${json.current.last_updated.slice(
        -5
      )} ⏱\nTime Zone: ${json.location.tz_id}`;

      document.querySelector(
        ".sunriseSunsetTimeInDetail"
      ).innerText = `Sunrise: ${json.forecast.forecastday[0].astro.sunrise}\nSunset : ${json.forecast.forecastday[0].astro.sunset}`;
      document.querySelector(
        ".moonriseMoonsetTimeInDetail"
      ).innerText = `Moonrise: ${json.forecast.forecastday[0].astro.moonrise}\nMoonset : ${json.forecast.forecastday[0].astro.moonset}`;
      document.querySelector(
        ".chancesOfSnowInDetail"
      ).innerText = `Chances of Snow: ${json.forecast.forecastday[0].day.daily_chance_of_snow}`;
      document.querySelector(
        ".chancesOfRainInDetail"
      ).innerText = `Chances of rain: ${json.forecast.forecastday[0].day.daily_chance_of_rain}`;

      // hourly00
      document.querySelector(".overallInDetailHour00").innerText =
        json.forecast.forecastday[0].hour[0].condition.text;
      document.querySelector(".inDetailTimeHour00").innerText =
        json.forecast.forecastday[0].hour[0].time.slice(-5);
      document.querySelector(".iconInDetailHour00").innerHTML =
        '<img src="https:' +
        json.forecast.forecastday[0].hour[0].condition.icon +
        '"/></img>';
      document.querySelector(".temperatureInDetailHour00").innerText =
        json.forecast.forecastday[0].hour[0].temp_c + "˚C";
      document.querySelector(
        ".windInDetailHour00"
      ).innerText = `Wind: ${json.forecast.forecastday[0].hour[0].wind_dir}, ${json.forecast.forecastday[0].hour[0].wind_kph}`;

      `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
      document.querySelector(".chancesOfSnowInDetailHour00").innerText =
        json.forecast.forecastday[0].hour[0].chance_of_snow;
      document.querySelector(".chancesOfRainInDetailHour00").innerText =
        json.forecast.forecastday[0].hour[0].chance_of_rain;

      // hourly01
      // document.querySelector(".overallInDetailHour01").innerText =
      // document.querySelector(".inDetailTimeHour01").innerText =
      // document.querySelector(".iconInDetailHour01").innerText =
      // document.querySelector(".temperatureInDetailHour01").innerText =
      // document.querySelector(".windInDetailHour01").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour01").innerText =
      // document.querySelector(".chancesOfRainInDetailHour01").innerText =

      // hourly02
      // document.querySelector(".overallInDetailHour02").innerText =
      // document.querySelector(".inDetailTimeHour02").innerText =
      // document.querySelector(".iconInDetailHour02").innerText =
      // document.querySelector(".temperatureInDetailHour02").innerText =
      // document.querySelector(".windInDetailHour02").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour02").innerText =
      // document.querySelector(".chancesOfRainInDetailHour02").innerText =

      // hourly03
      // document.querySelector(".overallInDetailHour03").innerText =
      // document.querySelector(".inDetailTimeHour03").innerText =
      // document.querySelector(".iconInDetailHour03").innerText =
      // document.querySelector(".temperatureInDetailHour03").innerText =
      // document.querySelector(".windInDetailHour03").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour03").innerText =
      // document.querySelector(".chancesOfRainInDetailHour03").innerText =

      // hourly04
      // document.querySelector(".overallInDetailHour004").innerText =
      // document.querySelector(".inDetailTimeHour04").innerText =
      // document.querySelector(".iconInDetailHour04").innerText =
      // document.querySelector(".temperatureInDetailHour04").innerText =
      // document.querySelector(".windInDetailHour04").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour04").innerText =
      // document.querySelector(".chancesOfRainInDetailHour04").innerText =

      // hourly05
      // document.querySelector(".overallInDetailHour05").innerText =
      // document.querySelector(".inDetailTimeHour05").innerText =
      // document.querySelector(".iconInDetailHour05").innerText =
      // document.querySelector(".temperatureInDetailHour05").innerText =
      // document.querySelector(".windInDetailHour05").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour05").innerText =
      // document.querySelector(".chancesOfRainInDetailHour05").innerText =

      // hourly06
      // document.querySelector(".overallInDetailHour06").innerText =
      // document.querySelector(".inDetailTimeHour06").innerText =
      // document.querySelector(".iconInDetailHour06").innerText =
      // document.querySelector(".temperatureInDetailHour06").innerText =
      // document.querySelector(".windInDetailHour06").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour06").innerText =
      // document.querySelector(".chancesOfRainInDetailHour06").innerText =

      // hourly07
      // document.querySelector(".overallInDetailHour07").innerText =
      // document.querySelector(".inDetailTimeHour07").innerText =
      // document.querySelector(".iconInDetailHour07").innerText =
      // document.querySelector(".temperatureInDetailHour07").innerText =
      // document.querySelector(".windInDetailHour07").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour07").innerText =
      // document.querySelector(".chancesOfRainInDetailHour07").innerText =

      // hourly08
      // document.querySelector(".overallInDetailHour08").innerText =
      // document.querySelector(".inDetailTimeHour08").innerText =
      // document.querySelector(".iconInDetailHour08").innerText =
      // document.querySelector(".temperatureInDetailHour08").innerText =
      // document.querySelector(".windInDetailHour08").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour08").innerText =
      // document.querySelector(".chancesOfRainInDetailHour08").innerText =

      // hourly09
      // document.querySelector(".overallInDetailHour09").innerText =
      // document.querySelector(".inDetailTimeHour09").innerText =
      // document.querySelector(".iconInDetailHour09").innerText =
      // document.querySelector(".temperatureInDetailHour09").innerText =
      // document.querySelector(".windInDetailHour09").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour09").innerText =
      // document.querySelector(".chancesOfRainInDetailHour09").innerText =

      // hourly10
      // document.querySelector(".overallInDetailHour10").innerText =
      // document.querySelector(".inDetailTimeHour10").innerText =
      // document.querySelector(".iconInDetailHour10").innerText =
      // document.querySelector(".temperatureInDetailHour10").innerText =
      // document.querySelector(".windInDetailHour10").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour10").innerText =
      // document.querySelector(".chancesOfRainInDetailHour10").innerText =

      // hourly11
      // document.querySelector(".overallInDetailHour11").innerText =
      // document.querySelector(".inDetailTimeHour11").innerText =
      // document.querySelector(".iconInDetailHour11").innerText =
      // document.querySelector(".temperatureInDetailHour11").innerText =
      // document.querySelector(".windInDetailHour11").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour11").innerText =
      // document.querySelector(".chancesOfRainInDetailHour11").innerText =

      // hourly12
      // document.querySelector(".overallInDetailHour12").innerText =
      // document.querySelector(".inDetailTimeHour12").innerText =
      // document.querySelector(".iconInDetailHour12").innerText =
      // document.querySelector(".temperatureInDetailHour12").innerText =
      // document.querySelector(".windInDetailHour12").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour12").innerText =
      // document.querySelector(".chancesOfRainInDetailHour12").innerText =

      // hourly13
      // document.querySelector(".overallInDetailHour13").innerText =
      // document.querySelector(".inDetailTimeHour13").innerText =
      // document.querySelector(".iconInDetailHour13").innerText =
      // document.querySelector(".temperatureInDetailHour13").innerText =
      // document.querySelector(".windInDetailHour13").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour13").innerText =
      // document.querySelector(".chancesOfRainInDetailHour13").innerText =

      // hourly14
      // document.querySelector(".overallInDetailHour14").innerText =
      // document.querySelector(".inDetailTimeHour14").innerText =
      // document.querySelector(".iconInDetailHour14").innerText =
      // document.querySelector(".temperatureInDetailHour14").innerText =
      // document.querySelector(".windInDetailHour14").innerText =
      // document.querySelector(".chancesOfSnowInDetailHour14").innerText =
      // document.querySelector(".chancesOfRainInDetailHour14").innerText =
    });
}

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

function imageTimeCheck(oTime, iconSrc, season) {
  if (
    (oTime.slice(0, 2) > "20" && oTime.slice(0, 2) <= "24") ||
    (oTime >= "00:00" && oTime.slice(0, 2) <= "04")
  ) {
    iconTime = "night";
    iconEl.innerHTML = '<img src="icons/night/' + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-night" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else if (oTime.slice(0, 2) > "04" && oTime.slice(0, 2) <= "11") {
    iconTime = "morning";
    iconEl.innerHTML = '<img src="icons/day/' + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-morning" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else if (oTime.slice(0, 2) > "11" && oTime.slice(0, 2) <= "16") {
    iconTime = "afternoon";
    iconEl.innerHTML = '<img src="icons/day/' + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-afternoon" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  } else if (oTime.slice(0, 2) > "16" && oTime.slice(0, 2) <= "20") {
    iconTime = "evening";
    iconEl.innerHTML = '<img src="icons/night/' + iconSrc + '"/></img>';
    var fullImgApi =
      imageApi +
      season +
      "-evening" +
      "-landscape" +
      "&client_id=9kvb2pRRvKu2HUIy1cBVjsnRVC9wjPkBSlujgUAqwI4";
  }
  imageApiFunc(fullImgApi);
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
      timeEl.innerText = `Last Update: ${oTime} ⏱\nTime Zone: ${tz}`;
      footerEl.innerHTML =
        "<a href=https://twitter.com/SaurabhChirde>by saurabhchirde</a>";

      var season = partial.replace(" ", "-");
      var iconSrc = json.current.condition.icon.slice(-7);

      imageTimeCheck(oTime, iconSrc, season);
    })
    .catch(() => {
      document.querySelector(".error").innerText = "Enter a valid city name ! ";
      output.classList.add("hide");
      document.querySelector(".outputForecast").classList.add("hide");
    });
}

function findWeather() {
  let txt = inputCity.value;
  output.classList.remove("hide");
  document.querySelector(".forecastInDetail").classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");
  document.querySelector(".error").innerText = "";

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

function weatherForecastThreeDays() {
  let txt = inputCity.value;
  document.querySelector(".outputForecast").classList.remove("hide");
  document.querySelector(".forecastInDetail").classList.add("hide");
  output.classList.add("hide");
  document.querySelector(".error").innerText = "";

  if (txt !== "") {
    var fullForecastApi = forecastApi + txt + "&days=7";
    fetchForecastApi(fullForecastApi);
  } else {
    document.querySelector(".error").innerText = "Enter a city name! ";
    document.querySelector(".outputForecast").classList.add("hide");
    output.classList.add("hide");
  }
}

function day2Details() {
  output.classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");

  console.log("day2 clicked");
}

function day3Details() {
  output.classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");

  console.log("day3 clicked");
}
btnForcast.addEventListener("click", weatherForecastThreeDays);
day1El.addEventListener("click", day1Details);
day2El.addEventListener("click", day2Details);
day3El.addEventListener("click", day3Details);
