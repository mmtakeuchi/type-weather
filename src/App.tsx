import React, { useState, useEffect } from "react";
import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
import Search from "./components/Search/Search";
import WeekForecast from "./components/WeekForecast/WeekForecast";
import { fetchWeather, fetchForecast, fetchData } from "./api";
import { IForecast, IWeather } from "./types";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState<IWeather>();
  const [forecasts, setForecasts] = useState<IForecast[] | undefined>(
    undefined
  );
  const [query, setQuery] = useState("phoenix");

  console.log("weather", weather);
  console.log("forecasts", forecasts);

  const handleQuery = (input: string) => {
    setQuery(input);
  };

  useEffect(() => {
    fetchData(query)
      .then((data: any) => {
        setWeather(data[0]);
        setForecasts(data[1]);
      })
      .catch((error) => console.log(error));
  }, [query]);

  return (
    <div className="App">
      <div className="main">
        <div>Type Weather</div>
        <Search handleQuery={handleQuery} />
        <CurrentForecast forecast={weather} />
        <WeekForecast forecasts={forecasts} />
      </div>
    </div>
  );
};

export default App;
