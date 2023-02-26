import React from "react";
import { dateBuilder } from "./date";
import { useWeatherData } from "./Api";

function App() {

  const { query, setQuery, weather, search } = useWeatherData();


  return (
    <div
  className={ typeof weather.main != "undefined"
    ? (weather.weather[0].main === "Rain"
        ? "app rain"
        : weather.main.temp > 16
          ? "app warm"
          : "app")
    : "app"
  }
>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}ºc</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
