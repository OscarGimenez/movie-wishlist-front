import React, { Component } from "react";

import Card from "../../components/Card/Card";

import classes from "./Wishlist.module.scss";

export default class Wishlist extends Component {
  render() {
    return (
      <>
        <h1 className={classes.Wishlist}>My wishlist</h1>
        <div className="container">
          <div className="card-columns">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </>
    );
  }
}
