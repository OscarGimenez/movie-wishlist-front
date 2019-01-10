import React from "react";

import classes from "./MobileHeaderAuth.module.scss";

const mobileHeaderAuth = (props) => {
    const mobileHeaderClasses = [classes.MobileHeaderAuth, "row"];
    return (
        <div className={mobileHeaderClasses.join(" ")}>
          <div className="col">
            <h2 className={classes.HeaderTextAuth}>
              Who are you ?
            </h2>
          </div>
        </div>
    )
}

export default mobileHeaderAuth;