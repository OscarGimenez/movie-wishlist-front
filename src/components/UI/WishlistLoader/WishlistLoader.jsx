import React from "react";

import Loader from "react-loader-spinner";
export default class App extends React.Component {
  render() {
    return <Loader type="Hearts" color="#c82333" height={45} width={45} />;
  }
}
