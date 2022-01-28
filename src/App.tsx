import React, { useState, useEffect } from "react";
import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
import Search from "./components/Search/Search";
import WeekForecast from "./components/WeekForecast/WeekForecast";
import { fetchWeather } from "./api";
import { IWeather } from "./types";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather);
  console.log(weather);

  // useEffect(() => {
  //   fetchWeather().then((result) => setWeather(result));
  // }, []);

  return (
    <div className="App">
      <div>Type Weather</div>
      <Search />
      <CurrentForecast weather={weather} />
      <WeekForecast />
    </div>
  );
};

export default App;
