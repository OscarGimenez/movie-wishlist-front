import React from "react";

import classes from "./InfoUsers.module.scss";

const infoUsers = props => {
  return (
    <div className="container">
      <div className="row">
        <div className={classes.InfoUsers}>
          <div className="alert alert-warning" role="alert">
            <i className="fas fa-long-arrow-alt-down" /> Cheatsheet!! You can
            use these users <i className="fas fa-long-arrow-alt-down" />
          </div>
          <table className="mt-2 table table-striped table-condensed">
            <thead className="thead-light">
              <tr>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>spiderman@gmail.com</td>
                <td>stickywebs</td>
              </tr>
              <tr>
                <td>ironman@gmail.com</td>
                <td>powerbeams</td>
              </tr>
              <tr>
                <td>superman@gmail.com</td>
                <td>flysohigh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default infoUsers;
