import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            {""}
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              {" "}
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
