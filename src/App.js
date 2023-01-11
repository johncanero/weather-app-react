import { useState } from "react";
import "./App.css";
// Sections
import Hero from "./sections/Hero";
import Search from "./components/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Footer from "./sections/Footer";
// Weather API Key
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  // OpenWeather - Current Weather
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // OpenWeather
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Hero className="h-10" />
      <div className="h-10 mb-auto">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
      <Footer className="h-10" />
    </div>
  );
}

export default App;
