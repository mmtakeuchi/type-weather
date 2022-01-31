import React, { useState, useEffect } from "react";
import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import WeekForecast from "./components/WeekForecast/WeekForecast";
import { fetchData } from "./api";
import { IForecast, IWeather } from "./types";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState<IWeather | undefined>(undefined);
  const [forecasts, setForecasts] = useState<IForecast[] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [degrees, setDegrees] = useState(true);
  console.log(degrees);

  const handleQuery = (input: string) => {
    setQuery(input);
  };

  const handleToggleSwitch = () => {
    setDegrees(!degrees);
  };

  const handleFetchData = (query: string) => {
    if (query) {
      fetchData(query)
        .then((data: any) => {
          if (data[0].status === 200) {
            setWeather(data[0].response);
            setForecasts(data[1].response);
            setError("");
            setIsLoading(false);
          } else {
            setError(data[0].response);
            setIsLoading(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  useEffect(() => handleFetchData(query), [query, isLoading]);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Search handleQuery={handleQuery} />
        {!isLoading && (
          <>
            <CurrentForecast
              forecast={weather}
              isLoading={isLoading}
              error={error}
              degrees={degrees}
              handleToggle={handleToggleSwitch}
            />
            <WeekForecast
              forecasts={forecasts}
              isLoading={isLoading}
              error={error}
              degrees={degrees}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
