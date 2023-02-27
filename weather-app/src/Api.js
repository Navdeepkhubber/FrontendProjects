import { useState } from "react";

const api = {
  key: "API_KEY",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const useWeatherData = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetchWeatherData(query)
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const fetchWeatherData = (query) => {
    return fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .catch((error) => console.error(error));
  };

  return { query, setQuery, weather, search };
};
