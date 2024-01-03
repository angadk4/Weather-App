import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/currrent-weather/current-weather';
import { useState } from "react";
import { weatherapiUrl } from './api';
import { weatherapiKey } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${weatherapiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherapiKey}&units=metric`);
    const forecastFetch = fetch(`${weatherapiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherapiKey}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

console.log(currentWeather)
console.log(forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
