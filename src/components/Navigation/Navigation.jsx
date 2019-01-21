import React from "react";

import classes from "./Navigation.module.scss";

import Logo from "./Logo/Logo";
import Toggler from "./Toggler/Toggler";
import TextLink from "./TextLink/TextLink";

const navigation = props => {
  let navClasses = [
    classes.Navigation,
    "navbar",
    "navbar-expand-md",
    "navbar-light",
    "bg-light"
  ];

  let menuLinks = (
    <>
      <TextLink close={props.burgerMenuCloserHandler} link="/">
        Movies
      </TextLink>
      <TextLink close={props.burgerMenuCloserHandler} link="/login">
        Log in
      </TextLink>
    </>
  );
  if (props.isAuthenticated) {
    menuLinks = (
      <>
        <TextLink close={props.burgerMenuCloserHandler} link="/">
          Movies
        </TextLink>
        <TextLink close={props.burgerMenuCloserHandler} link="/wishlist">
          My list
        </TextLink>
        <TextLink close={props.burgerMenuCloserHandler} link="/logout">
          Logout
        </TextLink>
      </>
    );
  }

  return (
    <>
      <nav className={navClasses.join(" ")}>
        <Logo />
        <Toggler
          burgerMenuHandler={props.burgerMenuHandler}
          burgerMenuDeployed={props.burgerMenuDeployed}
          menuLinks={menuLinks}
        />
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav mr-auto">{menuLinks}</ul>
        </div>
      </nav>
    </>
  );
};

export default navigation;
