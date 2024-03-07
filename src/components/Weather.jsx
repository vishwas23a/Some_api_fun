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
  console.log(window.location.href)

  async function getData(data) {
    const promise = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}?unitGroup=metric&include=current&key=JBZZ8RA3X5L97WTVYS8PQ3RWP&contentType=json
      `
    );
    const result = await promise.json();
    return result;
  }

  const handleClick = async () => {
    const input = document.getElementById("data");

    const value = input.value;
    const response = await getData(value);
console.log(response.currentConditions.conditions);
    setWeather({
      locationName: response.address,
      locationCountry: response.resolvedAddress,
      condition: response.currentConditions.conditions,
      temp:response.currentConditions.temp,
      wind: response.currentConditions.windspeed,
      localTime: response.currentConditions.datetime,
      humidity: response.currentConditions.humidity,
      airQuality: response.currentConditions.visibility,
    });

    const conditionCode = response.currentConditions.conditions;
    switch (conditionCode) {
      case "Clear": 
        icon.src = sunny;
        break;
      case "Rain,Partially cloudy": // Moderate or heavy rain shower
      case "Rain":

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
      case "Partially cloudy": // Partly cloudy
      case "Overcast":

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
              <p id="city">{weather.locationCountry} </p>
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
              Visibility <span id="air">{weather.airQuality} km</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
