const jokeURL = "https://v2.jokeapi.dev/joke/Pun?format=txt&type=single&safe-mode";
const jokeUrlJSON = "https://v2.jokeapi.dev/joke/Pun?type=twopart&safe-mode";

// The older fetch().then()-syntax
fetch(jokeURL)
    .then(resp => resp.text())
    .then(respText => {
        console.log(respText);
    });

// The modern async/await-syntax
async function getJoke() {
    const resp = await fetch(jokeURL);
    const respText = await resp.text();

    document.querySelector('#joke').innerHTML = respText;
}
getJoke();

// JSON
async function getJsonJoke() {
    const resp = await fetch(jokeUrlJSON);
    const respObj = await resp.json();

    console.log(respObj);
    document.querySelector('#joke-json').innerHTML = respObj.setup;

    document.querySelector('#joke-json').innerHTML += `<p style="color: red;">
        ${respObj.delivery}
    </p>`;

}
getJsonJoke();

// JSON
const pretzel = { produkt: "Pretzel", pris: 2.5 };
console.log(pretzel)

const pretzelJSON = JSON.stringify(pretzel);
console.log(pretzelJSON)

const pretzelObject = JSON.parse(pretzelJSON);
console.log(pretzelObject);

const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=60.1695&longitude=24.9354&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_speed_180m,wind_direction_10m,wind_direction_80m,wind_direction_120m,wind_direction_180m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max&timezone=GMT&forecast_days=1"

async function getWeather() {
    const resp = await fetch(weatherURL);
    const respWeather = await resp.text();
    const weather = JSON.parse(respWeather);

    console.log(weather);

    document.querySelector('#curTemp').innerHTML = `Current temperature:
        ${weather.current.temperature_2m} ${weather.current_units.temperature_2m}
        `;

    document.querySelector('#maxTemp').innerHTML = `Max Temperature today:
        ${weather.daily.temperature_2m_max} ${weather.current_units.temperature_2m}
        `;

    document.querySelector('#minTemp').innerHTML = `Min Temperature today:
        ${weather.daily.temperature_2m_min} ${weather.current_units.temperature_2m}
        `;

    document.querySelector('#apMaxTemp').innerHTML = `Max apparent temperature today:
        ${weather.daily.apparent_temperature_max} ${weather.current_units.temperature_2m}
        `;

    document.querySelector('#apMinTemp').innerHTML = `Min apparent temperature today:
        ${weather.daily.apparent_temperature_min} ${weather.current_units.temperature_2m}
        `;
}
getWeather();

console.log("last row");