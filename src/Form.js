import React from "react";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form" class="mb-4">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="enter city"
              class="form-control"
              id="city-input"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="search" class="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
}
