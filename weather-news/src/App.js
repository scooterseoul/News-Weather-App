import React, { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

function App() {
  const [data, setData] = useState({ name: "Timbuktu" });
  const [location, setLocation] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY_W;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <header>
        <p className="icons">NEWS &#9730; WEATHER </p>
        {/* <p className="windyweather">&#9728;&#9730;&#9729;</p> */}
        <div
          className="email"
          onClick={() => (window.location = "mailto: scooterseoul@gmail.com")}
        >
          @
        </div>
      </header>
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="place">{data.name}</p>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : "Sunny"}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : <h1>28°C</h1>}
          </div>
          <div className="minmaxtemp">
            {data.main ? (
              <h3>Min: {data.main.temp_min.toFixed()}°C</h3>
            ) : (
              <h3>Min: 20°C</h3>
            )}
            {data.main ? (
              <h3>Max: {data.main.temp_max.toFixed()}°C</h3>
            ) : (
              <h3>Max: 28°C</h3>
            )}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              <p>Feels</p>
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : (
                <p>26°C</p>
              )}
            </div>
            <br></br>
            <div className="humidity">
              <p>&#128167;</p>
              {data.main ? (
                <p className="bold">{data.main.humidity}%</p>
              ) : (
                <p>9%</p>
              )}
            </div>
            <br></br>
            <div className="wind">
              <p>&#128168;</p>
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()}km/h</p>
              ) : (
                <p>5km/h</p>
              )}
            </div>
          </div>
        )}

        <div className="scroll-container">
          <div className="headlines">Headlines</div>
          <div className="scroll">
            <br></br>
            <NewsList className="news" />
          </div>
        </div>
      </div>
      <footer>
        <p className="alex">C. Alexander</p>
        {/* <p className="windyweather">&#9728;&#9730;&#9729;</p> */}
        <div
          className="coffeeemail"
          onClick={() =>
            (window.location = "mailto: coffeencomputer@gmail.com")
          }
        >
          coffeencomputer@gmail.com
        </div>
      </footer>
    </div>
  );
}

export default App;
