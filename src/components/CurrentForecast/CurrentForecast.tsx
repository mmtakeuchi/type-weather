import React from "react";
import { IWeather } from "../../types";
import { convertTime } from "../util";
import "./CurrentForecast.scss";

type Props = {
  weather: IWeather;
};

const CurrentForecast = ({ weather }: Props) => {
  console.log(weather);
  return (
    <div className="weather-card">
      <div className="header">Current Weather</div>
      <div className="weather-details">
        <div className="left">
          <h3 className="city">Phoenix</h3>
          <div className="temp">
            <img
              src=" http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
            />
            <span>
              76<sup>&deg;</sup>
            </span>
          </div>
          <h5 className="sky">clear sky</h5>
        </div>
        <div className="right">
          <div>
            Feels Like{" "}
            <span>
              74<sup>&deg;</sup>
            </span>
          </div>

          <div className="high-low">
            <div className="high">
              H:
              <span>
                68<sup>&deg;</sup>
              </span>
            </div>
            <div className="low">
              L:
              <span>
                80<sup>&deg;</sup>
              </span>
            </div>
          </div>

          <div className="humidity">
            Humidty <span>20%</span>
          </div>

          <div className="winds">
            Wind <span>3</span>
          </div>

          <div className="pressure">
            Pressure <span>1014 hPa</span>
          </div>

          <div className="sunrise-sunset">
            <div className="sunrise">
              Sunrise <span>{convertTime(1560343627, -25200)}</span>
            </div>
            <div className="sunset">
              Sunset{" "}
              <span>
                {convertTime(1560396563, -25200)}
                {/* {new Date(1643331271).toLocaleString().split(", ")[1]} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
