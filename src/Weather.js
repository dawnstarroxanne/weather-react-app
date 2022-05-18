import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="Form">
        <form id="search-form" className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter city"
                className="form-control"
                id="city-input"
                autocomplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
      <h1>Lisbon</h1>
      <div className="Date">
        last updated: 15:30 <span id="date">Fri 22 April</span>
      </div>
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
