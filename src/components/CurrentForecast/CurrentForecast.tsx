import React from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { IWeatherItem } from "../../types";
import { convertTime, convertToCelcius } from "../../util";
import "./CurrentForecast.scss";

const CurrentForecast = ({
  forecast,
  isLoading,
  error,
  degrees,
  handleToggle,
}: IWeatherItem) => {
  console.log(degrees);
  return (
    <div className={`weather-card ${error && "error"}`}>
      {error.length ? (
        <div className="error">{error}</div>
      ) : (
        <>
          <div className="header">
            Current Weather
            <ToggleSwitch handleToggle={handleToggle} />
          </div>
          <div className="weather-details">
            <div className="left">
              <h2 className="city">{forecast?.name}</h2>
              <div className="temp">
                <img
                  src={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
                <span>
                  {degrees
                    ? forecast?.main.temp.toFixed(0)
                    : convertToCelcius(forecast?.main.temp.toFixed(0))}
                  <sup>&deg;</sup>
                </span>
              </div>
              <div className="sky">{forecast?.weather[0].description}</div>
            </div>
            <div className="right">
              <div>
                Feels Like{" "}
                <span>
                  {degrees
                    ? forecast?.main.feels_like.toFixed(0)
                    : convertToCelcius(forecast?.main.feels_like.toFixed(0))}
                  <sup>&deg;</sup>
                </span>
              </div>

              <div className="high-low">
                <div className="high">
                  H:
                  <span>
                    {degrees
                      ? forecast?.main.temp_max.toFixed(0)
                      : convertToCelcius(forecast?.main.temp_max.toFixed(0))}
                    <sup>&deg;</sup>
                  </span>
                </div>
                <div className="low">
                  L:
                  <span>
                    {degrees
                      ? forecast?.main.temp_min.toFixed(0)
                      : convertToCelcius(forecast?.main.temp_min.toFixed(0))}
                    <sup>&deg;</sup>
                  </span>
                </div>
              </div>

              <div className="humidity">
                Humidty <span>{forecast?.main.humidity}%</span>
              </div>

              <div className="winds">
                Wind <span>{forecast?.wind.speed} mph</span>
              </div>

              <div className="pressure">
                Pressure <span>{forecast?.main.pressure} hPa</span>
              </div>

              <div className="sunrise-sunset">
                <div className="sunrise">
                  Sunrise{" "}
                  <span>
                    {convertTime(forecast?.sys.sunrise, forecast?.timezone)}
                  </span>
                </div>
                <div className="sunset">
                  Sunset{" "}
                  <span>
                    {convertTime(forecast?.sys.sunset, forecast?.timezone)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentForecast;
