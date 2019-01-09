import React from "react";

const textLink = props => {
  return (
    <li className="nav-item active">
    <a className="nav-link" href="#">
      {props.title}
    </a>
  </li>
  );
};

export default textLink;