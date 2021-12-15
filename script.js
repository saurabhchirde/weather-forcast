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

function calHourly(currentDay, json) {
  // hourly00
  document.querySelector(".overallInDetailHour00").innerText =
    json.forecast.forecastday[currentDay].hour[0].condition.text;
  document.querySelector(".inDetailTimeHour00").innerText =
    json.forecast.forecastday[currentDay].hour[0].time.slice(-5);
  document.querySelector(".iconInDetailHour00").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[0].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour00").innerText =
    json.forecast.forecastday[currentDay].hour[0].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour00"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[0].wind_dir}, ${json.forecast.forecastday[currentDay].hour[0].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour00").innerText =
  //   json.forecast.forecastday[currentDay].hour[0].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour00").innerText ="Rain chances"
  //   json.forecast.forecastday[currentDay].hour[0].chance_of_rain;

  // hourly01
  document.querySelector(".overallInDetailHour01").innerText =
    json.forecast.forecastday[currentDay].hour[1].condition.text;
  document.querySelector(".inDetailTimeHour01").innerText =
    json.forecast.forecastday[currentDay].hour[1].time.slice(-5);
  document.querySelector(".iconInDetailHour01").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[1].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour01").innerText =
    json.forecast.forecastday[currentDay].hour[1].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour01"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[1].wind_dir}, ${json.forecast.forecastday[currentDay].hour[1].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour01").innerText =
  //   json.forecast.forecastday[currentDay].hour[1].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour01").innerText =
  //   json.forecast.forecastday[currentDay].hour[1].chance_of_rain;

  // hourly02
  document.querySelector(".overallInDetailHour02").innerText =
    json.forecast.forecastday[currentDay].hour[2].condition.text;
  document.querySelector(".inDetailTimeHour02").innerText =
    json.forecast.forecastday[currentDay].hour[2].time.slice(-5);
  document.querySelector(".iconInDetailHour02").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[2].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour02").innerText =
    json.forecast.forecastday[currentDay].hour[2].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour02"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[2].wind_dir}, ${json.forecast.forecastday[currentDay].hour[2].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour02").innerText =
  //   json.forecast.forecastday[currentDay].hour[2].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour02").innerText =
  //   json.forecast.forecastday[currentDay].hour[2].chance_of_rain;

  // hourly03
  document.querySelector(".overallInDetailHour03").innerText =
    json.forecast.forecastday[currentDay].hour[3].condition.text;
  document.querySelector(".inDetailTimeHour03").innerText =
    json.forecast.forecastday[currentDay].hour[3].time.slice(-5);
  document.querySelector(".iconInDetailHour03").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[3].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour03").innerText =
    json.forecast.forecastday[currentDay].hour[3].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour03"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[3].wind_dir}, ${json.forecast.forecastday[currentDay].hour[3].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour03").innerText =
  //   json.forecast.forecastday[currentDay].hour[3].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour03").innerText =
  //   json.forecast.forecastday[currentDay].hour[3].chance_of_rain;

  // hourly04
  document.querySelector(".overallInDetailHour04").innerText =
    json.forecast.forecastday[currentDay].hour[4].condition.text;
  document.querySelector(".inDetailTimeHour04").innerText =
    json.forecast.forecastday[currentDay].hour[4].time.slice(-5);
  document.querySelector(".iconInDetailHour04").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[4].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour04").innerText =
    json.forecast.forecastday[currentDay].hour[4].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour04"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[4].wind_dir}, ${json.forecast.forecastday[currentDay].hour[4].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour04").innerText =
  //   json.forecast.forecastday[currentDay].hour[4].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour04").innerText =
  //   json.forecast.forecastday[currentDay].hour[4].chance_of_rain;

  // hourly05
  document.querySelector(".overallInDetailHour05").innerText =
    json.forecast.forecastday[currentDay].hour[5].condition.text;
  document.querySelector(".inDetailTimeHour05").innerText =
    json.forecast.forecastday[currentDay].hour[5].time.slice(-5);
  document.querySelector(".iconInDetailHour05").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[5].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour05").innerText =
    json.forecast.forecastday[currentDay].hour[5].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour05"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[5].wind_dir}, ${json.forecast.forecastday[currentDay].hour[5].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour05").innerText =
  //   json.forecast.forecastday[currentDay].hour[5].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour05").innerText =
  //   json.forecast.forecastday[currentDay].hour[5].chance_of_rain;

  // hourly06
  document.querySelector(".overallInDetailHour06").innerText =
    json.forecast.forecastday[currentDay].hour[6].condition.text;
  document.querySelector(".inDetailTimeHour06").innerText =
    json.forecast.forecastday[currentDay].hour[6].time.slice(-5);
  document.querySelector(".iconInDetailHour06").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[6].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour06").innerText =
    json.forecast.forecastday[currentDay].hour[6].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour06"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[6].wind_dir}, ${json.forecast.forecastday[currentDay].hour[6].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour06").innerText =
  //   json.forecast.forecastday[currentDay].hour[6].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour06").innerText =
  //   json.forecast.forecastday[currentDay].hour[6].chance_of_rain;

  // hourly07
  document.querySelector(".overallInDetailHour07").innerText =
    json.forecast.forecastday[currentDay].hour[7].condition.text;
  document.querySelector(".inDetailTimeHour07").innerText =
    json.forecast.forecastday[currentDay].hour[7].time.slice(-5);
  document.querySelector(".iconInDetailHour07").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[7].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour07").innerText =
    json.forecast.forecastday[currentDay].hour[7].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour07"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[7].wind_dir}, ${json.forecast.forecastday[currentDay].hour[7].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour07").innerText =
  //   json.forecast.forecastday[currentDay].hour[7].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour07").innerText =
  //   json.forecast.forecastday[currentDay].hour[7].chance_of_rain;

  // hourly08
  document.querySelector(".overallInDetailHour08").innerText =
    json.forecast.forecastday[currentDay].hour[8].condition.text;
  document.querySelector(".inDetailTimeHour08").innerText =
    json.forecast.forecastday[currentDay].hour[8].time.slice(-5);
  document.querySelector(".iconInDetailHour08").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[8].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour08").innerText =
    json.forecast.forecastday[currentDay].hour[8].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour08"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[8].wind_dir}, ${json.forecast.forecastday[currentDay].hour[8].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour08").innerText =
  //   json.forecast.forecastday[currentDay].hour[8].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour08").innerText =
  //   json.forecast.forecastday[currentDay].hour[8].chance_of_rain;

  // hourly09
  document.querySelector(".overallInDetailHour09").innerText =
    json.forecast.forecastday[currentDay].hour[9].condition.text;
  document.querySelector(".inDetailTimeHour09").innerText =
    json.forecast.forecastday[currentDay].hour[9].time.slice(-5);
  document.querySelector(".iconInDetailHour09").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[9].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour09").innerText =
    json.forecast.forecastday[currentDay].hour[9].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour09"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[9].wind_dir}, ${json.forecast.forecastday[currentDay].hour[9].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour09").innerText =
  //   json.forecast.forecastday[currentDay].hour[9].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour09").innerText =
  //   json.forecast.forecastday[currentDay].hour[9].chance_of_rain;

  // hourly10
  document.querySelector(".overallInDetailHour10").innerText =
    json.forecast.forecastday[currentDay].hour[10].condition.text;
  document.querySelector(".inDetailTimeHour10").innerText =
    json.forecast.forecastday[currentDay].hour[10].time.slice(-5);
  document.querySelector(".iconInDetailHour10").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[10].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour10").innerText =
    json.forecast.forecastday[currentDay].hour[10].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour10"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[10].wind_dir}, ${json.forecast.forecastday[currentDay].hour[10].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour10").innerText =
  //   json.forecast.forecastday[currentDay].hour[10].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour10").innerText =
  //   json.forecast.forecastday[currentDay].hour[10].chance_of_rain;

  // hourly11
  document.querySelector(".overallInDetailHour11").innerText =
    json.forecast.forecastday[currentDay].hour[11].condition.text;
  document.querySelector(".inDetailTimeHour11").innerText =
    json.forecast.forecastday[currentDay].hour[11].time.slice(-5);
  document.querySelector(".iconInDetailHour11").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[11].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour11").innerText =
    json.forecast.forecastday[currentDay].hour[11].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour11"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[11].wind_dir}, ${json.forecast.forecastday[currentDay].hour[11].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour11").innerText =
  //   json.forecast.forecastday[currentDay].hour[11].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour11").innerText =
  //   json.forecast.forecastday[currentDay].hour[11].chance_of_rain;

  // hourly12
  document.querySelector(".overallInDetailHour12").innerText =
    json.forecast.forecastday[currentDay].hour[12].condition.text;
  document.querySelector(".inDetailTimeHour12").innerText =
    json.forecast.forecastday[currentDay].hour[12].time.slice(-5);
  document.querySelector(".iconInDetailHour12").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[12].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour12").innerText =
    json.forecast.forecastday[currentDay].hour[12].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour12"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[12].wind_dir}, ${json.forecast.forecastday[currentDay].hour[12].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour12").innerText =
  //   json.forecast.forecastday[currentDay].hour[12].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour12").innerText =
  //   json.forecast.forecastday[currentDay].hour[12].chance_of_rain;
  // hourly13
  document.querySelector(".overallInDetailHour13").innerText =
    json.forecast.forecastday[currentDay].hour[13].condition.text;
  document.querySelector(".inDetailTimeHour13").innerText =
    json.forecast.forecastday[currentDay].hour[13].time.slice(-5);
  document.querySelector(".iconInDetailHour13").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[13].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour13").innerText =
    json.forecast.forecastday[currentDay].hour[13].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour13"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[13].wind_dir}, ${json.forecast.forecastday[currentDay].hour[13].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour13").innerText =
  //   json.forecast.forecastday[currentDay].hour[13].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour13").innerText =
  //   json.forecast.forecastday[currentDay].hour[13].chance_of_rain;

  // hourly14
  document.querySelector(".overallInDetailHour14").innerText =
    json.forecast.forecastday[currentDay].hour[14].condition.text;
  document.querySelector(".inDetailTimeHour14").innerText =
    json.forecast.forecastday[currentDay].hour[14].time.slice(-5);
  document.querySelector(".iconInDetailHour14").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[14].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour14").innerText =
    json.forecast.forecastday[currentDay].hour[14].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour14"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[14].wind_dir}, ${json.forecast.forecastday[currentDay].hour[14].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour14").innerText =
  //   json.forecast.forecastday[currentDay].hour[14].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour14").innerText =
  //   json.forecast.forecastday[currentDay].hour[14].chance_of_rain;

  // hourly15
  document.querySelector(".overallInDetailHour15").innerText =
    json.forecast.forecastday[currentDay].hour[15].condition.text;
  document.querySelector(".inDetailTimeHour15").innerText =
    json.forecast.forecastday[currentDay].hour[15].time.slice(-5);
  document.querySelector(".iconInDetailHour15").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[15].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour15").innerText =
    json.forecast.forecastday[currentDay].hour[15].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour15"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[15].wind_dir}, ${json.forecast.forecastday[currentDay].hour[15].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour14").innerText =
  //   json.forecast.forecastday[currentDay].hour[15].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour14").innerText =
  //   json.forecast.forecastday[currentDay].hour[15].chance_of_rain;

  // hourly16
  document.querySelector(".overallInDetailHour16").innerText =
    json.forecast.forecastday[currentDay].hour[16].condition.text;
  document.querySelector(".inDetailTimeHour16").innerText =
    json.forecast.forecastday[currentDay].hour[16].time.slice(-5);
  document.querySelector(".iconInDetailHour16").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[16].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour16").innerText =
    json.forecast.forecastday[currentDay].hour[16].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour16"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[16].wind_dir}, ${json.forecast.forecastday[currentDay].hour[16].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour16").innerText =
  //   json.forecast.forecastday[currentDay].hour[16].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour16").innerText =
  //   json.forecast.forecastday[currentDay].hour[16].chance_of_rain;

  // hourly17
  document.querySelector(".overallInDetailHour17").innerText =
    json.forecast.forecastday[currentDay].hour[17].condition.text;
  document.querySelector(".inDetailTimeHour17").innerText =
    json.forecast.forecastday[currentDay].hour[17].time.slice(-5);
  document.querySelector(".iconInDetailHour17").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[17].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour17").innerText =
    json.forecast.forecastday[currentDay].hour[17].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour17"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[17].wind_dir}, ${json.forecast.forecastday[currentDay].hour[17].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour17").innerText =
  //   json.forecast.forecastday[currentDay].hour[17].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour17").innerText =
  //   json.forecast.forecastday[currentDay].hour[17].chance_of_rain;

  // hourly18
  document.querySelector(".overallInDetailHour18").innerText =
    json.forecast.forecastday[currentDay].hour[18].condition.text;
  document.querySelector(".inDetailTimeHour18").innerText =
    json.forecast.forecastday[currentDay].hour[18].time.slice(-5);
  document.querySelector(".iconInDetailHour18").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[18].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour18").innerText =
    json.forecast.forecastday[currentDay].hour[18].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour18"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[18].wind_dir}, ${json.forecast.forecastday[currentDay].hour[18].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour18").innerText =
  //   json.forecast.forecastday[currentDay].hour[18].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour18").innerText =
  //   json.forecast.forecastday[currentDay].hour[18].chance_of_rain;

  // hourly19
  document.querySelector(".overallInDetailHour19").innerText =
    json.forecast.forecastday[currentDay].hour[19].condition.text;
  document.querySelector(".inDetailTimeHour19").innerText =
    json.forecast.forecastday[currentDay].hour[19].time.slice(-5);
  document.querySelector(".iconInDetailHour19").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[19].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour19").innerText =
    json.forecast.forecastday[currentDay].hour[19].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour19"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[19].wind_dir}, ${json.forecast.forecastday[currentDay].hour[19].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour19").innerText =
  //   json.forecast.forecastday[currentDay].hour[19].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour19").innerText =
  //   json.forecast.forecastday[currentDay].hour[19].chance_of_rain;

  // hourly20
  document.querySelector(".overallInDetailHour20").innerText =
    json.forecast.forecastday[currentDay].hour[20].condition.text;
  document.querySelector(".inDetailTimeHour20").innerText =
    json.forecast.forecastday[currentDay].hour[20].time.slice(-5);
  document.querySelector(".iconInDetailHour20").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[20].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour20").innerText =
    json.forecast.forecastday[currentDay].hour[20].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour20"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[20].wind_dir}, ${json.forecast.forecastday[currentDay].hour[20].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour20").innerText =
  //   json.forecast.forecastday[currentDay].hour[20].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour20").innerText =
  //   json.forecast.forecastday[currentDay].hour[20].chance_of_rain;

  // hourly21
  document.querySelector(".overallInDetailHour21").innerText =
    json.forecast.forecastday[currentDay].hour[21].condition.text;
  document.querySelector(".inDetailTimeHour21").innerText =
    json.forecast.forecastday[currentDay].hour[21].time.slice(-5);
  document.querySelector(".iconInDetailHour21").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[21].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour21").innerText =
    json.forecast.forecastday[currentDay].hour[21].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour21"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[21].wind_dir}, ${json.forecast.forecastday[currentDay].hour[21].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour21").innerText =
  //   json.forecast.forecastday[currentDay].hour[21].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour21").innerText =
  //   json.forecast.forecastday[currentDay].hour[21].chance_of_rain;

  // hourly22
  document.querySelector(".overallInDetailHour22").innerText =
    json.forecast.forecastday[currentDay].hour[22].condition.text;
  document.querySelector(".inDetailTimeHour22").innerText =
    json.forecast.forecastday[currentDay].hour[22].time.slice(-5);
  document.querySelector(".iconInDetailHour22").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[22].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour22").innerText =
    json.forecast.forecastday[currentDay].hour[22].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour22"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[22].wind_dir}, ${json.forecast.forecastday[currentDay].hour[22].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour22").innerText =
  //   json.forecast.forecastday[currentDay].hour[22].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour22").innerText =
  //   json.forecast.forecastday[currentDay].hour[22].chance_of_rain;

  // hourly23
  document.querySelector(".overallInDetailHour23").innerText =
    json.forecast.forecastday[currentDay].hour[23].condition.text;
  document.querySelector(".inDetailTimeHour23").innerText =
    json.forecast.forecastday[currentDay].hour[23].time.slice(-5);
  document.querySelector(".iconInDetailHour23").innerHTML =
    '<img src="https:' +
    json.forecast.forecastday[currentDay].hour[23].condition.icon +
    '"/></img>';
  document.querySelector(".temperatureInDetailHour23").innerText =
    json.forecast.forecastday[currentDay].hour[23].temp_c + "˚C";
  document.querySelector(
    ".windInDetailHour23"
  ).innerText = `Wind: ${json.forecast.forecastday[currentDay].hour[23].wind_dir}, ${json.forecast.forecastday[currentDay].hour[23].wind_kph}`;

  `Wind: ${json.current.wind_dir}, ${json.current.wind_kph} km/h 🍃 `;
  // document.querySelector(".chancesOfSnowInDetailHour23").innerText =
  //   json.forecast.forecastday[currentDay].hour[23].chance_of_snow;
  // document.querySelector(".chancesOfRainInDetailHour23").innerText =
  //   json.forecast.forecastday[currentDay].hour[23].chance_of_rain;
}

