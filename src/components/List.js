import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
//import UserListContainer

export default class List extends Component {
  render() {
    return (
      <div>
        {this.props.loggedIn === "" ? (
          <div>
            Log in: <LoginFormContainer></LoginFormContainer>
            Sign up : <SignupFormContainer></SignupFormContainer>
          </div>
        ) : (
          <div>
            {" "}
            You are logged in<br></br> Post a new image:
            <CreateFormContainer></CreateFormContainer>
            {this.props.images.map(image => {
              return (
                <div key={image.id}>
                  <h3>{image.title}</h3>
                  <img src={image.url}></img>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
