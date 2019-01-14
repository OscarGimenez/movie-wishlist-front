import React, { Component } from "react";
import "./Layout.scss";

import { connect } from "react-redux";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <Navigation isAuthenticated={this.props.isAuthenticated} />
        </header>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
