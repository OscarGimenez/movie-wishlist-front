import React from "react";

import classes from "./Logo.module.scss";

const logo = props => {
  let logoClasses = [classes.Logo, "navbar-brand"];

  return (
    <a className={logoClasses.join(" ")} href="#">
      <img src="logo.png" alt="" />
    </a>
  );
};

export default logo;
