import React from "react";

export default function Form() {
  return (
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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
