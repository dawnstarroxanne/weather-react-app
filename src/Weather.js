import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h3>Partly Cloudy</h3>
      <ul>
        <li>
          Humidity: 60<span id="humidity"></span>%
        </li>
        <li>
          Wind: 14<span id="wind"></span>km/h
        </li>
      </ul>
    </div>
  );
}
