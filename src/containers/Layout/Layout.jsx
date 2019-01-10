import React, { Component } from "react";
import "./Layout.scss";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <Navigation />
        </header>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
