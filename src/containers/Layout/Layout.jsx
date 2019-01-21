import React, { Component } from "react";
import "./Layout.scss";

import { connect } from "react-redux";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    burgerMenuDeployed: false
  };

  burgerMenuCloserHandler = () => {
    this.setState({ burgerMenuDeployed: false });
  };

  burgerMenuToggleHandler = () => {
    this.setState(prevState => {
      return { burgerMenuDeployed: !prevState.burgerMenuDeployed };
    });
  };

  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <Navigation
            isAuthenticated={this.props.isAuthenticated}
            burgerMenuHandler={this.burgerMenuToggleHandler}
            burgerMenuCloserHandler={this.burgerMenuCloserHandler}
            burgerMenuDeployed={this.state.burgerMenuDeployed}
          />
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
