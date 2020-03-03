import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    console.log(this.props, "EMAIL PROPS");
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          onChange={this.props.onChange}
          name="email"
          value={this.props.values.email}
          type="text"
        />
        <input
          onChange={this.props.onChange}
          name="password"
          value={this.props.values.password}
          type="text"
        />
        <button type="submit">SIGN UP</button>
      </form>
    );
  }
}
