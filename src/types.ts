export interface IWeather {
  name: string;
  dt: number;
  timezone: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export interface IWeatherItem {
  forecast?: IWeather;
  isLoading: boolean;
  error: string;
}

export interface IForecast {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface IForecastItem {
  forecast?: IForecast;
}

export interface IForecastItems {
  forecasts?: IForecast[];
  isLoading: boolean;
  error: string;
}

export interface ISearch {
  handleQuery: (input: string) => void;
}
