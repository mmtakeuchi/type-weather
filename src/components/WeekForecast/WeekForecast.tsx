import React from "react";
import ForecastCard from "../ForecastCard/ForecastCard";
import { IForecastItems } from "../../types";
import "./WeekForecast.scss";

const WeekForecast = ({ forecasts, isLoading, error }: IForecastItems) => {
  if (error) return <></>;
  return (
    <div className="forecast-container">
      <div className="header">Week Forecast</div>
      <div className="forecast-list">
        {forecasts?.map((forecast) => (
          <ForecastCard key={forecast.dt} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
