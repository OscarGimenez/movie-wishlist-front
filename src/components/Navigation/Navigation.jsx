import React, { Component } from "react";

import classes from "./Navigation.module.scss";

import Logo from "./Logo/Logo";
import Toggler from "./Toggler/Toggler";
import TextLink from "./TextLink/TextLink";
import Search from "./Search/Search";

export default class Navigation extends Component {
  render() {
    let navClasses = [
      classes.Navigation,
      "navbar",
      "navbar-expand-md",
      "navbar-light",
      "bg-light"
    ];
    return (
      <>
        <nav className={navClasses.join(" ")}>
          <Logo />
          <Toggler />
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav mr-auto">              
              <TextLink link="/">Movies</TextLink>
              <TextLink link="/wishlist">My list</TextLink>
              <TextLink link="/login">Log in</TextLink>
            </ul>
            <ul className="navbar-nav ml-auto">
              <Search />
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
