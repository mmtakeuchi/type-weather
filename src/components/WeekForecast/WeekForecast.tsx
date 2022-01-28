import React from "react";
import "./WeekForecast.scss";

type Props = {};

const WeekForecast = (props: Props) => {
  return (
    <div className="forecast-container">
      <div className="header">Week Forecast</div>
      <div className="forecast-list">
        {[1, 2, 3, 4, 5].map((num, i) => (
          <div key={i} className="forecast-item">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekForecast;
