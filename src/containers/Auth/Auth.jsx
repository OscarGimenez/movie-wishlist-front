import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import MobileHeaderAuth from "../../components/Auth/MobileHeaderAuth/MobileHeaderAuth";
import WhoAreYou from "../../components/Auth/WhoAreYou/WhoAreYou";
import InfoUsers from "../../components/Auth/InfoUsers/InfoUsers";

import classes from "./Auth.module.scss";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignUp: true
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("Submitted");
  };

  render() {
    const formElementsArray = [];
    for (const key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = formElementsArray.map(formElement => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          change={event => this.inputChangedHandler(event, formElement.id)}
        />
      );
    });

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    const labelClasses = [classes.Label, "col-sm-2", "col-form-label"];

    return (
      <div className="container">
        {authRedirect}
        {errorMessage}
        <MobileHeaderAuth />
        <div className="row">
          <WhoAreYou />
          <div className="col">
            <form onSubmit={this.submitHandler}>
              <div className="col-auto my-1">
                <label htmlFor="inputEmail" className={labelClasses.join(" ")}>
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-auto my-1">
                <label
                  htmlFor="inputPassword"
                  className={labelClasses.join(" ")}
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <InfoUsers />
      </div>
    );
  }
}

export default Auth;