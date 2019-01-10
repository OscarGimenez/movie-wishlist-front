import React from "react";

import classes from "./Hero.module.scss";

const hero = props => {
  return (
    <div className={classes.Hero}>
      <div className={classes.Image}>
        <img src="/img/hero.png" alt="" />
      </div>
      <div className={classes.Text}>
        <h1><i className="fas fa-film"></i> - Your Movie Wishlist</h1>
        <h2>This catalog is awesome!</h2>
      </div>
    </div>
  );
};

export default hero;
