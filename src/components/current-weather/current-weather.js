import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top */}
      <div className="top">
        <div>
          <p className="city ">{data.city}</p>
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
        <p className="temperature text-amber-200">{Math.round(data.main.temp)}°C</p>
        <div className="details">
            {/* Details */}
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          {/* Feels like */}
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          {/* Wind */}
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          {/* Humidity */}
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          {/* Pressure */}
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
