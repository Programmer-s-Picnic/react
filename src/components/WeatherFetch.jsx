import { useState } from "react";

function WeatherFetch() {
    let [x ,setX]= useState("");
    
  function fetchWeather() {
    const appid = "4a1f8a61b74546825af1e0be106e797b";
    const city = "Varanasi";

    const url =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?q=${city}&appid=${appid}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setX(JSON.stringify(data)))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>Weather Fetch Example</h1>
      <p>{x}</p>
      <button onClick={fetchWeather}>Fetch Varanasi Weather</button>
    </div>
  );


fetchWeather();



}

export default WeatherFetch;