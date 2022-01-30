import React from "react";
import { IForecastItem } from "../../types";
import { convertDay } from "../../util";
import "./ForecastCard.scss";

const ForecastCard = ({ forecast }: IForecastItem) => {
  console.log(forecast);
  return (
    <div className="forecast-card">
      <div className="day">{convertDay(forecast?.dt)}</div>
      <div className="forecast-icon">
        <img
          src={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`}
          alt="forecast icon"
        />
      </div>
      <div className="sky">{forecast?.weather[0].description}</div>
      <div className="temperatures">
        <span>
          {forecast?.main.temp_min.toFixed(0)}
          <sup>&deg;</sup> /{" "}
        </span>

        <span>
          {forecast?.main.temp_max.toFixed(0)}
          <sup>&deg;</sup>
        </span>
      </div>
    </div>
  );
};

export default ForecastCard;
