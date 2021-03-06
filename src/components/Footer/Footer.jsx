import React from "react";

import classes from "./Footer.module.scss";

const footer = props => {
  let footerClasses = [classes.Footer, "page-footer", "font-small blue"];
  return (
    <footer className={footerClasses.join(" ")}>
      <div className="footer-copyright text-center py-3">
        Óscar Giménez Aldabas [2019]. React + Redux + NodeJS + Express +
        Firebase + Google Cloud Platform.
      </div>
    </footer>
  );
};

export default footer;
