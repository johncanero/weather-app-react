import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        {/* City and Weather */}
        <div>
          <p className="city">Manila</p>
          <p className="weather-description">Sunny</p>
        </div>
        {/* Icon */}
        <img alt="weather" className="weather-icon" src="/icons/01d.png" />
      </div>

      {/* Bottom */}
      <div className="bottom">
        {/* Temperature */}
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          {/* Feels like */}
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>
          {/* Wind */}
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          {/* Humidity */}
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15 %</span>
          </div>
          {/* Pressure */}
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
