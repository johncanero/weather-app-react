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

      <div className="bottom">
        {/* Temperature */}
        <p className="temperature">18°C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">22°C</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
