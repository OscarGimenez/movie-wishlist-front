import React from "react";
import { NavLink } from "react-router-dom";

const textLink = props => {
  return (
    <li className="nav-item active">
      <NavLink
        exact
        className="nav-link"
        activeClassName="active"
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default textLink;
