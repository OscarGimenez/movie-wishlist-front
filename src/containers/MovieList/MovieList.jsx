import React, { Component } from "react";

import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";

export default class MovieList extends Component {
  render() {
    return (
      <>
        <Hero />
        <div className="container">
          <div className="card-columns">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </>
    );
  }
}
