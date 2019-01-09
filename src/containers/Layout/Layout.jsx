import React, { Component } from "react";
import "./Layout.scss";

import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <Navigation />
        </header>
        <div className="container">
          <div className="card-deck">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
