import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          Coded by -
          <a
            href="https://github.com/dawnstarroxanne/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dawn Roxanne
          </a>
        </footer>
      </div>
    </div>
  );
}