function day1Details() {
  output.classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");
  document.querySelector(".forecastInDetail").classList.remove("hide");

  let txt = inputCity.value;
  var fullForecastApi = forecastApi + txt + "&days=7";

  fetch(fullForecastApi)
    .then((res) => res.json())
    .then((json) => {
      // main
      document.querySelector(
        ".overallInDetail"
      ).innerText = `" ${json.forecast.forecastday[0].day.condition.text} "`;

      document.querySelector(".overallInDetail").classList.add("bglight");

      document.querySelector(
        ".locationInDetail"
      ).innerText = `🌎 ${json.location.name}, ${json.location.region}, ${json.location.country}`;

      document.querySelector(
        ".iconInDetail"
      ).innerHTML = `<img src="https:${json.forecast.forecastday[0].day.condition.icon}"/>`;
      document.querySelector(
        ".latitudeLongitudeInDetail"
      ).innerText = `Lat: ${json.location.lat}, Lon: ${json.location.lon}`;

      document.querySelector(
        ".temperatureInDetail"
      ).innerText = `Min Temp: ${json.forecast.forecastday[0].day.mintemp_c}˚C \nMax Temp: ${json.forecast.forecastday[0].day.maxtemp_c}˚C`;

      document.querySelector(
        ".windInDetail"
      ).innerText = `Max Wind: ${json.forecast.forecastday[0].day.maxwind_kph}km/h 🍃 `;

      document.querySelector(
        ".humidityInDetail"
      ).innerText = `Avg Humidity: ${json.forecast.forecastday[0].day.avghumidity}%`;

      document.querySelector(
        ".onlyDateInDetail"
      ).innerText = `Date : ${json.forecast.forecastday[0].date}`;

      document.querySelector(
        ".onlyTimeInDetail"
      ).innerText = `Time Zone: ${json.location.tz_id} ⏱`;

      document.querySelector(
        ".sunriseSunsetTimeInDetail"
      ).innerText = `Sunrise: ${json.forecast.forecastday[0].astro.sunrise}\nSunset : ${json.forecast.forecastday[0].astro.sunset}`;
      document.querySelector(
        ".moonriseMoonsetTimeInDetail"
      ).innerText = `Moonrise: ${json.forecast.forecastday[0].astro.moonrise}\nMoonset : ${json.forecast.forecastday[0].astro.moonset}`;

      let currentDay = 0;

      calHourly(currentDay, json);
    });
}

