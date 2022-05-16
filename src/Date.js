import React from "react";

export default function Date() {
  return (
    <div className="Date">
      <ul>
        <li>
          last updated: 15:30 <span id="date">Fri 22 April</span>
        </li>
        <li id="description"></li>
      </ul>
    </div>
  );
}
