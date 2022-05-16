import "./App.css";
import React from "react";

import Form from "./Form";
import City from "./City";
import Date from "./Date";
import Temp from "./Temp";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <Form />
      <City />
      <Date />
      <Temp />
      <div class="col-6">
        <Weather />
      </div>
      <footer>
        Coded by
        <a
          href="https://github.com/dawnstarroxanne/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dawn Roxanne
        </a>
      </footer>
    </div>
  );
}
