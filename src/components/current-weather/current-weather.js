import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
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
