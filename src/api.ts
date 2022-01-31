import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city: string) => {
  const response = await axios
    .get(
      `${baseUrl}/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => {
      return { status: 200, response: response.data };
    })
    .catch((error) => {
      return { status: 404, response: error.response.data.message };
    });

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

export const fetchLocation = async (city: string) => {
  const response = await axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => response.data[0]);

  if (response !== undefined) {
    return { status: 200, response };
  }

  return { status: 404, response: `Location cannot be found.` };
};

export const fetchWeatherData = async (city: string) => {
  const coords = await fetchLocation(city);

  if (coords.status === 200) {
    const response = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords?.response?.lat}&lon=${coords?.response?.lon}&exclude=minutely,hourly,current&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((resp) => resp.data.daily)
      .catch((error) => error);

    return { status: 200, response };
  } else {
    return coords;
  }
};

export const fetchData = async (city: string) => {
  const data = await Promise.all([fetchWeather(city), fetchWeatherData(city)]);

  data.forEach((city) => {
    if (city.status !== 200) {
      console.log("400", city);
      return { status: 404, response: city.response };
    }
    return city;
  });

  return data;
};
