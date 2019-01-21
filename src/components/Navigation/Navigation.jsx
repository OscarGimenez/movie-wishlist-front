import React from "react";

import classes from "./Navigation.module.scss";

import Logo from "./Logo/Logo";
import Toggler from "./Toggler/Toggler";
import TextLink from "./TextLink/TextLink";
import Search from "./Search/Search";

const navigation = props => {
  let navClasses = [
    classes.Navigation,
    "navbar",
    "navbar-expand-md",
    "navbar-light",
    "bg-light"
  ];

  let authArea = <TextLink link="/login">Log in</TextLink>;
  if (props.isAuthenticated) {
    authArea = (
      <>
        <TextLink link="/wishlist">My list</TextLink>
        <TextLink link="/logout">Logout</TextLink>
      </>
    );
  }
  //TODO: Search input
  return (
    <>
      <nav className={navClasses.join(" ")}>
        <Logo />
        <Toggler />
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <TextLink link="/">Movies</TextLink>
            {authArea}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navigation;
