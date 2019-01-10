import React from "react";

import classes from "./WhoAreYou.module.scss";

const whoAreYou = props => {
  const whoAreYouClasses = [classes.CardBody, "col-6"];
  return (
    <div className={whoAreYouClasses.join(" ")}>
      <div className="card-body">
        <img
          id="img_person"
          alt="Auth"
          className={classes.Person}
          src="img/person.svg"
        />
        <h2 id="who_message" className={classes.HeaderAuth}>
          Who are you ?
        </h2>
      </div>
    </div>
  );
};

export default whoAreYou;
