import { useState } from "react";
import "./App.css";
// Sections
// Hero
import Hero from "./sections/Hero";
// Function Feature
import Search from "./components/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
// Footer and Application Feature
// eslint-disable-next-line no-unused-vars
import ApplicationFeature from "./sections/ApplicationFeature";
import Footer from "./sections/Footer";
// Weather API Key
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/utils/api";

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
    <div className="flex flex-col min-h-screen">
      <Hero/>
      <div>
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
      {/* Application Feature */}
      <ApplicationFeature />
      <Footer />
    </div>
  );
}

export default App;
