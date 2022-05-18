import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Lisbon</h1>
      <ul>
        <li>wednesday 15:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">25ºC</div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: 60<span id="humidity"></span>%
            </li>
            <li>
              Wind: 14<span id="wind"></span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
