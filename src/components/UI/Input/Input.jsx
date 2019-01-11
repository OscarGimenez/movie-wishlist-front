import React from "react";

import classes from "./Input.module.scss";

const input = props => {
  const labelClasses = [classes.Label, "col-sm-2", "col-form-label"];

  return (
    <div className="form-group">
      <label htmlFor={props.name} className={labelClasses.join(" ")}>
        {props.title}
      </label>
      <div className="input-group">
        <input
          className="form-control"
          id={props.id}
          name={props.title}
          type={props.type}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default input;
