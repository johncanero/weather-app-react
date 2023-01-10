import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        {/* City and Weather */}
        <div>
          <p className="city">Manila</p>
          <p className="weather-description">Sunny</p>
        </div>
        {/* Icon */}
        <img alt="weather" className="weather-icon" src="/icons/01d.png" />
      </div>
    </div>
  );
};

export default CurrentWeather;