function day2Details() {
  output.classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");
  document.querySelector(".forecastInDetail").classList.remove("hide");

  let txt = inputCity.value;
  var fullForecastApi = forecastApi + txt + "&days=7";

  fetch(fullForecastApi)
    .then((res) => res.json())
    .then((json) => {
      // main
      document.querySelector(
        ".overallInDetail"
      ).innerText = `" ${json.forecast.forecastday[1].day.condition.text} "`;

      document.querySelector(".overallInDetail").classList.add("bglight");

      document.querySelector(
        ".locationInDetail"
      ).innerText = `🌎 ${json.location.name}, ${json.location.region}, ${json.location.country}`;

      document.querySelector(
        ".iconInDetail"
      ).innerHTML = `<img src="https:${json.forecast.forecastday[1].day.condition.icon}"/>`;
      document.querySelector(
        ".latitudeLongitudeInDetail"
      ).innerText = `Lat: ${json.location.lat}, Lon: ${json.location.lon}`;

      document.querySelector(
        ".temperatureInDetail"
      ).innerText = `Min Temp: ${json.forecast.forecastday[1].day.mintemp_c}˚C \nMax Temp: ${json.forecast.forecastday[1].day.maxtemp_c}˚C`;

      document.querySelector(
        ".windInDetail"
      ).innerText = `Max Wind: ${json.forecast.forecastday[1].day.maxwind_kph}km/h 🍃 `;

      document.querySelector(
        ".humidityInDetail"
      ).innerText = `Avg Humidity: ${json.forecast.forecastday[1].day.avghumidity}%`;

      document.querySelector(
        ".onlyDateInDetail"
      ).innerText = `Date : ${json.forecast.forecastday[1].date}`;

      document.querySelector(
        ".onlyTimeInDetail"
      ).innerText = `Time Zone: ${json.location.tz_id} ⏱`;

      document.querySelector(
        ".sunriseSunsetTimeInDetail"
      ).innerText = `Sunrise: ${json.forecast.forecastday[1].astro.sunrise}\nSunset : ${json.forecast.forecastday[1].astro.sunset}`;
      document.querySelector(
        ".moonriseMoonsetTimeInDetail"
      ).innerText = `Moonrise: ${json.forecast.forecastday[1].astro.moonrise}\nMoonset : ${json.forecast.forecastday[1].astro.moonset}`;

      let currentDay = 1;

      calHourly(currentDay, json);
    });
}

