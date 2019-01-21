import React from "react";

import classes from "./Toggler.module.scss";

const toggler = props => {
  let burgerClasses = [classes.BurgerMenu, "dropdown-menu"];

  if (props.burgerMenuDeployed) {
    burgerClasses = [classes.BurgerMenu, "dropdown-menu", "show"];
  }

  return (
    <div className="ml-auto">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={props.burgerMenuHandler}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={burgerClasses.join(" ")}>{props.menuLinks}</div>
    </div>
  );
};

export default toggler;
