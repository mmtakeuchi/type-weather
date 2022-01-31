import React from "react";
import { IForecastItem } from "../../types";
import { convertDay, convertToCelcius } from "../../util";
import "./ForecastCard.scss";

const ForecastCard = ({ forecast, degrees }: IForecastItem) => {
  return (
    <div className="forecast-card">
      <div className="day">{convertDay(forecast?.dt)}</div>
      <div className="forecast-icon">
        <img
          src={`http://openweathermap.org/img/wn/${forecast?.weather[0].icon}@2x.png`}
          alt="forecast icon"
        />
      </div>
      <div className="sky">{forecast?.weather[0].main}</div>
      <div className="temperatures">
        <span>
          {degrees
            ? forecast?.temp.min.toFixed(0)
            : convertToCelcius(forecast?.temp.min.toFixed(0))}
          <sup>&deg;</sup> /{" "}
        </span>

        <span>
          {degrees
            ? forecast?.temp.max.toFixed(0)
            : convertToCelcius(forecast?.temp.max.toFixed(0))}
          <sup>&deg;</sup>
        </span>
      </div>
    </div>
  );
};

export default ForecastCard;