function day3Details() {
  output.classList.add("hide");
  document.querySelector(".outputForecast").classList.add("hide");
  document.querySelector(".forecastInDetail").classList.remove("hide");

  let txt = inputCity.value;
  var fullForecastApi = forecastApi + txt + "&days=7";

  fetch(fullForecastApi)
    .then((res) => res.json())
    .then((json) => {
      // main
      document.querySelector(
        ".overallInDetail"
      ).innerText = `" ${json.forecast.forecastday[2].day.condition.text} "`;

      document.querySelector(".overallInDetail").classList.add("bglight");

      document.querySelector(
        ".locationInDetail"
      ).innerText = `🌎 ${json.location.name}, ${json.location.region}, ${json.location.country}`;

      document.querySelector(
        ".iconInDetail"
      ).innerHTML = `<img src="https:${json.forecast.forecastday[2].day.condition.icon}"/>`;
      document.querySelector(
        ".latitudeLongitudeInDetail"
      ).innerText = `Lat: ${json.location.lat}, Lon: ${json.location.lon}`;

      document.querySelector(
        ".temperatureInDetail"
      ).innerText = `Min Temp: ${json.forecast.forecastday[2].day.mintemp_c}˚C \nMax Temp: ${json.forecast.forecastday[2].day.maxtemp_c}˚C`;

      document.querySelector(
        ".windInDetail"
      ).innerText = `Max Wind: ${json.forecast.forecastday[2].day.maxwind_kph}km/h 🍃 `;

      document.querySelector(
        ".humidityInDetail"
      ).innerText = `Avg Humidity: ${json.forecast.forecastday[2].day.avghumidity}%`;

      document.querySelector(
        ".onlyDateInDetail"
      ).innerText = `Date : ${json.forecast.forecastday[2].date}`;

      document.querySelector(
        ".onlyTimeInDetail"
      ).innerText = `Time Zone: ${json.location.tz_id} ⏱`;

      document.querySelector(
        ".sunriseSunsetTimeInDetail"
      ).innerText = `Sunrise: ${json.forecast.forecastday[2].astro.sunrise}\nSunset : ${json.forecast.forecastday[2].astro.sunset}`;
      document.querySelector(
        ".moonriseMoonsetTimeInDetail"
      ).innerText = `Moonrise: ${json.forecast.forecastday[2].astro.moonrise}\nMoonset : ${json.forecast.forecastday[2].astro.moonset}`;

      let currentDay = 2;

      calHourly(currentDay, json);
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

btnForcast.addEventListener("click", weatherForecastThreeDays);

day1El.addEventListener("click", day1Details);
day2El.addEventListener("click", day2Details);
day3El.addEventListener("click", day3Details);
