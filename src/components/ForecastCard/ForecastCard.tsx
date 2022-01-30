import React from "react";
import { convertDay } from "../../util";
import "./ForecastCard.scss";

type Props = {};

const ForecastCard = (props: Props) => {
  return (
    <div className="forecast-card">
      <div className="day">Day</div>
      <div className="forecast-icon">
        <img
          src=" http://openweathermap.org/img/wn/10d@2x.png"
          alt="forecast icon"
        />
      </div>
      <div className="sky">clear sky</div>
      <div className="temperatures">
        <span>
          68<sup>&deg;</sup> /{" "}
        </span>

        <span>
          80<sup>&deg;</sup>
        </span>
      </div>
    </div>
  );
};

export default ForecastCard;
