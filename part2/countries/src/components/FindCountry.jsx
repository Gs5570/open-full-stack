import { useState, useEffect } from 'react';
import countryService from '../service/CountryService';

export default function FindCountry() {
  //environment variable key
  const weather_api_key = import.meta.env.VITE_KEY;

  const [countryName, setCountryName] = useState(); // set the search name for the country
  const [countryInfo, setCountryInfo] = useState(); // set country info from Api
  const [info, setInfo] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(); // set weather info form Api

  console.log('countryInfo: ', countryInfo);
  console.log('weatherInfo: ', weatherInfo);
  console.log('Info: ', info);

  useEffect(() => {
    let response = countryService.getCountry(countryName);
    response.then((response) => {
      setCountryInfo(response.data);
      setInfo((prevInfo) => !prevInfo);
    });

    response.catch((error) => console.log(error));
  }, [countryName]);

  useEffect(() => {
    if (info) {
      getWeather();
    }
  }, [info, countryInfo]);

  function getWeather() {
    let weatherRes = countryService.getWeather(
      countryInfo.latlng[0],
      countryInfo.latlng[1],
      weather_api_key
    );
    weatherRes.then((response) => setWeatherInfo(response.data));
    weatherRes.catch((error) => console.log(error));
  }

  function handleChange(event) {
    event.preventDefault();
    setCountryName(event.target.value);

    if (countryName) getWeather();
  }

  return (
    <div>
      <label>
        find country:{' '}
        <input
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </label>
      {info && countryInfo && weatherInfo && (
        <div>
          <h1>{countryInfo.name.common}</h1>
          <p>Capital: {countryInfo.capital}</p>
          <p>Area: {countryInfo.area}</p>
          <h2>Languages:</h2>
          {Object.values(countryInfo.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
          <img src={countryInfo.flags.png} />
          <h2>Weather in {countryInfo.name.common}</h2>

          <p>temperature: {weatherInfo.main.temp}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
          />
          <p> wind: {weatherInfo.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
