import axios from "axios";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&imperial&appid=${process.env.REACT_APP_API}`;

  const searchLocation = (event) => {
    if (event.key == "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  // const api='lfghj'
  console.log();
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="  Enter Location....  "
          type="text"
        />
      </div>

      {data.name != undefined && (
        <div className="container">
          <div className="top">
            <div className="lacation">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}</p>
              ) : null}

              <p>feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()}%</p>
              ) : null}

              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? (
                <p className="bold">{data.wind.speed.toFixed()}MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
