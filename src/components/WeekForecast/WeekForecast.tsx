import React from "react";
import ForecastCard from "../ForecastCard/ForecastCard";
import { IForecastItems } from "../../types";
import "./WeekForecast.scss";

const WeekForecast = ({ forecasts }: IForecastItems) => {
  return (
    <div className="forecast-container">
      <div className="header">Week Forecast</div>
      <div className="forecast-list">
        {[1, 2, 3, 4, 5].map((num, i) => (
          <ForecastCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
