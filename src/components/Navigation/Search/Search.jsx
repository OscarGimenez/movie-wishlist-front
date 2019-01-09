import React, { Component } from "react";

import classes from "./Search.module.scss";

export default class Search extends Component {
  render() {
    let inputClasses = [classes.Input, "form-control", "mr-sm-2"];
    let buttonClasses = [classes.Button, "btn", "btn-outline-info", "my-2", "my-sm-0"];

    return (
      <form className="form-inline">
        <input
          className={inputClasses.join(" ")}
          type="search"
          placeholder="Search movie..."
          aria-label="Search"
        />
        <button className={buttonClasses.join(" ")} type="submit">
          Search
        </button>
      </form>
    );
  }
}
