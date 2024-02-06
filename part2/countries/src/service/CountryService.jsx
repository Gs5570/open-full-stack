import axios from 'axios';

const URL = 'https://studies.cs.helsinki.fi/restcountries/api/name';
const WeatherURl = 'https://api.openweathermap.org/data/2.5/weather?';

async function getCountry(country) {
  let response = await axios.get(`${URL}/${country}`);
  return response;
}

async function getWeather(latitude, longitude, api) {
  let response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}`
  );
  return response;
}

export default { getCountry, getWeather };
