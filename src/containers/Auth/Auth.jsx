import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Input from "../../components/UI/Input/Input";
import Submit from "../../components/UI/Submit/Submit";
import MobileHeaderAuth from "../../components/Auth/MobileHeaderAuth/MobileHeaderAuth";
import WhoAreYou from "../../components/Auth/WhoAreYou/WhoAreYou";
import InfoUsers from "../../components/Auth/InfoUsers/InfoUsers";

class Auth extends Component {
  state = {
    controls: {
      email: {
        label: "Email",
        elementType: "input",
        type: "email",
        placeholder: "Your Email",
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        label: "Password",
        elementType: "input",
        type: "password",
        placeholder: "Password",
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  };

  // checkValidity(value, rules) {
  //   let isValid = true;

  //   if (rules.required) {
  //     isValid = value.trim() !== "" && isValid;
  //   }

  //   if (rules.minLength) {
  //     isValid = value.length >= rules.minLength && isValid;
  //   }

  //   if (rules.maxLength) {
  //     isValid = value.length <= rules.maxLength && isValid;
  //   }

  //   return isValid;
  // }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        // valid: this.checkValidity(
        //   event.target.value,
        //   this.state.controls[controlName].validation
        // ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    //TODO: MAKE VALIDATION
    this.props.auth(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
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
          id={formElement.id}
          title={formElement.config.label}
          type={formElement.config.elementType}
          value={formElement.config.value}
          placeholder={formElement.config.placeholder}
          handleChange={event =>
            this.inputChangedHandler(event, formElement.id)
          }
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

    return (
      <div className="container">
        {authRedirect}
        {errorMessage}
        <MobileHeaderAuth />
        <div className="row">
          <WhoAreYou />
          <div className="col">
            <form onSubmit={this.submitHandler}>
              {form}
              <Submit />
            </form>
          </div>
        </div>
        <InfoUsers />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // auth: (email, password) => dispatch(actions.auth(email, password))
    
    auth: (email, password) => dispatch(actions.authStart(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
