import React, { Component } from "react";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state; 
    if(password !== confirmPassword){
        alert('password don\'t match');
        return;
    }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        createUserProfileDocument(user, {displayName});
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
    }catch(error){
        console.log(error);
    }
    
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your Email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            label="Display Name"
            value={displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            label="Email"
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            label="Password"
            value={password}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            value={confirmPassword}
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
