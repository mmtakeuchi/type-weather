import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async () => {
  const response = await axios
    .get(
      `${baseUrl}/weather?q=phoenix&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return response;
};

export const fetchForecast = async () => {
  const response = await axios
    .get(
      `${baseUrl}/forecast?q=Phoenix&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return response;
};
