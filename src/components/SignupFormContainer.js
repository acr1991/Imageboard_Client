import React from "react";
import { connect } from "react-redux";
import { createUser } from "../actions";
import SignupForm from "./SignupForm";
class SignupFormContainer extends React.Component {
  state = {
    email: "",
    password: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password
    });
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null, { createUser })(SignupFormContainer);
