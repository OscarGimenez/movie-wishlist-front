import React from "react";

const submit = props => {
  return (
    <div className="row">
      <div className="col">
        <button type="submit" className="btn btn-primary btn-lg btn-block mt-4 mb-2">
          Log in <i className="fas fa-sign-in-alt" />
        </button>
      </div>
    </div>
  );
};

export default submit;
