import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city: string) => {
  const response = await axios
    .get(
      `${baseUrl}/weather?q=phoenix&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return response;
};

export const fetchForecast = async (city: string) => {
  const response = await axios
    .get(
      `${baseUrl}/forecast?q=Phoenix&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) =>
      response.data.list.filter((date: any) => date.dt_txt.includes("21:00"))
    )
    .catch((error) => console.log(error));

  return response;
};

export const fetchData = async (city: string) => {
  try {
    const data = await Promise.all([fetchWeather(city), fetchForecast(city)]);

    return data;
  } catch (error) {
    console.log(error);
  }
};
