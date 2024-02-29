import React, { useState } from "react";
import "./Weather.css";
import sunny from "../components/sun.png";
import rain from "../components/rain.png";
import thunder from "../components/thunder.png";
import mist from "../components/fog.png";
import cloud from "../components/cloudy-day.png";


function Weather() {
  const [weather, setWeather] = useState({
    locationName: "Na",
    locationCountry: "Na",
    condition: "Na",
    temp: "Na",
    wind: "Na",
    localTime: "Na",
    humidity: "Na",
    airQuality: "Na",
  });
  async function getData(data) {
    const promise = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=e5f69afc5ec94bf894962800242002&q=${data}&aqi=yes`
    );
    const result = await promise.json();
    return result;
  }
  const cityCondition = document.getElementById("condition");

  const handleClick = async () => {
    const input = document.getElementById("data");

    const value = input.value;
    const response = await getData(value);
    console.log(response);

    setWeather({
      locationName: response.location.name,
      locationCountry: response.location.country,
      condition: response.current.condition.text,
      temp:response.current.temp_c ,
      wind: response.current.wind_kph,
      localTime: response.location.localtime,
      humidity: response.current.humidity,
      airQuality: response.current.air_quality.o3,
    });

    const conditionCode = response.current.condition.code;
    switch (conditionCode) {
      case 1000: // Sunny
        icon.src = sunny;
        break;
      case 1063: // Patchy rain possible
      case 1186: // Moderate or heavy rain shower
      case 1183:
        icon.src = rain;
        break;
      case 1087: // Thundery outbreaks possible
        icon.src = thunder;
        break;
      case 1030:
      case 1135: // Fog
      case 1147: // Freezing fog
        icon.src = mist;
        break;
      case 1003: // Partly cloudy
      case 1006: // Overcast
      case 1009: // Cloudy
        icon.src = cloud;
        break;
      default:
        icon.src = ""; // Default icon
    }
  };

  return (
    <div className="cont1">
      <div className="contdata">
        <div className="search">
          <input id="data" type="text" placeholder="Place Name" />
          <button id="but" onClick={handleClick}>
            Search
          </button>
        </div>
        <div className="result">
          <div className="sec1">
            <div className="icon">
              <img id="icon"  src={sunny} />
            </div>
            <div className="data1">
              <p id="condition"> {weather.condition}</p>
              <p id="temp">{weather.temp}°C</p>
              <p id="city">{weather.locationName},{weather.locationCountry} </p>
            </div>
          </div>
          <div className="sec2">
            <p>
              Wind <span id="wind">{weather.wind} kph</span>
            </p>
            <p>
              Time <span id="time">{weather.localTime}</span>
            </p>
            <p>
              Humidity <span id="humidity">{weather.humidity}%</span>
            </p>
            <p>
              Air Quality <span id="air">{weather.airQuality}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
