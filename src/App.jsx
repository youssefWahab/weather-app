import React, { useState } from "react";
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const fetchWeather = async () => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
  const data = await response.json();
  setWeather(data);
  };
  return (
  <div>
  <h1>Weather App</h1>
  <input
  type="text" placeholder="Enter city" value={city} onChange={(e) =>
  setCity(e.target.value)} />
  <button onClick={fetchWeather}>Get Weather</button>
  {weather && <p>Temperature: {weather.main.temp}°K</p>} </div>
);};
export default Weather;